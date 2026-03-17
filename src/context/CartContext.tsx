import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

export interface CartItem {
  /** Unique key: seriesId-colorSlug-length(-profile) */
  cartKey: string;
  seriesId: string;
  seriesName: string;
  colorName: string;
  colorSwatch: string;
  selectedLength: string;  // "305" | "366"
  lengthLabel: string;
  selectedProfile?: string; // "A" | "B" | "C" (Finishing Series only)
  quantity: number;
  pricePerPiece: number; // LKR
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { cartKey: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex((i) => i.cartKey === action.payload.cartKey);
      if (existingIndex >= 0) {
        const updated = [...state.items];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + action.payload.quantity,
        };
        return { ...state, items: updated, isOpen: true };
      }
      return { ...state, items: [...state.items, action.payload], isOpen: true };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.cartKey !== action.payload) };
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return { ...state, items: state.items.filter((i) => i.cartKey !== action.payload.cartKey) };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.cartKey === action.payload.cartKey ? { ...i, quantity: action.payload.quantity } : i
        ),
      };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

interface CartContextValue extends CartState {
  addItem: (item: CartItem) => void;
  removeItem: (cartKey: string) => void;
  updateQuantity: (cartKey: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  itemCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = 'ipanel-cart';

function loadCartItems(): CartItem[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: loadCartItems(),
    isOpen: false,
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // localStorage unavailable — silently continue
    }
  }, [state.items]);

  const value: CartContextValue = {
    ...state,
    addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item }),
    removeItem: (cartKey) => dispatch({ type: 'REMOVE_ITEM', payload: cartKey }),
    updateQuantity: (cartKey, quantity) =>
      dispatch({ type: 'UPDATE_QUANTITY', payload: { cartKey, quantity } }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    openCart: () => dispatch({ type: 'OPEN_CART' }),
    closeCart: () => dispatch({ type: 'CLOSE_CART' }),
    itemCount: state.items.reduce((sum, i) => sum + i.quantity, 0),
    subtotal: state.items.reduce((sum, i) => sum + i.quantity * i.pricePerPiece, 0),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

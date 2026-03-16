import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/shopProducts';

export function CartSidebar() {
  const { isOpen, closeCart, items, itemCount, subtotal, removeItem, updateQuantity } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-white z-50 flex flex-col shadow-[−20px_0_60px_rgba(0,0,0,0.12)] transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/6">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} className="text-brand-charcoal" />
            <h2 className="font-serif text-lg font-medium text-brand-charcoal">
              Your Order
            </h2>
            {itemCount > 0 && (
              <span className="bg-brand-charcoal text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-brand-surface transition-colors text-brand-muted hover:text-brand-charcoal"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-16">
              <ShoppingBag size={40} className="text-black/12" />
              <p className="text-brand-muted text-sm font-sans text-center">
                Your cart is empty.<br />
                <span className="text-brand-charcoal font-medium">Browse our collections</span> to get started.
              </p>
              <Link
                to="/products"
                onClick={closeCart}
                className="mt-2 px-6 py-2.5 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-wider font-bold hover:bg-black transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.cartKey}
                className="flex gap-4 p-4 rounded-2xl bg-brand-surface group hover:bg-brand-surface/80 transition-colors"
              >
                {/* Color swatch */}
                <div
                  className="w-14 h-14 rounded-xl flex-shrink-0 shadow-sm border border-black/8"
                  style={{ backgroundColor: item.colorSwatch }}
                />

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.12em] font-bold text-brand-muted mb-0.5">
                        {item.seriesName}
                      </p>
                      <p className="font-serif text-sm font-medium text-brand-charcoal leading-tight">
                        {item.colorName}
                      </p>
                      <p className="text-[10px] text-brand-muted mt-0.5 font-sans">
                        {item.lengthLabel}
                        {item.selectedProfile && ` · Profile ${item.selectedProfile}`}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.cartKey)}
                      className="p-1 rounded-lg hover:bg-red-50 text-brand-muted hover:text-red-500 transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100"
                      aria-label="Remove item"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Qty stepper */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                        className="w-7 h-7 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all text-brand-charcoal"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={11} />
                      </button>
                      <span className="text-sm font-bold text-brand-charcoal w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                        className="w-7 h-7 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all text-brand-charcoal"
                        aria-label="Increase quantity"
                      >
                        <Plus size={11} />
                      </button>
                    </div>

                    <p className="font-sans text-sm font-bold text-brand-charcoal">
                      {formatPrice(item.quantity * item.pricePerPiece)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-black/6 space-y-4 bg-white">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.12em] font-bold text-brand-muted">
                Subtotal ({itemCount} {itemCount === 1 ? 'piece' : 'pieces'})
              </span>
              <span className="font-serif text-xl font-medium text-brand-charcoal">
                {formatPrice(subtotal)}
              </span>
            </div>

            <p className="text-[10px] text-brand-muted leading-relaxed">
              Final pricing inclusive of applicable taxes. Delivery charges calculated at checkout.
            </p>

            {/* Checkout CTA */}
            <Link
              to="/checkout"
              onClick={closeCart}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-wider font-bold hover:bg-black transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
            >
              Proceed to Checkout
              <ArrowRight size={14} />
            </Link>

            <button
              onClick={closeCart}
              className="w-full py-2.5 rounded-full border border-black/10 text-[11px] uppercase tracking-wider font-bold text-brand-muted hover:text-brand-charcoal hover:border-black/20 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingBag, Plus, Minus, Trash2, ArrowRight, ChevronRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CartSidebar } from '../components/CartSidebar';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/shopProducts';

export function ShopCart() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      <Navbar />
      <CartSidebar />
      <div className="min-h-screen bg-brand-surface pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted mb-8">
            <Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link>
            <ChevronRight size={10} />
            <Link to="/products" className="hover:text-brand-charcoal transition-colors">Shop</Link>
            <ChevronRight size={10} />
            <span className="text-brand-charcoal">Cart</span>
          </nav>

          <h1 className="font-serif text-3xl text-brand-charcoal mb-10">
            Shopping Cart
            {items.length > 0 && (
              <span className="ml-3 text-[13px] font-sans font-normal text-brand-muted">
                ({items.length} item{items.length !== 1 ? 's' : ''})
              </span>
            )}
          </h1>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-16 border border-black/5 text-center"
            >
              <ShoppingBag size={40} className="text-brand-muted/30 mx-auto mb-4" />
              <h2 className="font-serif text-xl text-brand-charcoal mb-2">Your cart is empty</h2>
              <p className="text-brand-muted text-sm mb-8">Browse our panel collections to get started.</p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-brand-charcoal/90 transition-all"
              >
                Continue Shopping <ArrowRight size={13} />
              </Link>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-3">
                {items.map((item, i) => (
                  <motion.div
                    key={item.cartKey}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white rounded-2xl p-5 border border-black/5 flex items-center gap-5"
                  >
                    {/* Colour swatch */}
                    <div
                      className="w-14 h-14 rounded-xl border border-black/8 shrink-0"
                      style={{ backgroundColor: item.colorSwatch }}
                    />
                    <div className="flex-1">
                      <p className="font-serif text-base text-brand-charcoal">{item.colorName}</p>
                      <p className="text-[11px] text-brand-muted font-sans">
                        {item.seriesName} · {item.lengthLabel}
                      </p>
                      {item.selectedProfile && (
                        <p className="text-[10px] text-brand-muted font-sans">Profile {item.selectedProfile}</p>
                      )}
                    </div>

                    {/* Qty controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.cartKey, Math.max(1, item.quantity - 1))}
                        className="w-7 h-7 rounded-full border border-black/10 flex items-center justify-center text-brand-muted hover:border-brand-charcoal hover:text-brand-charcoal transition-all"
                      >
                        <Minus size={11} />
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-brand-charcoal">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                        className="w-7 h-7 rounded-full border border-black/10 flex items-center justify-center text-brand-muted hover:border-brand-charcoal hover:text-brand-charcoal transition-all"
                      >
                        <Plus size={11} />
                      </button>
                    </div>

                    <div className="text-right min-w-[90px]">
                      <p className="font-serif text-sm text-brand-charcoal">
                        {formatPrice(item.pricePerPiece * item.quantity)}
                      </p>
                      <p className="text-[10px] text-brand-muted">{formatPrice(item.pricePerPiece)} each</p>
                    </div>

                    <button
                      onClick={() => removeItem(item.cartKey)}
                      className="text-brand-muted hover:text-red-400 transition-colors p-1"
                    >
                      <Trash2 size={15} />
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Order Summary */}
              <div>
                <div className="bg-white rounded-3xl p-7 border border-black/5 sticky top-24">
                  <h2 className="font-serif text-xl text-brand-charcoal mb-5">Order Summary</h2>
                  <div className="space-y-3 text-sm mb-5">
                    <div className="flex justify-between text-brand-muted">
                      <span>Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-brand-muted">
                      <span>Shipping</span>
                      <span className="text-brand-charcoal text-xs">Calculated at checkout</span>
                    </div>
                    <div className="border-t border-black/5 pt-3 flex justify-between font-bold">
                      <span className="text-brand-charcoal">Total</span>
                      <span className="font-serif text-lg text-brand-charcoal">{formatPrice(subtotal)}</span>
                    </div>
                  </div>
                  <Link
                    to="/checkout"
                    className="block w-full text-center py-4 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-brand-charcoal/90 transition-all"
                  >
                    Proceed to Checkout
                  </Link>
                  <Link
                    to="/products"
                    className="block w-full text-center py-3 mt-3 text-[11px] uppercase tracking-[0.15em] font-bold text-brand-muted hover:text-brand-charcoal transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

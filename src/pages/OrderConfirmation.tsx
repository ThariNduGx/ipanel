import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle, ArrowRight, Loader2, Package } from 'lucide-react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { formatPrice } from '../data/shopProducts';

interface OrderItem {
  seriesName: string;
  colorName: string;
  lengthLabel: string;
  selectedProfile?: string;
  quantity: number;
  pricePerPiece: number;
  subtotal: number;
}

interface Order {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  notes: string;
  items: OrderItem[];
  total: number;
  status: string;
  createdAt: string;
}

export function OrderConfirmation() {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;
    fetch(`/api/orders/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Order not found');
        return res.json();
      })
      .then(setOrder)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="bg-brand-surface min-h-screen flex items-center justify-center">
        <Loader2 size={28} className="animate-spin text-brand-muted" />
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="bg-brand-surface min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-6 text-center">
          <p className="font-serif text-2xl text-brand-charcoal">Order not found</p>
          <p className="text-brand-muted text-sm">{error}</p>
          <Link
            to="/products"
            className="mt-4 px-6 py-3 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-wider font-bold hover:bg-black transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-surface min-h-screen">
      <Navbar />

      <div className="max-w-2xl mx-auto px-6 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={32} className="text-green-500" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-gold mb-2">
            Order Confirmed
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-brand-charcoal mb-3 leading-tight">
            Thank you, {order.customerName.split(' ')[0]}!
          </h1>
          <p className="text-brand-muted text-sm leading-relaxed">
            Your order has been received. Our team will reach out to confirm your order
            and arrange delivery.
          </p>
        </motion.div>

        {/* Order ID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl border border-black/5 p-5 mb-5 flex items-center justify-between"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.12em] font-bold text-brand-muted mb-1">
              Order Reference
            </p>
            <p className="font-mono text-sm font-bold text-brand-charcoal">{order.id}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.12em] font-bold text-brand-muted mb-1">
              Status
            </p>
            <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-wider border border-amber-200">
              {order.status}
            </span>
          </div>
        </motion.div>

        {/* Order items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white rounded-2xl border border-black/5 overflow-hidden mb-5"
        >
          <div className="px-5 py-4 border-b border-black/5 flex items-center gap-2">
            <Package size={14} className="text-brand-muted" />
            <h2 className="font-serif text-sm font-medium text-brand-charcoal">
              Items Ordered
            </h2>
          </div>
          <div className="divide-y divide-black/4">
            {order.items.map((item, i) => (
              <div key={i} className="px-5 py-4 flex justify-between items-start gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-wide font-bold text-brand-muted">
                    {item.seriesName}
                  </p>
                  <p className="text-sm font-medium text-brand-charcoal">{item.colorName}</p>
                  <p className="text-[10px] text-brand-muted mt-0.5">
                    {item.lengthLabel}
                    {item.selectedProfile && ` · Profile ${item.selectedProfile}`}
                    {' · '}{item.quantity} {item.quantity === 1 ? 'piece' : 'pieces'}
                  </p>
                </div>
                <p className="font-bold text-sm text-brand-charcoal whitespace-nowrap">
                  {formatPrice(item.subtotal)}
                </p>
              </div>
            ))}
          </div>
          <div className="px-5 py-4 border-t border-black/5 flex justify-between items-center bg-brand-surface/50">
            <span className="text-[11px] uppercase tracking-[0.12em] font-bold text-brand-muted">
              Order Total
            </span>
            <span className="font-serif text-xl font-medium text-brand-charcoal">
              {formatPrice(order.total)}
            </span>
          </div>
        </motion.div>

        {/* Delivery details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl border border-black/5 p-5 mb-8"
        >
          <h2 className="font-serif text-sm font-medium text-brand-charcoal mb-3">
            Delivery Details
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-[9px] uppercase tracking-wide font-bold text-brand-muted mb-0.5">Name</p>
              <p className="text-brand-charcoal font-sans">{order.customerName}</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-wide font-bold text-brand-muted mb-0.5">Phone</p>
              <p className="text-brand-charcoal font-sans">{order.phone}</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-wide font-bold text-brand-muted mb-0.5">Email</p>
              <p className="text-brand-charcoal font-sans">{order.email}</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-wide font-bold text-brand-muted mb-0.5">Province</p>
              <p className="text-brand-charcoal font-sans">{order.province}</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-[9px] uppercase tracking-wide font-bold text-brand-muted mb-0.5">Address</p>
              <p className="text-brand-charcoal font-sans">{order.address}, {order.city}</p>
            </div>
            {order.notes && (
              <div className="sm:col-span-2">
                <p className="text-[9px] uppercase tracking-wide font-bold text-brand-muted mb-0.5">Notes</p>
                <p className="text-brand-charcoal font-sans">{order.notes}</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Link
            to="/products"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-wider font-bold hover:bg-black transition-colors"
          >
            Continue Shopping
            <ArrowRight size={13} />
          </Link>
          <Link
            to="/"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full border border-black/10 text-[11px] uppercase tracking-wider font-bold text-brand-muted hover:text-brand-charcoal hover:border-black/20 transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

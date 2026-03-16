import { useState, FormEvent, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { CartSidebar } from '../components/CartSidebar';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/shopProducts';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  notes: string;
}

const INITIAL_FORM: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  province: '',
  notes: '',
};

const PROVINCES = [
  'Western', 'Central', 'Southern', 'Northern', 'Eastern',
  'North Western', 'North Central', 'Uva', 'Sabaragamuwa',
];

export function Checkout() {
  const navigate = useNavigate();
  const { items, subtotal, itemCount, clearCart } = useCart();
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!form.firstName.trim()) newErrors.firstName = 'Required';
    if (!form.lastName.trim()) newErrors.lastName = 'Required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Valid email required';
    if (!form.phone.trim() || !/^(\+94|0)[0-9]{9}$/.test(form.phone.replace(/\s/g, '')))
      newErrors.phone = 'Valid Sri Lankan number required';
    if (!form.address.trim()) newErrors.address = 'Required';
    if (!form.city.trim()) newErrors.city = 'Required';
    if (!form.province) newErrors.province = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setApiError('');

    try {
      const payload = {
        customerName: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        phone: form.phone,
        address: form.address,
        city: form.city,
        province: form.province,
        notes: form.notes,
        items: items.map((i) => ({
          seriesId: i.seriesId,
          seriesName: i.seriesName,
          colorName: i.colorName,
          selectedLength: i.selectedLength,
          lengthLabel: i.lengthLabel,
          selectedProfile: i.selectedProfile,
          quantity: i.quantity,
          pricePerPiece: i.pricePerPiece,
          subtotal: i.quantity * i.pricePerPiece,
        })),
        total: subtotal,
      };

      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Failed to place order. Please try again.');
      }

      const { id } = await res.json();
      clearCart();
      navigate(`/shop/order-confirmation/${id}`);
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setSubmitting(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="bg-brand-surface min-h-screen">
        <Navbar />
        <CartSidebar />
        <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-6 text-center">
          <p className="font-serif text-2xl text-brand-charcoal">Your cart is empty</p>
          <p className="text-brand-muted text-sm">Add products before proceeding to checkout.</p>
          <Link
            to="/shop"
            className="mt-4 px-6 py-3 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-wider font-bold hover:bg-black transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-surface min-h-screen">
      <Navbar />
      <CartSidebar />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        {/* Back link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted hover:text-brand-charcoal transition-colors mb-8"
        >
          <ArrowLeft size={12} />
          Back to Shop
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl font-medium text-brand-charcoal mb-10">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Contact */}
            <section>
              <h2 className="font-serif text-lg font-medium text-brand-charcoal mb-5">
                Contact Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="First Name"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                />
                <Field
                  label="Last Name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                />
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  className="sm:col-span-2"
                />
                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="07X XXXX XXX"
                  value={form.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  className="sm:col-span-2"
                />
              </div>
            </section>

            {/* Delivery */}
            <section>
              <h2 className="font-serif text-lg font-medium text-brand-charcoal mb-5">
                Delivery Address
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Street Address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  error={errors.address}
                  className="sm:col-span-2"
                />
                <Field
                  label="City / Town"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  error={errors.city}
                />

                {/* Province select */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.12em] font-bold text-brand-muted mb-1.5">
                    Province
                  </label>
                  <select
                    name="province"
                    value={form.province}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-sm font-sans text-brand-charcoal transition-colors outline-none focus:border-brand-charcoal ${
                      errors.province ? 'border-red-400' : 'border-black/10 hover:border-black/20'
                    }`}
                  >
                    <option value="">Select province</option>
                    {PROVINCES.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  {errors.province && (
                    <p className="text-red-500 text-[10px] mt-1">{errors.province}</p>
                  )}
                </div>
              </div>
            </section>

            {/* Notes */}
            <section>
              <label className="block text-[10px] uppercase tracking-[0.12em] font-bold text-brand-muted mb-1.5">
                Order Notes (Optional)
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                placeholder="Special instructions, access notes, preferred delivery time..."
                className="w-full px-4 py-3 rounded-xl border border-black/10 hover:border-black/20 focus:border-brand-charcoal bg-white text-sm font-sans text-brand-charcoal transition-colors outline-none resize-none"
              />
            </section>

            {/* API Error */}
            {apiError && (
              <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl border border-red-100">
                {apiError}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-wider font-bold hover:bg-black transition-colors shadow-[0_4px_24px_rgba(0,0,0,0.15)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Placing Order...
                </>
              ) : (
                <>
                  Place Order · {formatPrice(subtotal)}
                  <ArrowRight size={14} />
                </>
              )}
            </button>

            <p className="text-[10px] text-brand-muted text-center leading-relaxed">
              By placing an order you agree to our terms of sale. Our team will confirm your order
              and arrange delivery within 2–5 business days.
            </p>
          </motion.form>

          {/* Order Summary */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:sticky lg:top-28"
          >
            <div className="bg-white rounded-3xl border border-black/5 overflow-hidden">
              <div className="px-6 py-5 border-b border-black/5">
                <h2 className="font-serif text-base font-medium text-brand-charcoal">
                  Order Summary
                </h2>
                <p className="text-[10px] text-brand-muted mt-0.5">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'}
                </p>
              </div>

              <div className="px-6 py-4 space-y-4 max-h-80 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.cartKey} className="flex gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex-shrink-0 border border-black/6"
                      style={{ backgroundColor: item.colorSwatch }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-brand-muted uppercase tracking-wide truncate">
                        {item.seriesName}
                      </p>
                      <p className="text-xs font-medium text-brand-charcoal truncate">
                        {item.colorName}
                      </p>
                      <p className="text-[9px] text-brand-muted">
                        {item.lengthLabel}{item.selectedProfile && ` · Profile ${item.selectedProfile}`} × {item.quantity}
                      </p>
                    </div>
                    <p className="text-xs font-bold text-brand-charcoal whitespace-nowrap">
                      {formatPrice(item.quantity * item.pricePerPiece)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="px-6 py-4 border-t border-black/5 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-brand-muted font-sans">Subtotal</span>
                  <span className="font-bold text-brand-charcoal">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-brand-muted font-sans">Delivery</span>
                  <span className="font-bold text-brand-charcoal">Calculated after confirmation</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-black/5">
                  <span className="text-[11px] uppercase tracking-[0.12em] font-bold text-brand-muted">
                    Order Total
                  </span>
                  <span className="font-serif text-xl font-medium text-brand-charcoal">
                    {formatPrice(subtotal)}
                  </span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  className = '',
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-[10px] uppercase tracking-[0.12em] font-bold text-brand-muted mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl border bg-white text-sm font-sans text-brand-charcoal transition-colors outline-none focus:border-brand-charcoal ${
          error ? 'border-red-400' : 'border-black/10 hover:border-black/20'
        }`}
      />
      {error && <p className="text-red-500 text-[10px] mt-1">{error}</p>}
    </div>
  );
}

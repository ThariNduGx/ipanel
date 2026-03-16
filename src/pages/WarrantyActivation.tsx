import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Check, Shield } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { SERIES } from '../data/shopProducts';

export function WarrantyActivation() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    ownerName: '', email: '', phone: '', address: '',
    purchaseDate: '', dealerName: '', series: '', colour: '',
    invoiceNumber: '', installationDate: '',
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  function update(field: keyof typeof form, value: string) {
    setForm({ ...form, [field]: value });
  }

  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        <section className="bg-brand-charcoal py-24 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #C5A059, transparent 70%)' }}
          />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <Shield size={20} className="text-white" />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-serif font-medium text-white"
            >
              Warranty Activation
            </motion.h1>
            <p className="text-white/40 text-sm mt-3">Complete the form below to activate your i-Panel warranty.</p>
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-6 py-16">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-12 border border-black/5 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-5">
                <Check size={24} className="text-green-600" />
              </div>
              <h2 className="font-serif text-2xl text-brand-charcoal mb-2">Warranty Activated</h2>
              <p className="text-brand-muted text-sm">A warranty certificate will be emailed to you within 2 business days.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-black/5 space-y-5">
              <h2 className="font-serif text-2xl text-brand-charcoal mb-2">Owner Details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { key: 'ownerName', label: 'Full Name', type: 'text', required: true },
                  { key: 'email', label: 'Email', type: 'email', required: true },
                  { key: 'phone', label: 'Phone', type: 'tel', required: true },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-1.5">
                      {f.label}{f.required && <span className="text-red-400 ml-1">*</span>}
                    </label>
                    <input
                      type={f.type}
                      required={f.required}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => update(f.key as keyof typeof form, e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-brand-charcoal bg-brand-surface focus:outline-none focus:border-brand-charcoal/30"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-1.5">Installation Address <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    required
                    value={form.address}
                    onChange={(e) => update('address', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-brand-charcoal bg-brand-surface focus:outline-none focus:border-brand-charcoal/30"
                  />
                </div>
              </div>

              <hr className="border-black/5" />
              <h2 className="font-serif text-xl text-brand-charcoal">Purchase Details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { key: 'purchaseDate', label: 'Purchase Date', type: 'date', required: true },
                  { key: 'installationDate', label: 'Installation Date', type: 'date', required: true },
                  { key: 'dealerName', label: 'Dealer Name', type: 'text', required: true },
                  { key: 'invoiceNumber', label: 'Invoice / Receipt Number', type: 'text', required: true },
                  { key: 'colour', label: 'Colour / Finish', type: 'text', required: true },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-1.5">
                      {f.label}{f.required && <span className="text-red-400 ml-1">*</span>}
                    </label>
                    <input
                      type={f.type}
                      required={f.required}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => update(f.key as keyof typeof form, e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-brand-charcoal bg-brand-surface focus:outline-none focus:border-brand-charcoal/30"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-1.5">Series <span className="text-red-400">*</span></label>
                  <select
                    required
                    value={form.series}
                    onChange={(e) => update('series', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-brand-charcoal bg-brand-surface focus:outline-none focus:border-brand-charcoal/30"
                  >
                    <option value="">Select series…</option>
                    {SERIES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-brand-charcoal/90 transition-all"
              >
                Activate Warranty
              </button>
            </form>
          )}
        </section>
      </div>
    </PageShell>
  );
}

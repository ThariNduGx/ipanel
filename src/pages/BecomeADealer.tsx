import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Check, Store, TrendingUp, Shield, Users } from 'lucide-react';
import { PageShell } from '../components/PageShell';

const benefits = [
  { icon: TrendingUp, title: 'Exclusive Territory Rights', body: 'Authorised dealers receive exclusive selling rights within their designated district or region, protecting your investment.' },
  { icon: Shield, title: 'Full Warranty Backing', body: 'Every i-Panel sale you make is backed by our manufacturer warranty programme — your customers get peace of mind, you get repeat business.' },
  { icon: Store, title: 'Display & Merchandising Support', body: 'We provide point-of-sale display kits, sample boards, and product brochures at no cost to authorised dealers.' },
  { icon: Users, title: 'Technical Training', body: 'Dealer staff receive product knowledge training and access to our technical team for specification support on large projects.' },
];

export function BecomeADealer() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    businessName: '', ownerName: '', email: '', phone: '',
    district: '', businessType: '', yearsInBusiness: '', annualTurnover: '',
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        {/* Hero */}
        <section className="bg-brand-charcoal py-28 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #C5A059, transparent 70%)' }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-4xl md:text-6xl font-serif font-medium text-white tracking-tight"
          >
            Become an i-Panel<br />Authorised Dealer.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative z-10 text-white/50 text-sm mt-4 max-w-md mx-auto"
          >
            Join Sri Lanka's fastest growing premium ceiling panel network.
          </motion.p>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
          {/* Benefits */}
          <div>
            <h2 className="font-serif text-2xl text-brand-charcoal mb-8">Dealer Benefits</h2>
            <div className="space-y-5">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-white border border-black/5 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-brand-charcoal" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base text-brand-charcoal mb-1">{b.title}</h3>
                      <p className="text-brand-muted text-[13px] font-sans leading-relaxed">{b.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Application Form */}
          <div>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-10 border border-black/5 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-5">
                  <Check size={24} className="text-green-600" />
                </div>
                <h3 className="font-serif text-2xl text-brand-charcoal mb-2">Application Received</h3>
                <p className="text-brand-muted text-sm">Our dealer relations team will contact you within 3 business days.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-black/5 space-y-4">
                <h2 className="font-serif text-2xl text-brand-charcoal mb-6">Dealer Application</h2>
                {[
                  { key: 'businessName', label: 'Business Name', type: 'text', required: true },
                  { key: 'ownerName', label: 'Owner / Contact Name', type: 'text', required: true },
                  { key: 'email', label: 'Email', type: 'email', required: true },
                  { key: 'phone', label: 'Phone', type: 'tel', required: true },
                  { key: 'district', label: 'District / Region', type: 'text', required: true },
                  { key: 'businessType', label: 'Business Type (Hardware, Showroom, Contractor…)', type: 'text', required: true },
                  { key: 'yearsInBusiness', label: 'Years in Business', type: 'number', required: false },
                  { key: 'annualTurnover', label: 'Estimated Annual Turnover (LKR)', type: 'text', required: false },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-1.5">
                      {field.label}{field.required && <span className="text-red-400 ml-1">*</span>}
                    </label>
                    <input
                      type={field.type}
                      required={field.required}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-brand-charcoal bg-brand-surface focus:outline-none focus:border-brand-charcoal/30 transition-colors"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-brand-charcoal/90 transition-all"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </PageShell>
  );
}

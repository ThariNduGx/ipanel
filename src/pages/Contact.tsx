import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react';
import { PageShell } from '../components/PageShell';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+94 77 123 4567', href: 'tel:+94771234567' },
  { icon: Mail, label: 'Email', value: 'hello@ipanel.lk', href: 'mailto:hello@ipanel.lk' },
  { icon: MapPin, label: 'Address', value: 'No. 42, Industrial Zone, Homagama, Sri Lanka', href: '#' },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        {/* Hero */}
        <section className="relative bg-brand-charcoal py-32 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #C5A059 0%, transparent 70%)' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-serif font-medium text-white leading-tight tracking-tight"
          >
            We're Here to Help.
          </motion.h1>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-2xl text-brand-charcoal mb-8">Contact Information</h2>
            <div className="space-y-5 mb-10">
              {contactInfo.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-white border border-black/5 flex items-center justify-center shrink-0 group-hover:border-brand-gold-dark/30 transition-colors">
                      <Icon size={16} className="text-brand-charcoal" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-0.5">{c.label}</p>
                      <p className="text-brand-charcoal text-sm font-sans">{c.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="bg-white rounded-3xl p-6 border border-black/5">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted mb-2">Office Hours</p>
              <p className="text-brand-charcoal text-sm font-sans">Monday – Friday: 8:00 AM – 5:30 PM</p>
              <p className="text-brand-charcoal text-sm font-sans">Saturday: 8:00 AM – 1:00 PM</p>
              <p className="text-brand-muted text-xs font-sans mt-1">Sunday & Public Holidays: Closed</p>
            </div>
          </div>

          {/* Form */}
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
                <h3 className="font-serif text-2xl text-brand-charcoal mb-2">Message Sent</h3>
                <p className="text-brand-muted text-sm">We'll get back to you within one business day.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-black/5 space-y-4">
                <h2 className="font-serif text-2xl text-brand-charcoal mb-6">Send a Message</h2>
                {(['name', 'email', 'phone', 'subject'] as const).map((field) => (
                  <div key={field}>
                    <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-1.5">
                      {field === 'name' ? 'Full Name' : field.charAt(0).toUpperCase() + field.slice(1)}
                      {field !== 'phone' && <span className="text-red-400 ml-1">*</span>}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      required={field !== 'phone'}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-brand-charcoal placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-charcoal/30 transition-colors bg-brand-surface"
                      placeholder={field === 'name' ? 'Your full name' : field === 'email' ? 'your@email.com' : field === 'phone' ? '+94 77 000 0000' : 'How can we help?'}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-brand-charcoal placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-charcoal/30 transition-colors bg-brand-surface resize-none"
                    placeholder="Tell us about your project or question…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-brand-charcoal/90 transition-all"
                >
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </PageShell>
  );
}

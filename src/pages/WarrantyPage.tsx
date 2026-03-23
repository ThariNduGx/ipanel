import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { SERIES } from '../data/shopProducts';

const covered = [
  'Delamination or peeling of the UV-stabilised laminate surface',
  'Structural warping or bowing of the panel core under normal installation conditions',
  'Colour fading beyond acceptable tolerances under UV exposure',
  'Panel cracking under normal thermal expansion/contraction cycles',
  'Factory defects in tongue-and-groove profile dimensions affecting installation',
];

const notCovered = [
  'Damage caused by incorrect installation (non-compliance with installation guide)',
  'Physical damage from impact, abrasion, or mishandling',
  'Discolouration from chemical exposure (solvents, harsh cleaners)',
  'Damage caused by water ingress from structural building defects',
  'Normal wear in outdoor or fully exposed environments beyond covered applications',
  'Panels installed in environments outside the specified use cases',
];

export function WarrantyPage() {
  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        {/* Hero */}
        <section className="bg-brand-charcoal py-28 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #0047FF, transparent 70%)' }}
          />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
              <Shield size={22} className="text-white" />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl font-serif font-medium text-white tracking-tight"
            >
              The i-Panel Warranty
            </motion.h1>
            <p className="text-white/50 text-sm mt-3 max-w-md mx-auto">
              Industry-leading manufacturer warranty — up to 15 years depending on series.
            </p>
          </div>
        </section>

        {/* Warranty by Series */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-serif text-2xl text-brand-charcoal text-center mb-8">Warranty by Series</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERIES.map((s) => (
              <div key={s.id} className="bg-white rounded-2xl p-6 border border-black/5 text-center">
                <p className="font-serif text-3xl text-brand-charcoal mb-1">{s.warranty}</p>
                <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted">{s.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Coverage */}
        <section className="max-w-5xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-black/5">
            <h2 className="font-serif text-xl text-brand-charcoal mb-5 flex items-center gap-2">
              <CheckCircle size={18} className="text-green-500" /> What Is Covered
            </h2>
            <ul className="space-y-3">
              {covered.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[12px] font-sans text-brand-muted leading-relaxed">
                  <CheckCircle size={13} className="text-green-500 shrink-0 mt-0.5" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-black/5">
            <h2 className="font-serif text-xl text-brand-charcoal mb-5 flex items-center gap-2">
              <XCircle size={18} className="text-red-400" /> What Is Not Covered
            </h2>
            <ul className="space-y-3">
              {notCovered.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[12px] font-sans text-brand-muted leading-relaxed">
                  <XCircle size={13} className="text-red-400 shrink-0 mt-0.5" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Activate */}
        <section className="bg-brand-charcoal py-16 text-center">
          <div className="max-w-xl mx-auto px-6">
            <h2 className="font-serif text-2xl text-white mb-3">Activate Your Warranty</h2>
            <p className="text-white/50 text-sm mb-7">Register within 30 days of installation to activate your full warranty coverage.</p>
            <Link
              to="/warranty-activation"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-brand-charcoal text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-white/90 transition-all"
            >
              Activate Warranty <ArrowRight size={13} />
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

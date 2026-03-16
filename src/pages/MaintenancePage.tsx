import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import { PageShell } from '../components/PageShell';

const tasks = [
  { freq: 'Monthly', items: ['Wipe panels with a damp microfibre cloth to remove dust and light soiling.', 'Inspect panel edges at perimeter for any gapping (seasonal expansion).'] },
  { freq: 'Every 6 Months', items: ['Clean with a mild soap solution (dish soap + warm water). No solvents.', 'Inspect fasteners and battens in accessible areas for corrosion.', 'Check finishing profile adhesion at wall joints.'] },
  { freq: 'Annually', items: ['Inspect all visible panels for surface scratches or chips.', 'Clean ventilation grille surrounds with a small brush.', 'Check for any discolouration around light fittings (overheating issue).'] },
];

const donts = [
  'Use solvent-based cleaners (acetone, paint thinner, turpentine)',
  'Use abrasive scrubbing pads — they will dull the laminate surface',
  'Paint over i-Panel — the UV laminate does not require or accept paint well',
  'Use steam cleaners at close range (keep > 30 cm distance)',
  'Allow standing water on horizontal surfaces for extended periods',
];

export function MaintenancePage() {
  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        {/* Hero */}
        <section className="bg-brand-charcoal py-28 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-serif font-medium text-white tracking-tight"
          >
            Maintenance Guide
          </motion.h1>
          <p className="text-white/50 text-sm mt-3 max-w-md mx-auto">
            i-Panel requires minimal maintenance. Here's everything you need to know to keep your ceiling looking new.
          </p>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-20 space-y-10">
          {tasks.map((t, i) => (
            <motion.div
              key={t.freq}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-3xl p-8 border border-black/5"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted bg-brand-surface inline-block px-3 py-1.5 rounded-full mb-4">{t.freq}</p>
              <ul className="space-y-3">
                {t.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-brand-charcoal shrink-0 mt-0.5" />
                    <p className="text-brand-muted text-[13px] font-sans leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-50 border border-red-200 rounded-3xl p-8"
          >
            <h2 className="font-serif text-xl text-brand-charcoal mb-4">What NOT to Do</h2>
            <ul className="space-y-3">
              {donts.map((d) => (
                <li key={d} className="flex items-start gap-3 text-[13px] font-sans text-red-700 leading-relaxed">
                  <span className="shrink-0 font-bold mt-0.5">✕</span> {d}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="text-center">
            <Link
              to="/warranty-activation"
              className="inline-block px-8 py-3.5 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-brand-charcoal/90 transition-all"
            >
              Register Your Warranty
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

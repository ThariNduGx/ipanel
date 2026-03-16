import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { SERIES } from '../data/shopProducts';

const SERIES_URL: Record<string, string> = {
  'i-series':  '/products/architectural-flat',
  'heavy-b':   '/products/ipanel-heavy-b',
  'lite':      '/products/ipanel-lite',
  'finishing': '/products/finishing-series',
};

const rows = [
  { label: 'Width', key: 'width' as const },
  { label: 'Thickness', key: 'thickness' as const },
  { label: 'Weight', key: 'weight' as const },
  { label: 'Warranty', key: 'warranty' as const },
];

const features = [
  { label: 'UV-Stabilised Laminate', seriesIds: ['i-series', 'heavy-b', 'lite', 'finishing'] },
  { label: '100% Waterproof', seriesIds: ['i-series', 'heavy-b', 'lite', 'finishing'] },
  { label: 'Class B Fire Rating', seriesIds: ['i-series', 'heavy-b', 'lite', 'finishing'] },
  { label: 'Click-Lock Installation', seriesIds: ['i-series', 'heavy-b', 'lite'] },
  { label: 'Profile Shape Variants', seriesIds: ['finishing'] },
  { label: '20+ Colour Options', seriesIds: ['heavy-b', 'finishing'] },
  { label: '10 ft / 12 ft Lengths', seriesIds: ['i-series', 'heavy-b', 'lite'] },
  { label: '4 ft Length', seriesIds: ['finishing'] },
];

export function ProductCompare() {
  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        <section className="bg-brand-charcoal py-24 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-serif font-medium text-white tracking-tight"
          >
            Compare Series
          </motion.h1>
          <p className="text-white/50 text-sm mt-3">Side-by-side specification comparison across all i-Panel series.</p>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16 overflow-x-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-5 text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted w-[160px]">
                    Specification
                  </th>
                  {SERIES.map((s) => (
                    <th key={s.id} className="px-4 py-4">
                      <Link to={SERIES_URL[s.id] ?? '/products'} className="group">
                        <div className="bg-white rounded-2xl p-4 border border-black/5 group-hover:border-brand-gold-dark/30 transition-all text-center">
                          <p className="font-serif text-base text-brand-charcoal leading-tight">{s.name}</p>
                          <p className="text-[9px] uppercase tracking-[0.1em] font-bold text-brand-muted mt-1">{s.warranty}</p>
                        </div>
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-t border-black/5">
                    <td className="py-4 px-5 text-[11px] uppercase tracking-[0.12em] font-bold text-brand-muted">{row.label}</td>
                    {SERIES.map((s) => (
                      <td key={s.id} className="py-4 px-4 text-center">
                        <span className="text-sm font-sans text-brand-charcoal">{s[row.key]}</span>
                      </td>
                    ))}
                  </tr>
                ))}

                <tr className="border-t-2 border-black/10">
                  <td className="py-4 px-5 text-[11px] uppercase tracking-[0.12em] font-bold text-brand-muted">Features</td>
                  <td colSpan={SERIES.length} />
                </tr>
                {features.map((f) => (
                  <tr key={f.label} className="border-t border-black/5">
                    <td className="py-3 px-5 text-[12px] font-sans text-brand-muted">{f.label}</td>
                    {SERIES.map((s) => (
                      <td key={s.id} className="py-3 px-4 text-center">
                        {f.seriesIds.includes(s.id)
                          ? <Check size={16} className="mx-auto text-green-500" />
                          : <X size={14} className="mx-auto text-black/15" />
                        }
                      </td>
                    ))}
                  </tr>
                ))}

                <tr className="border-t border-black/5">
                  <td className="py-4 px-5" />
                  {SERIES.map((s) => (
                    <td key={s.id} className="py-4 px-4 text-center">
                      <Link
                        to={SERIES_URL[s.id] ?? '/products'}
                        className="inline-block px-4 py-2 rounded-full bg-brand-charcoal text-white text-[10px] uppercase tracking-[0.12em] font-bold hover:bg-brand-charcoal/90 transition-all"
                      >
                        View
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </motion.div>
        </section>
      </div>
    </PageShell>
  );
}

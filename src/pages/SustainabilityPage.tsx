import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, TreePine, Recycle, Leaf, BarChart3 } from 'lucide-react';
import { PageShell } from '../components/PageShell';

const stats = [
  { value: '1,875', label: 'Trees saved per month', icon: TreePine },
  { value: '0%', label: 'Formaldehyde content', icon: Leaf },
  { value: '100%', label: 'Recyclable at end of life', icon: Recycle },
  { value: '10 yrs+', label: 'Average product lifespan', icon: BarChart3 },
];

const points = [
  {
    title: 'Replacing Timber, Not Just Imitating It',
    body: 'Sri Lanka loses significant forest cover each year to demand for decorative timber ceilings. i-Panel\'s PVC substrate provides the same visual warmth of teak, pine, and mahogany without a single tree being felled. Every 1,000 sq m of i-Panel installed displaces approximately 4 cubic metres of sawn timber.',
  },
  {
    title: 'Zero Formaldehyde',
    body: 'Conventional MDF and plywood ceiling panels off-gas formaldehyde — a Group 1 carcinogen per the IARC — for months after installation. i-Panel contains zero formaldehyde binders. Indoor air quality is unaffected, making i-Panel suitable for bedrooms, nurseries, and healthcare environments.',
  },
  {
    title: 'Fully Recyclable at End of Life',
    body: 'UPVC is one of the most recyclable plastics. When an i-Panel installation reaches end of life (typically 15 – 20 years), panels can be returned to our authorised recycling partners and reprocessed into non-structural PVC products, preventing landfill.',
  },
  {
    title: 'Longevity as Sustainability',
    body: 'A ceiling material that lasts 15 years requires three fewer replacement cycles than a gypsum board ceiling over a 45-year building life. Lower replacement frequency means lower embodied carbon across the full lifecycle of the building.',
  },
];

export function SustainabilityPage() {
  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80"
            alt="Sustainable forest"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/65" />
          <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-4">
              <nav className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">
                <Link to="/" className="hover:text-white/80">Home</Link>
                <ChevronRight size={10} />
                <Link to="/about" className="hover:text-white/80">About</Link>
                <ChevronRight size={10} />
                <span className="text-white/80">Sustainability</span>
              </nav>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-serif font-medium leading-tight tracking-tight"
            >
              Beautiful Ceilings.<br />Healthier Forests.
            </motion.h1>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                  className="bg-white rounded-2xl p-5 border border-black/5 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                >
                  <Icon size={20} className="mx-auto mb-2 text-brand-charcoal" />
                  <p className="font-serif text-2xl text-brand-charcoal">{s.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.12em] font-bold text-brand-muted mt-1">{s.label}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Points */}
        <section className="max-w-3xl mx-auto px-6 py-20 space-y-12">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-serif text-2xl text-brand-charcoal mb-3">{p.title}</h2>
              <p className="text-brand-muted text-[14px] font-sans leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-[#1a3325] py-20 text-center">
          <div className="max-w-xl mx-auto px-6">
            <h2 className="font-serif text-3xl text-white mb-4">Specify the Sustainable Choice.</h2>
            <p className="text-white/60 text-sm mb-8">Every i-Panel installation contributes to Sri Lanka's reforestation goals.</p>
            <Link
              to="/get-a-quote"
              className="px-8 py-3.5 rounded-full bg-white text-brand-charcoal text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-white/90 transition-all inline-block"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

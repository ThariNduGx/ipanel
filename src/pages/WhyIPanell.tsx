import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Shield, Droplets, Sun, Wind, Layers, Zap } from 'lucide-react';
import { PageShell } from '../components/PageShell';

const pillars = [
  {
    icon: Layers,
    title: 'Virgin UPVC Substrate',
    body: 'i-Panel uses only virgin (non-recycled) UPVC in its structural core. Recycled PVC introduces micro-fissures and inconsistent density that compromise rigidity over time. Our virgin substrate ensures every panel installs flush and stays flush for the full warranty period.',
    stat: '7.5 mm', statLabel: 'Consistent thickness ±0.2 mm',
  },
  {
    icon: Droplets,
    title: '100% Waterproof Core',
    body: 'Zero water absorption at the substrate level. Unlike gypsum or MDF-based panels that swell, warp, or grow mould in humid conditions, i-Panel maintains dimensional stability in bathroom, kitchen, and outdoor-adjacent environments.',
    stat: '0%', statLabel: 'Water absorption rate',
  },
  {
    icon: Sun,
    title: 'UV-Stabilised Laminates',
    body: 'Our wood-grain and solid-colour laminates are UV-stabilised to Index 12, preventing yellowing and colour shift in spaces with direct or reflected sunlight. Colours remain specification-accurate for over a decade.',
    stat: 'UV12', statLabel: 'UV stabilisation index',
  },
  {
    icon: Shield,
    title: 'Class B Fire Retardant',
    body: 'All i-Panel products comply with ASTM E84 Class B fire-retardant standards. This classification is required for commercial, hospitality, and healthcare projects in Sri Lanka and is increasingly specified for high-end residential builds.',
    stat: 'Class B', statLabel: 'ASTM E84 fire rating',
  },
  {
    icon: Wind,
    title: 'Climate-Engineered for Sri Lanka',
    body: 'The coefficient of thermal expansion is calibrated for tropical temperature ranges (20 °C – 42 °C). Panels will not buckle in summer or gap in cooler hill-country climates. Fixed-end installations remain seamless year-round.',
    stat: '42 °C', statLabel: 'Max operational temperature',
  },
  {
    icon: Zap,
    title: 'Rapid Click-Lock Installation',
    body: 'Proprietary tongue-and-groove profile allows a single installer to lay 100 sq ft per hour without adhesives. Panels are fully reversible and can be replaced individually — no need to demolish an entire ceiling section for maintenance.',
    stat: '100 ft²/hr', statLabel: 'Installation speed',
  },
];

export function WhyIPanell() {
  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
            alt="i-Panel ceiling installation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <nav className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">
                <Link to="/" className="hover:text-white/80">Home</Link>
                <ChevronRight size={10} />
                <Link to="/about" className="hover:text-white/80">About</Link>
                <ChevronRight size={10} />
                <span className="text-white/80">Why i-Panel</span>
              </nav>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-serif font-medium leading-tight tracking-tight"
            >
              Six Engineering Decisions<br />That Change a Ceiling.
            </motion.h1>
          </div>
        </section>

        {/* Pillars */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-3xl p-7 border border-black/5"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-brand-surface flex items-center justify-center">
                      <Icon size={20} className="text-brand-charcoal" />
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-2xl text-brand-charcoal leading-none">{p.stat}</p>
                      <p className="text-[9px] uppercase tracking-[0.15em] font-bold text-brand-muted mt-0.5">{p.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-brand-charcoal mb-3">{p.title}</h3>
                  <p className="text-brand-muted text-[13px] font-sans leading-relaxed">{p.body}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-charcoal py-20 text-center">
          <div className="max-w-xl mx-auto px-6">
            <h2 className="font-serif text-3xl text-white mb-4">Ready to specify i-Panel?</h2>
            <p className="text-white/60 text-sm font-sans mb-8">Request a technical quote or explore the full range of finishes.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/get-a-quote"
                className="px-8 py-3.5 rounded-full bg-white text-brand-charcoal text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-white/90 transition-all"
              >
                Get a Quote
              </Link>
              <Link
                to="/products"
                className="px-8 py-3.5 rounded-full border border-white/20 text-white text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-white/10 transition-all"
              >
                View Collections
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Trophy, Star, Globe } from 'lucide-react';
import { PageShell } from '../components/PageShell';

const awards = [
  {
    year: '2025',
    title: 'BestWeb.LK — Outstanding Brand',
    org: 'BestWeb.LK Sri Lanka',
    icon: Trophy,
    description:
      'Recognised as an outstanding brand in the building materials category at BestWeb.LK 2025 — Sri Lanka\'s premier digital excellence awards. i-Panel was acknowledged for product quality, brand consistency, and contribution to the local construction industry.',
  },
  {
    year: '2024',
    title: 'Top Supplier — PVC Ceiling Panels',
    org: 'Sri Lanka Hardware Federation',
    icon: Star,
    description:
      'Named among the top-rated supplier brands for PVC ceiling panels by independent dealer network evaluations, with scores leading in delivery reliability, product consistency, and post-sale warranty honouring.',
  },
  {
    year: '2023',
    title: 'Regional Export Excellence',
    org: 'Export Development Board Sri Lanka',
    icon: Globe,
    description:
      'Recognised for growing exports of PVC ceiling panel product lines to South Asian markets, supporting Sri Lanka\'s manufacturing export goals and demonstrating internationally competitive quality standards.',
  },
];

const certifications = [
  { label: 'ISO 9001:2015', note: 'Quality Management System' },
  { label: 'ASTM E84', note: 'Class B Fire Retardant' },
  { label: 'RoHS Compliant', note: 'Restricted Hazardous Substances' },
  { label: 'SGS Certified', note: 'Independent Quality Assurance' },
];

export function Awards() {
  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden bg-brand-charcoal">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #C5A059 0%, transparent 60%), radial-gradient(circle at 70% 50%, #C5A059 0%, transparent 60%)' }}
          />
          <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-4">
              <nav className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
                <Link to="/" className="hover:text-white/70">Home</Link>
                <ChevronRight size={10} />
                <Link to="/about" className="hover:text-white/70">About</Link>
                <ChevronRight size={10} />
                <span className="text-white/70">Awards</span>
              </nav>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-serif font-medium leading-tight tracking-tight"
            >
              Independent Validation<br />of the i-Panel Promise.
            </motion.h1>
          </div>
        </section>

        {/* Awards */}
        <section className="max-w-4xl mx-auto px-6 py-20 space-y-6">
          {awards.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="bg-white rounded-3xl p-8 border border-black/5 flex gap-6"
              >
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-brand-surface flex items-center justify-center">
                    <Icon size={24} className="text-brand-charcoal" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted bg-brand-surface px-3 py-1 rounded-full">
                      {a.year}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.12em] font-bold text-brand-muted">{a.org}</span>
                  </div>
                  <h2 className="font-serif text-xl text-brand-charcoal mb-2">{a.title}</h2>
                  <p className="text-brand-muted text-[13px] font-sans leading-relaxed">{a.description}</p>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* Certifications */}
        <section className="bg-white border-t border-black/5 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-2xl text-brand-charcoal text-center mb-10">Certifications & Standards</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((c) => (
                <div key={c.label} className="bg-brand-surface rounded-2xl p-5 text-center border border-black/5">
                  <p className="font-serif text-lg text-brand-charcoal mb-1">{c.label}</p>
                  <p className="text-[10px] uppercase tracking-[0.12em] font-bold text-brand-muted">{c.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

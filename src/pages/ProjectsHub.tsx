import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';
import { PageShell } from '../components/PageShell';

const projects = [
  {
    slug: 'cinnamon-grand-lobby',
    title: 'Cinnamon Grand Hotel — Lobby Ceiling',
    location: 'Colombo 03',
    type: 'Hospitality',
    series: 'HEAVY B Series — Burma Teak',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    area: '2,400 sq ft',
  },
  {
    slug: 'havelock-city-apartments',
    title: 'Havelock City — Residential Towers',
    location: 'Havelock Town, Colombo',
    type: 'Residential',
    series: 'i Series — Matt White',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
    area: '18,000 sq ft',
  },
  {
    slug: 'onecare-hospital-kandy',
    title: 'OneCare Medical Centre',
    location: 'Kandy',
    type: 'Healthcare',
    series: 'i Series — Solid Fabric',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80',
    area: '5,600 sq ft',
  },
  {
    slug: 'dialog-hq-office',
    title: 'Dialog Axiata HQ — Executive Floor',
    location: 'Colombo 10',
    type: 'Commercial',
    series: 'HEAVY B Series — Gray Wood',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    area: '8,200 sq ft',
  },
  {
    slug: 'galle-face-restaurant',
    title: 'Galle Face Terrace Restaurant',
    location: 'Galle Face, Colombo',
    type: 'Hospitality',
    series: 'HEAVY B Series — Teak',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    area: '3,100 sq ft',
  },
  {
    slug: 'waterfront-spa-bentota',
    title: 'Waterfront Spa & Wellness — Bentota',
    location: 'Bentota',
    type: 'Hospitality',
    series: 'LITE Series — Golden Teak',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
    area: '4,800 sq ft',
  },
];

export function ProjectsHub() {
  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        <section className="bg-brand-charcoal py-28 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-serif font-medium text-white tracking-tight"
          >
            Project Gallery
          </motion.h1>
          <p className="text-white/50 text-sm mt-3">Real i-Panel installations across Sri Lanka — hospitality, commercial, healthcare, and residential.</p>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
            >
              <Link
                to={`/resources/projects/${p.slug}`}
                className="group block bg-white rounded-3xl overflow-hidden border border-black/5 hover:border-brand-gold-dark/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-brand-charcoal text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full">{p.type}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] font-bold text-brand-muted mb-2">
                    <MapPin size={10} /> {p.location} · {p.area}
                  </div>
                  <h2 className="font-serif text-lg text-brand-charcoal leading-snug mb-1">{p.title}</h2>
                  <p className="text-brand-muted text-[11px] font-sans mb-4">{p.series}</p>
                  <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] font-bold text-brand-charcoal group-hover:gap-3 transition-all">
                    View Project <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </section>
      </div>
    </PageShell>
  );
}

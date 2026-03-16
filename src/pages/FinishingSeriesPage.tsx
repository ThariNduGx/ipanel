import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, ShoppingBag } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { SERIES, COLOR_SWATCHES } from '../data/shopProducts';

const profileImages = {
  'profile-a-4-4': 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80',
  'profile-b-2-2': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
  'profile-c-3-1': 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
};

const profiles = [
  { slug: 'profile-a-4-4', id: 'A', shape: '4" : 4"', label: 'Profile A', desc: 'A generous equal-arm cornice for grand rooms. The 4" rise on both wall and ceiling faces creates a classic architectural transition.' },
  { slug: 'profile-b-2-2', id: 'B', shape: '2" : 2"', label: 'Profile B', desc: 'A compact symmetrical profile for tighter perimeters. Ideal for standard ceiling heights where a subtle but clean edge is required.' },
  { slug: 'profile-c-3-1', id: 'C', shape: '3" : 1"', label: 'Profile C', desc: 'An asymmetric profile with a dominant ceiling run and a slim wall reveal. Excellent for contemporary interiors that want presence without bulk.' },
];

const finishingSeries = SERIES.find((s) => s.id === 'finishing')!;

export function FinishingSeriesPage() {
  const { profile } = useParams<{ profile?: string }>();

  // Single profile detail view
  if (profile && profiles.find((p) => p.slug === profile)) {
    const p = profiles.find((pp) => pp.slug === profile)!;
    return (
      <PageShell>
        <div className="bg-brand-surface min-h-screen">
          <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
            <img
              src={profileImages[profile as keyof typeof profileImages]}
              alt={p.label}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
            <div className="relative z-10 text-white px-6 max-w-3xl mx-auto">
              <nav className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-5">
                <Link to="/" className="hover:text-white/80">Home</Link>
                <ChevronRight size={10} />
                <Link to="/products/finishing-series" className="hover:text-white/80">Finishing Series</Link>
                <ChevronRight size={10} />
                <span className="text-white/80">{p.label}</span>
              </nav>
              <div className="bg-brand-gold-dark text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full inline-block mb-3">
                Profile {p.id} — {p.shape}
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl font-serif font-medium leading-tight tracking-tight"
              >
                {p.label} — {p.shape}
              </motion.h1>
            </div>
          </section>
          <section className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-serif text-2xl text-brand-charcoal mb-4">About This Profile</h2>
              <p className="text-brand-muted text-[14px] font-sans leading-relaxed mb-6">{p.desc}</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Profile Shape', value: p.shape },
                  { label: 'Width', value: finishingSeries.width },
                  { label: 'Length', value: '122 cm (4 ft)' },
                  { label: 'Warranty', value: finishingSeries.warranty },
                ].map((spec) => (
                  <div key={spec.label} className="bg-white rounded-xl p-4 border border-black/5">
                    <p className="text-[9px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-1">{spec.label}</p>
                    <p className="font-serif text-base text-brand-charcoal">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-serif text-xl text-brand-charcoal mb-4">Available in {finishingSeries.colors.length} Colours</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {finishingSeries.colors.map((c) => (
                  <div key={c} title={c} className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 border border-black/5 text-[11px] font-sans text-brand-muted">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLOR_SWATCHES[c] ?? '#ccc' }} />
                    {c}
                  </div>
                ))}
              </div>
              <Link
                to={`/shop/product/finishing-${p.id.toLowerCase()}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-brand-charcoal/90 transition-all"
              >
                <ShoppingBag size={14} /> Buy Profile {p.id}
              </Link>
            </div>
          </section>
        </div>
      </PageShell>
    );
  }

  // Hub view — all profiles
  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80"
            alt="Finishing profiles"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 mb-3">
              Finishing Series
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-serif font-medium leading-tight tracking-tight"
            >
              The Ultimate Foundation<br />of Luxury.
            </motion.h1>
            <p className="text-white/50 text-sm mt-4">Three distinct profile shapes. {finishingSeries.warranty} warranty. 20 colour finishes.</p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-6">
            {profiles.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <Link
                  to={`/products/finishing-series/${p.slug}`}
                  className="group block bg-white rounded-3xl overflow-hidden border border-black/5 hover:border-brand-gold-dark/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={profileImages[p.slug as keyof typeof profileImages]} alt={p.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-gold-dark text-white text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full">{p.shape}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-xl text-brand-charcoal mb-2">{p.label}</h2>
                    <p className="text-brand-muted text-[12px] font-sans leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] font-bold text-brand-charcoal group-hover:gap-3 transition-all">
                      View Profile <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}

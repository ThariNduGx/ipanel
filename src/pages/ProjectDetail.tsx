import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, MapPin, ArrowLeft } from 'lucide-react';
import { PageShell } from '../components/PageShell';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const title = slug ? slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Project';

  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        <section className="relative h-[65vh] min-h-[440px] flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/75" />
          <div className="relative z-10 text-white px-6 max-w-4xl mx-auto w-full">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-5">
              <nav className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">
                <Link to="/" className="hover:text-white/80">Home</Link>
                <ChevronRight size={10} />
                <Link to="/resources/projects" className="hover:text-white/80">Projects</Link>
                <ChevronRight size={10} />
                <span className="text-white/70 truncate max-w-[120px]">{title}</span>
              </nav>
            </motion.div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full">Case Study</span>
              <span className="flex items-center gap-1 text-white/50 text-[10px] uppercase tracking-[0.1em] font-bold"><MapPin size={10} />Colombo</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-serif font-medium leading-tight tracking-tight"
            >
              {title}
            </motion.h1>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="font-serif text-2xl text-brand-charcoal mb-4">Project Overview</h2>
              <p className="text-brand-muted text-[14px] font-sans leading-relaxed">
                This project demonstrates i-Panel's versatility in delivering premium ceiling finishes for high-traffic environments. The specification team selected i-Panel for its combination of aesthetic quality, moisture resistance, and long-term warranty backing.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-brand-charcoal mb-4">Challenge</h2>
              <p className="text-brand-muted text-[14px] font-sans leading-relaxed">
                The client required a ceiling solution that could withstand high humidity and deliver a premium warm timber aesthetic without the maintenance demands of real wood. The installation timeline was compressed to 6 working days.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-brand-charcoal mb-4">Solution</h2>
              <p className="text-brand-muted text-[14px] font-sans leading-relaxed">
                i-Panel HEAVY B Series in Burma Teak was specified across 2,400 sq ft of ceiling area. i-Panel Finishing Series Profile A (4"×4") was installed at all perimeters, providing an elegant cornice detail that frames the space.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Series', value: 'HEAVY B' },
              { label: 'Colour', value: 'Burma Teak' },
              { label: 'Area', value: '2,400 sq ft' },
              { label: 'Duration', value: '6 days' },
              { label: 'Warranty', value: '10 Years' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-5 border border-black/5">
                <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-muted mb-1">{item.label}</p>
                <p className="font-serif text-lg text-brand-charcoal">{item.value}</p>
              </div>
            ))}
            <Link
              to="/get-a-quote"
              className="block w-full text-center py-3.5 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-brand-charcoal/90 transition-all"
            >
              Get a Similar Quote
            </Link>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 pb-12">
          <Link
            to="/resources/projects"
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] font-bold text-brand-muted hover:text-brand-charcoal transition-colors"
          >
            <ArrowLeft size={13} /> Back to Projects
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Clock, ArrowLeft } from 'lucide-react';
import { PageShell } from '../components/PageShell';

/**
 * Generic blog post page — in production, content would be fetched from a CMS.
 * This renders a styled placeholder with the correct URL structure for SEO.
 */
export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const title = slug ? slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Article';

  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80"
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
          <div className="relative z-10 text-white px-6 max-w-3xl mx-auto w-full">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
              <nav className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">
                <Link to="/" className="hover:text-white/80">Home</Link>
                <ChevronRight size={10} />
                <Link to="/resources/blog" className="hover:text-white/80">Blog</Link>
                <ChevronRight size={10} />
                <span className="text-white/80 truncate max-w-[120px]">{title}</span>
              </nav>
            </motion.div>
            <div className="flex items-center gap-3 mb-4 text-[10px] uppercase tracking-[0.12em] font-bold text-white/50">
              <span>March 2025</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock size={10} />5 min read</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-5xl font-serif font-medium leading-tight tracking-tight"
            >
              {title}
            </motion.h1>
          </div>
        </section>

        {/* Article */}
        <article className="max-w-3xl mx-auto px-6 py-20">
          <p className="text-brand-muted text-base font-sans leading-relaxed mb-10">
            This article provides expert guidance on i-Panel ceiling panel products for architects, contractors, and homeowners in Sri Lanka.
          </p>
          <div className="prose prose-slate max-w-none space-y-6 text-[14px] font-sans text-brand-muted leading-relaxed">
            <p>
              i-Panel ceiling panels represent the premium standard in PVC ceiling solutions across Sri Lanka.
              With a comprehensive range spanning the Architectural Flat (i Series), Designer Profile (HEAVY B),
              Project (LITE), and Finishing Series, every specification requirement is covered.
            </p>
            <p>
              All i-Panel products are manufactured from virgin UPVC substrate with UV-stabilised laminates,
              offering warranties ranging from 5 to 15 years depending on the series selected.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-black/5">
            <Link
              to="/resources/blog"
              className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] font-bold text-brand-muted hover:text-brand-charcoal transition-colors"
            >
              <ArrowLeft size={13} /> Back to Knowledge Hub
            </Link>
          </div>
        </article>
      </div>
    </PageShell>
  );
}

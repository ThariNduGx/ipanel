import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clock, ArrowRight } from 'lucide-react';
import { PageShell } from '../components/PageShell';

const posts = [
  {
    slug: 'how-to-choose-ceiling-panels',
    title: 'How to Choose the Right Ceiling Panel for Your Home',
    excerpt: 'From width and finish to warranty and moisture resistance — a practical guide for homeowners navigating the ceiling panel market in Sri Lanka.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    date: 'March 2025', readTime: '6 min read', tag: 'Buyer\'s Guide',
  },
  {
    slug: 'wood-grain-ceilings-trend',
    title: 'Why Wood-Grain Ceilings Are Trending in 2025',
    excerpt: 'Interior designers are specifying warm timber tones overhead. Here\'s why the ceiling is becoming the fifth wall — and how to get the look without real timber.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    date: 'February 2025', readTime: '4 min read', tag: 'Design Trends',
  },
  {
    slug: 'commercial-ceiling-specification',
    title: 'How Architects Specify Commercial Ceiling Panels',
    excerpt: 'A behind-the-scenes look at what M&E consultants and interior architects consider when specifying ceiling materials for offices, retail, and hospitality projects.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    date: 'January 2025', readTime: '8 min read', tag: 'Specification',
  },
  {
    slug: 'ceiling-calculator-guide',
    title: 'How Many Ceiling Panels Do You Need? A Calculator Guide',
    excerpt: 'Step-by-step guide to measuring your ceiling area, selecting the right panel length, and calculating the number of panels to purchase — including wastage allowance.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80',
    date: 'December 2024', readTime: '5 min read', tag: 'How-To',
  },
];

export function BlogHub() {
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
            Knowledge Hub
          </motion.h1>
          <p className="text-white/50 text-sm mt-3">Design inspiration, specification guides, and industry knowledge.</p>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <Link
                to={`/resources/blog/${post.slug}`}
                className="group block bg-white rounded-3xl overflow-hidden border border-black/5 hover:border-brand-gold-dark/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-brand-charcoal text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full">{post.tag}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-[10px] uppercase tracking-[0.12em] font-bold text-brand-muted">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock size={10} />{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-xl text-brand-charcoal leading-snug mb-2">{post.title}</h2>
                  <p className="text-brand-muted text-[12px] font-sans leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] font-bold text-brand-charcoal group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={12} />
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

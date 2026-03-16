import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Award, Leaf, Heart } from 'lucide-react';
import { PageShell } from '../components/PageShell';

const sections = [
  {
    to: '/about/our-story',
    icon: BookOpen,
    label: 'Our Story',
    description:
      'Founded in 2009, i-Panel set out to replace timber ceilings in Sri Lanka with a product engineered for tropical climates. Discover the milestones that built the brand.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    to: '/about/why-ipanel',
    icon: Heart,
    label: 'Why i-Panel',
    description:
      'Virgin UPVC substrate, UV-stabilised laminates, and a 10 – 15 year warranty. Understand the engineering decisions that make i-Panel the specification choice of architects across South Asia.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
  },
  {
    to: '/about/sustainability',
    icon: Leaf,
    label: 'Sustainability',
    description:
      'Every i-Panel ceiling saves approximately 1,875 trees per month from felling. Learn how our zero-formaldehyde PVC panels support Sri Lanka\'s reforestation goals.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
  },
  {
    to: '/about/awards',
    icon: Award,
    label: 'Awards & Recognition',
    description:
      'BestWeb.LK 2025 Outstanding Brand and regional supplier recognition. See the independent validation behind the i-Panel promise.',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80',
  },
];

export function AboutHub() {
  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[380px] flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
            alt="i-Panel company story"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-[10px] uppercase tracking-[0.3em] font-bold font-sans text-white/50 mb-4"
            >
              About i-Panel
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-serif font-medium leading-tight tracking-tight"
            >
              Engineered with Purpose.<br />Built to Last.
            </motion.h1>
          </div>
        </section>

        {/* Sections Grid */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.to}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={s.to}
                    className="group relative overflow-hidden rounded-3xl block h-full border border-black/5 hover:border-brand-gold-dark/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.label}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                    </div>
                    <div className="bg-white p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-full bg-brand-surface flex items-center justify-center">
                          <Icon size={16} className="text-brand-charcoal" />
                        </div>
                        <h2 className="font-serif text-xl text-brand-charcoal">{s.label}</h2>
                      </div>
                      <p className="text-brand-muted text-[13px] font-sans leading-relaxed mb-4">{s.description}</p>
                      <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] font-bold text-brand-charcoal group-hover:gap-3 transition-all">
                        Learn More <ArrowRight size={13} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </PageShell>
  );
}

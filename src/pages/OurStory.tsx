import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Eye, Users } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const milestones = [
  {
    year: '2009',
    title: 'The Original i-Panel',
    description: 'Idea Industries introduced the first i-Panel profile to the Sri Lankan market, establishing the standard for UPVC ceiling panels that all subsequent products in the category would be measured against.',
  },
  {
    year: '2013',
    title: 'HEAVY-B Series Launch',
    description: 'Responding to architect demand for a more defined ceiling plane, the bevelled HEAVY-B profile was engineered and launched, delivering a precision shadow line that transformed the domestic ceiling into an architectural feature.',
  },
  {
    year: '2016',
    title: 'Wall Cladding Range',
    description: 'i-Panel extended its engineering competence to vertical applications, launching the Wall Cladding series calibrated specifically for the closer viewing distances and installation challenges of wall application.',
  },
  {
    year: '2019',
    title: 'UV-Stabilisation Technology',
    description: 'A proprietary UV-stabilisation process was integrated into the laminate application stage, extending the colour accuracy warranty from seven to twelve years and establishing i-Panel\'s durability leadership.',
  },
  {
    year: '2021',
    title: 'HEAVY-F Extended Width',
    description: 'The HEAVY-F flat panel was re-engineered to a 300mm width, providing the wider ceiling plane that large-format hospitality and commercial specifications demanded.',
  },
  {
    year: '2024',
    title: '46-Colour Collection',
    description: 'The full 46-colour collection across all four series was consolidated, representing the largest curated finish selection available from a single UPVC ceiling panel manufacturer in Sri Lanka.',
  },
];

const differentiators = [
  {
    icon: Shield,
    title: 'Virgin UPVC Substrate',
    description: 'Every i-Panel is manufactured from virgin UPVC compound with no recycled content in the structural layer. This is the foundational engineering decision that separates original i-Panel from the imitations that followed.',
  },
  {
    icon: Zap,
    title: 'Extrusion Precision',
    description: 'Our proprietary extrusion tooling maintains panel width tolerance to within 0.1mm across a 4-metre length. Imitation products manufactured with worn or copied tooling exhibit width variation that causes visible joint gaps over time.',
  },
  {
    icon: Eye,
    title: 'Photographic Laminate Quality',
    description: 'The wood-grain and stone-effect laminates applied to i-Panel surfaces are sourced from European laminate manufacturers to a photographic resolution standard that rewards close inspection at a distance of 300mm.',
  },
  {
    icon: Users,
    title: 'Authorised Dealer Network',
    description: 'Purchasing through an unauthorised channel carries no warranty. Our authorised dealer network is the only route to a manufacturer-backed 12-year warranty with transferable coverage for property resale.',
  },
];

function FadeIn({ children, delay = 0, className = '' }: { children: import("react").ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function OurStory() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-brand-surface">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[550px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1600&q=80"
          alt="i-Panel manufacturing excellence. A luxury interior featuring original i-Panel ceiling panels installed in a Sri Lankan residence."
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="noise-overlay" />

        <div className="relative z-10 container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold font-sans mb-5">
              Established 2009
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-white leading-[1.05] tracking-tight mb-6 max-w-2xl">
              The Original.<br />The Standard.
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-light font-sans max-w-lg leading-relaxed">
              For fifteen years, i-Panel has defined the UPVC ceiling panel category in Sri Lanka. Everything that followed us is a response to what we created.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opening Statement */}
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-dark font-sans mb-8">
              Heritage
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-brand-charcoal leading-tight mb-10">
              Fifteen years of engineering decisions that matter.
            </h2>
            <p className="text-brand-muted text-lg font-light leading-relaxed max-w-3xl mx-auto">
              When Idea Industries introduced the first i-Panel profile to the Sri Lankan market in 2009, there was no category to lead. We created one. The material standards, the finish vocabulary, and the installation methodologies that the industry now takes for granted originated from our engineering decisions made over fifteen years of dedicated product development. The imitations that appeared in subsequent years are, by their nature, followers. We remain the original.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <FadeIn className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-dark font-sans mb-4">
              Timeline
            </p>
            <h2 className="text-4xl font-serif font-medium text-brand-charcoal">
              Fifteen years of milestones
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/8 -translate-x-1/2 hidden md:block" />

            <div className="space-y-16">
              {milestones.map((m, i) => {
                const isRight = i % 2 !== 0;
                return (
                  <FadeIn key={m.year} delay={i * 0.08}>
                    <div className={`relative flex items-start gap-8 md:gap-0 ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                      {/* Content */}
                      <div className={`flex-1 ${isRight ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                        <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-brand-gold-dark font-sans mb-2">
                          {m.year}
                        </span>
                        <h3 className="text-xl font-serif font-medium text-brand-charcoal mb-3">{m.title}</h3>
                        <p className="text-brand-muted text-sm font-light leading-relaxed">{m.description}</p>
                      </div>

                      {/* Dot */}
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1 w-4 h-4 rounded-full bg-brand-gold-dark border-4 border-white shadow-sm z-10" />

                      {/* Spacer */}
                      <div className="flex-1 hidden md:block" />
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Superiority */}
      <section className="py-28 px-6 bg-brand-charcoal text-white">
        <div className="container mx-auto max-w-6xl">
          <FadeIn className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-light font-sans mb-4">
              Why the original matters
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">
              Engineering superiority over imitations
            </h2>
            <p className="text-white/50 text-base font-light max-w-xl mx-auto leading-relaxed">
              Every decision we make in manufacturing has a measurable consequence in performance. Here is what distinguishes an original i-Panel from what follows it.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((d, i) => {
              const Icon = d.icon;
              return (
                <FadeIn key={d.title} delay={i * 0.1}>
                  <div className="bg-white/5 border border-white/10 hover:border-brand-gold-dark/30 transition-all duration-500 rounded-3xl p-8 group">
                    <div className="w-12 h-12 rounded-2xl bg-brand-gold-dark/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold-dark/30 transition-colors">
                      <Icon size={22} className="text-brand-gold-light" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-white font-serif text-xl mb-3">{d.title}</h3>
                    <p className="text-white/50 text-sm font-light leading-relaxed">{d.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Authenticity Markers */}
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <img
                  src="/products/authenticity.jpg"
                  alt="i-Panel honeycomb reinforced core structure. Cross-section showing the structural engineering that distinguishes original i-Panel from imitations."
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="bg-brand-gold-dark text-white text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full">
                    Genuine i-Panel Core
                  </span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-dark font-sans mb-6">
                Identifying the Original
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-charcoal mb-8 leading-snug">
                Four markers of genuine i-Panel
              </h2>
              <ul className="space-y-5">
                {[
                  'The i-Panel brand mark is embossed on the reverse face of every panel at 300mm intervals.',
                  'Genuine panels carry a consistent 7.5mm thickness tolerance of plus or minus 0.05mm across the full panel length.',
                  'The tongue and groove joint locks with a positive click and zero lateral movement when correctly seated.',
                  'Every purchase through an authorised dealer is registered and carries a transferable 12-year manufacturer warranty.',
                ].map((marker, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 size={18} className="text-brand-gold-dark flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <p className="text-brand-muted text-sm font-light leading-relaxed">{marker}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  to="/locate-store"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-wider font-bold hover:bg-brand-gold-dark transition-all duration-300"
                >
                  Find an Authorised Dealer <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-brand-surface border-t border-black/5">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-charcoal mb-4">
              Explore the collection that started it all
            </h2>
            <p className="text-brand-muted font-light mb-10 leading-relaxed">
              Forty-six finishes across four engineering-grade series. Every one manufactured to the standard we set in 2009.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/products/lite"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-wider font-bold hover:bg-brand-gold-dark transition-all duration-300"
              >
                View LITE Series <ArrowRight size={14} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-brand-charcoal/20 text-brand-charcoal text-[11px] uppercase tracking-wider font-bold hover:border-brand-gold-dark hover:text-brand-gold-dark transition-all duration-300"
              >
                All Collections
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}

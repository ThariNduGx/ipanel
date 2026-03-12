import { motion, useScroll, useTransform } from 'motion/react';
import { BlurReveal } from './BlurReveal';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative h-screen flex border-b border-black/5 items-center justify-center overflow-hidden bg-brand-surface text-brand-dark">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-brand-surface z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.1),transparent_50%)] z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.05),transparent_50%)] z-10 mix-blend-multiply" />
        <img
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
          alt="Bright Luxury Interior"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
      </motion.div>
      <div className="noise-overlay z-10 opacity-10"></div>

      <div className="relative z-20 container mx-auto px-6 pt-24 text-center md:text-left flex flex-col justify-center items-center md:items-start h-full">
        <div className="max-w-4xl mx-auto md:mx-0">
          <BlurReveal delay={0.2}>
            <div className="text-brand-gold-dark text-xs md:text-sm font-sans uppercase tracking-[0.3em] mb-6 font-medium flex items-center justify-center md:justify-start gap-4">
              <div className="w-12 h-[1px] bg-brand-gold/60"></div>
              <span>The Original i-Panel®</span>
              <div className="w-12 h-[1px] bg-brand-gold/60 md:hidden"></div>
            </div>
          </BlurReveal>

          <BlurReveal delay={0.4}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-medium mb-8 leading-[1.1] tracking-tight text-brand-charcoal">
              Sri Lanka's Premium <br className="hidden md:block" />
              <span className="text-gradient-gold italic pr-2">UPVC Panels</span>
            </h1>
          </BlurReveal>

          <BlurReveal delay={0.6}>
            <p className="text-brand-muted max-w-2xl mx-auto md:mx-0 mb-10 text-lg md:text-xl font-light leading-relaxed">
              Engineered exclusively for tropical climates, guaranteed for 15 years.
              Discover unparalleled elegance without the maintenance.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.8} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 mb-16 w-full">
            <button className="group relative w-full sm:w-auto bg-brand-charcoal text-white px-10 py-4 text-sm uppercase tracking-widest font-semibold overflow-hidden transition-all hover:shadow-[0_10px_30px_rgba(28,28,28,0.2)] hover:scale-[1.02]">
              <span className="relative z-10 flex items-center justify-center gap-3">
                Explore Collection
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-brand-gold translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out"></div>
            </button>
            <button className="group w-full sm:w-auto bg-transparent border border-black/10 text-brand-charcoal px-10 py-4 text-sm uppercase tracking-widest font-medium hover:border-brand-gold hover:bg-brand-gold/5 transition-all">
              <span className="opacity-80 group-hover:opacity-100 transition-opacity">Request a Quote</span>
            </button>
          </BlurReveal>

          <BlurReveal delay={1.0}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-10 border-t border-black/5 text-center md:text-left">
              {[
                { label: "Warranty", value: "15 Years" },
                { label: "Durability", value: "100% Water" },
                { label: "Certifications", value: "ISO 9001" },
                { label: "Network", value: "Island-wide" }
              ].map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <div className="text-2xl md:text-3xl font-serif text-brand-gold-dark mb-1 tracking-tight transition-transform group-hover:-translate-y-1">{stat.value}</div>
                  <div className="text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] text-brand-muted group-hover:text-brand-charcoal transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          </BlurReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity }}
      >
        <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-brand-muted">Scroll</span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent"
          animate={{ scaleY: [0, 1, 0], transformOrigin: ['top', 'top', 'bottom'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

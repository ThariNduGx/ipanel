import { motion, useScroll, useTransform } from 'motion/react';
import { BlurReveal } from './BlurReveal';

export function Sustainability() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="py-32 bg-[#030303] text-white relative overflow-hidden">
      {/* Atmospheric Luxury Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left: Editorial Image */}
          <div className="lg:col-span-5 relative">
            <BlurReveal>
              <div className="relative aspect-[3/4] w-full overflow-hidden group border border-white/10">
                <motion.div className="absolute inset-0 w-full h-[120%]" style={{ y }}>
                  <img
                    src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop"
                    alt="Misty Forest"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-1000 ease-out"
                  />
                </motion.div>
                {/* Subtle inner shadow/gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/20 to-transparent opacity-90" />
              </div>
            </BlurReveal>

            {/* Floating Glass Note - Desktop */}
            <BlurReveal delay={0.4} className="absolute -bottom-16 -right-8 md:-right-16 z-20 hidden md:block">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 max-w-xs shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                 <h4 className="text-white/50 font-sans text-[10px] font-medium uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                   <span className="w-4 h-[1px] bg-white/30"></span>
                   The Standard
                 </h4>
                 <p className="text-sm text-white/90 leading-relaxed font-light">
                   100% recyclable UPVC. Zero timber. Zero formaldehyde. A documented commitment to preserving Sri Lanka's natural heritage.
                 </p>
              </div>
            </BlurReveal>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 lg:pl-8">
            <BlurReveal delay={0.2}>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-8 h-[1px] bg-brand-blue"></div>
                <span className="text-brand-blue font-sans uppercase tracking-[0.3em] text-[10px] font-medium">
                  Environmental Commitment
                </span>
              </div>
            </BlurReveal>

            <BlurReveal delay={0.3}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light leading-[1.1] tracking-tight mb-16 text-white/90">
                Protecting Sri Lanka's Forests.
              </h2>
            </BlurReveal>

            <BlurReveal delay={0.5}>
              <div className="relative">
                {/* Massive Number */}
                <div className="text-[7rem] md:text-[10rem] lg:text-[13rem] font-sans font-thin leading-[0.85] tracking-tighter text-white mb-8 drop-shadow-2xl">
                  1,875
                </div>
                <div className="text-lg md:text-xl font-light tracking-[0.2em] uppercase text-white/50 pl-2 flex items-center gap-6">
                  Trees Saved Monthly
                  <div className="flex-grow h-[1px] bg-white/10 hidden sm:block"></div>
                </div>
              </div>
            </BlurReveal>

            {/* Mobile Note */}
            <BlurReveal delay={0.6} className="mt-16 md:hidden">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
                 <h4 className="text-white/50 font-sans text-[10px] font-medium uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                   <span className="w-4 h-[1px] bg-white/30"></span>
                   The Standard
                 </h4>
                 <p className="text-sm text-white/90 leading-relaxed font-light">
                   100% recyclable UPVC. Zero timber. Zero formaldehyde. A documented commitment to preserving Sri Lanka's natural heritage.
                 </p>
              </div>
            </BlurReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { BlurReveal } from './BlurReveal';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const defaultImage = "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1200&auto=format&fit=crop";

const hotspots = [
  {
    id: 1,
    title: "Reinforced Honeycomb Core",
    desc: "High-density internal structure delivers maximum impact resistance and thermal insulation. Engineered to remain rigid where imitation panels warp and bow.",
    x: 30,
    y: 40,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Permanent Color Stability",
    desc: "UV-stabilized surface coating maintains aesthetic depth for up to 15 years. No painting, sanding, or chemical treatment required.",
    x: 60,
    y: 30,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Click-it™ Installation System",
    desc: "Precision-milled tongue-and-groove joints form a gapless transition. This system ensures faster installation and a superior finish.",
    x: 75,
    y: 65,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
  }
];

export function Anatomy() {
  const [activeSpot, setActiveSpot] = useState<number | null>(null);

  return (
    <section className="py-32 bg-brand-surface text-brand-charcoal relative border-t border-black/5">
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.08),transparent_70%)] pointer-events-none mix-blend-multiply" />
      <div className="noise-overlay z-0 opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <BlurReveal>
              <span className="text-brand-gold-dark font-sans uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-6 flex items-center gap-4">
                <div className="w-8 h-[1px] bg-brand-gold/60"></div>
                Material Engineering
              </span>
            </BlurReveal>
            <BlurReveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-8 tracking-tight text-brand-charcoal leading-[1.1]">
                Inside the <span className="italic text-brand-gold-dark font-light">Original</span>
              </h2>
            </BlurReveal>
            <BlurReveal delay={0.3}>
              <p className="text-brand-muted text-lg mb-12 leading-relaxed font-light">
                Every layer of an i-Panel is purposefully engineered for Sri Lanka's tropical climate. Inspect what sets the original apart from imitation products.
              </p>
            </BlurReveal>

            <div className="space-y-0 border-t border-black/5">
              {hotspots.map((spot, i) => (
                <BlurReveal key={spot.id} delay={0.4 + i * 0.1}>
                  <div
                    className={`py-8 border-b border-black/5 transition-colors duration-500 cursor-pointer flex gap-6 md:gap-8 ${activeSpot === spot.id ? 'bg-white/40 shadow-sm backdrop-blur-sm px-6 -mx-6' : 'hover:bg-black/5'}`}
                    onMouseEnter={() => setActiveSpot(spot.id)}
                    onMouseLeave={() => setActiveSpot(null)}
                  >
                    <div className={`font-serif text-sm font-medium mt-1 transition-colors duration-300 ${activeSpot === spot.id ? 'text-brand-gold-dark' : 'text-brand-muted/40'}`}>
                      0{spot.id}
                    </div>
                    <div>
                      <h3 className={`text-xl font-serif font-medium mb-3 tracking-tight transition-colors duration-300 ${activeSpot === spot.id ? 'text-brand-gold-dark' : 'text-brand-charcoal'}`}>
                        {spot.title}
                      </h3>
                      <p className="text-brand-muted text-sm md:text-base leading-relaxed font-light">{spot.desc}</p>
                    </div>
                  </div>
                </BlurReveal>
              ))}
            </div>
          </div>

          <BlurReveal delay={0.5} className="order-1 lg:order-2 relative aspect-square glass-panel p-2 md:p-4 rounded-xl border border-black/10 shadow-lg">
            <div className="relative w-full h-full overflow-hidden bg-white/50 rounded-lg">
              <img
                src={defaultImage}
                alt="Panel Anatomy Base"
                className={`absolute inset-0 w-full h-full object-cover grayscale-[10%] transition-opacity duration-1000 ${activeSpot === null ? 'opacity-90' : 'opacity-0'}`}
              />
              {hotspots.map((spot) => (
                <img
                  key={`img-${spot.id}`}
                  src={spot.image}
                  alt={spot.title}
                  className={`absolute inset-0 w-full h-full object-cover grayscale-[10%] transition-opacity duration-1000 ${activeSpot === spot.id ? 'opacity-90' : 'opacity-0'}`}
                />
              ))}

              <div className="absolute inset-0 bg-white/20 pointer-events-none" />

              {hotspots.map((spot) => (
                <div
                  key={spot.id}
                  className="absolute"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  onMouseEnter={() => setActiveSpot(spot.id)}
                  onMouseLeave={() => setActiveSpot(null)}
                >
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-md border transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.1)] cursor-pointer ${activeSpot === spot.id ? 'bg-brand-gold border-brand-gold/50 text-white scale-110' : 'bg-white/80 border-black/10 text-brand-charcoal hover:bg-white'}`}>
                      <Plus size={20} className={`transition-transform duration-500 stroke-[1.5px] ${activeSpot === spot.id ? 'rotate-45' : ''}`} />
                    </div>

                    <AnimatePresence>
                      {activeSpot === spot.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-72 glass-panel p-6 rounded-xl shadow-2xl z-20 border border-black/10"
                        >
                          <div className="text-brand-gold-dark font-sans text-[9px] uppercase tracking-[0.3em] font-medium mb-3">Focus Area 0{spot.id}</div>
                          <h4 className="font-serif font-medium text-lg mb-2 text-brand-charcoal">{spot.title}</h4>
                          <p className="text-xs text-brand-muted leading-relaxed font-light">{spot.desc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </BlurReveal>
        </div>
      </div>
    </section>
  );
}

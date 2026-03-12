import { BlurReveal } from './BlurReveal';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: "01",
    series: "Residential",
    name: "i-Panel LITE",
    desc: "Versatile, lightweight, and available in our widest color palette. The preferred choice for modern residential use.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "02",
    series: "Commercial",
    name: "i-Panel HEAVY",
    desc: "Defined by precision thickness and structural depth. The seamless panel for offices and demanding architectural environments.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "03",
    series: "Accessories",
    name: "Finishing Series",
    desc: "Precision-engineered cornices, beadings, and edge trims for a flawless, gapless transition and perfect architectural detailing.",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=800&auto=format&fit=crop"
  }
];

export function Series() {
  return (
    <section className="py-32 bg-brand-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.08),transparent_70%)] pointer-events-none mix-blend-multiply" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <BlurReveal>
              <span className="text-brand-gold-dark font-sans uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-6 flex items-center gap-4">
                <div className="w-8 h-[1px] bg-brand-gold/60"></div>
                The i-Panel Collection
              </span>
            </BlurReveal>
            <BlurReveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-brand-charcoal tracking-tight leading-[1.1]">
                Three Series.<br />One <span className="italic text-brand-gold-dark font-light">Uncompromising</span> Standard.
              </h2>
            </BlurReveal>
          </div>
          <div className="max-w-sm">
            <BlurReveal delay={0.3}>
              <p className="text-brand-muted text-lg leading-relaxed font-light">
                Engineered to perform beautifully for decades in Sri Lanka's tropical climate. Discover the perfect system for your space.
              </p>
            </BlurReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 group/container">
          {products.map((product, i) => (
            <BlurReveal key={i} delay={0.2 + i * 0.1}>
              <div className="group cursor-pointer flex flex-col h-full transition-all duration-700 ease-out md:hover:!opacity-100 md:group-hover/container:opacity-50">
                <div className="relative overflow-hidden aspect-[3/4] bg-brand-surface mb-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale-[30%] opacity-90 transition-all duration-[1.5s] ease-out group-hover:grayscale-0 group-hover:scale-[1.07] group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Glass ID Badge */}
                  <div className="absolute top-6 left-6 glass-panel text-brand-charcoal text-xs font-sans tracking-widest px-4 py-2 border-black/10 shadow-sm">
                    {product.id}
                  </div>
                </div>

                <div className="flex-grow flex flex-col pl-2 border-l border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-brand-muted group-hover:text-brand-gold-dark transition-colors duration-500 text-[10px] font-sans uppercase tracking-[0.2em] font-medium">
                      {product.series}
                    </span>
                  </div>

                  <h3 className="text-3xl font-serif font-medium text-brand-charcoal tracking-tight mb-4 group-hover:text-brand-gold-dark transition-colors duration-500">
                    {product.name}
                  </h3>

                  <p className="text-brand-muted text-base leading-relaxed font-light mb-8 flex-grow">
                    {product.desc}
                  </p>

                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-charcoal group-hover:text-brand-gold-dark transition-colors duration-500 mt-auto">
                    Explore Series <ArrowRight size={16} className="transition-transform duration-500 ease-out group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

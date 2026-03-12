import { BlurReveal } from './BlurReveal';
import { ArrowUpRight } from 'lucide-react';

const galleryItems = [
  {
    id: "01",
    title: "Vaulted Wood Beam Ceiling",
    category: "HEAVY Series",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: "02",
    title: "Vertical Wood Panel Ceiling",
    category: "LITE Series",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: "03",
    title: "Streamlined Wood Ceiling",
    category: "HEAVY Series",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: "04",
    title: "Cozy Bedroom Wood Ceiling",
    category: "LITE Series",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: "05",
    title: "Rich Wood Ceiling Design",
    category: "Finishing Series",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    id: "06",
    title: "Indoor-Outdoor Wood Ceiling",
    category: "HEAVY Series",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    span: "md:col-span-3 md:row-span-2"
  }
];

export function Gallery() {
  return (
    <section className="py-32 bg-brand-surface-alt text-brand-charcoal relative border-t border-black/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(197,160,89,0.05),transparent_40%)] pointer-events-none mix-blend-multiply" />
      <div className="noise-overlay z-0 opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-24">
          <div className="max-w-2xl">
            <BlurReveal>
              <span className="text-brand-gold-dark font-sans uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-6 flex items-center gap-4">
                <div className="w-8 h-[1px] bg-brand-gold/60"></div>
                Visual Showcase
              </span>
            </BlurReveal>
            <BlurReveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium tracking-tight leading-[1.1] mb-2 text-brand-charcoal">
                Inspiring <span className="italic text-brand-gold-dark font-light">Interiors</span>
              </h2>
            </BlurReveal>
          </div>
          <div className="max-w-sm">
            <BlurReveal delay={0.3}>
              <p className="text-brand-muted text-base md:text-lg leading-relaxed font-light">
                Explore our collection of stunning visuals. Each image represents our creative vision in transforming architectural spaces.
              </p>
            </BlurReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px] group/gallery">
          {galleryItems.map((item, i) => (
            <BlurReveal
              key={item.id}
              delay={0.1 + (i * 0.1)}
              className={`group relative overflow-hidden bg-brand-surface cursor-pointer ${item.span} transition-all duration-700 ease-out md:hover:!opacity-100 md:group-hover/gallery:opacity-60 border border-black/5`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-[1.5s] ease-out group-hover:scale-[1.05] group-hover:opacity-100"
              />
              {/* Lighter gradient for images in tight theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />

              <div className="absolute top-6 left-6 glass-panel text-brand-charcoal text-[10px] font-sans tracking-[0.2em] px-4 py-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                {item.id}
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="glass-panel p-6 w-full md:w-auto shadow-sm">
                    <div className="text-brand-gold-dark text-[9px] font-sans uppercase tracking-[0.3em] font-medium mb-3 flex items-center gap-3">
                      <span className="w-6 h-[1px] bg-brand-gold/60"></span>
                      {item.category}
                    </div>
                    <h3 className="text-brand-charcoal text-xl md:text-2xl font-serif font-medium tracking-tight leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-black/10 bg-white/50 backdrop-blur-md flex items-center justify-center text-brand-charcoal shrink-0 transition-all duration-700 group-hover:bg-brand-gold group-hover:text-white group-hover:border-brand-gold">
                    <ArrowUpRight size={20} strokeWidth={1.5} className="group-hover:rotate-45 transition-transform duration-500" />
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

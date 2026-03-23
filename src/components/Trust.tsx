import React from 'react';
import { BlurReveal } from './BlurReveal';
import { Award, Leaf, ShieldCheck, BadgeCheck, Smartphone, Trophy, Star } from 'lucide-react';

const achievements = [
  {
    title: "Best Mobile User Experience",
    year: "2025",
    desc: "iPanel Wins Best Mobile User Experience Website at BestWeb.LK 2025, recognized for delivering an outstanding and intuitive digital experience.",
    icon: <Smartphone className="text-[#0047FF] w-8 h-8" strokeWidth={1.5} />,
    colSpan: "md:col-span-8 lg:col-span-8",
    featured: true
  },
  {
    title: "Green Brand of the Year",
    year: "2024",
    desc: "Named 'Green Brand of the Year' at SLIM Brand Excellence 2024 for our unwavering commitment to sustainable and eco-friendly practices.",
    icon: <Leaf className="text-emerald-400 w-8 h-8" strokeWidth={1.5} />,
    colSpan: "md:col-span-4 lg:col-span-4",
    featured: true
  },
  {
    title: "Green Labeled Product",
    year: "2023",
    desc: "Recognized by the Green Building Council of Sri Lanka for outstanding eco-friendly building solutions.",
    icon: <ShieldCheck className="text-white/70 w-8 h-8" strokeWidth={1.5} />,
    colSpan: "md:col-span-6 lg:col-span-4",
    featured: false
  },
  {
    title: "Best Innovative Product",
    year: "2015",
    desc: "UPVC ceiling and wall panels awarded at the Kadella Exhibition for revolutionary design.",
    icon: <Award className="text-brand-gold w-8 h-8" strokeWidth={1.5} />,
    colSpan: "md:col-span-6 lg:col-span-4",
    featured: false
  },
  {
    title: "ISO 9001:2015 Quality",
    year: "2016",
    desc: "German Technology certification ensuring international quality standards.",
    icon: <Trophy className="text-[#0047FF]/70 w-8 h-8" strokeWidth={1.5} />,
    colSpan: "md:col-span-12 lg:col-span-4",
    featured: false
  }
];

export function Trust() {
  return (
    <section className="py-32 bg-brand-surface text-brand-charcoal relative overflow-hidden border-t border-black/5">
      {/* Abstract Luxury Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[#0047FF]/5 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />
        <div className="absolute top-[30%] left-[20%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.06),transparent_50%)] z-10 pointer-events-none mix-blend-multiply" />
      </div>

      <div className="noise-overlay z-10 opacity-10"></div>

      <div className="container mx-auto px-6 relative z-20">

        {/* Sleek, Minimalist Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <BlurReveal>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/5 bg-white shadow-sm mb-8">
              <Star className="w-3 h-3 text-[#0047FF] fill-[#0047FF]" />
              <span className="text-brand-charcoal/80 text-[10px] uppercase font-sans tracking-[0.3em] font-bold">
                Hall of Excellence
              </span>
            </div>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-medium tracking-tight leading-[1.05] mb-6 text-brand-charcoal">
              A Legacy of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-charcoal via-brand-dark to-brand-muted">
                Innovation & Trust.
              </span>
            </h2>
          </BlurReveal>

          <BlurReveal delay={0.3}>
            <p className="text-brand-muted text-lg lg:text-xl font-light leading-relaxed">
              Recognized globally and locally for pushing the boundaries of sustainable design and mobile user experience.
            </p>
          </BlurReveal>
        </div>

        {/* Bento Box / Masonry Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {achievements.map((item, i) => (
            <BlurReveal
              key={i}
              delay={0.4 + (i * 0.1)}
              className={`h-full ${item.colSpan}`}
            >
              <div
                className={`
                  relative h-full flex flex-col p-8 md:p-10 rounded-3xl border border-black/5 
                  bg-white/80 backdrop-blur-xl overflow-hidden group 
                  transition-all duration-700 hover:-translate-y-2 hover:border-black/10 
                  shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]
                  ${item.featured ? 'min-h-[350px]' : 'min-h-[280px]'}
                `}
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0047FF]/0 via-transparent to-[#0047FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-auto">
                    <div className="p-4 rounded-2xl bg-brand-surface shadow-sm border border-black/5 group-hover:scale-110 transition-transform duration-500 ease-out">
                      {/* Render icon, overriding text colors if necessary since icons have white/70 in data model */}
                      {React.cloneElement(item.icon as React.ReactElement, {
                        className: `${(item.icon as any).props.className.replace('text-white/70', 'text-brand-muted').replace('text-[#0047FF]/70', 'text-[#0047FF]')} group-hover:text-brand-gold-dark transition-colors`
                      })}
                    </div>
                    {item.featured && (
                      <span className="px-4 py-1.5 rounded-full bg-[#0047FF]/10 border border-[#0047FF]/20 text-[#0047FF] text-[10px] font-bold uppercase tracking-widest font-sans group-hover:bg-[#0047FF] group-hover:text-white transition-colors duration-500">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="mt-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl md:text-5xl font-serif font-light text-brand-muted/30 group-hover:text-brand-muted/60 transition-colors duration-500">
                        {item.year}
                      </span>
                      <div className="flex-grow h-[1px] bg-black/5 group-hover:bg-[#0047FF]/30 transition-colors duration-500" />
                    </div>
                    <h3 className={`font-sans font-medium text-brand-charcoal mb-3 ${item.featured ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-xl md:text-2xl'}`}>
                      {item.title}
                    </h3>
                    <p className="text-brand-muted text-sm md:text-base font-light leading-relaxed max-w-xl group-hover:text-brand-charcoal transition-colors duration-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </BlurReveal>
          ))}
        </div>

        {/* Minimal Footer Accents */}
        <BlurReveal delay={0.9}>
          <div className="mt-20 flex justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
            <span className="text-brand-charcoal/50 text-xs font-mono uppercase tracking-[0.4em]">Official Partners & Certifications</span>
            <div className="flex gap-4">
              <BadgeCheck className="w-6 h-6 text-brand-charcoal" strokeWidth={1} />
              <ShieldCheck className="w-6 h-6 text-[#0047FF]" strokeWidth={1} />
            </div>
          </div>
        </BlurReveal>

      </div>
    </section>
  );
}

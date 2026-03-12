import { BlurReveal } from './BlurReveal';
import { ImageComparison } from './ImageComparison';
import {
  Flame, Paintbrush, Sparkles, Hammer,
  Droplets, HeartPulse, CloudSun, Clock,
  BugOff, Shield, Recycle, Feather
} from 'lucide-react';

const benefits = [
  {
    id: "01",
    icon: <Flame size={24} strokeWidth={1} />,
    title: "Fire Retardant",
    desc: "Advanced fire-resistant materials that meet safety standards and provide excellent protection against fire hazards in construction applications."
  },
  {
    id: "02",
    icon: <Paintbrush size={24} strokeWidth={1} />,
    title: "No Need to Paint",
    desc: "Pre-finished surface eliminates the need for painting, saving time and maintenance costs while maintaining aesthetic appeal."
  },
  {
    id: "03",
    icon: <Sparkles size={24} strokeWidth={1} />,
    title: "Easy Maintenance",
    desc: "Simple cleaning and minimal upkeep required. Resistant to stains and dirt, making maintenance effortless and cost-effective."
  },
  {
    id: "04",
    icon: <Hammer size={24} strokeWidth={1} />,
    title: "Saves Labor",
    desc: "Quick and easy installation process reduces labor costs and project timelines significantly compared to traditional materials."
  },
  {
    id: "05",
    icon: <Droplets size={24} strokeWidth={1} />,
    title: "Water Resist",
    desc: "Excellent water resistance properties prevent moisture damage, mold growth, and structural deterioration over time."
  },
  {
    id: "06",
    icon: <HeartPulse size={24} strokeWidth={1} />,
    title: "Free from Health Hazards",
    desc: "Non-toxic materials that are safe for indoor use, containing no harmful chemicals or volatile organic compounds (VOCs)."
  },
  {
    id: "07",
    icon: <CloudSun size={24} strokeWidth={1} />,
    title: "Any Climate Tolerant",
    desc: "Performs excellently in various weather conditions - from extreme heat to cold, humidity, and changing seasonal conditions."
  },
  {
    id: "08",
    icon: <Clock size={24} strokeWidth={1} />,
    title: "Saves Time",
    desc: "Streamlined installation process and reduced preparation time leads to faster project completion and quicker occupancy."
  },
  {
    id: "09",
    icon: <BugOff size={24} strokeWidth={1} />,
    title: "Free from Insect",
    desc: "Naturally resistant to termites, ants, and other insects, eliminating the need for chemical treatments and pest control."
  },
  {
    id: "10",
    icon: <Shield size={24} strokeWidth={1} />,
    title: "Not a Cancerous Product",
    desc: "Completely safe and non-carcinogenic materials that pose no health risks to occupants or construction workers."
  },
  {
    id: "11",
    icon: <Recycle size={24} strokeWidth={1} />,
    title: "Less Wastage",
    desc: "Precise manufacturing and easy cutting reduce material waste, making it an environmentally friendly and cost-effective choice."
  },
  {
    id: "12",
    icon: <Feather size={24} strokeWidth={1} />,
    title: "Light Weighted",
    desc: "Lightweight design reduces structural load requirements and makes handling and installation easier without compromising strength."
  }
];

export function Performance() {
  return (
    <section className="py-32 bg-brand-surface relative overflow-hidden">
      {/* Soft gradient background to blend with light theme but feel premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-surface to-[#F0F0F0]" />
      <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.05),transparent_70%)] pointer-events-none mix-blend-multiply" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <div className="max-w-4xl">
            <BlurReveal>
              <span className="text-brand-gold-dark font-sans uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-8 flex items-center gap-4">
                <div className="w-8 h-[1px] bg-brand-gold/60"></div>
                Performance Validation
              </span>
            </BlurReveal>
            <BlurReveal delay={0.2}>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-brand-charcoal tracking-tight leading-[1.05]">
                Built for Sri Lanka.<br />Proven to <span className="italic text-brand-gold-dark font-light">Last.</span>
              </h2>
            </BlurReveal>
          </div>
          <div className="max-w-sm lg:pb-3">
            <BlurReveal delay={0.3}>
              <p className="text-brand-muted text-base md:text-lg leading-relaxed font-light">
                While imitation panels warp, crack, and discolor within two years of exposure to humidity and heat, the original i-Panel maintains its form and finish for decades.
              </p>
            </BlurReveal>
          </div>
        </div>

        {/* Image Comparison Exhibit */}
        <BlurReveal delay={0.4} className="mb-32">
          <div className="relative w-full border border-black/5 p-4 md:p-8 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] rounded-2xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
              <div className="text-brand-muted font-sans text-[10px] font-bold uppercase tracking-widest flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-muted/50"></span>
                Imitation (2 Years)
              </div>
              <div className="text-brand-gold font-sans text-[10px] font-bold uppercase tracking-widest flex items-center gap-3">
                Original i-Panel (15 Years)
                <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-black/5">
              <ImageComparison
                beforeImage="https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=1200&auto=format&fit=crop"
                afterImage="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
          </div>
        </BlurReveal>

        {/* Technical Specifications Grid */}
        <div>
          <BlurReveal delay={0.5}>
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-2xl font-serif font-medium text-brand-charcoal tracking-tight">Technical Specifications</h3>
              <div className="flex-grow h-[1px] bg-brand-gold/20"></div>
            </div>
          </BlurReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-black/5 border border-black/5 rounded-2xl overflow-hidden shadow-sm">
            {benefits.map((benefit, i) => (
              <BlurReveal key={i} delay={0.1 + (i % 4) * 0.1} className="bg-white hover:bg-[#FAFAFA] transition-colors duration-500 group flex flex-col h-full relative overflow-hidden">
                <div className="p-8 flex flex-col h-full z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-brand-charcoal transition-colors duration-500 group-hover:text-brand-gold-dark">
                      {benefit.icon}
                    </div>
                    <div className="text-brand-muted/30 font-sans text-xs uppercase tracking-widest font-bold transition-colors duration-500 group-hover:text-brand-gold/50">
                      {benefit.id}
                    </div>
                  </div>
                  <h4 className="text-lg font-serif font-medium mb-3 text-brand-charcoal tracking-tight transition-colors duration-500 group-hover:text-brand-gold-dark">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed font-light flex-grow">
                    {benefit.desc}
                  </p>
                </div>
                {/* Sharp hover accent line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 ease-out z-20"></div>
              </BlurReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

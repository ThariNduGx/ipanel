import { BlurReveal } from './BlurReveal';
import { ArrowRight } from 'lucide-react';

export function Quotation() {
  return (
    <section className="py-32 bg-brand-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-[500px] bg-[radial-gradient(circle_at_top_left,rgba(197,160,89,0.05),transparent_70%)] pointer-events-none mix-blend-multiply" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <div className="max-w-xl">
              <BlurReveal>
                <span className="text-brand-gold-dark font-sans uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-6 flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-brand-gold/60"></div>
                  Start Your Project
                </span>
              </BlurReveal>
              <BlurReveal delay={0.2}>
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-medium mb-8 text-brand-charcoal tracking-tight leading-[1.1]">
                  Begin Your Project <br />with the <span className="italic text-brand-gold-dark font-light">Original.</span>
                </h2>
              </BlurReveal>
              <BlurReveal delay={0.3}>
                <p className="text-brand-muted text-base md:text-lg mb-12 leading-relaxed font-light">
                  Tell us about your space and our specialists will handle the rest. Whether it's a private estate, luxury hotel, or commercial development, our team provides tailored material guidance and precision quotations.
                </p>
              </BlurReveal>
              <BlurReveal delay={0.4} className="hidden lg:block">
                <div className="aspect-[4/3] bg-brand-surface-alt overflow-hidden border border-black/5 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                    alt="Office Interior"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-[2s] hover:scale-105 ease-out"
                  />
                </div>
              </BlurReveal>
            </div>

            <BlurReveal delay={0.5}>
              <div className="bg-brand-surface-alt p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-black/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl group-hover:bg-brand-gold/10 transition-colors duration-700"></div>

                <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <h3 className="text-2xl font-serif font-medium mb-10 text-brand-charcoal tracking-tight">Request an Estimate</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="space-y-2 relative">
                      <input type="text" id="fname" className="peer w-full bg-transparent border-b border-black/15 pb-3 pt-4 focus:outline-none focus:border-brand-gold transition-colors text-brand-charcoal placeholder-transparent font-light" placeholder="First Name" />
                      <label htmlFor="fname" className="absolute left-0 top-0 text-[10px] text-brand-muted uppercase tracking-[0.2em] font-bold transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-gold">First Name</label>
                    </div>
                    <div className="space-y-2 relative">
                      <input type="text" id="lname" className="peer w-full bg-transparent border-b border-black/15 pb-3 pt-4 focus:outline-none focus:border-brand-gold transition-colors text-brand-charcoal placeholder-transparent font-light" placeholder="Last Name" />
                      <label htmlFor="lname" className="absolute left-0 top-0 text-[10px] text-brand-muted uppercase tracking-[0.2em] font-bold transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-gold">Last Name</label>
                    </div>
                  </div>

                  <div className="space-y-2 relative">
                    <input type="email" id="email" className="peer w-full bg-transparent border-b border-black/15 pb-3 pt-4 focus:outline-none focus:border-brand-gold transition-colors text-brand-charcoal placeholder-transparent font-light" placeholder="Email Address" />
                    <label htmlFor="email" className="absolute left-0 top-0 text-[10px] text-brand-muted uppercase tracking-[0.2em] font-bold transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-gold">Email Address</label>
                  </div>

                  <div className="space-y-2 relative pt-4">
                    <select className="w-full bg-transparent border-b border-black/15 pb-3 focus:outline-none focus:border-brand-gold transition-colors text-brand-charcoal appearance-none text-sm font-light">
                      <option value="" className="text-brand-muted">Select Project Type</option>
                      <option value="residential" className="text-brand-charcoal">Residential Estate</option>
                      <option value="commercial" className="text-brand-charcoal">Commercial Property</option>
                      <option value="hospitality" className="text-brand-charcoal">Hospitality / Hotel</option>
                    </select>
                    <div className="absolute right-0 top-4 pointer-events-none text-brand-gold-dark">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><path d="M6 9l6 6 6-6" /></svg>
                    </div>
                  </div>

                  <button className="group relative w-full bg-brand-charcoal text-white py-5 text-[10px] uppercase tracking-[0.2em] font-semibold overflow-hidden transition-all mt-12 hover:shadow-[0_10px_30px_rgba(28,28,28,0.2)]">
                    <span className="relative z-10 flex items-center justify-center gap-3 transition-colors duration-300">
                      Submit Request <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-brand-gold translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out"></div>
                  </button>
                </form>
              </div>
            </BlurReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

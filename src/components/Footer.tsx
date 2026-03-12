import { Instagram, Facebook, Linkedin, ArrowUpRight, ArrowRight, Award } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-surface text-brand-charcoal mt-10 border-t border-black/5 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[300px] bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.08),transparent_70%)] pointer-events-none mix-blend-multiply" />
      <div className="noise-overlay z-0 opacity-10"></div>

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-4 flex flex-col items-start lg:pr-8">
            <h2 className="text-3xl font-serif font-medium text-brand-charcoal mb-3 tracking-tight">
              i<span className="text-brand-gold-dark">-</span>Panel<sup className="text-sm">®</sup>
            </h2>
            <h3 className="text-brand-gold-dark font-sans text-[10px] uppercase tracking-[0.2em] font-bold mb-6 leading-relaxed">
              Sri Lanka's No 1 UPVC Ceiling And Wall Panel Manufacturer
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed mb-10 font-light">
              We're dedicated to transforming spaces with sustainable and innovative UPVC panel solutions. With over two decades of experience, we deliver high-quality, eco-friendly products and expert installation, creating beautiful and functional environments for our clients.
            </p>

            {/* Newsletter */}
            <div className="w-full bg-white/50 p-6 rounded-2xl border border-black/5">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-brand-charcoal mb-2">Stay Updated</h4>
              <p className="text-brand-muted text-[11px] leading-relaxed mb-4 font-light">
                Be the first to know about our exclusive deals and the latest news. Subscribe today!
              </p>
              <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-black/15 pb-2 pt-2 focus:outline-none focus:border-brand-gold-dark transition-colors text-brand-charcoal placeholder-brand-muted/50 font-light text-sm"
                />
                <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-wider font-bold text-brand-gold-dark hover:text-brand-charcoal transition-colors flex items-center gap-1">
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-brand-gold-dark mb-6">Quick Links</h4>
            <ul className="space-y-4 font-light text-sm">
              {['Home', 'Our Story', 'Products', 'Projects', 'Quotation', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-brand-muted hover:text-brand-charcoal transition-colors flex items-center gap-1 group">
                    {link} <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-brand-gold-dark mb-6">Resources</h4>
            <ul className="space-y-4 font-light text-sm">
              {['Discover More', 'Help & Support', 'Privacy & Cookie Policy', 'Terms & Conditions'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-brand-muted hover:text-brand-charcoal transition-colors flex items-center gap-1 group">
                    {link} <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Awards Column */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-brand-gold-dark mb-6">Contact</h4>
            <div className="space-y-5 font-light text-sm text-brand-muted">
              <p className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-brand-charcoal font-bold mb-1">Email</span>
                <a href="mailto:info@ipanel.lk" className="hover:text-brand-charcoal transition-colors">info@ipanel.lk</a>
              </p>
              <p className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-brand-charcoal font-bold mb-1">Direct Line</span>
                <a href="tel:0722002200" className="hover:text-brand-charcoal transition-colors">07 2200 2200</a>
              </p>
              <p className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-brand-charcoal font-bold mb-1">Corporate Office</span>
                Idea Industries, 06, Lucas Road,<br />
                Colombo 14
              </p>
            </div>

            <div className="mt-10">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-brand-gold-dark mb-4">Awards</h4>
              <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-brand-gold-dark/20 bg-[#3B82F6]/5 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#3B82F6] flex flex-shrink-0 items-center justify-center text-white shadow-sm">
                  <Award size={16} strokeWidth={2} />
                </div>
                <span className="text-brand-charcoal text-xs font-bold font-sans">
                  BestWeb.LK 2025 Badge
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-muted text-[10px] uppercase tracking-[0.2em] font-sans font-bold">
            © 2026 Idea Group of Companies. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-brand-muted hover:bg-brand-gold-dark hover:text-white hover:border-brand-gold-dark transition-all duration-300">
              <Instagram size={14} strokeWidth={1.5} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-brand-muted hover:bg-brand-gold-dark hover:text-white hover:border-brand-gold-dark transition-all duration-300">
              <Facebook size={14} strokeWidth={1.5} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-brand-muted hover:bg-brand-gold-dark hover:text-white hover:border-brand-gold-dark transition-all duration-300">
              <Linkedin size={14} strokeWidth={1.5} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

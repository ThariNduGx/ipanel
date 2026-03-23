import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, ArrowUpRight, ArrowRight, Award, MapPin, Phone, Mail } from 'lucide-react';

const siteDirectory = {
  brand: [
    { label: 'Home', to: '/' },
    { label: 'Our Story', to: '/about/our-story' },
    { label: 'Inspiration', to: '/about' },
    { label: 'Dealer Locator', to: '/find-a-dealer' },
  ],
  collections: [
    { label: 'i-Panel LITE', to: '/products/lite' },
    { label: 'i-Panel HEAVY-B', to: '/products/heavy-b' },
    { label: 'i Series (Flat)', to: '/products/i-series' },
    { label: 'Finishing Series', to: '/products/finishing-series' },
    { label: 'All Products', to: '/products' },
  ],
  flagship: [
    { label: 'Kaluwara', to: '/products/lite/kaluwara' },
    { label: 'Africa Teak', to: '/products/lite/africa-teak' },
    { label: 'Storm Grey', to: '/products/heavy-b/storm-grey' },
    { label: 'Cream Satin', to: '/products/i-series/cream-satin' },
    { label: 'Matt White', to: '/products/lite/matt-white' },
  ],
  support: [
    { label: 'Informed Choices (FAQ)', to: '/resources/faq' },
    { label: 'Technical Quote', to: '/get-a-quote' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms of Use', to: '/terms-and-conditions' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-surface text-brand-charcoal mt-10 border-t border-black/5 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[300px] bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.08),transparent_70%)] pointer-events-none mix-blend-multiply" />
      <div className="noise-overlay z-0 opacity-10" />

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start lg:pr-8">
            <Link to="/" className="text-3xl font-serif font-medium text-brand-charcoal mb-3 tracking-tight hover:opacity-80 transition-opacity">
              i<span className="text-brand-gold-dark">-</span>Panel<sup className="text-sm">®</sup>
            </Link>
            <h3 className="text-brand-gold-dark font-sans text-[10px] uppercase tracking-[0.2em] font-bold mb-6 leading-relaxed">
              Sri Lanka's No.1 UPVC Ceiling and Wall Panel Manufacturer
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed mb-10 font-light">
              For fifteen years, i-Panel has defined the standard for UPVC ceiling and wall panels in Sri Lanka. Our engineering-led approach produces finishes that outperform imitations on every measurable dimension of durability, colour accuracy, and installation precision.
            </p>

            {/* Newsletter */}
            <div className="w-full bg-white/50 p-6 rounded-2xl border border-black/5">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-brand-charcoal mb-2">
                Stay Updated
              </h4>
              <p className="text-brand-muted text-[11px] leading-relaxed mb-4 font-light">
                New finishes, project features, and specification guides delivered to your inbox.
              </p>
              <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-black/15 pb-2 pt-2 focus:outline-none focus:border-brand-gold-dark transition-colors text-brand-charcoal placeholder-brand-muted/50 font-light text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-wider font-bold text-brand-gold-dark hover:text-brand-charcoal transition-colors flex items-center gap-1"
                >
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>

          {/* Brand Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-brand-gold-dark mb-6">
              Brand
            </h4>
            <ul className="space-y-4 font-light text-sm">
              {siteDirectory.brand.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-brand-muted hover:text-brand-charcoal transition-colors flex items-center gap-1 group"
                  >
                    {l.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-brand-gold-dark mb-6 mt-10">
              Support
            </h4>
            <ul className="space-y-4 font-light text-sm">
              {siteDirectory.support.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-brand-muted hover:text-brand-charcoal transition-colors flex items-center gap-1 group"
                  >
                    {l.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-brand-gold-dark mb-6">
              Collections
            </h4>
            <ul className="space-y-4 font-light text-sm">
              {siteDirectory.collections.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-brand-muted hover:text-brand-charcoal transition-colors flex items-center gap-1 group"
                  >
                    {l.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-brand-gold-dark mb-6 mt-10">
              Flagship Finishes
            </h4>
            <ul className="space-y-4 font-light text-sm">
              {siteDirectory.flagship.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-brand-muted hover:text-brand-charcoal transition-colors flex items-center gap-1 group"
                  >
                    {l.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-brand-gold-dark mb-6">
              Contact
            </h4>
            <div className="space-y-5 font-light text-sm text-brand-muted">
              <p className="flex items-start gap-3">
                <Mail size={14} className="mt-0.5 text-brand-gold-dark flex-shrink-0" />
                <span className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-brand-charcoal font-bold mb-1">Email</span>
                  <a href="mailto:info@ipanel.lk" className="hover:text-brand-charcoal transition-colors">
                    info@ipanel.lk
                  </a>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Phone size={14} className="mt-0.5 text-brand-gold-dark flex-shrink-0" />
                <span className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-brand-charcoal font-bold mb-1">Direct Line</span>
                  <a href="tel:0722002200" className="hover:text-brand-charcoal transition-colors">
                    07 2200 2200
                  </a>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 text-brand-gold-dark flex-shrink-0" />
                <span className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-brand-charcoal font-bold mb-1">
                    Corporate Office
                  </span>
                  Idea Industries, 06, Lucas Road,
                  <br />
                  Colombo 14, Sri Lanka
                </span>
              </p>
            </div>

            <div className="mt-10">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-brand-gold-dark mb-4">
                Recognition
              </h4>
              <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-brand-gold-dark/20 bg-[#0047FF]/5 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#0047FF] flex flex-shrink-0 items-center justify-center text-white shadow-sm">
                  <Award size={16} strokeWidth={2} />
                </div>
                <span className="text-brand-charcoal text-xs font-bold font-sans">
                  BestWeb.LK 2025 Badge
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/get-a-quote"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-wider font-bold hover:bg-brand-gold-dark transition-all duration-300"
              >
                Request a Technical Quote <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-muted text-[10px] uppercase tracking-[0.2em] font-sans font-bold">
            2026 Idea Group of Companies. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="i-Panel on Instagram"
              className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-brand-muted hover:bg-brand-gold-dark hover:text-white hover:border-brand-gold-dark transition-all duration-300"
            >
              <Instagram size={14} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="i-Panel on Facebook"
              className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-brand-muted hover:bg-brand-gold-dark hover:text-white hover:border-brand-gold-dark transition-all duration-300"
            >
              <Facebook size={14} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="i-Panel on LinkedIn"
              className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-brand-muted hover:bg-brand-gold-dark hover:text-white hover:border-brand-gold-dark transition-all duration-300"
            >
              <Linkedin size={14} strokeWidth={1.5} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

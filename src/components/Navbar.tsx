import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const seriesLinks = [
  {
    label: 'LITE',
    to: '/products/lite',
    tagline: 'Wood grain excellence. 12 finishes.',
    image: '/products/lite.jpg',
  },
  {
    label: 'HEAVY-B',
    to: '/products/heavy-b',
    tagline: 'Bevelled precision. Architectural shadow lines.',
    image: '/products/heavy-b.jpg',
  },
  {
    label: 'HEAVY-F',
    to: '/products/heavy-f',
    tagline: 'Pure flat planes. Maximum light diffusion.',
    image: '/products/heavy-flat.jpg',
  },
  {
    label: 'Wall Cladding',
    to: '/products/wall-cladding',
    tagline: 'Vertical stories. Horizontal ambition.',
    image: '/products/wall.jpg',
  },
];

const primaryLinks = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Inspiration', to: '/inspiration' },
  { label: 'Locate Store', to: '/locate-store' },
  { label: 'Shop', to: '/shop' },
];

export function Navbar() {
  const { pathname } = useLocation();
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(seriesLinks[0].image);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleCollectionsEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setCollectionsOpen(true);
  };

  const handleCollectionsLeave = () => {
    closeTimer.current = setTimeout(() => setCollectionsOpen(false), 180);
  };

  const isCollectionsActive = pathname.startsWith('/products');

  return (
    <>
      {/* Desktop Floating Dock */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-500 ${
          scrolled ? 'top-3' : 'top-4'
        }`}
      >
        <div
          className={`flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-500 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-black/8'
              : 'bg-white/80 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-white/60'
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="font-serif font-medium text-xl text-brand-charcoal tracking-tight px-3 py-1.5 rounded-full hover:bg-black/5 transition-colors mr-1"
          >
            i<span className="text-[#3B82F6]">-</span>Panel<sup className="text-[9px]">®</sup>
          </Link>

          {/* Divider */}
          <div className="w-px h-5 bg-black/10 mx-1" />

          {/* Primary Links */}
          {primaryLinks.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.12em] font-bold font-sans transition-all duration-200 ${
                  active
                    ? 'bg-brand-charcoal text-white shadow-sm'
                    : 'text-brand-muted hover:text-brand-charcoal hover:bg-black/5'
                }`}
              >
                {l.label}
              </Link>
            );
          })}

          {/* Collections Mega Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={handleCollectionsEnter}
            onMouseLeave={handleCollectionsLeave}
          >
            <button
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.12em] font-bold font-sans transition-all duration-200 ${
                isCollectionsActive || collectionsOpen
                  ? 'bg-brand-charcoal text-white shadow-sm'
                  : 'text-brand-muted hover:text-brand-charcoal hover:bg-black/5'
              }`}
            >
              Collections
              <ChevronDown
                size={12}
                className={`transition-transform duration-200 ${collectionsOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Mega Menu Dropdown */}
            {collectionsOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] rounded-2xl bg-white/98 backdrop-blur-xl border border-black/8 shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden"
                onMouseEnter={handleCollectionsEnter}
                onMouseLeave={handleCollectionsLeave}
              >
                <div className="flex">
                  {/* Series List */}
                  <div className="flex-1 p-4 space-y-1">
                    <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-muted px-3 mb-3">
                      Series Collections
                    </p>
                    {seriesLinks.map((s) => {
                      const active = pathname === s.to;
                      return (
                        <Link
                          key={s.to}
                          to={s.to}
                          onMouseEnter={() => setPreviewImage(s.image)}
                          onClick={() => setCollectionsOpen(false)}
                          className={`flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-150 group ${
                            active ? 'bg-brand-charcoal text-white' : 'hover:bg-brand-surface'
                          }`}
                        >
                          <div>
                            <p
                              className={`text-[12px] font-bold font-serif tracking-wide ${
                                active ? 'text-white' : 'text-brand-charcoal'
                              }`}
                            >
                              {s.label}
                            </p>
                            <p
                              className={`text-[10px] font-sans mt-0.5 ${
                                active ? 'text-white/70' : 'text-brand-muted'
                              }`}
                            >
                              {s.tagline}
                            </p>
                          </div>
                          <ArrowRight
                            size={14}
                            className={`opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${
                              active ? 'text-white opacity-100 translate-x-0' : 'text-brand-muted'
                            }`}
                          />
                        </Link>
                      );
                    })}
                    <div className="border-t border-black/5 mt-2 pt-2">
                      <Link
                        to="/products"
                        onClick={() => setCollectionsOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-brand-surface transition-all group"
                      >
                        <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted group-hover:text-brand-charcoal transition-colors">
                          View All Products
                        </span>
                        <ArrowRight size={12} className="text-brand-muted group-hover:text-brand-charcoal transition-colors" />
                      </Link>
                    </div>
                  </div>

                  {/* Preview Image Stage */}
                  <div className="w-[200px] relative overflow-hidden rounded-r-2xl">
                    <img
                      key={previewImage}
                      src={previewImage}
                      alt="Series preview"
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-black/10 mx-1" />

          {/* Cart Icon */}
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative p-2.5 rounded-full text-brand-muted hover:text-brand-charcoal hover:bg-black/5 transition-all duration-200"
          >
            <ShoppingBag size={16} />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-brand-charcoal text-white text-[8px] font-bold rounded-full min-w-[16px] h-4 flex items-center justify-center px-0.5">
                {itemCount}
              </span>
            )}
          </button>

          {/* CTA */}
          <Link
            to="/quote"
            className="px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-[11px] uppercase tracking-wider font-bold hover:bg-[#2563EB] transition-all duration-200 shadow-[0_4px_14px_rgba(59,130,246,0.35)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)]"
          >
            Technical Quote
          </Link>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-[0_2px_20px_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/" className="font-serif font-medium text-xl text-brand-charcoal tracking-tight">
            i<span className="text-[#3B82F6]">-</span>Panel<sup className="text-[9px]">®</sup>
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={openCart}
              aria-label="Open cart"
              className="relative p-2 text-brand-charcoal"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-brand-charcoal text-white text-[8px] font-bold rounded-full min-w-[15px] h-[15px] flex items-center justify-center px-0.5">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              className="text-brand-charcoal p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 bg-white/98 backdrop-blur-xl ${
            menuOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col px-6 py-5 gap-1">
            {primaryLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-[11px] uppercase tracking-[0.15em] font-bold font-sans transition-colors ${
                  pathname === l.to
                    ? 'bg-brand-charcoal text-white'
                    : 'text-brand-muted hover:text-brand-charcoal hover:bg-brand-surface'
                }`}
              >
                {l.label}
              </Link>
            ))}

            {/* Collections Accordion */}
            <button
              onClick={() => setMobileCollectionsOpen(!mobileCollectionsOpen)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-[11px] uppercase tracking-[0.15em] font-bold font-sans transition-colors ${
                isCollectionsActive ? 'bg-brand-charcoal text-white' : 'text-brand-muted hover:bg-brand-surface'
              }`}
            >
              Collections
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${mobileCollectionsOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {mobileCollectionsOpen && (
              <div className="pl-4 space-y-1 mb-1">
                {seriesLinks.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => { setMenuOpen(false); setMobileCollectionsOpen(false); }}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-brand-surface transition-colors group"
                  >
                    <div>
                      <p className="text-[11px] font-bold font-serif text-brand-charcoal">{s.label}</p>
                      <p className="text-[9px] text-brand-muted font-sans">{s.tagline}</p>
                    </div>
                    <ArrowRight size={12} className="text-brand-muted" />
                  </Link>
                ))}
              </div>
            )}

            <div className="pt-2 border-t border-black/5 mt-2">
              <Link
                to="/quote"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center block px-5 py-3 rounded-full bg-[#3B82F6] text-white text-[11px] uppercase tracking-wider font-bold shadow-[0_4px_14px_rgba(59,130,246,0.3)]"
              >
                Technical Quote
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

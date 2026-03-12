import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'Gallery', to: '/#gallery' },
    { label: 'Awards', to: '/#awards' },
    { label: 'FAQ', to: '/#faq' },
];

export function Navbar() {
    const { pathname } = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/90 backdrop-blur-xl border-b border-black/5 shadow-[0_2px_20px_rgba(0,0,0,0.04)]'
                    : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between h-16 md:h-18">
                {/* Logo */}
                <Link to="/" className="font-serif font-medium text-2xl text-brand-charcoal tracking-tight">
                    i<span className="text-[#3B82F6]">-</span>Panel<sup className="text-xs">®</sup>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((l) => {
                        const active = pathname === l.to;
                        return (
                            <Link
                                key={l.to}
                                to={l.to}
                                className={`text-[11px] uppercase tracking-[0.15em] font-bold font-sans transition-colors ${active ? 'text-[#3B82F6]' : 'text-brand-muted hover:text-brand-charcoal'
                                    }`}
                            >
                                {l.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        to="/#quotation"
                        className="px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-[11px] uppercase tracking-wider font-bold hover:bg-[#2563EB] transition-colors shadow-[0_4px_14px_rgba(59,130,246,0.35)]"
                    >
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-brand-charcoal p-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white border-t border-black/5 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="flex flex-col px-6 py-5 gap-5">
                    {links.map((l) => (
                        <Link
                            key={l.to}
                            to={l.to}
                            onClick={() => setMenuOpen(false)}
                            className={`text-[11px] uppercase tracking-[0.15em] font-bold font-sans transition-colors ${pathname === l.to ? 'text-[#3B82F6]' : 'text-brand-muted hover:text-brand-charcoal'
                                }`}
                        >
                            {l.label}
                        </Link>
                    ))}
                    <Link
                        to="/#quotation"
                        onClick={() => setMenuOpen(false)}
                        className="w-full text-center px-5 py-3 rounded-full bg-[#3B82F6] text-white text-[11px] uppercase tracking-wider font-bold"
                    >
                        Get a Quote
                    </Link>
                </nav>
            </div>
        </header>
    );
}

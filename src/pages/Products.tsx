import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    ShieldCheck, Droplets, Flame, Leaf,
    ArrowRight, Phone, MessageCircle, MapPin,
    CheckCircle2, Layers, BadgeCheck, Zap, Package, Plus
} from 'lucide-react';
import { Footer } from '../components/Footer';
import { BlurReveal } from '../components/BlurReveal';

// ─── Data ────────────────────────────────────────────────────────────────────
const stats = [
    { value: '5', label: 'Panel Series' },
    { value: '40+', label: 'Surface Finishes' },
    { value: '15yr', label: 'Max Warranty' },
    { value: 'ISO', label: '9001:2015 Certified' },
    { value: 'Click-it™', label: 'Installation System' },
];

const series = [
    {
        id: 'heavy-flat', code: '01', name: 'HEAVY Flat', sub: 'Architectural Flat Series',
        profile: '8\" profile', warranty: '10 year warranty', tag: 'FLAGSHIP',
        img: '/products/heavy-flat.jpg',
        desc: 'The flattest profile in the i-Panel range. The ideal specification when a perfectly seamless, continuous ceiling plane is the architectural intention. At 8 inches wide and 7.5mm thick, these panels deliver the clean, uninterrupted ceilings of premium offices, hotel lobbies, and architect-designed residences.',
        finishes: ['Matt White', 'Solid Fabric', 'White Wood', 'Gray Wood', 'Pine Wood', 'Nadun', 'Rich Maple', 'Danish Teak', 'Golden Teak', 'Teak', 'Rich Teak', 'Burma Teak', 'Africa Teak', 'Jack Wood', 'Kithul', 'Kaluwara'],
        useCases: ['Premium Offices', 'Hotel Lobbies', 'Residences'],
        tagColor: 'gold',
    },
    {
        id: 'heavy-b', code: '02', name: 'HEAVY-B', sub: 'Designer Profile Series',
        profile: '8\" B profile', warranty: '10 year warranty', tag: 'MOST POPULAR',
        img: '/products/heavy-b.jpg',
        desc: 'The B profile joint creates an architectural shadow line giving installations a sense of depth and dimension that flat panels cannot achieve. Frequently specified by Sri Lankan architects for distinguished living areas, hotel corridors, and premium corporate environments.',
        finishes: ['Matt White', 'Solid Fabric', 'Silver Line', 'Black Line', 'Gold Line', 'White Wood', 'Gray Wood', 'Pine Wood', 'Nadun', 'Rich Maple', 'Danish Teak', 'Golden Teak', 'Teak', 'Rich Teak', 'Burma Teak', 'Africa Teak', 'Jack Wood', 'Coffee Bean', 'Kithul', 'Kaluwara'],
        useCases: ['Living Areas', 'Hotel Corridors', 'Corporate Spaces'],
        tagColor: 'gold',
    },
    {
        id: 'heavy-f', code: '03', name: 'HEAVY-F', sub: 'Fire Rated Series',
        profile: '8\" F profile', warranty: 'Up to 15 years', tag: 'FIRE CERTIFIED',
        img: '/products/heavy-flat.jpg',
        desc: 'The only i-Panel series carrying international fire safety certification. Required for hospitals, hotels, schools, and commercial buildings where fire compliance is mandatory. Delivers the same architectural shadow line depth as HEAVY-B while meeting critical safety standards.',
        finishes: ['Full HEAVY-B finish range including fire-rated variants'],
        useCases: ['Hospitals & Clinics', 'Schools & Hotels', 'Commercial Buildings'],
        tagColor: 'red',
        isFire: true,
    },
    {
        id: 'lite', code: '04', name: 'i-Panel LITE', sub: 'Project Series',
        profile: '4\" profile', warranty: '5 year warranty', tag: 'BEST VALUE',
        img: '/products/lite.jpg',
        desc: 'The lightest and most versatile panel in the range. Easier to handle on site, faster to install with the Click-it™ system, and available in the widest color selection. The first choice for residential professionals.',
        finishes: ['Widest colour selection in range — contact for full catalogue'],
        useCases: ['Residential Projects', 'Fast-Track Builds', 'Renovations'],
        tagColor: 'gold',
    },
    {
        id: 'wall', code: '05', name: 'i-Panel Wall', sub: 'Wall Cladding Series',
        profile: '4\" profile', warranty: 'Up to 15 years', tag: 'NEW',
        img: '/products/wall.jpg',
        desc: 'The i-Panel system now extends to vertical surfaces. This series brings moisture resistance and zero-maintenance performance to bathrooms, kitchens, and feature walls.',
        finishes: ['Solid Fabric', 'Pearl Marble', 'Wooden', 'Grey Marble', 'Sand Wave', 'Matte Black Marble'],
        useCases: ['Bathrooms', 'Kitchens', 'Feature Walls'],
        tagColor: 'green',
        isNew: true,
    },
];

const techBenefits = [
    { icon: <ShieldCheck size={18} strokeWidth={1.5} />, title: 'Maintenance Free', desc: 'UV stabilised surfaces never need sanding or painting.' },
    { icon: <Droplets size={18} strokeWidth={1.5} />, title: 'Zero Moisture', desc: 'UPVC formulation absorbs no water — ideal for bathrooms.' },
    { icon: <Leaf size={18} strokeWidth={1.5} />, title: 'Termite Proof', desc: 'Inorganic composition provides absolute biological protection.' },
    { icon: <Leaf size={18} strokeWidth={1.5} />, title: 'The Green Choice', desc: '1,875 trees saved monthly. 100% recyclable. Zero formaldehyde.' },
];

const authenticityMarkers = [
    { icon: <BadgeCheck size={20} strokeWidth={1.5} />, title: 'Registered Trademark', desc: 'Every genuine panel carries the i-Panel® trademark and a unique serial number printed on the reverse.' },
    { icon: <Layers size={20} strokeWidth={1.5} />, title: 'Honeycomb Core', desc: 'Internal honeycomb architecture maintains structural stability at temperatures up to 60°C.' },
    { icon: <CheckCircle2 size={20} strokeWidth={1.5} />, title: '7.5mm Thickness', desc: 'Original panels are 7.5mm thick. Imitations are often only 6.0mm, which leads to sagging.' },
    { icon: <Zap size={20} strokeWidth={1.5} />, title: 'Click-it™ System', desc: 'Our joint is precision milled to be gap-free and requires absolutely no silicone sealant.' },
];

const trimmingProfiles = [
    { name: 'Profile A', dims: '4\" × 4\"', desc: 'Standard perimeter profile for wall-to-ceiling transitions.' },
    { name: 'Profile B', dims: '2\" × 2\"', desc: 'Internal corner profile for direction changes between panels.' },
    { name: 'Profile C', dims: '3\" × 1\"', desc: 'Slim step-down profile for exposed panel edges.' },
];

// ─── Section Label — matches home page eyebrow style ─────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <span className="text-brand-gold-dark font-sans uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-6 flex items-center gap-4">
            <div className="w-8 h-[1px] bg-brand-gold/60" />
            {children}
        </span>
    );
}

// ─── Tag badge for series cards ───────────────────────────────────────────────
function Tag({ color, children }: { color: string; children: React.ReactNode }) {
    const cls =
        color === 'red' ? 'bg-red-600 text-white' :
            color === 'green' ? 'bg-emerald-600 text-white' :
                'bg-brand-gold text-white';
    return (
        <span className={`px-3 py-1.5 text-[9px] font-bold font-sans uppercase tracking-wider shadow-sm ${cls}`}>
            {children}
        </span>
    );
}

// ─── Series Card ──────────────────────────────────────────────────────────────
function SeriesCard({ s, index }: { s: typeof series[0]; index: number }) {
    const [open, setOpen] = useState(false);
    const isEven = index % 2 === 0;

    return (
        <BlurReveal delay={0.1}>
            <div className={`group grid grid-cols-1 lg:grid-cols-2 min-h-[500px] overflow-hidden border border-black/5 shadow-[0_4px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_60px_rgba(0,0,0,0.08)] transition-all duration-700 bg-white`}>

                {/* Image Panel */}
                <div className={`relative overflow-hidden ${!isEven ? 'lg:order-2' : ''}`}>
                    <img
                        src={s.img}
                        alt={s.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    {/* Tag Badge */}
                    <div className="absolute top-6 left-6">
                        <Tag color={s.tagColor}>{s.tag}</Tag>
                    </div>
                    {/* Series number */}
                    <div className="absolute bottom-6 left-6 text-white/20 font-serif font-medium text-8xl leading-none select-none">
                        {s.code}
                    </div>
                </div>

                {/* Content Panel */}
                <div className={`flex flex-col p-10 lg:p-14 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="flex-1">
                        <p className="text-[10px] uppercase tracking-[0.25em] font-bold font-sans mb-3 text-brand-gold-dark">
                            {s.sub}
                        </p>
                        <h3 className="text-4xl font-serif font-medium text-brand-charcoal mb-2 tracking-tight">{s.name}</h3>
                        <div className="flex gap-4 text-[11px] text-brand-muted/70 font-light mb-6 border-b border-black/5 pb-6">
                            <span>{s.profile}</span>
                            <span>·</span>
                            <span>{s.warranty}</span>
                        </div>
                        <p className="text-brand-muted text-sm leading-[1.8] font-light mb-8">{s.desc}</p>

                        {/* Use Cases */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {s.useCases.map(uc => (
                                <span key={uc} className="px-3 py-1.5 text-[10px] font-sans font-bold uppercase tracking-wider border border-black/10 text-brand-charcoal hover:border-brand-gold hover:text-brand-gold-dark transition-colors">
                                    {uc}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Finishes Accordion */}
                    <div className="border-t border-black/6 pt-5">
                        <button
                            onClick={() => setOpen(!open)}
                            className="w-full flex items-center justify-between group/btn"
                        >
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-sans text-brand-muted group-hover/btn:text-brand-charcoal transition-colors">
                                {s.finishes.length > 1 ? `${s.finishes.length} Available Finishes` : 'Available Finishes'}
                            </span>
                            <div className={`w-6 h-6 flex items-center justify-center border transition-all duration-300 ${open ? 'border-brand-gold bg-brand-gold text-white' : 'border-black/10 text-brand-muted'}`}>
                                <Plus size={12} className={`transition-transform duration-300 ${open ? 'rotate-45' : ''}`} />
                            </div>
                        </button>
                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-4 flex flex-wrap gap-1.5">
                                        {s.finishes.map(f => (
                                            <span key={f} className="px-2.5 py-1 text-[10px] font-sans font-medium bg-brand-surface text-brand-muted border border-black/5">
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </BlurReveal>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export function ProductsPage() {
    return (
        <div className="bg-brand-surface min-h-screen text-brand-charcoal font-sans overflow-x-hidden">

            {/* ══════════════════════════════════════════════════════
          HERO — Full-bleed split layout
      ══════════════════════════════════════════════════════ */}
            <section className="relative h-screen flex border-b border-black/5 items-center justify-center overflow-hidden bg-brand-surface text-brand-charcoal">
                {/* Background Elements — matches Hero.tsx */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-brand-surface z-10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.12),transparent_50%)] z-10 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(197,160,89,0.06),transparent_50%)] z-10 mix-blend-multiply" />
                    <img
                        src="/products/heavy-flat.jpg"
                        alt="i-Panel premium ceiling"
                        className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
                    />
                </div>
                <div className="noise-overlay z-10 opacity-10" />

                <div className="relative z-20 container mx-auto px-6 pt-24 text-center md:text-left flex flex-col justify-center items-center md:items-start h-full">
                    <div className="max-w-4xl mx-auto md:mx-0">
                        <BlurReveal delay={0.2}>
                            <SectionLabel>The Complete Collection</SectionLabel>
                        </BlurReveal>

                        <BlurReveal delay={0.4}>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-medium mb-8 leading-[1.1] tracking-tight text-brand-charcoal">
                                The Complete <br className="hidden md:block" />
                                <span className="text-gradient-gold italic pr-2">i-Panel Collection.</span>
                            </h1>
                        </BlurReveal>

                        <BlurReveal delay={0.6}>
                            <p className="text-brand-muted max-w-2xl mx-auto md:mx-0 mb-10 text-lg md:text-xl font-light leading-relaxed">
                                Five distinct series. 40+ surface finishes. All manufactured in Sri Lanka to ISO 9001:2015 standards with warranties up to 15 years.
                            </p>
                        </BlurReveal>

                        <BlurReveal delay={0.8} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 mb-16 w-full">
                            <a href="#series" className="group relative w-full sm:w-auto bg-brand-charcoal text-white px-10 py-4 text-sm uppercase tracking-widest font-semibold overflow-hidden transition-all hover:shadow-[0_10px_30px_rgba(28,28,28,0.2)] hover:scale-[1.02]">
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    Explore Series
                                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 bg-brand-gold translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out" />
                            </a>
                            <a href="#quote" className="group w-full sm:w-auto bg-transparent border border-black/10 text-brand-charcoal px-10 py-4 text-sm uppercase tracking-widest font-medium hover:border-brand-gold hover:bg-brand-gold/5 transition-all text-center">
                                <span className="opacity-80 group-hover:opacity-100 transition-opacity">Request a Quote</span>
                            </a>
                        </BlurReveal>

                        {/* Stats row */}
                        <BlurReveal delay={1.0}>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pt-10 border-t border-black/5 text-center md:text-left">
                                {stats.map((s, i) => (
                                    <div key={i} className="group cursor-default">
                                        <div className="text-2xl md:text-3xl font-serif text-brand-gold-dark mb-1 tracking-tight transition-transform group-hover:-translate-y-1">{s.value}</div>
                                        <div className="text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] text-brand-muted group-hover:text-brand-charcoal transition-colors">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </BlurReveal>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-brand-muted">Scroll</span>
                    <motion.div
                        className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent"
                        animate={{ scaleY: [0, 1, 0], transformOrigin: ['top', 'top', 'bottom'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </motion.div>
            </section>

            {/* ══════════════════════════════════════════════════════
          01 — SERIES OVERVIEW TABLE
      ══════════════════════════════════════════════════════ */}
            <section className="py-28 bg-white border-t border-black/5">
                <div className="container mx-auto px-6 lg:px-16">
                    <BlurReveal>
                        <SectionLabel>01 — Series Overview</SectionLabel>
                    </BlurReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <BlurReveal delay={0.1}>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-charcoal tracking-tight leading-[1.1]">
                                All series share one<br />
                                <span className="italic font-light text-brand-gold-dark">core promise.</span>
                            </h2>
                            <p className="text-brand-muted text-base font-light leading-relaxed mt-6 max-w-md">
                                Waterproof, termite proof, fire retardant, zero maintenance. Each series is then engineered for a specific aesthetic and application context.
                            </p>
                        </BlurReveal>

                        {/* Comparison table */}
                        <BlurReveal delay={0.2}>
                            <div className="border border-black/5 overflow-hidden shadow-sm">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-black/5 bg-brand-surface">
                                            <th className="text-left px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-brand-gold-dark">Series</th>
                                            <th className="text-left px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-brand-gold-dark">Profile</th>
                                            <th className="text-left px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-brand-gold-dark">Warranty</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-black/5 bg-white">
                                        {[
                                            ['HEAVY Flat', 'Architectural Flat · 8\"', '10 years'],
                                            ['HEAVY-B', 'Designer Profile · 8\"', '10 years'],
                                            ['HEAVY-F', 'Fire Rated · 8\"', 'Up to 15 years'],
                                            ['i-Panel LITE', 'Project Series · 4\"', '5 years'],
                                            ['i-Panel Wall', 'Wall Cladding · 4\"', 'Up to 15 years'],
                                        ].map(([name, profile, warranty], i) => (
                                            <tr key={i} className="transition-colors duration-200 group hover:bg-brand-gold/5">
                                                <td className="px-6 py-4 font-semibold font-sans text-brand-charcoal group-hover:text-brand-gold-dark transition-colors text-sm">{name}</td>
                                                <td className="px-6 py-4 text-brand-muted font-light text-sm">{profile}</td>
                                                <td className="px-6 py-4">
                                                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-brand-gold/10 text-brand-gold-dark">
                                                        {warranty}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </BlurReveal>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
          02–06 — EDITORIAL SERIES CARDS
      ══════════════════════════════════════════════════════ */}
            <section id="series" className="py-28 border-t border-black/5">
                <div className="container mx-auto px-6 lg:px-16">
                    <BlurReveal>
                        <SectionLabel>02–06 — Product Series</SectionLabel>
                    </BlurReveal>
                    <BlurReveal delay={0.1}>
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-charcoal tracking-tight leading-[1.1] mb-16">
                            Choose your <span className="italic font-light text-brand-gold-dark">series.</span>
                        </h2>
                    </BlurReveal>
                    <div className="flex flex-col gap-8">
                        {series.map((s, i) => <SeriesCard key={s.id} s={s} index={i} />)}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
          07 — FINISHING SUITE
      ══════════════════════════════════════════════════════ */}
            <section className="py-28 bg-white border-t border-black/5">
                <div className="container mx-auto px-6 lg:px-16">
                    <BlurReveal>
                        <SectionLabel>07 — Finishing Suite</SectionLabel>
                    </BlurReveal>
                    <BlurReveal delay={0.1}>
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-charcoal tracking-tight mb-4">
                            Precision trims for a <span className="italic font-light text-brand-gold-dark">flawless edge.</span>
                        </h2>
                        <p className="text-brand-muted font-light text-base mb-14 max-w-xl">
                            Every installation requires a matching finishing profile. These precision-engineered trims create clean transitions at every edge and corner.
                        </p>
                    </BlurReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {trimmingProfiles.map((p, i) => (
                            <BlurReveal key={i} delay={0.1 * i}>
                                <div className="group p-10 border border-black/5 bg-brand-surface hover:bg-white hover:shadow-[0_12px_50px_rgba(0,0,0,0.07)] hover:border-brand-gold/20 transition-all duration-500 cursor-default">
                                    <div className="w-14 h-14 flex items-center justify-center mb-8 text-2xl font-serif font-bold border border-black/5 transition-colors duration-300 group-hover:border-brand-gold/30 bg-brand-gold/10 text-brand-gold-dark">
                                        {p.name.split(' ')[1]}
                                    </div>
                                    <h3 className="text-2xl font-serif font-medium text-brand-charcoal mb-1 group-hover:text-brand-gold-dark transition-colors">{p.name}</h3>
                                    <p className="text-[10px] uppercase tracking-widest font-bold mb-5 text-brand-gold-dark">{p.dims}</p>
                                    <p className="text-sm text-brand-muted font-light leading-relaxed">{p.desc}</p>
                                </div>
                            </BlurReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
          08 — AUTHENTICITY
      ══════════════════════════════════════════════════════ */}
            <section className="py-28 border-t border-black/5">
                <div className="container mx-auto px-6 lg:px-16">
                    <BlurReveal>
                        <SectionLabel>08 — Authenticity Guide</SectionLabel>
                    </BlurReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                        {/* Left */}
                        <div className="lg:col-span-2">
                            <BlurReveal delay={0.1}>
                                <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-charcoal tracking-tight mb-4">
                                    The Mark of the <span className="italic font-light text-brand-gold-dark">Original.</span>
                                </h2>
                                <p className="text-brand-muted font-light text-sm leading-relaxed mb-8">
                                    i-Panel products are frequently imitated. Verify these four markers to confirm you are investing in a genuine original.
                                </p>
                            </BlurReveal>
                            <BlurReveal delay={0.2}>
                                <div className="overflow-hidden aspect-square border border-black/5 shadow-sm">
                                    <img src="/products/authenticity.jpg" alt="Honeycomb core cross-section" className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105 ease-out" />
                                </div>
                            </BlurReveal>
                        </div>

                        {/* Right: 2×2 markers */}
                        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {authenticityMarkers.map((m, i) => (
                                <BlurReveal key={i} delay={0.15 * i}>
                                    <div className="p-8 bg-white border border-black/5 shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_40px_rgba(197,160,89,0.1)] hover:border-brand-gold/20 transition-all duration-500 group">
                                        <div className="w-10 h-10 flex items-center justify-center mb-6 bg-brand-gold/10 text-brand-gold-dark">
                                            {m.icon}
                                        </div>
                                        <h3 className="font-serif font-medium text-brand-charcoal mb-3 text-lg group-hover:text-brand-gold-dark transition-colors">{m.title}</h3>
                                        <p className="text-sm text-brand-muted font-light leading-relaxed">{m.desc}</p>
                                    </div>
                                </BlurReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
          09 — TECH + SUSTAINABILITY
      ══════════════════════════════════════════════════════ */}
            <section className="py-28 bg-white border-t border-black/5">
                <div className="container mx-auto px-6 lg:px-16">
                    <BlurReveal>
                        <SectionLabel>09 — Technical Advantage</SectionLabel>
                    </BlurReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <BlurReveal delay={0.1}>
                                <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-charcoal tracking-tight mb-5">
                                    Engineered for<br />Sri Lanka's <span className="italic font-light text-brand-gold-dark">climate.</span>
                                </h2>
                                <p className="text-brand-muted font-light text-sm leading-relaxed mb-12 max-w-md">
                                    Every i-Panel is manufactured to perform in Sri Lanka's specific conditions — extreme humidity, heat, and rapid monsoon cycles.
                                </p>
                            </BlurReveal>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {techBenefits.map((b, i) => (
                                    <BlurReveal key={i} delay={0.1 * i}>
                                        <div className="flex gap-4 items-start p-6 border border-black/5 bg-brand-surface hover:bg-brand-gold/5 hover:border-brand-gold/20 transition-all duration-300 group cursor-default">
                                            <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center bg-brand-gold/10 text-brand-gold-dark">
                                                {b.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-sans font-semibold text-sm text-brand-charcoal mb-1 group-hover:text-brand-gold-dark transition-colors">{b.title}</h4>
                                                <p className="text-xs text-brand-muted font-light leading-relaxed">{b.desc}</p>
                                            </div>
                                        </div>
                                    </BlurReveal>
                                ))}
                            </div>
                        </div>

                        {/* Environmental impact card */}
                        <BlurReveal delay={0.3}>
                            <div className="relative overflow-hidden bg-brand-charcoal">
                                {/* Gold gradient overlay */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.15),transparent_60%)] pointer-events-none" />
                                <div className="absolute inset-0 opacity-10">
                                    <img src="/products/lite.jpg" alt="" className="w-full h-full object-cover mix-blend-luminosity" />
                                </div>
                                <div className="noise-overlay opacity-10" />
                                <div className="relative z-10 p-12 text-white">
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold font-sans text-brand-gold/70 mb-8">Environmental Impact</p>
                                    <div className="mb-10">
                                        <span className="text-8xl font-serif font-medium tracking-tight text-gradient-gold">1,875</span>
                                        <p className="text-white/70 font-light mt-2 text-base">trees saved every single month</p>
                                    </div>
                                    <div className="space-y-3 text-sm font-light text-white/75 border-t border-white/10 pt-8">
                                        {[
                                            '100% recyclable UPVC composition',
                                            'Zero formaldehyde — safe for all environments',
                                            'Green Labeled by the Green Building Council of Sri Lanka',
                                            'SLIM "Green Brand of the Year" 2024',
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-brand-gold/60" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </BlurReveal>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
          10 — CONVERSION CTA
      ══════════════════════════════════════════════════════ */}
            <section id="quote" className="py-32 bg-brand-surface relative overflow-hidden border-t border-black/5">
                <div className="absolute top-0 left-0 w-1/3 h-[500px] bg-[radial-gradient(circle_at_top_left,rgba(197,160,89,0.05),transparent_70%)] pointer-events-none mix-blend-multiply" />

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <BlurReveal>
                        <SectionLabel>10 — Get a Quote</SectionLabel>
                    </BlurReveal>

                    <div className="max-w-full overflow-hidden bg-brand-charcoal relative">
                        {/* Gold gradient overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.12),transparent_60%)] pointer-events-none" />
                        <div className="noise-overlay opacity-10" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
                            {/* Image side */}
                            <div className="hidden lg:block relative overflow-hidden">
                                <img src="/products/heavy-flat.jpg" alt="premium office ceiling" className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-charcoal/60" />
                                <div className="absolute bottom-10 left-10 text-white/10 font-serif font-medium text-9xl leading-none select-none">10</div>
                            </div>

                            {/* Content side */}
                            <div className="p-12 xl:p-16 flex flex-col justify-center relative z-10">
                                <BlurReveal>
                                    <h2 className="text-4xl xl:text-5xl font-serif font-medium text-white mb-4 tracking-tight leading-tight">
                                        Found your panel?<br />
                                        <span className="font-light italic text-brand-gold">Let's price your project.</span>
                                    </h2>
                                    <p className="text-white/60 font-light text-sm mb-10 leading-relaxed max-w-sm">
                                        Tell us your series, project type, and ceiling area. Our specialists will provide a detailed quotation within one business day.
                                    </p>
                                </BlurReveal>
                                <BlurReveal delay={0.15}>
                                    <div className="flex flex-col gap-4 mb-10">
                                        <a href="tel:0722002200" className="flex items-center gap-4 px-6 py-4 border border-white/15 hover:bg-white hover:text-brand-charcoal transition-all duration-300 group text-white max-w-xs bg-white/10">
                                            <Phone size={18} className="flex-shrink-0" />
                                            <div>
                                                <p className="text-[9px] uppercase tracking-wider font-bold text-white/50 group-hover:text-brand-muted mb-0.5">Call Us</p>
                                                <p className="font-sans font-semibold text-sm">07 2200 2200</p>
                                            </div>
                                        </a>
                                        <a href="https://wa.me/0722002200" className="flex items-center gap-4 px-6 py-4 border border-white/15 hover:bg-white hover:text-brand-charcoal transition-all duration-300 group text-white max-w-xs bg-white/10">
                                            <MessageCircle size={18} className="flex-shrink-0" />
                                            <div>
                                                <p className="text-[9px] uppercase tracking-wider font-bold text-white/50 group-hover:text-brand-muted mb-0.5">WhatsApp</p>
                                                <p className="font-sans font-semibold text-sm">Quick Response Team</p>
                                            </div>
                                        </a>
                                        <a href="#" className="flex items-center gap-4 px-6 py-4 border border-white/15 hover:bg-white hover:text-brand-charcoal transition-all duration-300 group text-white max-w-xs bg-white/10">
                                            <MapPin size={18} className="flex-shrink-0" />
                                            <div>
                                                <p className="text-[9px] uppercase tracking-wider font-bold text-white/50 group-hover:text-brand-muted mb-0.5">Showroom</p>
                                                <p className="font-sans font-semibold text-sm">All 9 Provinces</p>
                                            </div>
                                        </a>
                                    </div>
                                </BlurReveal>
                                <BlurReveal delay={0.2}>
                                    <a href="#" className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white text-brand-charcoal text-sm uppercase tracking-widest font-semibold overflow-hidden transition-all hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:scale-[1.02]">
                                        <span className="relative z-10 flex items-center gap-3">
                                            Request a Detailed Quotation
                                            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                                        </span>
                                        <div className="absolute inset-0 bg-brand-gold translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out" />
                                    </a>
                                </BlurReveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

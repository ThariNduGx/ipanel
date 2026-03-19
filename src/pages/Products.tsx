import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck, Droplets, Flame, Leaf,
  ArrowRight, Phone, MessageCircle, MapPin,
  CheckCircle2, Layers, BadgeCheck, Zap, ChevronRight, ChevronDown,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BlurReveal } from '../components/BlurReveal';

// ─── Image buckets shared across colour categories ────────────────────────────
const IMG = {
  darkEbony:   'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
  warmTeak:    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
  goldenWarm:  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80',
  lightNatural:'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1600&q=80',
  greyModern:  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
  pureWhite:   'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80',
  marble:      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1600&q=80',
  concrete:    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
  wallWood:    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80',
};

interface FinishColour {
  name: string;
  hex: string;
  image: string;
  slug?: string;
  seriesRoute?: string;
  badge?: string;
}

interface SeriesData {
  id: string;
  code: string;
  name: string;
  sub: string;
  tagline: string;
  profile: string;
  warranty: string;
  badge: string;
  badgeVariant: 'gold' | 'red' | 'green' | 'blue';
  heroImage: string;
  desc: string;
  route: string;
  useCases: string[];
  colours: FinishColour[];
}

// ─── All series with all colours ─────────────────────────────────────────────
const allSeries: SeriesData[] = [
  {
    id: 'heavy-flat',
    code: '01',
    name: 'HEAVY Flat',
    sub: 'Architectural Flat Series',
    tagline: 'Seamless ceiling planes for the discerning architect.',
    profile: '8" flat profile · 7.5mm',
    warranty: '10 year warranty',
    badge: 'FLAGSHIP',
    badgeVariant: 'gold',
    heroImage: '/products/heavy-flat.jpg',
    route: '/products/heavy-f',
    desc: 'The flattest profile in the i-Panel range. At 8 inches wide and 7.5mm thick, these panels deliver clean, uninterrupted ceilings for premium offices, hotel lobbies, and architect-designed residences where a perfectly seamless ceiling plane is the architectural intention.',
    useCases: ['Premium Offices', 'Hotel Lobbies', 'Residences'],
    colours: [
      { name: 'Matt White',   hex: '#F5F5F3', image: IMG.pureWhite },
      { name: 'Solid Fabric', hex: '#DDD6C8', image: IMG.lightNatural },
      { name: 'White Wood',   hex: '#E8D8C0', image: IMG.lightNatural },
      { name: 'Gray Wood',    hex: '#9A9490', image: IMG.greyModern },
      { name: 'Pine Wood',    hex: '#D4B896', image: IMG.lightNatural },
      { name: 'Nadun',        hex: '#B8905A', image: IMG.goldenWarm },
      { name: 'Rich Maple',   hex: '#C8903A', image: IMG.goldenWarm },
      { name: 'Danish Teak',  hex: '#8B6040', image: IMG.goldenWarm },
      { name: 'Golden Teak',  hex: '#9B6B28', image: IMG.goldenWarm },
      { name: 'Teak',         hex: '#7A5030', image: IMG.warmTeak },
      { name: 'Rich Teak',    hex: '#6B4520', image: IMG.warmTeak },
      { name: 'Burma Teak',   hex: '#5C3D1E', image: IMG.warmTeak },
      { name: 'Africa Teak',  hex: '#7B4F2A', image: IMG.warmTeak },
      { name: 'Jack Wood',    hex: '#4A3020', image: IMG.darkEbony },
      { name: 'Kithul',       hex: '#1C1008', image: IMG.darkEbony },
      { name: 'Kaluwara',     hex: '#2C2017', image: IMG.darkEbony },
    ],
  },
  {
    id: 'heavy-b',
    code: '02',
    name: 'HEAVY-B',
    sub: 'Designer Profile Series',
    tagline: 'Bevelled shadow lines that define architectural depth.',
    profile: '8" B profile · 7.5mm',
    warranty: '10 year warranty',
    badge: 'MOST POPULAR',
    badgeVariant: 'gold',
    heroImage: '/products/heavy-b.jpg',
    route: '/products/heavy-b',
    desc: 'The B profile joint creates an architectural shadow line between each installed panel, giving installations a sense of depth and dimension that flat panels cannot achieve. Frequently specified by Sri Lankan architects for distinguished living areas, hotel corridors, and premium corporate environments.',
    useCases: ['Living Areas', 'Hotel Corridors', 'Corporate Spaces'],
    colours: [
      { name: 'Matt White',   hex: '#F5F5F3', image: IMG.pureWhite,   slug: 'pearl-white',   seriesRoute: '/products/colours/heavy-b/pearl-white' },
      { name: 'Solid Fabric', hex: '#DDD6C8', image: IMG.lightNatural },
      { name: 'Silver Line',  hex: '#C0C4C8', image: IMG.greyModern,  slug: 'silver-birch',  seriesRoute: '/products/colours/heavy-b/silver-birch' },
      { name: 'Black Line',   hex: '#1A1A1A', image: IMG.darkEbony },
      { name: 'Gold Line',    hex: '#C5A059', image: IMG.goldenWarm },
      { name: 'White Wood',   hex: '#E8D8C0', image: IMG.lightNatural },
      { name: 'Gray Wood',    hex: '#9A9490', image: IMG.greyModern },
      { name: 'Pine Wood',    hex: '#D4B896', image: IMG.lightNatural },
      { name: 'Nadun',        hex: '#B8905A', image: IMG.goldenWarm },
      { name: 'Rich Maple',   hex: '#C8903A', image: IMG.goldenWarm },
      { name: 'Danish Teak',  hex: '#8B6040', image: IMG.goldenWarm },
      { name: 'Golden Teak',  hex: '#9B6B28', image: IMG.goldenWarm },
      { name: 'Teak',         hex: '#7A5030', image: IMG.warmTeak },
      { name: 'Rich Teak',    hex: '#6B4520', image: IMG.warmTeak },
      { name: 'Burma Teak',   hex: '#5C3D1E', image: IMG.warmTeak },
      { name: 'Africa Teak',  hex: '#7B4F2A', image: IMG.warmTeak },
      { name: 'Jack Wood',    hex: '#4A3020', image: IMG.darkEbony },
      { name: 'Coffee Bean',  hex: '#3A1F0A', image: IMG.darkEbony },
      { name: 'Kithul',       hex: '#1C1008', image: IMG.darkEbony },
      { name: 'Kaluwara',     hex: '#2C2017', image: IMG.darkEbony },
    ],
  },
  {
    id: 'heavy-f',
    code: '03',
    name: 'HEAVY-F',
    sub: 'Fire Rated Series',
    tagline: 'International fire certification without aesthetic compromise.',
    profile: '8" F profile · 7.5mm',
    warranty: 'Up to 15 years',
    badge: 'FIRE CERTIFIED',
    badgeVariant: 'red',
    heroImage: '/products/heavy-flat.jpg',
    route: '/products/heavy-f',
    desc: 'The only i-Panel series carrying international fire safety certification. Required for hospitals, hotels, schools, and commercial buildings where fire compliance is mandatory. Delivers the same architectural shadow line depth as HEAVY-B while meeting critical safety standards.',
    useCases: ['Hospitals and Clinics', 'Schools and Hotels', 'Commercial Buildings'],
    colours: [
      { name: 'Africa Teak',  hex: '#7B4F2A', image: IMG.warmTeak },
      { name: 'Danish Teak',  hex: '#8B6040', image: IMG.goldenWarm },
      { name: 'Gray Wood',    hex: '#9A9490', image: IMG.greyModern },
      { name: 'Kaluwara',     hex: '#2C2017', image: IMG.darkEbony, badge: 'Popular' },
      { name: 'Maple',        hex: '#C8B080', image: IMG.lightNatural },
      { name: 'White Wash',   hex: '#F0EBE0', image: IMG.pureWhite },
      { name: 'Nadun',        hex: '#B8905A', image: IMG.goldenWarm },
      { name: 'Fine Wood',    hex: '#A8825A', image: IMG.warmTeak },
    ],
  },
  {
    id: 'lite',
    code: '04',
    name: 'i-Panel LITE',
    sub: 'Project Series',
    tagline: 'The fastest installation system. The widest colour range.',
    profile: '4" profile · 7.5mm',
    warranty: '5 year warranty',
    badge: 'BEST VALUE',
    badgeVariant: 'blue',
    heroImage: '/products/lite.jpg',
    route: '/products/lite',
    desc: 'The lightest and most versatile panel in the range. Easier to handle on site, faster to install with the Click-it system, and available in the widest colour selection. The first choice for residential professionals seeking quality at project pace.',
    useCases: ['Residential Projects', 'Fast-Track Builds', 'Renovations'],
    colours: [
      { name: 'Burma Teak',   hex: '#5C3D1E', image: IMG.warmTeak },
      { name: 'Danish Teak',  hex: '#8B6040', image: IMG.goldenWarm },
      { name: 'Fine Wood',    hex: '#A8825A', image: IMG.warmTeak },
      { name: 'Golden Teak',  hex: '#9B6B28', image: IMG.goldenWarm, slug: 'golden-teak', seriesRoute: '/products/colours/lite/golden-teak' },
      { name: 'Gray Wood',    hex: '#9A9490', image: IMG.greyModern },
      { name: 'Kithul',       hex: '#1C1008', image: IMG.darkEbony },
      { name: 'Teak',         hex: '#7A5030', image: IMG.warmTeak },
      { name: 'White Wood',   hex: '#E8D8C0', image: IMG.lightNatural },
    ],
  },
  {
    id: 'wall',
    code: '05',
    name: 'i-Panel Wall',
    sub: 'Wall Cladding Series',
    tagline: 'Moisture-proof surfaces for every vertical plane.',
    profile: '4" profile · 7.5mm',
    warranty: 'Up to 15 years',
    badge: 'NEW',
    badgeVariant: 'green',
    heroImage: '/products/wall.jpg',
    route: '/products/wall-cladding',
    desc: 'The i-Panel system now extends to vertical surfaces. This series brings moisture resistance and zero-maintenance performance to bathrooms, kitchens, and feature walls in both residential and commercial contexts.',
    useCases: ['Bathrooms', 'Kitchens', 'Feature Walls'],
    colours: [
      { name: 'Solid Fabric',      hex: '#DDD6C8', image: IMG.lightNatural },
      { name: 'Pearl Marble',      hex: '#F0ECEA', image: IMG.marble,      slug: 'travertine',       seriesRoute: '/products/colours/wall-cladding/travertine' },
      { name: 'Wooden',            hex: '#A07848', image: IMG.wallWood,    slug: 'teak-wall',        seriesRoute: '/products/colours/wall-cladding/teak-wall' },
      { name: 'Grey Marble',       hex: '#C0C0BC', image: IMG.greyModern,  slug: 'stone-wash',       seriesRoute: '/products/colours/wall-cladding/stone-wash' },
      { name: 'Sand Wave',         hex: '#D4C4A0', image: IMG.marble,      slug: 'lime-wash',        seriesRoute: '/products/colours/wall-cladding/lime-wash' },
      { name: 'Matte Black Marble',hex: '#1A1A1A', image: IMG.darkEbony,   slug: 'anthracite',       seriesRoute: '/products/colours/wall-cladding/anthracite' },
    ],
  },
];

const stats = [
  { value: '5', label: 'Panel Series' },
  { value: '40+', label: 'Surface Finishes' },
  { value: '15yr', label: 'Max Warranty' },
  { value: 'ISO', label: '9001:2015 Certified' },
  { value: 'Click-it™', label: 'Installation System' },
];

const authenticityMarkers = [
  { icon: BadgeCheck, title: 'Registered Trademark', desc: 'Every genuine panel carries the i-Panel trademark and a unique serial number printed on the reverse.' },
  { icon: Layers, title: 'Honeycomb Core', desc: 'Internal honeycomb architecture maintains structural stability at temperatures up to 60°C.' },
  { icon: CheckCircle2, title: '7.5mm Thickness', desc: 'Original panels are 7.5mm thick. Imitations are often only 6.0mm, which leads to sagging.' },
  { icon: Zap, title: 'Click-it System', desc: 'Our joint is precision milled to be gap-free and requires absolutely no silicone sealant.' },
];

const trimmingProfiles = [
  { name: 'Profile A', dims: '4" × 4"', slug: 'profile-a-4-4', image: IMG.lightNatural, desc: 'Standard perimeter profile for wall-to-ceiling transitions. Available in all series colours.' },
  { name: 'Profile B', dims: '2" × 2"', slug: 'profile-b-2-2', image: IMG.darkEbony,   desc: 'Internal corner profile for direction changes. Precision-milled for a tight, gap-free joint.' },
  { name: 'Profile C', dims: '3" × 1"', slug: 'profile-c-3-1', image: IMG.warmTeak,    desc: 'Slim step-down profile for exposed panel edges and reveals at architectural junctions.' },
];

// ─── Badge component ──────────────────────────────────────────────────────────
function Badge({ variant, children }: { variant: SeriesData['badgeVariant']; children: string }) {
  const cls = {
    gold:  'bg-brand-gold-dark text-white',
    red:   'bg-red-600 text-white',
    green: 'bg-emerald-600 text-white',
    blue:  'bg-[#3B82F6] text-white',
  }[variant];
  return (
    <span className={`px-3 py-1.5 text-[8px] font-bold font-sans uppercase tracking-[0.15em] ${cls}`}>
      {children}
    </span>
  );
}

// ─── Colour Swatch ────────────────────────────────────────────────────────────
function ColourSwatch({ colour, active, onClick }: {
  colour: FinishColour;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      title={colour.name}
      className={`relative w-7 h-7 rounded-full transition-all duration-200 flex-shrink-0 ${
        active
          ? 'ring-2 ring-offset-2 ring-brand-gold-dark scale-110'
          : 'hover:scale-110 hover:ring-2 hover:ring-offset-1 hover:ring-black/20'
      }`}
      style={{ backgroundColor: colour.hex }}
    >
      {colour.badge && (
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-gold-dark border border-white" />
      )}
    </button>
  );
}

// ─── Series Section ───────────────────────────────────────────────────────────
function SeriesSection({ s, isReversed }: { s: SeriesData; isReversed: boolean }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = s.colours[activeIdx];

  return (
    <section id={s.id} className="py-24 border-t border-black/5 scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-16">
        <BlurReveal>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden shadow-[0_8px_60px_rgba(0,0,0,0.08)] bg-white`}>

            {/* Image panel */}
            <div className={`relative min-h-[520px] overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.image + active.name}
                  src={active.image}
                  alt={`${s.name} ${active.name} ceiling panel installed in a luxury interior`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Badge */}
              <div className="absolute top-6 left-6 z-10">
                <Badge variant={s.badgeVariant}>{s.badge}</Badge>
              </div>

              {/* Series number watermark */}
              <div className="absolute bottom-4 left-6 text-white/10 font-serif font-medium text-[120px] leading-none select-none z-0">
                {s.code}
              </div>

              {/* Active colour label */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-end justify-between"
                  >
                    <div>
                      <p className="text-white/40 text-[9px] uppercase tracking-widest font-bold font-sans mb-1">
                        Selected Finish
                      </p>
                      <h3 className="text-white font-serif text-2xl">{active.name}</h3>
                    </div>
                    {active.seriesRoute ? (
                      <Link
                        to={active.seriesRoute}
                        className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-white/60 hover:text-white transition-colors border-b border-white/20 pb-0.5"
                      >
                        View Colour Profile <ArrowRight size={10} />
                      </Link>
                    ) : (
                      <Link
                        to={s.route}
                        className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-white/60 hover:text-white transition-colors border-b border-white/20 pb-0.5"
                      >
                        View Series <ArrowRight size={10} />
                      </Link>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Content panel */}
            <div className={`flex flex-col p-10 lg:p-12 ${isReversed ? 'lg:order-1' : ''}`}>
              {/* Header */}
              <div className="mb-7">
                <p className="text-[9px] uppercase tracking-[0.3em] font-bold font-sans text-brand-gold-dark mb-2">
                  {s.sub}
                </p>
                <h2 className="text-3xl lg:text-4xl font-serif font-medium text-brand-charcoal tracking-tight mb-2">
                  {s.name}
                </h2>
                <p className="text-brand-muted text-sm font-light italic font-serif">{s.tagline}</p>
              </div>

              {/* Specs bar */}
              <div className="flex gap-5 text-[10px] text-brand-muted font-light border-y border-black/5 py-4 mb-7">
                <span className="font-bold text-brand-charcoal uppercase tracking-wider text-[9px]">{s.profile}</span>
                <span>·</span>
                <span className="font-bold text-brand-gold-dark uppercase tracking-wider text-[9px]">{s.warranty}</span>
                <span>·</span>
                <span className="text-[9px] uppercase tracking-wider">{s.colours.length} finishes</span>
              </div>

              {/* Description */}
              <p className="text-brand-muted text-sm leading-relaxed font-light mb-8">{s.desc}</p>

              {/* Use Cases */}
              <div className="flex flex-wrap gap-2 mb-8">
                {s.useCases.map(uc => (
                  <span key={uc} className="px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider border border-black/8 text-brand-muted hover:border-brand-gold-dark hover:text-brand-gold-dark transition-colors font-sans">
                    {uc}
                  </span>
                ))}
              </div>

              {/* ── Colour Switcher ── */}
              <div className="bg-brand-surface rounded-2xl p-6 mt-auto">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] font-bold font-sans text-brand-muted mb-1">
                      {s.colours.length} Available Finishes
                    </p>
                    <p className="text-brand-charcoal font-serif text-base">{active.name}</p>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full border-2 border-white shadow-md flex-shrink-0"
                    style={{ backgroundColor: active.hex }}
                  />
                </div>

                {/* Swatches grid */}
                <div className="flex flex-wrap gap-2.5">
                  {s.colours.map((c, i) => (
                    <ColourSwatch
                      key={c.name}
                      colour={c}
                      active={i === activeIdx}
                      onClick={() => setActiveIdx(i)}
                    />
                  ))}
                </div>

                {/* Colour names row - show nearby swatches as text */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.colours.slice(0, 8).map((c, i) => (
                    <button
                      key={c.name}
                      onClick={() => setActiveIdx(i)}
                      className={`px-2.5 py-1 rounded-full text-[9px] font-sans font-bold uppercase tracking-wider transition-all duration-200 ${
                        i === activeIdx
                          ? 'bg-brand-charcoal text-white'
                          : 'bg-white border border-black/8 text-brand-muted hover:border-brand-charcoal hover:text-brand-charcoal'
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                  {s.colours.length > 8 && (
                    <Link
                      to={s.route}
                      className="px-2.5 py-1 rounded-full text-[9px] font-sans font-bold uppercase tracking-wider bg-white border border-black/8 text-brand-muted hover:border-brand-gold-dark hover:text-brand-gold-dark transition-all duration-200 flex items-center gap-1"
                    >
                      +{s.colours.length - 8} more <ChevronRight size={9} />
                    </Link>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 flex gap-3">
                <Link
                  to={s.route}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-brand-charcoal text-white text-[10px] uppercase tracking-wider font-bold hover:bg-brand-gold-dark transition-all duration-300"
                >
                  Explore Full Series <ArrowRight size={13} />
                </Link>
                <Link
                  to="/get-a-quote"
                  className="px-5 py-3.5 border border-black/10 text-brand-charcoal text-[10px] uppercase tracking-wider font-bold hover:border-brand-gold-dark hover:text-brand-gold-dark transition-all duration-200 font-sans"
                >
                  Sample
                </Link>
              </div>
            </div>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export function ProductsPage() {
  const [expandedSeries, setExpandedSeries] = useState<string | null>(null);

  return (
    <div className="bg-brand-surface min-h-screen text-brand-charcoal font-sans overflow-x-hidden">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex border-b border-black/5 items-center justify-center overflow-hidden bg-brand-surface text-brand-charcoal pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-brand-surface z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.12),transparent_50%)] z-10 mix-blend-multiply" />
          <img
            src="/products/heavy-flat.jpg"
            alt="i-Panel complete UPVC ceiling panel collection Sri Lanka"
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
          />
        </div>
        <div className="noise-overlay z-10 opacity-10" />

        <div className="relative z-20 container mx-auto px-6 py-24 text-center flex flex-col justify-center items-center">
          <BlurReveal delay={0.1}>
            <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold-dark font-sans mb-6 flex items-center gap-3 justify-center">
              <span className="w-8 h-px bg-brand-gold/60" />
              The Complete Collection
              <span className="w-8 h-px bg-brand-gold/60" />
            </p>
          </BlurReveal>

          <BlurReveal delay={0.25}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-medium mb-8 leading-[1.08] tracking-tight text-brand-charcoal max-w-4xl">
              UPVC Ceiling and Wall Panels:
              <br />
              <span className="italic font-light" style={{ background: 'linear-gradient(135deg,#C5A059,#E2C792)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                The i-Panel Collection.
              </span>
            </h1>
          </BlurReveal>

          <BlurReveal delay={0.4}>
            <p className="text-brand-muted max-w-2xl mb-10 text-lg font-light leading-relaxed">
              Five distinct series. 40+ surface finishes. All manufactured in Sri Lanka to ISO 9001:2015 standards. Select a series below or browse all available colours with our interactive switchers.
            </p>
          </BlurReveal>

          {/* Stats */}
          <BlurReveal delay={0.55}>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-10 pt-10 border-t border-black/6 text-center mb-12">
              {stats.map((s, i) => (
                <div key={i} className="group cursor-default">
                  <div className="text-2xl md:text-3xl font-serif text-brand-gold-dark mb-1 tracking-tight transition-transform group-hover:-translate-y-1">{s.value}</div>
                  <div className="text-[9px] md:text-[10px] font-sans uppercase tracking-[0.2em] text-brand-muted group-hover:text-brand-charcoal transition-colors">{s.label}</div>
                </div>
              ))}
            </div>
          </BlurReveal>

          {/* Series quick-jump tabs */}
          <BlurReveal delay={0.65}>
            <div className="flex flex-wrap justify-center gap-2">
              {allSeries.map(s => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 text-[10px] uppercase tracking-wider font-bold font-sans text-brand-muted hover:border-brand-charcoal hover:text-brand-charcoal hover:bg-white transition-all duration-200"
                >
                  <span className="text-brand-gold-dark">{s.code}</span>
                  {s.name}
                </a>
              ))}
            </div>
          </BlurReveal>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-[9px] uppercase font-sans tracking-[0.3em] text-brand-muted">Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-brand-gold to-transparent"
            animate={{ scaleY: [0, 1, 0], transformOrigin: 'top' }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* ── 01 SERIES OVERVIEW TABLE ──────────────────────────────────────── */}
      <section className="py-28 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 lg:px-16">
          <BlurReveal>
            <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold-dark font-sans mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-brand-gold/60" />
              01 — Series Overview
            </p>
          </BlurReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <BlurReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-charcoal tracking-tight leading-[1.1]">
                All series share one
                <br />
                <span className="italic font-light text-brand-gold-dark">core promise.</span>
              </h2>
              <p className="text-brand-muted text-base font-light leading-relaxed mt-6 max-w-md">
                Waterproof, termite proof, fire retardant, zero maintenance. Each series is then engineered for a specific aesthetic and application context.
              </p>
              <div className="mt-8 flex gap-3 flex-wrap">
                {['100% Waterproof', 'Termite Proof', 'Fire Retardant', 'Zero Maintenance', 'Click-it System'].map(p => (
                  <span key={p} className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider font-bold text-brand-charcoal font-sans">
                    <CheckCircle2 size={12} className="text-brand-gold-dark" strokeWidth={2} />
                    {p}
                  </span>
                ))}
              </div>
            </BlurReveal>

            <BlurReveal delay={0.2}>
              <div className="divide-y divide-black/5">
                {allSeries.map((ser) => {
                  const isOpen = expandedSeries === ser.id;
                  return (
                    <div key={ser.id}>
                      {/* ── Row header (clickable) ── */}
                      <button
                        onClick={() => setExpandedSeries(isOpen ? null : ser.id)}
                        className="group relative w-full flex items-center gap-5 py-5 text-left transition-all duration-300"
                      >
                        {/* Gold left accent on expand */}
                        <div className={`absolute -left-5 top-0 h-full w-[2px] bg-brand-gold transition-transform duration-300 origin-top rounded-full ${isOpen ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'}`} />

                        {/* Ghost series code */}
                        <span className={`font-serif text-4xl font-light w-10 shrink-0 select-none leading-none transition-colors ${isOpen ? 'text-brand-gold/30' : 'text-black/[0.06] group-hover:text-brand-gold/20'}`}>
                          {ser.code}
                        </span>

                        {/* Name + specs */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className={`font-serif text-[17px] leading-tight transition-colors ${isOpen ? 'text-brand-gold-dark' : 'text-brand-charcoal group-hover:text-brand-gold-dark'}`}>
                              {ser.name}
                            </span>
                            {ser.badge && (
                              <span className="text-[7.5px] uppercase tracking-[0.18em] font-bold px-2 py-0.5 bg-brand-gold/10 text-brand-gold-dark border border-brand-gold/15">
                                {ser.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] text-brand-muted font-sans leading-none">
                            {ser.profile.split('·')[0].trim()}
                            <span className="mx-1.5 opacity-30">·</span>
                            <span className="font-bold text-brand-charcoal/60">{ser.warranty}</span>
                            <span className="mx-1.5 opacity-30">·</span>
                            <span className="text-brand-gold-dark">{ser.colours.length} finishes</span>
                          </p>
                        </div>

                        {/* Chevron */}
                        <ChevronDown
                          size={14}
                          className={`text-brand-muted/40 transition-all duration-300 shrink-0 ${isOpen ? 'rotate-180 text-brand-gold-dark' : 'group-hover:text-brand-charcoal'}`}
                        />
                      </button>

                      {/* ── Expanded colour panel ── */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="panel"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pb-6 pt-1">
                              <div className="flex flex-wrap gap-2">
                                {ser.colours.map((c) => (
                                  <div key={c.name} className="flex flex-col items-center gap-1">
                                    <div
                                      title={c.name}
                                      className="w-[80px] h-[40px] overflow-hidden border border-black/10 hover:border-brand-gold/40 transition-colors"
                                    >
                                      <img
                                        src={c.image}
                                        alt={c.name}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <span className="text-[8px] text-brand-muted font-sans text-center leading-tight w-[80px] truncate">
                                      {c.name}
                                    </span>
                                  </div>
                                ))}
                              </div>
                              <Link
                                to={ser.route}
                                className="inline-flex items-center gap-1.5 mt-5 text-[9px] uppercase tracking-widest font-bold text-brand-gold-dark hover:text-brand-charcoal transition-colors border-b border-brand-gold/30 pb-0.5"
                              >
                                Explore Full Series <ArrowRight size={10} />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </BlurReveal>
          </div>
        </div>
      </section>

      {/* ── 02–06 SERIES SECTIONS ─────────────────────────────────────────── */}
      <div>
        <div className="container mx-auto px-6 lg:px-16 pt-16 pb-4">
          <BlurReveal>
            <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold-dark font-sans flex items-center gap-4">
              <span className="w-8 h-px bg-brand-gold/60" />
              02–06 — Product Series with Colour Switchers
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-charcoal tracking-tight leading-[1.1] mt-4 mb-2">
              Choose your <span className="italic font-light text-brand-gold-dark">series and finish.</span>
            </h2>
            <p className="text-brand-muted font-light text-base max-w-xl">
              Click any colour swatch to preview the finish. Every swatch links to the full colour specification page.
            </p>
          </BlurReveal>
        </div>

        {allSeries.map((s, i) => (
          <SeriesSection key={s.id} s={s} isReversed={i % 2 !== 0} />
        ))}
      </div>

      {/* ── 07 FINISHING SUITE ────────────────────────────────────────────── */}
      <section className="py-28 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 lg:px-16">
          <BlurReveal>
            <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold-dark font-sans mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-brand-gold/60" />
              07 — Finishing Suite
            </p>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-charcoal tracking-tight mb-4">
              Precision trims for a <span className="italic font-light text-brand-gold-dark">flawless edge.</span>
            </h2>
            <p className="text-brand-muted font-light text-base mb-14 max-w-xl">
              Every i-Panel installation requires a matching finishing profile. These precision-engineered trims create clean transitions at every edge and corner.
            </p>
          </BlurReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {trimmingProfiles.map((p, i) => (
              <BlurReveal key={p.name} delay={0.1 * i}>
                <Link
                  to={`/products/finishing-series/${p.slug}`}
                  className="group block border border-black/5 bg-white hover:border-brand-gold/30 hover:shadow-[0_20px_60px_rgba(197,160,89,0.12)] transition-all duration-500 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    {/* Dims badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-gold-dark text-white text-[9px] uppercase tracking-widest font-bold font-sans px-3 py-1.5">
                        {p.dims}
                      </span>
                    </div>
                    {/* Profile letter */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg font-serif font-bold">
                      {p.name.split(' ')[1]}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-serif font-medium text-brand-charcoal mb-3 group-hover:text-brand-gold-dark transition-colors">{p.name}</h3>
                    <p className="text-sm text-brand-muted font-light leading-relaxed mb-6">{p.desc}</p>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-brand-charcoal group-hover:text-brand-gold-dark group-hover:gap-3 transition-all duration-300">
                      View Profile <ArrowRight size={11} />
                    </div>
                  </div>
                </Link>
              </BlurReveal>
            ))}
          </div>

          {/* CTA to finishing series hub */}
          <BlurReveal delay={0.35}>
            <div className="flex items-center justify-between border border-black/5 bg-brand-surface px-8 py-6">
              <div>
                <p className="text-sm font-serif text-brand-charcoal mb-0.5">20 colour finishes. 5-year warranty.</p>
                <p className="text-xs text-brand-muted font-light">All three profiles available in every colour across every series.</p>
              </div>
              <Link
                to="/products/finishing-series"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-brand-gold-dark hover:text-brand-charcoal border-b border-brand-gold/40 pb-0.5 whitespace-nowrap transition-colors"
              >
                Explore Finishing Series <ArrowRight size={11} />
              </Link>
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* ── 08 AUTHENTICITY ───────────────────────────────────────────────── */}
      <section className="py-28 border-t border-black/5">
        <div className="container mx-auto px-6 lg:px-16">
          <BlurReveal>
            <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold-dark font-sans mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-brand-gold/60" />
              08 — Authenticity Guide
            </p>
          </BlurReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <BlurReveal delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-charcoal tracking-tight mb-4">
                  The Mark of the <span className="italic font-light text-brand-gold-dark">Original.</span>
                </h2>
                <p className="text-brand-muted font-light text-sm leading-relaxed mb-6">
                  i-Panel products are frequently imitated. Verify these four markers to confirm you are investing in a genuine original.
                </p>
                <Link
                  to="/about/our-story"
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-brand-gold-dark hover:text-brand-charcoal transition-colors border-b border-brand-gold/40 pb-0.5"
                >
                  Learn our 15-year story <ArrowRight size={11} />
                </Link>
              </BlurReveal>
              <BlurReveal delay={0.2}>
                <div className="overflow-hidden aspect-square border border-black/5 shadow-sm">
                  <img src="/products/authenticity.jpg" alt="i-Panel genuine honeycomb core cross-section structural engineering detail" className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105" />
                </div>
              </BlurReveal>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {authenticityMarkers.map((m, i) => {
                const Icon = m.icon;
                return (
                  <BlurReveal key={m.title} delay={0.15 * i}>
                    <div className="p-8 bg-white border border-black/5 hover:shadow-[0_8px_40px_rgba(197,160,89,0.1)] hover:border-brand-gold/20 transition-all duration-500 group h-full">
                      <div className="w-10 h-10 flex items-center justify-center mb-6 bg-brand-gold/10 text-brand-gold-dark">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif font-medium text-brand-charcoal mb-3 text-lg group-hover:text-brand-gold-dark transition-colors">{m.title}</h3>
                      <p className="text-sm text-brand-muted font-light leading-relaxed">{m.desc}</p>
                    </div>
                  </BlurReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 09 TECH + SUSTAINABILITY ──────────────────────────────────────── */}
      <section className="py-28 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 lg:px-16">
          <BlurReveal>
            <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold-dark font-sans mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-brand-gold/60" />
              09 — Technical Advantage
            </p>
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
                {[
                  { Icon: ShieldCheck, title: 'Maintenance Free', desc: 'UV stabilised surfaces never need sanding or painting.' },
                  { Icon: Droplets, title: 'Zero Moisture', desc: 'UPVC formulation absorbs no water. Ideal for bathrooms.' },
                  { Icon: Leaf, title: 'Termite Proof', desc: 'Inorganic composition provides absolute biological protection.' },
                  { Icon: Flame, title: 'Fire Retardant', desc: 'Class B rated panels available across all series.' },
                ].map(({ Icon, title, desc }, i) => (
                  <BlurReveal key={title} delay={0.1 * i}>
                    <div className="flex gap-4 items-start p-6 border border-black/5 bg-brand-surface hover:bg-brand-gold/5 hover:border-brand-gold/20 transition-all duration-300 group">
                      <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center bg-brand-gold/10 text-brand-gold-dark">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-sans font-semibold text-sm text-brand-charcoal mb-1 group-hover:text-brand-gold-dark transition-colors">{title}</h4>
                        <p className="text-xs text-brand-muted font-light leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </BlurReveal>
                ))}
              </div>
            </div>

            <BlurReveal delay={0.3}>
              <div className="relative overflow-hidden bg-brand-charcoal">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.15),transparent_60%)] pointer-events-none" />
                <div className="absolute inset-0 opacity-10">
                  <img src="/products/lite.jpg" alt="" className="w-full h-full object-cover mix-blend-luminosity" />
                </div>
                <div className="noise-overlay opacity-10" />
                <div className="relative z-10 p-12 text-white">
                  <p className="text-[9px] uppercase tracking-[0.3em] font-bold font-sans text-brand-gold/70 mb-8">Environmental Impact</p>
                  <div className="mb-10">
                    <span className="text-7xl font-serif font-medium tracking-tight" style={{ background: 'linear-gradient(135deg,#C5A059,#E2C792)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>1,875</span>
                    <p className="text-white/70 font-light mt-2 text-base">trees saved every single month</p>
                  </div>
                  <div className="space-y-3 text-sm font-light text-white/75 border-t border-white/10 pt-8">
                    {[
                      '100% recyclable UPVC composition',
                      'Zero formaldehyde. Safe for all environments.',
                      'Green Labeled by the Green Building Council of Sri Lanka',
                      'SLIM Green Brand of the Year 2024',
                    ].map(item => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5 text-brand-gold/60" strokeWidth={1.5} />
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

      {/* ── 10 CTA ────────────────────────────────────────────────────────── */}
      <section id="quote" className="py-32 bg-brand-surface relative overflow-hidden border-t border-black/5">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[radial-gradient(circle_at_top_left,rgba(197,160,89,0.05),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <BlurReveal>
            <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold-dark font-sans mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-brand-gold/60" />
              10 — Get a Quote
            </p>
          </BlurReveal>

          <div className="max-w-full overflow-hidden bg-brand-charcoal relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.12),transparent_60%)] pointer-events-none" />
            <div className="noise-overlay opacity-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
              <div className="hidden lg:block relative overflow-hidden">
                <img src="/products/heavy-flat.jpg" alt="premium i-Panel office ceiling installation" className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-charcoal/60" />
                <div className="absolute bottom-10 left-10 text-white/10 font-serif font-medium text-9xl leading-none select-none">10</div>
              </div>

              <div className="p-12 xl:p-16 flex flex-col justify-center relative z-10">
                <BlurReveal>
                  <h2 className="text-4xl xl:text-5xl font-serif font-medium text-white mb-4 tracking-tight leading-tight">
                    Found your panel?
                    <br />
                    <span className="font-light italic text-brand-gold">Let's price your project.</span>
                  </h2>
                  <p className="text-white/60 font-light text-sm mb-10 leading-relaxed max-w-sm">
                    Tell us your series, project type, and ceiling area. Our specialists provide a detailed quotation within one business day.
                  </p>
                </BlurReveal>
                <BlurReveal delay={0.15}>
                  <div className="flex flex-col gap-4 mb-10">
                    <a href="tel:0722002200" className="flex items-center gap-4 px-6 py-4 border border-white/15 hover:bg-white hover:text-brand-charcoal transition-all duration-300 group text-white max-w-xs bg-white/10">
                      <Phone size={17} className="flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="text-[9px] uppercase tracking-wider font-bold text-white/50 group-hover:text-brand-muted mb-0.5">Call Us</p>
                        <p className="font-sans font-semibold text-sm">07 2200 2200</p>
                      </div>
                    </a>
                    <a href="https://wa.me/0722002200" className="flex items-center gap-4 px-6 py-4 border border-white/15 hover:bg-white hover:text-brand-charcoal transition-all duration-300 group text-white max-w-xs bg-white/10">
                      <MessageCircle size={17} className="flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="text-[9px] uppercase tracking-wider font-bold text-white/50 group-hover:text-brand-muted mb-0.5">WhatsApp</p>
                        <p className="font-sans font-semibold text-sm">Quick Response Team</p>
                      </div>
                    </a>
                    <Link to="/find-a-dealer" className="flex items-center gap-4 px-6 py-4 border border-white/15 hover:bg-white hover:text-brand-charcoal transition-all duration-300 group text-white max-w-xs bg-white/10">
                      <MapPin size={17} className="flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="text-[9px] uppercase tracking-wider font-bold text-white/50 group-hover:text-brand-muted mb-0.5">Showroom</p>
                        <p className="font-sans font-semibold text-sm">All 9 Provinces</p>
                      </div>
                    </Link>
                  </div>
                </BlurReveal>
                <BlurReveal delay={0.2}>
                  <Link to="/get-a-quote" className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white text-brand-charcoal text-sm uppercase tracking-widest font-semibold overflow-hidden transition-all hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:scale-[1.02]">
                    <span className="relative z-10 flex items-center gap-3">
                      Request a Detailed Quotation
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-brand-gold translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out" />
                  </Link>
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

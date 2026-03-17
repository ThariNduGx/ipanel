import { Link, useParams, Navigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, ChevronRight, Shield, Droplets, Sun, Layers, Award, ShoppingBag, Plus, Minus, Check } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CartSidebar } from '../components/CartSidebar';
import { useCart } from '../context/CartContext';
import { getColourBySlug, getColoursBySeriesSlug, URL_SLUG_TO_DATA_KEY, DATA_KEY_TO_URL_SLUG } from '../data/colours';
import { SERIES, COLOR_SWATCHES, LengthOption, formatPrice } from '../data/shopProducts';

/** Maps colours.ts internal keys → shopProducts.ts series ids */
const DATA_KEY_TO_SERIES_ID: Record<string, string> = {
  'lite':    'lite',
  'heavy-b': 'heavy-b',
  'heavy-f': 'i-series',
};

function ProfileCard({ profile, colourName, index }: { profile: { id: string; label: string; name: string; description: string; image: string }; colourName: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold-dark/40 transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={profile.image}
          alt={`i-Panel ${profile.name} finishing profile for ${colourName} ceiling`}
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute top-4 left-4">
          <span className="bg-brand-gold-dark text-white text-[8px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full">
            {profile.label}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-white font-serif text-lg mb-2">{profile.name}</h4>
        <p className="text-white/50 text-[11px] font-sans font-light leading-relaxed">{profile.description}</p>
      </div>
    </motion.div>
  );
}

const finishingProfiles = [
  {
    id: 'A',
    label: 'Profile A — 4" × 4"',
    name: 'Profile A',
    description: '4" × 4" equal coverage on ceiling and wall face. For large rooms, high ceilings, and feature installations where a generous cornice presence is required.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'B',
    label: 'Profile B — 2" × 2"',
    name: 'Profile B',
    description: '2" × 2" equal coverage. Standard residential — the most widely specified profile in the i-Panel range. Clean, proportionate, suitable for any ceiling height.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'C',
    label: 'Profile C — 3" × 1"',
    name: 'Profile C',
    description: 'Asymmetric — 3" on the ceiling face, 1" on the wall face. The only non-square profile in the range. For installations where wall intrusion must be minimal while ceiling presence is maintained.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80',
  },
];

function CoordinatingCard({ slug, series, index }: { slug: string; series: string; index: number }) {
  const colour = getColourBySlug(slug);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  if (!colour) return null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/products/${DATA_KEY_TO_URL_SLUG[colour.series] ?? colour.series}/${colour.slug}`}
        className="group relative overflow-hidden rounded-2xl block aspect-[4/5] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 border border-black/5"
      >
        <div className="absolute inset-0" style={{ backgroundColor: colour.thumbnailBg }} />
        <img
          src={colour.image}
          alt={`${colour.name} ceiling panel finish coordinating colour suggestion`}
          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-white/50 text-[9px] uppercase tracking-[0.2em] font-bold font-sans mb-1">{colour.seriesLabel}</p>
          <h3 className="text-white font-serif text-base leading-tight">{colour.name}</h3>
          <p className="text-white/50 text-[10px] font-sans mt-0.5">{colour.finish}</p>
        </div>
        <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/20">
          <ArrowRight size={12} className="text-white" />
        </div>
      </Link>
    </motion.div>
  );
}

function SpecRow({ label, value, delay }: { label: string; value: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="flex items-start justify-between py-4 border-b border-black/5 last:border-0"
    >
      <span className="text-[10px] uppercase tracking-[0.15em] font-bold font-sans text-brand-muted">{label}</span>
      <span className="text-brand-charcoal font-serif text-sm text-right max-w-[55%]">{value}</span>
    </motion.div>
  );
}

export function ColourPage() {
  const { series, slug } = useParams<{ series: string; slug: string }>();
  // Map new URL slug to internal data key (e.g. 'i-series' → 'heavy-f')
  const dataKey = series ? (URL_SLUG_TO_DATA_KEY[series] ?? series) : 'lite';
  const colour = getColourBySlug(slug || '');
  const seriesColours = getColoursBySeriesSlug(dataKey as any);

  // ── Cart / purchase state ──
  const { addItem } = useCart();
  const shopSeries = SERIES.find((s) => s.id === (DATA_KEY_TO_SERIES_ID[dataKey] ?? dataKey));
  const [selectedLength, setSelectedLength] = useState<LengthOption>(
    shopSeries?.lengths[0]?.cm ?? '305'
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    if (!shopSeries || !colour) return;
    const swatchHex = COLOR_SWATCHES[colour.name] ?? '#C8C8C8';
    const price = shopSeries.prices[selectedLength] ?? 0;
    addItem({
      cartKey: `${shopSeries.id}-${colour.name}-${selectedLength}`,
      seriesId: shopSeries.id,
      seriesName: shopSeries.name,
      colorName: colour.name,
      colorSwatch: swatchHex,
      selectedLength,
      lengthLabel: shopSeries.lengths.find((l) => l.cm === selectedLength)?.label ?? `${selectedLength}cm`,
      quantity,
      pricePerPiece: price,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!colour || colour.series !== dataKey) {
    return <Navigate to={`/products/${series ?? 'ipanel-lite'}`} replace />;
  }

  const seriesPath = `/products/${DATA_KEY_TO_URL_SLUG[colour.series] ?? colour.series}`;

  // Other colours in the same series (excluding current)
  const otherColours = seriesColours.filter((c) => c.slug !== colour.slug).slice(0, 4);

  const price = shopSeries ? (shopSeries.prices[selectedLength] ?? 0) : 0;

  return (
    <div className="min-h-screen bg-brand-surface">
      <Navbar />
      <CartSidebar />

      {/* Hero */}
      <section className="relative h-[90vh] min-h-[650px] flex items-end pb-0 overflow-hidden">
        <img
          src={colour.image}
          alt={`${colour.name} ${colour.finish} i-Panel ceiling installed in a luxury residential interior`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
        <div className="noise-overlay" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0">
          <nav className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight size={9} />
            <Link to="/products" className="hover:text-white/70 transition-colors">Collections</Link>
            <ChevronRight size={9} />
            <Link to={seriesPath} className="hover:text-white/70 transition-colors">{colour.seriesLabel}</Link>
            <ChevronRight size={9} />
            <span className="text-white/60">{colour.name}</span>
          </nav>
        </div>

        <div className="relative z-10 w-full">
          <div className="container mx-auto px-6 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold font-sans mb-3">
                {colour.seriesLabel}
              </p>
              <h1 className="text-6xl md:text-8xl font-serif font-medium text-white mb-3 leading-[0.95] tracking-tight">
                {colour.name}
              </h1>
              <p className="text-white/60 text-lg font-sans font-light italic font-serif">{colour.finish}</p>
            </motion.div>
          </div>

          {/* Bottom info bar */}
          <div className="bg-black/50 backdrop-blur-xl border-t border-white/10">
            <div className="container mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 divide-x divide-white/10 flex-wrap">
                {[
                  { icon: Layers, label: 'Thickness', value: colour.techSpecs.thickness },
                  { icon: Shield, label: 'Warranty', value: colour.techSpecs.warranty },
                  { icon: Droplets, label: 'Moisture', value: '100% Waterproof' },
                  { icon: Sun, label: 'UV Rated', value: colour.techSpecs.uvIndex },
                ].map(({ icon: Icon, label, value }, i) => (
                  <div key={label} className={`flex items-center gap-2.5 ${i > 0 ? 'pl-6' : ''}`}>
                    <Icon size={14} className="text-brand-gold-light" strokeWidth={1.5} />
                    <div>
                      <p className="text-white/40 text-[8px] uppercase tracking-wider font-bold font-sans">{label}</p>
                      <p className="text-white text-xs font-sans">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/get-a-quote"
                className="px-5 py-2.5 rounded-full bg-white text-brand-charcoal text-[10px] uppercase tracking-wider font-bold hover:bg-brand-gold-dark hover:text-white transition-all duration-300"
              >
                Request Sample
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Profile + Tech Specs */}
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Narrative */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-dark font-sans mb-6">
                Finish Profile
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-charcoal mb-8 leading-snug">
                How {colour.name} behaves in light
              </h2>
              <div className="prose prose-lg font-light text-brand-muted leading-relaxed font-sans">
                <p>{colour.description}</p>
              </div>

              <div className="mt-10 flex gap-3 flex-wrap">
                <Link
                  to="/get-a-quote"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-charcoal text-white text-[10px] uppercase tracking-wider font-bold hover:bg-brand-gold-dark transition-all duration-300"
                >
                  Order Sample <ArrowRight size={13} />
                </Link>
                <Link
                  to={seriesPath}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/15 text-brand-charcoal text-[10px] uppercase tracking-wider font-bold hover:border-brand-charcoal transition-all duration-300"
                >
                  View Full {colour.seriesLabel} Range
                </Link>
              </div>
            </div>

            {/* Tech Specs */}
            <div>
              <div className="bg-white rounded-3xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-black/5">
                <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-gold-dark font-sans mb-6">
                  Technical Specifications
                </p>
                {[
                  { label: 'Thickness', value: colour.techSpecs.thickness },
                  { label: 'Width', value: colour.techSpecs.width },
                  { label: 'Lengths Available', value: colour.techSpecs.length },
                  { label: 'Manufacturer Warranty', value: colour.techSpecs.warranty },
                  { label: 'UV-Stabilised Coating', value: colour.techSpecs.coating },
                  { label: 'Fire Rating', value: colour.techSpecs.fireRating },
                  { label: 'Moisture Resistance', value: colour.techSpecs.moistureResistance },
                  { label: 'UV Resistance Index', value: colour.techSpecs.uvIndex },
                ].map((spec, i) => (
                  <SpecRow key={spec.label} {...spec} delay={i * 0.05} />
                ))}
              </div>

              {/* Award Badge */}
              <div className="mt-6 flex items-center gap-4 p-5 rounded-2xl bg-[#3B82F6]/8 border border-[#3B82F6]/15">
                <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-white flex-shrink-0">
                  <Award size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-brand-charcoal text-[11px] font-bold font-sans uppercase tracking-wider mb-0.5">
                    BestWeb.LK Certified Product
                  </p>
                  <p className="text-brand-muted text-[10px] font-light">
                    Verified quality standard across all i-Panel finishes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Purchase Widget (shown when shopProducts data exists for this series) ── */}
      {shopSeries && (
        <section className="py-16 px-6 border-t border-black/5 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-dark font-sans mb-3">
                  Order Panels
                </p>
                <h2 className="text-3xl font-serif font-medium text-brand-charcoal mb-2">
                  {colour.name}
                </h2>
                <p className="text-brand-muted text-sm mb-6">{shopSeries.subtitle}</p>
                <div className="flex items-end gap-4 mb-6">
                  <div>
                    <p className="font-serif text-4xl text-brand-charcoal">{formatPrice(price)}</p>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-brand-muted mt-1">
                      Per panel · {shopSeries.lengths.find((l) => l.cm === selectedLength)?.label}
                    </p>
                  </div>
                  <span className="text-[9px] bg-brand-surface px-3 py-1 rounded-full font-bold text-brand-muted">
                    {shopSeries.warranty} Warranty
                  </span>
                </div>

                {/* Length selector */}
                {shopSeries.lengths.length > 1 && (
                  <div className="mb-5">
                    <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-2">Length</p>
                    <div className="flex gap-2">
                      {shopSeries.lengths.map((l) => (
                        <button
                          key={l.cm}
                          onClick={() => setSelectedLength(l.cm)}
                          className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                            selectedLength === l.cm
                              ? 'bg-brand-charcoal text-white border-brand-charcoal'
                              : 'border-black/10 text-brand-muted hover:border-brand-charcoal/30 hover:text-brand-charcoal'
                          }`}
                        >
                          {l.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity + Add to Cart */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 bg-brand-surface rounded-full px-3 py-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-brand-muted hover:text-brand-charcoal transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-8 text-center font-bold text-brand-charcoal">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-brand-muted hover:text-brand-charcoal transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                  <span className="text-sm text-brand-muted font-sans">{formatPrice(price * quantity)} total</span>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-full text-[11px] uppercase tracking-[0.15em] font-bold transition-all mb-3 ${
                    added
                      ? 'bg-green-600 text-white'
                      : 'bg-brand-charcoal text-white hover:bg-brand-charcoal/90 shadow-[0_4px_20px_rgba(0,0,0,0.12)]'
                  }`}
                >
                  {added ? <><Check size={15} /> Added to Cart</> : <><ShoppingBag size={15} /> Add to Cart</>}
                </button>
                <Link
                  to="/get-a-quote"
                  className="block w-full text-center py-3.5 rounded-full border border-black/10 text-brand-charcoal text-[11px] uppercase tracking-[0.15em] font-bold hover:border-brand-charcoal/30 transition-all"
                >
                  Request a Quote Instead
                </Link>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: shopSeries.warranty + ' Warranty' },
                  { icon: Droplets, label: '100% Waterproof' },
                  { icon: Sun, label: 'UV-Stabilised' },
                  { icon: Layers, label: colour.techSpecs.thickness + ' Thick' },
                ].map((b) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.label} className="bg-brand-surface rounded-2xl p-5 border border-black/5 text-center">
                      <Icon size={20} className="mx-auto mb-2 text-brand-charcoal" strokeWidth={1.5} />
                      <p className="text-[10px] uppercase tracking-[0.1em] font-bold text-brand-muted leading-snug">{b.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Interior Coordination Bento */}
      <section className="py-24 px-6 bg-brand-charcoal text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-light font-sans mb-4">
              Interior Coordination
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">
              Coordinating Finishes
            </h2>
            <p className="text-white/50 text-base font-light max-w-xl mx-auto leading-relaxed">
              These finishes pair naturally with {colour.name} across ceiling, wall, and trim applications to produce a coherent interior material palette.
            </p>
          </div>

          {/* Coordinating Colours */}
          <div className="mb-16">
            <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-gold-light font-sans mb-8">
              Coordinating Ceiling Finishes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {colour.coordinates.map((slug, i) => (
                <CoordinatingCard key={slug} slug={slug} series={colour.series} index={i} />
              ))}
            </div>
          </div>

          {/* Finishing Profiles */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-gold-light font-sans mb-8">
              Compatible Finishing Profiles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {finishingProfiles.map((profile, i) => (
                <ProfileCard key={profile.id} profile={profile} colourName={colour.name} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More in this Series */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-dark font-sans mb-3">
                Continue Exploring
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-charcoal">
                More from {colour.seriesLabel}
              </h2>
            </div>
            <Link
              to={seriesPath}
              className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-brand-muted hover:text-brand-charcoal transition-colors"
            >
              View all {colour.seriesLabel} finishes <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {otherColours.map((c, i) => (
              <CoordinatingCard key={c.slug} slug={c.slug} series={c.series} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to={seriesPath}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-brand-charcoal/20 text-brand-charcoal text-[11px] uppercase tracking-wider font-bold hover:border-brand-gold-dark hover:text-brand-gold-dark transition-all duration-300"
            >
              View All {colour.seriesLabel} Finishes <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-brand-surface border-t border-black/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-charcoal mb-4">
            Specify {colour.name} for your project
          </h2>
          <p className="text-brand-muted font-light mb-10 leading-relaxed">
            Request a physical sample, obtain a square metre price, or connect with your nearest authorised dealer to view a full installation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-wider font-bold hover:bg-brand-gold-dark transition-all duration-300"
            >
              Technical Quote <ArrowRight size={14} />
            </Link>
            <Link
              to="/find-a-dealer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-brand-charcoal/20 text-brand-charcoal text-[11px] uppercase tracking-wider font-bold hover:border-brand-charcoal transition-all duration-300"
            >
              Find a Dealer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

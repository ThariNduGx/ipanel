import { Link, useParams, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronRight, ChevronLeft, Shield, Droplets, Sun, Layers, Award, ShoppingBag, Plus, Minus, Check, Calculator, ChevronDown, Info } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CartSidebar } from '../components/CartSidebar';
import { useCart } from '../context/CartContext';
import { getColourBySlug, getColoursBySeriesSlug, URL_SLUG_TO_DATA_KEY, DATA_KEY_TO_URL_SLUG } from '../data/colours';
import { SERIES, COLOR_SWATCHES, LengthOption, formatPrice } from '../data/shopProducts';

// ── Static product data ──
const productFeatures = [
  'Waterproof',
  'Anti Slip',
  'Fire Retardant',
  'Lightweight',
  'Quiet & Soft Underfoot',
  'Safety & Eco-Friendly',
  'Realistic Natural Wood Designs',
  'Super Wear Resistance',
  'Easy & Quick Installation',
  'Strong Pressure Bearing',
  'Flexibility',
  'Easy Maintenance',
];

const APPLICATIONS = [
  {
    tag: 'Master Bedroom',
    caption: 'Ceiling as a design statement — overhead plane anchors a neutral palette without competing for attention.',
    image: 'https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=80',
    wide: true,
  },
  {
    tag: 'Luxury Bathroom',
    caption: '100% waterproof substrate — suitable for spa-style wet areas and high-humidity zones.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
    wide: false,
  },
  {
    tag: 'Living Room',
    caption: 'Continuous ceiling plane unifying an open-plan layout with no visible jointing.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    wide: false,
  },
  {
    tag: 'Hotel Lobby',
    caption: 'High-volume commercial installation using 4000mm long panels for minimum seams.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    wide: false,
  },
  {
    tag: 'Home Office',
    caption: 'Low-maintenance acoustic surface that reduces ambient noise for a focused work environment.',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1200&q=80',
    wide: true,
  },
];

/** Neutral ambient images used as gallery fallback until per-colour images[] are populated.
 *  These are architecture/texture shots with no visible panel colour — clearly contextual, not product. */
const GALLERY_AMBIENT = [
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
];

/** Maps colours.ts internal keys → shopProducts.ts series ids */
const DATA_KEY_TO_SERIES_ID: Record<string, string> = {
  'lite':    'lite',
  'heavy-b': 'heavy-b',
  'heavy-f': 'i-series',
};

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
  const navigate = useNavigate();
  const shopSeries = SERIES.find((s) => s.id === (DATA_KEY_TO_SERIES_ID[dataKey] ?? dataKey));
  const [selectedLength, setSelectedLength] = useState<LengthOption>(
    shopSeries?.lengths[0]?.cm ?? '305'
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  // ── Sticky bar ──
  const purchasePanelRef = useRef<HTMLElement>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // ── Panel estimator ──
  const [showEstimator, setShowEstimator] = useState(false);
  const [roomL, setRoomL] = useState('');
  const [roomW, setRoomW] = useState('');

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

  function handleBuyNow() {
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
    navigate('/cart');
  }

  useEffect(() => { window.scrollTo(0, 0); setActiveImg(0); }, [slug]);

  useEffect(() => {
    const el = purchasePanelRef.current;
    if (!el || !shopSeries) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shopSeries, slug]);

  if (!colour || colour.series !== dataKey) {
    return <Navigate to={`/products/${series ?? 'ipanel-lite'}`} replace />;
  }

  const seriesPath = `/products/${DATA_KEY_TO_URL_SLUG[colour.series] ?? colour.series}`;

  // Other colours in the same series (excluding current)
  const otherColours = seriesColours.filter((c) => c.slug !== colour.slug).slice(0, 4);

  const price = shopSeries ? (shopSeries.prices[selectedLength] ?? 0) : 0;

  // ── Image gallery ──
  // If per-colour images are provided use them; otherwise append neutral ambient shots as context.
  const usingAmbientFallback = !colour.images?.length;
  const galleryImages = usingAmbientFallback
    ? [colour.image, ...GALLERY_AMBIENT]
    : [colour.image, ...colour.images!];

  // ── WhatsApp URL ──
  const waMessage = colour
    ? encodeURIComponent(`Hi, I'm interested in the ${colour.name} (${colour.seriesLabel}) panels. Please share pricing and availability.`)
    : '';
  const waUrl = `https://wa.me/94722002200?text=${waMessage}`;

  // ── Panel estimator ──
  const coverage = shopSeries?.coveragePerPanel[selectedLength] ?? null;
  const estimatedPanels =
    coverage && roomL && roomW
      ? Math.ceil((parseFloat(roomL) * parseFloat(roomW)) / (coverage as number) * 1.10)
      : null;

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

      {/* ── Purchase Panel — right after hero ── */}
      {shopSeries && (
        <section ref={purchasePanelRef} className="py-14 px-6 bg-white border-b border-black/5">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-[1fr_1.1fr] rounded-3xl overflow-hidden border border-black/5 shadow-[0_8px_60px_rgba(0,0,0,0.07)]"
            >
              {/* Left — image gallery */}
              <div className="relative overflow-hidden bg-brand-surface flex flex-col">
                {/* Main display */}
                <div className="relative flex-1 min-h-[300px] md:min-h-[420px]">
                  <div className="absolute inset-0" style={{ backgroundColor: colour.thumbnailBg }} />
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={galleryImages[activeImg]}
                      src={galleryImages[activeImg]}
                      alt={`${colour.name} ${colour.finish} ceiling panel — view ${activeImg + 1}`}
                      className="absolute inset-0 w-full h-full object-cover opacity-85"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top row: warranty badge + counter */}
                  <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                    <span className="bg-white/15 backdrop-blur-md border border-white/20 text-white text-[8px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full">
                      {colour.techSpecs.warranty} Warranty
                    </span>
                    {galleryImages.length > 1 && (
                      <span className="bg-black/40 backdrop-blur-sm border border-white/15 text-white text-[9px] font-bold font-sans px-2.5 py-1 rounded-full">
                        {activeImg + 1} / {galleryImages.length}
                      </span>
                    )}
                  </div>

                  {/* Prev / Next */}
                  {galleryImages.length > 1 && (
                    <>
                      <button
                        onClick={() => setActiveImg((i) => (i - 1 + galleryImages.length) % galleryImages.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-all duration-200 z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={() => setActiveImg((i) => (i + 1) % galleryImages.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-all duration-200 z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </>
                  )}

                  {/* Colour info overlay */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <div className="inline-block bg-black/40 backdrop-blur-md border border-white/15 px-4 py-3 rounded-2xl">
                      <p className="text-white/55 text-[9px] uppercase tracking-[0.2em] font-bold font-sans mb-0.5">{colour.seriesLabel}</p>
                      <p className="text-white font-serif text-xl leading-tight">{colour.name}</p>
                      <p className="text-white/55 text-[10px] font-sans mt-0.5 font-light">{colour.finish}</p>
                    </div>
                  </div>
                </div>

                {/* Thumbnail strip */}
                {galleryImages.length > 1 && (
                  <div className="bg-white border-t border-black/5 flex-shrink-0">
                    <div className="flex gap-2 p-3 overflow-x-auto scrollbar-hide">
                      {galleryImages.map((src, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImg(i)}
                          className={`flex-shrink-0 w-[62px] h-[46px] rounded-lg overflow-hidden transition-all duration-200 ${
                            i === activeImg
                              ? 'ring-2 ring-brand-gold-dark ring-offset-1'
                              : 'opacity-55 hover:opacity-80'
                          }`}
                        >
                          <img src={src} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                    {usingAmbientFallback && (
                      <p className="text-[8.5px] text-brand-muted/50 text-center pb-2.5 px-3 font-sans leading-tight">
                        Views 2–3 are lifestyle references · actual finish shown in view 1
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Right — purchase controls */}
              <div className="bg-white p-8 md:p-12 flex flex-col justify-center gap-6">
                {/* Series + name */}
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gold-dark font-sans mb-1">{shopSeries.name}</p>
                  <h2 className="text-3xl font-serif font-medium text-brand-charcoal leading-tight">{colour.name}</h2>
                  <p className="text-brand-muted text-sm font-light mt-1">{shopSeries.subtitle}</p>
                </div>

                {/* Price */}
                <div className="flex items-end gap-4">
                  <div>
                    <p className="font-serif text-4xl text-brand-charcoal tracking-tight">{formatPrice(price)}</p>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-brand-muted mt-1">
                      Per panel · {shopSeries.lengths.find((l) => l.cm === selectedLength)?.label}
                    </p>
                  </div>
                  <span className="mb-1 text-[9px] bg-brand-surface border border-black/5 px-3 py-1.5 rounded-full font-bold text-brand-muted uppercase tracking-wider">
                    {shopSeries.warranty}
                  </span>
                </div>

                {/* Length selector */}
                {shopSeries.lengths.length > 1 && (
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-2.5">Panel Length</p>
                    <div className="flex gap-2">
                      {shopSeries.lengths.map((l) => (
                        <button
                          key={l.cm}
                          onClick={() => setSelectedLength(l.cm)}
                          className={`flex-1 py-3 px-4 rounded-xl border text-xs font-bold transition-all duration-200 ${
                            selectedLength === l.cm
                              ? 'bg-brand-charcoal text-white border-brand-charcoal'
                              : 'border-black/10 text-brand-muted hover:border-brand-charcoal/30 hover:text-brand-charcoal bg-brand-surface'
                          }`}
                        >
                          {l.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-2.5">Quantity</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-brand-surface border border-black/5 rounded-full px-3 py-2">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-brand-muted hover:text-brand-charcoal hover:bg-black/5 transition-all"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="w-10 text-center font-bold text-brand-charcoal font-sans text-sm">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-brand-muted hover:text-brand-charcoal hover:bg-black/5 transition-all"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                    <span className="text-sm text-brand-muted font-sans font-light">{formatPrice(price * quantity)} total</span>
                  </div>
                </div>

                {/* Panel Estimator */}
                {coverage && (
                  <div className="border border-black/8 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setShowEstimator(!showEstimator)}
                      className="w-full flex items-center justify-between px-4 py-3 text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted hover:text-brand-charcoal transition-colors"
                    >
                      <span className="flex items-center gap-2"><Calculator size={13} /> How many panels do I need?</span>
                      <ChevronDown size={13} className={`transition-transform duration-200 ${showEstimator ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {showEstimator && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 pt-4 border-t border-black/5 bg-brand-surface">
                            <div className="grid grid-cols-2 gap-3 mb-3">
                              <div>
                                <label className="text-[9px] uppercase tracking-wider font-bold text-brand-muted block mb-1">Length (m)</label>
                                <input
                                  type="number" step="0.1" min="0" value={roomL}
                                  onChange={e => setRoomL(e.target.value)}
                                  placeholder="e.g. 4.5"
                                  className="w-full px-3 py-2 rounded-xl border border-black/10 text-sm font-sans bg-white focus:outline-none focus:border-brand-gold-dark"
                                />
                              </div>
                              <div>
                                <label className="text-[9px] uppercase tracking-wider font-bold text-brand-muted block mb-1">Width (m)</label>
                                <input
                                  type="number" step="0.1" min="0" value={roomW}
                                  onChange={e => setRoomW(e.target.value)}
                                  placeholder="e.g. 3.2"
                                  className="w-full px-3 py-2 rounded-xl border border-black/10 text-sm font-sans bg-white focus:outline-none focus:border-brand-gold-dark"
                                />
                              </div>
                            </div>
                            {estimatedPanels && (
                              <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-black/5">
                                <div>
                                  <p className="text-brand-charcoal font-serif text-2xl font-medium">{estimatedPanels}</p>
                                  <p className="text-[9px] uppercase tracking-wider font-bold text-brand-muted">panels (incl. 10% waste)</p>
                                </div>
                                <button
                                  onClick={() => setQuantity(estimatedPanels)}
                                  className="px-4 py-2 rounded-full bg-brand-charcoal text-white text-[10px] uppercase tracking-wider font-bold hover:bg-brand-gold-dark transition-all"
                                >
                                  Use This
                                </button>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* CTAs */}
                <div className="flex flex-col gap-3 pt-2">
                  <button
                    onClick={handleAddToCart}
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-300 ${
                      added
                        ? 'bg-green-600 text-white shadow-[0_4px_20px_rgba(22,163,74,0.25)]'
                        : 'bg-brand-charcoal text-white hover:bg-brand-gold-dark shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_24px_rgba(0,71,255,0.3)]'
                    }`}
                  >
                    {added ? <><Check size={15} /> Added to Cart</> : <><ShoppingBag size={15} /> Add to Cart</>}
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-brand-charcoal/15 text-brand-charcoal text-[11px] uppercase tracking-[0.15em] font-bold hover:border-brand-charcoal/40 hover:bg-brand-surface transition-all duration-300"
                  >
                    Buy Now <ArrowRight size={13} />
                  </button>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-[11px] uppercase tracking-[0.15em] font-bold text-[#25D366] border border-[#25D366]/20 hover:bg-[#25D366]/5 transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51c-.173-.008-.371-.01-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Order via WhatsApp
                  </a>
                </div>

                {/* Trust row */}
                <div className="grid grid-cols-4 gap-3 pt-4 border-t border-black/5">
                  {[
                    { icon: Shield, label: shopSeries.warranty },
                    { icon: Droplets, label: '100% Waterproof' },
                    { icon: Sun, label: 'UV-Stabilised' },
                    { icon: Layers, label: colour.techSpecs.thickness },
                  ].map((b) => {
                    const Icon = b.icon;
                    return (
                      <div key={b.label} className="text-center">
                        <Icon size={16} className="mx-auto mb-1.5 text-brand-charcoal/50" strokeWidth={1.5} />
                        <p className="text-[9px] uppercase tracking-[0.05em] font-bold text-brand-muted leading-snug">{b.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Colour Rail ── */}
      {seriesColours.length > 1 && (
        <section className="py-8 px-6 bg-white border-b border-black/5">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-muted font-sans">
                {colour.seriesLabel} Colours
              </p>
              <Link
                to={seriesPath}
                className="text-[10px] uppercase tracking-wider font-bold text-brand-gold-dark hover:text-brand-gold transition-colors"
              >
                View All {seriesColours.length} →
              </Link>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {seriesColours.map((c) => (
                <Link
                  key={c.slug}
                  to={`/products/${DATA_KEY_TO_URL_SLUG[c.series] ?? c.series}/${c.slug}`}
                  className="flex flex-col items-center gap-1.5 flex-shrink-0 group"
                >
                  <div
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-200 group-hover:scale-110 ${
                      c.slug === colour.slug
                        ? 'border-brand-gold-dark ring-2 ring-brand-gold-dark ring-offset-2 scale-110'
                        : 'border-black/10 group-hover:border-brand-gold-dark/50'
                    }`}
                    style={{ backgroundColor: c.thumbnailBg }}
                  />
                  <span className={`text-[9px] font-bold uppercase tracking-wide text-center leading-tight max-w-[52px] truncate font-sans ${
                    c.slug === colour.slug ? 'text-brand-charcoal' : 'text-brand-muted group-hover:text-brand-charcoal'
                  }`}>
                    {c.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
              <div className="mt-6 flex items-center gap-4 p-5 rounded-2xl bg-[#0047FF]/8 border border-[#0047FF]/15">
                <div className="w-10 h-10 rounded-full bg-[#0047FF] flex items-center justify-center text-white flex-shrink-0">
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

      {/* Technical Drawing */}
      <section className="py-20 px-6 bg-brand-surface border-b border-black/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-dark font-sans mb-3">Engineering Reference</p>
            <h2 className="text-3xl font-serif font-medium text-brand-charcoal">Technical Drawing</h2>
            <p className="text-brand-muted text-sm font-light mt-3 max-w-lg mx-auto">
              Panel profile and dimensional specifications for the {colour.seriesLabel} system.
            </p>
          </div>

          <div className="grid md:grid-cols-[1.7fr_1fr] gap-8 items-start">
            {/* SVG Drawing */}
            <div className="bg-white rounded-3xl p-6 border border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
              <svg viewBox="0 0 660 336" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <defs>
                  <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="0.7" fill="#D1D5DB"/>
                  </pattern>
                </defs>

                {/* Background */}
                <rect width="660" height="336" rx="14" fill="#FAFAFA"/>
                <rect width="660" height="336" rx="14" fill="url(#dotGrid)"/>
                <rect x="1.5" y="1.5" width="657" height="333" rx="13" stroke="#E5E7EB" strokeWidth="1.5"/>

                {/* ── FACE ELEVATION ── */}
                <text x="50" y="26" fontSize="8" letterSpacing="2.5" fill="#9CA3AF" fontWeight="700" fontFamily="sans-serif">FACE ELEVATION</text>
                {/* Panel face */}
                <rect x="50" y="34" width="490" height="78" rx="2" fill={colour.thumbnailBg} opacity="0.9" stroke="#374151" strokeWidth="1.5"/>
                {/* Grain lines */}
                <line x1="50" y1="57"  x2="540" y2="57"  stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>
                <line x1="50" y1="73"  x2="540" y2="73"  stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>
                <line x1="50" y1="91"  x2="540" y2="91"  stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>

                {/* Width dim — left vertical */}
                <line x1="22" y1="34"  x2="22" y2="112" stroke="#A87C2A" strokeWidth="1"/>
                <line x1="16" y1="34"  x2="44" y2="34"  stroke="#A87C2A" strokeWidth="1"/>
                <line x1="16" y1="112" x2="44" y2="112" stroke="#A87C2A" strokeWidth="1"/>
                <g transform="translate(12,73) rotate(-90)">
                  <text textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#A87C2A" fontFamily="sans-serif">{colour.techSpecs.width}</text>
                </g>

                {/* Length dim — bottom horizontal */}
                <line x1="50"  y1="130" x2="540" y2="130" stroke="#A87C2A" strokeWidth="1"/>
                <line x1="50"  y1="124" x2="50"  y2="136" stroke="#A87C2A" strokeWidth="1.5"/>
                <line x1="540" y1="124" x2="540" y2="136" stroke="#A87C2A" strokeWidth="1.5"/>
                <text x="295" y="148" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#A87C2A" fontFamily="sans-serif">{colour.techSpecs.length}</text>

                {/* Section marker A-A */}
                <line x1="562" y1="24" x2="562" y2="120" stroke="#374151" strokeWidth="1" strokeDasharray="5 3"/>
                <circle cx="562" cy="24" r="9" fill="#374151"/>
                <text x="562" y="28.5" textAnchor="middle" fontSize="8" fontWeight="700" fill="white" fontFamily="sans-serif">A</text>
                <circle cx="562" cy="120" r="9" fill="#374151"/>
                <text x="562" y="124.5" textAnchor="middle" fontSize="8" fontWeight="700" fill="white" fontFamily="sans-serif">A</text>

                {/* ── CROSS SECTION A-A ── */}
                <text x="50" y="182" fontSize="8" letterSpacing="2.5" fill="#9CA3AF" fontWeight="700" fontFamily="sans-serif">SECTION A-A  ·  PROFILE ENLARGED</text>

                {/* Panel body */}
                <rect x="100" y="194" width="380" height="44" rx="1" fill={colour.thumbnailBg} opacity="0.9" stroke="#374151" strokeWidth="1.5"/>
                {/* Tongue (right) */}
                <rect x="480" y="203" width="16" height="26" rx="1" fill={colour.thumbnailBg} opacity="0.9" stroke="#374151" strokeWidth="1.5"/>
                {/* Groove (left — dashed) */}
                <rect x="84" y="203" width="16" height="26" rx="1" fill="white" stroke="#374151" strokeWidth="1.2" strokeDasharray="3 2"/>

                {/* Thickness dim — left */}
                <line x1="62" y1="194" x2="62" y2="238" stroke="#A87C2A" strokeWidth="1"/>
                <line x1="56" y1="194" x2="80" y2="194" stroke="#A87C2A" strokeWidth="1"/>
                <line x1="56" y1="238" x2="80" y2="238" stroke="#A87C2A" strokeWidth="1"/>
                <g transform="translate(50,216) rotate(-90)">
                  <text textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#A87C2A" fontFamily="sans-serif">{colour.techSpecs.thickness}</text>
                </g>

                {/* Width dim — bottom */}
                <line x1="100" y1="262" x2="480" y2="262" stroke="#A87C2A" strokeWidth="1"/>
                <line x1="100" y1="256" x2="100" y2="268" stroke="#A87C2A" strokeWidth="1.5"/>
                <line x1="480" y1="256" x2="480" y2="268" stroke="#A87C2A" strokeWidth="1.5"/>
                <text x="290" y="280" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#A87C2A" fontFamily="sans-serif">{colour.techSpecs.width}</text>

                {/* Callout: Tongue */}
                <line x1="496" y1="216" x2="546" y2="203" stroke="#9CA3AF" strokeWidth="0.8"/>
                <text x="550" y="203" fontSize="8.5" fill="#6B7280" fontFamily="sans-serif">Tongue</text>
                {/* Callout: Groove */}
                <line x1="84" y1="216" x2="45" y2="203" stroke="#9CA3AF" strokeWidth="0.8"/>
                <text x="40" y="203" fontSize="8.5" fill="#6B7280" fontFamily="sans-serif" textAnchor="end">Groove</text>

                {/* Footer note */}
                <text x="330" y="316" textAnchor="middle" fontSize="8" fill="#9CA3AF" fontFamily="sans-serif">
                  T&amp;G interlocking system · concealed installation · no visible fixings
                </text>
              </svg>
            </div>

            {/* Dimension callout panel */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-brand-gold-dark font-sans mb-5">Key Dimensions</p>
                {[
                  { label: 'Panel Width',        value: colour.techSpecs.width },
                  { label: 'Thickness',          value: colour.techSpecs.thickness },
                  { label: 'Available Lengths',  value: colour.techSpecs.length },
                  { label: 'Joint System',       value: 'Tongue & Groove' },
                  { label: 'Installation',       value: 'Concealed fixing' },
                  { label: 'Fire Rating',        value: colour.techSpecs.fireRating },
                  { label: 'Moisture',           value: colour.techSpecs.moistureResistance },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start justify-between py-3 border-b border-black/5 last:border-0">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-brand-muted font-sans">{label}</span>
                    <span className="text-brand-charcoal font-serif text-sm text-right max-w-[55%]">{value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-brand-charcoal rounded-2xl p-5 text-white">
                <p className="text-[9px] uppercase tracking-wider font-bold text-brand-gold-light font-sans mb-2">Need a DWG / DXF File?</p>
                <p className="text-white/55 text-xs font-light leading-relaxed mb-4">
                  Download the full CAD drawing package for specification and contractor use.
                </p>
                <Link
                  to="/get-a-quote"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-[10px] uppercase tracking-wider font-bold hover:bg-white/20 transition-all duration-200"
                >
                  Request Drawing Pack <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 px-6 bg-white border-b border-black/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-dark font-sans mb-3">What Sets It Apart</p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-charcoal mb-6 leading-snug">Product Features</h2>
              <p className="text-brand-muted font-light leading-relaxed text-sm">
                Engineered for premium interiors, every i-Panel colour delivers the same specification-grade performance — built to withstand the rigour of professional installation and years of daily use.
              </p>
              <div className="mt-8 flex gap-3 flex-wrap">
                <Link
                  to="/get-a-quote"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-charcoal text-white text-[10px] uppercase tracking-wider font-bold hover:bg-brand-gold-dark transition-all duration-300"
                >
                  Get a Quote <ArrowRight size={13} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {productFeatures.map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.35, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-brand-surface border border-black/5 hover:border-brand-gold-dark/25 hover:bg-white transition-all duration-200 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-brand-gold-dark/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold-dark/20 transition-colors duration-200">
                    <Check size={13} className="text-brand-gold-dark" strokeWidth={2.5} />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-brand-charcoal/70 group-hover:text-brand-charcoal transition-colors duration-200 leading-tight">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Gallery */}
      <section className="py-20 px-6 bg-brand-surface border-b border-black/5">
        <div className="container mx-auto max-w-6xl">

          {/* Header row */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-dark font-sans mb-3">Where It Lives</p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-charcoal">Installation Showcase</h2>
            </div>
            <span className="hidden sm:flex items-center gap-1.5 text-[9px] uppercase tracking-wider font-bold text-brand-muted/50 border border-black/8 px-3 py-1.5 rounded-full flex-shrink-0">
              <Info size={10} strokeWidth={2} />
              Inspiration images
            </span>
          </div>

          {/* Bento grid — first item spans 2 cols */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {APPLICATIONS.map((app, i) => (
              <motion.div
                key={app.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-2xl group aspect-[4/3] ${
                  i === 0 ? 'col-span-2' : ''
                }`}
              >
                {/* Image */}
                <img
                  src={app.image}
                  alt={`i-Panel installed in a ${app.tag.toLowerCase()} setting`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Application type badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/15 backdrop-blur-md border border-white/20 text-white text-[8px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full">
                    {app.tag}
                  </span>
                </div>

                {/* Caption — slides up on hover */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p
                    className={`text-white/90 font-sans leading-relaxed translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ${
                      i === 0 ? 'text-sm max-w-lg' : 'text-xs'
                    }`}
                  >
                    {app.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-center text-[9px] text-brand-muted/45 mt-5 font-sans">
            Images are installation references — actual appearance depends on the colour selected above
          </p>
        </div>
      </section>

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
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-gold-light font-sans mb-8">
              Coordinating Ceiling Finishes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {colour.coordinates.map((slug, i) => (
                <CoordinatingCard key={slug} slug={slug} series={colour.series} index={i} />
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

      {/* ── Sticky Add-to-Cart Bar ── */}
      <AnimatePresence>
        {shopSeries && showStickyBar && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 inset-x-0 z-50 bg-white/90 backdrop-blur-xl border-t border-black/8 shadow-[0_-8px_40px_rgba(0,0,0,0.1)]"
          >
            <div className="container mx-auto max-w-6xl px-6 py-3 flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-full flex-shrink-0 border-2 border-black/10"
                style={{ backgroundColor: colour.thumbnailBg }}
              />
              <div className="flex-1 min-w-0">
                <p className="font-serif text-brand-charcoal font-medium truncate">{colour.name}</p>
                <p className="text-[10px] uppercase tracking-wider text-brand-muted font-bold font-sans">
                  {shopSeries.name} · {shopSeries.lengths.find(l => l.cm === selectedLength)?.label}
                </p>
              </div>
              <p className="font-serif text-xl text-brand-charcoal hidden sm:block">{formatPrice(price)}</p>
              <button
                onClick={handleAddToCart}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-300 flex-shrink-0 ${
                  added ? 'bg-green-600 text-white' : 'bg-brand-charcoal text-white hover:bg-brand-gold-dark'
                }`}
              >
                {added ? <><Check size={13} /> Added</> : <><ShoppingBag size={13} /> Add to Cart</>}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

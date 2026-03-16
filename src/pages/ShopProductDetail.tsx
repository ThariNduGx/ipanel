import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ChevronRight, ShoppingBag, Shield, Droplets, Sun,
  Plus, Minus, Check, ArrowRight, Ruler, Package,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CartSidebar } from '../components/CartSidebar';
import { useCart } from '../context/CartContext';
import { SERIES, COLOR_SWATCHES, COLOR_CATEGORIES, LengthOption, ProfileOption, formatPrice, SeriesSpec } from '../data/shopProducts';

// ─── SKU helpers ──────────────────────────────────────────────────────────────

const SKU_PREFIX: Record<string, string> = {
  'i-series':  'arch-flat',
  'heavy-b':   'designer-heavy',
  'lite':      'project-lite',
  'finishing': 'finishing',
};

function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

function colorToSku(seriesId: string, colorName: string) {
  return `${SKU_PREFIX[seriesId] ?? seriesId}-${toSlug(colorName)}`;
}

/**
 * Parse a SKU into series + colorName (or profileId for finishing).
 *
 * arch-flat-matt-white     → i-series  + Matt White
 * designer-heavy-teak      → heavy-b   + Teak
 * project-lite-kithul      → lite      + Kithul
 * finishing-matt-white     → finishing + Matt White  (color variant)
 * finishing-a / b / c      → finishing + Profile A/B/C (legacy profile urls)
 */
function parseSku(sku: string): {
  series: SeriesSpec | undefined;
  colorName: string;
  profileId?: ProfileOption;
} {
  const prefixMap: [string, string][] = [
    ['arch-flat',      'i-series'],
    ['designer-heavy', 'heavy-b'],
    ['project-lite',   'lite'],
    ['finishing',      'finishing'],
  ];

  let seriesId: string | undefined;
  let remainder = '';

  for (const [prefix, sid] of prefixMap) {
    if (sku.startsWith(prefix + '-') || sku === prefix) {
      seriesId = sid;
      remainder = sku.slice(prefix.length + 1); // '' if sku===prefix
      break;
    }
  }

  const series = SERIES.find((s) => s.id === seriesId);

  if (seriesId === 'finishing') {
    // Legacy profile SKUs: finishing-a, finishing-b, finishing-c
    if (['a', 'b', 'c'].includes(remainder)) {
      return { series, colorName: '', profileId: remainder.toUpperCase() as ProfileOption };
    }
    // Color-based finishing SKU: finishing-matt-white
    const colorName = remainder.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return { series, colorName };
  }

  // Non-finishing: convert kebab-case remainder to Title Case
  const colorName = remainder.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return { series, colorName };
}

// ─── Application highlights per series ────────────────────────────────────────

const SERIES_FEATURES: Record<string, string[]> = {
  'finishing': [
    'Conceals raw ceiling-wall junctions',
    'Replaces traditional plaster cornices',
    'Three profile shapes for any design intent',
    'Click-fit installation — no adhesive required',
    '15-year manufacturer warranty',
  ],
  'lite': [
    'Wide-format panels for faster coverage',
    'Ideal for large residential & project builds',
    'Click-Lock tongue & groove system',
    '100% waterproof — suitable for bathrooms',
    '5-year manufacturer warranty',
  ],
  'heavy-b': [
    'Designer shadow-line profile adds depth',
    'Widest colour palette across all series',
    'Click-Lock tongue & groove installation',
    'Class B fire rating for commercial use',
    '10-year manufacturer warranty',
  ],
  'i-series': [
    'Seamless flat-face architectural finish',
    'Premium laminate, UV-stabilised surface',
    'Available in two lengths for planning flexibility',
    'Class B fire rating — suitable for any interior',
    '10-year manufacturer warranty',
  ],
};

const SERIES_APPLICATIONS: Record<string, string[]> = {
  'finishing': ['Living Rooms', 'Bedrooms', 'Luxury Lobbies', 'Heritage Restorations'],
  'lite':      ['Bedrooms', 'Common Areas', 'Rental Properties', 'Large Halls'],
  'heavy-b':   ['Living Rooms', 'Feature Ceilings', 'Commercial Spaces', 'Hospitality'],
  'i-series':  ['Modern Villas', 'Office Fit-outs', 'Showrooms', 'Hospitality'],
};

// ─── Component ─────────────────────────────────────────────────────────────────

export function ShopProductDetail() {
  const { sku } = useParams<{ sku: string }>();
  const { series, colorName: parsedColor, profileId } = parseSku(sku ?? '');

  // For finishing, colour is a local state (profile is fixed by SKU or default A)
  const initialColor = parsedColor || (series?.colors[0] ?? '');
  const [selectedColor, setSelectedColor] = useState<string>(initialColor);

  const [quantity, setQuantity] = useState(1);
  const [selectedLength, setSelectedLength] = useState<LengthOption>(
    series?.lengths[0]?.cm ?? '305'
  );
  const [selectedProfile, setSelectedProfile] = useState<ProfileOption | undefined>(
    profileId ?? series?.profiles?.[0]?.id
  );
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!series) return <Navigate to="/shop" replace />;

  const isFinishing = series.id === 'finishing';

  // Active colour — for finishing use state, for others use parsed colour
  const activeColor = isFinishing ? selectedColor : (parsedColor || series.colors[0]);
  const swatchHex = activeColor ? (COLOR_SWATCHES[activeColor] ?? '#C8C8C8') : '#C8C8C8';
  const price = series.prices[selectedLength] ?? 0;
  const displayName = activeColor || `Profile ${selectedProfile ?? profileId ?? 'A'}`;
  const colorCategory = activeColor ? COLOR_CATEGORIES[activeColor] : undefined;

  function handleAddToCart() {
    const cartKey = `${series!.id}-${activeColor || selectedProfile}-${selectedLength}`;
    addItem({
      cartKey,
      seriesId: series!.id,
      seriesName: series!.name,
      colorName: displayName,
      colorSwatch: swatchHex,
      selectedLength,
      lengthLabel: series!.lengths.find((l) => l.cm === selectedLength)?.label ?? `${selectedLength}cm`,
      selectedProfile: selectedProfile ?? profileId,
      quantity,
      pricePerPiece: price,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  const features = SERIES_FEATURES[series.id] ?? [];
  const applications = SERIES_APPLICATIONS[series.id] ?? [];
  const relatedSeries = SERIES.filter((s) => s.id !== series.id);

  const seriesPageSlug: Record<string, string> = {
    'i-series':  'architectural-flat',
    'heavy-b':   'ipanel-heavy-b',
    'lite':      'ipanel-lite',
    'finishing': 'finishing-series',
  };

  return (
    <>
      <Navbar />
      <CartSidebar />
      <div className="min-h-screen bg-brand-surface pt-20 pb-24">
        <div className="max-w-6xl mx-auto px-6 pt-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted mb-10">
            <Link to="/" className="hover:text-brand-charcoal">Home</Link>
            <ChevronRight size={10} />
            <Link to="/shop" className="hover:text-brand-charcoal">Shop</Link>
            <ChevronRight size={10} />
            <Link to={`/products/${seriesPageSlug[series.id] ?? series.id}`} className="hover:text-brand-charcoal">{series.name}</Link>
            <ChevronRight size={10} />
            <span className="text-brand-charcoal">{displayName}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-14">
            {/* ── Left: Visual + Swatches ── */}
            <div className="space-y-5">
              <motion.div
                key={swatchHex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="aspect-square rounded-3xl overflow-hidden border border-black/5 relative"
                style={{ backgroundColor: swatchHex }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-black/25 backdrop-blur-sm rounded-2xl px-5 py-3">
                    <p className="text-white/70 text-[10px] uppercase tracking-[0.2em] font-bold">{series.name}</p>
                    <p className="text-white font-serif text-xl leading-tight">{displayName}</p>
                    {colorCategory && (
                      <span className="inline-block mt-1.5 text-[9px] uppercase tracking-widest font-bold text-white/60 bg-white/10 px-2 py-0.5 rounded-full">
                        {colorCategory}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Colour swatches */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-2.5">
                  {series.colors.length} Colours Available
                </p>
                <div className="flex flex-wrap gap-2">
                  {series.colors.map((c) => {
                    const isActive = c === activeColor;
                    return isFinishing ? (
                      // For finishing: clicking changes local colour state
                      <button
                        key={c}
                        title={c}
                        onClick={() => setSelectedColor(c)}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${isActive ? 'border-brand-charcoal scale-110 shadow-md' : 'border-transparent hover:border-brand-charcoal/30'}`}
                        style={{ backgroundColor: COLOR_SWATCHES[c] ?? '#ccc' }}
                      />
                    ) : (
                      // For other series: navigate to new SKU URL
                      <Link
                        key={c}
                        to={`/shop/product/${colorToSku(series.id, c)}`}
                        title={c}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${isActive ? 'border-brand-charcoal scale-110 shadow-md' : 'border-transparent hover:border-brand-charcoal/30'}`}
                        style={{ backgroundColor: COLOR_SWATCHES[c] ?? '#ccc' }}
                      />
                    );
                  })}
                </div>
                {activeColor && (
                  <p className="text-xs text-brand-muted font-sans mt-2">{activeColor}</p>
                )}
              </div>

              {/* Application tags */}
              {applications.length > 0 && (
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-2">Best For</p>
                  <div className="flex flex-wrap gap-1.5">
                    {applications.map((app) => (
                      <span key={app} className="text-[10px] bg-white border border-black/5 text-brand-charcoal px-3 py-1 rounded-full font-sans">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Right: Product Info + Controls ── */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-gold mb-2">{series.name}</p>
              <h1 className="font-serif text-3xl md:text-4xl text-brand-charcoal mb-1 leading-tight">{displayName}</h1>
              <p className="text-brand-muted text-sm font-sans mb-6 leading-relaxed">{series.subtitle}</p>

              {/* Price */}
              <div className="bg-white rounded-2xl p-5 border border-black/5 mb-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-serif text-3xl text-brand-charcoal">{formatPrice(price)}</p>
                    <p className="text-[10px] uppercase tracking-[0.12em] font-bold text-brand-muted mt-1">
                      Per panel · {series.lengths.find(l => l.cm === selectedLength)?.label ?? selectedLength}
                    </p>
                  </div>
                  <span className="text-[9px] bg-brand-surface px-3 py-1 rounded-full font-bold text-brand-muted">{series.warranty} Warranty</span>
                </div>
              </div>

              {/* Length selector */}
              {series.lengths.length > 1 && (
                <div className="mb-5">
                  <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-2">Length</p>
                  <div className="flex gap-2">
                    {series.lengths.map((l) => (
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

              {/* Profile selector (Finishing) */}
              {series.profiles && (
                <div className="mb-5">
                  <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-2">Profile Shape</p>
                  <div className="flex gap-2">
                    {series.profiles.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedProfile(p.id)}
                        className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                          selectedProfile === p.id
                            ? 'bg-brand-charcoal text-white border-brand-charcoal'
                            : 'border-black/10 text-brand-muted hover:border-brand-charcoal/30 hover:text-brand-charcoal'
                        }`}
                      >
                        {p.name}
                        <span className={`block text-[9px] font-normal mt-0.5 ${selectedProfile === p.id ? 'text-white/70' : 'text-brand-muted'}`}>
                          {p.shape}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-2">Quantity (panels)</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-brand-muted hover:border-brand-charcoal hover:text-brand-charcoal transition-all"
                  >
                    <Minus size={13} />
                  </button>
                  <span className="w-10 text-center font-bold text-brand-charcoal text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-brand-muted hover:border-brand-charcoal hover:text-brand-charcoal transition-all"
                  >
                    <Plus size={13} />
                  </button>
                  <span className="text-brand-muted text-xs font-sans ml-2">= {formatPrice(price * quantity)}</span>
                </div>
              </div>

              {/* CTAs */}
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

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { icon: Shield, label: series.warranty },
                  { icon: Droplets, label: '100% Waterproof' },
                  { icon: Sun, label: 'UV-Stabilised' },
                ].map((b) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.label} className="bg-white rounded-xl p-3 border border-black/5 text-center">
                      <Icon size={14} className="mx-auto mb-1 text-brand-charcoal" />
                      <p className="text-[9px] uppercase tracking-[0.1em] font-bold text-brand-muted leading-tight">{b.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Specification + Features row ── */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Specifications table */}
            <div className="bg-white rounded-3xl p-8 border border-black/5">
              <div className="flex items-center gap-2 mb-6">
                <Ruler size={14} className="text-brand-charcoal" />
                <h2 className="font-serif text-xl text-brand-charcoal">Specifications</h2>
              </div>
              <dl className="space-y-3">
                {[
                  { label: 'Width', value: series.width },
                  { label: 'Thickness', value: series.thickness },
                  { label: 'Weight', value: series.weight },
                  { label: 'Warranty', value: series.warranty },
                  ...series.lengths.map((l) => ({ label: `Length (${l.cm}cm)`, value: l.label })),
                  ...(series.profiles
                    ? series.profiles.map((p) => ({ label: p.name, value: p.shape }))
                    : []),
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center py-2 border-b border-black/4 last:border-0">
                    <dt className="text-[10px] uppercase tracking-[0.12em] font-bold text-brand-muted">{spec.label}</dt>
                    <dd className="text-sm font-sans text-brand-charcoal">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Features list */}
            <div className="bg-white rounded-3xl p-8 border border-black/5">
              <div className="flex items-center gap-2 mb-6">
                <Package size={14} className="text-brand-charcoal" />
                <h2 className="font-serif text-xl text-brand-charcoal">Key Features</h2>
              </div>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-charcoal/8 flex items-center justify-center mt-0.5">
                      <Check size={10} className="text-brand-charcoal" />
                    </span>
                    <span className="text-sm font-sans text-brand-muted leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-black/5">
                <Link
                  to={`/products/${seriesPageSlug[series.id] ?? series.id}`}
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] font-bold text-brand-charcoal hover:gap-3 transition-all"
                >
                  View Full Series Page <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          {/* ── You May Also Like ── */}
          <section className="mt-16">
            <h2 className="font-serif text-2xl text-brand-charcoal mb-6">You May Also Like</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {relatedSeries.map((s) => {
                const previewColor = s.colors[0];
                const previewSwatch = COLOR_SWATCHES[previewColor] ?? '#ccc';
                const previewSku = colorToSku(s.id, previewColor);
                const minPrice = Math.min(...(Object.values(s.prices).filter(Boolean) as number[]));
                return (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <Link
                      to={`/shop/product/${previewSku}`}
                      className="group block bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-black/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300"
                    >
                      <div
                        className="h-32 w-full transition-transform duration-500 group-hover:scale-[1.03] origin-bottom"
                        style={{ backgroundColor: previewSwatch }}
                      />
                      <div className="p-4">
                        <p className="text-[9px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-0.5">{s.warranty}</p>
                        <p className="font-serif text-base text-brand-charcoal mb-1">{s.name}</p>
                        <p className="text-[10px] text-brand-muted font-sans">{s.subtitle}</p>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-xs font-bold text-brand-charcoal">From {formatPrice(minPrice)}</span>
                          <ArrowRight size={12} className="text-brand-muted group-hover:text-brand-charcoal transition-colors" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
}

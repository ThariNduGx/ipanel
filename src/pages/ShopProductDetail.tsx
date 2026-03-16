import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ShoppingBag, Shield, Droplets, Sun, Plus, Minus, Check } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CartSidebar } from '../components/CartSidebar';
import { useCart } from '../context/CartContext';
import { SERIES, COLOR_SWATCHES, LengthOption, ProfileOption, formatPrice, SeriesSpec } from '../data/shopProducts';

/** Convert SKU format to series + colour:
 *  arch-flat-matt-white  → i-series + Matt White
 *  designer-heavy-teak   → heavy-b + Teak
 *  project-lite-kithul   → lite + Kithul
 *  finishing-a           → finishing + Profile A
 */
function parseSku(sku: string): { series: SeriesSpec | undefined; colorName: string; profileId?: ProfileOption } {
  const prefixMap: Record<string, string> = {
    'arch-flat':     'i-series',
    'designer-heavy':'heavy-b',
    'project-lite':  'lite',
    'finishing':     'finishing',
  };

  let seriesId: string | undefined;
  let remainder = sku;

  for (const [prefix, sid] of Object.entries(prefixMap)) {
    if (sku.startsWith(prefix + '-') || sku === prefix) {
      seriesId = sid;
      remainder = sku.slice(prefix.length + 1);
      break;
    }
  }

  const series = SERIES.find((s) => s.id === seriesId);

  // Finishing series: sku like "finishing-a" → Profile A
  if (seriesId === 'finishing') {
    const profileId = remainder.toUpperCase() as ProfileOption;
    return { series, colorName: '', profileId };
  }

  // Other series: convert kebab-case back to Title Case colour name
  const colorName = remainder.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return { series, colorName };
}

export function ShopProductDetail() {
  const { sku } = useParams<{ sku: string }>();
  const { series, colorName, profileId } = parseSku(sku ?? '');

  const [quantity, setQuantity] = useState(1);
  const [selectedLength, setSelectedLength] = useState<LengthOption>(
    series?.lengths[0]?.cm ?? '305'
  );
  const [selectedProfile, setSelectedProfile] = useState<ProfileOption | undefined>(
    series?.profiles?.[0]?.id
  );
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!series) return <Navigate to="/shop" replace />;

  const swatchHex = colorName ? (COLOR_SWATCHES[colorName] ?? '#C8C8C8') : '#C8C8C8';
  const price = series.prices[selectedLength] ?? 0;
  const displayName = colorName || `Profile ${selectedProfile ?? profileId}`;

  function handleAddToCart() {
    const cartKey = `${series!.id}-${colorName || selectedProfile}-${selectedLength}`;
    addItem({
      cartKey,
      seriesId: series!.id,
      seriesName: series!.name,
      colorName: displayName,
      colorSwatch: swatchHex,
      selectedLength,
      lengthLabel: series!.lengths.find((l) => l.cm === selectedLength)?.label ?? `${selectedLength}cm`,
      selectedProfile: selectedProfile || profileId,
      quantity,
      pricePerPiece: price,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  const badges = [
    { icon: Shield, label: series.warranty },
    { icon: Droplets, label: '100% Waterproof' },
    { icon: Sun, label: 'UV-Stabilised' },
  ];

  return (
    <>
      <Navbar />
      <CartSidebar />
      <div className="min-h-screen bg-brand-surface pt-20 pb-24">
        <div className="max-w-5xl mx-auto px-6 pt-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted mb-8">
            <Link to="/" className="hover:text-brand-charcoal">Home</Link>
            <ChevronRight size={10} />
            <Link to="/shop" className="hover:text-brand-charcoal">Shop</Link>
            <ChevronRight size={10} />
            <span className="text-brand-charcoal">{series.name}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Visual */}
            <div className="space-y-4">
              <motion.div
                key={swatchHex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="aspect-square rounded-3xl overflow-hidden border border-black/5"
                style={{ backgroundColor: swatchHex }}
              >
                <div className="w-full h-full flex items-end p-8">
                  <div className="bg-black/20 backdrop-blur-sm rounded-2xl px-4 py-2">
                    <p className="text-white text-xs font-sans">{series.name}</p>
                    <p className="text-white font-serif text-lg">{displayName}</p>
                  </div>
                </div>
              </motion.div>

              {/* Colour swatches for this series */}
              {colorName && (
                <div className="flex flex-wrap gap-2">
                  {series.colors.map((c) => (
                    <Link
                      key={c}
                      to={`/shop/product/${sku?.split('-').slice(0, -colorName.split(' ').length).join('-')}-${c.toLowerCase().replace(/\s+/g, '-')}`}
                      title={c}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${c === colorName ? 'border-brand-charcoal scale-110' : 'border-transparent hover:border-brand-charcoal/30'}`}
                      style={{ backgroundColor: COLOR_SWATCHES[c] ?? '#ccc' }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-muted mb-2">{series.name}</p>
              <h1 className="font-serif text-3xl text-brand-charcoal mb-1">{displayName}</h1>
              <p className="text-brand-muted text-sm font-sans mb-6">{series.subtitle}</p>

              {/* Price */}
              <div className="bg-white rounded-2xl p-5 border border-black/5 mb-6">
                <p className="font-serif text-3xl text-brand-charcoal">{formatPrice(price)}</p>
                <p className="text-[10px] uppercase tracking-[0.12em] font-bold text-brand-muted mt-1">Per panel · {selectedLength === '305' ? '10 ft' : '12 ft'}</p>
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
                          selectedLength === l.cm ? 'bg-brand-charcoal text-white border-brand-charcoal' : 'border-black/10 text-brand-muted hover:border-brand-charcoal/30'
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Profile selector */}
              {series.profiles && (
                <div className="mb-5">
                  <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-2">Profile</p>
                  <div className="flex gap-2">
                    {series.profiles.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedProfile(p.id)}
                        className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                          selectedProfile === p.id ? 'bg-brand-charcoal text-white border-brand-charcoal' : 'border-black/10 text-brand-muted hover:border-brand-charcoal/30'
                        }`}
                      >
                        {p.name}
                        <span className={`block text-[9px] font-normal mt-0.5 ${selectedProfile === p.id ? 'text-white/70' : 'text-brand-muted'}`}>{p.shape}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-2">Quantity</p>
                <div className="flex items-center gap-3">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-brand-muted hover:border-brand-charcoal hover:text-brand-charcoal transition-all">
                    <Minus size={13} />
                  </button>
                  <span className="w-10 text-center font-bold text-brand-charcoal text-lg">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-brand-muted hover:border-brand-charcoal hover:text-brand-charcoal transition-all">
                    <Plus size={13} />
                  </button>
                  <span className="text-brand-muted text-xs font-sans ml-2">= {formatPrice(price * quantity)}</span>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-full text-[11px] uppercase tracking-[0.15em] font-bold transition-all mb-3 ${
                  added
                    ? 'bg-green-600 text-white'
                    : 'bg-brand-charcoal text-white hover:bg-brand-charcoal/90'
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

              {/* Badges */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {badges.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.label} className="bg-white rounded-xl p-3 border border-black/5 text-center">
                      <Icon size={14} className="mx-auto mb-1 text-brand-charcoal" />
                      <p className="text-[9px] uppercase tracking-[0.1em] font-bold text-brand-muted">{b.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Specs */}
              <div className="mt-6 bg-white rounded-2xl p-5 border border-black/5 space-y-2.5">
                {[
                  { label: 'Width', value: series.width },
                  { label: 'Thickness', value: series.thickness },
                  { label: 'Weight', value: series.weight },
                  { label: 'Warranty', value: series.warranty },
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between text-[12px]">
                    <span className="font-bold text-brand-muted uppercase tracking-[0.1em] text-[10px]">{spec.label}</span>
                    <span className="text-brand-charcoal font-sans">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

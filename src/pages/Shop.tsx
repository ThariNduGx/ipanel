import { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CartSidebar } from '../components/CartSidebar';
import { useCart } from '../context/CartContext';
import {
  SERIES,
  COLOR_SWATCHES,
  COLOR_CATEGORIES,
  SeriesSpec,
  LengthOption,
  ProfileOption,
  formatPrice,
} from '../data/shopProducts';

type FilterSeries = 'all' | string;
type FilterCategory = 'All' | 'Solids' | 'Metallics' | 'Woods';

interface ConfigState {
  series: SeriesSpec;
  colorName: string;
  selectedLength: LengthOption;
  selectedProfile?: ProfileOption;
  quantity: number;
}

function ProductConfigModal({
  config,
  onClose,
}: {
  config: ConfigState;
  onClose: () => void;
}) {
  const { addItem } = useCart();
  const [length, setLength] = useState<LengthOption>(config.selectedLength);
  const [profile, setProfile] = useState<ProfileOption | undefined>(
    config.series.profiles ? config.series.profiles[0].id : undefined
  );
  const [qty, setQty] = useState(config.quantity);
  const [added, setAdded] = useState(false);

  const pricePerPiece = config.series.prices[length] ?? 0;
  const totalPrice = pricePerPiece * qty;
  const swatch = COLOR_SWATCHES[config.colorName] ?? '#ccc';

  function handleAdd() {
    const cartKey = `${config.series.id}-${config.colorName}-${length}${profile ? `-${profile}` : ''}`;
    const lengthSpec = config.series.lengths.find((l) => l.cm === length);
    addItem({
      cartKey,
      seriesId: config.series.id,
      seriesName: config.series.name,
      colorName: config.colorName,
      colorSwatch: swatch,
      selectedLength: length,
      lengthLabel: lengthSpec?.label ?? `${length} cm`,
      selectedProfile: profile,
      quantity: qty,
      pricePerPiece,
    });
    setAdded(true);
    setTimeout(onClose, 800);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-md bg-white rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.2)] overflow-hidden"
      >
        {/* Color hero */}
        <div className="h-32 w-full relative" style={{ backgroundColor: swatch }}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-charcoal hover:bg-white transition-colors"
          >
            <X size={14} />
          </button>
          <div className="absolute bottom-4 left-5">
            <p className="text-white/80 text-[10px] uppercase tracking-[0.15em] font-bold font-sans">
              {config.series.name}
            </p>
            <p className="text-white font-serif text-xl font-medium leading-tight">
              {config.colorName}
            </p>
          </div>
        </div>

        {/* Config body */}
        <div className="p-5 space-y-5">
          {/* Length selector */}
          {config.series.lengths.length > 1 && (
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-2">
                Length
              </p>
              <div className="flex gap-2">
                {config.series.lengths.map((l) => (
                  <button
                    key={l.cm}
                    onClick={() => setLength(l.cm)}
                    className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold font-sans transition-all ${
                      length === l.cm
                        ? 'bg-brand-charcoal text-white border-brand-charcoal'
                        : 'border-black/10 text-brand-muted hover:border-black/20 hover:text-brand-charcoal'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Profile selector (Finishing Series) */}
          {config.series.profiles && (
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-2">
                Profile
              </p>
              <div className="flex gap-2">
                {config.series.profiles.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setProfile(p.id)}
                    className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold font-sans transition-all ${
                      profile === p.id
                        ? 'bg-brand-charcoal text-white border-brand-charcoal'
                        : 'border-black/10 text-brand-muted hover:border-black/20 hover:text-brand-charcoal'
                    }`}
                  >
                    <span>{p.name}</span>
                    <span className={`block text-[9px] font-normal mt-0.5 ${profile === p.id ? 'text-white/70' : 'text-brand-muted'}`}>
                      {p.shape}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-0.5">
                Quantity (pieces)
              </p>
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-brand-charcoal hover:text-white hover:border-brand-charcoal transition-all text-brand-charcoal"
                >
                  <Minus size={12} />
                </button>
                <span className="text-lg font-bold text-brand-charcoal w-8 text-center">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-brand-charcoal hover:text-white hover:border-brand-charcoal transition-all text-brand-charcoal"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-0.5">
                Total
              </p>
              <p className="font-serif text-2xl font-medium text-brand-charcoal">
                {formatPrice(totalPrice)}
              </p>
              <p className="text-[10px] text-brand-muted">
                {formatPrice(pricePerPiece)}/piece
              </p>
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-black/5">
            {[
              { label: 'Width', value: config.series.width },
              { label: 'Thickness', value: config.series.thickness },
              { label: 'Warranty', value: config.series.warranty },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-[9px] uppercase tracking-[0.12em] font-bold text-brand-muted">
                  {s.label}
                </p>
                <p className="text-[11px] font-bold text-brand-charcoal mt-0.5">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAdd}
            disabled={added}
            className={`w-full py-3.5 rounded-full text-[11px] uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 ${
              added
                ? 'bg-green-500 text-white'
                : 'bg-brand-charcoal text-white hover:bg-black shadow-[0_4px_20px_rgba(0,0,0,0.15)]'
            }`}
          >
            {added ? (
              <>
                <Check size={14} />
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag size={14} />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function ProductCard({
  series,
  colorName,
  onConfigure,
}: {
  series: SeriesSpec;
  colorName: string;
  onConfigure: () => void;
}) {
  const swatch = COLOR_SWATCHES[colorName] ?? '#ccc';
  const minPrice = Math.min(...Object.values(series.prices).filter(Boolean) as number[]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-black/10 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
      onClick={onConfigure}
    >
      {/* Swatch */}
      <div
        className="h-40 w-full transition-transform duration-500 group-hover:scale-[1.02] origin-bottom"
        style={{ backgroundColor: swatch }}
      />

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <p className="text-[9px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-0.5">
              {series.name}
            </p>
            <p className="font-serif text-sm font-medium text-brand-charcoal leading-tight">
              {colorName}
            </p>
          </div>
          <span className="text-[9px] bg-brand-surface px-2 py-0.5 rounded-full font-bold text-brand-muted whitespace-nowrap flex-shrink-0">
            {series.warranty}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] text-brand-muted">From</p>
            <p className="text-xs font-bold text-brand-charcoal">{formatPrice(minPrice)}</p>
          </div>
          <button
            className="px-3 py-1.5 rounded-full bg-brand-charcoal text-white text-[9px] uppercase tracking-wider font-bold hover:bg-black transition-colors opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200"
            onClick={(e) => { e.stopPropagation(); onConfigure(); }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function Shop() {
  const { openCart, itemCount } = useCart();
  const [activeSeries, setActiveSeries] = useState<FilterSeries>('all');
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [configTarget, setConfigTarget] = useState<ConfigState | null>(null);

  const categories: FilterCategory[] = ['All', 'Solids', 'Metallics', 'Woods'];

  const filteredProducts = SERIES.flatMap((series) => {
    if (activeSeries !== 'all' && series.id !== activeSeries) return [];
    return series.colors
      .filter((color) => {
        if (activeCategory === 'All') return true;
        return COLOR_CATEGORIES[color] === activeCategory;
      })
      .map((color) => ({ series, color }));
  });

  function openConfig(series: SeriesSpec, colorName: string) {
    setConfigTarget({
      series,
      colorName,
      selectedLength: series.lengths[0].cm,
      selectedProfile: series.profiles?.[0].id,
      quantity: 1,
    });
  }

  return (
    <div className="bg-brand-surface min-h-screen">
      <Navbar />
      <CartSidebar />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-gold mb-3">
            i-Panel Collections
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-brand-charcoal mb-4 leading-tight">
            Shop All Products
          </h1>
          <p className="text-brand-muted text-sm max-w-md mx-auto leading-relaxed">
            Premium UPVC ceiling &amp; wall panels. Order directly and we'll arrange delivery island-wide.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <div className="sticky top-16 md:top-20 z-30 bg-brand-surface/90 backdrop-blur-xl border-b border-black/5 px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          {/* Series tabs */}
          <div className="flex gap-1.5 flex-wrap">
            {[{ id: 'all', name: 'All Series' }, ...SERIES.map((s) => ({ id: s.id, name: s.name }))].map(
              (s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSeries(s.id)}
                  className={`px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.12em] font-bold transition-all ${
                    activeSeries === s.id
                      ? 'bg-brand-charcoal text-white'
                      : 'bg-white text-brand-muted hover:text-brand-charcoal border border-black/8 hover:border-black/15'
                  }`}
                >
                  {s.name}
                </button>
              )
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Category filter */}
            <div className="flex gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-brand-gold text-white'
                      : 'text-brand-muted hover:text-brand-charcoal'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Cart button */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/8 hover:border-black/15 transition-all text-brand-charcoal"
            >
              <ShoppingBag size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-charcoal text-white text-[9px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center min-w-[18px] min-h-[18px]">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-brand-muted font-sans">No products match your filter.</p>
          </div>
        ) : (
          <>
            <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-6">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredProducts.map(({ series, color }) => (
                <ProductCard
                  key={`${series.id}-${color}`}
                  series={series}
                  colorName={color}
                  onConfigure={() => openConfig(series, color)}
                />
              ))}
            </div>
          </>
        )}
      </main>

      {/* Config Modal */}
      <AnimatePresence>
        {configTarget && (
          <ProductConfigModal
            config={configTarget}
            onClose={() => setConfigTarget(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

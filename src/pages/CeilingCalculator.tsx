import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calculator, ShoppingBag, ArrowRight } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { SERIES } from '../data/shopProducts';

const WASTAGE = 0.10; // 10% wastage factor

interface Room {
  id: number;
  length: string;
  width: string;
  label: string;
}

function calcPanels(areaSqFt: number, seriesId: string, lengthCm: '305' | '366') {
  const series = SERIES.find((s) => s.id === seriesId);
  if (!series) return 0;
  // panel width in feet
  const widthFt = series.id === 'finishing' ? (10 / 30.48) : (20 / 30.48);
  const panelLengthFt = lengthCm === '305' ? 10 : 12;
  const panelAreaSqFt = widthFt * panelLengthFt;
  return Math.ceil((areaSqFt * (1 + WASTAGE)) / panelAreaSqFt);
}

let nextId = 1;

export function CeilingCalculator() {
  const [rooms, setRooms] = useState<Room[]>([{ id: nextId++, length: '', width: '', label: 'Main Room' }]);
  const [seriesId, setSeriesId] = useState('i-series');
  const [lengthCm, setLengthCm] = useState<'305' | '366'>('305');
  const [showResult, setShowResult] = useState(false);

  const totalSqFt = rooms.reduce((acc, r) => {
    const l = parseFloat(r.length) || 0;
    const w = parseFloat(r.width) || 0;
    return acc + l * w;
  }, 0);

  const panelsNeeded = calcPanels(totalSqFt, seriesId, lengthCm);
  const series = SERIES.find((s) => s.id === seriesId);
  const price = series?.prices[lengthCm];
  const totalCost = price ? panelsNeeded * price : 0;

  const addRoom = () => setRooms([...rooms, { id: nextId++, length: '', width: '', label: `Room ${rooms.length + 1}` }]);
  const removeRoom = (id: number) => setRooms(rooms.filter((r) => r.id !== id));
  const updateRoom = (id: number, field: 'length' | 'width' | 'label', value: string) =>
    setRooms(rooms.map((r) => r.id === id ? { ...r, [field]: value } : r));

  const eligibleSeries = SERIES.filter((s) => s.id !== 'finishing');

  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        {/* Hero */}
        <section className="bg-brand-charcoal py-28 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #C5A059, transparent 70%)' }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10"
          >
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
              <Calculator size={22} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-white mb-3 tracking-tight">
              Ceiling Panel Calculator
            </h1>
            <p className="text-white/50 text-sm font-sans max-w-md mx-auto">
              Enter your room dimensions to get an instant panel count and cost estimate.
            </p>
          </motion.div>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-16">
          {/* Series & Length */}
          <div className="bg-white rounded-3xl p-8 border border-black/5 mb-6">
            <h2 className="font-serif text-xl text-brand-charcoal mb-6">1. Choose Series &amp; Length</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-2">Panel Series</label>
                <select
                  value={seriesId}
                  onChange={(e) => setSeriesId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-brand-charcoal bg-brand-surface focus:outline-none focus:border-brand-charcoal/30"
                >
                  {eligibleSeries.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-2">Panel Length</label>
                <div className="flex gap-2">
                  {(['305', '366'] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLengthCm(l)}
                      className={`flex-1 py-3 rounded-xl border text-sm font-bold transition-all ${
                        lengthCm === l ? 'bg-brand-charcoal text-white border-brand-charcoal' : 'border-black/10 text-brand-muted hover:border-black/20'
                      }`}
                    >
                      {l === '305' ? '10 ft' : '12 ft'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Room Dimensions */}
          <div className="bg-white rounded-3xl p-8 border border-black/5 mb-6">
            <h2 className="font-serif text-xl text-brand-charcoal mb-6">2. Enter Room Dimensions (in feet)</h2>
            <div className="space-y-4">
              {rooms.map((room) => (
                <div key={room.id} className="flex items-center gap-3">
                  <input
                    value={room.label}
                    onChange={(e) => updateRoom(room.id, 'label', e.target.value)}
                    className="w-28 px-3 py-2.5 rounded-xl border border-black/10 text-xs text-brand-charcoal bg-brand-surface focus:outline-none focus:border-brand-charcoal/30"
                  />
                  <input
                    type="number"
                    min="0"
                    placeholder="Length"
                    value={room.length}
                    onChange={(e) => updateRoom(room.id, 'length', e.target.value)}
                    className="flex-1 px-3 py-2.5 rounded-xl border border-black/10 text-sm text-brand-charcoal bg-brand-surface focus:outline-none focus:border-brand-charcoal/30"
                  />
                  <span className="text-brand-muted font-bold">×</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="Width"
                    value={room.width}
                    onChange={(e) => updateRoom(room.id, 'width', e.target.value)}
                    className="flex-1 px-3 py-2.5 rounded-xl border border-black/10 text-sm text-brand-charcoal bg-brand-surface focus:outline-none focus:border-brand-charcoal/30"
                  />
                  <span className="text-brand-muted text-xs">ft²</span>
                  {rooms.length > 1 && (
                    <button onClick={() => removeRoom(room.id)} className="text-brand-muted hover:text-red-400 transition-colors text-lg leading-none">×</button>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={addRoom}
              className="mt-4 text-[11px] uppercase tracking-[0.15em] font-bold text-brand-muted hover:text-brand-charcoal transition-colors flex items-center gap-1.5"
            >
              + Add Another Room
            </button>
          </div>

          {/* Calculate */}
          <button
            onClick={() => setShowResult(true)}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-brand-charcoal/90 transition-all mb-6"
          >
            <Calculator size={15} />
            Calculate
          </button>

          {/* Result */}
          {showResult && totalSqFt > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-brand-charcoal rounded-3xl p-8 text-white"
            >
              <h2 className="font-serif text-2xl mb-6 text-center">Your Estimate</h2>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <p className="font-serif text-3xl">{totalSqFt.toFixed(0)}</p>
                  <p className="text-[9px] uppercase tracking-[0.15em] font-bold text-white/50 mt-1">Total sq ft</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl">{panelsNeeded}</p>
                  <p className="text-[9px] uppercase tracking-[0.15em] font-bold text-white/50 mt-1">Panels (incl. 10% wastage)</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl">LKR {totalCost.toLocaleString('en-LK')}</p>
                  <p className="text-[9px] uppercase tracking-[0.15em] font-bold text-white/50 mt-1">Indicative cost</p>
                </div>
              </div>
              <p className="text-white/40 text-[11px] text-center font-sans mb-6">
                Prices are indicative. Contact us for exact pricing and installation quotes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/products"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-white text-brand-charcoal text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-white/90 transition-all"
                >
                  <ShoppingBag size={14} />
                  Shop Now
                </Link>
                <Link
                  to="/get-a-quote"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full border border-white/20 text-white text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-white/10 transition-all"
                >
                  Get a Quote <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          )}
        </section>
      </div>
    </PageShell>
  );
}

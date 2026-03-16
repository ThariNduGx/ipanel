import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { SERIES, COLOR_SWATCHES, COLOR_CATEGORIES } from '../data/shopProducts';

type FilterSeries = 'all' | string;
type FilterCategory = 'All' | 'Solids' | 'Metallics' | 'Woods';

export function ColoursGallery() {
  const [filterSeries, setFilterSeries] = useState<FilterSeries>('all');
  const [filterCategory, setFilterCategory] = useState<FilterCategory>('All');
  const [search, setSearch] = useState('');

  // Build unique colours across all series
  const allEntries: { color: string; seriesIds: string[] }[] = [];
  const colorSeriesMap: Record<string, string[]> = {};

  SERIES.forEach((s) => {
    s.colors.forEach((c) => {
      if (!colorSeriesMap[c]) colorSeriesMap[c] = [];
      colorSeriesMap[c].push(s.id);
    });
  });

  Object.entries(colorSeriesMap).forEach(([color, seriesIds]) => {
    allEntries.push({ color, seriesIds });
  });

  const filtered = allEntries.filter(({ color, seriesIds }) => {
    if (filterSeries !== 'all' && !seriesIds.includes(filterSeries)) return false;
    if (filterCategory !== 'All' && COLOR_CATEGORIES[color] !== filterCategory) return false;
    if (search && !color.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        {/* Hero */}
        <section className="bg-brand-charcoal py-24 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-serif font-medium text-white tracking-tight"
          >
            Colour Swatch Gallery
          </motion.h1>
          <p className="text-white/50 text-sm mt-3">All {Object.keys(colorSeriesMap).length} i-Panel colours across all series.</p>
        </section>

        {/* Filters */}
        <section className="max-w-6xl mx-auto px-6 py-8">
          <div className="bg-white rounded-2xl p-4 border border-black/5 flex flex-wrap gap-3 items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-[180px]">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search colours…"
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-black/10 text-sm text-brand-charcoal bg-brand-surface focus:outline-none focus:border-brand-charcoal/30"
              />
            </div>

            {/* Series filter */}
            <div className="flex gap-1.5 flex-wrap">
              {[{ id: 'all', name: 'All Series' }, ...SERIES].map((s) => (
                <button
                  key={'id' in s ? s.id : s}
                  onClick={() => setFilterSeries('id' in s ? s.id : 'all')}
                  className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.12em] font-bold transition-all ${
                    filterSeries === ('id' in s ? s.id : 'all')
                      ? 'bg-brand-charcoal text-white'
                      : 'bg-brand-surface text-brand-muted hover:text-brand-charcoal'
                  }`}
                >
                  {'name' in s ? s.name : 'All Series'}
                </button>
              ))}
            </div>

            {/* Category filter */}
            <div className="flex gap-1.5">
              {(['All', 'Solids', 'Metallics', 'Woods'] as FilterCategory[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setFilterCategory(c)}
                  className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.12em] font-bold transition-all ${
                    filterCategory === c
                      ? 'bg-brand-charcoal text-white'
                      : 'bg-brand-surface text-brand-muted hover:text-brand-charcoal'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <p className="text-[11px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-6">{filtered.length} colours</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map(({ color, seriesIds }, i) => (
              <motion.div
                key={color}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (i % 10) * 0.03 }}
              >
                <div className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-brand-gold-dark/30 transition-all duration-300 hover:-translate-y-1">
                  <div
                    className="h-24 w-full transition-all duration-300 group-hover:h-28"
                    style={{ backgroundColor: COLOR_SWATCHES[color] ?? '#ccc' }}
                  />
                  <div className="p-3">
                    <p className="font-sans text-xs font-bold text-brand-charcoal truncate">{color}</p>
                    <p className="text-[9px] uppercase tracking-[0.1em] font-bold text-brand-muted mt-0.5">{COLOR_CATEGORIES[color]}</p>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {seriesIds.map((sid) => {
                        const s = SERIES.find((sr) => sr.id === sid);
                        return (
                          <span key={sid} className="text-[8px] bg-brand-surface px-2 py-0.5 rounded-full text-brand-muted">
                            {s?.name.split(' ')[0]}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}

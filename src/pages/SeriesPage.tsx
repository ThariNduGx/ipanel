import { Link, useParams, Navigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, ChevronRight, Shield, Droplets, Sun, Award } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { seriesData, getColoursBySeriesSlug, URL_SLUG_TO_DATA_KEY, DATA_KEY_TO_URL_SLUG, type ColourSpec } from '../data/colours';

function BentoColourCard({ colour, index }: { colour: ColourSpec; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/products/${DATA_KEY_TO_URL_SLUG[colour.series] ?? colour.series}/${colour.slug}`}
        className="group block relative overflow-hidden rounded-2xl aspect-[3/4] bg-brand-surface border border-black/5 hover:border-brand-gold-dark/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-1"
      >
        {/* Colour Preview */}
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundColor: colour.thumbnailBg }}
        />

        {/* Image Overlay */}
        <img
          src={colour.image}
          alt={`i-Panel ${colour.seriesLabel} ${colour.name} finish installed in luxury interior`}
          className="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:opacity-80 group-hover:scale-105"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-white/60 text-[9px] uppercase tracking-[0.2em] font-bold font-sans mb-1">
            {colour.seriesLabel}
          </p>
          <h3 className="text-white font-serif text-lg leading-tight mb-1">{colour.name}</h3>
          <p className="text-white/60 text-[10px] font-sans font-light">{colour.finish}</p>
        </div>

        {/* Arrow */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/20">
          <ArrowRight size={13} className="text-white" />
        </div>

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[8px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full">
            {colour.techSpecs.warranty}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function SeriesPage() {
  const { series } = useParams<{ series: string }>();
  // Map new sitemap URL slug to internal data key (fall back to slug itself for old URLs)
  const dataKey = (series ? (URL_SLUG_TO_DATA_KEY[series] ?? series) : series) as keyof typeof seriesData;
  const data = seriesData[dataKey];
  const colours = getColoursBySeriesSlug(dataKey as ColourSpec['series']);

  useEffect(() => { window.scrollTo(0, 0); }, [series]);

  if (!data) return <Navigate to="/products" replace />;

  const performanceTable = [
    { spec: 'Panel Thickness', value: data.thickness, note: 'Engineered for rigidity and acoustic mass' },
    { spec: 'Profile Width', value: data.width, note: 'Optimised for installation efficiency' },
    { spec: 'Standard Lengths', value: dataKey === 'heavy-f' ? '3000mm / 4000mm / 6000mm' : '3000mm / 4000mm', note: 'Cut-to-length available' },
    { spec: 'Colour Range', value: `${data.colours} Finishes`, note: 'UV-stabilised, no fading in 12 years' },
    { spec: 'Warranty', value: data.warranty, note: 'Manufacturer backed, transferable' },
    { spec: 'Fire Rating', value: 'Class B Fire Retardant', note: 'ASTM E84 compliant' },
    { spec: 'Moisture Resistance', value: '100% Waterproof', note: 'Zero water absorption' },
    { spec: 'Substrate', value: 'Virgin UPVC', note: 'No recycled content in structural layer' },
  ];

  return (
    <div className="min-h-screen bg-brand-surface">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={data.coverImage}
          alt={`${data.label} ceiling panels installed in a luxury architectural interior`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="noise-overlay" />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5"
          >
            <nav className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">
              <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
              <ChevronRight size={10} />
              <Link to="/products" className="hover:text-white/80 transition-colors">Collections</Link>
              <ChevronRight size={10} />
              <span className="text-white/80">{data.label}</span>
            </nav>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white/50 text-[10px] uppercase tracking-[0.3em] font-bold font-sans mb-4"
          >
            Series Collection
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-serif font-medium mb-6 leading-[1.08] tracking-tight"
          >
            {data.label}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/70 text-lg md:text-xl font-light font-sans mb-3 italic font-serif"
          >
            {data.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white/60 text-base font-light font-sans max-w-2xl mx-auto leading-relaxed"
          >
            {data.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex items-center justify-center gap-4 flex-wrap"
          >
            <a
              href="#colours"
              className="px-7 py-3.5 rounded-full bg-white text-brand-charcoal text-[11px] uppercase tracking-wider font-bold hover:bg-brand-gold-dark hover:text-white transition-all duration-300"
            >
              Explore {data.colours} Colours
            </a>
            <Link
              to="/get-a-quote"
              className="px-7 py-3.5 rounded-full border border-white/30 text-white text-[11px] uppercase tracking-wider font-bold hover:bg-white/10 transition-all duration-300"
            >
              Request Samples
            </Link>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="absolute bottom-0 inset-x-0 bg-black/50 backdrop-blur-xl border-t border-white/10"
        >
          <div className="container mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/10">
            {[
              { icon: Shield, label: 'Warranty', value: data.warranty },
              { icon: Droplets, label: 'Moisture Resistance', value: '100% Waterproof' },
              { icon: Sun, label: 'UV Protection', value: 'Index 12 Rated' },
              { icon: Award, label: 'Colour Range', value: `${data.colours} Finishes` },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 pl-6 first:pl-0">
                <Icon size={18} className="text-brand-gold-light flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-white/50 text-[9px] uppercase tracking-widest font-bold font-sans">{label}</p>
                  <p className="text-white text-sm font-serif font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Colour Bento Grid */}
      <section id="colours" className="py-28 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-dark font-sans mb-4">
              Colour Collection
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-charcoal mb-6">
              {data.colours} Distinctive Finishes
            </h2>
            <p className="text-brand-muted text-base font-light max-w-xl mx-auto leading-relaxed">
              Every finish in the {data.label} collection is UV-stabilised and manufactured to a photographic accuracy standard that preserves its visual integrity for the full warranty period.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {colours.map((colour, i) => (
              <BentoColourCard key={colour.slug} colour={colour} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Performance Matrix */}
      <section className="py-24 px-6 bg-brand-charcoal text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-light font-sans mb-4">
              Technical Specification
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">
              Performance Matrix
            </h2>
            <p className="text-white/50 text-base font-light max-w-xl mx-auto leading-relaxed">
              Engineering data for architects, quantity surveyors, and specification writers.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left px-7 py-4 text-[10px] uppercase tracking-widest font-bold text-brand-gold-light">
                    Specification
                  </th>
                  <th className="text-left px-7 py-4 text-[10px] uppercase tracking-widest font-bold text-brand-gold-light">
                    Value
                  </th>
                  <th className="text-left px-7 py-4 text-[10px] uppercase tracking-widest font-bold text-brand-gold-light hidden md:table-cell">
                    Engineering Note
                  </th>
                </tr>
              </thead>
              <tbody>
                {performanceTable.map((row, i) => (
                  <tr
                    key={row.spec}
                    className={`border-b border-white/5 transition-colors hover:bg-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                  >
                    <td className="px-7 py-4 text-[11px] uppercase tracking-wider font-bold font-sans text-white/60">
                      {row.spec}
                    </td>
                    <td className="px-7 py-4 text-white font-serif text-base">{row.value}</td>
                    <td className="px-7 py-4 text-white/40 text-sm font-light hidden md:table-cell">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Series CTA */}
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-dark font-sans mb-6">
            Specify with Confidence
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-charcoal mb-6 leading-tight">
            Ready to specify {data.label} for your project?
          </h2>
          <p className="text-brand-muted text-base font-light max-w-xl mx-auto leading-relaxed mb-12">
            Our technical team provides complimentary specification support, sample delivery, and quantity surveying assistance for qualifying projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-wider font-bold hover:bg-brand-gold-dark transition-all duration-300"
            >
              Request a Technical Quote <ArrowRight size={15} />
            </Link>
            <Link
              to="/find-a-dealer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-brand-charcoal/20 text-brand-charcoal text-[11px] uppercase tracking-wider font-bold hover:border-brand-gold-dark hover:text-brand-gold-dark transition-all duration-300"
            >
              Find an Authorised Dealer
            </Link>
          </div>

          {/* Cross-series Navigation */}
          <div className="mt-20 pt-16 border-t border-black/5">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted font-sans mb-8">
              Explore Other Series
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(seriesData)
                .filter(([key]) => key !== dataKey)
                .map(([key, s]) => (
                  <Link
                    key={key}
                    to={`/products/${DATA_KEY_TO_URL_SLUG[key] ?? key}`}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 text-[11px] uppercase tracking-wider font-bold font-sans text-brand-muted hover:border-brand-charcoal hover:text-brand-charcoal transition-all duration-200"
                  >
                    {s.label} <ArrowRight size={12} />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

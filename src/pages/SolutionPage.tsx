import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, CheckCircle } from 'lucide-react';
import { PageShell } from '../components/PageShell';

interface SolutionData {
  title: string;
  subtitle: string;
  hero: string;
  intro: string;
  useCases: string[];
  recommendedSeries: { name: string; to: string; reason: string }[];
  faqs: { q: string; a: string }[];
}

const solutions: Record<string, SolutionData> = {
  residential: {
    title: 'Residential',
    subtitle: 'Premium ceilings for homes that express character.',
    hero: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1600&q=80',
    intro: 'i-Panel transforms living rooms, bedrooms, and kitchens with warm wood-grain and crisp white finishes that install in hours — not days. Zero moisture absorption makes i-Panel the only ceiling material that performs as well in Sri Lanka\'s humid coastal homes as it does in cool hill-country residences.',
    useCases: ['Living & dining rooms', 'Master bedrooms', 'Children\'s rooms', 'Kitchens & utility areas', 'Home offices', 'Outdoor-adjacent verandahs'],
    recommendedSeries: [
      { name: 'i Series', to: '/products/architectural-flat', reason: 'Premium flat finish for modern living rooms' },
      { name: 'HEAVY B Series', to: '/products/ipanel-heavy-b', reason: 'Elegant coffered effect for master bedrooms' },
      { name: 'LITE Series', to: '/products/ipanel-lite', reason: 'Cost-effective coverage for large floor plans' },
    ],
    faqs: [
      { q: 'Can i-Panel be installed in bathrooms?', a: 'Yes. i-Panel\'s zero-water-absorption UPVC core makes it ideal for bathrooms, wet rooms, and kitchens.' },
      { q: 'How long does residential installation take?', a: 'A typical 15×15 ft ceiling takes one installer 3–4 hours. No drying time, no mess.' },
    ],
  },
  commercial: {
    title: 'Commercial',
    subtitle: 'Specification-grade ceilings for offices, retail, and hospitality.',
    hero: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80',
    intro: 'Commercial projects demand materials that perform under heavy HVAC loads, resist moisture from air conditioning systems, and meet fire safety codes. i-Panel\'s Class B fire rating, ASTM E84 compliance, and dimensional stability under tropical temperature swings make it the specification choice of interior designers, M&E consultants, and project architects.',
    useCases: ['Corporate offices', 'Co-working spaces', 'Retail showrooms', 'Shopping malls', 'Bank branches', 'Lobbies & reception areas'],
    recommendedSeries: [
      { name: 'HEAVY B Series', to: '/products/ipanel-heavy-b', reason: 'Architectural shadow lines for corporate reception areas' },
      { name: 'i Series', to: '/products/architectural-flat', reason: 'Clean flat planes for modern office environments' },
      { name: 'Finishing Series', to: '/products/finishing-series', reason: 'Perimeter trim for seamless edge treatment' },
    ],
    faqs: [
      { q: 'Does i-Panel meet fire safety codes for commercial buildings?', a: 'Yes. All i-Panel series carry Class B fire retardant ratings per ASTM E84.' },
      { q: 'Can panels be installed around HVAC grilles?', a: 'Yes. Panels can be field-cut to accommodate duct openings, light fixtures, and vents.' },
    ],
  },
  hospitality: {
    title: 'Hospitality',
    subtitle: 'Luxury ceilings for hotels, restaurants, and resorts.',
    hero: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    intro: 'Hospitality environments demand aesthetics that impress guests and durability that withstands high humidity, frequent cleaning, and the wear of continuous occupancy. i-Panel\'s UV-stabilised laminates remain colour-accurate for over a decade, and the click-lock profile allows damaged panels to be replaced individually without disrupting an entire ceiling.',
    useCases: ['Hotel lobbies', 'Guest rooms', 'Restaurants & bars', 'Resort communal areas', 'Spa & wellness facilities', 'Banquet halls'],
    recommendedSeries: [
      { name: 'HEAVY B Series', to: '/products/ipanel-heavy-b', reason: 'Warm teak finishes for restaurant interiors' },
      { name: 'i Series', to: '/products/architectural-flat', reason: 'Pure white Matt White for hotel room ceilings' },
      { name: 'Finishing Series', to: '/products/finishing-series', reason: 'Elegant cornice profiles for lobby perimeters' },
    ],
    faqs: [
      { q: 'How are i-Panel ceilings cleaned?', a: 'Wipe with a damp cloth. No special chemicals required. Impervious surface resists staining.' },
      { q: 'Can i-Panel withstand coastal salt air?', a: 'Yes. UPVC is resistant to salt corrosion, making i-Panel ideal for beachfront resorts.' },
    ],
  },
  healthcare: {
    title: 'Healthcare',
    subtitle: 'Hygienic, fire-compliant ceilings for clinical environments.',
    hero: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80',
    intro: 'Healthcare environments require ceiling materials that are hygienic, non-toxic, fire-compliant, and maintainable. i-Panel contains zero formaldehyde, is 100% waterproof (no mould growth), carries a Class B fire rating, and can be wiped down with hospital-grade disinfectants without surface degradation.',
    useCases: ['Hospital wards', 'Clinic waiting rooms', 'Dental & medical offices', 'Pharmacies', 'Diagnostic imaging rooms', 'Administrative offices'],
    recommendedSeries: [
      { name: 'i Series — Matt White', to: '/products/architectural-flat/matt-white', reason: 'Clinical white finish, zero formaldehyde' },
      { name: 'LITE Series', to: '/products/ipanel-lite', reason: 'Wide panels for large ward ceilings' },
    ],
    faqs: [
      { q: 'Is i-Panel safe for indoor air quality in clinical settings?', a: 'Yes. Zero formaldehyde content and no VOC off-gassing makes i-Panel suitable for ICUs and operating suites.' },
      { q: 'Can i-Panel panels be disinfected?', a: 'The UPVC surface is resistant to hospital-grade disinfectants including bleach-based and alcohol-based solutions.' },
    ],
  },
  'wet-areas': {
    title: 'Wet Areas',
    subtitle: 'Waterproof ceilings for bathrooms, kitchens, and pools.',
    hero: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80',
    intro: 'No ceiling material beats UPVC in wet environments. Where gypsum absorbs water, MDF swells, and timber warps, i-Panel maintains its geometry through daily steam cycles in bathrooms and pools. The impervious surface prevents mould growth at the substrate level — no black mould, no paint peeling, no ceiling collapse.',
    useCases: ['Bathrooms & ensuites', 'Kitchen ceilings', 'Swimming pool surrounds', 'Steam rooms', 'Laundry areas', 'Outdoor terraces'],
    recommendedSeries: [
      { name: 'LITE Series', to: '/products/ipanel-lite', reason: 'Wide panels for rapid bathroom ceiling coverage' },
      { name: 'i Series — Matt White', to: '/products/architectural-flat/matt-white', reason: 'Clean white ceiling for spa bathrooms' },
      { name: 'HEAVY B — Solid Fabric', to: '/products/ipanel-heavy-b/solid-fabric', reason: 'Textured finish disguises condensation marks' },
    ],
    faqs: [
      { q: 'Will i-Panel grow mould in a steam bathroom?', a: 'No. UPVC absorbs zero water. Without moisture penetration there is no substrate for mould growth.' },
      { q: 'Is i-Panel suitable for outdoor use?', a: 'i-Panel is suitable for covered outdoor areas and verandahs. Direct rain exposure is not recommended.' },
    ],
  },
};

export function SolutionPage() {
  const { type } = useParams<{ type: string }>();
  const data = type ? solutions[type] : undefined;
  if (!data) return <Navigate to="/" replace />;

  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        {/* Hero */}
        <section className="relative h-[65vh] min-h-[440px] flex items-center justify-center overflow-hidden">
          <img src={data.hero} alt={data.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-4">
              <nav className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">
                <Link to="/" className="hover:text-white/80">Home</Link>
                <ChevronRight size={10} />
                <span className="text-white/70">Solutions</span>
                <ChevronRight size={10} />
                <span className="text-white/80">{data.title}</span>
              </nav>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/50 mb-3"
            >
              i-Panel Solutions
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-serif font-medium leading-tight tracking-tight"
            >
              {data.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-white/60 text-sm md:text-base font-sans mt-4 max-w-xl mx-auto"
            >
              {data.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Intro + Use Cases */}
        <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-2xl text-brand-charcoal mb-4">Why i-Panel for {data.title}?</h2>
            <p className="text-brand-muted text-[14px] font-sans leading-relaxed">{data.intro}</p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-brand-charcoal mb-4">Typical Applications</h3>
            <ul className="space-y-2.5">
              {data.useCases.map((uc) => (
                <li key={uc} className="flex items-center gap-3 text-[13px] font-sans text-brand-muted">
                  <CheckCircle size={15} className="text-brand-charcoal shrink-0" />
                  {uc}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Recommended Series */}
        <section className="bg-white border-t border-black/5 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-serif text-2xl text-brand-charcoal mb-10 text-center">Recommended Series</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {data.recommendedSeries.map((s, i) => (
                <motion.div
                  key={s.to}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    to={s.to}
                    className="group block bg-brand-surface rounded-2xl p-6 border border-black/5 hover:border-brand-gold-dark/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="font-serif text-lg text-brand-charcoal mb-2">{s.name}</h3>
                    <p className="text-brand-muted text-[12px] font-sans leading-relaxed mb-4">{s.reason}</p>
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] font-bold text-brand-charcoal group-hover:gap-3 transition-all">
                      View Series <ArrowRight size={12} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="font-serif text-2xl text-brand-charcoal mb-8 text-center">Common Questions</h2>
          <div className="space-y-4">
            {data.faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 border border-black/5">
                <h3 className="font-serif text-base text-brand-charcoal mb-2">{faq.q}</h3>
                <p className="text-brand-muted text-[13px] font-sans leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-charcoal py-20 text-center">
          <div className="max-w-xl mx-auto px-6">
            <h2 className="font-serif text-3xl text-white mb-4">Ready to specify for your {data.title.toLowerCase()} project?</h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link to="/get-a-quote" className="px-8 py-3.5 rounded-full bg-white text-brand-charcoal text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-white/90 transition-all">
                Get a Quote
              </Link>
              <Link to="/find-a-dealer" className="px-8 py-3.5 rounded-full border border-white/20 text-white text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-white/10 transition-all">
                Find a Dealer
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

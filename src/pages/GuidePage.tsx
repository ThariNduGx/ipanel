import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Clock, ArrowRight } from 'lucide-react';
import { PageShell } from '../components/PageShell';

interface Section { heading: string; body: string }
interface GuideData {
  title: string;
  description: string;
  hero: string;
  readTime: string;
  sections: Section[];
  cta: { label: string; to: string };
}

const guides: Record<string, GuideData> = {
  'best-ceiling-panels-sri-lanka': {
    title: 'Best Ceiling Panels in Sri Lanka (2025 Guide)',
    description: 'A complete comparison of PVC, gypsum, timber, and metal ceiling panel options for Sri Lankan homes and commercial buildings.',
    hero: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80',
    readTime: '7 min read',
    sections: [
      { heading: 'Why Ceiling Material Matters More in Sri Lanka', body: 'Sri Lanka\'s tropical climate — high humidity year-round, intense UV, and occasional flooding — eliminates many ceiling materials that perform well in temperate climates. Gypsum absorbs moisture and cracks. Timber warps and rots. MDF swells. The material you choose must handle 80–90% relative humidity without degrading.' },
      { heading: 'PVC Ceiling Panels: The Clear Leader', body: 'Unplasticised PVC (UPVC) ceiling panels absorb zero water. They are immune to mould, will not swell or crack, and do not require painting or sealing. A high-quality UPVC panel like i-Panel carries a 10–15 year manufacturer warranty and costs significantly less to maintain over its lifetime than any alternatives.' },
      { heading: 'Gypsum vs PVC: The Honest Comparison', body: 'Gypsum boards (drywall) are popular in air-conditioned commercial spaces, but require repainting every 2–3 years and are vulnerable to any moisture ingress from a leaking pipe or AC unit above the ceiling. PVC panels eliminate this risk entirely. For most Sri Lankan residential and commercial projects, PVC is the superior lifecycle choice.' },
      { heading: 'What to Look for in a PVC Ceiling Panel', body: 'Not all PVC panels are equal. Key quality markers: (1) Virgin UPVC substrate — not recycled. (2) UV-stabilised laminate. (3) Consistent 7.5mm thickness across the panel. (4) Manufacturer-backed warranty of 10 years or more. (5) Fire retardant certification (ASTM E84 Class B). i-Panel meets all five criteria.' },
      { heading: 'Price Guide for 2025', body: 'Entry-level PVC panels in Sri Lanka range from LKR 450–650 per linear foot. Mid-range panels with basic wood finishes run LKR 700–900 per lft. Premium architect-grade panels like i-Panel HEAVY B or i Series are priced from LKR 950–1,200 per lft with full warranty backing.' },
      { heading: 'Our Recommendation', body: 'For homes: i-Panel i Series (flat, 10-year warranty) for living rooms and bedrooms; LITE Series for budget-conscious large areas. For commercial: i-Panel HEAVY B for receptions and lobbies. For wet areas: any i-Panel series — all are 100% waterproof.' },
    ],
    cta: { label: 'View All Collections', to: '/products' },
  },
  'pvc-vs-gypsum-ceiling': {
    title: 'PVC vs Gypsum Ceiling: Which is Better for Sri Lanka?',
    description: 'A data-driven comparison of PVC and gypsum ceiling panels covering cost, durability, moisture resistance, and fire safety.',
    hero: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    readTime: '5 min read',
    sections: [
      { heading: 'The Core Difference', body: 'PVC (UPVC) ceiling panels are manufactured from unplasticised polyvinyl chloride — a rigid, waterproof thermoplastic. Gypsum boards are made from calcium sulfate dihydrate — a mineral that is inherently porous and moisture-sensitive. This single difference drives most of the practical comparisons below.' },
      { heading: 'Moisture & Humidity Resistance', body: 'Winner: PVC. Gypsum boards absorb up to 10% of their weight in water under high humidity, leading to sagging, cracking, and mould growth. UPVC panels absorb zero water. In Sri Lanka\'s coastal and monsoon-affected regions, gypsum ceilings typically require replacement within 8–10 years. PVC panels carry 10–15 year warranties.' },
      { heading: 'Installation Time & Cost', body: 'Winner: PVC. Gypsum installation requires framing, board fixing, joint taping, filling, sanding, and painting — a 5–7 day process for a standard room. i-Panel click-lock PVC installs in 3–5 hours with no painting required. Labour cost savings alone often offset the material price difference.' },
      { heading: 'Fire Performance', body: 'Both materials can achieve Class B fire ratings. However, standard gypsum boards are often non-rated in residential applications. i-Panel carries ASTM E84 Class B certification across all series as standard.' },
      { heading: 'Aesthetic Range', body: 'Winner: PVC. Gypsum offers a limited range of painted finishes. PVC panels are available in 20+ colours including UV-stabilised wood-grain laminates, metallics, and textured solids that cannot be achieved with paint on gypsum.' },
      { heading: 'Long-term Maintenance', body: 'Winner: PVC. Gypsum requires repainting every 2–3 years (LKR 15–25 per sq ft per cycle). PVC panels require no painting, no sealing, and only occasional damp-cloth cleaning. Over a 15-year building lifecycle, PVC has a significantly lower total cost of ownership.' },
    ],
    cta: { label: 'Get a Quote', to: '/get-a-quote' },
  },
  'ceiling-panel-cost-sri-lanka': {
    title: 'Ceiling Panel Cost Guide — Sri Lanka (2025)',
    description: 'Accurate per-square-foot pricing for PVC, gypsum, timber, and suspended ceiling systems across Sri Lanka.',
    hero: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1600&q=80',
    readTime: '6 min read',
    sections: [
      { heading: 'How Ceiling Costs Are Calculated in Sri Lanka', body: 'Ceiling panel pricing in Sri Lanka is quoted per linear foot (lft) of panel material, but total project costs include: materials, metal framing (battens), installation labour, accessories (cornices, clips, screws), and finishing. Budget 40–50% above the panel material cost for a fully installed ceiling.' },
      { heading: 'PVC Panel Price Ranges (2025)', body: 'Economy PVC panels (unbranded, recycled substrate): LKR 350–500/lft. Mid-tier branded PVC (5-year warranty): LKR 600–800/lft. Premium UPVC architect-grade (10–15 year warranty, UV-stabilised): LKR 900–1,200/lft. i-Panel falls in the premium category at LKR 900–1,100/lft depending on series and colour.' },
      { heading: 'Installation Labour Costs', body: 'Ceiling panel installation labour in Colombo and Western Province: LKR 120–180 per sq ft (supply and fix). Upcountry and rural areas: LKR 80–120 per sq ft. Complex designs with step ceilings or coffering: add 20–30% to base labour rate.' },
      { heading: 'Gypsum vs PVC: Total Project Cost', body: 'A standard 15×15 ft (225 sq ft) room: Gypsum (supply, fix, paint): LKR 180,000–220,000. PVC — i-Panel i Series (supply and fix): LKR 160,000–190,000. PVC wins on initial cost and eliminates repainting costs for 10+ years.' },
      { heading: 'How to Reduce Ceiling Costs Without Compromising Quality', body: 'Use our Ceiling Calculator to get an accurate panel count before purchasing. Avoid over-ordering by accounting for exact room dimensions. Choose 12-ft panels for rooms over 12 ft in any dimension to reduce waste. Request our volume pricing for projects over 500 sq ft.' },
    ],
    cta: { label: 'Use Ceiling Calculator', to: '/ceiling-calculator' },
  },
  'waterproof-ceiling-panels': {
    title: 'Waterproof Ceiling Panels: Everything You Need to Know',
    description: 'Which ceiling panels are truly waterproof? A technical guide for bathrooms, kitchens, and tropical climates.',
    hero: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80',
    readTime: '5 min read',
    sections: [
      { heading: 'What "Waterproof" Really Means for Ceiling Panels', body: '"Water-resistant" and "waterproof" are not the same. Water-resistant materials can handle brief exposure to moisture. Truly waterproof materials absorb zero water regardless of exposure duration. Only UPVC ceiling panels achieve zero water absorption. Gypsum, MDF, and timber are at best water-resistant.' },
      { heading: 'Why Bathrooms Destroy Non-Waterproof Ceilings', body: 'A shower in an unventilated bathroom generates approximately 2 litres of steam per minute. That steam condenses on the ceiling and is absorbed by any porous material. Over 12–18 months, this causes gypsum ceilings to crack and sag, MDF to swell and bow, and timber to grow mould at the grain boundaries.' },
      { heading: 'UPVC: The Only Truly Waterproof Ceiling Panel', body: 'UPVC (unplasticised PVC) has a zero water absorption rate per ISO 62 testing standards. Steam, condensation, and direct water contact cause no degradation. i-Panel\'s UPVC core is tested and warranted for wet-area use in bathrooms, kitchens, pool surrounds, and steam rooms.' },
      { heading: 'What About "Moisture-Resistant" Gypsum?', body: 'Moisture-resistant (MR) gypsum boards have a wax-impregnated core that reduces water absorption to approximately 5% by weight. This is sufficient for low-humidity environments but fails in bathrooms with daily hot showers. MR gypsum is not recommended for wet-area ceiling use in tropical climates.' },
      { heading: 'Installation Tips for Wet-Area Ceilings', body: 'Ensure adequate ventilation (extract fan vented to outside). Use stainless steel or galvanised fixing hardware — standard steel screws will rust and stain. Seal any penetrations (lights, fan outlets) with silicone. i-Panel\'s click-lock profile is self-sealing — no caulking required at panel joints.' },
    ],
    cta: { label: 'Shop Waterproof Panels', to: '/products' },
  },
};

export function GuidePage() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? guides[slug] : undefined;
  if (!data) return <Navigate to="/" replace />;

  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        {/* Hero */}
        <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
          <img src={data.hero} alt={data.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
          <div className="relative z-10 text-white px-6 max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
              <nav className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">
                <Link to="/" className="hover:text-white/80">Home</Link>
                <ChevronRight size={10} />
                <span className="text-white/70">Guides</span>
              </nav>
            </motion.div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full">
                i-Panel Guide
              </span>
              <span className="flex items-center gap-1 text-white/50 text-[10px]">
                <Clock size={11} /> {data.readTime}
              </span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-5xl font-serif font-medium leading-tight tracking-tight"
            >
              {data.title}
            </motion.h1>
          </div>
        </section>

        {/* Article */}
        <article className="max-w-3xl mx-auto px-6 py-20">
          <p className="text-brand-muted text-base font-sans leading-relaxed mb-12 border-l-4 border-brand-charcoal/20 pl-6">
            {data.description}
          </p>
          <div className="space-y-12">
            {data.sections.map((s, i) => (
              <motion.section
                key={s.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                <h2 className="font-serif text-2xl text-brand-charcoal mb-4">{s.heading}</h2>
                <p className="text-brand-muted text-[14px] font-sans leading-relaxed">{s.body}</p>
              </motion.section>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-brand-charcoal rounded-3xl p-8 text-center text-white">
            <h3 className="font-serif text-2xl mb-3">Ready to take the next step?</h3>
            <Link
              to={data.cta.to}
              className="inline-flex items-center gap-2 mt-4 px-8 py-3.5 rounded-full bg-white text-brand-charcoal text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-white/90 transition-all"
            >
              {data.cta.label} <ArrowRight size={13} />
            </Link>
          </div>
        </article>
      </div>
    </PageShell>
  );
}

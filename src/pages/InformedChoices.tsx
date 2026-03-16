import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { ArrowRight, Plus, Minus, Phone } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const faqs = [
  {
    category: 'Material Science',
    question: 'What is the difference between UPVC and standard PVC ceiling panels?',
    answer:
      'UPVC stands for Unplasticised Polyvinyl Chloride. The key distinction is the absence of chemical plasticisers in the compound. Plasticised PVC panels become brittle and discolour as plasticiser molecules migrate to the surface over time. UPVC panels maintain dimensional stability and colour integrity because there are no plasticisers to migrate. All i-Panel products are manufactured from virgin UPVC compound, which is the material science basis for our 12-year warranty.',
  },
  {
    category: 'Material Science',
    question: 'Why does i-Panel specify virgin UPVC rather than recycled material?',
    answer:
      'Recycled PVC compound contains an unpredictable mixture of contaminants from the original source material. Contaminants in the compound create microscale voids and stress concentrations that compromise the panel\'s impact resistance, UV stability, and dimensional accuracy. Virgin UPVC compound is chemically consistent, which allows us to guarantee the performance specifications that underpin our warranty commitments. Any manufacturer offering recycled UPVC panels cannot provide the same performance guarantee.',
  },
  {
    category: 'Installation',
    question: 'What is the maximum span for i-Panel installation without intermediate support?',
    answer:
      'The maximum recommended span between furring channel supports for all i-Panel profiles at 7.5mm thickness is 400mm. This specification applies to all series including LITE, HEAVY-B, and HEAVY-F. For spans exceeding 400mm, additional intermediate support must be installed. The Wall Cladding series requires support at 300mm centres due to the different loading conditions in vertical application.',
  },
  {
    category: 'Installation',
    question: 'Can i-Panel be installed directly to concrete soffits without a furring channel system?',
    answer:
      'Direct adhesive installation to a concrete soffit is not supported and voids the product warranty. The furring channel system serves two engineering functions beyond simply suspending the panel: it provides a level reference plane to correct soffit irregularities, and it creates an air cavity that allows moisture vapour from the slab to dissipate without becoming trapped behind the panel face. Trapped moisture vapour in tropical climates is the primary cause of premature failure in panels that have been adhesive-fixed directly.',
  },
  {
    category: 'Performance',
    question: 'How does i-Panel\'s UV-stabilised coating compare to untreated competitor products?',
    answer:
      'An accelerated UV weathering test performed to ASTM G154 standards demonstrates that i-Panel finishes retain greater than 90% of their original colour density after the equivalent of 12 years of ambient UV exposure in the Sri Lankan climate zone. Competitor products using standard PVC laminate without UV stabilisation typically exhibit visible yellowing and colour shift within 3 to 5 years under the same conditions. The UV-stabilisation technology is integrated into the laminate during manufacture and cannot be applied retrospectively.',
  },
  {
    category: 'Performance',
    question: 'Is i-Panel suitable for bathroom and wet area installation?',
    answer:
      'All i-Panel profiles are rated 100% waterproof and are suitable for bathroom, kitchen, and wet area ceiling installation. The UPVC substrate has zero water absorption and will not swell, delaminate, or support mould growth regardless of ambient humidity. This is a fundamental material advantage over gypsum board ceilings in bathroom applications. The furring channel and clip system must be manufactured from stainless steel or hot-dipped galvanised steel in wet area applications to prevent corrosion of the supporting framework.',
  },
  {
    category: 'Specification',
    question: 'How do I specify i-Panel for a commercial project requiring fire compliance documentation?',
    answer:
      'All i-Panel products carry a Class B fire retardant rating compliant with ASTM E84. For commercial projects requiring formal specification documentation, our technical team provides a complete specification package including material datasheets, fire test certificates, and installation method statements. This package is provided complimentary for qualifying commercial projects with a minimum area of 500 square metres. Contact our technical team through the quote form to initiate a commercial specification request.',
  },
  {
    category: 'Specification',
    question: 'What finishing profiles are compatible with the i-Panel tongue and groove system?',
    answer:
      'Three finishing profiles are manufactured to the i-Panel system: Profile A (concave cornice), Profile B (square reveal), and Profile C (ogee moulding). Each profile is engineered to the same dimensional tolerance as the main panel range, ensuring a consistent joint quality at the wall-ceiling interface. The finishing profiles are available in all colours carried by the main panel series. Using non-system cornices from other manufacturers is not recommended as dimensional mismatches create visible gaps at the perimeter joint.',
  },
  {
    category: 'Warranty',
    question: 'Under what conditions does the i-Panel warranty become void?',
    answer:
      'The 12-year warranty applies to panels purchased through authorised dealers and installed in accordance with our published installation method statement. Warranty coverage is voided by: installation by an unaccredited installer, use of adhesive in place of the clip system, installation over spans exceeding 400mm without intermediate support, use of non-galvanised steel furring in wet areas, installation of panels that have been cut across the width rather than the length, and modification of the panel profile by machining, routing, or heat forming. The warranty is transferable to a subsequent property owner upon notification to i-Panel.',
  },
  {
    category: 'Warranty',
    question: 'How do I register my i-Panel installation for warranty coverage?',
    answer:
      'Warranty registration is managed through your authorised dealer at the point of purchase. The dealer records the product serial numbers, installation address, and installation date in the i-Panel warranty registry. A warranty certificate referencing the registry entry is provided to the property owner within 30 days of installation. For installations where the original purchaser cannot be traced, retrospective warranty registration is available subject to an inspection by an i-Panel technical representative.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 5) * 0.07 }}
      className="border-b border-black/8 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between py-6 text-left gap-4 group"
      >
        <div className="flex items-start gap-4">
          <span className="text-[8px] uppercase tracking-widest font-bold font-sans text-brand-gold-dark bg-brand-gold-dark/10 px-2.5 py-1 rounded-full mt-0.5 flex-shrink-0">
            {faq.category}
          </span>
          <h3 className="text-brand-charcoal font-serif text-base md:text-lg leading-snug group-hover:text-brand-gold-dark transition-colors">
            {faq.question}
          </h3>
        </div>
        <div className="flex-shrink-0 w-7 h-7 rounded-full border border-black/10 flex items-center justify-center group-hover:border-brand-gold-dark transition-colors mt-0.5">
          {open ? (
            <Minus size={13} className="text-brand-gold-dark" />
          ) : (
            <Plus size={13} className="text-brand-muted group-hover:text-brand-gold-dark transition-colors" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-[calc(1rem+2.5rem+0.5rem)] pr-8">
              <p className="text-brand-muted text-sm font-light leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function InformedChoices() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const categories = [...new Set(faqs.map((f) => f.category))];

  return (
    <>
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer,
              },
            })),
          }),
        }}
      />

      <div className="min-h-screen bg-brand-surface">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-36 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.08),transparent_60%)] pointer-events-none" />
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-dark font-sans mb-5">
                Informed Choices
              </p>
              <h1 className="text-5xl md:text-7xl font-serif font-medium text-brand-charcoal leading-[1.05] tracking-tight mb-6">
                Every question.<br />Answered with precision.
              </h1>
              <p className="text-brand-muted text-lg font-light max-w-2xl mx-auto leading-relaxed">
                Architects, developers, and installers ask us the same questions. We have documented our answers here with the technical depth they deserve.
              </p>
            </motion.div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-10">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-1.5 rounded-full border border-brand-gold-dark/20 bg-brand-gold-dark/5 text-brand-gold-dark text-[10px] uppercase tracking-wider font-bold font-sans"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-10 px-6 pb-28">
          <div className="container mx-auto max-w-3xl">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-24 px-6 bg-brand-charcoal text-white">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-light font-sans mb-6">
              Expert Support
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
              Your question not answered here?
            </h2>
            <p className="text-white/50 text-base font-light max-w-xl mx-auto leading-relaxed mb-12">
              Our technical team provides direct, expert answers to specification and installation questions. No call centres.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:0722002200"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-brand-charcoal text-[11px] uppercase tracking-wider font-bold hover:bg-brand-gold-dark hover:text-white transition-all duration-300"
              >
                <Phone size={15} /> 07 2200 2200
              </a>
              <Link
                to="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white text-[11px] uppercase tracking-wider font-bold hover:bg-white/10 transition-all duration-300"
              >
                Send a Technical Enquiry <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Nav to Collections */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-brand-muted text-sm font-light mb-8">
              Ready to specify? Browse our full collection.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'i-Panel LITE', to: '/products/lite' },
                { label: 'i-Panel HEAVY-B', to: '/products/heavy-b' },
                { label: 'i-Panel HEAVY-F', to: '/products/heavy-f' },
                { label: 'Wall Cladding', to: '/products/wall-cladding' },
                { label: 'All Products', to: '/products' },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-black/10 text-[10px] uppercase tracking-wider font-bold font-sans text-brand-muted hover:border-brand-charcoal hover:text-brand-charcoal transition-all duration-200"
                >
                  {l.label} <ArrowRight size={11} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

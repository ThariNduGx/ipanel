import { motion } from 'motion/react';
import { FileText, Download } from 'lucide-react';
import { PageShell } from '../components/PageShell';

const docs = [
  { category: 'Product Catalogues', items: [
    { title: 'i-Panel Full Product Catalogue 2025', desc: 'Complete series guide with specifications, colour swatches, and applications.', size: '8.2 MB', type: 'PDF' },
    { title: 'i Series — Architectural Flat', desc: 'Dedicated spec sheet for the i Series with 15 colour finishes.', size: '2.1 MB', type: 'PDF' },
    { title: 'HEAVY B Series Catalogue', desc: 'Designer profile series with 20 colour options.', size: '2.4 MB', type: 'PDF' },
    { title: 'LITE Series Catalogue', desc: 'Project series with 16 colour options and wide-panel specs.', size: '1.9 MB', type: 'PDF' },
    { title: 'Finishing Series Profiles', desc: '3 profile shapes with dimensions and colour options.', size: '1.2 MB', type: 'PDF' },
  ]},
  { category: 'Technical Documents', items: [
    { title: 'Installation Manual', desc: 'Step-by-step illustrated guide for professional installers.', size: '3.5 MB', type: 'PDF' },
    { title: 'Technical Data Sheet', desc: 'Material properties, fire ratings, and compliance certifications.', size: '1.1 MB', type: 'PDF' },
    { title: 'Maintenance & Cleaning Guide', desc: 'Approved cleaning methods and maintenance schedules.', size: '0.8 MB', type: 'PDF' },
    { title: 'Warranty Terms & Conditions', desc: 'Full warranty policy including coverage and exclusions.', size: '0.5 MB', type: 'PDF' },
  ]},
  { category: 'Compliance Certificates', items: [
    { title: 'ASTM E84 Fire Retardant Certificate', desc: 'Class B fire retardant compliance for all i-Panel series.', size: '0.4 MB', type: 'PDF' },
    { title: 'SGS Quality Assurance Report', desc: 'Independent third-party quality certification report.', size: '0.6 MB', type: 'PDF' },
    { title: 'RoHS Compliance Declaration', desc: 'Declaration of conformity for restricted hazardous substances.', size: '0.3 MB', type: 'PDF' },
  ]},
];

export function Downloads() {
  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        <section className="bg-brand-charcoal py-28 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-serif font-medium text-white tracking-tight"
          >
            Technical Downloads
          </motion.h1>
          <p className="text-white/50 text-sm mt-3 max-w-md mx-auto">
            Catalogues, data sheets, and compliance certificates for architects, contractors, and project managers.
          </p>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-20 space-y-12">
          {docs.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
            >
              <h2 className="font-serif text-2xl text-brand-charcoal mb-5">{cat.category}</h2>
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl p-5 border border-black/5 flex items-center gap-4 group hover:border-brand-gold-dark/30 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-surface flex items-center justify-center shrink-0">
                      <FileText size={16} className="text-brand-charcoal" />
                    </div>
                    <div className="flex-1">
                      <p className="font-sans font-bold text-sm text-brand-charcoal">{item.title}</p>
                      <p className="text-[11px] text-brand-muted font-sans mt-0.5">{item.desc}</p>
                    </div>
                    <div className="flex items-center gap-3 text-brand-muted">
                      <span className="text-[10px] uppercase tracking-[0.1em] font-bold">{item.type} · {item.size}</span>
                      <div className="w-8 h-8 rounded-full bg-brand-surface flex items-center justify-center group-hover:bg-brand-charcoal group-hover:text-white transition-all">
                        <Download size={13} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </PageShell>
  );
}

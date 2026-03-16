import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Download, ArrowRight } from 'lucide-react';
import { PageShell } from '../components/PageShell';

const steps = [
  {
    step: '01',
    title: 'Measure & Plan',
    body: 'Measure the ceiling area accurately. Note any obstacles (lights, fans, AC ducts, beams). Use our Ceiling Calculator to determine the number of panels and finishing profiles required. Order 10% extra for wastage.',
  },
  {
    step: '02',
    title: 'Install Metal Battens',
    body: 'Fix galvanised steel battens at 60 cm centres perpendicular to the panel direction. Use a laser level to ensure battens are level. Fix to concrete slab with 6 mm rawl plugs and screws at 40 cm intervals. For suspended ceilings, use drop-rod hangers at 80 cm centres.',
  },
  {
    step: '03',
    title: 'Start from the Centre',
    body: 'Snap chalk lines to find the centre of the room. Starting from the centre ensures that any trimmed panels at each end are equal width — giving the ceiling a balanced appearance. Snap starter clips along the first batten at the centre line.',
  },
  {
    step: '04',
    title: 'Click Panels Into Place',
    body: 'Insert the tongue of the first panel into the groove of the starting clip. Press firmly until you feel it click. Continue clicking adjacent panels together. The interlocking profile creates a seamless, gap-free surface with no visible fasteners.',
  },
  {
    step: '05',
    title: 'Cut Panels at Perimeter',
    body: 'Use a fine-toothed hacksaw or a circular saw with a PVC blade to cut panels at the perimeter. Measure twice, cut once. Leave a 5 mm expansion gap at all walls — this will be covered by the finishing cornice profile.',
  },
  {
    step: '06',
    title: 'Install Finishing Profiles',
    body: 'Fix i-Panel Finishing Series cornice profiles at the ceiling-wall junction. Mitre corners at 45°. The cornice covers the expansion gap and gives the ceiling a professional, architectural finish. Three profile shapes are available (4"×4", 2"×2", 3"×1") to suit different design styles.',
  },
  {
    step: '07',
    title: 'Final Inspection',
    body: 'Check all panels are fully clicked. Inspect joints for consistency. Clean the panel surface with a damp cloth to remove any installation marks. Your ceiling is ready to use immediately — no drying time, no painting.',
  },
];

const tools = ['Laser level', 'Chalk line', 'Measuring tape', 'Hacksaw or circular saw with PVC blade', 'Drill with bits', 'Screwdriver', 'Step ladder'];

export function InstallationGuide() {
  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        {/* Hero */}
        <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80"
            alt="Ceiling panel installation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
              <nav className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">
                <Link to="/" className="hover:text-white/80">Home</Link>
                <ChevronRight size={10} />
                <Link to="/resources/faq" className="hover:text-white/80">Resources</Link>
                <ChevronRight size={10} />
                <span className="text-white/80">Installation Guide</span>
              </nav>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-serif font-medium leading-tight tracking-tight"
            >
              i-Panel Installation<br />Step-by-Step Guide
            </motion.h1>
          </div>
        </section>

        {/* Tools */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="bg-white rounded-3xl p-7 border border-black/5 flex gap-8 flex-wrap">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted mb-3">Tools Required</p>
              <ul className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <li key={t} className="bg-brand-surface rounded-full px-3 py-1.5 text-[11px] font-sans text-brand-charcoal border border-black/5">{t}</li>
                ))}
              </ul>
            </div>
            <div className="ml-auto flex items-center">
              <Link
                to="/resources/downloads"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-brand-charcoal/90 transition-all"
              >
                <Download size={13} />
                Download PDF
              </Link>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="max-w-4xl mx-auto px-6 pb-20 space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white rounded-3xl p-8 border border-black/5 flex gap-6"
            >
              <div className="shrink-0">
                <span className="font-serif text-4xl text-black/10 leading-none">{s.step}</span>
              </div>
              <div>
                <h2 className="font-serif text-xl text-brand-charcoal mb-2">{s.title}</h2>
                <p className="text-brand-muted text-[13px] font-sans leading-relaxed">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-brand-charcoal py-16 text-center">
          <div className="max-w-xl mx-auto px-6">
            <h2 className="font-serif text-2xl text-white mb-4">Need help with a project?</h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <Link to="/get-a-quote" className="px-8 py-3.5 rounded-full bg-white text-brand-charcoal text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-white/90 transition-all">
                Get a Technical Quote
              </Link>
              <Link to="/find-a-dealer" className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-white/10 transition-all">
                Find a Dealer <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

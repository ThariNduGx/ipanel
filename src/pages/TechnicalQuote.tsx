import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const projectTypes = [
  'Residential Estate',
  'Private Residence',
  'Luxury Apartment',
  'Boutique Hotel',
  'Commercial Office',
  'Retail Space',
  'Healthcare Facility',
  'Educational Institution',
  'Hospitality and F&B',
  'Industrial and Warehouse',
  'Other',
];

const seriesOptions = [
  'i-Panel LITE (Wood grain and solid colour, 250mm)',
  'i-Panel HEAVY-B (Bevelled profile, 200mm)',
  'i-Panel HEAVY-F (Flat profile, 300mm)',
  'i-Panel Wall Cladding (250mm)',
  'Multiple Series',
  'Not yet decided',
];

export function TechnicalQuote() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: import("react").FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-brand-surface">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-0 px-6 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[60vh] bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.06),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-dark font-sans mb-5">
              Specification Support
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-brand-charcoal leading-[1.05] tracking-tight mb-6">
              Technical Quote
            </h1>
            <p className="text-brand-muted text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Our technical team provides accurate project quotations, sample delivery, and full specification support within 24 hours for qualifying projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-5 gap-12 lg:gap-20 items-start">

            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-10 border border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.05)] text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-green-500" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-3xl font-serif font-medium text-brand-charcoal mb-3">
                    Enquiry received
                  </h2>
                  <p className="text-brand-muted font-light leading-relaxed mb-8">
                    Your technical quote request has been submitted. A member of our specification team will contact you within 24 business hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      to="/products"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-wider font-bold hover:bg-brand-gold-dark transition-all duration-300"
                    >
                      Continue Browsing <ArrowRight size={14} />
                    </Link>
                    <Link
                      to="/inspiration"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-black/15 text-brand-charcoal text-[11px] uppercase tracking-wider font-bold hover:border-brand-charcoal transition-colors"
                    >
                      View Inspiration
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl p-8 md:p-10 border border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.05)] space-y-7"
                >
                  <div>
                    <h2 className="text-2xl font-serif font-medium text-brand-charcoal mb-1">
                      Project Details
                    </h2>
                    <p className="text-brand-muted text-sm font-light">
                      Complete all fields to receive an accurate quotation.
                    </p>
                  </div>

                  {/* Name Row */}
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold font-sans text-brand-muted">
                        First Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Aryan"
                        className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm text-brand-charcoal placeholder-brand-muted/40 focus:outline-none focus:border-brand-gold-dark transition-colors font-light"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold font-sans text-brand-muted">
                        Last Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Silva"
                        className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm text-brand-charcoal placeholder-brand-muted/40 focus:outline-none focus:border-brand-gold-dark transition-colors font-light"
                      />
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold font-sans text-brand-muted">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="aryan@studio.lk"
                        className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm text-brand-charcoal placeholder-brand-muted/40 focus:outline-none focus:border-brand-gold-dark transition-colors font-light"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold font-sans text-brand-muted">
                        Contact Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="07X XXX XXXX"
                        className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm text-brand-charcoal placeholder-brand-muted/40 focus:outline-none focus:border-brand-gold-dark transition-colors font-light"
                      />
                    </div>
                  </div>

                  {/* Role */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold font-sans text-brand-muted">
                      Your Role
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm text-brand-charcoal focus:outline-none focus:border-brand-gold-dark transition-colors font-light bg-white appearance-none"
                      >
                        <option value="">Select your role</option>
                        {['Architect', 'Interior Designer', 'Developer / Property Owner', 'Contractor / Builder', 'Quantity Surveyor', 'Other'].map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none" />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold font-sans text-brand-muted">
                      Project Type <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm text-brand-charcoal focus:outline-none focus:border-brand-gold-dark transition-colors font-light bg-white appearance-none"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((pt) => (
                          <option key={pt} value={pt}>{pt}</option>
                        ))}
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none" />
                    </div>
                  </div>

                  {/* Series Interest */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold font-sans text-brand-muted">
                      Series of Interest
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm text-brand-charcoal focus:outline-none focus:border-brand-gold-dark transition-colors font-light bg-white appearance-none"
                      >
                        <option value="">Select a series</option>
                        {seriesOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none" />
                    </div>
                  </div>

                  {/* Estimated Area */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold font-sans text-brand-muted">
                      Estimated Area (m²)
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 250"
                      className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm text-brand-charcoal placeholder-brand-muted/40 focus:outline-none focus:border-brand-gold-dark transition-colors font-light"
                    />
                  </div>

                  {/* Project Description */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold font-sans text-brand-muted">
                      Project Description
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your project, specify any preferred finishes, and note any technical requirements or deadlines."
                      className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm text-brand-charcoal placeholder-brand-muted/40 focus:outline-none focus:border-brand-gold-dark transition-colors font-light resize-none"
                    />
                  </div>

                  {/* Sample Request */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="sample"
                      className="w-4 h-4 rounded border-black/20 accent-brand-gold-dark"
                    />
                    <label htmlFor="sample" className="text-brand-muted text-sm font-light">
                      I would like to receive physical sample boards at no charge
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-wider font-bold hover:bg-brand-gold-dark transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Submit Technical Enquiry <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="md:col-span-2 space-y-7">
              {/* Contact Cards */}
              <div className="bg-brand-charcoal text-white rounded-3xl p-8">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold-light font-sans mb-6">
                  Direct Contact
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={15} className="text-brand-gold-light" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-white/50 text-[10px] uppercase tracking-wider font-bold font-sans mb-1">Direct Line</p>
                      <a href="tel:0722002200" className="text-white font-serif text-lg hover:text-brand-gold-light transition-colors">
                        07 2200 2200
                      </a>
                      <p className="text-white/40 text-[10px] mt-0.5">Mon to Sat, 8:30 AM to 5:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={15} className="text-brand-gold-light" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-white/50 text-[10px] uppercase tracking-wider font-bold font-sans mb-1">Email</p>
                      <a href="mailto:info@ipanel.lk" className="text-white font-serif text-base hover:text-brand-gold-light transition-colors">
                        info@ipanel.lk
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={15} className="text-brand-gold-light" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-white/50 text-[10px] uppercase tracking-wider font-bold font-sans mb-1">Flagship Showroom</p>
                      <p className="text-white font-light text-sm leading-relaxed">
                        06, Lucas Road,<br />Colombo 14, Sri Lanka
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-3xl p-8 border border-black/5">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold-dark font-sans mb-6">
                  What to Expect
                </p>
                <ul className="space-y-4">
                  {[
                    'Response within 24 business hours from a qualified technical representative',
                    'Accurate square metre pricing based on your confirmed area and series selection',
                    'Physical sample boards dispatched within 3 business days for qualifying projects',
                    'Full specification documentation including fire certificates and installation method statements',
                    'Access to our authorised installer network in your region',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-brand-gold-dark flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <p className="text-brand-muted text-[11px] font-light leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explore */}
              <div className="rounded-3xl bg-brand-gold-dark/6 border border-brand-gold-dark/15 p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold-dark font-sans mb-4">
                  Not sure which series?
                </p>
                <p className="text-brand-muted text-xs font-light leading-relaxed mb-5">
                  Browse all four collections and request samples from any colour page.
                </p>
                <div className="space-y-2">
                  {[
                    { label: 'i-Panel LITE', to: '/products/lite' },
                    { label: 'i-Panel HEAVY-B', to: '/products/heavy-b' },
                    { label: 'i-Panel HEAVY-F', to: '/products/heavy-f' },
                    { label: 'Wall Cladding', to: '/products/wall-cladding' },
                  ].map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white transition-colors group"
                    >
                      <span className="text-[10px] uppercase tracking-wider font-bold font-sans text-brand-muted group-hover:text-brand-charcoal transition-colors">
                        {l.label}
                      </span>
                      <ArrowRight size={12} className="text-brand-muted group-hover:text-brand-charcoal transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

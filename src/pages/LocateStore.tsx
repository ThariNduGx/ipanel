import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const provinces = [
  {
    name: 'Western Province',
    region: 'Colombo District',
    dealers: [
      {
        name: 'Idea Industries (Flagship Showroom)',
        address: '06, Lucas Road, Colombo 14',
        phone: '07 2200 2200',
        hours: 'Mon to Sat, 8:30 AM to 5:30 PM',
        badge: 'Flagship',
      },
      {
        name: 'Colombo South Panel Centre',
        address: '142, Galle Road, Dehiwela, Colombo',
        phone: '07 7123 4567',
        hours: 'Mon to Sat, 9:00 AM to 6:00 PM',
        badge: 'Authorised',
      },
      {
        name: 'Nugegoda Building Materials',
        address: '78, High Level Road, Nugegoda',
        phone: '07 7987 6543',
        hours: 'Mon to Sat, 8:00 AM to 5:00 PM',
        badge: 'Authorised',
      },
    ],
  },
  {
    name: 'Western Province',
    region: 'Gampaha District',
    dealers: [
      {
        name: 'Kelaniya Panel Distributors',
        address: '23, Colombo Road, Kelaniya',
        phone: '07 7456 7890',
        hours: 'Mon to Sat, 8:00 AM to 5:30 PM',
        badge: 'Authorised',
      },
      {
        name: 'Negombo Interior Supplies',
        address: '55, Main Street, Negombo',
        phone: '07 7234 5678',
        hours: 'Mon to Sat, 8:30 AM to 5:30 PM',
        badge: 'Authorised',
      },
    ],
  },
  {
    name: 'Central Province',
    region: 'Kandy District',
    dealers: [
      {
        name: 'Kandy Premium Interiors',
        address: '12, Dalada Veediya, Kandy',
        phone: '07 7345 6789',
        hours: 'Mon to Sat, 9:00 AM to 5:00 PM',
        badge: 'Authorised',
      },
      {
        name: 'Hill Country Building Centre',
        address: '89, Peradeniya Road, Kandy',
        phone: '07 7876 5432',
        hours: 'Mon to Fri, 8:00 AM to 5:00 PM',
        badge: 'Authorised',
      },
    ],
  },
  {
    name: 'Central Province',
    region: 'Matale District',
    dealers: [
      {
        name: 'Matale Hardware and Panels',
        address: '34, Kandy Road, Matale',
        phone: '07 7567 8901',
        hours: 'Mon to Sat, 8:00 AM to 5:00 PM',
        badge: 'Authorised',
      },
    ],
  },
  {
    name: 'Southern Province',
    region: 'Galle District',
    dealers: [
      {
        name: 'Galle Fort Interiors',
        address: '22, Leyn Baan Street, Galle Fort',
        phone: '07 7654 3210',
        hours: 'Mon to Sat, 9:00 AM to 6:00 PM',
        badge: 'Authorised',
      },
      {
        name: 'Southern Panel Distributors',
        address: '67, Colombo Road, Galle',
        phone: '07 7432 1098',
        hours: 'Mon to Sat, 8:00 AM to 5:00 PM',
        badge: 'Authorised',
      },
    ],
  },
  {
    name: 'Southern Province',
    region: 'Matara District',
    dealers: [
      {
        name: 'Matara Building Supplies',
        address: '15, Main Street, Matara',
        phone: '07 7890 1234',
        hours: 'Mon to Sat, 8:30 AM to 5:30 PM',
        badge: 'Authorised',
      },
    ],
  },
  {
    name: 'Northern Province',
    region: 'Jaffna District',
    dealers: [
      {
        name: 'Jaffna Interior Solutions',
        address: '45, Hospital Road, Jaffna',
        phone: '07 7109 8765',
        hours: 'Mon to Sat, 8:00 AM to 5:00 PM',
        badge: 'Authorised',
      },
    ],
  },
  {
    name: 'Eastern Province',
    region: 'Trincomalee District',
    dealers: [
      {
        name: 'Trinco Panel and Ceilings',
        address: '28, Dockyard Road, Trincomalee',
        phone: '07 7209 8765',
        hours: 'Mon to Sat, 8:00 AM to 5:00 PM',
        badge: 'Authorised',
      },
    ],
  },
  {
    name: 'North Western Province',
    region: 'Kurunegala District',
    dealers: [
      {
        name: 'Kurunegala Home Interiors',
        address: '56, Colombo Road, Kurunegala',
        phone: '07 7309 8765',
        hours: 'Mon to Sat, 9:00 AM to 5:00 PM',
        badge: 'Authorised',
      },
      {
        name: 'Puttalam Building Materials',
        address: '12, Chilaw Road, Puttalam',
        phone: '07 7409 8765',
        hours: 'Mon to Sat, 8:00 AM to 4:30 PM',
        badge: 'Authorised',
      },
    ],
  },
  {
    name: 'Sabaragamuwa Province',
    region: 'Ratnapura District',
    dealers: [
      {
        name: 'Ratnapura Panel Suppliers',
        address: '33, Main Street, Ratnapura',
        phone: '07 7509 8765',
        hours: 'Mon to Sat, 8:30 AM to 5:00 PM',
        badge: 'Authorised',
      },
    ],
  },
];

function ProvinceGroup({ province, index }: { province: typeof provinces[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="bg-white rounded-3xl p-8 border border-black/5 shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
    >
      <div className="mb-6 pb-5 border-b border-black/5">
        <span className="text-[8px] uppercase tracking-widest font-bold text-brand-gold-dark font-sans bg-brand-gold-dark/8 px-3 py-1.5 rounded-full">
          {province.name}
        </span>
        <h3 className="text-brand-charcoal font-serif text-xl mt-3">{province.region}</h3>
      </div>

      <div className="space-y-6">
        {province.dealers.map((dealer, i) => (
          <div key={i} className={`${i > 0 ? 'pt-6 border-t border-black/5' : ''}`}>
            <div className="flex items-start justify-between gap-3 mb-3">
              <h4 className="text-brand-charcoal font-sans font-bold text-sm">{dealer.name}</h4>
              <span
                className={`text-[8px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${
                  dealer.badge === 'Flagship'
                    ? 'bg-[#0047FF] text-white'
                    : 'bg-black/6 text-brand-muted'
                }`}
              >
                {dealer.badge}
              </span>
            </div>
            <div className="space-y-2">
              <p className="flex items-start gap-2.5 text-brand-muted text-xs font-light">
                <MapPin size={12} className="text-brand-gold-dark flex-shrink-0 mt-0.5" />
                {dealer.address}
              </p>
              <p className="flex items-center gap-2.5 text-brand-muted text-xs font-light">
                <Phone size={12} className="text-brand-gold-dark flex-shrink-0" />
                <a href={`tel:${dealer.phone.replace(/\s/g, '')}`} className="hover:text-brand-charcoal transition-colors">
                  {dealer.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5 text-brand-muted text-xs font-light">
                <Clock size={12} className="text-brand-gold-dark flex-shrink-0" />
                {dealer.hours}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function LocateStore() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-brand-surface">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top_left,rgba(197,160,89,0.07),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-dark font-sans mb-5">
              Authorised Showrooms
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-brand-charcoal leading-[1.05] tracking-tight mb-6">
              Locate a Dealer
            </h1>
            <p className="text-brand-muted text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Purchase only through authorised i-Panel dealers to ensure your installation is covered by our manufacturer warranty. View sample boards, receive expert installation advice, and obtain accurate project quotations.
            </p>
          </motion.div>

          {/* Key Assurance */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 bg-[#0047FF]/8 border border-[#0047FF]/15 rounded-2xl p-6 max-w-2xl mx-auto text-center"
          >
            <p className="text-brand-charcoal text-sm font-sans font-medium leading-relaxed">
              Purchasing from an unauthorised source voids the manufacturer warranty.
              All listed dealers are registered in the i-Panel Authorised Dealer Network as of 2026.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dealer Directory Grid */}
      <section className="py-10 px-6 pb-28">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {provinces.map((province, i) => (
              <ProvinceGroup key={`${province.name}-${province.region}`} province={province} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Become a Dealer */}
      <section className="py-24 px-6 bg-brand-charcoal text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-light font-sans mb-6">
            Dealer Network
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
            Interested in becoming an authorised dealer?
          </h2>
          <p className="text-white/50 text-base font-light max-w-xl mx-auto leading-relaxed mb-12">
            We are actively expanding our authorised dealer network in underserved regions. Approved dealers receive full product training, display board provision, and inclusion in this directory.
          </p>
          <Link
            to="/get-a-quote"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand-charcoal text-[11px] uppercase tracking-wider font-bold hover:bg-brand-gold-dark hover:text-white transition-all duration-300"
          >
            Dealer Enquiry <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-brand-muted text-sm font-light mb-8">
            Not yet ready to visit a showroom? Explore online first.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Request a Technical Quote', to: '/quote' },
              { label: 'View Collections', to: '/products' },
              { label: 'Our Story', to: '/our-story' },
              { label: 'Informed Choices (FAQ)', to: '/faq' },
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
  );
}

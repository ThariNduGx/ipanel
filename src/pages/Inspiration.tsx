import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const projects = [
  {
    id: 1,
    title: 'Colombo 07 Penthouse',
    category: 'Residential',
    product: 'Kaluwara',
    productSlug: '/products/colours/lite/kaluwara',
    series: 'i-Panel LITE',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    span: 'col-span-2 row-span-2',
    year: '2024',
  },
  {
    id: 2,
    title: 'Mirissa Beachfront Villa',
    category: 'Hospitality',
    product: 'Africa Teak',
    productSlug: '/products/colours/lite/africa-teak',
    series: 'i-Panel LITE',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1 row-span-1',
    year: '2024',
  },
  {
    id: 3,
    title: 'Kandy Boutique Hotel',
    category: 'Hospitality',
    product: 'Storm Grey',
    productSlug: '/products/colours/heavy-b/storm-grey',
    series: 'i-Panel HEAVY-B',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1 row-span-1',
    year: '2023',
  },
  {
    id: 4,
    title: 'Colombo Corporate Tower',
    category: 'Commercial',
    product: 'Cream Satin',
    productSlug: '/products/colours/heavy-f/cream-satin',
    series: 'i-Panel HEAVY-F',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1 row-span-2',
    year: '2024',
  },
  {
    id: 5,
    title: 'Galle Fort Residence',
    category: 'Residential',
    product: 'Wenge',
    productSlug: '/products/colours/lite/wenge',
    series: 'i-Panel LITE',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1 row-span-1',
    year: '2023',
  },
  {
    id: 6,
    title: 'Negombo Spa Resort',
    category: 'Hospitality',
    product: 'Travertine',
    productSlug: '/products/colours/wall-cladding/travertine',
    series: 'Wall Cladding',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1 row-span-1',
    year: '2024',
  },
  {
    id: 7,
    title: 'Batticaloa Executive Suite',
    category: 'Hospitality',
    product: 'Pearl White',
    productSlug: '/products/colours/heavy-b/pearl-white',
    series: 'i-Panel HEAVY-B',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    span: 'col-span-2 row-span-1',
    year: '2023',
  },
  {
    id: 8,
    title: 'Colombo 03 Apartment',
    category: 'Residential',
    product: 'Concrete Loft',
    productSlug: '/products/colours/heavy-b/concrete-loft',
    series: 'i-Panel HEAVY-B',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1 row-span-1',
    year: '2024',
  },
  {
    id: 9,
    title: 'Nuwara Eliya Mountain Lodge',
    category: 'Hospitality',
    product: 'Cedar Spice',
    productSlug: '/products/colours/lite/cedar-spice',
    series: 'i-Panel LITE',
    image: 'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1 row-span-1',
    year: '2023',
  },
  {
    id: 10,
    title: 'Rajagiriya Creative Studio',
    category: 'Commercial',
    product: 'Anthracite',
    productSlug: '/products/colours/wall-cladding/anthracite',
    series: 'Wall Cladding',
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1 row-span-1',
    year: '2024',
  },
];

const categories = ['All', 'Residential', 'Hospitality', 'Commercial'];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-3xl group ${project.span}`}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={`${project.title} featuring i-Panel ${project.product} ${project.series} ceiling installation`}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
      />

      {/* Default Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-500" />

      {/* Hover Blur Reveal */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center p-6">
        <p className="text-white/50 text-[9px] uppercase tracking-[0.25em] font-bold font-sans mb-3">
          {project.category} / {project.year}
        </p>
        <h3 className="text-white font-serif text-xl md:text-2xl mb-3">{project.title}</h3>
        <p className="text-white/60 text-[10px] font-sans mb-1">Product Specified</p>
        <p className="text-white font-serif text-base mb-6">{project.product}</p>
        <Link
          to={project.productSlug}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-brand-charcoal text-[10px] uppercase tracking-wider font-bold hover:bg-brand-gold-dark hover:text-white transition-all duration-300"
        >
          View Product <ArrowRight size={12} />
        </Link>
      </div>

      {/* Default Bottom Info */}
      <div className="absolute inset-x-0 bottom-0 p-5 translate-y-0 group-hover:translate-y-full opacity-100 group-hover:opacity-0 transition-all duration-400">
        <span className="text-white/50 text-[8px] uppercase tracking-widest font-bold font-sans">{project.category}</span>
        <h3 className="text-white font-serif text-base mt-0.5">{project.title}</h3>
      </div>
    </motion.div>
  );
}

export function Inspiration() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-brand-surface">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80"
          alt="i-Panel Inspiration gallery. A curated archive of luxury architectural projects specifying i-Panel ceiling and wall panels across Sri Lanka."
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="noise-overlay" />

        <div className="relative z-10 text-center text-white px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 font-sans mb-4"
          >
            Project Archive
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-4"
          >
            Aesthetic Reality
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/60 text-lg font-light max-w-xl mx-auto leading-relaxed"
          >
            Real installations. Real projects. Hover any image to reveal the finish and link directly to the product specification.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 md:top-20 z-40 bg-brand-surface/95 backdrop-blur-xl border-b border-black/5 py-4 px-6">
        <div className="container mx-auto flex justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-[10px] uppercase tracking-wider font-bold font-sans transition-all duration-200 ${
                cat === 'All'
                  ? 'bg-brand-charcoal text-white'
                  : 'text-brand-muted hover:text-brand-charcoal hover:bg-black/5 border border-black/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Bento Project Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[320px] gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-24 px-6 bg-brand-charcoal text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-light font-sans mb-6">
            Submit Your Project
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
            Have an i-Panel installation to share?
          </h2>
          <p className="text-white/50 text-base font-light max-w-xl mx-auto leading-relaxed mb-10">
            We actively feature architect-submitted installations in this archive. Accreditation, product links, and project details are included for every featured submission.
          </p>
          <Link
            to="/get-a-quote"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand-charcoal text-[11px] uppercase tracking-wider font-bold hover:bg-brand-gold-dark hover:text-white transition-all duration-300"
          >
            Contact Our Team <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Explore Collections */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold-dark font-sans mb-4">
            Specify the Finish
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-charcoal mb-10">
            Explore all four collections
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'i-Panel LITE', slug: 'lite', image: '/products/lite.jpg' },
              { label: 'i-Panel HEAVY-B', slug: 'heavy-b', image: '/products/heavy-b.jpg' },
              { label: 'i-Panel HEAVY-F', slug: 'heavy-f', image: '/products/heavy-flat.jpg' },
              { label: 'Wall Cladding', slug: 'wall-cladding', image: '/products/wall.jpg' },
            ].map((s) => (
              <Link
                key={s.slug}
                to={`/products/${s.slug}`}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500"
              >
                <img
                  src={s.image}
                  alt={`${s.label} ceiling panel series collection`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <h3 className="text-white font-serif text-sm leading-tight">{s.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

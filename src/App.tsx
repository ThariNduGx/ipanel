import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Series } from './components/Series';
import { Anatomy } from './components/Anatomy';
import { Performance } from './components/Performance';
import { Gallery } from './components/Gallery';
import { Trust } from './components/Trust';
import { Quotation } from './components/Quotation';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ProductsPage } from './pages/Products';
import { SeriesPage } from './pages/SeriesPage';
import { ColourPage } from './pages/ColourPage';
import { OurStory } from './pages/OurStory';
import { Inspiration } from './pages/Inspiration';
import { InformedChoices } from './pages/InformedChoices';
import { LocateStore } from './pages/LocateStore';
import { TechnicalQuote } from './pages/TechnicalQuote';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Series />
      <Anatomy />
      <Performance />
      <Gallery />
      <Trust />
      <Quotation />
      <FAQ />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <div className="bg-brand-surface min-h-screen text-brand-dark font-sans">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/lite" element={<SeriesPage />} />
        <Route path="/products/heavy-b" element={<SeriesPage />} />
        <Route path="/products/heavy-f" element={<SeriesPage />} />
        <Route path="/products/wall-cladding" element={<SeriesPage />} />
        <Route path="/products/colours/:series/:slug" element={<ColourPage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/faq" element={<InformedChoices />} />
        <Route path="/locate-store" element={<LocateStore />} />
        <Route path="/quote" element={<TechnicalQuote />} />
      </Routes>
    </div>
  );
}

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

function HomePage() {
  return (
    <>
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
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

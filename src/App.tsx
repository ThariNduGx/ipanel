import { Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

// Home
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
import { CartSidebar } from './components/CartSidebar';

// Products
import { ProductsPage } from './pages/Products';
import { SeriesPage } from './pages/SeriesPage';
import { ColourPage } from './pages/ColourPage';
import { FinishingSeriesPage } from './pages/FinishingSeriesPage';
import { ColoursGallery } from './pages/ColoursGallery';
import { ProductCompare } from './pages/ProductCompare';

// About
import { OurStory } from './pages/OurStory';
import { AboutHub } from './pages/AboutHub';
import { WhyIPanell } from './pages/WhyIPanell';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { Awards } from './pages/Awards';

// Contact / Utility
import { Contact } from './pages/Contact';
import { TechnicalQuote } from './pages/TechnicalQuote';
import { CeilingCalculator } from './pages/CeilingCalculator';

// Solutions
import { SolutionPage } from './pages/SolutionPage';

// Guides
import { GuidePage } from './pages/GuidePage';

// Resources
import { InformedChoices } from './pages/InformedChoices';
import { InstallationGuide } from './pages/InstallationGuide';
import { MaintenancePage } from './pages/MaintenancePage';
import { Downloads } from './pages/Downloads';
import { BlogHub } from './pages/BlogHub';
import { BlogPost } from './pages/BlogPost';
import { ProjectsHub } from './pages/ProjectsHub';
import { ProjectDetail } from './pages/ProjectDetail';

// Shop
import { Shop } from './pages/Shop';
import { ShopCart } from './pages/ShopCart';
import { Checkout } from './pages/Checkout';
import { OrderConfirmation } from './pages/OrderConfirmation';
import { ShopMyAccount } from './pages/ShopMyAccount';

// Dealers
import { FindADealer } from './pages/FindADealer';
import { BecomeADealer } from './pages/BecomeADealer';

// Legal
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { WarrantyPage } from './pages/WarrantyPage';
import { WarrantyActivation } from './pages/WarrantyActivation';

// Inspiration (kept for legacy reference)
import { Inspiration } from './pages/Inspiration';

function HomePage() {
  return (
    <>
      <Navbar />
      <CartSidebar />
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
    <CartProvider>
      <div className="bg-brand-surface min-h-screen text-brand-dark font-sans">
        <Routes>
          {/* ── Home ── */}
          <Route path="/" element={<HomePage />} />

          {/* ── About ── */}
          <Route path="/about" element={<AboutHub />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/about/why-ipanel" element={<WhyIPanell />} />
          <Route path="/about/sustainability" element={<SustainabilityPage />} />
          <Route path="/about/awards" element={<Awards />} />

          {/* ── Contact / Utility ── */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-a-quote" element={<TechnicalQuote />} />
          <Route path="/ceiling-calculator" element={<CeilingCalculator />} />

          {/* ── Products ── */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/colours" element={<ColoursGallery />} />
          <Route path="/products/compare" element={<ProductCompare />} />

          {/* Series pages — v2.1 clean slugs */}
          <Route path="/products/:series" element={<SeriesPage />} />
          {/* Colour detail pages under each series */}
          <Route path="/products/:series/:slug" element={<ColourPage />} />

          {/* Finishing Series — profile-specific hub pages */}
          <Route path="/products/finishing-series" element={<FinishingSeriesPage />} />
          <Route path="/products/finishing-series/:profile" element={<FinishingSeriesPage />} />
          <Route path="/products/finishing-profile-a" element={<FinishingSeriesPage />} />
          <Route path="/products/finishing-profile-b" element={<FinishingSeriesPage />} />
          <Route path="/products/finishing-profile-c" element={<FinishingSeriesPage />} />

          {/* ── Solutions ── */}
          <Route path="/solutions/:type" element={<SolutionPage />} />

          {/* ── Guides ── */}
          <Route path="/guides/:slug" element={<GuidePage />} />

          {/* ── Resources ── */}
          <Route path="/resources/faq" element={<InformedChoices />} />
          <Route path="/resources/installation-guide" element={<InstallationGuide />} />
          <Route path="/resources/maintenance" element={<MaintenancePage />} />
          <Route path="/resources/downloads" element={<Downloads />} />
          <Route path="/resources/blog" element={<BlogHub />} />
          <Route path="/resources/blog/:slug" element={<BlogPost />} />
          <Route path="/resources/projects" element={<ProjectsHub />} />
          <Route path="/resources/projects/:slug" element={<ProjectDetail />} />

          {/* ── Shop (legacy /shop/* → redirects) ── */}
          <Route path="/shop" element={<Navigate to="/products" replace />} />
          <Route path="/shop/cart" element={<Navigate to="/cart" replace />} />
          <Route path="/shop/checkout" element={<Navigate to="/checkout" replace />} />
          <Route path="/shop/order-confirmation/:id" element={<Navigate to="/checkout/confirmation/:id" replace />} />
          <Route path="/shop/my-account" element={<Navigate to="/account" replace />} />
          <Route path="/shop/product/:sku" element={<Navigate to="/products" replace />} />

          {/* ── Transactional — clean URLs ── */}
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/confirmation/:id" element={<OrderConfirmation />} />
          <Route path="/account" element={<ShopMyAccount />} />
          <Route path="/account/orders" element={<ShopMyAccount />} />
          <Route path="/account/certificates" element={<ShopMyAccount />} />

          {/* ── Dealers ── */}
          <Route path="/dealers" element={<FindADealer />} />
          <Route path="/dealers/:province" element={<FindADealer />} />
          <Route path="/become-a-dealer" element={<BecomeADealer />} />

          {/* ── Legal ── */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/warranty" element={<WarrantyPage />} />
          <Route path="/resources/warranty-activation" element={<WarrantyActivation />} />

          {/* ── Legacy redirects ── */}
          <Route path="/about/our-story" element={<Navigate to="/our-story" replace />} />
          <Route path="/faq" element={<Navigate to="/resources/faq" replace />} />
          <Route path="/locate-store" element={<Navigate to="/dealers" replace />} />
          <Route path="/find-a-dealer" element={<Navigate to="/dealers" replace />} />
          <Route path="/find-a-dealer/:province" element={<Navigate to="/dealers" replace />} />
          <Route path="/warranty-activation" element={<Navigate to="/resources/warranty-activation" replace />} />
          <Route path="/quote" element={<Navigate to="/get-a-quote" replace />} />
          <Route path="/order-confirmation/:id" element={<Navigate to="/checkout/confirmation/:id" replace />} />
          {/* Old product URL slugs → new clean slugs */}
          <Route path="/products/architectural-flat" element={<Navigate to="/products/i-series" replace />} />
          <Route path="/products/architectural-flat/:slug" element={<Navigate to="/products/i-series/:slug" replace />} />
          <Route path="/products/ipanel-heavy-b" element={<Navigate to="/products/heavy-b" replace />} />
          <Route path="/products/ipanel-heavy-b/:slug" element={<Navigate to="/products/heavy-b/:slug" replace />} />
          <Route path="/products/ipanel-lite" element={<Navigate to="/products/lite" replace />} />
          <Route path="/products/ipanel-lite/:slug" element={<Navigate to="/products/lite/:slug" replace />} />
          <Route path="/products/heavy-f" element={<Navigate to="/products/i-series" replace />} />
          <Route path="/products/wall-cladding" element={<Navigate to="/products/wall-cladding-panels" replace />} />
          <Route path="/products/colours/:series/:slug" element={<Navigate to="/products" replace />} />

          {/* ── Misc kept pages ── */}
          <Route path="/inspiration" element={<Inspiration />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

import { useState, useEffect, useCallback } from 'react';
import Navbar, { type PageId } from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';
import ReservationModal from '@/components/ReservationModal';
import HomePage from '@/pages/HomePage';
import MenuPage from '@/pages/MenuPage';
import AboutPage from '@/pages/AboutPage';
import GalleryPage from '@/pages/GalleryPage';
import ContactPage from '@/pages/ContactPage';

const pageTitles: Record<PageId, string> = {
  home: 'Saffron & Ember — Where Fire Meets Flavor',
  menu: 'Menu — Saffron & Ember',
  about: 'About — Saffron & Ember',
  gallery: 'Gallery — Saffron & Ember',
  contact: 'Contact — Saffron & Ember',
};

const pageDescriptions: Record<PageId, string> = {
  home: 'Saffron & Ember — Where fire meets flavor. A modern fine-dining restaurant offering a seasonal menu, craft cocktails, and an unforgettable atmosphere.',
  menu: 'Explore our seasonal menu — starters, main courses, vegetarian dishes, desserts, and craft beverages. Every dish is cooked over our oak-fired hearth.',
  about: 'The story of Saffron & Ember — from pop-up dinners to a Portland institution. Meet Chef Aiden Rourke and discover our fire-first philosophy.',
  gallery: 'A visual journey through Saffron & Ember — food, interior, and kitchen photography from our Portland restaurant.',
  contact: 'Get in touch with Saffron & Ember. Find our address, hours, phone, email, and send us a message. Reservations available.',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [reserveOpen, setReserveOpen] = useState(false);

  const handleNavigate = useCallback((page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    document.title = pageTitles[currentPage];
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', pageDescriptions[currentPage]);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onReserve={() => setReserveOpen(true)} />;
      case 'menu':
        return <MenuPage />;
      case 'about':
        return <AboutPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} onReserve={() => setReserveOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} onReserve={() => setReserveOpen(true)} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <BackToTop />
      <ReservationModal isOpen={reserveOpen} onClose={() => setReserveOpen(false)} />
    </div>
  );
}

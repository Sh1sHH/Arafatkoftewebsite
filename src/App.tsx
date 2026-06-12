import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AwningNav from './components/AwningNav';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Menu from './components/Menu';
import ImageGallery from './components/ImageGallery';
import QrMenuPage from './components/QrMenuPage';
import NotFound from './components/NotFound';
import './styles/index.css';
import { Instagram, Facebook } from 'lucide-react';
import { useLanguage } from './lib/i18n/LanguageContext';

const HomePageLayout: React.FC = () => {
  const { locale } = useLanguage();
  const location = useLocation();

  // URL'e göre ilgili bölüme scroll et
  useEffect(() => {
    const scrollToSection = () => {
      const path = location.pathname;
      let targetId = '';
      
      if (path.includes('menu')) {
        targetId = 'menu';
      } else if (path.includes('galeri') || path.includes('gallery')) {
        targetId = 'gallery';
      } else if (path.includes('iletisim') || path.includes('contact')) {
        targetId = 'info';
      }
      
      if (targetId) {
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    scrollToSection();
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <AwningNav />

      <main id="main-content">
        <Hero />
        <InfoSection />
        <Menu />
        <ImageGallery />

        {/* Telif Hakkı ve Sosyal Medya */}
        <footer className="bg-lokanta-ink border-t-4 border-lokanta-red py-10">
          <div className="container mx-auto px-4 text-center">
            <img
              src="/logooo.webp"
              alt="Arafat Köfte Logo"
              className="w-16 h-16 mx-auto mb-4 object-contain"
              loading="lazy"
            />
            <div className="flex justify-center space-x-5 mb-5">
              <a
                href="https://instagram.com/arafatkofte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lokanta-paper/70 hover:text-lokanta-gold transition-colors duration-300"
                aria-label="Instagram sayfamızı ziyaret edin"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/arafatkofte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lokanta-paper/70 hover:text-lokanta-gold transition-colors duration-300"
                aria-label="Facebook sayfamızı ziyaret edin"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            <p className="font-pixel text-lokanta-paper/60 text-sm">
              &copy; {new Date().getFullYear()} Arafat Köfte. {locale === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageLayout />} />
      <Route path="/qr" element={<QrMenuPage />} />
      
      {/* SEO friendly routes - ana sayfanın ilgili bölümlerine yönlendir */}
      <Route path="/menu" element={<HomePageLayout />} />
      <Route path="/menu.html" element={<HomePageLayout />} />
      <Route path="/iletisim" element={<HomePageLayout />} />
      <Route path="/contact.html" element={<HomePageLayout />} />
      <Route path="/galeri" element={<HomePageLayout />} />
      <Route path="/gallery.html" element={<HomePageLayout />} />
      <Route path="/index.html" element={<HomePageLayout />} />

      {/* Catch-all route - tüm diğer URL'ler için 404 sayfası */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
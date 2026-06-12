import React, { useState } from 'react';
import { menuItems, menuCategories } from '../constants';
import { useLanguage } from '../lib/i18n/LanguageContext';

// Sayfa metinleri için bir obje
const pageTexts = {
  mainTitle: { tr: 'Arafat Köfte', en: 'Arafat Köfte' },
  menuSubtitle: { tr: 'Dijital Menü', en: 'Digital Menu' },
  footerText: { tr: 'Arafat Köfte © {year} - Afiyet Olsun!', en: 'Arafat Meatballs © {year} - Enjoy your meal!' },
  address: { tr: 'Hobyar Mahallesi, Kömürcü Bekir Sokak No: 2-D, Eminönü / İstanbul', en: 'Hobyar District, Kömürcü Bekir Street No: 2-D, Eminönü / Istanbul' },
};

const QrMenuPage: React.FC = () => {
  const { locale, setLocale } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>(menuCategories[0].id); // Aktif kategori state'i

  // Seçili kategorideki menü öğelerini filtrele
  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  // Kategori değişince listenin başına dön (uzun listeden kısa listeye geçişte boşlukta kalmamak için)
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Yapışkan üst blok: başlık + dil + kategoriler birlikte */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="px-4 pt-3 pb-2 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-neutral-900 leading-tight">
              {pageTexts.mainTitle[locale as keyof typeof pageTexts.mainTitle]}
            </h1>
            <p className="text-xs text-neutral-400">
              {pageTexts.menuSubtitle[locale as keyof typeof pageTexts.menuSubtitle]}
            </p>
          </div>

          {/* Dil Seçim Butonları */}
          <div className="flex space-x-2">
            <button
              onClick={() => setLocale('tr')}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200
                        ${locale === 'tr'
                            ? 'bg-red-700 text-white'
                            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                        }`}
            >
              TR
            </button>
            <button
              onClick={() => setLocale('en')}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200
                        ${locale === 'en'
                            ? 'bg-red-700 text-white'
                            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                        }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Kategori Seçici — yapışkan blokta, her an erişilebilir */}
        <div className="px-4 pb-3 flex overflow-x-auto gap-2 scrollbar-hide">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm transition-colors duration-200 flex items-center gap-1.5 ${
                activeCategory === category.id
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
              aria-pressed={activeCategory === category.id}
            >
              <span aria-hidden="true">{category.icon}</span>
              <span>{locale === 'tr' ? category.name_tr : category.name_en}</span>
            </button>
          ))}
        </div>
      </header>

      {/* Menü Öğeleri */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border-b border-neutral-100 pb-6"
            >
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100">
                <img
                  src={item.image}
                  alt={locale === 'tr' ? item.name_tr : item.name_en}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex justify-between items-start gap-3">
                  <h3 className="text-base font-medium text-neutral-900">
                    {locale === 'tr' ? item.name_tr : item.name_en}
                  </h3>
                  <span className="text-base font-semibold text-red-700 whitespace-nowrap shrink-0">
                    {item.price}
                  </span>
                </div>
                <div className="w-8 h-0.5 bg-red-700/40 my-2 rounded-full"></div>
                <p className="text-neutral-600 text-[13px] leading-relaxed">
                  {locale === 'tr' ? item.description_tr : item.description_en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Altbilgi */}
      <footer className="bg-neutral-50 py-6 px-4 mt-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center space-y-3">
            <img
              src="/logoo.webp"
              alt="Arafat Köfte Logo"
              className="h-12 w-auto mb-2"
              loading="lazy"
            />
            <p className="text-neutral-500 text-sm">
              {pageTexts.address[locale as keyof typeof pageTexts.address]}
            </p>
            <p className="text-neutral-500 text-sm">
              <a href="tel:+902125116065" className="hover:text-red-700 transition-colors">0 (212) 511 60 65</a>
              {' · '}
              <a href="tel:+902125223390" className="hover:text-red-700 transition-colors">0 (212) 522 33 90</a>
            </p>
            <p className="text-neutral-400 text-xs mt-2">
              {pageTexts.footerText[locale as keyof typeof pageTexts.footerText].replace('{year}', new Date().getFullYear().toString())}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QrMenuPage;

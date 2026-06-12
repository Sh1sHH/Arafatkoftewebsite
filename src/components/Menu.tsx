import React, { useState } from 'react';
import { menuItems, menuCategories } from '../constants';
import { useLanguage } from '../lib/i18n/LanguageContext';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ana-yemekler');
  const { t, locale } = useLanguage();

  // Seçili kategorideki menü öğelerini filtrele
  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  // Menü notları ve altbilgileri
  const menuNotes = {
    tr: '* Tüm ürünlerimiz günlük olarak hazırlanmaktadır.',
    en: '* All our products are prepared daily.'
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-lokanta-cream">
      <div className="container mx-auto px-4">
        {/* Bölüm başlığı */}
        <div className="text-center mb-12">
          <p className="font-pixel text-lokanta-gold text-lg mb-2" aria-hidden="true">★ ★ ★</p>
          <h2 className="font-pixel font-bold uppercase text-4xl md:text-5xl text-lokanta-ink">
            {t('menu_title')}
          </h2>
          <div className="w-24 h-1.5 bg-lokanta-red mx-auto mt-4 shadow-[2px_2px_0_rgba(43,36,32,0.25)]"></div>
          <p className="text-lokanta-ink/70 max-w-2xl mx-auto mt-5">
            {t('menu_description')}
          </p>
        </div>

        {/* Kategori Seçici */}
        <div className="flex flex-wrap justify-center mb-12 gap-3 md:gap-4">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`font-pixel uppercase text-sm md:text-base px-4 md:px-5 py-2.5 border-2 border-lokanta-ink flex items-center gap-2 transition-all duration-150 ${
                activeCategory === category.id
                  ? 'bg-lokanta-red text-lokanta-paper shadow-[2px_2px_0_#2B2420] translate-x-[2px] translate-y-[2px]'
                  : 'bg-lokanta-paper text-lokanta-ink shadow-[4px_4px_0_#2B2420] hover:-translate-y-0.5'
              }`}
            >
              <span className="text-lg" aria-hidden="true">{category.icon}</span>
              <span>{locale === 'tr' ? category.name_tr : category.name_en}</span>
            </button>
          ))}
        </div>

        {/* Menü Öğeleri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-lokanta-paper border-2 border-lokanta-ink shadow-[6px_6px_0_rgba(43,36,32,0.25)] hover:-translate-y-1.5 hover:shadow-[8px_10px_0_rgba(43,36,32,0.3)] transition-all duration-200"
            >
              <div className="relative aspect-square overflow-hidden border-b-2 border-lokanta-ink bg-lokanta-cream">
                <img
                  src={item.image}
                  alt={locale === 'tr' ? item.name_tr : item.name_en}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-lokanta-ink leading-snug">
                    {locale === 'tr' ? item.name_tr : item.name_en}
                  </h3>
                  <span className="font-pixel text-sm bg-lokanta-red text-lokanta-paper px-2.5 py-1 border border-lokanta-ink shadow-[2px_2px_0_rgba(43,36,32,0.35)] whitespace-nowrap shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-lokanta-ink/65 text-sm leading-relaxed">
                  {locale === 'tr' ? item.description_tr : item.description_en}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Menü Altı Not */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-lokanta-ink/55 italic text-sm">
            {menuNotes[locale as keyof typeof menuNotes]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;

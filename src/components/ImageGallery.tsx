import React, { useState } from 'react';
import { useLanguage } from '../lib/i18n/LanguageContext';

// Public klasöründeki görsellerin yolları
const imageUrls = [
  '/dukkan1.webp',
  '/dukkan2.webp',
  '/dukkan3.webp',
  '/dukkan4.webp',
  '/dukkan5.webp',
  '/dukkan6.webp',
  '/dukkan7.webp',
  '/dukkan8.webp',
  '/dukkan9.webp',
  '/dukkan10.webp',
  '/misafir1.webp',
  '/misafir2.webp',
  '/misafir3.webp',
  '/misafir4.webp',
  '/misafir5.webp',
  '/lezzet1.webp',
  '/lezzet2.webp',
  '/lezzet3.webp',
  '/lezzet4.webp',
  '/lezzet5.webp',
  '/lezzet6.webp',
  '/lezzet7.webp',
  '/lezzet8.webp',
  // İsterseniz daha fazla görsel ekleyebilirsiniz
];

// Resimler için alt metinleri ve başlıkları hazırlayalım
const getImagesData = (locale: string) => {
  return imageUrls.map((src) => {
    const fileName = src.substring(src.lastIndexOf('/') + 1).replace(/\.[^/.]+$/, "");
    const isStore = fileName.includes('dukkan');
    
    const title = {
      tr: isStore ? 'Dükkanımız' : 'Misafirlerimiz',
      en: isStore ? 'Our Restaurant' : 'Our Guests'
    };
    
    const description = {
      tr: isStore ? 'Arafat Köfte mekanımızdan görüntüler' : 'Değerli misafirlerimizle anılar',
      en: isStore ? 'Views from our Arafat Köfte restaurant' : 'Memories with our valued guests'
    };
    
    return {
      src,
      alt: `${locale === 'tr' ? title.tr : title.en} - ${fileName}`,
      title: locale === 'tr' ? title.tr : title.en,
      description: locale === 'tr' ? description.tr : description.en
    };
  });
};

const ImageGallery: React.FC = () => {
  const { t, locale } = useLanguage();
  // Dil değiştiğinde resimlerin açıklamalarını güncellemek için
  const imagesData = getImagesData(locale);
  
  // Seçilen resmi takip etmek için state
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    alt: string;
    title: string;
    description: string;
  }>(null);

  // Resme tıklandığında modalı açacak fonksiyon
  const openModal = (image: typeof selectedImage) => {
    setSelectedImage(image);
    // Modali açtığımızda sayfanın kaymasını engellemek için
    document.body.style.overflow = 'hidden';
  };

  // Modalı kapatacak fonksiyon
  const closeModal = () => {
    setSelectedImage(null);
    // Modalı kapattığımızda sayfanın normal scroll davranışını geri getirmek için
    document.body.style.overflow = 'auto';
  };

  // Klavye erişilebilirliği için
  const handleKeyDown = (e: React.KeyboardEvent, image: typeof selectedImage) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(image);
    }
  };

  return (
    <section id="gallery" className="bg-lokanta-cream py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Bölüm başlığı */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-pixel text-lokanta-gold text-lg mb-2" aria-hidden="true">★ ★ ★</p>
          <h2 className="font-pixel font-bold uppercase text-4xl md:text-5xl text-lokanta-ink">
            {t('gallery_title')}
          </h2>
          <div className="w-24 h-1.5 bg-lokanta-red mx-auto mt-4 shadow-[2px_2px_0_rgba(43,36,32,0.25)]"></div>
        </div>

        {/* Fotoğraf baskısı görünümlü masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {imagesData.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid relative bg-lokanta-paper border-2 border-lokanta-ink shadow-[5px_5px_0_rgba(43,36,32,0.25)] p-1.5 group cursor-pointer hover:-translate-y-1 hover:shadow-[7px_8px_0_rgba(43,36,32,0.3)] transition-all duration-200"
              aria-label={image.alt}
              role="button"
              tabIndex={0}
              onClick={() => openModal(image)}
              onKeyDown={(e) => handleKeyDown(e, image)}
            >
              <div className="overflow-hidden border border-lokanta-ink/30">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover block group-hover:scale-105 transition-transform duration-500 will-change-transform"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-7xl w-full max-h-screen flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="absolute top-0 right-0 z-10 bg-black/50 text-white p-2 rounded-full m-4 hover:bg-black/80 transition-colors"
              onClick={closeModal}
              aria-label={t('gallery_close')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            {/* Image container */}
            <div className="overflow-hidden h-full flex items-center justify-center relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery; 
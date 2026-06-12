import React, { useState } from 'react';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { navLinks, BUBBLE_SNOOZE_EVENT } from '../constants';
import { useLanguage } from '../lib/i18n/LanguageContext';

// DENEME ANAHTARI: true = çizgili tente görünümü, false = şeffaf (tentesiz) navbar
export const AWNING_ENABLED = false;

// Esnaf lokantası tente (saçak) renkleri
const AWNING_RED = '#A32125';
const AWNING_CREAM = '#FDF8EC';

// Navigasyon ID'leri ile DOM ID'leri eşleştirmesi
const navToDomMap: Record<string, string> = {
  home: 'hero',
  about: 'info',
  menu: 'menu',
  gallery: 'gallery',
};

const AwningNav: React.FC = () => {
  const { t, locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(navToDomMap[id] || id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Pixel köfte buton — köfte görseli arka plan, yazı üstünde; hover'da öne çıkar
  const KofteButton: React.FC<{ id: string }> = ({ id }) => (
    <button
      onClick={() => handleNavClick(id)}
      onMouseEnter={() => window.dispatchEvent(new Event(BUBBLE_SNOOZE_EVENT))}
      className="relative group hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-lokanta-gold rounded-full transition-transform duration-150"
    >
      <img
        src="/menukofte-nav.png"
        alt=""
        aria-hidden="true"
        className="h-12 md:h-14 w-auto object-contain select-none drop-shadow-[3px_4px_0_rgba(43,36,32,0.35)] group-hover:drop-shadow-[4px_7px_0_rgba(43,36,32,0.45)] group-hover:animate-kofte-flip"
        style={{ imageRendering: 'pixelated' }}
        draggable={false}
      />
      <span
        className="absolute inset-0 flex items-center justify-center font-pixel font-semibold uppercase tracking-wide text-sm md:text-base text-lokanta-paper whitespace-nowrap"
        style={{
          textShadow:
            '1px 1px 0 #2B2420, -1px 1px 0 #2B2420, 1px -1px 0 #2B2420, -1px -1px 0 #2B2420, 2px 2px 0 #2B2420',
        }}
      >
        {t(id)}
      </span>
    </button>
  );

  const langButtonClass = (active: boolean) =>
    `-skew-x-12 border-2 border-lokanta-ink px-2.5 py-1 text-xs font-bold transition-all duration-150 ${
      active
        ? 'bg-lokanta-ink text-lokanta-paper shadow-[2px_2px_0_rgba(43,36,32,0.4)]'
        : 'bg-lokanta-paper text-lokanta-ink shadow-[2px_2px_0_#2B2420] hover:-translate-y-0.5'
    }`;

  return (
    <header
      className={AWNING_ENABLED ? 'sticky top-0 z-50' : 'absolute top-0 inset-x-0 z-50'}
      style={AWNING_ENABLED ? { filter: 'drop-shadow(0 4px 6px rgba(43,36,32,0.2))' } : undefined}
    >
      {/* Çapraz çizgili tente şeridi (tentesiz modda şeffaf) */}
      <div
        className="relative"
        style={
          AWNING_ENABLED
            ? { backgroundImage: `repeating-linear-gradient(105deg, ${AWNING_RED} 0 26px, ${AWNING_CREAM} 26px 52px)` }
            : undefined
        }
      >
        <div className="container mx-auto px-4 h-16 md:h-20 relative flex items-center justify-center">
          {/* Masaüstü navigasyon — pixel ızgara üstünde köfte butonlar */}
          <nav
            className="hidden md:flex relative items-center gap-3 lg:gap-5 px-6 lg:px-8 py-1.5"
            aria-label="Ana navigasyon"
          >
            <img
              src="/izgara-nav.webp"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full select-none drop-shadow-[0_5px_4px_rgba(0,0,0,0.45)]"
              style={{ imageRendering: 'pixelated' }}
              draggable={false}
            />
            {navLinks.map((link) => (
              <KofteButton key={link.id} id={link.id} />
            ))}
          </nav>

          {/* Mobil menü butonu */}
          <button
            className="md:hidden absolute right-4 p-2 bg-lokanta-paper border-2 border-lokanta-ink shadow-[2px_2px_0_#2B2420] text-lokanta-ink"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={isOpen}
          >
            {isOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Saçak (dalgalı kenar) */}
      {AWNING_ENABLED && (
        <div
          className="h-4"
          style={{
            backgroundImage: `radial-gradient(ellipse 14px 16px at 14px 0, ${AWNING_RED} 96%, transparent 100%), radial-gradient(ellipse 14px 16px at 42px 0, ${AWNING_CREAM} 96%, transparent 100%)`,
            backgroundSize: '56px 16px',
            backgroundRepeat: 'repeat-x',
          }}
        />
      )}

      {/* Dil seçimi — tentenin (veya nav şeridinin) hemen altında asılı */}
      <div className={`absolute top-full right-4 md:right-6 mt-1 gap-2 ${isOpen ? 'hidden md:flex' : 'flex'}`}>
        <button onClick={() => setLocale('tr')} className={langButtonClass(locale === 'tr')}>
          <span className="block skew-x-12">TR</span>
        </button>
        <button onClick={() => setLocale('en')} className={langButtonClass(locale === 'en')}>
          <span className="block skew-x-12">EN</span>
        </button>
      </div>

      {/* Mobil menü — yukarıdan kayan kompakt panel */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`md:hidden fixed top-0 inset-x-0 z-50 bg-lokanta-cream border-b-2 border-lokanta-ink transition-transform duration-300 ease-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-3 p-2 bg-lokanta-paper border-2 border-lokanta-ink shadow-[2px_2px_0_#2B2420] text-lokanta-ink"
          aria-label="Menüyü kapat"
        >
          <XIcon size={18} />
        </button>
        <nav className="flex flex-col pt-2" aria-label="Mobil navigasyon">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="w-full text-left px-6 py-2.5 font-pixel font-semibold uppercase tracking-wide text-base text-lokanta-ink border-b border-lokanta-ink/15 active:bg-lokanta-red active:text-lokanta-paper transition-colors"
            >
              {t(link.id)}
            </button>
          ))}
        </nav>
        <div className="flex justify-end gap-2 px-6 py-3">
          <button onClick={() => setLocale('tr')} className={langButtonClass(locale === 'tr')}>
            <span className="block skew-x-12">TR</span>
          </button>
          <button onClick={() => setLocale('en')} className={langButtonClass(locale === 'en')}>
            <span className="block skew-x-12">EN</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AwningNav;

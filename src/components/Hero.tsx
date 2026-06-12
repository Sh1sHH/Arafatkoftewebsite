import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, ChevronDown } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';
import { menuItems, BUBBLE_SNOOZE_EVENT } from '../constants';
import { AWNING_ENABLED } from './AwningNav';

// Konuşma balonu zamanlaması (ms)
const BUBBLE_FIRST_DELAY = 2500;
const BUBBLE_VISIBLE_FOR = 4000;
const BUBBLE_INTERVAL = 11000;
const BUBBLE_SNOOZE = 30000;

const Hero: React.FC = () => {
  const { t, locale } = useLanguage();
  const [showBubble, setShowBubble] = useState(false);
  const snoozedUntil = useRef(0);

  useEffect(() => {
    let hideTimer: number | undefined;
    const popBubble = () => {
      if (Date.now() < snoozedUntil.current) return;
      setShowBubble(true);
      hideTimer = window.setTimeout(() => setShowBubble(false), BUBBLE_VISIBLE_FOR);
    };
    const snooze = () => {
      snoozedUntil.current = Date.now() + BUBBLE_SNOOZE;
      setShowBubble(false);
    };
    const firstTimer = window.setTimeout(popBubble, BUBBLE_FIRST_DELAY);
    const interval = window.setInterval(popBubble, BUBBLE_INTERVAL);
    window.addEventListener(BUBBLE_SNOOZE_EVENT, snooze);
    return () => {
      window.clearTimeout(firstTimer);
      window.clearInterval(interval);
      window.clearTimeout(hideTimer);
      window.removeEventListener(BUBBLE_SNOOZE_EVENT, snooze);
    };
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('info');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Marquee şeridi için menüden ürün isimleri (gramaj parantezleri atılır)
  const tickerItems = menuItems
    .map((item) => (locale === 'tr' ? item.name_tr : item.name_en).replace(/\s*\(.*?\)/g, ''))
    .filter((name, index, arr) => arr.indexOf(name) === index)
    .slice(0, 14);

  return (
    <section
      id="hero"
      className={`relative flex flex-col overflow-hidden bg-lokanta-ink ${
        AWNING_ENABLED
          ? 'min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)]'
          : 'min-h-screen'
      }`}
    >
      {/* Arka plan: dükkanın pixel-art önden görünümü */}
      <img
        src="/herodukkan.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center select-none"
        draggable={false}
      />

      {/* Okunabilirlik için karartma: solda yoğun, sağda dükkan görünür */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent"
        aria-hidden="true"
      />

      {/* Dükkanın içinden kapıya seslenen pixel konuşma balonu */}
      {showBubble && (
        <div
          className="hidden md:block absolute top-[42%] left-1/2 -translate-x-[63%] z-[5] pointer-events-none"
          aria-hidden="true"
        >
          <div className="animate-bubble-pop origin-bottom-right">
            <div className="relative bg-lokanta-paper border-2 border-lokanta-ink px-3 py-2 shadow-[3px_3px_0_rgba(0,0,0,0.45)]">
              <p className="font-pixel font-medium text-sm text-lokanta-ink whitespace-nowrap">
                {t('hero_bubble')}
              </p>
              {/* Kapıya doğru inen pixel basamaklı kuyruk (sağdan konuşuluyor) */}
              <svg
                className="absolute right-6 top-full -mt-[2px]"
                width="21"
                height="18"
                viewBox="0 0 7 6"
                shapeRendering="crispEdges"
              >
                <rect x="6" y="0" width="1" height="6" fill="#2B2420" />
                <rect x="1" y="0" width="5" height="1" fill="#FDF8EC" />
                <rect x="2" y="1" width="4" height="1" fill="#FDF8EC" />
                <rect x="3" y="2" width="3" height="1" fill="#FDF8EC" />
                <rect x="4" y="3" width="2" height="1" fill="#FDF8EC" />
                <rect x="5" y="4" width="1" height="1" fill="#FDF8EC" />
                <rect x="0" y="0" width="1" height="1" fill="#2B2420" />
                <rect x="1" y="1" width="1" height="1" fill="#2B2420" />
                <rect x="2" y="2" width="1" height="1" fill="#2B2420" />
                <rect x="3" y="3" width="1" height="1" fill="#2B2420" />
                <rect x="4" y="4" width="1" height="1" fill="#2B2420" />
                <rect x="5" y="5" width="1" height="1" fill="#2B2420" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Ana içerik */}
      <div className="relative z-10 flex-1 container mx-auto px-6 sm:px-10 lg:px-16 flex items-center py-14 md:py-16">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
          {/* Görsel tabelada zaten yazıyor; başlık sadece ekran okuyucu ve Google için */}
          <h1 className="sr-only">Arafat Köfte — 1986'dan beri Eminönü, İstanbul</h1>

          <div className="animate-fade-up flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
            <button
              onClick={scrollToMenu}
              className="bg-lokanta-red text-lokanta-paper font-pixel font-semibold uppercase tracking-wide text-base md:text-lg px-8 py-4 border-2 border-lokanta-paper shadow-[5px_5px_0_rgba(0,0,0,0.55)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.55)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
            >
              {t('discover_menu')}
            </button>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Arafat%20K%C3%B6fte%20Emin%C3%B6n%C3%BC%20%C4%B0stanbul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black/30 backdrop-blur-sm text-lokanta-paper font-pixel font-semibold uppercase tracking-wide text-base md:text-lg px-8 py-4 border-2 border-lokanta-paper shadow-[5px_5px_0_rgba(0,0,0,0.4)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.4)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
            >
              <MapPin className="w-4 h-4" aria-hidden="true" />
              {t('hero_directions')}
            </a>
          </div>

          {/* Bilgi plaketleri */}
          <div className="animate-fade-up-1 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span className="flex items-center gap-2.5 bg-black/50 backdrop-blur-sm border-2 border-lokanta-paper/35 px-4 py-2.5 shadow-[3px_3px_0_rgba(0,0,0,0.4)]">
              <Clock className="w-5 h-5 text-lokanta-gold shrink-0" aria-hidden="true" />
              <span className="font-pixel text-base md:text-lg text-lokanta-paper whitespace-nowrap">
                {t('hero_hours_short')}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Aşağı kaydırma oku */}
      <div className="relative z-10 hidden md:flex justify-center pb-4">
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-lokanta-paper/70 hover:text-lokanta-gold transition-colors"
          aria-label={t('discover_story')}
        >
          <ChevronDown className="w-7 h-7" />
        </button>
      </div>

      {/* Menü marquee şeridi */}
      <div className="relative z-10 bg-lokanta-red border-t-2 border-lokanta-ink overflow-hidden py-3" aria-hidden="true">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex items-center">
              {tickerItems.map((name) => (
                <span
                  key={`${copy}-${name}`}
                  className="flex items-center text-lokanta-paper font-pixel font-medium uppercase tracking-[0.15em] text-base"
                >
                  <span className="px-6">{name}</span>
                  <span className="text-lokanta-gold">★</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

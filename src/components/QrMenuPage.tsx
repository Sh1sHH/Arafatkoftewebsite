import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Clock, X } from 'lucide-react';
import { menuItems, menuCategories } from '../constants';
import { useLanguage } from '../lib/i18n/LanguageContext';

type MenuItem = (typeof menuItems)[number];

// Sayfa metinleri için bir obje
const pageTexts = {
  menuSubtitle: { tr: 'Dijital Menü', en: 'Digital Menu' },
  dailyNote: { tr: 'Tüm ürünlerimiz günlük olarak hazırlanmaktadır.', en: 'All our products are prepared daily.' },
  footerText: { tr: 'Arafat Köfte © {year} - Afiyet Olsun!', en: 'Arafat Köfte © {year} - Enjoy your meal!' },
  address: { tr: 'Hobyar Mahallesi, Kömürcü Bekir Sokak No: 2-D, Eminönü / İstanbul', en: 'Hobyar District, Kömürcü Bekir Street No: 2-D, Eminönü / Istanbul' },
  hours: { tr: 'Pazartesi - Cumartesi 08:00 - 19:00 · Pazar kapalı', en: 'Monday - Saturday 08:00 - 19:00 · Closed on Sundays' },
  close: { tr: 'Kapat', en: 'Close' },
  categories: { tr: 'Kategoriler', en: 'Categories' },
};

// Görseli olmayan/küçük görselin bir şey anlatmadığı kategoriler sade liste olarak gösterilir
const COMPACT_CATEGORIES = new Set(['icecekler']);

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Arafat+K%C3%B6fte+Emin%C3%B6n%C3%BC';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const QrMenuPage: React.FC = () => {
  const { locale, setLocale } = useLanguage();
  const tx = (key: keyof typeof pageTexts) => pageTexts[key][locale as 'tr' | 'en'];
  const name = (o: { name_tr: string; name_en: string }) => (locale === 'tr' ? o.name_tr : o.name_en);

  const [activeCategory, setActiveCategory] = useState<string>(menuCategories[0].id);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const headerRef = useRef<HTMLElement>(null);
  const chipBarRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  // Chip'e tıklanınca yapılan kaydırma sırasında scroll-spy'ı sustur (aradaki kategoriler yanıp sönmesin)
  const spyLockUntil = useRef(0);

  // Yapışkan başlığın yüksekliğini bölüm başlıklarının scroll-margin'ına aktar
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const update = () =>
      document.documentElement.style.setProperty('--qr-header-h', `${header.offsetHeight}px`);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  // Scroll-spy: başlığın hemen altındaki bölüm aktif kategoridir
  useEffect(() => {
    const onScroll = () => {
      if (Date.now() < spyLockUntil.current) return;
      const offset = (headerRef.current?.offsetHeight ?? 0) + 16;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = menuCategories[0].id;
      if (atBottom) {
        current = menuCategories[menuCategories.length - 1].id;
      } else {
        for (const category of menuCategories) {
          const section = document.getElementById(`kategori-${category.id}`);
          if (section && section.getBoundingClientRect().top <= offset) current = category.id;
        }
      }
      setActiveCategory(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Aktif chip'i yatay şeritte ortala
  useEffect(() => {
    const bar = chipBarRef.current;
    const chip = bar?.querySelector<HTMLElement>(`[data-category="${activeCategory}"]`);
    if (!bar || !chip) return;
    bar.scrollTo({
      left: chip.offsetLeft - (bar.clientWidth - chip.offsetWidth) / 2,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  }, [activeCategory]);

  const handleCategoryClick = (categoryId: string) => {
    const section = document.getElementById(`kategori-${categoryId}`);
    if (!section) return;
    setActiveCategory(categoryId);
    spyLockUntil.current = Date.now() + 800;
    section.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  };

  // Ürün detayı: native <dialog> (odak tuzağı ve Esc ile kapanma tarayıcıdan gelir)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selectedItem && !dialog.open) dialog.showModal();
    else if (!selectedItem && dialog.open) dialog.close();
    // Panel açıkken arkadaki sayfa kaymasın
    document.documentElement.style.overflow = selectedItem ? 'hidden' : '';
  }, [selectedItem]);

  // Esc/geri tuşuyla tarayıcı dialog'u kendisi kapattığında state'i eşitle
  // (React 18'in onClose'u <dialog> için güvenilir tetiklenmiyor)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onNativeClose = () => setSelectedItem(null);
    dialog.addEventListener('close', onNativeClose);
    return () => {
      dialog.removeEventListener('close', onNativeClose);
      document.documentElement.style.overflow = '';
    };
  }, []);

  const closeDialog = useCallback(() => setSelectedItem(null), []);

  return (
    <div className="min-h-screen bg-lokanta-cream text-lokanta-ink">
      {/* Yapışkan üst blok: başlık + dil + kategoriler birlikte */}
      <header ref={headerRef} className="sticky top-0 z-20 bg-lokanta-paper border-b-2 border-lokanta-ink">
        <div className="mx-auto max-w-3xl px-4 pt-3 pb-2 flex justify-between items-center gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <img src="/logoo.webp" alt="" className="h-9 w-9 object-contain shrink-0" />
            <div className="min-w-0">
              <h1 className="font-extrabold text-lg tracking-tight leading-tight truncate">Arafat Köfte</h1>
              <p className="text-xs text-lokanta-ink/60">{tx('menuSubtitle')}</p>
            </div>
          </div>

          {/* Dil seçimi: tek kontrol, 44px dokunma alanı */}
          <div role="group" aria-label="Dil / Language" className="flex shrink-0 border-2 border-lokanta-ink">
            {(['tr', 'en'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                aria-pressed={locale === lang}
                lang={lang}
                className={`font-pixel min-w-[44px] h-10 px-2 text-sm transition-colors ${
                  locale === lang ? 'bg-lokanta-red text-lokanta-paper' : 'bg-lokanta-paper text-lokanta-ink'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Kategori şeridi — tıklayınca ilgili bölüme kayar, kaydırınca aktif olan işaretlenir */}
        <nav aria-label={tx('categories')} className="mx-auto max-w-3xl">
          <div ref={chipBarRef} className="px-4 pb-3 flex overflow-x-auto gap-2 scrollbar-hide">
            {menuCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  data-category={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`h-10 px-3.5 whitespace-nowrap text-sm font-medium border-2 border-lokanta-ink flex items-center gap-1.5 transition-colors ${
                    isActive
                      ? 'bg-lokanta-red text-lokanta-paper'
                      : 'bg-lokanta-paper text-lokanta-ink'
                  }`}
                >
                  <span aria-hidden="true">{category.icon}</span>
                  <span>{name(category)}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Tüm menü tek sayfada, kategori bölümleri halinde */}
      <main className="mx-auto max-w-3xl px-4 pb-6">
        {menuCategories.map((category) => {
          const items = menuItems.filter((item) => item.category === category.id);
          if (items.length === 0) return null;
          const compact = COMPACT_CATEGORIES.has(category.id);

          return (
            <section
              key={category.id}
              id={`kategori-${category.id}`}
              aria-labelledby={`baslik-${category.id}`}
              className="pt-6"
              style={{ scrollMarginTop: 'var(--qr-header-h, 7rem)' }}
            >
              <h2
                id={`baslik-${category.id}`}
                className="font-extrabold text-xl tracking-tight flex items-center gap-2 mb-3"
              >
                <span aria-hidden="true">{category.icon}</span>
                {name(category)}
              </h2>

              {compact ? (
                <ul className="bg-lokanta-paper border-2 border-lokanta-ink divide-y divide-lokanta-ink/10">
                  {items.map((item) => (
                    <li key={item.id} className="flex items-baseline gap-3 px-4 py-3">
                      <span className="font-medium">{name(item)}</span>
                      <span aria-hidden="true" className="flex-1 border-b border-dotted border-lokanta-ink/30 translate-y-[-4px]" />
                      <span className="font-extrabold text-lokanta-red tabular-nums whitespace-nowrap">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => setSelectedItem(item)}
                        aria-haspopup="dialog"
                        className="w-full h-full text-left flex gap-3 p-2.5 bg-lokanta-paper border-2 border-lokanta-ink shadow-[3px_3px_0_rgba(43,36,32,0.25)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-transform"
                      >
                        <div className="w-24 h-24 overflow-hidden shrink-0 bg-lokanta-cream border border-lokanta-ink/20">
                          <img
                            src={item.image}
                            alt=""
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col">
                          <h3 className="font-semibold leading-snug">{name(item)}</h3>
                          <p className="text-lokanta-ink/65 text-[13px] leading-relaxed mt-1 line-clamp-2">
                            {locale === 'tr' ? item.description_tr : item.description_en}
                          </p>
                          <span className="font-extrabold text-lg text-lokanta-red tabular-nums mt-auto pt-1">
                            {item.price}
                          </span>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}

        <p className="text-center text-lokanta-ink/55 italic text-sm mt-8">{tx('dailyNote')}</p>
      </main>

      {/* Altbilgi */}
      <footer className="bg-lokanta-ink text-lokanta-paper/80 border-t-4 border-lokanta-red py-8 px-4 mt-6">
        <div className="mx-auto max-w-3xl flex flex-col items-center text-center gap-3 text-sm">
          <img src="/logooo.webp" alt="Arafat Köfte" className="h-12 w-12 object-contain" loading="lazy" />
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 hover:text-lokanta-gold underline-offset-2 hover:underline"
          >
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
            <span>{tx('address')}</span>
          </a>
          <p className="flex items-start gap-2">
            <Clock className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
            <span>{tx('hours')}</span>
          </p>
          <p className="flex items-center gap-2 flex-wrap justify-center">
            <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
            <a href="tel:+902125116065" className="py-2 hover:text-lokanta-gold">0 (212) 511 60 65</a>
            <span aria-hidden="true">·</span>
            <a href="tel:+902125223390" className="py-2 hover:text-lokanta-gold">0 (212) 522 33 90</a>
          </p>
          <p className="text-lokanta-paper/50 text-xs mt-2">
            {tx('footerText').replace('{year}', new Date().getFullYear().toString())}
          </p>
        </div>
      </footer>

      {/* Ürün detayı: her ekranda ortada kart */}
      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDialog();
        }}
        aria-labelledby="urun-detay-baslik"
        className="p-0 m-auto w-[calc(100%-2rem)] max-w-md max-h-[85vh] supports-[height:100dvh]:max-h-[85dvh] overflow-hidden bg-lokanta-paper text-lokanta-ink border-2 border-lokanta-ink shadow-[6px_6px_0_rgba(43,36,32,0.35)] backdrop:bg-lokanta-ink/60"
      >
        {selectedItem && (
          // Görsel sabit yükseklikte (aspect-ratio'ya güvenmeden), metin her zaman görünür kalsın.
          // dvh: mobil Chrome'da adres çubuğu açıkken de görünür alana sığsın
          <div className="flex flex-col max-h-[85vh] supports-[height:100dvh]:max-h-[85dvh]">
            <div className="relative bg-lokanta-cream shrink-0">
              <img
                src={selectedItem.image}
                alt={name(selectedItem)}
                className="block w-full h-72 max-h-[45vh] object-cover"
              />
              <button
                onClick={closeDialog}
                aria-label={tx('close')}
                className="absolute top-2 right-2 w-11 h-11 flex items-center justify-center bg-lokanta-paper border-2 border-lokanta-ink"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <div className="flex items-start justify-between gap-3">
                <h3 id="urun-detay-baslik" className="text-xl font-bold leading-snug">
                  {name(selectedItem)}
                </h3>
                <span className="font-extrabold text-xl text-lokanta-red tabular-nums whitespace-nowrap">
                  {selectedItem.price}
                </span>
              </div>
              <p className="text-lokanta-ink/70 leading-relaxed mt-2">
                {locale === 'tr' ? selectedItem.description_tr : selectedItem.description_en}
              </p>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
};

export default QrMenuPage;

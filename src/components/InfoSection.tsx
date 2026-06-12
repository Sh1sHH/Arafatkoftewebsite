import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

const InfoSection: React.FC = () => {
  const { t } = useLanguage();

  const handleMenuScroll = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // İletişim plaket kartları
  const contactCards = [
    {
      icon: MapPin,
      label: t('address_label'),
      content: t('address_content'),
    },
    {
      icon: Phone,
      label: t('phone_label'),
      content: '0 (212) 511 60 65\n0 (212) 522 33 90',
      href: 'tel:+902125116065',
    },
    {
      icon: Mail,
      label: t('email_label'),
      content: 'arafatkofte@gmail.com',
      href: 'mailto:arafatkofte@gmail.com',
    },
    {
      icon: Clock,
      label: t('hours_label'),
      content: t('hours_content'),
    },
  ];

  return (
    <section id="info" className="py-16 md:py-24 bg-lokanta-paper">
      <div className="container mx-auto px-4">
        {/* Hakkımızda: metin + fotoğraf */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 md:mb-28">
          <div>
            <p className="font-pixel text-lokanta-gold text-lg mb-2" aria-hidden="true">★ ★ ★</p>
            <h2 className="font-pixel font-bold uppercase text-4xl md:text-5xl text-lokanta-ink mb-4">
              {t('info_welcome_title')}
            </h2>
            <div className="w-24 h-1.5 bg-lokanta-red mb-6 shadow-[2px_2px_0_rgba(43,36,32,0.25)]"></div>
            <p className="text-lokanta-ink/80 mb-4 leading-relaxed text-lg">
              {t('info_welcome_text1')}
            </p>
            <p className="text-lokanta-ink/60 mb-8 leading-relaxed text-sm">
              {t('info_welcome_text2')}
            </p>
            <button
              onClick={handleMenuScroll}
              className="bg-lokanta-red text-lokanta-paper font-pixel font-semibold uppercase tracking-wide text-base px-8 py-4 border-2 border-lokanta-ink shadow-[5px_5px_0_#2B2420] hover:shadow-[2px_2px_0_#2B2420] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
              aria-label={t('discover_menu')}
            >
              {t('discover_menu')}
            </button>
          </div>

          {/* Fotoğraf: çerçeveli, hafif eğik */}
          <div className="relative">
            <div className="bg-lokanta-paper border-2 border-lokanta-ink shadow-[8px_8px_0_rgba(43,36,32,0.25)] p-2 -rotate-1 hover:rotate-0 transition-transform duration-300">
              <img
                src="/dukkan2.webp"
                alt="Arafat Köfte dükkan görünümü"
                className="w-full h-72 md:h-96 object-cover border border-lokanta-ink/30"
                loading="lazy"
              />
            </div>
            <span
              className="absolute -bottom-4 -left-3 rotate-2 bg-lokanta-ink text-lokanta-paper font-pixel text-sm px-4 py-2 shadow-[3px_3px_0_rgba(163,33,37,0.6)]"
              aria-hidden="true"
            >
              EST. 1986 — EMİNÖNÜ
            </span>
          </div>
        </div>

        {/* İletişim */}
        <div className="text-center mb-12">
          <p className="font-pixel text-lokanta-gold text-lg mb-2" aria-hidden="true">★ ★ ★</p>
          <h2 className="font-pixel font-bold uppercase text-4xl md:text-5xl text-lokanta-ink">
            {t('contact_title')}
          </h2>
          <div className="w-24 h-1.5 bg-lokanta-red mx-auto mt-4 shadow-[2px_2px_0_rgba(43,36,32,0.25)]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Plaket kartları */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 content-start">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const inner = (
                <>
                  <span className="inline-flex items-center justify-center w-11 h-11 bg-lokanta-red border-2 border-lokanta-ink shadow-[2px_2px_0_rgba(43,36,32,0.35)] mb-3">
                    <Icon className="w-5 h-5 text-lokanta-paper" aria-hidden="true" />
                  </span>
                  <p className="font-pixel uppercase text-base text-lokanta-ink mb-1.5">{card.label}</p>
                  <p className="text-lokanta-ink/70 text-sm leading-relaxed whitespace-pre-line">
                    {card.content}
                  </p>
                </>
              );
              const cardClass =
                'block bg-lokanta-cream border-2 border-lokanta-ink shadow-[5px_5px_0_rgba(43,36,32,0.25)] p-5 transition-all duration-150';
              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  className={`${cardClass} hover:-translate-y-1 hover:shadow-[7px_8px_0_rgba(43,36,32,0.3)]`}
                >
                  {inner}
                </a>
              ) : (
                <div key={card.label} className={cardClass}>
                  {inner}
                </div>
              );
            })}
          </div>

          {/* Harita */}
          <div className="bg-lokanta-cream border-2 border-lokanta-ink shadow-[8px_8px_0_rgba(43,36,32,0.25)] p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.39307550881!2d28.97091037642534!3d41.0166555189084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9ea54c254bd%3A0xc653a019c7dd51ab!2sArafat%20K%C3%B6fte!5e0!3m2!1str!2str!4v1749174978637!5m2!1str!2str"
              width="100%"
              height="100%"
              className="min-h-[320px] lg:min-h-full border border-lokanta-ink/30"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Arafat Köfte Konumu"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

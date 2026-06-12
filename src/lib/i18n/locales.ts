export type Locale = 'tr' | 'en';

export type Translations = {
  [key: string]: string;
};

export const translations: Record<Locale, Translations> = {
  tr: {
    // Genel
    welcome: 'Hoş Geldiniz',
    home: 'Ana Sayfa',
    about: 'Bilgi',
    contact: 'İletişim',
    gallery: 'Galeri',
    services: 'Hizmetlerimiz',
    language: 'Dil',
    turkish: 'Türkçe',
    english: 'İngilizce',
    menu: 'Menü',
    
    // Hero
    slogan: '1986\'dan beri değişmeyen lezzet.',
    discover_story: 'Hikayemizi Keşfedin',
    hero_est: 'EST. 1986 — EMİNÖNÜ, İSTANBUL',
    hero_directions: 'Yol Tarifi',
    hero_hours_short: 'Pzt – Cmt · 08:00 – 19:00',
    hero_bubble: 'Köfteleri çevirmeyi unutma!',
    hero_stamp: 'Günlük Hazırlanır',
    hero_badge: 'ARAFAT KÖFTE • 1986\'DAN BERİ • EMİNÖNÜ • ',
    hero_photo_alt: 'Arafat Köfte - ızgara köfte porsiyonu',
    
    // Info Section
    info_welcome_title: 'Arafat Köfte\'ye Hoş Geldiniz',
    info_welcome_text1: '1986\'dan beri en lezzetli köfteleri sizlerle buluşturuyoruz. Geleneksel tariflerimiz, kaliteli malzemelerimiz ve kuşaktan kuşağa aktarılan tecrübemizle, aile sıcaklığında bir ortamda damak zevkinize hitap ediyoruz.',
    info_welcome_text2: 'Misyonumuz, her bir misafirimize unutulmaz bir köfte deneyimi sunmak ve Arafat Köfte adını kalite ve lezzetle özdeşleştirmektir.',
    discover_menu: 'Menümüzü Keşfedin',
    
    // Contact
    contact_title: 'Bize Ulaşın',
    address_label: 'Adres',
    address_content: 'Hobyar Mahallesi, Kömürcü Bekir Sokak No: 2-D (Nimet Abla Piyangocusu karşısı ara sokak) Eminönü / İstanbul',
    phone_label: 'Telefon',
    email_label: 'E-posta',
    hours_label: 'Çalışma Saatleri',
    hours_content: 'Pazartesi - Cumartesi: 08:00 - 19:00\nPazar günleri kapalıyız',
    
    // Menu
    menu_title: 'Menümüz',
    menu_description: 'En sevilen lezzetlerimizi keşfedin',
    category_main: 'Ana Yemekler',
    category_soups: 'Çorbalar',
    category_salads: 'Salatalar',
    category_desserts: 'Tatlılar',
    category_beverages: 'İçecekler',
    
    // Gallery
    gallery_title: 'Galeri',
    gallery_description: 'Mekanımızdan ve özel anlardan kareler',
    gallery_close: 'Kapat'
  },
  en: {
    // Genel
    welcome: 'Welcome',
    home: 'Home',
    about: 'About Us',
    contact: 'Contact',
    gallery: 'Gallery',
    services: 'Services',
    language: 'Language',
    turkish: 'Turkish',
    english: 'English',
    menu: 'Menu',
    
    // Hero
    slogan: 'Unchanging taste since 1986.',
    discover_story: 'Discover Our Story',
    hero_est: 'EST. 1986 — EMİNÖNÜ, ISTANBUL',
    hero_directions: 'Get Directions',
    hero_hours_short: 'Mon – Sat · 08:00 – 19:00',
    hero_bubble: "Don't forget to flip the köfte!",
    hero_stamp: 'Made Fresh Daily',
    hero_badge: 'ARAFAT KÖFTE • SINCE 1986 • EMİNÖNÜ • ',
    hero_photo_alt: 'Arafat Köfte - grilled meatball plate',
    
    // Info Section
    info_welcome_title: 'Welcome to Arafat Köfte',
    info_welcome_text1: 'Since 1986, we have been bringing you the most delicious meatballs. With our traditional recipes, quality ingredients, and experience passed down from generation to generation, we cater to your taste in a warm family atmosphere.',
    info_welcome_text2: 'Our mission is to provide an unforgettable meatball experience to each of our guests and associate the name Arafat Köfte with quality and taste.',
    discover_menu: 'Discover Our Menu',
    
    // Contact
    contact_title: 'Contact Us',
    address_label: 'Address',
    address_content: 'Hobyar District, Kömürcü Bekir Street No: 2-D (Side street across from Nimet Abla Lottery) Eminönü / Istanbul',
    phone_label: 'Phone',
    email_label: 'Email',
    hours_label: 'Working Hours',
    hours_content: 'Monday - Saturday: 08:00 - 19:00\nClosed on Sundays',
    
    // Menu
    menu_title: 'Our Menu',
    menu_description: 'Discover our most popular dishes',
    category_main: 'Main Dishes',
    category_soups: 'Soups',
    category_salads: 'Salads',
    category_desserts: 'Desserts',
    category_beverages: 'Beverages',
    
    // Gallery
    gallery_title: 'Gallery',
    gallery_description: 'Images from our restaurant and special moments',
    gallery_close: 'Close'
  }
}; 
export const navLinks = [
  { id: "home", title: "Ana Sayfa" },
  { id: "about", title: "Bilgi" },
  { id: "menu", title: "Menü" },
  { id: "gallery", title: "Galeri" },
];

// Restoranın müzik koleksiyonu
export const musicList = [
  {
    id: "music-1",
    artist: "Ferdi Özbeğen",
    title: "Dönsen Bile",
    albumArt: "/album.png",
    audioSrc: "/musics/Donsen_Bile.mp3",
    isSong: true
  }
];

export const menuCategories = [
  {
    id: "ana-yemekler",
    name_tr: "Ana Yemekler",
    name_en: "Main Dishes",
    icon: "🍖"
  },
  {
    id: "corbalar",
    name_tr: "Çorbalar",
    name_en: "Soups",
    icon: "🍲"
  },
  {
    id: "salatalar",
    name_tr: "Salatalar",
    name_en: "Salads",
    icon: "🥗"
  },
  {
    id: "tatlilar",
    name_tr: "Tatlılar",
    name_en: "Desserts",
    icon: "🍰"
  },
  {
    id: "icecekler",
    name_tr: "İçecekler",
    name_en: "Beverages",
    icon: "🥤"
  }
];

export const menuItems = [
  // Çorbalar
  {
    id: "ezogelin-corbasi",
    name_tr: "Ezogelin Çorbası",
    description_tr: "Geleneksel usulde hazırlanmış, besleyici ve doyurucu bir başlangıç.",
    name_en: "Ezogelin Soup",
    description_en: "A nutritious and satisfying starter prepared in the traditional way.",
    image: "/corba.webp",
    price: "100 ₺",
    category: "corbalar"
  },
  {
    id: "tavuksuyu-corbasi",
    name_tr: "Tavuk Suyu Çorbası",
    description_tr: "Tavuğun şifası ve lezzeti bu çorbada buluşuyor.",
    name_en: "Chicken Soup",
    description_en: "The healing and flavor of chicken come together in this soup.",
    image: "/tavuksuyu.webp",
    price: "100 ₺",
    category: "corbalar"
  },
  // Ana Yemekler
  {
    id: "kofte-porsiyon",
    name_tr: "Köfte Porsiyon (160 gr)",
    description_tr: "1986'dan beri değişmeyen lezzetimiz. Yanında pilav, salata ve közlenmiş domates ile servis edilir.",
    name_en: "Meatballs Portion (160 gr)",
    description_en: "Our unchanging taste since 1986. Served with rice, salad, and grilled tomatoes.",
    image: "/kofte.webp",
    price: "400 ₺",
    category: "ana-yemekler"
  },
  {
    id: "ekmek-arasi",
    name_tr: "Ekmek Arası (100 gr)",
    description_tr: "Hızlı ve lezzetli bir öğün için mükemmel seçim.",
    name_en: "Meatballs Sandwich (100 gr)",
    description_en: "The perfect choice for a quick and delicious meal.",
    image: "/ekmekarasi.webp",
    price: "300 ₺",
    category: "ana-yemekler"
  },
  {
    id: "tavuk-sis",
    name_tr: "Tavuk Şiş (200 gr)",
    description_tr: "Özel marine edilmiş, sulu ve yumuşacık tavuk şiş.",
    name_en: "Chicken Skewer (200 gr)",
    description_en: "Specially marinated, juicy, and tender chicken skewer.",
    image: "/tavuksis.webp",
    price: "400 ₺",
    category: "ana-yemekler"
  },
  {
    id: "kuzu-sis",
    name_tr: "Kuzu Şiş (180 gr)",
    description_tr: "Lokum gibi pişirilmiş, marine edilmiş kuzu etleri.",
    name_en: "Lamb Skewer (180 gr)",
    description_en: "Marinated lamb meat cooked to perfection.",
    image: "/kuzusis.webp",
    price: "600 ₺",
    category: "ana-yemekler"
  },
  {
    id: "kofte-tavuk",
    name_tr: "Köfte Tavuk (180 gr)",
    description_tr: "Hem köfte hem tavuk lezzetini bir arada isteyenlere özel.",
    name_en: "Kofte Chicken (180 gr)",
    description_en: "Special for those who want both meatball and chicken flavors together.",
    image: "/koftetavuk.webp",
    price: "400 ₺",
    category: "ana-yemekler"
  },
  {
    id: "tam-karisik",
    name_tr: "Tam Karışık (270 gr)",
    description_tr: "Köfte, kuzu şiş ve tavuk şişin doyurucu birleşimi.",
    name_en: "Mixed Grill (270 gr)",
    description_en: "A satisfying combination of meatballs, lamb skewers, and chicken skewers.",
    image: "/tamkarisik.webp",
    price: "700 ₺",
    category: "ana-yemekler"
  },
  {
    id: "kurufasulye",
    name_tr: "Kuru Fasulye",
    description_tr: "Geleneksel ev yemeği lezzeti.",
    name_en: "White Beans stewed in sauce",
    description_en: "Traditional homemade meal flavor.",
    image: "/kurufasulye.webp",
    price: "160 ₺",
    category: "ana-yemekler"
  },
  {
    id: "pilav",
    name_tr: "Pilav",
    description_tr: "Tereyağlı, tane tane dökülen lezzetli pilav.",
    name_en: "Traditional buttered rice",
    description_en: "Delicious rice pilaf, perfectly cooked with butter.",
    image: "/pilav.webp",
    price: "120 ₺",
    category: "ana-yemekler"
  },
  // Salatalar
  {
    id: "piyaz",
    name_tr: "Piyaz",
    description_tr: "Köftenin en iyi eşlikçisi, bol tahinli ve sirkeli.",
    name_en: "White Bean Salad",
    description_en: "The best companion for meatballs, with plenty of tahini and vinegar.",
    image: "/piyaz.webp",
    price: "140 ₺",
    category: "salatalar"
  },
  {
    id: "coban-salata",
    name_tr: "Çoban Salata",
    description_tr: "Taptaze sebzelerle hazırlanmış ferahlatıcı bir lezzet.",
    name_en: "Shepherd's Salad",
    description_en: "A refreshing flavor prepared with fresh vegetables.",
    image: "/coban.webp",
    price: "140 ₺",
    category: "salatalar"
  },
  {
    id: "cacik",
    name_tr: "Cacık",
    description_tr: "Yoğurt ve salatalığın ferahlatıcı uyumu.",
    name_en: "Yogurt with chopped cucumber",
    description_en: "The refreshing harmony of yogurt and cucumber.",
    image: "/cacik.webp",
    price: "120 ₺",
    category: "salatalar"
  },
  // Tatlılar
  {
    id: "irmik-helvasi",
    name_tr: "İrmik Helvası",
    description_tr: "Sıcak ve lezzetli, geleneksel irmik tatlısı.",
    name_en: "Traditional semolina dessert",
    description_en: "Warm and delicious, traditional semolina dessert.",
    image: "/helva.webp",
    price: "120 ₺",
    category: "tatlilar"
  },
  // İçecekler
  {
    id: "kola",
    name_tr: "Kola (300 ml)",
    description_tr: "Serinletici ve klasik bir tercih.",
    name_en: "Cola (300 ml)",
    description_en: "A refreshing and classic choice.",
    image: "/cola.webp",
    price: "80 ₺",
    category: "icecekler"
  },
  {
    id: "fanta",
    name_tr: "Fanta (300 ml)",
    description_tr: "Portakalın canlandırıcı lezzeti.",
    name_en: "Fanta (300 ml)",
    description_en: "The refreshing taste of orange.",
    image: "/fanta.webp",
    price: "80 ₺",
    category: "icecekler"
  },
  {
    id: "sprite",
    name_tr: "Sprite (300 ml)",
    description_tr: "Limon ve misket limonu ferahlığı.",
    name_en: "Sprite (300 ml)",
    description_en: "The freshness of lemon and lime.",
    image: "/sprite.webp",
    price: "80 ₺",
    category: "icecekler"
  },
  {
    id: "salgam",
    name_tr: "Şalgam (300 ml)",
    description_tr: "Geleneksel ve lezzetli bir içecek.",
    name_en: "Turnip Juice (300 ml)",
    description_en: "A traditional and delicious drink.",
    image: "/salgam.webp",
    price: "60 ₺",
    category: "icecekler"
  },
  {
    id: "kahve",
    name_tr: "Kahve",
    description_tr: "Yemeğin üzerine keyifli bir mola.",
    name_en: "Coffee",
    description_en: "An enjoyable break after the meal.",
    image: "/kahve.webp",
    price: "120 ₺",
    category: "icecekler"
  },
  {
    id: "cay",
    name_tr: "Çay",
    description_tr: "İnce belli bardakta, tavşan kanı çay.",
    name_en: "Tea",
    description_en: "Perfectly brewed Turkish tea.",
    image: "/cay.webp",
    price: "40 ₺",
    category: "icecekler"
  },
  {
    id: "buyuk-ayran",
    name_tr: "Büyük Ayran (300 ml)",
    description_tr: "Bol köpüklü, serinletici ayran.",
    name_en: "Large Ayran (300 ml)",
    description_en: "Cool and refreshing ayran with plenty of foam.",
    image: "/buyukayran.webp",
    price: "60 ₺",
    category: "icecekler"
  },
  {
    id: "ayran",
    name_tr: "Ayran (250 ml)",
    description_tr: "Serinletici ve lezzetli şişe ayran.",
    name_en: "Ayran (250 ml)",
    description_en: "Refreshing and delicious bottled ayran.",
    image: "/kucukayran.webp",
    price: "60 ₺",
    category: "icecekler"
  },
  {
    id: "soda",
    name_tr: "Soda (200 ml)",
    description_tr: "Maden suyu.",
    name_en: "Sparkling Water (200 ml)",
    description_en: "Mineral water.",
    image: "/soda.webp",
    price: "40 ₺",
    category: "icecekler"
  },
  {
    id: "su",
    name_tr: "Su",
    description_tr: "Doğal kaynak suyu.",
    name_en: "Water",
    description_en: "Natural spring water.",
    image: "/su.webp",
    price: "10 ₺",
    category: "icecekler"
  }
];

export const galleryImages = [
  {
    id: "restaurant-1",
    title: "Restoranımızın Dış Görünümü",
    image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "restaurant-2",
    title: "Geleneksel Dekorasyon",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "restaurant-3",
    title: "Rahat Oturma Alanı",
    image: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "food-1",
    title: "Köfte Spesiyalimiz",
    image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "food-2",
    title: "Taze Salatalar",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "food-3",
    title: "Özel Tatlılarımız",
    image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
];

export const testimonials = [
  {
    id: "testimonial-1",
    name: "Ahmet Yılmaz",
    text: "40 yıldır birçok köfteci gezdim ama buranın lezzeti bambaşka. Geleneksel tadı korurken modern sunumu da çok başarılı.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Ayşe Kaya",
    text: "Ailece gittiğimiz favori mekanımız. Çocuklar için de uygun porsiyon seçenekleri var. Temiz, lezzetli ve sıcak bir ortam.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Mehmet Demir",
    text: "İş yemekleri için sık sık tercih ediyorum. Hızlı servis ve kaliteli malzemeler kullanıyorlar. Kesinlikle tavsiye ederim.",
    rating: 4,
  },
];
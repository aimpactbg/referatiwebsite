// config/site.config.ts

export const siteConfig = {
  // Основна информация за сайта
  name: "Referati.website",
  title: "Професионални Реферати и Курсови Работи",
  description: "Професионални реферати и курсови работи с гарантирана оригиналност. Индивидуални академични работи от професионални автори.",
  url: "https://www.referati.website",

  // Контактна информация
  contact: {
    phone: {
      number: "+359 XXX XXX XXX",
      display: "+359 XXX XXX XXX",
      link: "tel:+359000000000"
    },
    email: {
      main: "info@referati.website",
      support: "support@referati.website", 
      orders: "orders@referati.website"
    },
    social: {
      viber: "+359 XXX XXX XXX",
      whatsapp: "+359 XXX XXX XXX",
      telegram: "@referati_bg"
    },
    workingHours: {
      display: "08:00 - 22:00 (всеки ден)",
      days: "Понеделник - Неделя"
    },
    responseTime: {
      phone: "30 секунди",
      email: "30 минути",
      viber: "15 минути"
    }
  },

  // Бизнес статистики
  stats: {
    completedProjects: "5,000+",
    satisfiedClients: "98%",
    yearsExperience: "7 години",
    avgDeliveryTime: "24-48 часа"
  },

  // Основни услуги и цени
  services: {
    referati: {
      name: "Реферати и есета",
      pages: "3-15 страници",
      delivery: "От 24 часа", 
      priceFrom: "15 лв./страница"
    },
    kursovi: {
      name: "Курсови работи",
      pages: "15-30 страници",
      delivery: "От 3 дни",
      priceFrom: "18 лв./страница"
    },
    diplomni: {
      name: "Дипломни работи", 
      pages: "40-80+ страници",
      delivery: "От 2 седмици",
      priceFrom: "20 лв./страница"
    }
  },

  // Гаранции и предимства
  guarantees: [
    "100% Оригиналност",
    "Спазване на срокове", 
    "Професионални автори",
    "Безплатни корекции",
    "Пълна конфиденциалност",
    "24/7 поддръжка"
  ],

  // Промоции и оферти
  promotions: {
    newClient: {
      discount: "15%",
      minAmount: "150 лв.",
      code: "ПЪРВИ15",
      validUntil: "31-ви число"
    },
    urgent: {
      availableSlots: 3,
      deadline: "24 часа"
    }
  },

  // Социални доказателства
  testimonials: [
    {
      text: "Получих курсовата си работа точно навреме и с отлично качество. Професионалният подход и комуникацията бяха на високо ниво.",
      author: "Мария С.",
      specialty: "студентка по икономика"
    },
    {
      text: "Много съм доволен от дипломната си работа. Авторът разбра точно какво искам и резултатът надмина очакванията ми.",
      author: "Георги М.",
      specialty: "магистър по право"
    },
    {
      text: "Бърза доставка, качествено изпълнение и много добра цена. Определено ще препоръчам на колегите си.",
      author: "Анна К.",
      specialty: "студентка по медицина"
    }
  ],

  // Навигация
  navigation: {
    main: [
      { name: "Начало", href: "#hero" },
      { name: "Услуги", href: "#services" },
      { name: "Как работим", href: "#process" },
      { name: "Цени", href: "#pricing" },
      { name: "Въпроси", href: "#faq" },
      { name: "Контакти", href: "#final-cta" }
    ],
    footer: [
      { name: "Поверителност", href: "/privacy" },
      { name: "Условия", href: "/terms" },
      { name: "За нас", href: "/about" }
    ]
  },

  // SEO и мета данни
  meta: {
    keywords: [
      "реферати", "курсови работи", "дипломни работи", 
      "академично писане", "студентски услуги", "оригинални работи",
      "професионални автори", "антиплагиатство", "българска academia"
    ],
    ogImage: "/og-image.jpg",
    twitterCard: "summary_large_image"
  }
};

// Helper функции
export const formatPhone = (phone: string) => {
  return phone.replace(/\s/g, '');
};

export const createPhoneLink = (phone: string) => {
  return `tel:${formatPhone(phone)}`;
};

export const createEmailLink = (email: string) => {
  return `mailto:${email}`;
};

export const createViberLink = (phone: string) => {
  return `viber://chat?number=${formatPhone(phone)}`;
};

export const createWhatsAppLink = (phone: string) => {
  return `https://wa.me/${formatPhone(phone).replace('+', '')}`;
};

// Export на отделни секции за лесно използване
export const { contact, stats, services, guarantees, promotions, testimonials, navigation, meta } = siteConfig;
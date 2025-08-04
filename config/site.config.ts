// config/site.config.ts - CLEANED UP VERSION
// Unified configuration - remove contact.config.ts duplication

export const siteConfig = {
  // Site Information
  name: "Referati.website",
  title: "Професионални Реферати и Курсови Работи",
  description:
    "Професионални реферати и курсови работи с гарантирана оригиналност",
  url: "https://referati.website",

  // Contact Information - UNIFIED
  contact: {
    phone: {
      number: "+359000000001", // UPDATE WITH REAL PHONE
      display: "+359 000 000 001",
      link: "tel:+359000000001",
    },
    email: {
      main: "info@referati.website",
      support: "support@referati.website",
      orders: "orders@referati.website",
    },
    social: {
      viber: "viber://chat?number=+359000000001",
      whatsapp: "https://wa.me/359000000001",
      telegram: "https://t.me/referatiwebsite",
    },
    workingHours: {
      display: "09:00 - 22:00",
      description: "Понеделник - Неделя: 09:00 - 22:00",
    },
    responseTime: {
      phone: "веднага",
      email: "до 2 часа",
      whatsapp: "до 30 мин",
    },
  },

  // Statistics - FIXED FOR TRUST COMPONENT
  stats: {
    projects: "5,000+",
    satisfaction: "98%",
    support: "24/7",
    originality: "100%",
  },

  // Services - FIXED STRUCTURE FOR COMPONENTS
  services: {
    title: "Нашите услуги",
    subtitle:
      "Предлагаме широк спектър от академични услуги, адаптирани към вашите нужди",

    // FIXED: Match Services component expectations
    mainServices: [
      {
        title: "Реферати и есета",
        description:
          "Професионални реферати с научна стойност, подходящи за всички специалности. Уникален съдържание и правилно оформление.",
        pages: "3-15",
        timeframe: "24 часа",
        priceFrom: "15",
        priceUnit: "страница",
        icon: "📝",
      },
      {
        title: "Курсови работи",
        description:
          "Задълбочени курсови проекти с анализ, изследване и практическа част. Подходящи за всички университетски специалности.",
        pages: "15-30",
        timeframe: "3 дни",
        priceFrom: "18",
        priceUnit: "страница",
        icon: "📊",
      },
      {
        title: "Дипломни работи",
        description:
          "Завършени дипломни проекти с пълно изследване, анализ и заключения. Гарантирана уникалност и академично качество.",
        pages: "40-80+",
        timeframe: "2 седмици",
        priceFrom: "20",
        priceUnit: "страница",
        icon: "🎓",
      },
    ],

    // FIXED: Simple string array for components
    specializations: [
      "Икономика",
      "Мениджмънт",
      "Маркетинг",
      "Право",
      "Психология",
      "Социология",
      "История",
      "Литература",
      "Философия",
      "Педагогика",
      "Журналистика",
      "Технически",
      "Медицина",
      "Информатика",
      "Математика",
      "Физика",
    ],

    // FIXED: Match component structure
    additionalServices: [
      {
        title: "Корекции и редакция",
        description: "Професионално редактиране и корекция на готови текстове",
      },
      {
        title: "Презентации",
        description:
          "Изработка на PowerPoint презентации към академичните работи",
      },
      {
        title: "Антиплагиатска проверка",
        description: "Подробна проверка за оригиналност с детайлен отчет",
      },
      {
        title: "Бърза доставка",
        description: "Експресни услуги за спешни поръчки в кратки срокове",
      },
    ],
  },

  // FIXED: Match Trust component expectations
  testimonials: [
    {
      name: "Мария Петрова",
      university: 'СУ "Св. Климент Охридски"',
      specialty: "Икономика", // Changed from 'program' to 'specialty'
      rating: 5,
      text: "Изключително професионална работа! Курсовата ми работа беше написана точно според изискванията и беше предадена в срок.",
      avatar: "МП", // Added for Trust component
    },
    {
      name: "Георги Иванов",
      university: "УНСС",
      specialty: "Мениджмънт",
      rating: 5,
      text: "Супер качество и отлична комуникация. Препоръчвам на всички студенти, които имат нужда от помощ.",
      avatar: "ГИ",
    },
    {
      name: "Анна Димитрова",
      university: 'ПУ "Паисий Хилендарски"',
      specialty: "Право",
      rating: 5,
      text: "Много съм доволна от резултата. Работата беше оригинална и професионално оформена.",
      avatar: "АД",
    },
  ],

  // FIXED: Match Trust component expectations
  trustBadges: [
    {
      icon: "🛡️",
      title: "100% Сигурност",
      description: "Пълна конфиденциалност на данните",
    },
    {
      icon: "⚡",
      title: "Бърза доставка",
      description: "Спазване на договорените срокове",
    },
    {
      icon: "🔄",
      title: "Безплатни корекции",
      description: "Неограничени корекции до одобрение",
    },
    {
      icon: "🏆",
      title: "Гарантирано качество",
      description: "Професионални автори с опит",
    },
  ],

  // Pricing Section - FIXED STRUCTURE FOR COMPONENTS
  pricing: {
    title: "Прозрачно ценообразуване",
    subtitle: "Без скрити такси - знаеш точно какво плащаш",
    plans: [
      {
        name: "Основен",
        description: "За стандартни реферати и есета",
        icon: "📝",
        price: "от 15 лв.",
        unit: "/страница",
        popular: false,
        features: [
          "3-10 страници",
          "Срок: 48-72 часа",
          "1 безплатна корекция",
          "Основно форматиране",
          "Имейл поддръжка",
        ],
        buttonText: "Избери план",
        highlight: false,
      },
      {
        name: "Професионален",
        description: "За курсови работи и проекти",
        icon: "📊",
        price: "от 18 лв.",
        unit: "/страница",
        popular: true,
        features: [
          "10-30 страници",
          "Срок: 3-7 дни",
          "3 безплатни корекции",
          "Професионално форматиране",
          "Графики и таблици",
          "Телефонна поддръжка",
        ],
        buttonText: "Най-популярен",
        highlight: true,
      },
      {
        name: "Експертен",
        description: "За дипломни работи и дисертации",
        icon: "🎓",
        price: "от 22 лв.",
        unit: "/страница",
        popular: false,
        features: [
          "30+ страници",
          "Срок: 7-14 дни",
          "Неограничени корекции",
          "Премиум форматиране",
          "Статистически анализ",
          "Презентация за защита",
          "Приоритетна поддръжка",
        ],
        buttonText: "За експерти",
        highlight: false,
      },
    ],
    promotion: {
      title: "🎉 Специална промоция",
      subtitle: "Студентски отстъпки до 25%",
      description: "За студенти с валидна студентска карта",
      validUntil: "31.08.2025",
      code: "STUDENT25",
    },
  },

  // Urgency Section - FIXED STRUCTURE FOR COMPONENTS
  urgency: {
    title: "⚡ Спешни поръчки",
    subtitle: "Имаш нужда от работа до утре? Не се паникьосвай!",
    availableSlots: "15",
    offers: [
      {
        title: "Експресно 24h",
        description: "Готова работа за 24 часа",
        icon: "🚀",
        timeline: "24 часа",
        price: "+50% надбавка",
        availability: "3 места",
        badge: "ГОРЕЩО",
      },
      {
        title: "Бърза 48h",
        description: "Качествена работа за 2 дни",
        icon: "⚡",
        timeline: "48 часа",
        price: "+25% надбавка",
        availability: "7 места",
        badge: "ПОПУЛЯРНО",
      },
      {
        title: "Стандартна",
        description: "Най-добрата цена за стандартни срокове",
        icon: "💎",
        timeline: "3-5 дни",
        price: "Стандартна цена",
        availability: "Неограничено",
        badge: "ПРЕПОРЪЧИТЕЛНО",
      },
    ],
  },

  // Keep existing sections that work
  hero: {
    title: "Професионални реферати и курсови работи с гарантирана оригиналност",
    subtitle:
      "100% уникално съдържание, експертни автори, спазване на срокове. Започни своя успешен академичен проект днес!",
    benefits: [
      {
        title: "100% Оригиналност",
        description:
          "Всяка работа се пише от нулата и се проверява с антиплагиатски софтуер.",
      },
      {
        title: "Експертни автори",
        description:
          "Работим само с дипломирани специалисти с университетско образование.",
      },
      {
        title: "Гарантирано качество",
        description: "Безплатни корекции до пълното ви удовлетворение.",
      },
    ],
  },

  // Social Media
  social: {
    facebook: "https://facebook.com/referatiwebsite",
    instagram: "https://instagram.com/referatiwebsite",
    linkedin: "https://linkedin.com/company/referatiwebsite",
    youtube: "https://youtube.com/@referatiwebsite",
  },
};

// Helper Functions - WORKING
export const getContactLink = (
  type: "phone" | "email" | "whatsapp" | "viber" | "telegram",
) => {
  const config = siteConfig.contact;
  switch (type) {
    case "phone":
      return config.phone.link;
    case "email":
      return `mailto:${config.email.orders}`;
    case "whatsapp":
      return config.social.whatsapp;
    case "viber":
      return config.social.viber;
    case "telegram":
      return config.social.telegram;
    default:
      return config.phone.link;
  }
};

export const getFormattedPhone = () => siteConfig.contact.phone.display;
export const getMainEmail = () => siteConfig.contact.email.main;

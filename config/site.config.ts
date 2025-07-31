// config/site.config.ts - FIXED CIRCULAR REFERENCE
export const siteConfig = {
  // Site Information
  name: "Referati.website",
  title: "Професионални Реферати и Курсови Работи",
  description: "Професионални реферати и курсови работи с гарантирана оригиналност",
  url: "https://referati.website",

  // Contact Information
  contact: {
    phone: {
      number: "+359000000000", // UPDATE WITH REAL PHONE
      display: "+359 000 000 000",
      link: "tel:+359000000000"
    },
    email: {
      main: "info@referati.website",
      support: "support@referati.website",
      orders: "orders@referati.website"
    },
    social: {
      viber: "viber://chat?number=+359000000000",
      whatsapp: "https://wa.me/359000000000",
      telegram: "https://t.me/referatiwebsite"
    },
    workingHours: {
      display: "09:00 - 22:00",
      description: "Понеделник - Неделя: 09:00 - 22:00"
    },
    responseTime: {
      phone: "веднага",
      email: "до 2 часа",
      whatsapp: "до 30 мин"
    }
  },

  // Hero Section
  hero: {
    title: "Професионални реферати и курсови работи с гарантирана оригиналност",
    subtitle: "100% уникално съдържание, експертни автори, спазване на срокове. Започни своя успешен академичен проект днес!",
    benefits: [
      {
        title: "100% Оригиналност",
        description: "Всяка работа се пише от нулата и се проверява с антиплагиатски софтуер."
      },
      {
        title: "Експертни автори", 
        description: "Работим само с дипломирани специалисти с университетско образование."
      },
      {
        title: "Гарантирано качество",
        description: "Безплатни корекции до пълното ви удовлетворение."
      }
    ]
  },

  // Statistics
  stats: {
    completedProjects: "5,000+",
    satisfiedClients: "98%",
    averageRating: "4.9/5",
    yearsExperience: "8+"
  },

  // Services Configuration
  services: {
    title: "Нашите услуги",
    subtitle: "Предлагаме широк спектър от академични услуги, адаптирани към вашите нужди",
    mainServices: [
      {
        title: "Реферати и есета",
        description: "Качествени реферати и есета по всички предмети",
        icon: "📝",
        pages: "3-15 страници",
        timeline: "от 24 часа", 
        price: "от 15 лв./страница",
        features: [
          "100% оригинално съдържание",
          "Професионално форматиране", 
          "Библиография и цитати",
          "Безплатни корекции"
        ]
      },
      {
        title: "Курсови работи",
        description: "Задълбочени курсови работи с анализ и изследвания",
        icon: "📊",
        pages: "15-30 страници",
        timeline: "от 3 дни",
        price: "от 18 лв./страница", 
        features: [
          "Детайлно изследване",
          "Графики и таблици",
          "Анализ на данни",
          "Практически примери"
        ]
      },
      {
        title: "Дипломни работи",
        description: "Цялостни дипломни работи с оригинални изследвания",
        icon: "🎓",
        pages: "40-80+ страници",
        timeline: "от 2 седмици",
        price: "от 20 лв./страница",
        features: [
          "Оригинално изследване",
          "Статистически анализ", 
          "Професионална презентация",
          "Подготовка за защита"
        ]
      }
    ],
    specializations: [
      { name: "Икономика", icon: "💼" },
      { name: "Мениджмънт", icon: "📈" },
      { name: "Маркетинг", icon: "📊" },
      { name: "Право", icon: "⚖️" },
      { name: "Психология", icon: "🧠" },
      { name: "Социология", icon: "👥" },
      { name: "История", icon: "📚" },
      { name: "Литература", icon: "📖" },
      { name: "Философия", icon: "💭" },
      { name: "Педагогика", icon: "🎓" },
      { name: "Журналистика", icon: "📰" },
      { name: "Технически", icon: "⚙️" }
    ],
    additionalServices: [
      {
        title: "Редактиране",
        description: "Професионална редакция на готови текстове",
        icon: "✏️",
        price: "от 5 лв./страница"
      },
      {
        title: "Презентации", 
        description: "PowerPoint презентации за защити",
        icon: "📽️",
        price: "от 50 лв."
      },
      {
        title: "Статистика",
        description: "Анализ на данни със SPSS/R",
        icon: "📊", 
        price: "от 100 лв."
      },
      {
        title: "Превод",
        description: "Превод на академични текстове",
        icon: "🌐",
        price: "от 0.10 лв./дума"
      }
    ]
  },

  // Testimonials
  testimonials: [
    {
      name: "Мария Петрова",
      program: "Бакалавър по Икономика", 
      university: "СУ \"Св. Климент Охридски\"",
      rating: 5,
      text: "Изключително професионална работа! Курсовата ми работа беше написана точно според изискванията и беше предадена в срок."
    },
    {
      name: "Георги Иванов",
      program: "Магистър по Мениджмънт",
      university: "УНСС",
      rating: 5,
      text: "Супер качество и отлична комуникация. Препоръчвам на всички студенти, които имат нужда от помощ."
    },
    {
      name: "Анна Димитрова", 
      program: "Бакалавър по Право",
      university: "ПУ \"Паисий Хилендарски\"",
      rating: 5,
      text: "Много съм доволна от резултата. Работата беше оригинална и професионално оформена."
    }
  ],

  // Trust Badges
  trustBadges: [
    {
      title: "100% Оригиналност",
      description: "Гарантираме уникално съдържание",
      icon: "✅"
    },
    {
      title: "Спазване на срокове", 
      description: "Винаги предаваме навреме",
      icon: "⏰"
    },
    {
      title: "24/7 Поддръжка",
      description: "Винаги сме на разположение",
      icon: "💬"  
    },
    {
      title: "Конфиденциалност",
      description: "Пълна дискретност на данните",
      icon: "🔒"
    }
  ],

  // Pricing Configuration
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
          "Имейл поддръжка"
        ],
        buttonText: "Избери план",
        highlight: false
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
          "Телефонна поддръжка"
        ],
        buttonText: "Най-популярен",
        highlight: true
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
          "Приоритетна поддръжка"
        ],
        buttonText: "За експерти",
        highlight: false
      }
    ],
    promotion: {
      title: "🎉 Специална промоция",
      subtitle: "Студентски отстъпки до 25%",
      description: "За студенти с валидна студентска карта",
      validUntil: "31.08.2025",
      code: "STUDENT25"
    }
  },

  // Urgency Section
  urgency: {
    title: "⚡ Спешни поръчки",
    subtitle: "Имаше ли нужда от работа до утре? Не се паникьосвай!",
    availableSlots: "15",
    offers: [
      {
        title: "Експресно 24h", 
        description: "Готова работа за 24 часа",
        icon: "🚀",
        timeline: "24 часа",
        price: "+50% надбавка", 
        availability: "3 места",
        badge: "ГОРЕЩО"
      },
      {
        title: "Бърза 48h",
        description: "Качествена работа за 2 дни", 
        icon: "⚡",
        timeline: "48 часа",
        price: "+25% надбавка",
        availability: "7 места", 
        badge: "ПОПУЛЯРНО"
      },
      {
        title: "Стандартна",
        description: "Най-добрата цена за стандартни срокове",
        icon: "💎",
        timeline: "3-5 дни",
        price: "Стандартна цена",
        availability: "Неограничено",
        badge: "ПРЕПОРЪЧИТЕЛНО"  
      }
    ]
  },

  // Final CTA Section
  finalCTA: {
    title: "Готов за успешен академичен резултат?",
    subtitle: "Свържи се сега и получи професионална помощ за твоята курсова или дипломна работа!"
  },

  // Social Media
  social: {
    facebook: "https://facebook.com/referatiwebsite",
    instagram: "https://instagram.com/referatiwebsite", 
    linkedin: "https://linkedin.com/company/referatiwebsite",
    youtube: "https://youtube.com/@referatiwebsite"
  }
};

// Helper Functions - FIXED: No circular references
export const getContactLink = (type: 'phone' | 'email' | 'whatsapp' | 'viber' | 'telegram') => {
  const config = siteConfig.contact;
  switch (type) {
    case 'phone':
      return config.phone.link;
    case 'email': 
      return `mailto:${config.email.orders}`;
    case 'whatsapp':
      return config.social.whatsapp;
    case 'viber':
      return config.social.viber;
    case 'telegram':
      return config.social.telegram;
    default:
      return config.phone.link;
  }
};

export const getFormattedPhone = () => siteConfig.contact.phone.display;
export const getMainEmail = () => siteConfig.contact.email.main;
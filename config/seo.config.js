// config/seo.config.js - ENHANCED with comprehensive structured data
export const seoConfig = {
  title: "Реферати и Курсови Работи | Referati.website - Професионално Академично Писане",
  description: "Индивидуално изготвени реферати, курсови и дипломни работи. 100% оригиналност, качество и професионализъм без плагиатство. Експресно изпълнение и гарантирани резултати.",
  keywords: "реферати, курсови работи, дипломни работи, академично писане, студентски услуги, без плагиатство, професионални автори, България",
  author: "Referati.website",
  url: "https://referati.website",

  og: {
    title: "Referati.website | Професионални Реферати и Курсови Работи",
    description: "Вашият надежден партньор за академично писане. Индивидуален подход, гарантирана оригиналност и качество. Поръчайте сега!",
    url: "https://referati.website",
    image: "https://placehold.co/1200x630/2563eb/ffffff?text=Referati.website+%7C+Академично+Писане",
    type: "website",
    locale: "bg_BG",
    siteName: "Referati.website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Referati.website | Професионални Реферати",
    description: "Индивидуално изготвени академични работи с гарантирана оригиналност.",
    image: "https://placehold.co/1200x630/2563eb/ffffff?text=Referati.website",
    site: "@referatiwebsite",
    creator: "@referatiwebsite"
  },

  meta: {
    viewport: "width=device-width, initial-scale=1",
    charset: "utf-8",
    robots: "index, follow",
    googleSiteVerification: "", // Add Google Search Console verification
    lang: "bg"
  },

  // COMPREHENSIVE STRUCTURED DATA
  structuredData: {
    // Main Organization Schema
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Referati.website",
      "alternateName": "Referati",
      "description": "Професионални услуги за изготвяне на реферати, курсови и дипломни работи с гарантирана оригиналност",
      "url": "https://referati.website",
      "logo": "https://referati.website/logo.png",
      "image": "https://referati.website/og-image.jpg",
      "foundingDate": "2016",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+359000000000",
          "email": "info@referati.website",
          "contactType": "Customer Service",
          "availableLanguage": ["Bulgarian"],
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "22:00"
          }
        }
      ],
      "areaServed": {
        "@type": "Country",
        "name": "Bulgaria"
      },
      "serviceType": "Academic Writing Services",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BG",
        "addressLocality": "Bulgaria"
      },
      "sameAs": [
        "https://facebook.com/referatiwebsite",
        "https://instagram.com/referatiwebsite",
        "https://linkedin.com/company/referatiwebsite"
      ]
    },

    // Professional Service Schema
    service: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Академично Писане и Консултиране",
      "provider": {
        "@type": "Organization",
        "name": "Referati.website"
      },
      "serviceType": "Academic Writing",
      "description": "Професионални услуги за изготвяне на реферати, курсови работи, дипломни работи и академични текстове",
      "areaServed": "Bulgaria",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Академични Услуги",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Реферати и Есета",
              "description": "Професионално изготвяне на реферати и есета по всички предмети"
            },
            "price": "15",
            "priceCurrency": "BGN",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "15",
              "priceCurrency": "BGN",
              "unitText": "страница"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Курсови Работи",
              "description": "Задълбочени курсови работи с анализ и изследвания"
            },
            "price": "18",
            "priceCurrency": "BGN",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "18",
              "priceCurrency": "BGN",
              "unitText": "страница"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Дипломни Работи",
              "description": "Цялостни дипломни работи с оригинални изследвания"  
            },
            "price": "22",
            "priceCurrency": "BGN",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "22",
              "priceCurrency": "BGN", 
              "unitText": "страница"
            }
          }
        ]
      }
    },

    // Website Schema
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Referati.website",
      "url": "https://referati.website",
      "description": "Професионални услуги за академично писане в България",
      "inLanguage": "bg-BG",
      "publisher": {
        "@type": "Organization",
        "name": "Referati.website"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://referati.website/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },

    // Local Business Schema (if applicable)
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Referati.website",
      "description": "Професионални услуги за академично писане",
      "url": "https://referati.website",
      "telephone": "+359000000000",
      "email": "info@referati.website",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "addressCountry": "Bulgaria"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "22:00"
      },
      "priceRange": "15-25 BGN per page"
    },

    // Breadcrumb Schema
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Начало",
          "item": "https://referati.website"
        }
      ]
    },

    // FAQ Schema (can be dynamically generated from FAQ component)
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Как мога да поръчам реферат?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "Можете да се свържете с нас чрез телефон, имейл или WhatsApp за да обсъдим вашите изисквания и да получите персонализирана оферта."
          }
        },
        {
          "@type": "Question",
          "name": "Гарантирате ли оригиналност?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, всяка работа се изготвя индивидуално от нулата и се проверява с професионален антиплагиатски софтуер за 100% оригиналност."
          }
        },
        {
          "@type": "Question", 
          "name": "Какви са сроковете за изпълнение?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Сроковете варират в зависимост от обема и сложността: реферати - от 24 часа, курсови работи - от 3 дни, дипломни работи - от 2 седмици."
          }
        }
      ]
    }
  }
};
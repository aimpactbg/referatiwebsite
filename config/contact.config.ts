// config/contact.config.ts
export const contactConfig = {
  // Основни контакти
  phone: {
    number: '+359 XXX XXX XXX',
    display: '+359 XXX XXX XXX',
    link: 'tel:+359000000000'
  },

  email: {
    main: 'info@referati.website',
    support: 'support@referati.website',
    orders: 'orders@referati.website'
  },

  social: {
    viber: '+359 XXX XXX XXX',
    whatsapp: '+359 XXX XXX XXX',
    telegram: '@referati_bg'
  },

  // Работно време
  workingHours: {
    display: '08:00 - 22:00 (всеки ден)',
    days: 'Понеделник - Неделя',
    timezone: 'EET (UTC+2)'
  },

  // Отговор времета
  responseTime: {
    phone: '30 секунди',
    email: '30 минути',
    viber: '15 минути'
  },

  // За различни секции
  cta: {
    primaryPhone: '+359 XXX XXX XXX',
    primaryEmail: 'info@referati.website',
    emergencyPhone: '+359 XXX XXX XXX'
  }
};

// Helper функции за форматиране
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
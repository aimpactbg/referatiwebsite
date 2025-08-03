// components/Hero.tsx - FIXED VERSION with Object Stats Support
import { useState, useEffect } from 'react';
import { siteConfig, getContactLink, getFormattedPhone, getMainEmail } from '../config/site.config';

interface QuickContactForm {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export default function Hero() {
  const [particles, setParticles] = useState<Array<{
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
  }>>([]);

  const [mounted, setMounted] = useState(false);
  const [quickForm, setQuickForm] = useState<QuickContactForm>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Convert stats object to array for display
  const statsArray = [
    { number: siteConfig.stats?.completedProjects || '5,000+', label: 'Завършени проекта' },
    { number: siteConfig.stats?.satisfiedClients || '98%', label: 'Доволни клиенти' },
    { number: siteConfig.stats?.averageRating || '4.9/5', label: 'Средна оценка' }
  ];

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);

    const generateParticles = () => {
      const particleArray = [];
      for (let i = 0; i < 6; i++) {
        particleArray.push({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        });
      }
      return particleArray;
    };

    setParticles(generateParticles());
  }, []);

  const handleQuickFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setQuickForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleQuickFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement quick contact submission
    // For now, just simulate submission
    setTimeout(() => {
      alert('Благодарим за контакта! Ще се свържем с вас скоро.');
      setQuickForm({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const serviceTypes = [
    { value: '', label: 'Изберете услуга...' },
    { value: 'referati', label: 'Реферати и есета' },
    { value: 'kursovi', label: 'Курсови работи' },
    { value: 'diplomni', label: 'Дипломни работи' },
    { value: 'seminarni', label: 'Семинарни работи' },
    { value: 'other', label: 'Друго' }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {mounted && particles.map((particle, index) => (
          <div
            key={index}
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration,
            }}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse opacity-70"
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-160px)]">

          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Професионални{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                реферати и курсови
              </span>{' '}
              работи
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              {siteConfig.hero?.subtitle || 'Качествени академични работи с гарантирана оригиналност'}
            </p>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
              {(siteConfig.hero?.benefits || [
                { title: '100% Оригиналност', description: 'Всяка работа се пише от нулата' },
                { title: 'Бърза доставка', description: 'От 24 часа до няколко дни' },
                { title: 'Професионални автори', description: 'Експерти във всяка област' },
                { title: '24/7 Поддръжка', description: 'Винаги на разположение' }
              ]).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-success rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {statsArray.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-secondary">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#final-cta" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span>Виж всички услуги</span>
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>

              <a 
                href={getContactLink('phone')} 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>{getFormattedPhone()}</span>
              </a>
            </div>
          </div>

          {/* Right Column - Quick Contact Form */}
          <div className="lg:pl-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Бърз контакт
                </h3>
                <p className="text-gray-600">
                  Получете оферта за вашия проект в рамките на 30 минути
                </p>
              </div>

              <form onSubmit={handleQuickFormSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="quick-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Вашето име*
                  </label>
                  <input
                    type="text"
                    id="quick-name"
                    name="name"
                    value={quickForm.name}
                    onChange={handleQuickFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Въведете вашето име"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="quick-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email адрес*
                  </label>
                  <input
                    type="email"
                    id="quick-email"
                    name="email"
                    value={quickForm.email}
                    onChange={handleQuickFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="quick-phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон*
                  </label>
                  <input
                    type="tel"
                    id="quick-phone"
                    name="phone"
                    value={quickForm.phone}
                    onChange={handleQuickFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="+359 xxx xxx xxx"
                  />
                </div>

                {/* Service Type Field */}
                <div>
                  <label htmlFor="quick-service" className="block text-sm font-medium text-gray-700 mb-2">
                    Вид услуга*
                  </label>
                  <select
                    id="quick-service"
                    name="serviceType"
                    value={quickForm.serviceType}
                    onChange={handleQuickFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    {serviceTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="quick-message" className="block text-sm font-medium text-gray-700 mb-2">
                    Кратко описание
                  </label>
                  <textarea
                    id="quick-message"
                    name="message"
                    value={quickForm.message}
                    onChange={handleQuickFormChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Кратко опишете вашия проект..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Изпращане...
                    </span>
                  ) : (
                    'Получи безплатна оферта'
                  )}
                </button>

                {/* Trust Elements */}
                <div className="text-center pt-4">
                  <p className="text-sm text-gray-500 mb-3">
                    🔒 Пълна конфиденциалност • ⚡ Отговор в рамките на 30 мин
                  </p>
                  <div className="flex justify-center items-center space-x-4 text-xs text-gray-400">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-success rounded-full mr-1"></span>
                      {siteConfig.stats?.completedProjects || '5,000+'} завършени проекта
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-1"></span>
                      {siteConfig.stats?.satisfiedClients || '98%'} доволни клиенти
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
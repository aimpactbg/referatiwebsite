import React, { useState, useEffect } from 'react';

const ReferatiAboutServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: '📝',
      title: 'Реферати и есета',
      description: 'Професионални реферати от 3 до 15 страници',
      features: ['100% оригинални', 'Научни източници', 'Правилно форматиране', 'Антиплагиатска проверка'],
      price: 'от 15 лв./стр.',
      delivery: 'от 24 часа',
      bgColor: 'bg-gradient-to-br from-blue-500/10 to-purple-500/10'
    },
    {
      icon: '📚',
      title: 'Курсови работи',
      description: 'Задълбочени курсови работи с анализ и изследвания',
      features: ['Детайлен анализ', 'Статистически данни', 'Графики и схеми', 'Препоръки и заключения'],
      price: 'от 18 лв./стр.',
      delivery: 'от 3 дни',
      bgColor: 'bg-gradient-to-br from-green-500/10 to-blue-500/10'
    },
    {
      icon: '🎓',
      title: 'Дипломни работи',
      description: 'Пълноценни дипломни работи с оригинални изследвания',
      features: ['Оригинално изследване', 'Методология', 'Анкети и интервюта', 'Научна стойност'],
      price: 'от 20 лв./стр.',
      delivery: 'от 2 седмици',
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10'
    }
  ];

  const guarantees = [
    {
      icon: '✅',
      title: '100% Оригиналност',
      description: 'Всяка работа се пише от нулата и се проверява с професионален антиплагиатски софтуер'
    },
    {
      icon: '⚡',
      title: 'Спазване на срокове',
      description: 'Гарантираме доставка в точно определения срок или по-рано'
    },
    {
      icon: '🔄',
      title: 'Безплатни корекции',
      description: 'Правим неограничен брой корекции до пълно удовлетворение'
    },
    {
      icon: '🔒',
      title: 'Пълна конфиденциалност',
      description: 'Вашите данни и проекти са напълно защитени и анонимни'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Изпратете заявка',
      description: 'Попълнете формата с изискванията и прикачете необходимите файлове',
      icon: '📝'
    },
    {
      step: '02', 
      title: 'Получете оферта',
      description: 'В рамките на 2 часа ще получите детайлна оферта с цена и срок',
      icon: '💰'
    },
    {
      step: '03',
      title: 'Започваме работа',
      description: 'След потвърждение на поръчката, експертният ни автор започва работа',
      icon: '🚀'
    },
    {
      step: '04',
      title: 'Получавате резултата',
      description: 'Готовата работа се изпраща в точно определения срок с всички приложения',
      icon: '🎯'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* About Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Images */}
            <div className="relative">
              <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                {/* Main Image */}
                <div className="relative mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Students collaborating"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 logo-container flex items-center justify-center text-2xl">
                    📚
                  </div>
                </div>

                {/* Small Images Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Academic writing"
                    className="rounded-xl shadow-lg h-32 w-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Library study"
                    className="rounded-xl shadow-lg h-32 w-full object-cover"
                  />
                </div>

                {/* Floating CTA Button */}
                <div className="absolute top-4 left-4">
                  <div className="badge-primary px-4 py-2 animate-pulse">
                    <span className="text-primary text-sm font-medium">🏆 #1 в България</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              {/* Section Header */}
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 badge-primary px-4 py-2 mb-6">
                  <span className="text-primary text-sm font-medium">За нашите академични услуги</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Иновации 2025 - Оформяне на 
                  <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent"> бъдещето </span>
                  на академичното писане
                </h2>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Отразява нашия ангажимент към постигане на прогрес и приемане на иновации в постоянно развиващия се академичен пазар. 
                  Нашата платформа е проектирана да бъде център за лидерство в мисленето, където академични пионери и бъдещи експерти се срещат.
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 feature-icon flex items-center justify-center text-xl flex-shrink-0">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Ексклузивни експерти</h3>
                    <p className="text-gray-600">
                      Заглавието отразява нашата мисия да даваме възможност на студентите не само да се адаптират, но и да лидерстват в тази нова ера на академичния успех.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 feature-icon flex items-center justify-center text-xl flex-shrink-0">
                    🚀
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Бързи решения</h3>
                    <p className="text-gray-600">
                      Чрез оформяне на бъдещето днес, ние се стремим да създадем трайно въздействие, което ще резонира в академичните среди и ще вдъхновява.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="btn-primary">
                <span>Станете наш студент</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 badge-primary px-4 py-2 mb-6">
              <span className="badge-dot w-2 h-2"></span>
              <span className="text-primary text-sm font-medium">Нашите услуги</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Академичен план за успех
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Открийте нашите специализирани услуги, създадени да ви помогнат да постигнете академичен успех на всяко ниво на образованието.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative card-elevated p-8 transition-all duration-500 hover:scale-105 cursor-pointer ${
                  activeService === index ? 'ring-2 ring-[var(--color-primary)]' : ''
                }`}
                onClick={() => setActiveService(index)}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Service Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.delivery}</div>
                  </div>
                  <button className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                    →
                  </button>
                </div>

                {/* Active Indicator */}
                {activeService === index && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 badge-primary px-4 py-2 mb-6">
              <span className="text-primary text-sm font-medium">Как работим</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Простият ни процес в 4 стъпки
            </h2>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto logo-container flex items-center justify-center text-2xl font-bold text-black">
                    {step.step}
                  </div>
                  <div className="absolute -top-2 -right-2 text-4xl">
                    {step.icon}
                  </div>

                  {/* Connecting Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-transparent"></div>
                  )}
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Нашите гаранции за качество
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ние гарантираме най-високо ниво на качество и професионализъм във всяка работа.
            </p>
          </div>

          {/* Guarantees Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl mb-4">{guarantee.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{guarantee.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готови за академичен успех?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Присъединете се към хиляди студенти, които вече постигнаха целите си с нашата помощ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              <span>Поръчайте сега</span>
              <span>🚀</span>
            </button>
            <button className="btn-secondary">
              Безплатна консултация
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferatiAboutServices;
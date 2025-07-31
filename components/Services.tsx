// components/Services.tsx - FIXED VERSION
import { siteConfig } from '../config/site.config';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {siteConfig.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {siteConfig.services.subtitle}
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {siteConfig.services.mainServices.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Страници:</span>
                  <span className="font-semibold">{service.pages}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Срок:</span>
                  <span className="font-semibold">{service.timeline}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Цена:</span>
                  <span className="font-bold text-blue-600">{service.price}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              <a 
                href="#final-cta"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-center inline-block"
              >
                Поръчай сега
              </a>
            </div>
          ))}
        </div>

        {/* Subject Specializations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Специализации по предмети</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {siteConfig.services.specializations.map((spec, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors duration-300">
                <div className="text-2xl mb-2">{spec.icon}</div>
                <div className="text-sm font-medium text-gray-800">{spec.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Допълнителни услуги</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.services.additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h4 className="font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                <div className="text-blue-600 font-semibold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Нашата гаранция за качество</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">🔍</div>
              <h4 className="font-semibold mb-2">Проверка за плагиатство</h4>
              <p className="text-sm text-gray-600">
                {/* FIXED: Properly escaped quotes */}
                Всяка работа се проверява с професионален антиплагиатски софтуер за &quot;100% оригиналност&quot;
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">👨‍🎓</div>
              <h4 className="font-semibold mb-2">Експертни автори</h4>
              <p className="text-sm text-gray-600">
                Работим само с дипломирани специалисти в съответните области
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">✏️</div>
              <h4 className="font-semibold mb-2">Безплатни корекции</h4>
              <p className="text-sm text-gray-600">
                Правим неограничен брой корекции до пълното ви удовлетворение
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">🔒</div>
              <h4 className="font-semibold mb-2">Конфиденциалност</h4>
              <p className="text-sm text-gray-600">
                Пълна дискретност и защита на вашите лични данни
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
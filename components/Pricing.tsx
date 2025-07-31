// components/Pricing.tsx - FIXED VERSION
import { siteConfig } from '../config/site.config';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {siteConfig.pricing.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {siteConfig.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {siteConfig.pricing.plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-lg p-8 relative ${
                plan.highlight ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Най-популярен
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.unit}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#final-cta"
                className={`w-full py-3 px-6 rounded-lg font-semibold text-center inline-block transition-colors duration-300 ${
                  plan.highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>

        {/* Promotion Banner */}
        {siteConfig.pricing.promotion && (
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">{siteConfig.pricing.promotion.title}</h3>
            <p className="text-xl mb-4">{siteConfig.pricing.promotion.subtitle}</p>
            <p className="mb-4">{siteConfig.pricing.promotion.description}</p>
            <div className="flex justify-center items-center space-x-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                Код: <strong>{siteConfig.pricing.promotion.code}</strong>
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                До: <strong>{siteConfig.pricing.promotion.validUntil}</strong>
              </span>
            </div>
          </div>
        )}

        {/* Additional Information */}
        <div className="bg-white rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Защо да избереш нас?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-4">💳</div>
              <h4 className="font-semibold mb-2">Гъвкаво плащане</h4>
              <p className="text-sm text-gray-600">Плащане на части или след получаване</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="font-semibold mb-2">Без скрити такси</h4>
              <p className="text-sm text-gray-600">Цената която виждаш е крайната цена</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="font-semibont mb-2">Бърза оферта</h4>
              <p className="text-sm text-gray-600">Получи цена в рамките на 30 минути</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🔄</div>
              <h4 className="font-semibold mb-2">Гаранция</h4>
              <p className="text-sm text-gray-600">100% гаранция за качество или връщаме парите</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-600 mb-6">
            Готов да започнеш? Получи персонализирана оферта сега!
          </p>
          <a 
            href="#final-cta"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 inline-block"
          >
            Получи безплатна оферта
          </a>
        </div>
      </div>
    </section>
  );
}
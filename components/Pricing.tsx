// components/Pricing.tsx
import { siteConfig, createPhoneLink } from '../config/site.config';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Без скрити такси. Ясни цени. Честно ценообразуване.
          </h2>
          <p className="text-xl text-gray-600">
            Избери пакета, който ти подхожда най-добре
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Реферати */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {siteConfig.services.referati.name}
              </h3>
              <p className="text-gray-600">
                {siteConfig.services.referati.pages}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span>Стандартен срок (3-5 дни):</span>
                <span className="font-semibold">{siteConfig.services.referati.priceFrom}</span>
              </div>
              <div className="flex justify-between">
                <span>Експресен срок (24-48 часа):</span>
                <span className="font-semibold">20 лв./страница</span>
              </div>
              <div className="flex justify-between">
                <span>Спешен срок (до 24 часа):</span>
                <span className="font-semibold">25 лв./страница</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-semibold mb-3">Включва:</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {siteConfig.guarantees[0]}
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Титулна страница
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Библиография
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  1 {siteConfig.guarantees[3].toLowerCase()}
                </li>
              </ul>
            </div>

            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Поръчай сега
            </button>
          </div>

          {/* Курсови работи */}
          <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-blue-500 hover:shadow-2xl transition-shadow relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Най-популярно
              </span>
            </div>

            <div className="text-center mb-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {siteConfig.services.kursovi.name}
              </h3>
              <p className="text-gray-600">
                {siteConfig.services.kursovi.pages}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span>Стандартен срок (5-7 дни):</span>
                <span className="font-semibold">{siteConfig.services.kursovi.priceFrom}</span>
              </div>
              <div className="flex justify-between">
                <span>Експресен срок (2-4 дни):</span>
                <span className="font-semibold">23 лв./страница</span>
              </div>
              <div className="flex justify-between">
                <span>Спешен срок (до 48 часа):</span>
                <span className="font-semibold">28 лв./страница</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-semibold mb-3">Включва:</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Всичко от реферати пакета
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Задълбочен анализ
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Графики и таблици
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Препоръки
                </li>
              </ul>
            </div>

            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Поръчай сега
            </button>
          </div>

          {/* Дипломни работи */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {siteConfig.services.diplomni.name}
              </h3>
              <p className="text-gray-600">
                {siteConfig.services.diplomni.pages}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span>Стандартен срок (2-4 седмици):</span>
                <span className="font-semibold">{siteConfig.services.diplomni.priceFrom}</span>
              </div>
              <div className="flex justify-between">
                <span>Експресен срок (1-2 седмици):</span>
                <span className="font-semibold">25 лв./страница</span>
              </div>
              <div className="flex justify-between">
                <span>Спешен срок (до 1 седмица):</span>
                <span className="font-semibold">30 лв./страница</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-semibold mb-3">Включва:</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Пълно научно изследване
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Презентация в подарък
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  6 месеца поддръжка
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Предварителна защита
                </li>
              </ul>
            </div>

            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Поръчай сега
            </button>
          </div>
        </div>

        {/* Included in all packages */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-center mb-6">✅ Винаги включено (Безплатно):</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Титулна страница и съдържание',
              'Библиография и източници', 
              'Основно форматиране',
              'Проверка за правопис и граматика',
              'Антиплагиатска проверка',
              '1 безплатна корекция'
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offer */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            🔥 СПЕЦИАЛНА ОФЕРТА - Само до края на месеца!
          </h3>
          <div className="text-3xl font-bold mb-2">
            {siteConfig.promotions.newClient.discount} ОТСТЪПКА ЗА НОВИ КЛИЕНТИ
          </div>
          <p className="mb-4">
            Валидна само до {siteConfig.promotions.newClient.validUntil} при първа поръчка над {siteConfig.promotions.newClient.minAmount}
          </p>
          <p className="text-lg">
            Използвай код: <span className="font-bold bg-white text-red-500 px-3 py-1 rounded">
              {siteConfig.promotions.newClient.code}
            </span>
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a 
            href={createPhoneLink(siteConfig.contact.phone.number)}
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
          >
            📞 Обади се за оферта: {siteConfig.contact.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
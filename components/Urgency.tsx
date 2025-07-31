// components/Urgency.tsx - FIXED VERSION
import { siteConfig, getContactLink } from '../config/site.config';

export default function Urgency() {
  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-red-600 mb-4">
            {siteConfig.urgency.title}
          </h2>
          <p className="text-xl text-red-700 mb-6">
            {siteConfig.urgency.subtitle}
          </p>
        </div>

        {/* Urgent Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {siteConfig.urgency.offers.map((offer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-2 border-red-200 relative overflow-hidden">
              {/* Urgency Badge */}
              <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-sm font-semibold">
                {offer.badge}
              </div>

              <div className="pt-4">
                <div className="text-4xl mb-4">{offer.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Срок:</span>
                    <span className="font-semibold text-red-600">{offer.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Цена:</span>
                    <span className="font-bold text-green-600">{offer.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Налични места:</span>
                    <span className="font-semibold text-orange-600">{offer.availability}</span>
                  </div>
                </div>

                <a 
                  href={getContactLink('phone')}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 text-center inline-block"
                >
                  Резервирай сега
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Countdown Timer Section */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg p-8 text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">⏰ Ограничено време</h3>
          <p className="text-lg mb-6">
            {/* FIXED: Properly escaped quotes */}
            Промоцията &quot;Студентски отстъпки&quot; изтича скоро! Не пропускай тази възможност.
          </p>

          {/* Mock Countdown Display */}
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl font-bold">2</div>
              <div className="text-sm">Дни</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl font-bold">14</div>
              <div className="text-sm">Часа</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl font-bold">35</div>
              <div className="text-sm">Минути</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl font-bold">42</div>
              <div className="text-sm">Секунди</div>
            </div>
          </div>

          <a 
            href={getContactLink('phone')}
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 inline-block shadow-lg"
          >
            🎯 Използвай промоцията сега
          </a>
        </div>

        {/* Limited Slots Alert */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold text-yellow-800">Внимание: Ограничени места!</h4>
              <p className="text-yellow-700">
                Поради високото търсене, приемаме само {siteConfig.urgency.availableSlots} нови поръчки тази седмица. 
                Свържи се веднага, за да си осигуриш място!
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Присъединяват се към нас всеки ден:</p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <div>
              <div className="font-semibold text-blue-600">+12</div>
              <div>Нови клиенти днес</div>
            </div>
            <div>
              <div className="font-semibold text-green-600">+48</div>
              <div>Тази седмица</div>
            </div>
            <div>
              <div className="font-semibold text-purple-600">+187</div>
              <div>Този месец</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
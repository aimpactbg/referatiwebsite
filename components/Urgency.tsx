// File: components/Urgency.tsx
// This component is designed to create a sense of urgency and encourage immediate action.

export default function Urgency() {
  return (
    <section id="urgency" className="bg-blue-700 text-white py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extrabold">
            🔥 СПЕЦИАЛНА ОФЕРТА - Само до края на месеца!
          </h2>
        </div>

        {/* Main Promotion with Countdown */}
        <div className="bg-white text-gray-900 rounded-lg shadow-2xl p-8 mb-16 max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-600">15% ОТСТЪПКА ЗА НОВИ КЛИЕНТИ</h3>
          <p className="text-lg mt-2 mb-4">Валидна само до 31-ви число при първа поръчка над 150 лв. Използвай код: <strong className="bg-yellow-200 px-2 py-1 rounded">ПЪРВИ15</strong></p>
          <p className="font-semibold text-gray-700 mb-4">Остават само 12 дни до изтичане на офертата</p>
          {/* Countdown Timer Placeholder */}
          <div className="flex justify-center space-x-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <span className="text-4xl font-bold">12</span>
              <span className="block text-sm">Дни</span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <span className="text-4xl font-bold">08</span>
              <span className="block text-sm">Часа</span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <span className="text-4xl font-bold">45</span>
              <span className="block text-sm">Минути</span>
            </div>
          </div>
        </div>

        {/* Limited Availability & Seasonal Rush */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Limited Slots */}
          <div className="bg-blue-800 p-8 rounded-lg">
            <h4 className="text-2xl font-bold mb-4">⚡ ЕКСПРЕСНИ СЛОТОВЕ ЗА ТАЗИ СЕДМИЦА</h4>
            <p className="mb-4">Остават само 3 места за 24-часова доставка!</p>
            <ul className="space-y-2">
              <li>Понеделник: <span className="font-semibold text-red-400">❌ Запълнен</span></li>
              <li>Вторник: <span className="font-semibold text-red-400">❌ Запълнен</span></li>
              <li>Сряда: <span className="font-semibold text-green-400">✅ 1 място свободно</span></li>
              <li>Четвъртък: <span className="font-semibold text-green-400">✅ 1 място свободно</span></li>
              <li>Петък: <span className="font-semibold text-green-400">✅ 1 място свободно</span></li>
            </ul>
            <p className="mt-4 italic">"Резервирай сега, за да гарантираш бързата доставка!"</p>
          </div>
          {/* Seasonal Rush */}
          <div className="bg-blue-800 p-8 rounded-lg">
            <h4 className="text-2xl font-bold mb-4">📚 ПРИБЛИЖАВА КРАЯ НА СЕМЕСТЪРА!</h4>
            <p className="mb-4">Местата се запълват бързо в този период. Не чакай последния момент!</p>
             <ul className="text-sm space-y-1">
                <li><strong>Курсови работи:</strong> краен срок 15.12</li>
                <li><strong>Дипломни работи:</strong> краен срок 20.12</li>
                <li><strong>Реферати за сесията:</strong> краен срок 10.12</li>
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">🚀 НЕ ЧАКАЙ ПОВЕЧЕ!</h3>
            <p className="mb-8">Всяка изгубена минута намалява шансовете ти за специалните отстъпки, най-добрите автори и спазване на желания срок.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                 <a href="#final-cta" className="w-full sm:w-auto text-center bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition duration-300">
                    ПОРЪЧАЙ С 15% ОТСТЪПКА
                </a>
                 <a href="#final-cta" className="w-full sm:w-auto text-center bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-400 transition duration-300">
                    Резервирай експресен слот
                </a>
            </div>
        </div>

      </div>
    </section>
  );
}
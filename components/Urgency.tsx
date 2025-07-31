// components/Urgency.tsx
import { siteConfig, createPhoneLink } from '../config/site.config';

export default function Urgency() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-500 to-orange-600 text-white">
      <div className="container mx-auto px-4">
        {/* Main urgency message */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            🔥 СПЕЦИАЛНА ОФЕРТА - Само до края на месеца!
          </h2>

          <div className="bg-white bg-opacity-20 rounded-lg p-8 mb-8">
            <div className="text-4xl lg:text-5xl font-bold mb-4">
              {siteConfig.promotions.newClient.discount} ОТСТЪПКА ЗА НОВИ КЛИЕНТИ
            </div>
            <p className="text-xl mb-4">
              Валидна само до {siteConfig.promotions.newClient.validUntil} при първа поръчка над {siteConfig.promotions.newClient.minAmount}. 
              Използвай код: <span className="font-bold bg-white text-red-500 px-3 py-1 rounded">{siteConfig.promotions.newClient.code}</span>
            </p>
            <div className="text-lg">
              <strong>Остават само 12 дни до изтичане на офертата</strong>
            </div>
          </div>
        </div>

        {/* Express slots */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-6">⚡ ЕКСПРЕСНИ СЛОТОВЕ ЗА ТАЗИ СЕДМИЦА</h3>
            <p className="text-lg mb-4">
              Остават само {siteConfig.promotions.urgent.availableSlots} места за {siteConfig.promotions.urgent.deadline} доставка!
            </p>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white bg-opacity-10 rounded">
                <span>Понеделник:</span>
                <span className="text-red-300">❌ Запълнен</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white bg-opacity-10 rounded">
                <span>Вторник:</span>
                <span className="text-red-300">❌ Запълнен</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white bg-opacity-10 rounded">
                <span>Сряда:</span>
                <span className="text-green-300">✅ 1 място свободно</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white bg-opacity-10 rounded">
                <span>Четвъртък:</span>
                <span className="text-green-300">✅ 1 място свободно</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white bg-opacity-10 rounded">
                <span>Петък:</span>
                <span className="text-green-300">✅ 1 място свободно</span>
              </div>
            </div>

            <p className="mt-4 text-center font-semibold">
              "Резервирай сега, за да гарантираш бързата доставка!"
            </p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-6">📚 ПРИБЛИЖАВА КРАЯ НА СЕМЕСТЪРА!</h3>
            <p className="text-lg mb-4">
              Местата се запълват бързо в този период. Не чакай последния момент!
            </p>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white bg-opacity-10 rounded">
                <span>Курсови работи:</span>
                <span className="text-yellow-300">краен срок 15.12</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white bg-opacity-10 rounded">
                <span>Дипломни работи:</span>
                <span className="text-yellow-300">краен срок 20.12</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white bg-opacity-10 rounded">
                <span>Реферати за сесията:</span>
                <span className="text-yellow-300">краен срок 10.12</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-500 bg-opacity-30 rounded">
              <p className="font-semibold text-center">
                📊 Статистика: {siteConfig.stats.satisfiedClients} от нашите клиенти получават отлични оценки!
              </p>
            </div>
          </div>
        </div>

        {/* Action section */}
        <div className="bg-white bg-opacity-20 rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-6">🚀 НЕ ЧАКАЙ ПОВЕЧЕ!</h3>
          <p className="text-xl mb-8">
            Всяка изгубена минута намалява шансовете ти за специалните отстъпки, 
            най-добрите автори и спазване на желания срок.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="text-2xl mb-2">⏰</div>
              <h4 className="font-bold mb-2">Времето лети</h4>
              <p className="text-sm">
                Сроковете се приближават, а качествените автори са ограничени
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="text-2xl mb-2">💰</div>
              <h4 className="font-bold mb-2">Парите се пестят</h4>
              <p className="text-sm">
                {siteConfig.promotions.newClient.discount} отстъпка важи само до {siteConfig.promotions.newClient.validUntil}
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-bold mb-2">Качеството се гарантира</h4>
              <p className="text-sm">
                {siteConfig.stats.yearsExperience} опит, {siteConfig.stats.completedProjects} проекта
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={createPhoneLink(siteConfig.contact.phone.number)}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              📞 ОБАДИ СЕ ВЕДНАГА: {siteConfig.contact.phone.display}
            </a>

            <a 
              href="#final-cta"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              📧 ИЗПРАТИ ЗАЯВКА СЕГА
            </a>
          </div>

          <p className="mt-6 text-sm opacity-90">
            ⚡ Отговаряме в рамките на {siteConfig.contact.responseTime.phone} при обаждане!<br/>
            📧 Имейл отговор: {siteConfig.contact.responseTime.email}
          </p>
        </div>

        {/* Final warning */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-black bg-opacity-30 px-6 py-3 rounded-lg">
            <p className="font-bold text-lg">
              ⚠️ ВНИМАНИЕ: След изчерпване на експресните слотове, 
              минималният срок за доставка става 3-5 дни!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
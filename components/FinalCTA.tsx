// components/FinalCTA.tsx
import { siteConfig, createPhoneLink, createEmailLink, createViberLink } from '../config/site.config';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Готов си? Започни сега и промени академичното си бъдеще!
        </h2>

        <p className="text-xl mb-8 opacity-90">
          "Докато четеш това, десетки студенти вече получиха нашата помощ и спестиха си стотици часове стрес. 
          Присъедини се към тях!"
        </p>

        {/* Main CTA Section */}
        <div className="bg-white bg-opacity-10 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6">📝 Получи оферта за 30 минути:</h3>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
            <a 
              href={createPhoneLink(siteConfig.contact.phone.number)}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              📞 ОБАДИ СЕ СЕГА: {siteConfig.contact.phone.display}
            </a>

            <a 
              href={createEmailLink(siteConfig.contact.email.orders)}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              📧 ИЗПРАТИ ЗАЯВКА
            </a>
          </div>

          <p className="text-sm opacity-75">
            {siteConfig.contact.workingHours.display}
          </p>
        </div>

        {/* Alternative Contact Methods */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4">Други начини за контакт:</h4>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <a 
              href={createEmailLink(siteConfig.contact.email.main)}
              className="hover:text-yellow-300 transition-colors"
            >
              📧 {siteConfig.contact.email.main}
            </a>
            <span className="hidden sm:inline">|</span>
            <a 
              href={createViberLink(siteConfig.contact.social.viber)}
              className="hover:text-yellow-300 transition-colors"
            >
              📱 Viber: {siteConfig.contact.social.viber}
            </a>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="bg-red-500 bg-opacity-20 rounded-lg p-6 mb-8">
          <h4 className="text-xl font-bold mb-4">🔥 Спомни си:</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center">
              <span className="mr-2">❌</span>
              <span>Ако чакаш още: Сроковете стават невъзможни</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-2">❌</span>
              <span>Ако се колебаеш: Губиш {siteConfig.promotions.newClient.discount} отстъпката</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-2">✅</span>
              <span>Ако действаш сега: Проблемът ти е решен за 30 минути</span>
            </div>
          </div>
        </div>

        {/* Response Time Promise */}
        <div className="bg-white bg-opacity-10 rounded-lg p-4">
          <p className="font-semibold">
            ⚡ Отговаряме в рамките на {siteConfig.contact.responseTime.phone} при обаждане!
          </p>
          <p className="text-sm opacity-90 mt-2">
            Имейл отговор: {siteConfig.contact.responseTime.email} | 
            Viber: {siteConfig.contact.responseTime.viber}
          </p>
        </div>
      </div>
    </section>
  );
}
// components/FinalCTA.tsx - FIXED VERSION
import { siteConfig, getContactLink, getFormattedPhone, getMainEmail } from '../config/site.config';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          {siteConfig.finalCTA.title}
        </h2>
        <p className="text-xl mb-2">
          {siteConfig.finalCTA.subtitle}
        </p>
        <p className="text-lg opacity-90 mb-8">
          {/* FIXED: Escaped quotes properly */}
          Започни своя успешен академичен проект днес! Свържи се сега за &quot;безплатна консултация&quot; и
          получи &quot;персонализирана оферта&quot; за твоята курсова или дипломна работа.
        </p>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Phone Contact */}
          <div className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="font-semibold text-lg mb-2">Обади се сега</h3>
            <p className="mb-4">Незабавен отговор и консултация</p>
            <a 
              href={getContactLink('phone')} 
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              {getFormattedPhone()}
            </a>
            <p className="text-sm mt-2 opacity-80">
              Работно време: {siteConfig.contact.workingHours.display}
            </p>
          </div>

          {/* Email Contact */}
          <div className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="font-semibold text-lg mb-2">Изпрати имейл</h3>
            <p className="mb-4">Подробно запитване с прикачени файлове</p>
            <a 
              href={getContactLink('email')} 
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              {getMainEmail()}
            </a>
            <p className="text-sm mt-2 opacity-80">
              Отговор в рамките на: {siteConfig.contact.responseTime.email}
            </p>
          </div>

          {/* WhatsApp Contact */}
          <div className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-semibold text-lg mb-2">WhatsApp чат</h3>
            <p className="mb-4">Бърза комуникация и файлообмен</p>
            <a 
              href={getContactLink('whatsapp')} 
              className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300 inline-block"
            >
              Започни чат
            </a>
            <p className="text-sm mt-2 opacity-80">
              Онлайн: Всеки ден {siteConfig.contact.workingHours.display}
            </p>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="bg-red-500 bg-opacity-90 rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold mb-2">⚡ Спешни поръчки</h3>
          <p className="text-lg mb-4">
            Имаме налични места за спешни поръчки с доставка за 24 часа!
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>До 5 страници:</strong> 24 часа
            </div>
            <div>
              <strong>6-10 страници:</strong> 48 часа
            </div>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="mb-8">
          <a 
            href={getContactLink('phone')} 
            className="bg-yellow-400 text-blue-900 px-12 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transition-colors duration-300 inline-block shadow-lg"
          >
            🎯 Започни сега - Безплатна консултация
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm opacity-90">
          <div>
            <div className="font-semibold">✅ {siteConfig.stats.completedProjects}</div>
            <div>Завършени проекта</div>
          </div>
          <div>
            <div className="font-semibold">⭐ {siteConfig.stats.averageRating}</div>
            <div>Средна оценка</div>
          </div>
          <div>
            <div className="font-semibold">😊 {siteConfig.stats.satisfiedClients}</div>
            <div>Доволни клиенти</div>
          </div>
          <div>
            <div className="font-semibold">🔒 100%</div>
            <div>Конфиденциалност</div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-white border-opacity-20">
          <p className="mb-4">Последвай ни за полезни съвети:</p>
          <div className="flex justify-center space-x-4">
            {siteConfig.social.facebook && (
              <a href={siteConfig.social.facebook} className="text-white hover:text-blue-200 transition-colors">
                <span className="sr-only">Facebook</span>
                📘 Facebook
              </a>
            )}
            {siteConfig.social.instagram && (
              <a href={siteConfig.social.instagram} className="text-white hover:text-pink-200 transition-colors">
                <span className="sr-only">Instagram</span>
                📷 Instagram
              </a>
            )}
            {siteConfig.social.linkedin && (
              <a href={siteConfig.social.linkedin} className="text-white hover:text-blue-200 transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼 LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
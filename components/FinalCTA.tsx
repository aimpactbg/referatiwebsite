// components/FinalCTA.tsx - REBUILT VERSION
'use client';
import { siteConfig, getContactLink, getFormattedPhone, getMainEmail } from '../config/site.config';

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Готов си? Започни сега и промени академичното си бъдеще!
          </h2>

          <p className="text-xl mb-8 text-blue-100">
            "Докато четеш това, десетки студенти вече получиха нашата помощ и спестиха си стотици часове стрес. Присъедини се към тях!"
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">{siteConfig.stats.projectsCompleted}+</div>
              <div className="text-blue-200">Завършени проекта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">{siteConfig.stats.satisfiedClients}%</div>
              <div className="text-blue-200">Доволни клиенти</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">{siteConfig.stats.yearsExperience}</div>
              <div className="text-blue-200">Години опит</div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              📝 Получи оферта за 30 минути:
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              Най-бързият начин за връзка:
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Phone */}
            <a
              href={getContactLink('phone')}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="text-2xl mb-2">📞</div>
              <div className="text-sm">ОБАДИ СЕ СЕГА</div>
              <div className="font-bold">{getFormattedPhone()}</div>
              <div className="text-xs mt-1 opacity-90">08:00 - 22:00 (всеки ден)</div>
            </a>

            {/* Viber */}
            <a
              href={getContactLink('viber')}
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="text-2xl mb-2">💬</div>
              <div className="text-sm">VIBER ЧАТ</div>
              <div className="font-bold">Веднага отговаряме</div>
              <div className="text-xs mt-1 opacity-90">Най-бърз начин</div>
            </a>

            {/* WhatsApp */}
            <a
              href={getContactLink('whatsapp')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="text-2xl mb-2">📱</div>
              <div className="text-sm">WHATSAPP</div>
              <div className="font-bold">Чат поддръжка</div>
              <div className="text-xs mt-1 opacity-90">24/7 достъпност</div>
            </a>

            {/* Email */}
            <a
              href={getContactLink('email')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="text-2xl mb-2">✉️</div>
              <div className="text-sm">ИМЕЙЛ</div>
              <div className="font-bold text-sm">{getMainEmail()}</div>
              <div className="text-xs mt-1 opacity-90">Отговор до 30 мин</div>
            </a>
          </div>

          {/* Urgency Section */}
          <div className="bg-red-600 bg-opacity-20 border border-red-400 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">
              🔥 Спомни си:
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="flex items-center">
                <span className="text-red-300 mr-2">❌</span>
                <span>Ако чакаш още: Сроковете стават невъзможни</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-300 mr-2">❌</span>
                <span>Ако се колебаеш: Губиш 15% отстъпката</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✅</span>
                <span>Ако действаш сега: Проблемът ти е решен за 30 минути</span>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center">
            <p className="text-lg text-blue-100 mb-6">
              Всеки изгубен момент намалява шансовете ти за специалните отстъпки, най-добрите автори и спазване на желания срок.
            </p>

            <div className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full inline-block font-bold text-lg">
              ⚡ Започни сега - спести си стреса!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
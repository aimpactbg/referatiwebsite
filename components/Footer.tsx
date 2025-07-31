// File: components/Footer.tsx
// This component creates a detailed footer with contacts, links, and trust badges.

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        {/* Mini CTA before the main footer content */}
        <div className="text-center mb-12 border-b border-gray-700 pb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Все още се колебаеш?</h3>
            <p className="mb-4">Обади се за безплатна консултация: <a href="tel:+359000000000" className="text-blue-400 hover:underline">+359 XXX XXX XXX</a></p>
            <a href="#final-cta" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                Получи оферта сега
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: Contacts */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Referati.website</h3>
            <p className="text-sm">Вашият партньор за академичен успех.</p>
            <ul className="space-y-2 text-sm">
              <li>📞 <a href="tel:+359000000000" className="hover:text-white">+359 XXX XXX XXX</a></li>
              <li>📧 <a href="mailto:info@referati.website" className="hover:text-white">info@referati.website</a></li>
              <li>💬 Viber/WhatsApp: +359 XXX XXX XXX</li>
            </ul>
            <div>
                <p className="font-semibold">Работно време:</p>
                <p className="text-sm">Понеделник - Неделя: 08:00 - 22:00</p>
                <p className="text-sm">Спешни случаи: 24/7</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white">Реферати и есета</a></li>
                <li><a href="#services" className="hover:text-white">Курсови работи</a></li>
                <li><a href="#services" className="hover:text-white">Дипломни работи</a></li>
                <li><a href="#services" className="hover:text-white">Презентации</a></li>
                <li><a href="#services" className="hover:text-white">Преводи</a></li>
              </ul>
            </div>
             <div>
              <h3 className="text-lg font-semibold text-white mb-4">Информация</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#process" className="hover:text-white">Как работим</a></li>
                <li><a href="#pricing" className="hover:text-white">Цени и отстъпки</a></li>
                <li><a href="#faq" className="hover:text-white">Често задавани въпроси</a></li>
                <li><a href="#" className="hover:text-white">За нас</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Правни и Социални</h3>
            <ul className="space-y-2 text-sm mb-6">
                <li><a href="#" className="hover:text-white">Политика за поверителност</a></li>
                <li><a href="#" className="hover:text-white">Общи условия</a></li>
            </ul>
             <h3 className="text-lg font-semibold text-white mb-4">Последвай ни</h3>
             <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="hover:text-white">📘 Facebook</a>
                <a href="#" aria-label="Instagram" className="hover:text-white">📸 Instagram</a>
                <a href="#" aria-label="LinkedIn" className="hover:text-white">💼 LinkedIn</a>
             </div>
          </div>
        </div>

        {/* SEO Footer Links & Payment Icons */}
        <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="text-center text-sm text-gray-400 mb-4">
                <p className="font-semibold mb-2">Приемаме плащания с:</p>
                <p>💳 EasyPay | 💎 Revolut | 🏦 Банков превод | 💰 PayPal</p>
            </div>
            <div className="text-center text-xs text-gray-500">
                <p>Реферати София | Курсови работи Пловдив | Дипломни работи Варна | Академично писане България</p>
            </div>
        </div>

      </div>
      {/* Bottom Bar */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Referati.website. Всички права запазени.</p>
          <p className="mt-2 md:mt-0">🔒 Сигурни плащания | ✅ 100% Конфиденциалност | 📞 24/7 Поддръжка</p>
        </div>
      </div>
      {/* TODO: Implement floating/sticky elements with JavaScript later.
        - Promo bar at the top
        - Floating CTA buttons
        - Sticky bottom bar on mobile
      */}
    </footer>
  );
}
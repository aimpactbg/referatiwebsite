// File: components/FinalCTA.tsx
// This is the final and most important Call to Action section, including a contact form.

export default function FinalCTA() {
  return (
    <section id="final-cta" className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Готов си? Започни сега и промени академичното си бъдеще!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            &ldquo;Докато четеш това, десетки студенти вече получиха нашата помощ и спестиха си стотици часове стрес. Присъедини се към тях!&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6">📝 Получи оферта за 30 минути:</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Името ти*</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Телефон/Viber*</label>
                <input type="tel" id="phone" name="phone" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="work-type" className="block text-sm font-medium text-gray-700">Вид работа*</label>
                <select id="work-type" name="work-type" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Реферат/Есе</option>
                  <option>Курсова работа</option>
                  <option>Дипломна работа</option>
                </select>
              </div>
               <div>
                <label htmlFor="pages" className="block text-sm font-medium text-gray-700">Брой страници*</label>
                <input type="number" id="pages" name="pages" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Желан срок*</label>
                <select id="deadline" name="deadline" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>2+ седмици</option>
                  <option>1 седмица</option>
                  <option>3 дни</option>
                  <option>24 часа</option>
                </select>
              </div>
              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">Специални изисквания</label>
                <textarea id="requirements" name="requirements" rows={3} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
               <div>
                <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">Прикачи файлове</label>
                <input type="file" id="file-upload" name="file-upload" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300">
                  ИЗПРАТИ ЗАЯВКАТА - ПОЛУЧИ ОФЕРТА
                </button>
                <p className="text-xs text-center text-gray-500 mt-1">Полетата със * са задължителни</p>
              </div>
            </form>
          </div>

          {/* Right Column: Contact Info & Final Appeal */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Най-бързият начин за връзка:</h3>
                <a href="tel:+359000000000" className="block w-full text-center bg-green-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition duration-300 mb-4">
                    📞 ОБАДИ СЕ СЕГА: +359 XXX XXX XXX
                </a>
                <p className="text-center text-sm text-gray-600">08:00 - 22:00 (всеки ден)</p>
            </div>
             <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Други начини за контакт:</h3>
                <div className="space-y-3">
                    <a href="#" className="block text-center bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-300">
                        📱 Изпрати съобщение във Viber
                    </a>
                     <a href="#" className="block text-center bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition duration-300">
                        💬 Отвори WhatsApp чат
                    </a>
                    <a href="mailto:info@referati.website" className="block text-center bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300">
                        📧 Изпрати имейл
                    </a>
                </div>
            </div>
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">🔥 Спомни си:</h3>
                <ul className="space-y-2">
                    <li className="flex items-start"><span className="mr-2">❌</span> Ако чакаш още: Сроковете стават невъзможни</li>
                    <li className="flex items-start"><span className="mr-2">❌</span> Ако се колебаеш: Губиш 15% отстъпката</li>
                    <li className="flex items-start"><span className="mr-2">✅</span> Ако действаш сега: Проблемът ти е решен за 30 минути</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// File: components/Services.tsx
// This component details the services offered, including main services, extras, and included features.

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Какво можем да изготвим за теб?
          </h2>
          <p className="mt-4 text-lg text-gray-600">От кратки есета до цялостни дипломни работи.</p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Service Card 1: Referati */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <div className="text-5xl mb-4">📄</div>
            <h3 className="text-2xl font-bold mb-2">Реферати и есета</h3>
            <ul className="text-gray-600 space-y-2 text-left">
              <li><strong>Обем:</strong> 3-15 страници</li>
              <li><strong>Срок:</strong> От 24 часа</li>
              <li><strong>Цена:</strong> От 15 лв./страница</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">Идеални за семинарни упражнения и текущи задачи.</p>
          </div>

          {/* Service Card 2: Kursovi Raboti */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-2xl font-bold mb-2">Курсови работи</h3>
            <ul className="text-gray-600 space-y-2 text-left">
              <li><strong>Обем:</strong> 15-30 страници</li>
              <li><strong>Срок:</strong> От 3 дни</li>
              <li><strong>Цена:</strong> От 18 лв./страница</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">Задълбочени изследвания с анализ и препоръки.</p>
          </div>

          {/* Service Card 3: Diplomni Raboti */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold mb-2">Дипломни работи</h3>
            <ul className="text-gray-600 space-y-2 text-left">
              <li><strong>Обем:</strong> 40-80+ страници</li>
              <li><strong>Срок:</strong> От 2 седмици</li>
              <li><strong>Цена:</strong> От 20 лв./страница</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">Пълни научни изследвания с оригинални заключения.</p>
          </div>
        </div>

        {/* Additional Services & Inclusions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4 text-gray-800">Всички услуги включват:</h4>
            <ul className="space-y-2">
              <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Безплатни корекции</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Проверка за оригиналност</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Правилно форматиране</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Актуални източници</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>24/7 поддръжка</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4 text-gray-800">Други услуги и специалности:</h4>
            <p className="text-gray-700 mb-4">Презентации, проекти, бизнес планове, казуси, преводи, редакция, набор и форматиране.</p>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Работим във всички специалности:</h4>
            <div className="flex flex-wrap gap-2">
                <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Икономика</span>
                <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Право</span>
                <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Медицина</span>
                <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Техника</span>
                <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Хуманитарни науки</span>
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">"Не виждаш нужната ти услуга? Свържи се с нас - можем да помогнем с всякакъв вид академична работа!"</p>
            <a href="#pricing" className="text-blue-600 font-bold hover:underline">Виж всички услуги и цени →</a>
        </div>

      </div>
    </section>
  );
}
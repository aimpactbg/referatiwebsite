// components/Services.tsx
import { siteConfig } from '../config/site.config';

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Какво можем да изготвим за теб?
          </h2>
          <p className="text-xl text-gray-600">
            От кратки есета до цялостни дипломни работи.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Реферати и есета */}
          <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-6">📄</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {siteConfig.services.referati.name}
            </h3>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Обем:</span>
                <span className="font-semibold">{siteConfig.services.referati.pages}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Срок:</span>
                <span className="font-semibold">{siteConfig.services.referati.delivery}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Цена:</span>
                <span className="font-semibold text-blue-600">{siteConfig.services.referati.priceFrom}</span>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Идеални за семинарни упражнения и текущи задачи.
            </p>

            <div className="border-t pt-4">
              <h4 className="font-semibold mb-3">Включва:</h4>
              <ul className="text-sm text-left space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {siteConfig.guarantees[0]}
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {siteConfig.guarantees[3]}
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Правилно форматиране
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Актуални източници
                </li>
              </ul>
            </div>
          </div>

          {/* Курсови работи */}
          <div className="bg-blue-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow border-2 border-blue-200">
            <div className="text-5xl mb-6">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {siteConfig.services.kursovi.name}
            </h3>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Обем:</span>
                <span className="font-semibold">{siteConfig.services.kursovi.pages}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Срок:</span>
                <span className="font-semibold">{siteConfig.services.kursovi.delivery}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Цена:</span>
                <span className="font-semibold text-blue-600">{siteConfig.services.kursovi.priceFrom}</span>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Задълбочени изследвания с анализ и препоръки.
            </p>

            <div className="border-t pt-4">
              <h4 className="font-semibold mb-3">Включва:</h4>
              <ul className="text-sm text-left space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Всичко от реферати
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
                  Практически препоръки
                </li>
              </ul>
            </div>
          </div>

          {/* Дипломни работи */}
          <div className="bg-purple-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow border-2 border-purple-200">
            <div className="text-5xl mb-6">🎓</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {siteConfig.services.diplomni.name}
            </h3>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Обем:</span>
                <span className="font-semibold">{siteConfig.services.diplomni.pages}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Срок:</span>
                <span className="font-semibold">{siteConfig.services.diplomni.delivery}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Цена:</span>
                <span className="font-semibold text-blue-600">{siteConfig.services.diplomni.priceFrom}</span>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Пълни научни изследвания с оригинални заключения.
            </p>

            <div className="border-t pt-4">
              <h4 className="font-semibold mb-3">Включва:</h4>
              <ul className="text-sm text-left space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Пълно научно изследване
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Презентация БЕЗПЛАТНО
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  6 месеца поддръжка
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Помощ за защитата
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* All services include */}
        <div className="bg-green-50 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-center mb-6">Всички услуги включват:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteConfig.guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>{guarantee}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional services */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Други услуги и специалности:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {[
              { icon: "📊", name: "Презентации" },
              { icon: "📋", name: "Проекти" },
              { icon: "💼", name: "Бизнес планове" },
              { icon: "🔍", name: "Казуси" },
              { icon: "🌐", name: "Преводи" },
              { icon: "✏️", name: "Редакция" },
              { icon: "⌨️", name: "Набор" },
              { icon: "🎨", name: "Форматиране" }
            ].map((service, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-3xl mb-2">{service.icon}</div>
                <div className="font-medium">{service.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialties */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h4 className="text-xl font-bold mb-4">Работим във всички специалности:</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Икономика", "Право", "Медицина", "Инженерство", "Педагогика", 
              "Психология", "Социология", "История", "Филология", "Математика",
              "Физика", "Химия", "Биология", "География", "Философия"
            ].map((specialty, index) => (
              <span key={index} className="bg-white px-3 py-1 rounded-full text-sm font-medium border">
                {specialty}
              </span>
            ))}
          </div>
          <p className="mt-4 text-gray-600">
            "Не виждаш нужната ти услуга? Свържи се с нас - можем да помогнем с всякакъв вид академична работа!"
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a 
            href="#pricing" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
          >
            Виж всички услуги и цени →
          </a>
        </div>
      </div>
    </section>
  );
}
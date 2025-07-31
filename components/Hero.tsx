// components/Hero.tsx
import { siteConfig, createPhoneLink } from '../config/site.config';

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-20 lg:py-24 flex flex-col lg:flex-row items-center">
        {/* Left Column - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            {siteConfig.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            {siteConfig.description}
          </p>

          {/* Key Benefits with Icons */}
          <div className="space-y-4 text-left mb-8">
            {/* 100% Originality */}
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold">{siteConfig.guarantees[0]}</h3>
                <p className="text-gray-600 text-sm">
                  Всяка работа се пише от нулата и се проверява с антиплагиатски софтуер.
                </p>
              </div>
            </div>

            {/* Deadlines */}
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold">{siteConfig.guarantees[1]}</h3>
                <p className="text-gray-600 text-sm">
                  Доставяме винаги навреме - {siteConfig.stats.avgDeliveryTime}.
                </p>
              </div>
            </div>

            {/* Professional Authors */}
            <div className="flex items-start">
              <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div>
                <h3 className="font-semibold">{siteConfig.guarantees[2]}</h3>
                <p className="text-gray-600 text-sm">
                  Експерти с университетско образование в различни области.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
            <a 
              href="#final-cta" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Получи безплатна оферта
            </a>

            <a 
              href={createPhoneLink(siteConfig.contact.phone.number)}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full font-semibold transition-all flex items-center gap-2"
            >
              📞 {siteConfig.contact.phone.display}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-6 text-sm text-gray-500 flex flex-col sm:flex-row gap-4 items-center lg:items-start">
            <span className="flex items-center gap-1">
              ✅ Безплатна консултация
            </span>
            <span className="flex items-center gap-1">
              ✅ Без скрити такси
            </span>
            <span className="flex items-center gap-1">
              ✅ Гарантирано качество
            </span>
          </div>

          {/* Quick stats */}
          <div className="mt-8 p-4 bg-white rounded-lg shadow-sm border">
            <div className="flex justify-between text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{siteConfig.stats.completedProjects}</div>
                <div className="text-xs text-gray-500">Завършени проекта</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{siteConfig.stats.satisfiedClients}</div>
                <div className="text-xs text-gray-500">Доволни клиенти</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{siteConfig.stats.yearsExperience}</div>
                <div className="text-xs text-gray-500">Опит</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img 
            src="https://placehold.co/600x450/e0e7ff/334155?text=Студент+с+лаптоп"
            alt="Студент с лаптоп и книги в учебна среда"
            className="rounded-lg shadow-2xl mx-auto max-w-full h-auto" 
          />
        </div>
      </div>
    </section>
  );
}
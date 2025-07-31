// File: components/Hero.tsx
// This is our reusable Hero section component, updated with the new text.

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-20 lg:py-24 flex flex-col lg:flex-row items-center">
        {/* Left Column (Text Content) */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Професионални реферати и курсови работи с гарантирана оригиналност
          </h1>
          <h2 className="text-lg lg:text-xl text-gray-600 mb-8">
            Индивидуални академични работи от професионални автори. 100% оригинални, винаги навреме, с гаранция за качество.
          </h2>

          {/* Key Benefits */}
          <div className="space-y-4 text-left mb-8">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              <div>
                <h3 className="font-semibold">100% Оригиналност</h3>
                <p className="text-gray-600 text-sm">Всяка работа се пише от нулата и се проверява с антиплагиатски софтуер.</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              <div>
                <h3 className="font-semibold">Спазване на срокове</h3>
                <p className="text-gray-600 text-sm">Доставяме винаги навреме - от 24 часа до няколко седмици.</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              <div>
                <h3 className="font-semibold">Професионални автори</h3>
                <p className="text-gray-600 text-sm">Експерти с университетско образование в различни области.</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center lg:items-start">
            <a href="#final-cta" className="w-full sm:w-auto text-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition duration-300">
              Получи безплатна оферта
            </a>
            <p className="text-xs text-gray-500 mt-2">Безплатна консултация • Без скрити такси • Гарантирано качество</p>
            <a href="#process" className="mt-6 text-blue-600 font-semibold hover:underline">
              Как работим?
            </a>
          </div>
        </div>

        {/* Right Column (Image/Visual Placeholder) */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img 
            src="https://placehold.co/600x450/e0e7ff/334155?text=Студент+с+лаптоп" 
            alt="Студент с лаптоп и книги в учебна среда" 
            className="rounded-lg shadow-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
// File: components/Trust.tsx
// CORRECTED VERSION with escaped quotes

export default function Trust() {
  return (
    <section id="trust" className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Доверие и Социално Доказателство
          </h2>
          <p className="mt-4 text-lg text-gray-600">Хиляди студенти ни се довериха. Вижте защо.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20">
          <div>
            <p className="text-5xl font-extrabold text-blue-600">5,000+</p>
            <p className="mt-2 text-lg font-semibold text-gray-700">Завършени проекта</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-blue-600">98%</p>
            <p className="mt-2 text-lg font-semibold text-gray-700">Доволни клиенти</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-blue-600">7 години</p>
            <p className="mt-2 text-lg font-semibold text-gray-700">Опит в академичното писане</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <p className="text-gray-700 italic mb-4">&ldquo;Получих курсовата си работа точно навреме и с отлично качество. Професионалният подход и комуникацията бяха на високо ниво.&rdquo;</p>
            <p className="font-bold text-gray-900">— Мария С., студентка по икономика</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <p className="text-gray-700 italic mb-4">&ldquo;Много съм доволен от дипломната си работа. Авторът разбра точно какво искам и резултатът надмина очакванията ми.&rdquo;</p>
            <p className="font-bold text-gray-900">— Георги М., магистър по право</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <p className="text-gray-700 italic mb-4">&ldquo;Бърза доставка, качествено изпълнение и много добра цена. Определено ще препоръчам на колегите си.&rdquo;</p>
            <p className="font-bold text-gray-900">— Анна К., студентка по медицина</p>
          </div>
        </div>
        {/* Trust Badges Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            <h3 className="font-semibold text-gray-800">100% Конфиденциалност</h3>
            <p className="text-sm text-gray-600">Защита на личните данни</p>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h3 className="font-semibold text-gray-800">Антиплагиатска проверка</h3>
            <p className="text-sm text-gray-600">Всяка работа се проверява</p>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            <h3 className="font-semibold text-gray-800">Експресна доставка</h3>
            <p className="text-sm text-gray-600">До 24 часа при нужда</p>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
            <h3 className="font-semibold text-gray-800">Индивидуален подход</h3>
            <p className="text-sm text-gray-600">Уникална работа за всеки клиент</p>
          </div>
        </div>

      </div>
    </section>
  );
}
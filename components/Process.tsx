// File: components/Process.tsx
// This component explains the 4-step working process.

export default function Process() {
  return (
    <section id="process" className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Как работим? Лесно като 1-2-3-4!
          </h2>
          <p className="mt-4 text-lg text-gray-600">Прозрачен и лесен процес, създаден за твое удобство.</p>
        </div>

        {/* Steps Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden md:block"></div>

          {/* Step 1: Order */}
          <div className="relative md:flex md:items-center md:space-x-8 mb-12">
            <div className="md:w-1/2 flex justify-start md:justify-end">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full md:max-w-md text-left">
                <h3 className="text-xl font-bold text-blue-600 mb-2">СТЪПКА 1: ПОРЪЧКА</h3>
                <h4 className="text-lg font-semibold mb-2">📝 Разкажи ни какво ти трябва</h4>
                <p className="text-gray-600 text-sm mb-4">Попълваш кратък формуляр с детайли за работата, изискванията, темата и желания срок. Прикачваш файлове, ако имаш.</p>
                <p className="text-xs text-gray-500 italic">"Колкото повече детайли споделиш, толкова по-точна ще бъде работата."</p>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -top-2 -bottom-2 md:relative md:left-auto md:translate-x-0 flex items-center justify-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10">1</div>
            </div>
            <div className="md:w-1/2"></div>
          </div>

          {/* Step 2: Offer */}
          <div className="relative md:flex md:items-center md:space-x-8 mb-12">
            <div className="md:w-1/2 hidden md:block"></div>
            <div className="absolute left-1/2 -translate-x-1/2 -top-2 -bottom-2 md:relative md:left-auto md:translate-x-0 flex items-center justify-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10">2</div>
            </div>
            <div className="md:w-1/2 flex justify-start">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full md:max-w-md text-left">
                <h3 className="text-xl font-bold text-blue-600 mb-2">СТЪПКА 2: ОФЕРТА</h3>
                <h4 className="text-lg font-semibold mb-2">💰 Получаваш персонализирана оферта</h4>
                <p className="text-gray-600 text-sm mb-4">Анализираме заявката ти, изчисляваме точната цена и предлагаме реалистичен срок за изпълнение.</p>
                <p className="text-xs text-gray-500 italic">"Офертата е безплатна и без задължения."</p>
              </div>
            </div>
          </div>

          {/* Step 3: Execution */}
          <div className="relative md:flex md:items-center md:space-x-8 mb-12">
            <div className="md:w-1/2 flex justify-start md:justify-end">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full md:max-w-md text-left">
                <h3 className="text-xl font-bold text-blue-600 mb-2">СТЪПКА 3: ИЗПЪЛНЕНИЕ</h3>
                <h4 className="text-lg font-semibold mb-2">✍️ Започваме работа веднага</h4>
                <p className="text-gray-600 text-sm mb-4">Експерт в съответната област поема проекта, провежда изследване и пише оригинален текст според изискванията.</p>
                <p className="text-xs text-gray-500 italic">"Можеш да следиш прогреса и да общуваш с автора."</p>
              </div>
            </div>
             <div className="absolute left-1/2 -translate-x-1/2 -top-2 -bottom-2 md:relative md:left-auto md:translate-x-0 flex items-center justify-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10">3</div>
            </div>
            <div className="md:w-1/2"></div>
          </div>

          {/* Step 4: Delivery */}
          <div className="relative md:flex md:items-center md:space-x-8">
             <div className="md:w-1/2 hidden md:block"></div>
             <div className="absolute left-1/2 -translate-x-1/2 -top-2 -bottom-2 md:relative md:left-auto md:translate-x-0 flex items-center justify-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10">4</div>
            </div>
            <div className="md:w-1/2 flex justify-start">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full md:max-w-md text-left">
                <h3 className="text-xl font-bold text-blue-600 mb-2">СТЪПКА 4: ДОСТАВКА</h3>
                <h4 className="text-lg font-semibold mb-2">🎯 Получаваш готовата работа</h4>
                <p className="text-gray-600 text-sm mb-4">Проверяваме за грешки, форматираме и пускаме през антиплагиатски софтуер преди да ти изпратим работата по имейл.</p>
                <p className="text-xs text-gray-500 italic">"Ако нещо не е наред, правим безплатни корекции."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantees during the process */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                    <h4 className="font-bold text-lg">🔄 Редовна комуникация</h4>
                    <p className="text-sm text-gray-600">Получаваш updates за напредъка</p>
                </div>
                 <div className="text-center">
                    <h4 className="font-bold text-lg">📱 24/7 поддръжка</h4>
                    <p className="text-sm text-gray-600">Винаги можеш да се свържеш с нас</p>
                </div>
                 <div className="text-center">
                    <h4 className="font-bold text-lg">⚡ Спешни случаи</h4>
                    <p className="text-sm text-gray-600">Можем да работим и в уикенди</p>
                </div>
                 <div className="text-center">
                    <h4 className="font-bold text-lg">🛡️ Конфиденциалност</h4>
                    <p className="text-sm text-gray-600">Данните ти са в безопасност</p>
                </div>
            </div>
        </div>

        {/* Final Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            "Готов да започнеш? Процесът е толкова лесен, че ще се учудиш защо не си се обърнал към нас по-рано!"
          </p>
        </div>
      </div>
    </section>
  );
}
// File: components/Guarantees.tsx
// This component details all the guarantees and advantages of the service.

export default function Guarantees() {
  return (
    <section id="guarantees" className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Защо да избереш нас? Ето нашите железни гаранции!
          </h2>
        </div>

        {/* Main Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Guarantee 1: Originality */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">🎯</span> 100% ОРИГИНАЛНОСТ
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Всяка работа се пише от нулата специално за теб.</li>
              <li>Проверка с професионален антиплагиатски софтуер.</li>
              <li>Предоставяме ти отчета за оригиналност.</li>
              <li className="font-semibold">Ако открием плагиатство - пълно възстановяване на парите.</li>
            </ul>
          </div>

          {/* Guarantee 2: Deadlines */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">⏰</span> СПАЗВАНЕ НА СРОКОВЕ
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Никога не сме закъснели с доставка.</li>
              <li>При закъснение от наша страна - 50% отстъпка.</li>
              <li>Възможност за експресно изпълнение (24-48 часа).</li>
              <li className="font-semibold">Срокът е свещен за нас.</li>
            </ul>
          </div>

          {/* Guarantee 3: Professional Authors */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">👨‍🎓</span> ПРОФЕСИОНАЛНИ АВТОРИ
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Само университетски преподаватели и докторанти.</li>
              <li>Минимум 5 години опит в академичното писане.</li>
              <li>Специализация в конкретни научни области.</li>
              <li className="font-semibold">Качеството на текста говори само за себе си.</li>
            </ul>
          </div>

          {/* Guarantee 4: Free Revisions */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">🔄</span> БЕЗПЛАТНИ КОРЕКЦИИ
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Неограничен брой ревизии в рамките на 14 дни.</li>
              <li>Промени без допълнително заплащане.</li>
              <li>Бърза реакция при поискани корекции.</li>
              <li className="font-semibold">Не плащаш, докато не си 100% доволен.</li>
            </ul>
          </div>

          {/* Guarantee 5: Confidentiality */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">🔒</span> ПЪЛНА КОНФИДЕНЦИАЛНОСТ
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Никога не разкриваме информация за клиентите.</li>
              <li>Сигурни канали за комуникация и плащане.</li>
              <li>Автоматично изтриване на файловете след 90 дни.</li>
              <li className="font-semibold">Анонимността ти е гарантирана.</li>
            </ul>
          </div>
        </div>

        {/* Additional Advantages & Special Guarantees */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-blue-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-4">Допълнителни предимства</h4>
                <ul className="space-y-2">
                    <li className="flex items-start">💬 <strong className="ml-2 mr-1">24/7 Поддръжка:</strong> Винаги има някой да ти отговори.</li>
                    <li className="flex items-start">📚 <strong className="ml-2 mr-1">Актуални източници:</strong> Използваме най-новите изследвания.</li>
                    <li className="flex items-start">📄 <strong className="ml-2 mr-1">Правилно форматиране:</strong> Според всички изисквания.</li>
                    <li className="flex items-start">💡 <strong className="ml-2 mr-1">Оригинални идеи:</strong> Създаваме нови решения и анализи.</li>
                    <li className="flex items-start">🎁 <strong className="ml-2 mr-1">Бонуси:</strong> Безплатна библиография, титулна страница и план.</li>
                </ul>
            </div>
             <div className="bg-green-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-4">Специални гаранции</h4>
                 <div className="mb-4">
                    <h5 className="font-semibold">За дипломни работи:</h5>
                    <p className="text-sm text-gray-700">Предварителна защита, презентация в подарък и 6 месеца поддръжка.</p>
                </div>
                <div>
                    <h5 className="font-semibold">За спешни поръчки:</h5>
                    <p className="text-sm text-gray-700">Приоритетно обслужване, почасово отчитане и гаранция за резултат или парите обратно.</p>
                </div>
            </div>
        </div>

        {/* Our Promise */}
        <div className="bg-gray-800 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Нашето обещание</h3>
            <p className="italic max-w-3xl mx-auto mb-4">&ldquo;Ние не просто пишем текстове - ние създаваме академични работи, които ще те направят горд. Всяка работа носи нашия подпис за качество и професионализъм.&rdquo;</p>
            <p className="font-semibold">Ако не си доволен по каквато и да било причина в първите 48 часа - връщаме ти парите без въпроси!</p>
        </div>
      </div>
    </section>
  );
}
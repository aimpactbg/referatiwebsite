// File: components/FAQ.tsx
// This component provides answers to the most common questions in an accordion style.

export default function FAQ() {
  // We can store the FAQ data in an array of objects to keep the JSX clean.
  const faqData = [
    {
      question: "КАК ГАРАНТИРАТЕ ЛИПСАТА НА ПЛАГИАТСТВО?",
      answer: "Всяка работа се пише от нулата специално за теб от наш експерт. След завършване я проверяваме с професионален антиплагиатски софтуер (Turnitin/Unicheck). Предоставяме ти официален отчет за оригиналност. Ако открием плагиатство над 15% - връщаме пълната сума без въпроси."
    },
    {
      question: "КАКВО СТАВА АКО НЕ СЪМ ДОВОЛЕН ОТ РАБОТАТА?",
      answer: "Предлагаме неограничен брой безплатни корекции в рамките на 14 дни след доставката. Ако все пак не си доволен, имаш право на пълно възстановяване на парите в първите 48 часа след получаване. Нашата цел е 100% удовлетворение."
    },
    {
      question: "КОЛКО ВРЕМЕ ОТНЕМА ИЗГОТВЯНЕТО?",
      answer: "Реферат (до 10 стр.): 1-3 дни. Курсова работа (до 30 стр.): 3-7 дни. Дипломна работа (50+ стр.): 2-4 седмици. За спешни случаи можем да изготвим реферат за 24 часа. Конкретният срок зависи от сложността и текущата ни натовареност."
    },
    {
      question: "КОИ СА ВАШИТЕ АВТОРИ?",
      answer: "Работим само с дипломирани специалисти - университетски преподаватели, докторанти и професионалисти с минимум 5 години опит. Всеки автор се специализира в конкретни области и преминава през строг отбор. Имаме експерти в над 50 научни области."
    },
    {
      question: "СИГУРНИ ЛИ СА МОИТЕ ДАННИ?",
      answer: "Абсолютно! Използваме криптирани канали за комуникация и сигурни системи за плащане. Никога не разкриваме информация за клиентите си. След 90 дни автоматично изтриваме всички файлове. Подписваме договор за неразкриване при поискване."
    },
     {
      question: "МОЖЕТЕ ЛИ ДА РАБОТИТЕ С КОНКРЕТНИ ИЗИСКВАНИЯ?",
      answer: "Разбира се! Работим по твоите точни инструкции - стил на цитиране (APA, MLA, Chicago), специфичен брой източници, определена структура, дори любими автори или теории. Колкото по-детайлни са указанията, толкова по-точна ще бъде работата."
    }
  ];

  return (
    <section id="faq" className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Често задавани въпроси
          </h2>
          <p className="mt-4 text-lg text-gray-600">Всичко, което искаш да знаеш</p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <details key={index} className="group bg-gray-50 p-6 rounded-lg border">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-gray-900">
                {item.question}
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </summary>
              <p className="mt-4 text-gray-700">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 text-center bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Нямаш отговор на въпроса си?</h3>
            <p className="text-gray-700 mb-4">Свържи се с нас директно. Отговаряме в рамките на 30 минути, дори в късни часове!</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href="mailto:info@referati.website" className="font-semibold text-blue-600 hover:underline">📧 info@referati.website</a>
                <a href="tel:+359000000000" className="font-semibold text-blue-600 hover:underline">📱 [Телефон за спешни случаи]</a>
                <a href="#chat" className="font-semibold text-blue-600 hover:underline">💬 Live Chat (24/7)</a>
            </div>
        </div>
      </div>
    </section>
  );
}
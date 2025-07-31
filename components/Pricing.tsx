// File: components/Pricing.tsx
// This component displays the pricing structure in a clear and transparent way.

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Без скрити такси. Ясни цени. Честно ценообразуване.
          </h2>
        </div>

        {/* Pricing Table */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Pricing Tier 1: Referati */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-center">📄 Реферати и есета</h3>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Стандартен срок (3-5 дни):</strong> 15 лв./страница</li>
              <li><strong>Експресен срок (24-48 часа):</strong> 20 лв./страница</li>
              <li><strong>Спешен срок (до 24 часа):</strong> 25 лв./страница</li>
            </ul>
          </div>
          {/* Pricing Tier 2: Kursovi Raboti */}
          <div className="border-2 border-blue-600 rounded-lg p-6 flex flex-col shadow-2xl relative">
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Най-популярно</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">📚 Курсови работи</h3>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Стандартен срок (5-7 дни):</strong> 18 лв./страница</li>
              <li><strong>Експресен срок (2-4 дни):</strong> 23 лв./страница</li>
              <li><strong>Спешен срок (до 48 часа):</strong> 28 лв./страница</li>
            </ul>
          </div>
          {/* Pricing Tier 3: Diplomni Raboti */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-center">🎓 Дипломни работи</h3>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Стандартен срок (2-4 седмици):</strong> 20 лв./страница</li>
              <li><strong>Експресен срок (1-2 седмици):</strong> 25 лв./страница</li>
              <li><strong>Спешен срок (до 1 седмица):</strong> 30 лв./страница</li>
            </ul>
          </div>
        </div>

        {/* Inclusions and Add-ons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4">✅ Винаги включено (Безплатно):</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Титулна страница и съдържание</li>
                    <li>Библиография и източници</li>
                    <li>Основно форматиране</li>
                    <li>Проверка за правопис и граматика</li>
                    <li>Антиплагиатска проверка</li>
                    <li>1 безплатна корекция</li>
                </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4">💰 Допълнителни услуги:</h4>
                 <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Презентация (PowerPoint): <strong>+50 лв.</strong></li>
                    <li>Статистически анализ: <strong>+30-80 лв.</strong></li>
                    <li>Допълнителни корекции: <strong>+15 лв./корекция</strong></li>
                    <li>Експресно форматиране: <strong>+20 лв.</strong></li>
                </ul>
            </div>
        </div>

        {/* Payment Methods & Terms */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h3 className="text-2xl font-bold text-center mb-6">Начини на плащане и отстъпки</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h4 className="font-semibold text-lg mb-2">💳 Приемаме:</h4>
                    <ul className="text-gray-600">
                        <li>Банков превод</li>
                        <li>Кредитна/дебитна карта</li>
                        <li>PayPal / Revolut</li>
                        <li>Разсрочено плащане (над 500 лв.)</li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold text-lg mb-2">🎯 Отстъпки:</h4>
                    <ul className="text-gray-600">
                        <li><strong>15%</strong> за нови клиенти (над 200 лв.)</li>
                        <li><strong>до 15%</strong> за постоянни клиенти</li>
                        <li><strong>20%</strong> за групови поръчки (3+ работи)</li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold text-lg mb-2">📋 Условия:</h4>
                    <ul className="text-gray-600">
                        <li><strong>100%</strong> предплащане до 300 лв.</li>
                        <li><strong>50%</strong> авансово над 300 лв.</li>
                        <li>Фактура при поискване</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Pricing Promise */}
        <div className="bg-gray-800 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Нашето обещание за цените</h3>
            <p className="italic max-w-3xl mx-auto mb-4">&ldquo;Цената, която ти предлагаме в офертата, е окончателната цена. Никакви скрити такси, никакви неприятни изненади. Качеството винаги съответства на цената.&rdquo;</p>
            <p className="font-semibold">При по-евтина оферта от конкуренцията - ние я побеждаваме с 5%!</p>
        </div>

      </div>
    </section>
  );
}
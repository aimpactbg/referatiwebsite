// File: components/ProblemSolution.tsx
// This component outlines the problems students face and presents the solution.

export default function ProblemSolution() {
  return (
    <section id="problem-solution" className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Познаваме твоя проблем
          </h2>
        </div>

        {/* Problem vs Solution Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column: The Problem */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-red-600 mb-6">Студентският живот е пълен с предизвикателства...</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✗</span>
                <div><strong>Липса на време:</strong> Работиш и учиш едновременно?</div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✗</span>
                <div><strong>Множество задачи:</strong> Трябва да предадеш 5 работи до края на семестъра?</div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✗</span>
                <div><strong>Сложни теми:</strong> Не разбираш как да започнеш дипломната си работа?</div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✗</span>
                <div><strong>Страх от плагиатство:</strong> Притесняваш се дали няма да те хванат с копирано съдържание?</div>
              </li>
                 <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✗</span>
                <div><strong>Лоши оценки:</strong> Предишните ти реферати не получиха добри оценки?</div>
              </li>
            </ul>
            <p className="text-gray-600 italic">
              "Знаем колко е стресиращо да жонглираш между работа, учене и личен живот. Знаем какво е чувството да седиш пред празен документ в 2 часа сутринта, без идея как да започнеш."
            </p>
          </div>

          {/* Right Column: Our Solution */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-green-600 mb-6">Ние решаваме всички тези проблеми за теб!</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <div><strong>Спестяваме ти време:</strong> Фокусирай се върху наистина важните неща.</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <div><strong>Професионален подход:</strong> Всяка работа се изготвя от експерт в съответната област.</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <div><strong>100% оригиналност:</strong> Забрави стреса от плагиатството завинаги.</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <div><strong>Гарантирано качество:</strong> Работи, които получават отлични оценки.</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <div><strong>Пълна поддръжка:</strong> Ние сме до теб през целия процес.</div>
              </li>
            </ul>
             <p className="text-gray-600 italic">
              "Просто ни кажи какво ти трябва, а ние се грижим за всичко останало. От изследването и писането до форматирането и проверката за оригиналност."
            </p>
          </div>
        </div>

        {/* The Result Section */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Какво постигаш с нашата помощ?</h3>
          <ul className="space-y-3 text-left inline-block">
             <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Повече свободно време за приятели, семейство и хобита</li>
             <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>По-добри оценки благодарение на качествените работи</li>
             <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Намален стрес - без безсънни нощи и паника</li>
             <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Професионално развитие - фокус върху практическия опит</li>
             <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Увереност - знаеш, че работата ти е перфектна</li>
          </ul>
          <p className="mt-6 text-gray-700">
            "Представи си как би било да имаш повече време за това, което наистина те интересува, докато академичните ти резултати се подобряват. Това не е мечта - това е реалността с Referati.website."
          </p>
        </div>
      </div>
    </section>
  );
}
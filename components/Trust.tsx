// components/Trust.tsx
import { siteConfig } from '../config/site.config';

export default function Trust() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Доверие и Социално Доказателство
          </h2>
          <p className="text-xl text-gray-600">
            Хиляди студенти ни се довериха. Вижте защо.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
              {siteConfig.stats.completedProjects}
            </div>
            <div className="text-lg text-gray-700 font-medium">
              Завършени проекта
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">
              {siteConfig.stats.satisfiedClients}
            </div>
            <div className="text-lg text-gray-700 font-medium">
              Доволни клиенти
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">
              {siteConfig.stats.yearsExperience}
            </div>
            <div className="text-lg text-gray-700 font-medium">
              Опит в академичното писане
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "{testimonial.text}"
                </blockquote>
              </div>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">
                  — {testimonial.author}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.specialty}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
          {siteConfig.guarantees.slice(0, 4).map((guarantee, index) => {
            const icons = ['🎯', '⚡', '👨‍🎓', '🔄'];
            const descriptions = [
              'Защита на личните данни',
              'До 24 часа при нужда', 
              'Експерти в областите',
              'Индивидуален подход'
            ];

            return (
              <div key={index} className="p-4">
                <div className="text-3xl mb-2">{icons[index]}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{guarantee}</h3>
                <p className="text-sm text-gray-600">{descriptions[index]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
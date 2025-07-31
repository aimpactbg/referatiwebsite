// components/Trust.tsx - FIXED VERSION
import { siteConfig } from '../config/site.config';

export default function Trust() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Statistics Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Защо студентите ни избират?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Хиляди успешно завършени проекта и доволни студенти са доказателство за нашето качество
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{siteConfig.stats.completedProjects}</div>
              <div className="text-gray-600">Завършени проекта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{siteConfig.stats.satisfiedClients}</div>
              <div className="text-gray-600">Доволни клиенти</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">{siteConfig.stats.averageRating}</div>
              <div className="text-gray-600">Средна оценка</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">{siteConfig.stats.yearsExperience}</div>
              <div className="text-gray-600">Години опит</div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Какво казват нашите клиенти</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 relative">
                <div className="absolute top-4 left-4 text-4xl text-blue-200">&ldquo;</div>
                <div className="pt-8">
                  <p className="text-gray-700 mb-4 italic">
                    {/* FIXED: Properly escaped quotes in testimonial text */}
                    {testimonial.text.replace(/"/g, '&quot;')}
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.program}</div>
                      <div className="text-sm text-gray-500">{testimonial.university}</div>
                    </div>
                  </div>
                  <div className="flex mt-3">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Нашите гаранции</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {siteConfig.trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{badge.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{badge.title}</h4>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Готов да започнеш своя успешен академичен проект?
          </p>
          <a 
            href="#final-cta"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 inline-block"
          >
            Получи безплатна оферта
          </a>
        </div>
      </div>
    </section>
  );
}
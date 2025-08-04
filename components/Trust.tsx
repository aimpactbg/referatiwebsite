// components/Trust.tsx - Corrected version with escaped quotes for ESLint

import React from "react";
import { siteConfig } from "../config/site.config";

export default function Trust() {
  const stats = [
    { value: siteConfig.stats.projects, label: "Успешни проекта", icon: "📚" },
    {
      value: siteConfig.stats.satisfaction,
      label: "Доволни студенти",
      icon: "�",
    },
    { value: siteConfig.stats.support, label: "Поддръжка", icon: "🕐" },
    { value: siteConfig.stats.originality, label: "Оригиналност", icon: "✨" },
  ];

  const testimonials = siteConfig.testimonials;
  const trustBadges = siteConfig.trustBadges;

  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="trust">
      <div className="container mx-auto px-4">
        {/* Statistics Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Доверие и резултати
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Хиляди студенти са получили отлични оценки с нашите професионални
            академични услуги
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-primary-200 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Какво казват нашите клиенти
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary-200 group"
              >
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-secondary mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* ✅ FIX: Replaced quotes with &quot; to fix ESLint error */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.specialty} • {testimonial.university}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
            Защо да ни избереш
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="text-center group hover:bg-gray-50 rounded-xl p-4 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {badge.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {badge.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof Numbers */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-brand rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Присъедини се към хилядите успешни студенти
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Над 1500 студента са получили отлични оценки с нашата помощ. Стани
              част от нашата общност на академичния успех!
            </p>

            {/* Mini Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">5+</div>
                <div className="text-sm opacity-90">Години опит</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-sm opacity-90">Специалности</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">48ч</div>
                <div className="text-sm opacity-90">Средно време</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm opacity-90">Поддръжка</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

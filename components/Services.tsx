// components/Services.tsx - MODERN CARD LAYOUT for Academic Services
// Design System Integration + Config Integration + Professional Hover Effects

import React from 'react';
import { siteConfig, getContactLink, getFormattedPhone } from '../config/site.config';

export default function Services() {
  // Using siteConfig data - now properly structured
  const { mainServices, specializations, additionalServices } = siteConfig.services;

  return (
    <section className="py-16 lg:py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Нашите услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Професионални академични услуги с гарантирана оригиналност и качество. 
            Всяка работа се изпълнява от експерти с университетско образование.
          </p>
        </div>

        {/* Main Services Grid - Using Static Data */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                         transform hover:-translate-y-2 transition-all duration-300 
                         border border-gray-100 hover:border-red-200"
            >
              {/* Service Icon */}
              <div className="flex items-center justify-center w-16 h-16 
                              bg-gradient-to-br from-red-500 to-yellow-500 
                              rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Dynamic icon based on service type */}
                  {index === 0 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  )}
                  {index === 1 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  )}
                  {index === 2 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  )}
                </svg>
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Service Details */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{service.pages} страници</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>от {service.timeframe}</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-gray-900">
                    от {service.priceFrom} лв.
                  </span>
                  <span className="text-sm text-gray-500 ml-1">/{service.priceUnit}</span>
                </div>
                <button className="px-6 py-2 bg-gradient-to-r from-red-500 to-yellow-500 
                                   text-white rounded-lg font-medium hover:from-red-600 hover:to-yellow-600 
                                   transform hover:scale-105 transition-all duration-200 shadow-md">
                  Поръчай
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Specializations Section */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
            Специализации
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specializations.map((specialization, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-4 text-center hover:shadow-lg 
                           transition-all duration-300 border border-gray-100 
                           hover:border-purple-200 hover:bg-purple-50 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 
                                rounded-lg mx-auto mb-3 flex items-center justify-center
                                group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700 group-hover:text-purple-700 transition-colors">
                  {specialization}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
            Допълнителни услуги
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center border border-gray-200 
                           hover:border-yellow-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 
                                rounded-lg mx-auto mb-4 flex items-center justify-center
                                group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-purple-600 
                          rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Готови сте да започнете?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Свържете се с нас за безплатна консултация и персонализирана оферта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#final-cta" 
                className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold 
                           hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 
                           shadow-lg inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Получи оферта
              </a>
              <a 
                href={getContactLink('phone')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl 
                           font-semibold hover:bg-white hover:text-gray-900 transform hover:scale-105 
                           transition-all duration-200 inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {getFormattedPhone()}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
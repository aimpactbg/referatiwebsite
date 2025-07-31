// components/Hero.tsx - FIXED VERSION
import Image from 'next/image';
import { siteConfig, getContactLink, getFormattedPhone, getMainEmail } from '../config/site.config';

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-20 lg:py-24 flex flex-col lg:flex-row items-center">
        {/* Left Column - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            {siteConfig.hero.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            {siteConfig.hero.subtitle}
          </p>

          {/* Key Benefits with Icons */}
          <div className="space-y-4 text-left mb-8">
            {siteConfig.hero.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{siteConfig.stats.completedProjects}</div>
              <div className="text-sm text-gray-600">Завършени проекта</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{siteConfig.stats.satisfiedClients}</div>
              <div className="text-sm text-gray-600">Доволни клиенти</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{siteConfig.stats.averageRating}</div>
              <div className="text-sm text-gray-600">Средна оценка</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
            <a 
              href="#final-cta" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Получи безплатна оферта
            </a>
            <a 
              href={getContactLink('phone')}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 w-full sm:w-auto text-center"
            >
              Свържи се сега
            </a>
          </div>

          {/* Quick Contact Info */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
            <div className="flex items-center justify-center lg:justify-start">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={getContactLink('phone')} className="hover:text-blue-600">
                {getFormattedPhone()}
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={getContactLink('email')} className="hover:text-blue-600">
                {getMainEmail()}
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-8">
          <div className="relative">
            <Image
              src="https://placehold.co/600x450/e0e7ff/334155?text=Студент+с+лаптоп"
              alt="Студент с лаптоп и книги в учебна среда"
              width={600}
              height={450}
              className="rounded-lg shadow-2xl mx-auto"
              priority={true}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />

            {/* Floating elements for visual appeal */}
            <div className="absolute -top-4 -left-4 bg-blue-100 rounded-full p-3 shadow-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-green-100 rounded-full p-3 shadow-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
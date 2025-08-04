// components/Footer.tsx - FIXED CONFIG INTEGRATION
// Using unified site.config.ts instead of contact.config.ts

import React from 'react';
import { siteConfig, getContactLink, getFormattedPhone, getMainEmail } from '../config/site.config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              {siteConfig.name}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
              <a 
                href={siteConfig.social.facebook} 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href={siteConfig.social.instagram} 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.329-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.329c.807-.881 1.958-1.371 3.255-1.371s2.448.49 3.329 1.297c.881.807 1.371 1.958 1.371 3.255s-.49 2.448-1.297 3.329c-.807.881-1.958 1.371-3.255 1.371zm7.59 0c-1.297 0-2.448-.49-3.329-1.297-.881-.807-1.371-1.958-1.371-3.255s.49-2.448 1.297-3.329c.807-.881 1.958-1.371 3.255-1.371s2.448.49 3.329 1.297c.881.807 1.371 1.958 1.371 3.255s-.49 2.448-1.297 3.329c-.807.881-1.958 1.371-3.255 1.371z"/>
                </svg>
              </a>
              <a 
                href={siteConfig.social.linkedin} 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Услуги
            </h3>
            <ul className="space-y-2">
              {siteConfig.services.mainServices.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#services" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Всички специализации
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Контакти
            </h3>
            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <a 
                    href={getContactLink('phone')} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {getFormattedPhone()}
                  </a>
                  <p className="text-sm text-gray-400">
                    Отговор {siteConfig.contact.responseTime.phone}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <a 
                    href={getContactLink('email')} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {getMainEmail()}
                  </a>
                  <p className="text-sm text-gray-400">
                    Отговор {siteConfig.contact.responseTime.email}
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <div>
                  <a 
                    href={getContactLink('whatsapp')} 
                    className="text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                  <p className="text-sm text-gray-400">
                    Отговор {siteConfig.contact.responseTime.whatsapp}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-2">
                <p className="text-sm text-gray-400">
                  <span className="font-medium text-gray-300">Работно време:</span><br />
                  {siteConfig.contact.workingHours.description}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Бързи връзки
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a 
                  href="#trust" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Отзиви
                </a>
              </li>
              <li>
                <a 
                  href="#final-cta" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Контакти
                </a>
              </li>
              <li>
                <a 
                  href="/privacy" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Поверителност
                </a>
              </li>
              <li>
                <a 
                  href="/terms" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Условия
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} {siteConfig.name}. Всички права запазени.
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-400">
                Следете ни:
              </span>
              <div className="flex space-x-4">
                <a 
                  href={getContactLink('telegram')} 
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <a 
                  href={getContactLink('viber')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm.58 15.3c-1.4 0-2.74-.37-3.9-1.05l-.27-.16-2.85.75.76-2.72-.18-.28c-.73-1.18-1.12-2.54-1.12-3.93 0-4.06 3.3-7.36 7.36-7.36s7.36 3.3 7.36 7.36c0 4.06-3.3 7.36-7.36 7.36z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
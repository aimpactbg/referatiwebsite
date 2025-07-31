// components/Footer.tsx
import { contactConfig, createPhoneLink, createEmailLink, createViberLink } from '../config/contact.config';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Лого и описание */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Referati.website</h3>
            <p className="text-gray-300 mb-4">
              Професионални академични услуги с гарантирано качество и оригиналност.
            </p>
            <p className="text-sm text-gray-400">
              © 2024 Referati.website. Всички права запазени.
            </p>
          </div>

          {/* Контакти */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакти</h4>
            <div className="space-y-2 text-gray-300">
              <div>
                <a 
                  href={createPhoneLink(contactConfig.phone.number)}
                  className="hover:text-white transition-colors"
                >
                  📞 {contactConfig.phone.display}
                </a>
              </div>

              <div>
                <a 
                  href={createEmailLink(contactConfig.email.main)}
                  className="hover:text-white transition-colors"
                >
                  📧 {contactConfig.email.main}
                </a>
              </div>

              <div>
                <a 
                  href={createViberLink(contactConfig.social.viber)}
                  className="hover:text-white transition-colors"
                >
                  📱 Viber: {contactConfig.social.viber}
                </a>
              </div>

              <div className="text-sm text-gray-400 mt-3">
                {contactConfig.workingHours.display}
              </div>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Реферати</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Курсови работи</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Дипломни работи</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Цени</a></li>
            </ul>
          </div>
        </div>

        {/* Долна част */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              Отговаряме в рамките на {contactConfig.responseTime.email} по имейл
            </p>

            <div className="flex space-x-4">
              <a href="/privacy" className="text-sm hover:text-white transition-colors">
                Поверителност
              </a>
              <a href="/terms" className="text-sm hover:text-white transition-colors">
                Условия
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { useState } from 'react';
import { siteConfig, getContactLink, getFormattedPhone } from '../config/site.config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">

          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            {/* Logo Placeholder - Will be replaced with actual logo later */}
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">
                Referati<span className="text-primary">.website</span>
              </h1>
              <p className="text-xs text-gray-500">Професионални академични работи</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Услуги
            </a>
            <a href="#process" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Как работим
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Цени
            </a>
            <a href="#faq" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Въпроси
            </a>
            <a href="#final-cta" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Контакти
            </a>
          </nav>

          {/* Phone Contact & CTA */}
          <div className="flex items-center space-x-4">
            {/* Phone Contact */}
            <a 
              href={getContactLink('phone')} 
              className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 bg-primary/10 group-hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300">
                <svg 
                  className="w-5 h-5 text-primary group-hover:text-white transition-colors" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="hidden xl:block">
                <div className="text-xs text-gray-500">Обадете се сега</div>
                <div className="font-semibold">{getFormattedPhone()}</div>
              </div>
            </a>

            {/* CTA Button */}
            <a 
              href="#final-cta" 
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Получи оферта
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary transition-colors"
              aria-label="Отвори меню"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <nav className="py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-gray-700 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Услуги
              </a>
              <a 
                href="#process" 
                className="text-gray-700 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Как работим
              </a>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Цени
              </a>
              <a 
                href="#faq" 
                className="text-gray-700 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Въпроси
              </a>
              <a 
                href="#final-cta" 
                className="text-gray-700 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Контакти
              </a>

              {/* Mobile Phone Contact */}
              <div className="pt-4 border-t border-gray-200">
                <a 
                  href={getContactLink('phone')} 
                  className="flex items-center space-x-3 text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{getFormattedPhone()}</div>
                    <div className="text-xs text-gray-500">Обадете се сега</div>
                  </div>
                </a>

                {/* Mobile CTA */}
                <a 
                  href="#final-cta" 
                  className="mt-3 block w-full text-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Получи безплатна оферта
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
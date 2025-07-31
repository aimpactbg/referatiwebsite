// components/FloatingContactFab.tsx - Left Position + Darker Backdrop
'use client';
import { useState, useEffect } from 'react';
import { siteConfig, getContactLink, getFormattedPhone, getMainEmail } from '../config/site.config';

export default function FloatingContactFab() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show FAB after user scrolls down a bit
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false); // Close when at top
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const toggleFab = () => {
    setIsOpen(!isOpen);
  };

  const contactOptions = [
    {
      label: 'Обадете се',
      icon: '📞',
      href: getContactLink('phone'),
      color: 'bg-green-500 hover:bg-green-600',
      display: getFormattedPhone()
    },
    {
      label: 'Viber',
      icon: '💬', 
      href: getContactLink('viber'),
      color: 'bg-purple-500 hover:bg-purple-600',
      display: 'Viber чат'
    },
    {
      label: 'WhatsApp',
      icon: '📱',
      href: getContactLink('whatsapp'),
      color: 'bg-green-600 hover:bg-green-700', 
      display: 'WhatsApp'
    },
    {
      label: 'Email',
      icon: '✉️',
      href: getContactLink('email'),
      color: 'bg-blue-500 hover:bg-blue-600',
      display: getMainEmail()
    }
  ];

  if (!isVisible) return null;

  return (
    <>
      {/* DARKER Backdrop - 100% черно с леко прозрачност */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating Action Button Container - MOVED TO LEFT */}
      <div className="fixed bottom-6 left-6 z-50">
        {/* Contact Options */}
        <div className={`space-y-3 mb-4 transition-all duration-300 ${
          isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'
        }`}>
          {contactOptions.map((option, index) => (
            <div
              key={option.label}
              className={`transition-all duration-300 ${
                isOpen ? 'delay-100' : ''
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              <a
                href={option.href}
                className={`flex items-center ${option.color} text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 min-w-max group`}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg mr-2">{option.icon}</span>
                <span className="font-medium text-sm">{option.display}</span>

                {/* Tooltip - ADJUSTED FOR LEFT POSITION */}
                <div className="absolute left-full ml-3 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {option.label}
                  {/* Arrow pointing left */}
                  <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Main FAB Button */}
        <button
          onClick={toggleFab}
          className={`w-14 h-14 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center justify-center text-white font-bold text-lg ${
            isOpen 
              ? 'bg-red-500 hover:bg-red-600 rotate-45' 
              : 'bg-blue-600 hover:bg-blue-700 hover:scale-110'
          }`}
          aria-label={isOpen ? 'Затвори контакти' : 'Свържете се с нас'}
        >
          {isOpen ? '✕' : '📞'}
        </button>

        {/* Pulse Animation for Main Button */}
        {!isOpen && (
          <div className="absolute inset-0 w-14 h-14 rounded-full bg-blue-600 opacity-30 animate-ping"></div>
        )}

        {/* Notification Badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">!</span>
          </div>
        )}
      </div>

      {/* Call-to-Action Tooltip - ADJUSTED FOR LEFT POSITION */}
      {!isOpen && (
        <div className="fixed bottom-6 left-20 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Свържете се веднага!
          <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
        </div>
      )}
    </>
  );
}
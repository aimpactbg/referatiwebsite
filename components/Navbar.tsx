// components/Navbar.tsx - FIXED VERSION with Working Mobile Menu
'use client';
import { useState } from 'react';
import { siteConfig, getContactLink, getFormattedPhone } from '../config/site.config';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#services', label: 'Услуги' },
    { href: '#process', label: 'Процес' },
    { href: '#pricing', label: 'Цени' },
    { href: '#faq', label: 'Въпроси' },
    { href: '#contact', label: 'Контакт' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-blue-600">
              Referati.website
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}

            {/* Desktop CTA Button */}
            <a
              href={getContactLink('phone')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              {getFormattedPhone()}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                // Hamburger Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                // Close Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-gray-50 rounded-lg mt-2 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-white transition-all duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile CTA Button */}
            <div className="px-4 pt-2">
              <a
                href={getContactLink('phone')}
                onClick={closeMenu}
                className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                📞 {getFormattedPhone()}
              </a>
            </div>

            {/* Secondary Mobile Actions */}
            <div className="px-4 pt-2 space-y-2">
              <a
                href={getContactLink('viber')}
                onClick={closeMenu}
                className="block w-full text-center bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200 font-medium text-sm"
              >
                💬 Viber
              </a>
              <a
                href={getContactLink('email')}
                onClick={closeMenu}
                className="block w-full text-center bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors duration-200 font-medium text-sm"
              >
                ✉️ Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
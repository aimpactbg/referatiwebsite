// components/FinalCTA.tsx - COMPLETE WORKING VERSION
'use client';
import { useState } from 'react';
import { siteConfig, getContactLink, getFormattedPhone, getMainEmail } from '../config/site.config';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function FinalCTA() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Validation
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      alert('Моля попълнете всички задължителни полета');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Невалиден имейл адрес');
      setIsSubmitting(false);
      return;
    }

    setSubmitStatus('success');

    // Open email client directly - WORKS 100%
    const emailBody = `Здравейте,%0A%0AИмам заявка за ${formData.service}:%0A%0AОписание: ${formData.message}%0A%0AMоят контакт:%0AИме: ${formData.name}%0AИмейл: ${formData.email}%0AТелефон: ${formData.phone || 'Не е посочен'}`;

    window.open(`mailto:orders@referati.website?subject=Заявка за ${formData.service} - ${formData.name}&body=${emailBody}`);

    // Redirect to thank you page
    setTimeout(() => {
      window.location.href = '/thank-you';
    }, 1000);

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Готов си? Започни сега и промени академичното си бъдеще!
          </h2>

          <p className="text-xl mb-8 text-blue-100">
            Докато четеш това, десетки студенти вече получиха нашата помощ и спестиха си стотици часове стрес. Присъедини се към тях!
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">{siteConfig.stats.completedProjects}+</div>
              <div className="text-blue-200">Завършени проекта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">{siteConfig.stats.satisfiedClients}%</div>
              <div className="text-blue-200">Доволни клиенти</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">{siteConfig.stats.yearsExperience}</div>
              <div className="text-blue-200">Години опит</div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              📝 Получи оферта за 30 минути:
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              Най-бързият начин за връзка:
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Phone */}
            <a
              href={getContactLink('phone')}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="text-2xl mb-2">📞</div>
              <div className="text-sm">ОБАДИ СЕ СЕГА</div>
              <div className="font-bold">{getFormattedPhone()}</div>
              <div className="text-xs mt-1 opacity-90">08:00 - 22:00 (всеки ден)</div>
            </a>

            {/* Viber */}
            <a
              href={getContactLink('viber')}
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="text-2xl mb-2">💬</div>
              <div className="text-sm">VIBER ЧАТ</div>
              <div className="font-bold">Веднага отговаряме</div>
              <div className="text-xs mt-1 opacity-90">Най-бърз начин</div>
            </a>

            {/* WhatsApp */}
            <a
              href={getContactLink('whatsapp')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="text-2xl mb-2">📱</div>
              <div className="text-sm">WHATSAPP</div>
              <div className="font-bold">Чат поддръжка</div>
              <div className="text-xs mt-1 opacity-90">24/7 достъпност</div>
            </a>

            {/* Email */}
            <a
              href={getContactLink('email')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="text-2xl mb-2">✉️</div>
              <div className="text-sm">ИМЕЙЛ</div>
              <div className="font-bold text-sm">{getMainEmail()}</div>
              <div className="text-xs mt-1 opacity-90">Отговор до 30 мин</div>
            </a>
          </div>

          {/* CONTACT FORM SECTION */}
          <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">
              📝 Или изпрати бърза заявка:
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Име и фамилия *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                  placeholder="Вашето име..."
                  disabled={isSubmitting}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Имейл адрес *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                  placeholder="+359 8X XXX XXXX"
                  disabled={isSubmitting}
                />
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Тип услуга *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                  disabled={isSubmitting}
                >
                  <option value="">Изберете услуга...</option>
                  <option value="referat">Реферат/Есе (3-15 стр.)</option>
                  <option value="kursova">Курсова работа (15-30 стр.)</option>
                  <option value="diplomna">Дипломна работа (40+ стр.)</option>
                  <option value="prezentacia">Презентация</option>
                  <option value="drugi">Друго</option>
                </select>
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Описание на проекта *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition resize-none"
                placeholder="Разкажете ни за вашия проект: тема, брой страници, срок, специални изисквания..."
                disabled={isSubmitting}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform shadow-lg ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-500 hover:bg-green-400'
                    : 'bg-yellow-500 hover:bg-yellow-400 hover:scale-105'
                } text-blue-900`}
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block animate-spin mr-2">⏳</span>
                    Изпращане...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <span className="mr-2">✅</span>
                    Изпратено! Пренасочване...
                  </>
                ) : (
                  <>
                    🚀 Изпрати заявката (Безплатно)
                  </>
                )}
              </button>
              <p className="text-sm text-blue-200 mt-3">
                * Ще получите оферта до 30 минути
              </p>
            </div>
          </form>

          {/* Urgency Section */}
          <div className="bg-red-600 bg-opacity-20 border border-red-400 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">
              🔥 Спомни си:
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="flex items-center">
                <span className="text-red-300 mr-2">❌</span>
                <span>Ако чакаш още: Сроковете стават невъзможни</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-300 mr-2">❌</span>
                <span>Ако се колебаеш: Губиш 15% отстъпката</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✅</span>
                <span>Ако действаш сега: Проблемът ти е решен за 30 минути</span>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center">
            <p className="text-lg text-blue-100 mb-6">
              Всеки изгубен момент намалява шансовете ти за специалните отстъпки, най-добрите автори и спазване на желания срок.
            </p>

            <div className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full inline-block font-bold text-lg">
              ⚡ Започни сега - спести си стреса!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
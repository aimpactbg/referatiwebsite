// components/FinalCTA.tsx
"use client";
import { useState } from "react";
import {
  siteConfig,
  getContactLink,
  getFormattedPhone,
  getMainEmail,
} from "../config/site.config";
import FileUpload from "./FileUpload";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  files: File[];
}

export default function FinalCTA() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    files: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFilesChange = (files: File[]) => {
    setFormData((prev) => ({
      ...prev,
      files: files,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    if (
      !formData.name ||
      !formData.email ||
      !formData.service ||
      !formData.message
    ) {
      alert("Моля попълнете всички задължителни полета");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Невалиден имейл адрес");
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("service", formData.service);
      formDataToSend.append("subject", `Заявка за ${formData.service}`);
      formDataToSend.append("message", formData.message);
      formData.files.forEach((file, index) => {
        formDataToSend.append(`file_${index}`, file);
      });
      formDataToSend.append("fileCount", formData.files.length.toString());

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          files: [],
        });
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 1500);
      } else {
        console.error("API Error:", result);
        alert(
          `Възникна грешка при изпращането: ${result.message || "Неизвестна грешка"}. Моля опитайте отново или се свържете с нас директно.`,
        );
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert(
        "Възникна грешка при връзката. Моля проверете интернет връзката и опитайте отново.",
      );
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Промяна: Градиентът е заменен с цветове от вашата дизайн система
    <section
      id="contact"
      className="bg-gradient-to-br from-slate-900 to-blue-800 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Готов си? Започни сега и промени академичното си бъдеще!
          </h2>
          <p className="text-xl mb-8 text-indigo-200">
            {" "}
            {/* Промяна: Използваме по-консистентен цвят */}
            Докато четеш това, десетки студенти вече получиха нашата помощ и
            спестиха си стотици часове стрес. Присъедини се към тях!
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              {/* Промяна: Използваме 'secondary' от дизайн системата */}
              <div className="text-3xl font-bold text-secondary">
                {siteConfig.stats.completedProjects}+
              </div>
              <div className="text-indigo-200">Завършени проекта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">
                {siteConfig.stats.satisfiedClients}%
              </div>
              <div className="text-indigo-200">Доволни клиенти</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">
                {siteConfig.stats.yearsExperience}
              </div>
              <div className="text-indigo-200">Години опит</div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              📝 Получи оферта за 30 минути:
            </h3>
            <p className="text-lg text-indigo-200 mb-6">
              Най-бързият начин за връзка:
            </p>
          </div>

          {/* Промяна: Цветовете са заменени с тези от дизайн системата, където е възможно */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a
              href={getContactLink("phone")}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="text-2xl mb-2">📞</div>
              <div className="text-sm">ОБАДИ СЕ СЕГА</div>
              <div className="font-bold">{getFormattedPhone()}</div>
              <div className="text-xs mt-1 opacity-90">
                08:00 - 22:00 (всеки ден)
              </div>
            </a>
            <a
              href={getContactLink("viber")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              {" "}
              {/* Viber често е лилав */}
              <div className="text-2xl mb-2">💬</div>
              <div className="text-sm">VIBER ЧАТ</div>
              <div className="font-bold">Веднага отговаряме</div>
              <div className="text-xs mt-1 opacity-90">Най-бърз начин</div>
            </a>
            <a
              href={getContactLink("whatsapp")}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              {" "}
              {/* WhatsApp е зелен */}
              <div className="text-2xl mb-2">📱</div>
              <div className="text-sm">WHATSAPP</div>
              <div className="font-bold">Чат поддръжка</div>
              <div className="text-xs mt-1 opacity-90">24/7 достъпност</div>
            </a>
            <a
              href={getContactLink("email")}
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="text-2xl mb-2">✉️</div>
              <div className="text-sm">ИМЕЙЛ</div>
              <div className="font-bold text-sm">{getMainEmail()}</div>
              <div className="text-xs mt-1 opacity-90">Отговор до 30 мин</div>
            </a>
          </div>

          {/* Промяна: bg-opacity-10 -> bg-white/10 (модерен синтаксис) */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              📝 Или изпрати бърза заявка:
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Име и фамилия *
                </label>
                {/* Промяна: bg-opacity-90 -> bg-white/90, focus:ring-yellow-400 -> focus:ring-secondary */}
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 border border-transparent focus:ring-2 focus:ring-secondary transition"
                  placeholder="Вашето име..."
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Имейл адрес *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 border border-transparent focus:ring-2 focus:ring-secondary transition"
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 border border-transparent focus:ring-2 focus:ring-secondary transition"
                  placeholder="+359 8X XXX XXXX"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium mb-2"
                >
                  Тип услуга *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 border border-transparent focus:ring-2 focus:ring-secondary transition"
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
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Описание на проекта *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 border border-transparent focus:ring-2 focus:ring-secondary transition resize-none"
                placeholder="Разкажете ни за вашия проект: тема, брой страници, срок, специални изисквания..."
                disabled={isSubmitting}
              ></textarea>
            </div>
            <div className="col-span-2">
              <FileUpload
                onFilesChange={handleFilesChange}
                maxFiles={5}
                maxSizePerFile={5}
                maxTotalSize={20}
              />
            </div>
            {/* Промяна: Цветовете са заменени с тези от дизайн системата */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform shadow-lg ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : submitStatus === "success" ? "bg-success hover:bg-green-400" : "bg-secondary hover:bg-yellow-400 hover:scale-105"} text-dark`}
              >
                {isSubmitting ? (
                  <>
                    {" "}
                    <span className="inline-block animate-spin mr-2">
                      ⏳
                    </span>{" "}
                    {formData.files.length > 0
                      ? `Качване на ${formData.files.length} файла...`
                      : "Изпращане..."}{" "}
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    {" "}
                    <span className="mr-2">✅</span>{" "}
                    {formData.files.length > 0
                      ? `Изпратено с ${formData.files.length} файла! Пренасочване...`
                      : "Изпратено! Пренасочване..."}{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    🚀 Изпрати заявката{" "}
                    {formData.files.length > 0 && (
                      <span className="ml-2 text-sm">
                        ({formData.files.length} файла)
                      </span>
                    )}{" "}
                  </>
                )}
              </button>
              <p className="text-sm text-indigo-200 mt-3">
                * Ще получите оферта до 30 минути
                {formData.files.length > 0 && (
                  <span className="block mt-1">
                    📎 Файловете ще бъдат анализирани и включени в офертата
                  </span>
                )}
              </p>
            </div>
          </form>

          <div className="bg-primary/20 border border-primary/50 rounded-lg p-6 mb-8">
            {" "}
            {/* Промяна: Използваме цветове от дизайн системата */}
            <h3 className="text-2xl font-bold mb-4 text-secondary">
              🔥 Спомни си:
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="flex items-center">
                <span className="text-primary mr-2">❌</span>
                <span>Ако чакаш още: Сроковете стават невъзможни</span>
              </div>
              <div className="flex items-center">
                <span className="text-primary mr-2">❌</span>
                <span>Ако се колебаеш: Губиш 15% отстъпката</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✅</span>{" "}
                {/* Оставяме го по-светло зелено за контраст */}
                <span>
                  Ако действаш сега: Проблемът ти е решен за 30 минути
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-indigo-200 mb-6">
              Всеки изгубен момент намалява шансовете ти за специалните
              отстъпки, най-добрите автори и спазване на желания срок.
            </p>
            <div className="bg-secondary text-dark px-8 py-4 rounded-full inline-block font-bold text-lg">
              {" "}
              {/* Промяна: Използваме цветове от дизайн системата */}⚡ Започни
              сега - спести си стреса!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

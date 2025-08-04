// pages/thank-you.tsx - Corrected version with updated props and consistent design system colors

import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import {
  siteConfig,
  getContactLink,
  getFormattedPhone,
} from "../config/site.config";

// Extend Window interface for tracking scripts
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    // Google Analytics conversion tracking
    if (typeof window !== "undefined" && window.gtag) {
      try {
        window.gtag("event", "conversion", {
          send_to: "AW-CONVERSION_ID/CONVERSION_LABEL", // Replace with your Google Ads conversion ID
          value: 1.0,
          currency: "BGN",
        });
      } catch (error) {
        console.log("Google Analytics tracking error:", error);
      }
    }

    // Facebook Pixel conversion tracking
    if (typeof window !== "undefined" && window.fbq) {
      try {
        window.fbq("track", "Lead");
      } catch (error) {
        console.log("Facebook Pixel tracking error:", error);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Благодарим! Ще се свържем скоро | Referati.website</title>
        <meta
          name="description"
          content="Благодарим за запитването! Получихме вашата заявка и ще се свържем с вас до 30 минути."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-success via-sky-500 to-accent flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Animation */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-6 animate-bounce">
              <div className="text-4xl">✅</div>
            </div>
          </div>

          {/* Main Message */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              🎉 Благодарим!
            </h1>

            <p className="text-xl text-gray-700 mb-6">
              Вашата заявка беше получена успешно!
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                ⏰ Какво следва?
              </h2>

              <div className="space-y-4 text-left">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      До 30 минути
                    </div>
                    <div className="text-gray-600">
                      Ще получите персонализирана оферта на имейла си
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">До 2 часа</div>
                    <div className="text-gray-600">
                      Ще се свържем с вас за уточняване на детайлите
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-success text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      След потвърждение
                    </div>
                    <div className="text-gray-600">
                      Започваме работа по вашия проект
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgent Contact */}
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-primary-900 mb-4">
                🚨 За спешни случаи - обадете се веднага:
              </h3>

              <div className="grid md:grid-cols-3 gap-4">
                <a
                  href={getContactLink("phone")}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-bold transition-colors"
                >
                  📞 {getFormattedPhone()}
                </a>

                <a
                  href={getContactLink("viber")}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 rounded-lg font-bold transition-colors"
                >
                  💬 Viber
                </a>

                <a
                  href={getContactLink("whatsapp")}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-lg font-bold transition-colors"
                >
                  📱 WhatsApp
                </a>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-secondary-900 mb-3">
                ⭐ Присъединихте се към:
              </h3>

              <div className="grid grid-cols-3 gap-4 text-center">
                {/* ✅ FIX: Using correct property names from siteConfig */}
                <div>
                  <div className="text-2xl font-bold text-secondary-600">
                    {siteConfig.stats.projects}+
                  </div>
                  <div className="text-sm text-secondary-800">
                    Успешни проекта
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary-600">
                    {siteConfig.stats.satisfaction}%
                  </div>
                  <div className="text-sm text-secondary-800">
                    Доволни клиенти
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary-600">
                    {siteConfig.stats.support}
                  </div>
                  <div className="text-sm text-secondary-800">Поддръжка</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
              >
                ← Обратно към началото
              </Link>

              <Link
                href="/#services"
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
              >
                Вижте всички услуги
              </Link>
            </div>
          </div>

          {/* Footer Message */}
          <p className="text-white text-center mt-8 text-lg">
            Проверете имейла си за потвърждение!
          </p>
        </div>
      </div>
    </>
  );
}

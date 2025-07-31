// pages/index.tsx - FIXED VERSION with Test Contact Section
import Head from 'next/head';
import { seoConfig } from '../config/seo.config';

// Component imports
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Trust from '../components/Trust';
import ProblemSolution from '../components/ProblemSolution';
import Services from '../components/Services';
import Process from '../components/Process';
import Guarantees from '../components/Guarantees';
import Pricing from '../components/Pricing';
import Urgency from '../components/Urgency';
import FAQ from '../components/FAQ';
// import FinalCTA from '../components/FinalCTA';  // TEMPORARILY COMMENTED OUT
import Footer from '../components/Footer';
import FloatingContactFab from '../components/FloatingContactFab';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={seoConfig.og.url} />

        {/* Open Graph */}
        <meta property="og:title" content={seoConfig.og.title} />
        <meta property="og:description" content={seoConfig.og.description} />
        <meta property="og:url" content={seoConfig.og.url} />
        <meta property="og:image" content={seoConfig.og.image} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="bg_BG" />

        {/* Twitter */}
        <meta name="twitter:card" content={seoConfig.twitter.card} />
        <meta name="twitter:title" content={seoConfig.twitter.title} />
        <meta name="twitter:description" content={seoConfig.twitter.description} />
        <meta name="twitter:image" content={seoConfig.twitter.image} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              seoConfig.structuredData.organization,
              seoConfig.structuredData.service,
              seoConfig.structuredData.website,
              seoConfig.structuredData.localBusiness,
              seoConfig.structuredData.faq
            ])
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      <div className="font-sans">
        <Navbar />

        <main>
          <Hero />
          <Trust />
          <ProblemSolution />
          <Services />
          <Process />
          <Guarantees />
          <Pricing />
          <Urgency />
          <FAQ />

          {/* <FinalCTA /> */}

          {/* === ТЕСТОВА КОНТАКТ СЕКЦИЯ === */}
          <section id="contact" className="bg-blue-600 text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-8">
                🔧 ТЕСТ - Контакт секцията работи!
              </h2>
              <p className="text-xl mb-8">
                Ако виждате това, значи секцията се зарежда правилно.
              </p>

              <div className="space-y-4">
                <div>
                  <a 
                    href="tel:+359000000000" 
                    className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                  >
                    📞 ОБАДЕТЕ СЕ: +359 000 000 000
                  </a>
                </div>

                <div>
                  <a 
                    href="mailto:info@referati.website"
                    className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors"
                  >
                    ✉️ ИМЕЙЛ: info@referati.website
                  </a>
                </div>

                <div>
                  <a 
                    href="viber://chat?number=+359000000000"
                    className="inline-block bg-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-600 transition-colors"
                  >
                    💬 VIBER ЧАТ
                  </a>
                </div>
              </div>

              <p className="mt-8 text-lg">
                📍 Ако това се вижда, проблемът е в оригиналния FinalCTA компонент
              </p>
            </div>
          </section>
          {/* === КРАЙ НА ТЕСТОВАТА СЕКЦИЯ === */}

        </main>

        <Footer />

        {/* Floating Contact FAB - Shows after scroll */}
        <FloatingContactFab />
      </div>
    </>
  );
}
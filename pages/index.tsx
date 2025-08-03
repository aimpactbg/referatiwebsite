// pages/index.tsx - FIXED VERSION with Test Contact Section
import Head from 'next/head';
import { seoConfig } from '../config/seo.config';

// Component imports
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ReferatiAboutServices from '../components/AboutServices';
import Trust from '../components/Trust';
import ProblemSolution from '../components/ProblemSolution';
import Services from '../components/Services';
import Process from '../components/Process';
import Guarantees from '../components/Guarantees';
import Pricing from '../components/Pricing';
import Urgency from '../components/Urgency';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
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
          <FinalCTA />
        </main>

        <Footer />

        {/* Floating Contact FAB - Shows after scroll */}
        <FloatingContactFab />
      </div>
    </>
  );
}
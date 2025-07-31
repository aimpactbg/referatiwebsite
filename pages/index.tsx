// pages/index.tsx - FULL SEO OPTIMIZATION with Structured Data
import type { NextPage } from 'next';
import Head from 'next/head';
import { seoConfig } from '../config/seo.config';

// Import all the components for the page
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
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="author" content={seoConfig.author} />
        <meta name="viewport" content={seoConfig.meta.viewport} />
        <meta charSet={seoConfig.meta.charset} />
        <meta name="robots" content={seoConfig.meta.robots} />
        <meta name="language" content={seoConfig.meta.lang} />
        <meta httpEquiv="Content-Language" content="bg-BG" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={seoConfig.og.type} />
        <meta property="og:url" content={seoConfig.og.url} />
        <meta property="og:title" content={seoConfig.og.title} />
        <meta property="og:description" content={seoConfig.og.description} />
        <meta property="og:image" content={seoConfig.og.image} />
        <meta property="og:site_name" content={seoConfig.og.siteName} />
        <meta property="og:locale" content={seoConfig.og.locale} />

        {/* Twitter */}
        <meta name="twitter:card" content={seoConfig.twitter.card} />
        <meta name="twitter:url" content={seoConfig.url} />
        <meta name="twitter:title" content={seoConfig.twitter.title} />
        <meta name="twitter:description" content={seoConfig.twitter.description} />
        <meta name="twitter:image" content={seoConfig.twitter.image} />
        <meta name="twitter:site" content={seoConfig.twitter.site} />
        <meta name="twitter:creator" content={seoConfig.twitter.creator} />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="application-name" content="Referati.website" />
        <meta name="apple-mobile-web-app-title" content="Referati.website" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Canonical URL */}
        <link rel="canonical" href={seoConfig.url} />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* STRUCTURED DATA - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoConfig.structuredData.organization)
          }}
        />

        {/* STRUCTURED DATA - Professional Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoConfig.structuredData.service)
          }}
        />

        {/* STRUCTURED DATA - Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoConfig.structuredData.website)
          }}
        />

        {/* STRUCTURED DATA - Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoConfig.structuredData.localBusiness)
          }}
        />

        {/* STRUCTURED DATA - Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoConfig.structuredData.breadcrumb)
          }}
        />

        {/* STRUCTURED DATA - FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoConfig.structuredData.faq)
          }}
        />

        {/* Hreflang for International SEO (if needed) */}
        <link rel="alternate" href="https://referati.website" hrefLang="bg" />
        <link rel="alternate" href="https://referati.website" hrefLang="x-default" />

        {/* DNS Prefetch for External Resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Additional Performance Hints */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="format-detection" content="address=no" />

        {/* Copyright and Additional Info */}
        <meta name="copyright" content="© 2025 Referati.website" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 day" />
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
      </div>
    </>
  );
};

export default HomePage;
// pages/index.tsx - FIXED SEO CONFIG INTEGRATION
// Using existing seo.config.js instead of duplicated data

import Head from "next/head";
import { seoConfig } from "../config/seo.config"; // Import existing SEO config
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trust from "../components/Trust";
import Services from "../components/Services";
import ProblemSolution from "../components/ProblemSolution";
import Process from "../components/Process";
import Guarantees from "../components/Guarantees";
import Pricing from "../components/Pricing";
import Urgency from "../components/Urgency";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="author" content={seoConfig.author} />
        <meta name="robots" content={seoConfig.meta.robots} />
        <meta charSet={seoConfig.meta.charset} />
        <meta name="viewport" content={seoConfig.meta.viewport} />
        <meta httpEquiv="content-language" content={seoConfig.meta.lang} />
        <link rel="canonical" href={seoConfig.url} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seoConfig.og.title} />
        <meta property="og:description" content={seoConfig.og.description} />
        <meta property="og:url" content={seoConfig.og.url} />
        <meta property="og:type" content={seoConfig.og.type} />
        <meta property="og:image" content={seoConfig.og.image} />
        <meta property="og:locale" content={seoConfig.og.locale} />
        <meta property="og:site_name" content={seoConfig.og.siteName} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={seoConfig.twitter.card} />
        <meta name="twitter:title" content={seoConfig.twitter.title} />
        <meta
          name="twitter:description"
          content={seoConfig.twitter.description}
        />
        <meta name="twitter:image" content={seoConfig.twitter.image} />
        <meta name="twitter:site" content={seoConfig.twitter.site} />
        <meta name="twitter:creator" content={seoConfig.twitter.creator} />

        {/* Google Site Verification (if configured) */}
        {seoConfig.meta.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={seoConfig.meta.googleSiteVerification}
          />
        )}

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoConfig.structuredData.organization),
          }}
        />

        {/* Structured Data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoConfig.structuredData.service),
          }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoConfig.structuredData.website),
          }}
        />

        {/* Structured Data - FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoConfig.structuredData.faq),
          }}
        />
      </Head>

      <div className="font-sans">
        <Navbar />

        <main>
          {/* WORKING COMPONENTS - Config integration verified */}
          <Hero />
          <Trust />
          <Services />
          <ProblemSolution />
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
}

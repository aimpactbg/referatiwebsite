// File: pages/index.tsx
// This is our main page file, assembling all the new components.

import Head from 'next/head';
import { seoConfig } from '../seo.config';

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

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta property="og:title" content={seoConfig.og.title} />
        <meta property="og:description" content={seoConfig.og.description} />
        <meta property="og:url" content={seoConfig.og.url} />
        <meta property="og:image" content={seoConfig.og.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
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
}
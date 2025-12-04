'use client';

import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import StepsSection from '@/components/StepsSection';
import BusinessShowcaseSection from '@/components/BusinessShowcaseSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <AboutSection />
      <StepsSection />
      <BusinessShowcaseSection />
      <CTASection />
      <Footer />
    </div>
  );
}

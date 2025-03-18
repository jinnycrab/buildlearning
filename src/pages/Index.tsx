
import React from 'react';
import Navigation from '@/components/navigation/Navigation';
import HeroSection from '@/components/home/HeroSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import SupervatorSection from '@/components/home/SupervatorSection';
import FacilitatorsSection from '@/components/home/FacilitatorsSection';
import WhoWeHelpSection from '@/components/home/WhoWeHelpSection';
import ContactSection from '@/components/home/ContactSection';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '@/components/utils/ScrollToTop';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Build Learning - AI-Powered Innovation Bootcamps</title>
        <meta name="description" content="Learn to build AI digital products in our 2-hour bootcamps. Experience design thinking and innovation with hands-on training." />
      </Helmet>
      
      <ScrollToTop />
      <Navigation />
      
      <main>
        {/* Hero section with its own vignette */}
        <HeroSection />
        
        {/* Content sections with a separate vignette */}
        <div className="relative bg-gradient-to-b from-gray-100 to-white pt-16">
          {/* Vignette overlay for content sections */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-gray-100 pointer-events-none"></div>
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-100 via-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/50 to-transparent pointer-events-none"></div>
          
          {/* Content sections */}
          <div className="relative z-10">
            <WhoWeHelpSection />
            <BenefitsSection />
            <SupervatorSection />
            <FacilitatorsSection />
            <div id="contact">
              <ContactSection />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

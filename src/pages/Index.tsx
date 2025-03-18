
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
        <HeroSection />
        <WhoWeHelpSection />
        <BenefitsSection />
        <SupervatorSection />
        <FacilitatorsSection />
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

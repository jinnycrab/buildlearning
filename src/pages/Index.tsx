
import React from 'react';
import Navigation from '@/components/navigation/Navigation';
import HeroSection from '@/components/home/HeroSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import SupervatorSection from '@/components/home/SupervatorSection';
import FacilitatorsSection from '@/components/home/FacilitatorsSection';
import WhoWeHelpSection from '@/components/home/WhoWeHelpSection';
import CtaSection from '@/components/home/CtaSection';
import TaglineSection from '@/components/home/TaglineSection';
import ContactSection from '@/components/home/ContactSection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Build Learning - AI-Powered Innovation Bootcamps</title>
        <meta name="description" content="Learn to build AI digital products in our 2-hour bootcamps. Experience design thinking and innovation with hands-on training." />
      </Helmet>
      
      <Navigation />
      
      <main>
        <HeroSection />
        <BenefitsSection />
        <SupervatorSection />
        <FacilitatorsSection />
        <WhoWeHelpSection />
        <ContactSection />
        <CtaSection />
        <TaglineSection />
      </main>
    </div>
  );
};

export default Index;

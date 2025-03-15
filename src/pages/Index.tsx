import React from 'react';
import Navigation from '@/components/navigation/Navigation';
import HeroSection from '@/components/home/HeroSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import ReasonsToBelieverSection from '@/components/home/ReasonsToBelieverSection';
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
        <ReasonsToBelieverSection />
        {/* Other sections will go here */}
      </main>
    </div>
  );
};

export default Index;

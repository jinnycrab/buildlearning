import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import BorderedSection from '../layout/BorderedSection';
import { Lightbulb, Cpu, Users } from 'lucide-react';

// Feature card component for the three categories
const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon,
  delay = 0 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  delay?: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <div 
      ref={cardRef}
      className={`transform transition-all duration-700 delay-${delay} ease-out
        ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
    >
      <BorderedSection className="h-full p-8 hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col h-full">
          <div className="mb-6 flex items-center">
            <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center mr-4">
              <Icon className="w-6 h-6 text-gray-800" />
            </div>
            <h3 className="text-2xl font-bold font-codec text-gray-800">{title}</h3>
          </div>
          
          <div className="font-inter text-gray-700 flex-grow">
            {description}
          </div>
        </div>
      </BorderedSection>
    </div>
  );
};

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1
  });

  return (
    <section className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Glassmorphic background with gradient flow similar to WhoWeHelpSection */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5d5b4d]/20 to-white/90 backdrop-blur-[2px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-3xl md:text-4xl font-bold mb-16 text-center transform transition-all duration-700 ease-out
            ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ fontFamily: 'Codec Pro, sans-serif' }}>
          What makes us different?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Pedagogy" 
            description="We'll fill this in later with specific information about our pedagogical approach and what makes it different."
            icon={Lightbulb}
            delay={100}
          />
          
          <FeatureCard 
            title="Technology" 
            description="We'll update this with information about the technology we use and how it enhances the learning experience."
            icon={Cpu}
            delay={200}
          />
          
          <FeatureCard 
            title="People" 
            description="We'll add details about our team and what makes them uniquely qualified to deliver our programs."
            icon={Users}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

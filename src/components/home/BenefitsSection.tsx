
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Lightbulb, Cpu, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import BorderedSection from '../layout/BorderedSection';

// Feature data
const features = [
  {
    id: 'pedagogy',
    title: 'Pedagogy',
    description: "We'll fill this in later with specific information about our pedagogical approach and what makes it different.",
    icon: Lightbulb,
    color: '#93ce98', // green
    image: '/lovable-uploads/65a81c1d-edd1-4bd3-b653-af5bee0bc5c1.png' // Placeholder image, replace with actual image
  },
  {
    id: 'technology',
    title: 'Technology',
    description: "We'll update this with information about the technology we use and how it enhances the learning experience.",
    icon: Cpu,
    color: '#f9c131', // yellow
    image: '/lovable-uploads/65a81c1d-edd1-4bd3-b653-af5bee0bc5c1.png' // Placeholder image, replace with actual image
  },
  {
    id: 'people',
    title: 'People',
    description: "We'll add details about our team and what makes them uniquely qualified to deliver our programs.",
    icon: Users, 
    color: '#1f69ad', // blue
    image: '/lovable-uploads/65a81c1d-edd1-4bd3-b653-af5bee0bc5c1.png' // Placeholder image, replace with actual image
  }
];

const BenefitsSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1
  });
  
  // Auto rotate features every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const nextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % features.length);
  };
  
  const prevFeature = () => {
    setActiveFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  const feature = features[activeFeature];

  return (
    <section className="py-24 min-h-screen flex items-center relative overflow-hidden" ref={sectionRef}>
      {/* Glassmorphic background with gradient flow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5d5b4d]/20 to-white/90 backdrop-blur-[2px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-3xl md:text-4xl font-bold mb-16 text-center transform transition-all duration-700 ease-out
            ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ fontFamily: 'Codec Pro, sans-serif' }}>
          What makes us different?
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Media section on the left - Image with branded color border */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 flex-shrink-0"
            >
              <div className="rounded-2xl p-2 transform transition-all duration-500" 
                style={{ 
                  background: `linear-gradient(135deg, ${feature.color}dd, ${feature.color}99)`,
                  boxShadow: `0 10px 30px -10px ${feature.color}88` 
                }}>
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[380px] md:h-[450px] object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Content section on the right */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center mr-4"
                  style={{ backgroundColor: `${feature.color}30` }}>
                  <feature.icon className="w-6 h-6 text-gray-800" />
                </div>
                <h3 className="text-3xl font-bold font-codec text-gray-800">{feature.title}</h3>
              </div>
              
              <div className="font-inter text-lg text-gray-700 mb-8">
                {feature.description}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Navigation controls */}
        <div className="flex justify-center mt-12 gap-4">
          <button 
            onClick={prevFeature}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Previous feature"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <div className="flex space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeFeature ? 'bg-gray-800 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextFeature}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Next feature"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

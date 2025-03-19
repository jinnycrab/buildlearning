import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Cpu, Users } from 'lucide-react';

// Feature data
const features = [
  {
    id: 'pedagogy',
    title: 'Pedagogy',
    description: "While many other providers stop at theory, we have a money-back guarantee that you will learn the fundamentals of user research, innovation, with a working digital prototype to show at the end of 2 hours",
    icon: Lightbulb,
    color: '#93ce98', // green
    image: '/lovable-uploads/65a81c1d-edd1-4bd3-b653-af5bee0bc5c1.png' // Placeholder image, replace with actual image
  },
  {
    id: 'technology',
    title: 'Technology',
    description: "We developed an in-house EdTech that is your innovation co-pilot, guiding you through the research-to-innovation process with personalized aids and inspiration",
    icon: Cpu,
    color: '#f9c131', // yellow
    image: '/lovable-uploads/65a81c1d-edd1-4bd3-b653-af5bee0bc5c1.png' // Placeholder image, replace with actual image
  },
  {
    id: 'people',
    title: 'People',
    description: "We have built a network of young and talented design thinkers and innovators, ready to inspire you with their experience in industry",
    icon: Users, 
    color: '#1f69ad', // blue
    image: '/lovable-uploads/65a81c1d-edd1-4bd3-b653-af5bee0bc5c1.png' // Placeholder image, replace with actual image
  }
];

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1
  });
  
  return (
    <section className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Glassmorphic background with gradient flow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5d5b4d]/20 to-white/90 backdrop-blur-[2px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-3xl md:text-4xl font-bold mb-16 text-center transform transition-all duration-700 ease-out
            ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ fontFamily: 'Codec Pro, sans-serif' }}>
          What makes us different?
        </h2>
        
        {/* Individual feature sections */}
        {features.map((feature, index) => (
          <div 
            key={feature.id}
            className={`feature-section mb-24 ${index === features.length - 1 ? 'mb-0' : ''}`}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
              {/* Media section on the left - Image with branded color border */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
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
              
              {/* Content section on the right */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full lg:w-1/2"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${feature.color}30` }}>
                    <feature.icon className="w-6 h-6 text-gray-800" />
                  </div>
                  <h3 className="text-3xl font-bold font-codec text-gray-800">{feature.title}</h3>
                </div>
                
                <div className="font-inter text-lg text-gray-700">
                  {feature.description}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;


import React from 'react';
import { motion } from 'framer-motion';
import PolaroidCard from './PolaroidCard';

const WhoWeHelpSection = () => {
  const audiences = [
    {
      title: "Schools",
      subtitle: "Learn design thinking",
      fullText: "Our sessions are designed to be practical, engaging, and free from unnecessary theory. Every student will leave with a working prototype, embodying the principles of hands-on learning. We strongly support the vision of Design Education 2050, believing that integrating AI-powered design thinking and innovation is crucial for equipping students with future-ready skills.",
      imageSrc: "/lovable-uploads/166bd9fc-ab3f-4f68-ab8d-af3416372b44.png",
      cardColor: "bg-soft-blue",
      rotation: -5,
      scale: 0.95
    },
    {
      title: "Corporates",
      subtitle: "Build innovative culture",
      fullText: "Our corporate workshops are designed to foster a culture of innovation and creative problem-solving. Every participant will leave with a working prototype and a deeper understanding of how to harness AI for strategic advantage. We believe that integrating AI-powered design thinking is essential for driving business innovation and equipping teams with the skills to thrive in a rapidly evolving market.",
      imageSrc: "/lovable-uploads/14cb6424-8530-4d5e-b32f-267908cb5ee3.png", 
      cardColor: "bg-soft-orange",
      rotation: 0,
      scale: 1
    },
    {
      title: "Individuals",
      subtitle: "Create passion projects",
      fullText: "Our 6-week program is designed to transform your ideas into a commercially viable digital product. Through hands-on learning and AI-driven design thinking, you'll incubate your ideas, refine your thought process, and launch your product into the market, all within six weeks.",
      imageSrc: "/lovable-uploads/01d2284e-94af-48ff-b920-30ab6c6a6b4d.png", // Placeholder until user uploads individual image
      cardColor: "bg-soft-green",
      rotation: 5,
      scale: 0.95
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-codec">
            Who We Help
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-inter">
            Our bootcamps are designed for various audiences. 
            <span className="hidden sm:inline"> Click on each card to learn more.</span>
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-4 lg:gap-2 relative">
          {/* We'll arrange the cards with slight overlap for desktop, and stacked for mobile */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-16 md:gap-4">
            {audiences.map((audience, index) => (
              <div 
                key={audience.title} 
                className={`transform ${index === 0 ? 'md:translate-x-4 md:-translate-y-4' : ''} ${index === 2 ? 'md:-translate-x-4 md:-translate-y-4' : ''}`}
                style={{ zIndex: isHovered => isHovered ? 10 : 1 }}
              >
                <PolaroidCard
                  title={audience.title}
                  subtitle={audience.subtitle}
                  fullText={audience.fullText}
                  imageSrc={audience.imageSrc}
                  cardColor={audience.cardColor}
                  rotation={audience.rotation}
                  scale={audience.scale}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-40 h-40 bg-brand-orange/10 rounded-full blur-2xl -z-10"></div>
    </section>
  );
};

export default WhoWeHelpSection;

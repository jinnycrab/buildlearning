import React from 'react';
import { motion } from 'framer-motion';
import PolaroidCard from './PolaroidCard';
const WhoWeHelpSection = () => {
  const audiences = [{
    title: "Schools",
    subtitle: "Learn design thinking",
    fullText: "Our sessions are designed to be practical, engaging, and free from unnecessary theory. Every student will leave with a working prototype, embodying the principles of hands-on learning. We strongly support the vision of Design Education 2050, believing that integrating AI-powered design thinking and innovation is crucial for equipping students with future-ready skills.",
    imageSrc: "/lovable-uploads/7ba12e5d-51c8-49d7-aae1-e3e777c9b377.png",
    cardColor: "#93ce98",
    rotation: -5,
    scale: 1
  }, {
    title: "Corporates",
    subtitle: "Build innovative culture",
    fullText: "Our corporate workshops are designed to foster a culture of innovation and creative problem-solving. Every participant will leave with a working prototype and a deeper understanding of how to harness AI for strategic advantage. We believe that integrating AI-powered design thinking is essential for driving business innovation and equipping teams with the skills to thrive in a rapidly evolving market.",
    imageSrc: "/lovable-uploads/be72d76d-d1ab-473a-99a8-66f5ee0e4c9f.png",
    cardColor: "#f9c131",
    rotation: 0,
    scale: 1
  }, {
    title: "Individuals",
    subtitle: "Create passion projects",
    fullText: "Our 6-week program is designed to transform your ideas into a commercially viable digital product. Through hands-on learning and AI-driven design thinking, you'll incubate your ideas, refine your thought process, and launch your product into the market, all within six weeks.",
    imageSrc: "/lovable-uploads/41bfc7cb-f220-406f-ba54-b1cb14db41ba.png",
    cardColor: "#1f69ad",
    rotation: 5,
    scale: 1
  }];
  return <section className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-codec">
            Who We Help
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-inter">
            Our bootcamps are designed for various audiences. 
            <span className="hidden sm:inline"> Click on each card to learn more.</span>
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-12 lg:gap-16 relative">
          <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-center gap-16 md:gap-8">
            {audiences.map((audience, index) => <div key={audience.title} className={`transform md:mx-4 ${index === 0 ? 'md:-translate-y-4' : ''} ${index === 2 ? 'md:-translate-y-4' : ''}`} style={{
            zIndex: index === 1 ? 2 : 1
          }}>
                <PolaroidCard title={audience.title} subtitle={audience.subtitle} fullText={audience.fullText} imageSrc={audience.imageSrc} cardColor={audience.cardColor} rotation={audience.rotation} scale={audience.scale} />
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default WhoWeHelpSection;
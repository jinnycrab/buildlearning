
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface AudienceCardProps {
  title: string;
  subtitle: string;
  fullText: string;
  iconBgColor: string;
  index: number;
}

const AudienceCard: React.FC<AudienceCardProps> = ({ 
  title, 
  subtitle, 
  fullText, 
  iconBgColor,
  index 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="flex flex-col space-y-4"
    >
      <div className="flex items-start space-x-4">
        <div 
          className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${iconBgColor}`}
        >
          {/* Icon placeholder - could be replaced with actual icons */}
          <div className="w-10 h-10 bg-white rounded-full"></div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold font-codec">{title}</h3>
          <p className="text-muted-foreground mt-1 font-inter">{subtitle}</p>
        </div>
      </div>

      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <CollapsibleContent className="mt-2 text-muted-foreground">
          <p className="font-inter">{fullText}</p>
        </CollapsibleContent>
        
        <CollapsibleTrigger asChild>
          <Button 
            variant="outline" 
            className="mt-2 px-6 border-gray-300 font-inter"
          >
            {isOpen ? (
              <>
                <span>Read less</span>
                <ChevronUp className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                <span>Read more</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </CollapsibleTrigger>
      </Collapsible>
    </motion.div>
  );
};

const WhoWeHelpSection = () => {
  const audiences = [
    {
      title: "Schools",
      subtitle: "Learn design thinking",
      fullText: "Our sessions are designed to be practical, engaging, and free from unnecessary theory. Every student will leave with a working prototype, embodying the principles of hands-on learning. We strongly support the vision of Design Education 2050, believing that integrating AI-powered design thinking and innovation is crucial for equipping students with future-ready skills.",
      iconBgColor: "bg-brand-yellow/20",
    },
    {
      title: "Corporates",
      subtitle: "Build innovative culture",
      fullText: "Our corporate workshops are designed to foster a culture of innovation and creative problem-solving. Every participant will leave with a working prototype and a deeper understanding of how to harness AI for strategic advantage. We believe that integrating AI-powered design thinking is essential for driving business innovation and equipping teams with the skills to thrive in a rapidly evolving market.",
      iconBgColor: "bg-brand-blue/20",
    },
    {
      title: "Individuals",
      subtitle: "Create passion projects",
      fullText: "Our 6-week program is designed to transform your ideas into a commercially viable digital product. Through hands-on learning and AI-driven design thinking, you'll incubate your ideas, refine your thought process, and launch your product into the market, all within six weeks.",
      iconBgColor: "bg-brand-green/20",
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-12 h-12 border-2 border-primary/30 rounded-full opacity-20"></div>
        <div className="absolute bottom-12 left-1/4 w-16 h-16 border border-accent/50 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-brand-yellow/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-codec">
            Who We Help?
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {audiences.map((audience, index) => (
              <AudienceCard
                key={audience.title}
                title={audience.title}
                subtitle={audience.subtitle}
                fullText={audience.fullText}
                iconBgColor={audience.iconBgColor}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;

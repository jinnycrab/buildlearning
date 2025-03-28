
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { User } from 'lucide-react';

interface FacilitatorProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

const Facilitator: React.FC<FacilitatorProps> = ({
  name,
  title,
  description,
  imageUrl
}) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 mx-auto max-w-sm">
      <Avatar className="h-32 w-32 border-4 border-primary/10 shadow-lg">
        <AvatarImage src={imageUrl} alt={name} />
        <AvatarFallback>
          <User className="h-12 w-12 text-muted-foreground" />
        </AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-accent mb-2">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const FacilitatorsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2
  });

  const facilitators = [
    {
      name: "Jin Yi Chua",
      title: "Lead Trainer",
      description: "Jin Yi has worked at the intersection of innovation and strategy since he graduated Valedictorian and Gold Medalist at Nanyang Technological University. He leads research and innovation projects at Samsung's regional incubator, and previously consulted for Fortune 500 companies like Google, ByteDance, Unilever. He has also taught at LASALLE School of the Arts and Macau University.",
      imageUrl: "https://raw.githubusercontent.com/jinnycrab/holiday-learn-fun/refs/heads/main/images/Jynew.jpeg"
    },
    {
      name: "Ash Ang",
      title: "Lead Trainer",
      description: "Ash is an education specialist in EdTech innovation. He graduated from Stanford University Graduate School of Business' Ignite Executive Program and with a MS in Learning Design and Technology from the Graduate School of Education. Formerly a Singaporean educator, government scholar and an AI Mentor at the Stanford Accelerator for Learning, Ash brings his experience in instructional design to Build.",
      imageUrl: "https://raw.githubusercontent.com/jinnycrab/holiday-learn-fun/refs/heads/main/images/Ashnew.jpeg"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto p-8">
          <div className={`transform transition-all duration-1000 ease-out ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-general-sans">
              Our Facilitators
            </h2>
            
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-xl">
              Our facilitators have conducted more than 20 over workshops in the United States and Singapore, and have worked in education, AI, research and innovation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              {facilitators.map((facilitator, index) => (
                <div key={index} className={`transform transition-all duration-1000 ease-out delay-${index * 200} ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <Facilitator {...facilitator} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitatorsSection;

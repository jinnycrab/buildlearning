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
  return <div className="flex flex-col items-center text-center space-y-4 mx-auto max-w-sm">
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
    </div>;
};
const FacilitatorsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2
  });
  const facilitators = [{
    name: "Jin Yi Chua",
    title: "Co-founder",
    description: "Jin Yi is an Innovation Consultant and Student Engagement Lead for SUTD, focusing on academic innovation and digital design thinking. She has conducted workshops for the Stanford Design School in Asia and led corporate design thinking sessions.",
    imageUrl: "/lovable-uploads/JY.jpeg"
  }, {
    name: "Ash Ang",
    title: "Co-founder",
    description: "Ash is a CS & Design hybrid who loves education. She received both her B.S. and M.S. in Computer Science at Stanford, where she focused on machine learning and human-computer interaction, and is a published AI researcher.",
    imageUrl: "/lovable-uploads/Ashnew.jpeg"
  }];
  return <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-12 h-12 border-2 border-primary rounded-full opacity-20"></div>
        <div className="absolute bottom-12 left-1/4 w-16 h-16 border border-accent/50 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-primary/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className={`transform transition-all duration-1000 ease-out ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-general-sans">
              Our Facilitators
            </h2>
            
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-xl">
              Our facilitators have conducted more than 20 over workshops in the United States and Singapore, and have worked in education, AI, research and innovation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {facilitators.map((facilitator, index) => <div key={index} className={`transform transition-all duration-1000 ease-out delay-${index * 200} ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <Facilitator {...facilitator} />
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FacilitatorsSection;
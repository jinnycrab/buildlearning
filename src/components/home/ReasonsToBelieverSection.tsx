
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

interface TeamMemberProps {
  name: string;
  role: string;
  imgSrc: string;
  initials: string;
}

const TeamMember = ({ name, role, imgSrc, initials }: TeamMemberProps) => (
  <div className="flex items-center space-x-4">
    <Avatar className="h-16 w-16 border-2 border-brand-cream">
      <AvatarImage src={imgSrc} alt={name} />
      <AvatarFallback className="bg-brand-blue text-white">{initials}</AvatarFallback>
    </Avatar>
    <div>
      <h4 className="text-lg font-bold font-codec">{name}</h4>
      <p className="text-sm text-gray-600 font-biome">{role}</p>
    </div>
  </div>
);

const ReasonsToBelieverSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1
  });

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-brand-green rounded-full opacity-30"></div>
        <div className="absolute top-32 right-1/3 w-24 h-24 border border-brand-blue rounded-full opacity-20"></div>
        <div className="absolute top-60 right-20 w-10 h-10 bg-brand-yellow opacity-20 rounded-sm rotate-12"></div>
      </div>

      <div className="container mx-auto px-4">
        <h2 
          className={`text-3xl md:text-4xl font-bold mb-12 text-center transform transition-all duration-700 ease-out
            ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
          style={{ fontFamily: 'Codec Pro, sans-serif' }}
        >
          Reasons to Believe
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Facilitators Card */}
          <Card 
            className={`transform transition-all duration-700 ease-out
              ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 font-codec">Experienced Facilitators</h3>
              <p className="text-gray-700 mb-6 font-biome">
                Our facilitators have conducted more than 20 workshops in the United States and Singapore, 
                and have worked in education, AI, research and innovation.
              </p>
              
              <div className="space-y-6 my-8">
                <TeamMember 
                  name="Ashley Tay" 
                  role="Innovation & Education Specialist" 
                  imgSrc="/public/lovable-uploads/8eda309d-6107-496c-95a7-d78a1c8dad49.png" 
                  initials="AT"
                />
                <TeamMember 
                  name="Jie Ying Yew" 
                  role="AI & Research Specialist" 
                  imgSrc="/public/lovable-uploads/416944f9-de82-427d-9e29-f019e24d6d77.png" 
                  initials="JY"
                />
              </div>
              
              <Button asChild variant="link" className="px-0 text-brand-blue hover:text-brand-blue/80 gap-1">
                <a href="#" className="font-medium">
                  Learn more here
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* In-house App Card */}
          <Card 
            className={`transform transition-all duration-700 ease-out
              ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 font-codec">Innovative Design Thinking App</h3>
              <p className="text-gray-700 mb-6 font-biome">
                Our in-house app simplifies design thinking with guided aids and learning feedback,
                making it accessible to both beginners and industry leaders.
              </p>
              
              {/* Video placeholder with 16:9 aspect ratio */}
              <div className="relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50 mb-8">
                <div className="relative pb-[56.25%] h-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500 font-biome">Video demo placeholder</p>
                  </div>
                </div>
              </div>
              
              <Button asChild variant="link" className="px-0 text-brand-blue hover:text-brand-blue/80 gap-1">
                <a href="#" className="font-medium">
                  Learn more here
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReasonsToBelieverSection;


import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

const SupervatorSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2
  });

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50/60 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/3 w-12 h-12 border-2 border-brand-blue rounded-full opacity-20"></div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 border-2 border-brand-orange rounded-full opacity-10"></div>
        <div className="absolute top-40 right-10 w-8 h-8 bg-brand-yellow opacity-15 rounded-sm rotate-12"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div 
            className={`transform transition-all duration-1000 ease-out ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" style={{ fontFamily: 'Codec Pro, sans-serif' }}>
              Supervator.ai
            </h2>
            
            <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto font-biome">
              Our in-house app simplifies design thinking with guided aids and learning feedback, 
              making it accessible to both beginners and industry innovators.
            </p>

            <div className="mb-14">
              <Card className="overflow-hidden border-0 shadow-lg relative bg-gray-900 aspect-video max-w-4xl mx-auto">
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm group cursor-pointer">
                  <div className="transform transition-all duration-300 group-hover:scale-110">
                    <PlayCircle className="w-20 h-20 text-white opacity-90" />
                  </div>
                </div>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 flex items-center justify-center">
                    <p className="text-white/70 text-lg">Video Demo Coming Soon</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                variant="default" 
                className="bg-brand-blue hover:bg-brand-blue/90 text-white font-medium"
              >
                Learn more about Supervator.ai
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupervatorSection;

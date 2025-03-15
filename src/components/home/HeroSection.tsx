import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const HeroSection = () => {
  return <section className="relative pt-24 md:pt-32 pb-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Shapes and abstract elements */}
        <div className="absolute top-24 right-1/4 w-20 h-20 border border-[#4D88C4] rounded-full opacity-30"></div>
        <div className="absolute top-36 right-1/3 w-8 h-8 bg-[#F4D365] rounded-sm rotate-12"></div>
        <div className="absolute bottom-24 left-1/4 w-32 h-32 border border-[#8CC084] rounded-full opacity-40"></div>
        <div className="absolute top-72 left-16 w-12 h-12 bg-[#E86642] opacity-20 rounded-md rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-[#8CC084] opacity-20 rounded-md"></div>
        <div className="absolute bottom-40 right-1/3 w-10 h-10 bg-[#4D88C4] opacity-20 rounded-sm rotate-12"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="md:flex items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-block px-3 py-1 mb-4 border border-[#E86642] rounded-full text-sm text-[#E86642] font-medium">Build Something Today!</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{
            fontFamily: 'Codec Pro, sans-serif'
          }}>
              Build an AI Digital Product in 2 Hours
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg" style={{
            fontFamily: 'Biome Light, sans-serif'
          }}>
              Experience AI-powered Design Thinking & Innovation in our 2-hour bootcamp, and take home something real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#E86642] hover:bg-[#E86642]/90 text-white rounded-full py-6 px-8 flex items-center gap-2 text-base">
                <Link to="/camps">
                  Join our next bootcamp!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#4D88C4] text-[#4D88C4] rounded-full py-6 px-8 hover:bg-[#4D88C4]/10">
                <Link to="/process">
                  Learn our process
                </Link>
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative rounded-lg border border-gray-200 p-4 bg-white/70 backdrop-blur-sm shadow-sm">
              <img src="/public/lovable-uploads/6e721774-e49f-4400-8700-e260c1398aca.png" alt="Students collaborating on digital products" className="rounded w-full object-cover" />
              <div className="absolute -bottom-5 -right-5 bg-[#F4D365] rounded-lg py-3 px-5 shadow-sm">
                <p className="text-black text-sm font-medium" style={{
                fontFamily: 'Biome Light, sans-serif'
              }}>
                  Over 500+ students trained
                </p>
              </div>
            </div>
            
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 right-12 bottom-12 border border-[#8CC084] rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
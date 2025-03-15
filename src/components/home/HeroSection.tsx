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

      
    </section>;
};
export default HeroSection;
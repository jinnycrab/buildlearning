import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { X } from 'lucide-react';
interface BenefitProps {
  conventional: string;
  innovative: string;
  delay: number;
}
const BenefitItem = ({
  conventional,
  innovative,
  delay
}: BenefitProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, {
    once: true,
    amount: 0.5
  });
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setRevealed(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);
  return <div ref={itemRef} className="mb-14 relative">
      <div className="relative">
        {/* Conventional approach (speech bubble) */}
        <div className={`relative bg-white border border-gray-200 p-5 rounded-lg mb-6 shadow-sm 
          ${revealed ? 'opacity-50' : 'opacity-100'} transition-opacity duration-500`}>
          <div className="absolute -bottom-3 left-5 w-4 h-4 bg-white border-b border-r border-gray-200 transform rotate-45"></div>
          <p className="font-codec text-lg text-gray-800">
            {conventional}
            {revealed && <span className="absolute inset-0 flex items-center justify-center">
                {/* Chalk-like crossing out effect */}
                <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M10,45 C20,50 30,40 40,50 C50,60 60,40 70,50 C80,60 90,45 95,55" className="stroke-brand-orange animate-fade-in" strokeWidth="4" strokeLinecap="round" fill="none" style={{
                strokeDasharray: '120',
                strokeDashoffset: '120',
                animation: 'chalk-dash 1.5s ease forwards'
              }} />
                </svg>
                
                <X className="text-brand-orange w-8 h-8 animate-fade-in opacity-70" style={{
              filter: 'drop-shadow(0px 0px 1px rgba(232, 102, 66, 0.5))'
            }} />
              </span>}
          </p>
        </div>

        {/* Our innovative approach */}
        <div className={`bg-white/70 backdrop-blur-sm border border-brand-green p-5 rounded-lg ml-8 
            transform transition-all duration-700 ease-out
            ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="font-biome text-lg text-gray-800">{innovative}</p>
        </div>
      </div>
    </div>;
};
const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1
  });

  // Add keyframes to document head
  useEffect(() => {
    // Create a style element
    const styleEl = document.createElement('style');

    // Add the keyframes CSS
    styleEl.innerHTML = `
      @keyframes chalk-dash {
        to {
          stroke-dashoffset: 0;
        }
      }
    `;

    // Append to the document head
    document.head.appendChild(styleEl);

    // Clean up when component unmounts
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
  return <section className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-1/4 w-16 h-16 border border-brand-blue rounded-full opacity-30"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border border-brand-orange rounded-full opacity-20"></div>
        <div className="absolute top-60 right-20 w-10 h-10 bg-brand-yellow opacity-20 rounded-sm rotate-12"></div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center transform transition-all duration-700 ease-out
            ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{
        fontFamily: 'Codec Pro, sans-serif'
      }}>Existing providers teach you theory. We want to put them into practice with you. </h2>

        <div className="max-w-3xl mx-auto">
          <BenefitItem conventional="Empathy is important" innovative="We teach you the craft of writing interview questions and recruiting respondents, so you can truly empathize with your users." delay={500} />
          
          <BenefitItem conventional="Iteration and Ideation is about the divergent process" innovative="Our educational tool developed in-house personalizes your ideation and iteration process, helping you innovate more effectively." delay={1000} />
          
          <BenefitItem conventional="Prototype so that you can get feedback" innovative="We teach you how to create and demo real app prototypes in just 90 minutes, completing the design thinking loop." delay={1500} />
        </div>
      </div>
    </section>;
};
export default BenefitsSection;
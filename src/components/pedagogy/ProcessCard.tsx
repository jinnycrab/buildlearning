import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProcessCardProps {
  letter: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export const ProcessCard = ({
  letter,
  title,
  description,
  features,
  image
}: ProcessCardProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="relative h-[calc(100vh-320px)] rounded-xl overflow-hidden group">
        {/* Image with overlay gradient */}
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt={`${title} Process`} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
        </div>
        
        {/* Content */}
        <div className="relative h-full p-6 flex flex-col">
          <div className="mb-4">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">
              {letter}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white font-general-sans">{title}</h3>
            <p className="text-white/80 text-sm">
              {description}
            </p>
          </div>

          <div className="mt-auto">
            <h4 className="text-base font-semibold mb-2 text-white font-general-sans">What Students Do</h4>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Desktop view with fixed heights and better text handling
  return (
    <div className="relative h-[450px] rounded-xl overflow-hidden group">
      {/* Image with overlay gradient */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={`${title} Process`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
      </div>
      
      {/* Content with fixed heights for better alignment */}
      <div className="relative h-full p-6 flex flex-col">
        {/* Header section with fixed height */}
        <div className="min-h-[180px]">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">
            {letter}
          </div>
          <h3 className="text-xl font-bold mb-2 text-white font-general-sans">{title}</h3>
          <p className="text-white/80 text-sm line-clamp-3">
            {description}
          </p>
        </div>

        {/* Features section with scrollable area if needed */}
        <div className="mt-4">
          <h4 className="text-base font-semibold mb-3 text-white font-general-sans">What Students Do</h4>
          <div className="max-h-[180px] overflow-y-auto pr-2 scrollbar-thin">
            <ul className="space-y-2.5">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

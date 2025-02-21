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

export const ProcessCard = ({ letter, title, description, features, image }: ProcessCardProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex flex-col h-full justify-between">
        <div className="relative aspect-square w-full mb-4 overflow-hidden rounded-xl">
          {/* Image with overlay gradient */}
          <div className="absolute inset-0">
            <img 
              src={image}
              alt={`${title} Process`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
          </div>
          
          {/* Superimposed content */}
          <div className="absolute inset-0 p-6 flex flex-col text-white">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">
              {letter}
            </div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-white/90 text-sm">
              {description}
            </p>
          </div>
        </div>

        {/* Features list - centered in remaining space */}
        <div className="flex-grow flex items-center">
          <ul className="space-y-2.5 w-full">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
        {letter}
      </div>
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <p className="text-lg text-muted-foreground mb-4">
        {description}
      </p>
      <div className="aspect-video w-full overflow-hidden rounded-xl mb-4">
        <img 
          src={image}
          alt={`${title} Process`}
          className="w-full h-full object-cover"
        />
      </div>
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

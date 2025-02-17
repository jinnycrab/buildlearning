
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ProcessCardProps {
  letter: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export const ProcessCard = ({ letter, title, description, features, image }: ProcessCardProps) => {
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

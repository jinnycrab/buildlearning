
import { CheckCircle2 } from "lucide-react";
import { UserPersona } from "./types";

export const PersonaCard = ({ title, description, problems, image }: UserPersona) => {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
      {/* Image with overlay gradient */}
      <div className="absolute inset-0">
        <img 
          src={image}
          alt={`${title}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col text-white">
        <h3 className="text-lg xl:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white/90 text-xs xl:text-sm mb-4">
          {description}
        </p>
        <ul className="space-y-2 mt-auto">
          {problems.map((problem, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-xs xl:text-sm">{problem}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


import { CheckCircle2 } from "lucide-react";
import { UserPersona } from "./types";

export const PersonaCard = ({ title, description, problems, image }: UserPersona) => {
  return (
    <div className="relative h-full md:h-[500px] w-full overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow group">
      {/* Image with overlay gradient */}
      <div className="absolute inset-0">
        <img 
          src={image}
          alt={`${title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col text-white">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 font-general-sans">{title}</h3>
          <p className="text-white/80 text-sm">
            {description}
          </p>
        </div>

        <div className="mt-auto">
          <h4 className="text-base font-semibold mb-2 font-general-sans">Key Pain Points</h4>
          <ul className="space-y-2">
            {problems.map((problem, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

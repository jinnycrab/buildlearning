
import { CheckCircle2 } from "lucide-react";
import { UserPersona } from "./types";

export const PersonaCard = ({
  title,
  description,
  problems,
  image
}: UserPersona) => {
  return (
    <div className="relative h-full md:h-[600px] w-full overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow group">
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
      <div className="absolute inset-0 p-8 flex flex-col text-white">
        <div className="mb-2">
          <h3 className="text-2xl font-bold mb-4 font-general-sans">{title}</h3>
          <p className="text-white/80 text-base leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-4 font-general-sans">Benefits</h4>
          <ul className="space-y-3">
            {problems.map((problem, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-base text-white/80">{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

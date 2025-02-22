
import { CheckCircle2 } from "lucide-react";

interface AiToolProps {
  logo: string;
  title: string;
  description: string;
  link: string;
}

export const AiTool = ({
  logo,
  title,
  description,
  link
}: AiToolProps) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative h-[500px] rounded-xl overflow-hidden group block"
    >
      <div className="absolute inset-0 bg-muted/10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[200px] h-[100px] flex items-center justify-center relative z-10">
            <img 
              src={logo} 
              alt={`${title} logo`} 
              className="max-w-full max-h-full object-contain filter brightness-0 invert" 
            />
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 p-6 flex flex-col">
        <div className="mt-[120px]">
          <h4 className="text-xl font-semibold mb-3 text-white font-general-sans">
            {title}
          </h4>
          <p className="text-white/80 text-sm">
            {description}
          </p>
        </div>
        
        <div className="mt-auto">
          <span className="inline-flex items-center text-accent group-hover:text-accent/80 transition-colors text-sm">
            Learn More 
            <svg 
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
};

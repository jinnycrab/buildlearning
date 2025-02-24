
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
      className="relative h-full rounded-xl overflow-hidden group block bg-white shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="absolute inset-0">
        <div className="w-full h-[160px] flex items-center justify-center bg-muted/10">
          <div className="w-[160px] h-[80px] flex items-center justify-center">
            <img 
              src={logo} 
              alt={`${title} logo`} 
              className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105" 
            />
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 p-6 flex flex-col">
        <div className="mt-[120px]">
          <h4 className="text-xl font-bold mb-3 font-general-sans">
            {title}
          </h4>
          <p className="text-muted-foreground text-sm">
            {description}
          </p>
        </div>
        
        <div className="mt-auto">
          <div className="inline-flex items-center text-accent group-hover:text-accent/80 transition-colors text-sm">
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
          </div>
        </div>
      </div>
    </a>
  );
};

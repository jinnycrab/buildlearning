
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
      className="h-full flex flex-col items-center"
    >
      <div className="w-full h-[160px] mb-6 flex items-center justify-center bg-muted/10 rounded-lg">
        <div className="w-[160px] h-[80px] flex items-center justify-center">
          <img 
            src={logo} 
            alt={`${title} logo`} 
            className="max-w-full max-h-full object-contain" 
          />
        </div>
      </div>
      <div className="flex flex-col items-center flex-1 w-full">
        <h4 className="text-xl font-semibold mb-3 text-center h-[56px] flex items-center">
          {title}
        </h4>
        <p className="text-muted-foreground text-center text-sm mb-6 flex-1">
          {description}
        </p>
        <span className="inline-flex items-center text-accent group-hover:text-accent/80 transition-colors mt-auto text-sm">
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
    </a>
  );
};

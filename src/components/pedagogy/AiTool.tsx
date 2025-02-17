
interface AiToolProps {
  logo: string;
  title: string;
  description: string;
  link: string;
}

export const AiTool = ({ logo, title, description, link }: AiToolProps) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center"
    >
      <div className="w-24 h-24 mb-6 flex items-center justify-center">
        <img 
          src={logo} 
          alt={`${title} logo`}
          className="w-full h-full object-contain"
        />
      </div>
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-muted-foreground mb-6 text-center">
        {description}
      </p>
      <span className="mt-auto inline-flex items-center text-accent group-hover:text-accent/80 font-medium transition-colors">
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
    </a>
  );
};

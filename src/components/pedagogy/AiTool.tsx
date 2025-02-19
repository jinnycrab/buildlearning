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
  return <a href={link} target="_blank" rel="noopener noreferrer" className="h-full flex flex-col items-center">
      <div className="aspect-video w-full mb-3 flex items-center justify-center bg-muted/10 rounded-lg">
        <img src={logo} alt={`${title} logo`} className="w-3/4 h-3/4 object-contain" />
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-muted-foreground text-center text-sm mb-3">
        {description}
      </p>
      <span className="inline-flex items-center text-accent group-hover:text-accent/80 transition-colors px-0 py-[14px] font-extralight text-sm">
        Learn More 
        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </a>;
};
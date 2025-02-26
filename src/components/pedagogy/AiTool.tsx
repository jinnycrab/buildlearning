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
  return <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex flex-col h-full">
        <div className="w-full h-[120px] flex items-center justify-center bg-muted/10">
          <div className="w-[140px] h-[70px] flex items-center justify-center">
            <img src={logo} alt={`${title} logo`} className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105" />
          </div>
        </div>
        
        <div className="p-4 flex flex-col items-center justify-center text-center py-[17px] px-[15px] my-[6px] mx-[13px]">
          <h4 className="text-lg font-bold mb-2 font-general-sans">
            {title}
          </h4>
          <p className="text-muted-foreground text-sm mb-4">
            {description}
          </p>
          
          <div className="mt-auto">
            <div className="inline-flex items-center text-accent group-hover:text-accent/80 transition-colors text-sm">
              Learn More 
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>;
};
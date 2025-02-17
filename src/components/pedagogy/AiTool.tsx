
import { LucideIcon } from "lucide-react";

interface AiToolProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export const AiTool = ({ icon, title, description, link }: AiToolProps) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
    >
      {icon}
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-muted-foreground mb-4">
        {description}
      </p>
      <span className="text-accent hover:text-accent/80 text-sm font-medium">
        Learn More →
      </span>
    </a>
  );
};

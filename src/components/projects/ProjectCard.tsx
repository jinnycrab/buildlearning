
import { StudentProject } from "@/types/project";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface ProjectCardProps {
  project: StudentProject;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[1.414/1] bg-white rounded-lg overflow-hidden">
        {imageLoading && (
          <Skeleton className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        {project.posterImage && (
          <img
            src={project.posterImage}
            alt={`${project.title} poster`}
            loading="eager"
            className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setImageLoading(false)}
            onError={(e) => {
              console.error("Image failed to load:", project.posterImage);
              e.currentTarget.src = "/placeholder.svg";
              setImageLoading(false);
            }}
          />
        )}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-center group-hover:text-accent transition-colors">
        {project.title}
      </h3>
    </div>
  );
};

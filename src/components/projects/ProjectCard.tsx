
import { StudentProject } from "@/types/project";

interface ProjectCardProps {
  project: StudentProject;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[1.414/1] bg-white rounded-lg overflow-hidden">
        {project.posterImage && (
          <img
            src={project.posterImage}
            alt={`${project.title} poster`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              console.error("Image failed to load:", project.posterImage);
              e.currentTarget.src = "/placeholder.svg";
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

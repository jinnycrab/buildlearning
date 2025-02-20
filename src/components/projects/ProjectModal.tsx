
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: StudentProject | null;
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="w-full aspect-[1.414/1] relative">
            <img
              src={project.posterImage}
              alt={`${project.title} poster`}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Problem Statement</h3>
              <p className="text-muted-foreground">{project.problemStatement}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Proposed Solution</h3>
              <p className="text-muted-foreground">{project.proposedSolution}</p>
            </div>
            {project.demoLink && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Demo Video</h3>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline inline-flex items-center"
                >
                  Watch Demo Video
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

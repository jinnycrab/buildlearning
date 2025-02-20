
import { useState } from "react";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import { ProjectCard } from "../components/projects/ProjectCard";
import { ProjectModal } from "../components/projects/ProjectModal";
import { StudentProject } from "@/types/project";

const StudentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<StudentProject | null>(null);

  // This is a placeholder array - replace with actual project data once available
  const projects: StudentProject[] = [
    {
      id: 1,
      title: "Project Tai",
      posterImage: "https://raw.githubusercontent.com/jinnycrab/holiday-learn-fun-09/refs/heads/main/images/How%20to%20make%20a%20research%20poster%20A%20guide%20for%20students.jpg?token=GHSAT0AAAAAAC6ZUQEP3BVLCVLDYIVNIBBOZ5XBLMQ", // Replace with actual image path
      problemStatement: "Example problem statement for Project Edge",
      proposedSolution: "Example proposed solution for Project Edge",
      demoLink: "https://example.com/demo",
    },
    // Add more projects here
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center font-general-sans">
            Student Projects
          </h1>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-base">
            Explore our students' innovative posters and engaging demo pitches
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>
      
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
      
      <Footer onCategoryFilter={() => {}} />
    </div>
  );
};

export default StudentProjects;

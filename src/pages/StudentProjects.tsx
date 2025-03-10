import { useState } from "react";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import { ProjectCard } from "../components/projects/ProjectCard";
import { ProjectModal } from "../components/projects/ProjectModal";
import { StudentProject } from "@/types/project";
const StudentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<StudentProject | null>(null);
  const projects: StudentProject[] = [{
    id: 1,
    title: "Project Tai: AI for Education",
    posterImage: "/lovable-uploads/taiposter.png",
    problemStatement: "Teachers are burnt out from marking scripts, and this can create gaps in students learning. How can we leverage AI to reduce teacher fatigue from marking?",
    proposedSolution: "AI assistant with in-built student dashboard and personalized feedback generator",
    demoLink: "Link provided upon request to protect student privacy"
  }, {
    id: 2,
    title: "Project ToyJoy: Tech for Mental Wellness",
    posterImage: "/lovable-uploads/Limiting-2.png",
    problemStatement: "Youths these days have excessive screen time, and this can lead to feelings of isolation and impacts on cognitive development.",
    proposedSolution: "Phygital companion (mobile widget and keychain w digital screen) to nudge students for better screen time habits",
    demoLink: "Link provided upon request to protect student privacy"
  }];

  // Add more detailed console logging for debugging
  console.log("Current window location:", window.location.href);
  console.log("Rendering projects with images:", projects.map(p => ({
    title: p.title,
    image: p.posterImage,
    fullPath: new URL(p.posterImage, window.location.origin).href
  })));
  return <div className="min-h-screen">
      <Navigation />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center font-general-sans md:text-4xl">Student Project Posters</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-12 text-base text-center md:text-lg">Explore our students' research and creative output, generated by using latest AI tools. Demo video links are available on request.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map(project => <ProjectCard key={project.id} project={{
            ...project,
            posterImage: new URL(project.posterImage, window.location.origin).href
          }} onClick={() => setSelectedProject(project)} />)}
          </div>
        </div>
      </section>
      
      <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />
      
      <Footer onCategoryFilter={() => {}} />
    </div>;
};
export default StudentProjects;
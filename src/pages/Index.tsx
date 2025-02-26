import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import WhatWeDo from "../components/home/WhatWeDo";
import WhatYouGet from "../components/home/WhatYouGet";
import { motion } from "framer-motion";
import { aiTools } from "../components/pedagogy/data";
import { userPersonas } from "../components/personas/data";
import { PersonaSection } from "@/components/personas/PersonaSection";
import { AiToolsSection } from "@/components/pedagogy/AiToolsSection";
import { CampsSection } from "@/components/home/CampsSection";
const Index = () => {
  const camps = [{
    id: 1,
    title: "Building for Health & Wellbeing",
    description: "Innovate around mental wellbeing, healthcare accessibility & efficiency, patient and caregiver support and many more",
    duration: "6 weeks",
    capacity: "8 students / class",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    formLink: "https://forms.gle/your-form-link-1"
  }, {
    id: 2,
    title: "Building for Sustainability",
    description: "Innovate solutions to improve environmental sustainability and social responsibility",
    duration: "6 weeks",
    capacity: "8 students / class",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
    formLink: "https://forms.gle/your-form-link-2"
  }, {
    id: 3,
    title: "Building for Youth & Education",
    description: "Innovate for education accessibility, improving student engagement, personalized learning, financial literacy and many more",
    duration: "6 weeks",
    capacity: "8 students / class",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80",
    formLink: "https://forms.gle/your-form-link-3"
  }];
  const handleCategoryFilter = (category: string) => {
    console.log("Filtering by category:", category);
  };
  return <div className="min-h-screen">
      <Navigation />
      <div className="bg-white py-[96px]">
        <Hero />
      </div>
      
      <section className="py-24 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-general-sans md:text-4xl">
            What We Do
          </h2>
          <WhatWeDo />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            <h2 className="font-bold mb-4 text-center text-4xl">Who Is Build For?</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-base">
              A platform to build meaningful projects and portfolios, for all students aged 15+
            </p>
            <PersonaSection personas={userPersonas} />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <WhatYouGet />
      </section>
      
      

      <CampsSection camps={camps} />
      
      <Footer onCategoryFilter={handleCategoryFilter} />
    </div>;
};
export default Index;
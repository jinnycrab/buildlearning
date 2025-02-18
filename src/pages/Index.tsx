
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import RecentArticles from "../components/home/RecentArticles";
import CampList from "../components/camps/CampList";
import BuildPortfolio from "../components/home/BuildPortfolio";
import { motion } from "framer-motion";
import { AiTool } from "../components/pedagogy/AiTool";
import { aiTools } from "../components/pedagogy/data";
import { PersonaCard } from "../components/personas/PersonaCard";
import { userPersonas } from "../components/personas/data";

const Index = () => {
  const camps = [{
    id: 1,
    title: "AI Innovation Camp",
    description: "Learn about artificial intelligence and machine learning",
    duration: "2 weeks",
    capacity: "20 students",
    price: "",
    category: "Technology"
  }, {
    id: 2,
    title: "Web Development Bootcamp",
    description: "Master modern web development technologies",
    duration: "4 weeks",
    capacity: "15 students",
    price: "",
    category: "Programming"
  }, {
    id: 3,
    title: "Digital Marketing Workshop",
    description: "Learn digital marketing strategies and tools",
    duration: "1 week",
    capacity: "25 students",
    price: "",
    category: "Marketing"
  }];

  const handleCategoryFilter = (category: string) => {
    console.log("Filtering by category:", category);
  };

  return <div className="min-h-screen">
      <Navigation />
      {/* Hero - White */}
      <div className="bg-white py-[96px]">
        <Hero />
      </div>
      
      {/* What We Do - Hero color */}
      <section className="py-24 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-general-sans">
            What We Do
          </h2>
          <Features />
        </div>
      </section>

      {/* Who is Build for - White */}
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
            <h2 className="text-4xl font-bold mb-4 text-center">Who is Build for?</h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Discover how Build helps different students achieve their innovation goals
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {userPersonas.map((persona, index) => (
                <motion.div
                  key={persona.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <PersonaCard {...persona} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Build-a-Portfolio - Muted color */}
      <section className="py-24 bg-muted">
        <BuildPortfolio />
      </section>
      
      {/* AI Tools - White */}
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
            <h2 className="text-4xl font-bold mb-4 text-center">AI Tools We Use</h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Cutting-edge AI tools that empower our students to learn, create, and innovate more effectively
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {aiTools.map(tool => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow w-full"
                >
                  <AiTool {...tool} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2025 Camps - Muted color */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-general-sans">
            Our 2025 Camps
          </h2>
          <CampList camps={camps} />
        </div>
      </section>
      
      {/* What Experts Say - White */}
      <section className="py-24 bg-white">
        <RecentArticles />
      </section>
      <Footer onCategoryFilter={handleCategoryFilter} />
    </div>;
};

export default Index;

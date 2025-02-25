
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import { PedagogyHero } from "@/components/pedagogy/PedagogyHero";
import { ProcessSection } from "@/components/pedagogy/ProcessSection";
import { AiToolsSection } from "@/components/pedagogy/AiToolsSection";
import { aiTools } from "@/components/pedagogy/data";

const Process = () => {
  const handleCategoryFilter = (category: string) => {
    console.log("Filtering by category:", category);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PedagogyHero />
      <ProcessSection />
      
      <section id="ai-tools" className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">AI Tools We Use</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-base">
            Thrive in the age of AI with exposure to latest AI tools
          </p>
          <AiToolsSection tools={aiTools} />
        </div>
      </section>

      <Footer onCategoryFilter={handleCategoryFilter} />
    </div>
  );
};

export default Process;


import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

const Process = () => {
  const handleCategoryFilter = (category: string) => {
    console.log("Filtering by category:", category);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Process
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Learn how we help students develop their portfolio through our unique process
          </p>
          <ArrowDownCircle className="w-12 h-12 mx-auto text-accent animate-bounce" />
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/20" />

            {/* Build-a-Portfolio */}
            <motion.div 
              className="relative mb-32"
              {...fadeInUp}
            >
              <div className="flex items-center justify-center mb-8">
                <div className="w-4 h-4 rounded-full bg-accent" />
              </div>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Build-a-Portfolio™</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Your personal branding journey starts here. Create a portfolio that showcases your growth and achievements.
                </p>
                <img 
                  src="/placeholder.svg" 
                  alt="Build a Portfolio"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </motion.div>

            {/* Build-a-Poster */}
            <motion.div 
              className="relative mb-32"
              {...fadeInUp}
            >
              <div className="flex items-center justify-center mb-8">
                <div className="w-4 h-4 rounded-full bg-accent" />
              </div>
              <div className="max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <img 
                      src="/placeholder.svg"
                      alt="Build a Poster"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h2 className="text-4xl font-bold mb-6">Build-a-Poster™</h2>
                    <p className="text-xl text-muted-foreground">
                      Showcase your thought process and creative problem-solving abilities through visually compelling posters.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Build-a-Demo */}
            <motion.div 
              className="relative mb-32"
              {...fadeInUp}
            >
              <div className="flex items-center justify-center mb-8">
                <div className="w-4 h-4 rounded-full bg-accent" />
              </div>
              <div className="max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-4xl font-bold mb-6">Build-a-Demo™</h2>
                    <p className="text-xl text-muted-foreground">
                      Develop your public speaking and storytelling skills while presenting your projects.
                    </p>
                  </div>
                  <div>
                    <img 
                      src="/placeholder.svg"
                      alt="Build a Demo"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* The Build Process */}
            <motion.div 
              className="relative"
              {...fadeInUp}
            >
              <div className="flex items-center justify-center mb-8">
                <div className="w-4 h-4 rounded-full bg-accent" />
              </div>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">The Build Process™</h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Our systematic approach to guide students in developing solutions for real-world problems.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { letter: "B", title: "Brief", description: "Understand the real-world problem" },
                    { letter: "U", title: "Understand", description: "Research and analyze the challenge" },
                    { letter: "I", title: "Innovate", description: "Generate creative solutions" },
                    { letter: "L", title: "Lead", description: "Take ownership and iterate" },
                    { letter: "D", title: "Design", description: "Bring your ideas to life" },
                  ].map((step, index) => (
                    <motion.div
                      key={step.letter}
                      className="bg-card rounded-lg p-6 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                        {step.letter}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer onCategoryFilter={handleCategoryFilter} />
    </div>
  );
};

export default Process;

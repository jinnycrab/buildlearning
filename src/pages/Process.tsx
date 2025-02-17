
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowDownCircle, CheckCircle2, Lightbulb, PenTool, Wrench, Rocket } from "lucide-react";

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
            The Build Process™
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Our systematic approach to guide students in developing solutions for real-world problems
          </p>
          <ArrowDownCircle className="w-12 h-12 mx-auto text-accent animate-bounce" />
        </motion.div>
      </section>

      {/* Brief Section */}
      <section className="py-24 bg-muted">
        <motion.div 
          className="container mx-auto px-4"
          {...fadeInUp}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                B
              </div>
              <h2 className="text-4xl font-bold mb-6">Brief</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Understanding the real-world problem through comprehensive analysis and research.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Analyze problem statements and identify key challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Conduct stakeholder interviews and gather requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Define project scope and objectives</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/placeholder.svg"
                alt="Brief Process"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Understand Section */}
      <section className="py-24">
        <motion.div 
          className="container mx-auto px-4"
          {...fadeInUp}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/placeholder.svg"
                alt="Research Process"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                U
              </div>
              <h2 className="text-4xl font-bold mb-6">Understand</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Deep dive into research and analysis to fully grasp the challenge.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Conduct extensive market and user research</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Analyze existing solutions and their limitations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Create user personas and journey maps</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Innovate Section */}
      <section className="py-24 bg-muted">
        <motion.div 
          className="container mx-auto px-4"
          {...fadeInUp}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                I
              </div>
              <h2 className="text-4xl font-bold mb-6">Innovate</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Generate creative solutions through ideation and innovative thinking.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Brainstorm multiple solution approaches</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Evaluate and prioritize ideas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Develop concept prototypes</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/placeholder.svg"
                alt="Innovation Process"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Lead Section */}
      <section className="py-24">
        <motion.div 
          className="container mx-auto px-4"
          {...fadeInUp}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/placeholder.svg"
                alt="Leadership Process"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                L
              </div>
              <h2 className="text-4xl font-bold mb-6">Lead</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Take ownership of your solution and guide it through iterations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Lead the development of your solution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Gather and incorporate feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Iterate and improve based on testing results</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Design Section */}
      <section className="py-24 bg-muted">
        <motion.div 
          className="container mx-auto px-4"
          {...fadeInUp}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                D
              </div>
              <h2 className="text-4xl font-bold mb-6">Design</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Bring your ideas to life using cutting-edge design tools and methodologies.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Create high-fidelity prototypes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Develop user interfaces and experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Test and validate design solutions</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/placeholder.svg"
                alt="Design Process"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>

          {/* Design Tools Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Design Tools We Use</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <PenTool className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Figma</h4>
                <p className="text-sm text-muted-foreground">UI/UX Design</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Wrench className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Lovable</h4>
                <p className="text-sm text-muted-foreground">AI-Powered Development</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Lightbulb className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Miro</h4>
                <p className="text-sm text-muted-foreground">Collaborative Ideation</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Rocket className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Webflow</h4>
                <p className="text-sm text-muted-foreground">No-Code Development</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer onCategoryFilter={handleCategoryFilter} />
    </div>
  );
};

export default Process;

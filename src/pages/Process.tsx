
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Lightbulb, PenTool, Wrench, Rocket, Library, Search, Share, Presentation } from "lucide-react";
import { Link } from "react-scroll";

const Process = () => {
  const handleCategoryFilter = (category: string) => {
    console.log("Filtering by category:", category);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const processSteps = [
    { name: "Brief", icon: Library },
    { name: "Understand", icon: Search },
    { name: "Innovate", icon: Lightbulb },
    { name: "Lead", icon: Share },
    { name: "Design", icon: PenTool }
  ];

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
          
          {/* Process Step Tags */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {processSteps.map((step) => (
              <Link
                key={step.name}
                to={step.name.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-100}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent rounded-full cursor-pointer hover:bg-accent hover:text-white transition-colors"
              >
                <step.icon className="w-5 h-5" />
                {step.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Brief Section */}
      <section id="brief" className="py-24 bg-muted">
        <motion.div 
          className="container mx-auto px-8"
          {...fadeInUp}
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                B
              </div>
              <h2 className="text-4xl font-bold mb-6">Brief</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Learn more about a real-world problem. 
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Learn the problem's significance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Explore the multi-faceted nature of the problem</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Define project scope, objectives and expectations</span>
                </li>
              </ul>
              
              {/* Tool Section */}
              <div className="bg-white p-6 rounded-xl shadow-md text-center inline-block">
                <Library className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Notion</h4>
                <p className="text-sm text-muted-foreground mb-4">Project Documentation</p>
                <a 
                  href="https://www.notion.so" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 text-sm font-medium"
                >
                  Learn More →
                </a>
              </div>
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
      <section id="understand" className="py-24">
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
                Deep dive into the problem, target audience and existing solutions by conducting research. 
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Create an interview questionnaire</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Create user personas and develop empathy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Analyze limitations and opportunities from existing solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Innovate Section */}
      <section id="innovate" className="py-24 bg-muted">
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
                Generate creative solutions through group-based ideation workshops.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Share your opportunity and research</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Brainstorm solutions and approaches</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Sketch preliminary ideas</span>
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
      <section id="lead" className="py-24">
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
                Take ownership of your solution and prototype it with AI.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Refine & iterate preliminary ideas into MVP</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Consider positioning and marketing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Create Build-a-Poster(TM) and Build-a-Demo(TM) content</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Design Section */}
      <section id="design" className="py-24 bg-muted">
        <motion.div 
          className="container mx-auto px-8"
          {...fadeInUp}
        >
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                D
              </div>
              <h2 className="text-4xl font-bold mb-6">Design</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our in-house designers will polish your visual concepts and bring them to life 
              </p>
              <ul className="space-y-4 mb-8">
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
                  <span>Prepare for sharing and wrap-up</span>
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
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Design Tools We Use</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <a 
                href="https://www.figma.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <PenTool className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Figma</h4>
                <p className="text-sm text-muted-foreground">UI/UX Design</p>
              </a>
              <a 
                href="https://www.lovable.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <Wrench className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Lovable</h4>
                <p className="text-sm text-muted-foreground">AI-Powered Development</p>
              </a>
              <a 
                href="https://miro.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <Lightbulb className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Miro</h4>
                <p className="text-sm text-muted-foreground">Collaborative Ideation</p>
              </a>
              <a 
                href="https://webflow.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <Rocket className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Webflow</h4>
                <p className="text-sm text-muted-foreground">No-Code Development</p>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer onCategoryFilter={handleCategoryFilter} />
    </div>
  );
};

export default Process;

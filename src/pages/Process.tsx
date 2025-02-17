
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
    <div className="min-h-screen bg-[#F2FCE2]">
      <Navigation />
      
      {/* Build-a-Portfolio Section */}
      <section className="py-24 bg-gradient-to-b from-[#F2FCE2] to-white">
        <motion.div 
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Build-a-Portfolio™
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            Your personal branding, story, supported with curated projects that show personal growth.
          </p>
          <ArrowDownCircle className="w-12 h-12 mx-auto text-accent animate-bounce" />
        </motion.div>
      </section>

      {/* Build-a-Poster Section */}
      <section className="py-24 bg-[#F2FCE2]">
        <motion.div 
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          {...fadeInUp}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Build-a-Poster™
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Showcases your thought process, understanding and creative problem solving for a specific project.
              </p>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Build-a-Poster example"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <video
                className="rounded-lg shadow-xl w-full"
                controls
                poster="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
              >
                <source src="/path-to-your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Build-a-Demo Section */}
      <section className="py-24 bg-[#D3E4FD]">
        <motion.div 
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          {...fadeInUp}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Build-a-Demo™
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Showcases your personality, public speaking and storytelling skills for a specific project.
              </p>
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                alt="Build-a-Demo example"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:order-1">
              <video
                className="rounded-lg shadow-xl w-full"
                controls
                poster="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              >
                <source src="/path-to-your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
      </section>

      {/* The Build Process Section */}
      <section className="py-24 bg-white">
        <motion.div 
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          {...fadeInUp}
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            The Build Process™
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We use The Build Process™ to guide students as they develop solutions for real-world problems in 3-month intervals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                letter: "B",
                step: "1",
                title: "Brief",
                description: "Students are introduced to a real-world problem or industry issue",
                color: "bg-[#F97316]"
              },
              {
                letter: "U",
                step: "2",
                title: "Understand",
                description: "Students conduct research to learn more about the problem",
                color: "bg-[#60A5FA]"
              },
              {
                letter: "I",
                step: "3",
                title: "Innovate",
                description: "Students brainstorm solutions with innovation tools and ideation workshops",
                color: "bg-[#A3E635]"
              },
              {
                letter: "L",
                step: "4",
                title: "Lead",
                description: "Students take the lead to iterate, refine and pitch their ideas",
                color: "bg-[#FBBF24]"
              },
              {
                letter: "D",
                step: "5",
                title: "Design",
                description: "Using AI tools and with support from in-house designers, concepts are visualized and brought to life",
                color: "bg-[#C084FC]"
              }
            ].map((step, index) => (
              <motion.div
                key={step.letter}
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4`}>
                  {step.letter}
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-400">{step.step}.</span>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer onCategoryFilter={handleCategoryFilter} />
    </div>
  );
};

export default Process;

import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { Linkedin, Lightbulb, Target, Rocket } from "lucide-react";

const About = () => {
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.5
    }
  };

  return <div className="min-h-screen bg-secondary flex flex-col">
      <Navigation />

      <main className="flex-grow">        
        {/* Our Vision Section */}
        <motion.section className="container py-20 bg-white" initial="initial" animate="animate" variants={fadeInUp}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  Our Vision
                </span>
              </div>
              <h2 className="text-3xl font-bold font-general-sans">Reimagining Education Today for Tomorrow's Leaders</h2>
              
              <div className="grid gap-6">
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Beyond Grades</h3>
                    <p className="text-muted-foreground">Students defined by creative output and innovative solutions, not just grades.</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Lightbulb className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Self-Initiated Learning</h3>
                    <p className="text-muted-foreground">Knowledge cultivated through curiosity and exploration, not memorization.</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Rocket className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Future-Ready Skills</h3>
                    <p className="text-muted-foreground">Equipped with AI literacy, design thinking, and storytelling capabilities.</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <img src="https://raw.githubusercontent.com/jinnycrab/holiday-learn-fun/refs/heads/main/images/studentlearning.jpg" alt="Students collaborating" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </motion.section> 

        {/* Why We Started Build Section */}
        <motion.section className="container py-20" initial="initial" animate="animate" variants={fadeInUp}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl font-bold font-general-sans">
                Why We Built Build
              </h2>
              
              <div className="space-y-6">
                <motion.div 
                  className="bg-accent/5 p-6 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-semibold mb-2 text-lg">From the Classroom</h3>
                  <p className="text-muted-foreground">We observed students becoming increasingly disengaged and stressed with traditional education.</p>
                </motion.div>

                <motion.div 
                  className="bg-accent/5 p-6 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-semibold mb-2 text-lg">From the Industry</h3>
                  <p className="text-muted-foreground">We noticed a growing gap between academic skills and future-ready capabilities needed in the workforce.</p>
                </motion.div>

                <motion.div 
                  className="bg-accent/5 p-6 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-semibold mb-2 text-lg">From the World</h3>
                  <p className="text-muted-foreground">Universities and employers are shifting towards holistic assessments, looking beyond academic achievements.</p>
                </motion.div>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <img src="https://raw.githubusercontent.com/jinnycrab/holiday-learn-fun/main/images/stanford%20ideation.jpeg" alt="Brainstorm at Stanford" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </motion.section>
        
        {/* Our Founders Section */}
        <motion.section className="py-20 bg-accent/10" initial="initial" animate="animate" variants={fadeInUp}>
          <div className="container">
            <div className="text-center mb-12">
              <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
                Our Founders
              </span>
              <h2 className="text-3xl font-bold mt-4 mb-6 font-general-sans">
                A Merger of Two Worlds
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the founders behind Build who are passionate about
                reimagining education with their experience in innovation and Silicon Valley. 
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Founder 1 */}
              <motion.div className="space-y-4" whileHover={{
              y: -5
            }} transition={{
              duration: 0.3
            }}>
                <div className="relative group">
                  <div className="relative h-[300px] overflow-hidden rounded-2xl">
                    <img src="https://raw.githubusercontent.com/jinnycrab/holiday-learn-fun/refs/heads/main/images/Jynew.jpeg" alt="Founder 1" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <a href="https://www.linkedin.com/in/jinyichua/" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-accent hover:text-white transition-colors duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-xl font-semibold font-general-sans">
                  Jin Yi Chua
                </h3>
                <p className="text-muted-foreground">
                  Jin Yi has worked at the intersection of innovation and
                  strategy since he graduated Valedictorian and Gold Medalist at
                  Nanyang Technological University. He leads research and
                  innovation projects at Samsung’s regional incubator, and
                  previously consulted for Fortune 500 companies like Google,
                  ByteDance, Unilever. He has also taught at LASALLE School of
                  the Arts and Macau University.
                </p>
              </motion.div>

              {/* Founder 2 */}
              <motion.div className="space-y-4" whileHover={{
              y: -5
            }} transition={{
              duration: 0.3
            }}>
                <div className="relative group">
                  <div className="relative h-[300px] overflow-hidden rounded-2xl">
                    <img src="https://raw.githubusercontent.com/jinnycrab/holiday-learn-fun/refs/heads/main/images/Ashnew.jpeg" alt="Founder 2" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <a href="https://www.linkedin.com/in/shi-han-ang?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-accent hover:text-white transition-colors duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-xl font-semibold font-general-sans">
                  Ash Ang
                </h3>
                <p className="text-muted-foreground">
                  Ash is an education specialist in EdTech innovation. He
                  graduated from Stanford University Graduate School of
                  Business’ Ignite Executive Program and with a MS in Learning
                  Design and Technology from the Graduate School of Education.
                  Formerly a Singaporean educator, government scholar, and an
                  AI Mentor at Stanford Accelerator for Learning, Ash brings
                  his experience in instructional design to Build.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer onCategoryFilter={() => {}} />
    </div>;
};
export default About;

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
          <div className="space-y-12">
            <div>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                Our Vision
              </span>
              <h2 className="text-3xl font-bold font-general-sans mt-4">Reimagining Education Today for Tomorrow's Leaders</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div className="bg-accent/5 p-6 rounded-xl h-full flex flex-col" whileHover={{
              scale: 1.02
            }} transition={{
              duration: 0.2
            }}>
                <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold mb-3 text-lg">A Life Beyond Grades</h3>
                <p className="text-muted-foreground flex-grow">We envision a world students are defined not by grades, but by their contributions to the world.</p>
              </motion.div>

              <motion.div className="bg-accent/5 p-6 rounded-xl h-full flex flex-col" whileHover={{
              scale: 1.02
            }} transition={{
              duration: 0.2
            }}>
                <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold mb-3 text-lg">Self-Initiated Learning</h3>
                <p className="text-muted-foreground flex-grow">We envision a world students conduct self-directed learning because they find meaning in the subject.</p>
              </motion.div>

              <motion.div className="bg-accent/5 p-6 rounded-xl h-full flex flex-col" whileHover={{
              scale: 1.02
            }} transition={{
              duration: 0.2
            }}>
                <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                  <Rocket className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold mb-3 text-lg">Future-Ready Skills</h3>
                <p className="text-muted-foreground flex-grow">We envision a world students thrive in volatility and disruption, equipped with relevant hard and soft skills.</p>
              </motion.div>
            </div>

            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <img src="https://raw.githubusercontent.com/jinnycrab/holiday-learn-fun/refs/heads/main/images/studentlearning.jpg" alt="Students collaborating" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </motion.section> 

        {/* Our Story Section */}
        <motion.section className="container py-20" initial="initial" animate="animate" variants={fadeInUp}>
          <div className="space-y-12">
            <div>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                Our Story
              </span>
              <h2 className="text-3xl font-bold font-general-sans mt-4">We Heard Your Struggles</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div className="bg-accent/5 p-6 rounded-xl h-full" whileHover={{
              scale: 1.02
            }} transition={{
              duration: 0.2
            }}>
                <h3 className="font-semibold mb-2 text-lg">Disengaged and Stressed Students</h3>
                <p className="text-muted-foreground">As educators, we know that many students recognise the stakes on making to their desired University course. Yet, under the stress of preparing for these one-off major examinations, many have lost the joy and engagement of learning.</p>
              </motion.div>

              <motion.div className="bg-accent/5 p-6 rounded-xl h-full" whileHover={{
              scale: 1.02
            }} transition={{
              duration: 0.2
            }}>
                <h3 className="font-semibold mb-2 text-lg">Anxious and Conflicted Parents</h3>
                <p className="text-muted-foreground">In our conversations with parents, we observed that many feel conflicted about their children's education. They know what is at stakes for college admission, yet want their children to enjoy learning and their teenage years.</p>
              </motion.div>

              <motion.div className="bg-accent/5 p-6 rounded-xl h-full" whileHover={{
              scale: 1.02
            }} transition={{
              duration: 0.2
            }}>
                <h3 className="font-semibold mb-2 text-lg">Frustrated Employers and Industry</h3>
                <p className="text-muted-foreground">In boardrooms, we often hear how employers find students "book smart" and "unprepared" for the working world. In fact, the World Economic Forum classified reading, writing and mathematics as "out-of-focus" skills compared to AI, technological literacy and creative problem solving.</p>
              </motion.div>
            </div>

            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <img src="https://raw.githubusercontent.com/jinnycrab/holiday-learn-fun/main/images/stanford%20ideation.jpeg" alt="Brainstorm at Stanford" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
            </div>

            {/* New Subsection */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold font-general-sans mb-8">Why We Built Singapore's 1st Student Incubator</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div className="bg-accent/5 p-6 rounded-xl h-full" whileHover={{
                scale: 1.02
              }} transition={{
                duration: 0.2
              }}>
                  <h3 className="font-semibold mb-2 text-lg">Rise of Holistic Assessments</h3>
                  <p className="text-muted-foreground">Did you know there's a global shift towards holistic assessments - where colleges look beyond grades? Today, 95% of US colleges use holistic reviews and up to 50% of all Singapore college admissions will be based on aptitude than grades / test scores. </p>
                </motion.div>

                <motion.div className="bg-accent/5 p-6 rounded-xl h-full" whileHover={{
                scale: 1.02
              }} transition={{
                duration: 0.2
              }}>
                  <h3 className="font-semibold mb-2 text-lg">Relieving Stress for Parents and Students</h3>
                  <p className="text-muted-foreground">Because of the global shift towards holistic assessments, portfolios and passion projects are no longer a 'waste of time'. In fact, they can really elevate your chances at that scholarship or your dream program - resolving student stress and parents' conflict.</p>
                </motion.div>

                <motion.div className="bg-accent/5 p-6 rounded-xl h-full" whileHover={{
                scale: 1.02
              }} transition={{
                duration: 0.2
              }}>
                  <h3 className="font-semibold mb-2 text-lg">Joyful Learning of Employable Skills</h3>
                  <p className="text-muted-foreground">Our pedagogy was designed thoughtfully around the World Economic Forum's "Core Skills of 2030". More than 200 hours was spent thinking how we can nurture skills like AI, technological literacy, creative problem solving in a fun, engaging and meaningful way.
                </p>
                </motion.div>
              </div>
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
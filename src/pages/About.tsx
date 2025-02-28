import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { Linkedin, Lightbulb, Target, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../components/ui/carousel";
import { useIsMobile } from "../hooks/use-mobile";
const About = () => {
  const isMobile = useIsMobile();
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
        {/* Our Founders Section - Moved to the top */}
        <motion.section className="py-20 bg-accent/10" initial="initial" animate="animate" variants={fadeInUp}>
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-bold mt-4 mb-6 font-general-sans text-4xl">Our Trainers</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our trainers are passionate about reimagining education with their experience in innovation, strategy, and Silicon Valley.</p>
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
                  innovation projects at Samsung's regional incubator, and
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
                  Business' Ignite Executive Program and with a MS in Learning
                  Design and Technology from the Graduate School of Education.
                  Formerly a Singaporean educator, government scholar, and an
                  AI Mentor at Stanford Accelerator for Learning, Ash brings
                  his experience in instructional design to Build.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Our Story Section - Moved after founders */}
        <motion.section className="container py-20" initial="initial" animate="animate" variants={fadeInUp}>
          <div className="space-y-12">
            <div>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium text-center">
                Our Story
              </span>
              <h2 className="font-bold font-general-sans mt-4 text-left text-4xl">We Heard All of You</h2>
            </div>
            
            {/* Card section with image backgrounds - desktop version */}
            {!isMobile && <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <motion.div className="relative h-[350px] overflow-hidden rounded-xl" whileHover={{
              scale: 1.02
            }} transition={{
              duration: 0.2
            }}>
                  <img src="https://www.suss.edu.sg/images/default-source/blog/suss-blog_mental-health-752x368px.tmb-752_368.jpg?Culture=en&sfvrsn=9fea80cd_3auto=format&fit=crop&q=80" alt="Students studying" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="font-semibold mb-2 text-lg text-white">Disengaged and Stressed Students</h3>
                    <p className="text-white/90 text-sm">As educators, we know that many students understand the stakes for national exams and entering University. But this has often led to stress and disengaged learning.
                </p>
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div className="relative h-[350px] overflow-hidden rounded-xl" whileHover={{
              scale: 1.02
            }} transition={{
              duration: 0.2
            }}>
                  <img src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&q=80" alt="Parents supervising students" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="font-semibold mb-2 text-lg text-white">Anxious and Conflicted Parents</h3>
                    <p className="text-white/90 text-sm">We know all parents want the best for their child. While they want their child to enjoy learning, many worry about exams and feel conflicted about how much they should do.
                </p>
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div className="relative h-[350px] overflow-hidden rounded-xl" whileHover={{
              scale: 1.02
            }} transition={{
              duration: 0.2
            }}>
                  <img src="https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&q=80" alt="Job interview" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="font-semibold mb-2 text-lg text-white">Frustrated Employers and Industry</h3>
                    <p className="text-white/90 text-sm">In boardrooms, we have heard countless times how students today are "book smart" but lack the necessary skills to navigate today's disruptive corporate world.
                </p>
                  </div>
                </motion.div>
              </div>}

            {/* Mobile Carousel version */}
            {isMobile && <Carousel className="w-full mb-8">
                <CarouselContent>
                  {/* Card 1 */}
                  <CarouselItem className="pl-4 basis-[85%] min-w-0">
                    <motion.div className="relative h-[400px] overflow-hidden rounded-xl" initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.6
                }}>
                      <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80" alt="Students studying" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80"></div>
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <h3 className="font-semibold mb-2 text-lg text-white">Disengaged and Stressed Students</h3>
                        <p className="text-white/90">As educators, we know that many students understand the stakes for national exams and entering University. But this has often led to stress and disengaged learning.</p>
                      </div>
                    </motion.div>
                  </CarouselItem>

                  {/* Card 2 */}
                  <CarouselItem className="pl-4 basis-[85%] min-w-0">
                    <motion.div className="relative h-[400px] overflow-hidden rounded-xl" initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.6
                }}>
                      <img src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&q=80" alt="Parents supervising students" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80"></div>
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <h3 className="font-semibold mb-2 text-lg text-white">Anxious and Conflicted Parents</h3>
                        <p className="text-white/90">We know all parents want the best for their child. While they want their child to enjoy learning, many worry about exams and feel conflicted about how much they should do.</p>
                      </div>
                    </motion.div>
                  </CarouselItem>

                  {/* Card 3 */}
                  <CarouselItem className="pl-4 basis-[85%] min-w-0">
                    <motion.div className="relative h-[400px] overflow-hidden rounded-xl" initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.6
                }}>
                      <img src="https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&q=80" alt="Job interview" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80"></div>
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <h3 className="font-semibold mb-2 text-lg text-white">Frustrated Employers and Industry</h3>
                        <p className="text-white/90">In boardrooms, we have heard countless times how students today are "book smart" but lack the necessary skills to navigate today's disruptive corporate world.</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>}
          </div>
        </motion.section>

        {/* Why We Built Section */}
        <motion.section className="container py-20 bg-white" initial="initial" animate="animate" variants={fadeInUp}>
          <div className="space-y-12">
            <div>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                Our Solution
              </span>
              <h2 className="font-bold font-general-sans mt-4 text-4xl">Introducing Singapore's 1st Student Incubator</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div className="bg-accent/5 p-6 rounded-xl h-full" whileHover={{
              scale: 1.02
            }} transition={{
              duration: 0.2
            }}>
                <h3 className="font-semibold mb-2 text-lg">Rise of Holistic Assessments</h3>
                <p className="text-muted-foreground">Did you know there's a global shift towards holistic assessments - where colleges look beyond grades? Today, 95% of US colleges use holistic reviews and up to 50% of all Singapore college admissions will be based on aptitude than grades / test scores. </p>
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

            {/* Image from Stanford moved to this section */}
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <img src="https://raw.githubusercontent.com/jinnycrab/holiday-learn-fun/main/images/stanford%20ideation.jpeg" alt="Brainstorm at Stanford" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="flex justify-center mt-8">
              <Link to="/resources#ideation-tools">
                <Button variant="default" className="text-white font-medium px-6 py-2">
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        </motion.section>
        
        {/* Our Vision Section - Moved to last */}
        <motion.section className="container py-20 bg-secondary" initial="initial" animate="animate" variants={fadeInUp}>
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
      </main>

      <Footer onCategoryFilter={() => {}} />
    </div>;
};
export default About;
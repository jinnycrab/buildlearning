
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const BuildPortfolio = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-bold mb-6 font-general-sans md:text-4xl text-4xl">
          What You Get
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base">
          Every project portfolio will culminate in a poster of your creative output and a video of you presenting your idea
        </p>
      </motion.div>

      <div className="mb-12">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {/* Build-a-Solution Card */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-xl overflow-hidden group"
              >
                <img
                  src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2000&auto=format&fit=crop"
                  alt="Build a Solution Example"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
                <div className="relative h-full p-6 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 font-general-sans text-white">Build-a-Solution™</h3>
                    <p className="text-white/80 text-sm">
                      Design innovative solutions to real-world problems using design thinking and AI-powered tools
                    </p>
                  </div>

                  <div className="mt-auto space-y-4">
                    <div>
                      <h4 className="text-base font-semibold mb-2 font-general-sans text-white">Key Features</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white/80">Problem identification</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white/80">Design thinking process</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white/80">Prototype development</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base font-semibold mb-2 font-general-sans text-white">Core Skills</h4>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs">Problem Solving</span>
                        <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs">Design Thinking</span>
                        <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs">Innovation</span>
                        <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs">Critical Thinking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </CarouselItem>

            {/* Build-a-Demo Card */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-xl overflow-hidden group"
              >
                <img
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Build a Demo Example"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
                <div className="relative h-full p-6 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 font-general-sans text-white">Build-a-Demo™</h3>
                    <p className="text-white/80 text-sm">
                      Create a 2-min demo video or pitch that showcases your storytelling and public speaking skills
                    </p>
                  </div>

                  <div className="mt-auto space-y-4">
                    <div>
                      <h4 className="text-base font-semibold mb-2 font-general-sans text-white">Key Features</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white/80">Designing interactive prototypes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white/80">Develop marketing & positioning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white/80">Practice & refine presentation</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base font-semibold mb-2 font-general-sans text-white">Core Skills</h4>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs">Public Speaking</span>
                        <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs">Marketing</span>
                        <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs">AI Prompt Engineering</span>
                        <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs">Elevator Pitch</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </CarouselItem>

            {/* Build-a-Poster Card */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-xl overflow-hidden group"
              >
                <img
                  src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Build a Poster Example"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
                <div className="relative h-full p-6 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 font-general-sans text-white">Build-a-Poster™</h3>
                    <p className="text-white/80 text-sm">
                      Create visually compelling posters that showcase your high-render concept and your research-to-innovation process
                    </p>
                  </div>

                  <div className="mt-auto space-y-4">
                    <div>
                      <h4 className="text-base font-semibold mb-2 font-general-sans text-white">Key Features</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white/80">User & competitor research</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white/80">Opportunity identification</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white/80">Hero prototype/concept image</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base font-semibold mb-2 font-general-sans text-white">Core Skills</h4>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs">Research</span>
                        <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs">AI Prompt Engineering</span>
                        <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs">AI Prototyping Tools</span>
                        <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs">Creative Innovation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/projects"
            className="w-full sm:w-auto min-w-[200px] px-6 py-3 bg-accent/10 text-accent rounded-full font-medium hover:bg-accent/20 transition-colors text-center"
          >
            View Student Projects
          </Link>
          <Link
            to="/process"
            className="w-full sm:w-auto min-w-[200px] px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors text-center"
          >
            Our Pedagogy
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default BuildPortfolio;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const BuildPortfolio = () => {
  const isMobile = useIsMobile();

  const renderCard = (title: string, description: string, features: string[], skills: string[], image: string, index: number) => {
    const content = (
      <div className="relative h-full rounded-xl overflow-hidden group">
        <img src={image} alt={`${title} Example`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
        <div className="relative h-full p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2 font-general-sans text-white">{title}</h3>
            <p className="text-white/80 text-sm">
              {description}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-base font-semibold mb-3 font-general-sans text-white">Key Features</h4>
              <ul className="space-y-2">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-3 font-general-sans text-white">Core Skills</h4>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill, idx) => (
                  <span key={idx} className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    if (isMobile) {
      return (
        <CarouselItem key={title} className="basis-[85%]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="h-[70vh]"
          >
            {content}
          </motion.div>
        </CarouselItem>
      );
    }

    return (
      <motion.div
        key={title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="h-[500px]"
      >
        {content}
      </motion.div>
    );
  };

  const cards = [{
    title: "Build-a-Concept™",
    description: "Develop innovation concepts / prototypes using design thinking and AI-powered tools",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2000&auto=format&fit=crop",
    features: ["Problem identification", "Proposition building", "Prototype development with AI"],
    skills: ["AI Prototyping Tools", "Creative Innovation", "Design Thinking", "Empathy and User-Centricity"]
  }, {
    title: "Build-a-Demo™",
    description: "Create a 2-min demo video or pitch that showcases your concept and storytelling skills",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Designing interactive prototypes", "Develop marketing & positioning", "Practice & refine presentation"],
    skills: ["Storytelling", "Marketing", "Public Speaking", "Elevator Pitch"]
  }, {
    title: "Build-a-Poster™",
    description: "Create visually compelling posters that showcase your high-render concept and your research-to-innovation process",
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["User & competitor research", "Opportunity identification", "Hero prototype/concept image"],
    skills: ["Research", "Writing", "Elevator Pitch", "Poster Design"]
  }];

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

      {isMobile ? (
        <div className="mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {cards.map((card, index) =>
                renderCard(card.title, card.description, card.features, card.skills, card.image, index)
              )}
            </CarouselContent>
          </Carousel>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, index) =>
            renderCard(card.title, card.description, card.features, card.skills, card.image, index)
          )}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/projects" className="w-full sm:w-auto min-w-[200px] px-6 py-3 bg-accent/10 text-accent rounded-full font-medium hover:bg-accent/20 transition-colors text-center">
            View Student Projects
          </Link>
          <Link to="/process" className="w-full sm:w-auto min-w-[200px] px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors text-center">
            Our Pedagogy
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default BuildPortfolio;

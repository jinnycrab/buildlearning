
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { userPersonas } from "../personas/data";

const WhoIsBuildFor = () => {
  const isMobile = useIsMobile();

  const renderCard = (title: string, description: string, features: string[], image: string, index: number) => {
    const content = (
      <div className="relative h-full rounded-xl overflow-hidden group">
        <img 
          src={image} 
          alt={`${title}`} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
        <div className="relative h-full p-6 flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 font-general-sans text-white">{title}</h3>
            <p className="text-white/80 text-sm">
              {description}
            </p>
          </div>

          <div className="mt-auto">
            <h4 className="text-base font-semibold mb-2 font-general-sans text-white">Benefits</h4>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
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

  const cards = userPersonas.map(persona => ({
    title: persona.title,
    description: persona.description,
    features: persona.problems,
    image: persona.image
  }));

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
          Who Is Build For?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base">
          A platform to build meaningful projects and portfolios, for all students aged 15+
        </p>
      </motion.div>

      {isMobile ? (
        <div className="mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {cards.map((card, index) => renderCard(card.title, card.description, card.features, card.image, index))}
            </CarouselContent>
          </Carousel>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, index) => renderCard(card.title, card.description, card.features, card.image, index))}
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

export default WhoIsBuildFor;

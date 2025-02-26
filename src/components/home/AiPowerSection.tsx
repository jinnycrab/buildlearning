
import { motion } from "framer-motion";

const AiPowerSection = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 text-center font-general-sans md:text-4xl">
          See The Power of AI
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-base">
          Watch how our students leverage AI tools to bring their innovative ideas to life, 
          transforming concepts into impactful solutions.
        </p>
        
        {/* Video container with 16:9 aspect ratio */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <div className="relative pb-[56.25%] h-0">
            {/* Replace VIDEO_ID with your actual YouTube video ID */}
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="See The Power of AI"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AiPowerSection;

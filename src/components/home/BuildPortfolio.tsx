
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const BuildPortfolio = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-general-sans">What You Get</h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Every project portfolio will culminate in a poster of your creative output and a video of you presenting your idea
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Poster */}
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative h-64">
            <AspectRatio ratio={16 / 9} className="h-full">
              <img
                src="https://raw.githubusercontent.com/jinnycrab/holiday-learn-fun/main/images/poster.png"
                alt="Project Poster"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 font-general-sans">Project Poster</h3>
            <p className="text-base md:text-lg text-muted-foreground">A visual representation of your project, highlighting key features and outcomes.</p>
          </div>
        </motion.div>

        {/* Video */}
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative h-64">
            <AspectRatio ratio={16 / 9} className="h-full">
              <img
                src="https://raw.githubusercontent.com/jinnycrab/holiday-learn-fun/main/images/video.png"
                alt="Project Video"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 font-general-sans">Project Video</h3>
            <p className="text-base md:text-lg text-muted-foreground">A dynamic presentation of your project, showcasing your process and results.</p>
          </div>
        </motion.div>

        {/* Portfolio */}
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative h-64">
            <AspectRatio ratio={16 / 9} className="h-full">
              <img
                src="https://raw.githubusercontent.com/jinnycrab/holiday-learn-fun/main/images/portfolio.png"
                alt="Project Portfolio"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 font-general-sans">Project Portfolio</h3>
            <p className="text-base md:text-lg text-muted-foreground">A comprehensive collection of your projects, demonstrating your skills and experience.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BuildPortfolio;

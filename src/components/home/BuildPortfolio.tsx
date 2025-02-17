
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BuildPortfolio = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-general-sans">
            Build-a-Portfolio™
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stand out from the crowd with your creative output and innovative solutions, while showcasing your thought process and personality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 font-general-sans">Build-a-Poster™</h3>
            <p className="text-muted-foreground mb-6">
              Transform your ideas into visually compelling posters that showcase your thought process and problem-solving abilities.
            </p>
            <img
              src="/placeholder.svg"
              alt="Build a Poster Example"
              className="w-full h-48 object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 font-general-sans">Build-a-Demo™</h3>
            <p className="text-muted-foreground mb-6">
              Develop your presentation skills and learn to effectively communicate your ideas to any audience.
            </p>
            <img
              src="/placeholder.svg"
              alt="Build a Demo Example"
              className="w-full h-48 object-cover rounded-lg"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/process"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors"
          >
            Our Methodology
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildPortfolio;

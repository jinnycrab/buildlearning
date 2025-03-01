
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const PedagogyHero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold mb-6">Our B.U.I.L.D. Process</h1>
          <p className="text-xl text-muted-foreground mb-10">
            Our proprietary B.U.I.L.D. method provides students with a structured
            framework to develop innovative solutions to real-world problems
          </p>
          <Link
            to="process-section"
            spy={true}
            smooth={true}
            duration={500}
            className="bg-accent text-white px-8 py-3 rounded-md font-medium hover:bg-accent/90 transition-colors inline-block cursor-pointer"
          >
            Explore Our Process
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

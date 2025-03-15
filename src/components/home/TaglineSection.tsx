
import React from 'react';
import { motion } from 'framer-motion';

const TaglineSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto border border-gray-200 rounded-3xl p-8 bg-primary text-white"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-codec mb-6 tracking-tight text-center">
            Innovate. Build. Learn.
          </h2>
          <p className="text-xl font-inter text-primary-foreground/80 text-center">
            Join us on a journey of innovation and discovery.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TaglineSection;

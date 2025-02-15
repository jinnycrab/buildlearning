
import React, { useState } from 'react';
import { Sparkles, Code, Users } from "lucide-react";

const termData = [
  {
    id: 1,
    term: "Real world problems",
    description: "Develop innovative solutions for carefully curated real-world problems",
    icon: Sparkles,
  },
  {
    id: 2,
    term: "Build your student portfolio",
    description: "Showcase your potential through your projects and innovative solutions",
    icon: Code,
  },
  {
    id: 3,
    term: "Learn AI tools with industry experts",
    description: "Experiment with a range of AI tools from research to prototyping as you innovate",
    icon: Users,
  },
];

const Features = () => {
  const [hoveredTermId, setHoveredTermId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredTermId(id);
  };

  const handleMouseLeave = () => {
    setHoveredTermId(null);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {termData.map((term) => (
        <div
          key={term.id}
          className={`bg-white rounded-2xl p-6 text-center transition-colors duration-200 ${
            hoveredTermId === term.id ? "bg-accent/20" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(term.id)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <term.icon className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-xl font-semibold mb-2 font-general-sans">{term.term}</h3>
          {hoveredTermId === term.id && (
            <p className="text-muted-foreground">{term.description}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default Features;


import React from 'react';
import AnimatedCircle from './AnimatedCircle';
import AnimatedTagline from './AnimatedTagline';

const TaglineSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative h-[300px] md:h-[400px] flex flex-col items-center justify-center">
        <div className="relative">
          {/* SVG Circle Animation */}
          <AnimatedCircle />

          {/* Main content */}
          <AnimatedTagline text="Build Something Today!" />
        </div>
      </div>
    </section>
  );
};

export default TaglineSection;

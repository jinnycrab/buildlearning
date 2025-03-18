
import React, { ReactNode } from 'react';

interface BorderedSectionProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
}

const BorderedSection: React.FC<BorderedSectionProps> = ({ 
  children, 
  className = '', 
  backgroundColor = 'white' 
}) => {
  return (
    <div className={`border border-[#ffffff] rounded-3xl p-8 ${className}`} style={{ backgroundColor }}>
      {children}
    </div>
  );
};

export default BorderedSection;

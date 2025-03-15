
import React, { ReactNode } from 'react';

interface BorderedSectionProps {
  children: ReactNode;
  className?: string;
}

const BorderedSection: React.FC<BorderedSectionProps> = ({ children, className = '' }) => {
  return (
    <div className={`border border-gray-200 rounded-3xl p-8 bg-white ${className}`}>
      {children}
    </div>
  );
};

export default BorderedSection;

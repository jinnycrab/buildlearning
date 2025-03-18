
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
  // Handle background color - either use the direct string or apply as a tailwind class
  const bgColorClass = backgroundColor.startsWith('bg-') 
    ? backgroundColor 
    : `bg-[${backgroundColor}]`;

  return (
    <div className={`border border-[#e5e7eb] rounded-3xl shadow-sm ${backgroundColor === 'white' ? 'bg-white' : bgColorClass} ${className}`}>
      {children}
    </div>
  );
};

export default BorderedSection;

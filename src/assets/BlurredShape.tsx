
import React from 'react';
import { cn } from '@/lib/utils';

interface BlurredShapeProps {
  className?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

const BlurredShape: React.FC<BlurredShapeProps> = ({ 
  className, 
  color = "bg-blue-300/20 dark:bg-blue-600/10", 
  size = "md" 
}) => {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
  };
  
  return (
    <div 
      className={cn(
        "rounded-full filter-blur absolute -z-10",
        "animate-pulse-slow mix-blend-normal",
        sizeClasses[size],
        color,
        className
      )}
      aria-hidden="true"
    />
  );
};

export default BlurredShape;

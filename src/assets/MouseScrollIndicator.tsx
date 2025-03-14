
import React from 'react';

const MouseScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center mt-16 animate-fade-in" style={{ animationDelay: '1.2s' }}>
      <div className="w-5 h-8 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-1 transition-colors duration-300">
        <div className="w-1 h-2 bg-muted-foreground/70 rounded-full animate-scroll-down transition-colors duration-300"></div>
      </div>
      <span className="text-xs font-medium text-muted-foreground/70 mt-2 transition-colors duration-300">Scroll</span>
    </div>
  );
};

export default MouseScrollIndicator;

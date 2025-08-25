import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-1 bg-transparent z-[9999]"
      style={{
        background: `linear-gradient(90deg, 
          #6366f1 0%,
          #8b5cf6 25%,
          #06b6d4 50%,
          #10b981 75%,
          #f59e0b 100%
        )`,
        width: `${scrollProgress}%`,
        boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
        transition: 'width 0.1s ease'
      }}
    />
  );
};

export default ScrollProgress;
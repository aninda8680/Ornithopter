import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail
      setTrail(prev => [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...prev.slice(0, 20)
      ]);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('button, a, [role="button"], .interactive');
      setIsHovering(isInteractive);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 mix-blend-difference">
      {/* Trail particles */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (20 - index) / 20,
            transform: `scale(${(20 - index) / 20})`,
            transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div
        className={`absolute w-8 h-8 border-2 border-white rounded-full transition-all duration-150 ease-out ${
          isHovering ? 'scale-150 bg-white/20' : 'scale-100'
        }`}
        style={{
          left: position.x - 16,
          top: position.y - 16,
          boxShadow: isHovering 
            ? '0 0 20px rgba(255, 255, 255, 0.8)' 
            : '0 0 10px rgba(255, 255, 255, 0.4)',
        }}
      />
      
      {/* Inner dot */}
      <div
        className="absolute w-2 h-2 bg-white rounded-full"
        style={{
          left: position.x - 4,
          top: position.y - 4,
        }}
      />
    </div>
  );
};

export default CustomCursor;
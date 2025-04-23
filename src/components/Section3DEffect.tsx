
import React, { useRef, useState } from "react";

interface Section3DEffectProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section3DEffect({
  children,
  className = "",
}: Section3DEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glowing, setGlowing] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Max rotation angle
    const max = 16;
    const rotateY = ((x - centerX) / centerX) * max;
    const rotateX = ((centerY - y) / centerY) * max;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`);
    setGlowing(true);
  };

  const handleMouseLeave = () => {
    setTransform("");
    setGlowing(false);
  };

  return (
    <div
      ref={containerRef}
      className={`transition-all duration-300 will-change-transform relative ${className}`}
      style={{
        transform,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Add subtle border glow effect when hovered */}
      <div 
        className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none ${glowing ? 'opacity-100' : 'opacity-0'}`}
        style={{
          boxShadow: "0 0 25px 5px rgba(255,255,255,0.2)",
          zIndex: -1
        }}
      />
      {children}
    </div>
  );
}

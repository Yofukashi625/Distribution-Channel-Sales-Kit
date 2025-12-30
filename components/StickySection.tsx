import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface StickySectionProps {
  children: React.ReactNode;
  width?: string; // e.g., "300vw"
  className?: string;
  background?: string;
}

const StickySection: React.FC<StickySectionProps> = ({ 
  children, 
  width = "200vw", 
  className = "",
  background = "bg-white"
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", `-${parseInt(width) - 100}vw`]);

  return (
    <div ref={targetRef} className={`relative h-[500vh] ${background}`}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className={`flex gap-10 px-10 ${className}`} 
           initial={{ x: 0 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default StickySection;
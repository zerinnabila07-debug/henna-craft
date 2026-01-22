'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollReveal({ 
  children, 
  delay = 0,
  duration = 0.8,
  direction = 'up',
  className = ''
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "-100px"
  });

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        x: 0
      } : {}}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

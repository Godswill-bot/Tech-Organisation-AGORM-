'use client';

import { motion } from 'framer-motion';

interface AnimatedCharacterProps {
  delay?: number;
  x?: number;
  y?: number;
}

export function AnimatedCharacter1({ delay = 0, x = 0, y = 0 }: AnimatedCharacterProps) {
  return (
    <motion.svg
      width="200"
      height="240"
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, -20, 0], opacity: 1 }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: delay,
        ease: 'easeInOut',
      }}
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      {/* Head */}
      <circle cx="100" cy="50" r="35" fill="#FFD4B4" />
      
      {/* Eyes */}
      <circle cx="90" cy="45" r="5" fill="#333" />
      <circle cx="110" cy="45" r="5" fill="#333" />
      
      {/* Smile */}
      <path d="M 90 55 Q 100 62 110 55" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
      
      {/* Hair */}
      <ellipse cx="100" cy="20" rx="38" ry="25" fill="#8B6F47" />
      
      {/* Body */}
      <path d="M 75 85 Q 75 85 75 140 L 75 160 Q 75 170 85 170 L 115 170 Q 125 170 125 160 L 125 140 Q 125 85 125 85 Z" fill="#4A90E2" />
      
      {/* Arms */}
      <ellipse cx="55" cy="110" rx="15" ry="35" fill="#FFD4B4" />
      <ellipse cx="145" cy="110" rx="15" ry="35" fill="#FFD4B4" />
      
      {/* Pants */}
      <rect x="75" y="140" width="20" height="30" fill="#333" />
      <rect x="105" y="140" width="20" height="30" fill="#333" />
      
      {/* Shoes */}
      <ellipse cx="85" cy="175" rx="12" ry="8" fill="#000" />
      <ellipse cx="115" cy="175" rx="12" ry="8" fill="#000" />
    </motion.svg>
  );
}

export function AnimatedCharacter2({ delay = 0, x = 0, y = 0 }: AnimatedCharacterProps) {
  return (
    <motion.svg
      width="200"
      height="240"
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, -15, 0], opacity: 1 }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        delay: delay,
        ease: 'easeInOut',
      }}
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      {/* Head */}
      <circle cx="100" cy="50" r="35" fill="#FFD4B4" />
      
      {/* Eyes */}
      <circle cx="90" cy="45" r="5" fill="#333" />
      <circle cx="110" cy="45" r="5" fill="#333" />
      
      {/* Smile */}
      <path d="M 90 55 Q 100 62 110 55" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
      
      {/* Hair */}
      <ellipse cx="100" cy="20" rx="38" ry="25" fill="#D4A574" />
      
      {/* Body */}
      <path d="M 75 85 Q 75 85 75 140 L 75 160 Q 75 170 85 170 L 115 170 Q 125 170 125 160 L 125 140 Q 125 85 125 85 Z" fill="#E74C3C" />
      
      {/* Arms */}
      <ellipse cx="55" cy="110" rx="15" ry="35" fill="#FFD4B4" />
      <ellipse cx="145" cy="110" rx="15" ry="35" fill="#FFD4B4" />
      
      {/* Pants */}
      <rect x="75" y="140" width="20" height="30" fill="#2C3E50" />
      <rect x="105" y="140" width="20" height="30" fill="#2C3E50" />
      
      {/* Shoes */}
      <ellipse cx="85" cy="175" rx="12" ry="8" fill="#000" />
      <ellipse cx="115" cy="175" rx="12" ry="8" fill="#000" />
    </motion.svg>
  );
}

export function AnimatedCharacter3({ delay = 0, x = 0, y = 0 }: AnimatedCharacterProps) {
  return (
    <motion.svg
      width="200"
      height="240"
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, -25, 0], opacity: 1 }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: 'easeInOut',
      }}
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      {/* Head */}
      <circle cx="100" cy="50" r="35" fill="#FFD4B4" />
      
      {/* Eyes */}
      <circle cx="90" cy="45" r="5" fill="#333" />
      <circle cx="110" cy="45" r="5" fill="#333" />
      
      {/* Smile */}
      <path d="M 90 55 Q 100 62 110 55" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
      
      {/* Hair */}
      <ellipse cx="100" cy="20" rx="38" ry="25" fill="#000" />
      
      {/* Body */}
      <path d="M 75 85 Q 75 85 75 140 L 75 160 Q 75 170 85 170 L 115 170 Q 125 170 125 160 L 125 140 Q 125 85 125 85 Z" fill="#27AE60" />
      
      {/* Arms */}
      <ellipse cx="55" cy="110" rx="15" ry="35" fill="#FFD4B4" />
      <ellipse cx="145" cy="110" rx="15" ry="35" fill="#FFD4B4" />
      
      {/* Pants */}
      <rect x="75" y="140" width="20" height="30" fill="#1C2833" />
      <rect x="105" y="140" width="20" height="30" fill="#1C2833" />
      
      {/* Shoes */}
      <ellipse cx="85" cy="175" rx="12" ry="8" fill="#000" />
      <ellipse cx="115" cy="175" rx="12" ry="8" fill="#000" />
    </motion.svg>
  );
}

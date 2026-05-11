"use client";

import { motion } from "framer-motion";

export function CartoonCharacter1({ style }: { style?: React.CSSProperties }) {
  return (
    <motion.svg
      width="120"
      height="140"
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      style={style}
      className="drop-shadow-lg"
    >
      {/* Head */}
      <circle cx="60" cy="40" r="22" fill="#D4A574" />
      {/* Hair */}
      <ellipse cx="60" cy="18" rx="25" ry="15" fill="#8B6F47" />
      {/* Eyes */}
      <circle cx="52" cy="38" r="3" fill="#000" />
      <circle cx="68" cy="38" r="3" fill="#000" />
      {/* Smile */}
      <path d="M 54 46 Q 60 50 66 46" stroke="#8B4513" strokeWidth="2" fill="none" />
      {/* Body */}
      <rect x="45" y="62" width="30" height="35" rx="8" fill="#A0826D" />
      {/* Arms */}
      <rect x="20" y="70" width="25" height="12" rx="6" fill="#D4A574" transform="rotate(-20 20 76)" />
      <rect x="75" y="70" width="25" height="12" rx="6" fill="#D4A574" transform="rotate(20 100 76)" />
      {/* Legs */}
      <rect x="50" y="97" width="8" height="25" fill="#6B5344" />
      <rect x="62" y="97" width="8" height="25" fill="#6B5344" />
    </motion.svg>
  );
}

export function CartoonCharacter2({ style }: { style?: React.CSSProperties }) {
  return (
    <motion.svg
      width="120"
      height="140"
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, 15, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      style={style}
      className="drop-shadow-lg"
    >
      {/* Head */}
      <circle cx="60" cy="40" r="22" fill="#C7A88B" />
      {/* Hair */}
      <path d="M 35 32 Q 60 10 85 32" fill="#7D5D3A" />
      {/* Eyes */}
      <circle cx="52" cy="38" r="3" fill="#000" />
      <circle cx="68" cy="38" r="3" fill="#000" />
      {/* Mouth */}
      <ellipse cx="60" cy="48" rx="5" ry="4" fill="#A0684D" />
      {/* Body */}
      <rect x="42" y="62" width="36" height="38" rx="10" fill="#B8956A" />
      {/* Arms */}
      <circle cx="25" cy="78" r="12" fill="#C7A88B" />
      <circle cx="95" cy="78" r="12" fill="#C7A88B" />
      {/* Legs */}
      <rect x="48" y="100" width="10" height="28" fill="#5D4037" />
      <rect x="62" y="100" width="10" height="28" fill="#5D4037" />
    </motion.svg>
  );
}

export function CartoonCharacter3({ style }: { style?: React.CSSProperties }) {
  return (
    <motion.svg
      width="120"
      height="140"
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      style={style}
      className="drop-shadow-lg"
    >
      {/* Head */}
      <circle cx="60" cy="40" r="20" fill="#D4B5A0" />
      {/* Hair - longer curly style */}
      <path d="M 40 30 Q 35 15 60 12 Q 85 15 80 30" fill="#9B7653" />
      {/* Eyes */}
      <circle cx="53" cy="39" r="3.5" fill="#000" />
      <circle cx="67" cy="39" r="3.5" fill="#000" />
      {/* Smile with teeth */}
      <path d="M 55 47 L 65 47" stroke="#8B6F47" strokeWidth="2" />
      {/* Body - dress style */}
      <path d="M 45 60 L 40 100 L 80 100 L 75 60 Z" fill="#9B7653" />
      {/* Arms */}
      <rect x="15" y="70" width="30" height="11" rx="5.5" fill="#D4B5A0" transform="rotate(-25 15 75.5)" />
      <rect x="75" y="70" width="30" height="11" rx="5.5" fill="#D4B5A0" transform="rotate(25 105 75.5)" />
      {/* Shoes */}
      <ellipse cx="48" cy="108" rx="8" ry="6" fill="#5D4037" />
      <ellipse cx="72" cy="108" rx="8" ry="6" fill="#5D4037" />
    </motion.svg>
  );
}

export function CartoonCharacter4({ style }: { style?: React.CSSProperties }) {
  return (
    <motion.svg
      width="120"
      height="140"
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      style={style}
      className="drop-shadow-lg"
    >
      {/* Head */}
      <circle cx="60" cy="38" r="20" fill="#D4A574" />
      {/* Hair - spiky */}
      <polygon points="60,12 65,18 75,12 72,25 85,20 75,28 80,40 60,32 40,40 45,28 35,20 48,25 45,12" fill="#6B5344" />
      {/* Eyes */}
      <circle cx="52" cy="36" r="3" fill="#000" />
      <circle cx="68" cy="36" r="3" fill="#000" />
      {/* Nose */}
      <path d="M 60 42 L 58 46 L 62 46 Z" fill="#A0826D" />
      {/* Big smile */}
      <path d="M 54 48 Q 60 52 66 48" stroke="#8B4513" strokeWidth="2" fill="none" />
      {/* Body - shirt */}
      <rect x="44" y="58" width="32" height="40" rx="8" fill="#A08B6E" />
      {/* Arms */}
      <ellipse cx="22" cy="75" rx="15" ry="10" fill="#D4A574" transform="rotate(-30 22 75)" />
      <ellipse cx="98" cy="75" rx="15" ry="10" fill="#D4A574" transform="rotate(30 98 75)" />
      {/* Legs */}
      <rect x="50" y="98" width="8" height="26" fill="#6B5344" />
      <rect x="62" y="98" width="8" height="26" fill="#6B5344" />
    </motion.svg>
  );
}

export function DanglingCharacters() {
  const characters = [
    { Component: CartoonCharacter1, left: "5%", delay: 0 },
    { Component: CartoonCharacter2, right: "8%", delay: 2 },
    { Component: CartoonCharacter3, left: "15%", bottom: "20%", delay: 1 },
    { Component: CartoonCharacter4, right: "12%", bottom: "15%", delay: 2.5 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {characters.map((char, idx) => (
        <div
          key={idx}
          className="absolute"
          style={{
            left: char.left,
            right: char.right,
            bottom: char.bottom || "auto",
            top: char.bottom ? "auto" : "10%",
            opacity: 0.15,
            zIndex: 0,
          }}
        >
          <char.Component />
        </div>
      ))}
    </div>
  );
}

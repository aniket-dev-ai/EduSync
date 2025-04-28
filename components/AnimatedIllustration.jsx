"use client";

import { BookOpenCheck, BrainCircuit, ScrollText } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const AnimatedIllustration = () => {
  // Memoized random nodes (stable after first render)
  const nodes = React.useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 70 + 15}%`,
        left: `${Math.random() * 70 + 15}%`,
        delay: i * 0.4,
      })),
    []
  );

  return (
    <div className="relative w-full h-[400px] md:h-[500px] my-8 overflow-hidden">
      {/* Pulsating Brain Glow */}
      <div
        className="absolute top-1/2 left-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/30 animate-pulse-glow blur-2xl transform -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />

      {/* Random Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-3 h-3 bg-accent rounded-full transform"
          style={{ top: node.top, left: node.left }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: node.delay, duration: 0.6 }}
          aria-hidden="true"
        />
      ))}

      {/* Connecting SVG Paths */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        viewBox="0 0 600 400"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <path
          d="M100,100 Q200,50 300,200 T500,100"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M120,250 Q220,150 350,250 T520,150"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M150,150 Q250,250 350,150 T550,250"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Floating Icon - Book */}
      <motion.div
        className="absolute top-[25%] right-[20%] p-3 rounded-xl bg-black/20 backdrop-blur-md transform"
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        aria-hidden="true"
      >
        <BookOpenCheck className="w-8 h-8 text-primary" />
      </motion.div>

      {/* Floating Icon - Scroll */}
      <motion.div
        className="absolute bottom-[30%] left-[20%] p-3 rounded-xl bg-black/20 backdrop-blur-md transform"
        initial={{ y: 10 }}
        animate={{ y: -10 }}
        transition={{ repeat: Infinity, duration: 2.5, repeatType: "reverse" }}
        aria-hidden="true"
      >
        <ScrollText className="w-8 h-8 text-accent" />
      </motion.div>
    </div>
  );
};

export default AnimatedIllustration;


"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TypingAnimationProps = {
  text: string;
  className?: string;
};

export function TypingAnimation({ text, className }: TypingAnimationProps) {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.h1
      className={cn("load-screen--message", className)}
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => {
        return (
          <motion.span key={char + "-" + index} variants={letter}>
            {char}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}

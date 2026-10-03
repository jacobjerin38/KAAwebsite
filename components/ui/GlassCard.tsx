"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "cyan" | "none";
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  glowColor = "none",
  hover = true,
}: GlassCardProps) {
  const glowMap = {
    blue: "hover:shadow-[0_0_0_1px_rgba(59,130,246,0.3),0_0_30px_rgba(59,130,246,0.15)]",
    purple: "hover:shadow-[0_0_0_1px_rgba(139,92,246,0.3),0_0_30px_rgba(139,92,246,0.15)]",
    cyan: "hover:shadow-[0_0_0_1px_rgba(6,182,212,0.3),0_0_30px_rgba(6,182,212,0.15)]",
    none: "",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        glass rounded-2xl
        shadow-[0_4px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]
        transition-all duration-300
        ${hover ? glowMap[glowColor] : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

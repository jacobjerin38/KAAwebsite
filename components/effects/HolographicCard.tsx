"use client";
import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: number;
  disabled?: boolean;
}

export default function HolographicCard({
  children,
  className = "",
  glowColor = "213, 138, 155",
  intensity = 1,
  disabled = false,
}: HolographicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxTilt = 8 * intensity;
    setRotateY(((x - centerX) / centerX) * maxTilt);
    setRotateX((-(y - centerY) / centerY) * maxTilt);
    setGlowX((x / rect.width) * 100);
    setGlowY((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowX(50);
    setGlowY(50);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`holo-card relative ${className}`}
      style={{
        transform: rotateX || rotateY ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : undefined,
        transition: "transform 0.15s ease-out",
      }}
    >
      {/* Inner glow that follows cursor */}
      <div
        className="absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(${glowColor}, 0.12) 0%, transparent 60%)`,
        }}
      />

      {/* Rainbow refraction stripe */}
      <div
        className="absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-30 transition-opacity duration-700 pointer-events-none z-0"
        style={{
          background: `linear-gradient(105deg, transparent 40%, rgba(${glowColor}, 0.06) 45%, rgba(183, 110, 130, 0.06) 50%, rgba(118, 36, 60, 0.06) 55%, transparent 60%)`,
          transform: `translateX(${(glowX - 50) * 0.3}%)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

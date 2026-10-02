"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
  color?: string;
  active?: boolean;
  interval?: number;
}

export default function GlitchText({
  children,
  className = "",
  color = "#D58A9B",
  active = true,
  interval = 5000,
}: GlitchTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const [glitching, setGlitching] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const glitchEndTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!active || prefersReducedMotion) return;

    const triggerGlitch = () => {
      setGlitching(true);
      glitchEndTimeoutRef.current = setTimeout(() => setGlitching(false), 200);
      timeoutRef.current = setTimeout(
        triggerGlitch,
        interval + Math.random() * 3000
      );
    };

    timeoutRef.current = setTimeout(triggerGlitch, 2000 + Math.random() * 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (glitchEndTimeoutRef.current) clearTimeout(glitchEndTimeoutRef.current);
    };
  }, [active, interval, prefersReducedMotion]);

  return (
    <span
      className={`relative inline-block ${className}`}
      style={{ color }}
    >
      <span className="relative z-10">{children}</span>

      {glitching && (
        <>
          <span
            className="absolute inset-0 z-20"
            style={{
              color: "#C56D82",
              animation: "glitch-1 0.2s linear",
              opacity: 0.8,
            }}
            aria-hidden="true"
          >
            {children}
          </span>
          <span
            className="absolute inset-0 z-20"
            style={{
              color: "#B76E82",
              animation: "glitch-2 0.2s linear",
              opacity: 0.8,
            }}
            aria-hidden="true"
          >
            {children}
          </span>
        </>
      )}
    </span>
  );
}

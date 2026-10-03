"use client";
import { ReactNode } from "react";

interface NeonBorderProps {
  children: ReactNode;
  className?: string;
  borderRadius?: string;
  speed?: string;
}

export default function NeonBorder({
  children,
  className = "",
  borderRadius = "24px",
}: NeonBorderProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ borderRadius }}
    >
      {/* Animated conic gradient border */}
      <div
        className="absolute -inset-[1px] rounded-[inherit] animate-border-rotate opacity-60"
        style={{
          background: `conic-gradient(from var(--border-angle, 0deg), transparent 25%, #00F5FF 50%, #8B5CF6 75%, transparent 100%)`,
          borderRadius: "inherit",
        }}
      />

      {/* Inner content with background to mask the gradient */}
      <div
        className="relative rounded-[inherit]"
        style={{
          background: "linear-gradient(135deg, rgba(10, 10, 26, 0.95) 0%, rgba(17, 17, 40, 0.9) 100%)",
          borderRadius: "inherit",
        }}
      >
        {children}
      </div>
    </div>
  );
}

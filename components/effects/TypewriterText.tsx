"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  cursor?: boolean;
}

export default function TypewriterText({
  texts,
  className = "",
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
  cursor = true,
}: TypewriterTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tick = useCallback(() => {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      if (charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else {
        pauseTimeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      if (charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [charIndex, isDeleting, textIndex, texts, pauseTime]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timeout = setTimeout(tick, isDeleting ? deleteSpeed : speed);
    return () => {
      clearTimeout(timeout);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [tick, isDeleting, deleteSpeed, speed, prefersReducedMotion]);

  return (
    <span className={`font-mono ${className}`}>
      {prefersReducedMotion ? texts[0] : displayText}
      {cursor && !prefersReducedMotion && (
        <span
          className="inline-block w-[2px] h-[1em] ml-1 align-middle animate-blink-caret"
          style={{
            backgroundColor: "#D58A9B",
            boxShadow: "0 0 8px #D58A9B",
          }}
        />
      )}
    </span>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const finalConfidence = 16;

export function ProfileConfidenceProgress() {
  const progressRef = useRef<HTMLDivElement>(null);
  const timerRefs = useRef<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = progressRef.current;

    if (!node || hasAnimated) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      timerRefs.current = [
        window.setTimeout(() => {
          setProgress(finalConfidence);
          setHasAnimated(true);
        }, 0)
      ];

      return () => {
        timerRefs.current.forEach((timerId) => window.clearTimeout(timerId));
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setHasAnimated(true);
        setProgress(24);

        timerRefs.current = [
          window.setTimeout(() => setProgress(11), 760),
          window.setTimeout(() => setProgress(finalConfidence), 1280)
        ];

        observer.disconnect();
      },
      { threshold: 0.55 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      timerRefs.current.forEach((timerId) => window.clearTimeout(timerId));
    };
  }, [hasAnimated]);

  return (
    <div
      aria-label="Profile confidence low, sixteen percent complete"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={finalConfidence}
      className="relative h-4 overflow-hidden rounded-full border border-[#c2d4e2] bg-[#dce8f1]"
      ref={progressRef}
      role="progressbar"
    >
      <div
        className="relative h-full rounded-full bg-[#4f89d8] transition-[width] duration-700 ease-out"
        style={{ width: `${progress}%` }}
      >
        <span className="absolute right-0 top-1/2 size-4 -translate-y-1/2 translate-x-1/2 rounded-full border border-white/70 bg-[#4f89d8] shadow-[0_0_0_4px_rgba(79,137,216,0.16)]" />
      </div>
    </div>
  );
}

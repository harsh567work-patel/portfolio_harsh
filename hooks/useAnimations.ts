"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, useScroll, useTransform, motionValue } from "framer-motion";

/**
 * Hook for scroll reveal animations
 * Returns animation controls and ref to attach to element
 */
export function useScrollReveal() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls };
}

/**
 * Hook for parallax scroll effect
 */
export function useParallax(offset = 50) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, offset]);

  return { ref, y };
}

/**
 * Hook for mouse follower effect
 */
export function useMouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
}

/**
 * Hook for scroll progress indicator
 */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
}

/**
 * Hook for magnetic button effect
 */
export function useMagneticButton(strength = 0.3) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const { left, top, width, height } = (
      ref.current as HTMLElement
    ).getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;

    setPosition({
      x: distX * strength,
      y: distY * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return {
    ref,
    x: position.x,
    y: position.y,
    handleMouseMove,
    handleMouseLeave,
  };
}

/**
 * Hook for animated counter
 */
export function useAnimatedCounter(
  end: number,
  duration: number = 2,
  start: number = 0
) {
  const [count, setCount] = useState(start);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      setCount(Math.floor(start + (end - start) * progress));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, end, duration, start]);

  return { ref, count };
}

/**
 * Hook for detecting if element is in viewport
 */
export function useIsInViewport() {
  const ref = useRef(null);
  const { inView } = useInView({
    threshold: 0.2,
  });

  return { ref, inView };
}

"use client";

import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export default function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  direction = 'up'
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold, hasAnimated]);

  const getTransformStyle = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    
    switch (direction) {
      case 'up':
        return 'translate3d(0, 60px, 0)';
      case 'down':
        return 'translate3d(0, -60px, 0)';
      case 'left':
        return 'translate3d(60px, 0, 0)';
      case 'right':
        return 'translate3d(-60px, 0, 0)';
      case 'fade':
        return 'translate3d(0, 30px, 0)';
      default:
        return 'translate3d(0, 60px, 0)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: getTransformStyle(),
        opacity: isVisible ? 1 : 0,
        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
}

// Predefined animation variants for common use cases
export const SlideUp = ({ children, className, delay }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <ScrollAnimation direction="up" className={className} delay={delay}>
    {children}
  </ScrollAnimation>
);

export const SlideDown = ({ children, className, delay }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <ScrollAnimation direction="down" className={className} delay={delay}>
    {children}
  </ScrollAnimation>
);

export const SlideLeft = ({ children, className, delay }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <ScrollAnimation direction="left" className={className} delay={delay}>
    {children}
  </ScrollAnimation>
);

export const SlideRight = ({ children, className, delay }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <ScrollAnimation direction="right" className={className} delay={delay}>
    {children}
  </ScrollAnimation>
);

export const FadeIn = ({ children, className, delay }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <ScrollAnimation direction="fade" className={className} delay={delay}>
    {children}
  </ScrollAnimation>
); 
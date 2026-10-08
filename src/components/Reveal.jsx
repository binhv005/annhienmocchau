import React, { useEffect, useRef, useState } from 'react';

/**
 * Reusable Reveal component for high-performance scroll animations.
 * Uses IntersectionObserver so it triggers only once when entering viewport.
 * Hardware-accelerated with translate3d and opacity for 60fps smoothness.
 */
export default function Reveal({
  children,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'zoom' | 'none'
  delay = 0, // delay in seconds (e.g. 0.1, 0.2)
  duration = 0.8, // duration in seconds
  distance = 32, // distance in px
  threshold = 0.12,
  className = '',
  style = {}
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Trigger only once to prevent re-triggering & jank
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -40px 0px' // Slightly before element hits bottom of screen
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0) scale(1)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0) scale(1)`;
      case 'left':
        return `translate3d(-${distance}px, 0, 0) scale(1)`;
      case 'right':
        return `translate3d(${distance}px, 0, 0) scale(1)`;
      case 'zoom':
        return 'translate3d(0, 20px, 0) scale(0.92)';
      case 'none':
      default:
        return 'translate3d(0, 0, 0) scale(1)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}s`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', // Smooth easeOutExpo
        transitionDelay: `${delay}s`,
        willChange: isVisible ? 'auto' : 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}

'use client';
import { useRef, useEffect, useState } from 'react';

interface Props {
  value: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function CountUp({ value, duration = 1500, className, style }: Props) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || started.current) return;

    // Only animate if value contains a number >= 10
    const match = value.match(/^([^0-9]*)(\d+)(.*)$/);
    if (!match || parseInt(match[2]) < 10) return;

    const prefix = match[1];
    const target = parseInt(match[2]);
    const suffix = match[3];

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setDisplay(`${prefix}0${suffix}`);

          const startTime = Date.now();
          const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const current = Math.round(eased * target);
            setDisplay(`${prefix}${current}${suffix}`);
            if (progress >= 1) {
              clearInterval(interval);
              setDisplay(value);
            }
          }, 16);

          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

type StatCounterProps = {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
};

export function StatCounter({
  value,
  decimals = 0,
  suffix = '',
  label,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-12% 0px' });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    let start: number | null = null;
    let raf = 0;
    const duration = 1150;

    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      setDisplay(value * easeOutCubic(p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value]);

  const text =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toString();

  return (
    <div ref={ref} className="min-w-[6.5rem] text-center md:min-w-[7.5rem]">
      <p className="text-3xl font-bold tabular-nums tracking-[-0.03em] text-buildrix-ivory sm:text-4xl md:text-5xl">
        {text}
        {suffix}
      </p>
      <p className="text-metadata mt-2 text-buildrix-steel">{label}</p>
    </div>
  );
}

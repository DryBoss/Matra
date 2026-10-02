"use client";

import { useEffect, useState } from "react";

/**
 * Decorative banner that crossfades between illustrations, picking a
 * different random one every few seconds. Starts on the first image on the
 * server (so there is no hydration mismatch), then switches to a random
 * start after mount. Does not rotate if the visitor prefers reduced motion.
 */
export default function RotatingBanner({
  images,
  intervalMs = 3500,
  className = "",
}: {
  images: string[];
  intervalMs?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  useEffect(() => {
    if (count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setIndex(Math.floor(Math.random() * count));
    const id = window.setInterval(() => {
      setIndex((current) => {
        let next = Math.floor(Math.random() * count);
        if (next === current) next = (next + 1) % count;
        return next;
      });
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [count, intervalMs]);

  return (
    <div aria-hidden className={`relative overflow-hidden ${className}`}>
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 motion-reduce:transition-none ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
}

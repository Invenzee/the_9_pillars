"use client";

import { useEffect, useRef } from "react";

type BgVideoProps = {
  src: string;
  poster: string;
  priority?: boolean;
};

export function BgVideo({ src, poster, priority = false }: BgVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const play = () => {
      if (motion.matches) {
        video.pause();
        return;
      }
      video.play().catch(() => {});
    };

    let observer: IntersectionObserver | undefined;

    if (priority) {
      play();
    } else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          video.preload = "auto";
          play();
          observer?.disconnect();
        },
        { rootMargin: "240px 0px" },
      );
      observer.observe(video);
    }

    motion.addEventListener("change", play);
    return () => {
      motion.removeEventListener("change", play);
      observer?.disconnect();
    };
  }, [priority]);

  return (
    <video
      ref={ref}
      className="h-full w-full object-cover"
      autoPlay={priority}
      muted
      loop
      playsInline
      poster={poster}
      preload={priority ? "auto" : "none"}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

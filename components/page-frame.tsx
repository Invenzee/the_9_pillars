"use client";

import { useEffect, useRef } from "react";

const corner =
  "pointer-events-none absolute size-(--corner) max-w-none";

export function PageFrame() {
  const ref = useRef<HTMLDivElement>(null);
  const sidesRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const frame = ref.current;
    const sides = sidesRef.current;
    if (!frame || !sides) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const view = window.innerHeight;
      const remaining = document.documentElement.scrollHeight - (window.scrollY + view);
      const lead = Math.min(view * 0.18, Math.max(remaining, 0));
      const drawnTo = view - lead;

      const box = sides.getBoundingClientRect();
      const hidden = Math.min(Math.max(box.bottom - drawnTo, 0), box.height);
      frame.style.setProperty("--hide", `${hidden}px`);
      frame.classList.toggle("is-complete", hidden <= 1);
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="group pointer-events-none absolute inset-x-(--frame-x) top-(--frame-top) [bottom:100px] z-[60]"
      aria-hidden="true"
    >
      <img
        ref={sidesRef}
        className="absolute top-[calc(var(--corner)*1.31)] bottom-[calc(var(--corner)*1.31)] left-[0.5%] h-[calc(100%-var(--corner)*2.62)] w-[99%] max-w-none [clip-path:inset(0_0_var(--hide,100%)_0)] transition-[clip-path] duration-[250ms] ease-linear motion-reduce:[clip-path:none]"
        src="/images/frame-body.svg"
        alt=""
      />
      <img
        className="absolute top-[calc(var(--corner)*0.137)] left-[calc(var(--corner)*0.94)] h-[clamp(3px,0.3vw,4px)] w-[calc(100%-var(--corner)*1.88)] max-w-none animate-draw"
        src="/images/frame-top.svg"
        alt=""
      />
      <img
        className="absolute bottom-[calc(var(--corner)*0.137)] left-[calc(var(--corner)*0.94)] h-[clamp(3px,0.3vw,4px)] w-[calc(100%-var(--corner)*1.88)] max-w-none scale-x-0 transition-transform duration-1000 ease-in-out group-[.is-complete]:scale-x-100 motion-reduce:scale-x-100"
        src="/images/frame-bottom.svg"
        alt=""
      />
      <img
        className={`${corner} top-0 left-0 animate-corner`}
        src="/images/frame-tl.svg"
        alt=""
        width={168}
        height={168}
      />
      <img
        className={`${corner} top-0 right-0 animate-corner`}
        src="/images/frame-tr.svg"
        alt=""
        width={168}
        height={168}
      />
      <img
        className={`${corner} bottom-0 left-0 origin-bottom-left scale-[0.85] opacity-0 transition-[opacity,transform] duration-700 group-[.is-complete]:scale-100 group-[.is-complete]:opacity-100 motion-reduce:scale-100 motion-reduce:opacity-100`}
        src="/images/frame-bl.svg"
        alt=""
        width={168}
        height={168}
      />
      <img
        className={`${corner} right-0 bottom-0 origin-bottom-right scale-[0.85] opacity-0 transition-[opacity,transform] duration-700 group-[.is-complete]:scale-100 group-[.is-complete]:opacity-100 motion-reduce:scale-100 motion-reduce:opacity-100`}
        src="/images/frame-br.svg"
        alt=""
        width={168}
        height={168}
      />
    </div>
  );
}

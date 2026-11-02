"use client";

import { useState } from "react";
import { BgVideo } from "@/components/bg-video";
import { Reveal } from "@/components/reveal";

const people = [
  {
    src: "/images/avatar-center.png",
    name: "A Reader",
    detail: "Reader",
    quote:
      "For anyone who struggles with depression and wonders if God cares, this book answers with the power of God and His love for the whole person.",
  },
  {
    src: "/images/avatar-left.png",
    name: "Marcus Hale",
    detail: "Reader, systematic theology",
    quote:
      "The pillars name the weight honestly, then set Christ, the church, and the word back under my feet. It did not rush the grief.",
  },
  {
    src: "/images/avatar-right.png",
    name: "Elena Voss",
    detail: "Pastor and reader",
    quote:
      "I have sat with people in depression for years. This is the book I wanted: theology that cares for body, mind, and spirit together.",
  },
  {
    src: "/images/avatar-dot-left.png",
    name: "Jonah Reed",
    detail: "Small group leader",
    quote:
      "We read it aloud. It is plain enough for a Tuesday night, and deep enough to show that God’s ways are better than ours.",
  },
  {
    src: "/images/avatar-dot-right.png",
    name: "Priya Shah",
    detail: "Counselor",
    quote:
      "It treats depression as something the gospel can speak to. Healing here is wholistic, not only spiritual and not only clinical.",
  },
] as const;

const slots = [
  "top-[134px] left-[calc(50%-467px-27px)] [animation-delay:0s]",
  "top-[107px] left-[calc(50%+425px-27px)] [animation-delay:0.7s]",
  "top-[468px] left-[calc(50%-230px-27px)] [animation-delay:0.35s]",
  "top-[404px] left-[calc(50%+399px-27px)] [animation-delay:1s]",
];

export function Testimonials() {
  const [order, setOrder] = useState([0, 1, 2, 3, 4]);
  const current = people[order[0]];
  const around = order.slice(1).map((index) => people[index]);

  function show(slot: number) {
    setOrder((prev) => {
      const next = [...prev];
      const picked = slot + 1;
      [next[0], next[picked]] = [next[picked], next[0]];
      return next;
    });
  }

  return (
    <section className="relative isolate pt-[133px] pb-[105px] max-[640px]:py-[72px]" aria-label="Reader quote">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <BgVideo
          src="/video/gemini_generated_video_a52eecd1.mp4"
          poster="/video/gemini_generated_video_a52eecd1.jpg"
        />
        <div className="absolute inset-0 bg-[#001908]/75" />
      </div>
      <div className="mx-auto w-(--wrap)">
        <div className="relative mx-auto h-[540px] w-[min(964px,100%)] max-[1180px]:h-auto max-[1180px]:py-10">
          <img
            className="pointer-events-none absolute inset-0 h-full w-full max-w-none object-cover max-[1180px]:object-contain"
            src="/images/testimonial-wreath.png"
            alt=""
          />
          {around.map((person, index) => (
            <button
              key={person.src}
              type="button"
              className={`absolute z-[4] h-[55px] w-[55px] max-w-none cursor-pointer animate-float-soft overflow-hidden rounded-full border-2 border-white object-cover max-[1180px]:hidden ${slots[index]}`}
              onClick={() => show(index)}
              aria-label={`Show testimonial from ${person.name}`}
            >
              <img className="h-full w-full object-cover" src={person.src} alt="" />
            </button>
          ))}
          <Reveal className="absolute inset-x-0 top-[43px] z-[3] mx-auto w-[min(536px,100%)] max-[1180px]:relative max-[1180px]:top-auto">
            <figure className="relative mt-[52px] min-h-[268px] rounded-[10px] bg-white px-11 pt-16 pb-[22px] text-center text-[#616161] shadow-[0_0_20px_rgba(0,0,0,0.15)] max-[640px]:px-5">
              <img
                className="absolute top-0 left-1/2 h-[104px] w-[104px] max-w-none -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white object-cover"
                src={current.src}
                alt=""
              />
              <blockquote className="m-0 text-sm leading-[1.45] lowercase">{current.quote}</blockquote>
              <img className="mx-auto mt-3.5 mb-1.5 block h-3.5 w-[99px] max-w-none" src="/images/stars.svg" alt="Five stars" width={138} height={19} />
              <figcaption>
                <strong className="block text-sm font-medium text-[#553a39] uppercase">{current.name}</strong>
                <span className="block text-sm lowercase">{current.detail}</span>
              </figcaption>
            </figure>
          </Reveal>
          <div className="mt-8 hidden justify-center gap-3 max-[1180px]:flex">
            {around.map((person, index) => (
              <button
                key={`mobile-${person.src}`}
                type="button"
                className="h-[55px] w-[55px] cursor-pointer overflow-hidden rounded-full border-2 border-white"
                onClick={() => show(index)}
                aria-label={`Show testimonial from ${person.name}`}
              >
                <img className="h-full w-full object-cover" src={person.src} alt="" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

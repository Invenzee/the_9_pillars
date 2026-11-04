"use client";

import { useEffect, useId, useRef, useState } from "react";
import { amazonUrl, btnGold, goldTimes } from "@/lib/ui";

const STORAGE_KEY = "nine-pillars-book-popup";

const bookDetails =
  "A full display of the power of God and His comprehensive love for humanity is shown throughout this book. For anyone who struggles with depression or knows someone who does and wonders if God cares, this is your book. Healing here is wholistic: physical, mental, emotional, and spiritual.";

export function BookPopup() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (window.sessionStorage.getItem(STORAGE_KEY) === "closed") return;
    const timer = window.setTimeout(() => setOpen(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      window.sessionStorage.setItem(STORAGE_KEY, "closed");
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function dismiss() {
    setOpen(false);
    window.sessionStorage.setItem(STORAGE_KEY, "closed");
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-[#001400]/80 p-4 backdrop-blur-[2px]"
      onClick={dismiss}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="animate-rise relative grid max-h-[calc(100dvh-2rem)] w-full max-w-[840px] grid-cols-[minmax(200px,280px)_minmax(0,1fr)] items-center gap-6 overflow-y-auto overscroll-contain border border-[#c67004] bg-[#01140d] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.5)] max-[640px]:grid-cols-1 max-[640px]:gap-5 max-[640px]:p-4 max-[640px]:pt-12 sm:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          className="absolute top-3 right-3 grid size-9 cursor-pointer place-items-center border border-[#f6b521] bg-transparent text-[#f6b521] transition hover:bg-[#f6b521] hover:text-[#01140d]"
          type="button"
          aria-label="Close"
          onClick={dismiss}
        >
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <div className="relative mx-auto aspect-[653/723] w-full max-w-[260px] rounded-tr-[28px] rounded-bl-[28px] bg-linear-to-b from-[#fcbe24] to-[#c16901] max-[640px]:max-w-[180px]">
          <div className="absolute inset-[1.5%_0_0.1%_9.5%] overflow-hidden">
            <img
              className="absolute top-0 left-[0.06%] h-[104.49%] w-[105.6%] max-w-none"
              src="/images/book-cover.png"
              alt="The 9 Pillars book cover"
            />
          </div>
        </div>

        <div className="min-w-0 text-left">
          <p className="mb-2 text-sm leading-none tracking-[4px] text-[#ffb30f] uppercase">About the Book</p>
          <h2 id={titleId} className={`${goldTimes} m-0 font-serif text-[clamp(22px,3vw,34px)] leading-[1.15] font-bold uppercase`}>
            The 9 Pillars of Systematic Theology Concerning Depression
          </h2>
          <p className="mt-4 text-sm leading-[1.6]">{bookDetails}</p>
          <dl className="mt-4 grid gap-1.5 text-sm leading-5">
            <div className="flex flex-wrap gap-x-2">
              <dt className="font-semibold text-[#ffb30f]">Author</dt>
              <dd className="m-0">Matt DeGroft</dd>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <dt className="font-semibold text-[#ffb30f]">Format</dt>
              <dd className="m-0">Paperback and e-book on Amazon</dd>
            </div>
          </dl>
          <a
            className={`${btnGold} mt-6 h-[50px] w-[213px] font-serif text-[22px] font-bold uppercase max-[640px]:w-full`}
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}

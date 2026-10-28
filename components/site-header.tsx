"use client";

import { useState } from "react";
import { btnGold, gold, navLink, wrap } from "@/lib/ui";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#books", label: "Books" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 flex h-[112px] items-center bg-[#01140d] pt-[26px] max-[960px]:h-24 max-[960px]:pt-[18px]">
      <div className={`${wrap} relative flex items-center justify-between gap-6`}>
        <a className={`${gold} font-display text-[clamp(24px,2.2vw,30px)] leading-none font-normal uppercase`} href="#home">
          The 9 pillars
        </a>
        <button
          className="hidden h-[34px] w-10 cursor-pointer flex-col justify-between border-0 bg-transparent px-[5px] py-[7px] max-[960px]:flex"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="block h-0.5 bg-white" />
          <span className="block h-0.5 bg-white" />
          <span className="block h-0.5 bg-white" />
        </button>
        <nav
          id="site-nav"
          className={`flex items-center gap-[30px] max-[960px]:absolute max-[960px]:inset-x-0 max-[960px]:top-[calc(100%+4px)] max-[960px]:flex-col max-[960px]:items-start max-[960px]:gap-4 max-[960px]:border max-[960px]:border-[rgba(246,180,33,0.45)] max-[960px]:bg-[rgba(1,20,13,0.97)] max-[960px]:p-5 ${open ? "" : "max-[960px]:hidden"}`}
        >
          {links.map((link) => (
            <a key={link.href} className={navLink} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className={`${btnGold} h-[29px] w-[122px] font-serif text-[15px] font-bold uppercase`}
            href="#books"
            onClick={() => setOpen(false)}
          >
            Buy Now
          </a>
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useState, type FormEvent } from "react";

type SignupFormProps = {
  variant: "band" | "footer";
};

const field =
  "h-9 border-0 bg-white px-[15px] text-sm text-[#20272f] outline-none placeholder:text-[#8e8e8e] focus:shadow-[inset_0_0_0_2px_#ffc126]";

export function SignupForm({ variant }: SignupFormProps) {
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDone(true);
  }

  if (variant === "band") {
    return done ? (
      <p className="mt-3 text-sm">Thank you. Your details have been received.</p>
    ) : (
      <form
        className="mt-3 grid grid-cols-[227px_227px_119px] gap-3.5 max-[960px]:grid-cols-2 max-[640px]:grid-cols-1"
        onSubmit={onSubmit}
      >
        <input className={field} type="email" name="email" required placeholder="Email Address" aria-label="Email Address" />
        <input className={field} type="tel" name="phone" required placeholder="Phone Number" aria-label="Phone Number" />
        <button
          className="h-9 cursor-pointer border-0 bg-[rgba(81,81,81,0.4)] text-sm text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[rgba(81,81,81,0.7)] max-[960px]:col-span-full max-[640px]:col-span-1"
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  }

  return (
    <div className="min-h-[149px] w-full bg-[#e2e2e2] px-[19px] pt-3 pb-[18px] text-[#20272f] max-[960px]:col-span-full">
      <p className="m-0 text-center text-sm leading-tight">Sign up for exclusive content, emails & things</p>
      <p className="m-0 text-center text-sm leading-tight">We doesn’t share anywhere else.</p>
      {done ? (
        <p className="mt-3 text-sm text-[#20272f]">Thank you. Your details have been received.</p>
      ) : (
        <form className="mt-3 grid grid-cols-2 gap-x-[21px] gap-y-2 max-[640px]:grid-cols-1" onSubmit={onSubmit}>
          <input className={`${field} h-[35px]`} type="text" name="name" required placeholder="Full Name" aria-label="Full Name" />
          <input className={`${field} h-[35px]`} type="email" name="email" required placeholder="Email-Address" aria-label="Email address" />
          <input className={`${field} h-[35px]`} type="tel" name="phone" required placeholder="Phone Number" aria-label="Phone Number" />
          <button
            className="h-[35px] cursor-pointer border-0 bg-[#20272f] text-sm text-[#eedfcc] transition duration-300 hover:-translate-y-0.5 hover:bg-[#343e4a]"
            type="submit"
          >
            Submit Now
          </button>
        </form>
      )}
    </div>
  );
}

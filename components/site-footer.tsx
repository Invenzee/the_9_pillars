import { SignupForm } from "@/components/signup-form";
import { gold, wrap } from "@/lib/ui";

export function SiteFooter() {
  return (
    <>
      <footer className="pb-(--footer-pad)" id="contact">
        <div className={`${wrap} grid grid-cols-[minmax(0,290px)_minmax(0,218px)_minmax(0,420px)] items-start justify-between gap-8 max-[960px]:grid-cols-2 pb-8 max-[640px]:grid-cols-1`}>
          <div>
            <p className={`${gold} m-0 font-display text-[clamp(32px,3.1vw,41px)] leading-[1.1] font-normal uppercase`}>
              The 9 pillars
            </p>
            <p className="mt-1.5 max-w-[245px] text-justify text-sm leading-5">
              The 9 Pillars of Systematic Theology Concerning Depression. A book about the power
              of God and His love for the whole person.
            </p>
            <img
              className="mt-3 block h-[21px] w-auto"
              src="/images/social-b.svg"
              alt="Facebook, Instagram, and LinkedIn"
              width={102}
              height={30}
            />
          </div>
          <nav className="flex flex-col items-start" aria-label="Short links">
            <strong className="text-sm leading-5 font-bold text-[#ffb30f] uppercase">Short Links</strong>
            <a className="text-sm leading-5 transition duration-300 hover:translate-x-1 hover:text-[#ffb30f]" href="/#home">Home</a>
            <a className="text-sm leading-5 transition duration-300 hover:translate-x-1 hover:text-[#ffb30f]" href="/#about">About</a>
            <a className="text-sm leading-5 transition duration-300 hover:translate-x-1 hover:text-[#ffb30f]" href="/#books">Books</a>
            <a className="text-sm leading-5 transition duration-300 hover:translate-x-1 hover:text-[#ffb30f]" href="/#blogs">Blogs</a>
            <a className="text-sm leading-5 transition duration-300 hover:translate-x-1 hover:text-[#ffb30f]" href="/#contact">Contact</a>
          </nav>
          <SignupForm variant="footer" />
        </div>
      </footer>
      <p className="relative z-10 m-0 grid min-h-8 place-items-center bg-[#efaa1c] px-4 py-1 text-center text-sm text-[#20272f] lowercase">
        the9pillars@copyright
      </p>
      <div className="h-6" aria-hidden="true" />
    </>
  );
}

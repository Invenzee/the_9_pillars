import { BgVideo } from "@/components/bg-video";
import { PageFrame } from "@/components/page-frame";
import { Reveal } from "@/components/reveal";
import { SignupForm } from "@/components/signup-form";
import { Testimonials } from "@/components/testimonials";
import { SiteHeader } from "@/components/site-header";
import { btnGold, btnLine, eyebrow, gold, goldFill, goldTimes, lede, sectionTitle, wrap } from "@/lib/ui";

const heroText =
  "Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers. Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.";

const aboutText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

const authorText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const pillars = [
  ["Pillar 1", "Christology — Christ, Our Foundation"],
  ["Pillar 2", "Anthropology — The Nature of Mankind"],
  ["Pillar 3", "Hamartiology — The Sin of Man"],
  ["Pillar 4", "Soteriology — Salvation’s Effect on Depression"],
  ["Pillar 4", "Bibliology — The Importance of God’s Word"],
  ["Pillar 5", "Pneumatology — God’s Personal Helper"],
  ["Pillar 7", "Ecclesiology — The Church and Community"],
  ["Pillar 8", "Eschatology — Hope for the Future"],
  ["Pillar 9", "Angelology — Angels as Messengers and Helpers"],
] as const;

const logo =
  "w-auto shrink-0 object-contain transition-transform duration-300 hover:-translate-y-[3px] hover:scale-[1.04] max-[640px]:scale-[0.82] max-[640px]:hover:-translate-y-0 max-[640px]:hover:scale-[0.82]";

const ornament =
  "pointer-events-none absolute z-[2] h-[clamp(60px,7vw,97px)] w-[clamp(60px,7vw,97px)] max-w-none";

export default function Home() {
  return (
    <main className="relative overflow-clip bg-[#001908]">
      <div className="relative">
        <PageFrame />

        <div className="relative isolate">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <BgVideo
              priority
              src="/video/gemini_generated_video_a52eecd1.mp4"
              poster="/video/gemini_generated_video_a52eecd1.jpg"
            />
            <div className="absolute inset-0 bg-[#001908]/60" />
          </div>
          <SiteHeader />
          <section className="px-0 pt-[108px] pb-[125px] text-center max-[640px]:pt-16 max-[640px]:pb-20" id="home">
            <div className={wrap}>
              <h1
                className={`${goldFill} m-0 animate-[rise_0.9s_ease_both,sheen_7s_ease-in-out_infinite_alternate] font-display text-[clamp(48px,10.4vw,150px)] leading-[0.9] font-normal uppercase`}
              >
                The 9 pillars
              </h1>
              <p className="m-0 animate-rise font-serif text-[clamp(16px,2.3vw,34px)] leading-[1.15] font-bold uppercase [animation-delay:120ms]">
                of Systematic Theology Concerning Depression
              </p>
              <p className="mx-auto mt-2.5 max-w-[763px] animate-rise text-sm leading-[22px] [animation-delay:220ms]">
                {heroText}
              </p>
              <div className="mt-7 flex animate-rise flex-wrap justify-center gap-[22px] [animation-delay:340ms]">
                <a className={btnLine} href="#about">
                  read More
                </a>
                <a className={btnGold} href="#books">
                  Buy Now
                </a>
              </div>
            </div>
          </section>
        </div>

        <section
          className="relative z-[70] flex h-[100px] items-center overflow-hidden bg-linear-to-r from-[#c16901] to-[#ffc126] max-[960px]:h-auto max-[960px]:overflow-visible max-[960px]:py-5"
          aria-label="Retailers"
        >
          <div className={`${wrap} flex items-center justify-center gap-[43px] max-[960px]:flex-wrap max-[960px]:gap-x-8 max-[960px]:gap-y-[18px]`}>
            <img className={`${logo} h-[42px]`} src="/images/logo-amazon.png" alt="Amazon Kindle" />
            <img className={`${logo} h-[33px]`} src="/images/logo-google.png" alt="Google Books" />
            <img className={`${logo} h-9`} src="/images/logo-partner.png" alt="iBooks" />
            <img className={`${logo} h-[65px]`} src="/images/logo-barnes.png" alt="Barnes and Noble" />
            <img className={`${logo} h-[39px]`} src="/images/logo-scribd.png" alt="Kobo" />
          </div>
        </section>

        <div className="relative isolate">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <BgVideo
              src="/video/gemini_generated_video_0db122a8.mp4"
              poster="/video/gemini_generated_video_0db122a8.jpg"
            />
            <div className="absolute inset-0 bg-[#001908]/70" />
          </div>

        <section className="relative pt-[110px] pb-[120px] max-[640px]:py-[72px]" id="about">
          <div className={`${wrap} grid grid-cols-[minmax(0,554px)_minmax(0,483px)] items-center justify-between gap-10 max-[960px]:grid-cols-1 max-[960px]:gap-14`}>
            <Reveal>
              <div className="relative">
                <img
                  className={`${ornament} top-[-35px] left-[-35px] -scale-x-100 max-[640px]:top-[-24px] max-[640px]:left-[-12px]`}
                  src="/images/corner-photo.svg"
                  alt=""
                  width={134}
                  height={134}
                />
                <p className={eyebrow}>About the Book</p>
                <h2 className="m-0 font-serif text-[clamp(26px,2.8vw,37px)] leading-[1.154] font-bold uppercase">
                  The 9 Pillars
                  <br />
                  of Systematic Theology Concerning Depression
                </h2>
                <p className={lede}>{aboutText}</p>
                <div className="mt-7 flex flex-wrap gap-[22px]">
                  <a className={btnLine} href="#books">
                    Read Now
                  </a>
                  <a className={btnGold} href="#books">
                    Buy Now
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="group relative aspect-[653/723] w-full rounded-tr-[37px] rounded-bl-[37px] bg-linear-to-b from-[#fcbe24] to-[#c16901] max-[960px]:mx-auto max-[960px]:w-[min(100%,420px)]">
                <div className="absolute inset-[1.5%_0_0.1%_9.5%] overflow-hidden transition-transform duration-500 group-hover:-translate-y-1.5">
                  <img
                    className="absolute top-0 left-[0.06%] h-[104.49%] w-[105.6%] max-w-none"
                    src="/images/book-cover.png"
                    alt="The 9 Pillars book"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="relative">

          <section className="pt-[146px] pb-[90px] max-[640px]:pt-[72px]" id="author">
            <div className={`${wrap} grid grid-cols-[minmax(0,404px)_minmax(0,540px)] items-center justify-between gap-10 max-[960px]:grid-cols-1 max-[960px]:gap-14`}>
              <Reveal>
                <div className="relative aspect-[507/562] w-full max-[960px]:mx-auto max-[960px]:w-[min(100%,420px)]">
                  <div className="absolute inset-0 overflow-hidden rounded-tr-[32px] rounded-bl-[32px]">
                    <img className="absolute inset-0 h-full w-full object-cover" src="/images/author-plate.png" alt="" />
                    <img
                      className="absolute bottom-0 left-1/2 h-[108%] w-auto max-w-none -translate-x-1/2 object-contain"
                      src="/images/author-portrait.png"
                      alt="Matt DeGroft"
                    />
                  </div>
                  <img
                    className={`${ornament} top-[-40px] left-[-40px] -scale-x-100 max-[640px]:top-[-28px] max-[640px]:left-[-28px]`}
                    src="/images/corner-photo.svg"
                    alt=""
                    width={134}
                    height={134}
                  />
                  <img
                    className={`${ornament} right-[-40px] bottom-[-40px] -scale-y-100 max-[640px]:right-[-28px] max-[640px]:bottom-[-28px]`}
                    src="/images/corner-photo.svg"
                    alt=""
                    width={134}
                    height={134}
                  />
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div>
                  <p className={eyebrow}>Author</p>
                  <h2 className="m-0 font-serif text-[clamp(24px,2.2vw,29px)] leading-[1.154] font-normal uppercase">
                    <strong className="font-bold">About</strong> <span className="text-[#fabb23]">Matt DeGroft</span>
                  </h2>
                  <p className={lede}>{authorText}</p>
                  <div className="mt-7 flex flex-wrap gap-[22px]">
                    <a className={btnLine} href="#author">
                      read More
                    </a>
                  </div>
                  <blockquote className="relative mt-[22px] grid min-h-[108px] place-items-center rounded-tl-[10px] rounded-bl-[10px] bg-[rgba(81,81,81,0.4)] px-10 py-6">
                    <img
                      className="pointer-events-none absolute top-1/2 left-1/2 h-auto w-[83%] max-w-none -translate-x-1/2 -translate-y-1/2"
                      src="/images/quote-marks.svg"
                      alt=""
                      width={602}
                      height={172}
                    />
                    <p className="relative m-0 max-w-[372px] text-center text-sm italic lowercase">
                      Lorem Ipsum into electronic typesetting, remaining essentially unchanged.{" "}
                      <span className="not-italic">was popularised in the 1960s with the release</span>
                    </p>
                  </blockquote>
                </div>
              </Reveal>
            </div>
          </section>

          <section className="pt-[105px] pb-[120px] max-[640px]:py-[72px]" id="pillars">
            <div className={wrap}>
              <Reveal className="text-center">
                <p className={eyebrow}>The Foundation</p>
                <h2 className={`${sectionTitle} ${goldTimes}`}>The 9 Pillars</h2>
                <p className="m-0 text-sm capitalize">of Systematic Theology</p>
              </Reveal>
              <div className="mx-auto mt-[46px] grid w-full max-w-[1142px] grid-cols-3 justify-center gap-x-[37px] gap-y-[35px] max-[1180px]:gap-6 max-[960px]:grid-cols-2 max-[640px]:grid-cols-1">
                {pillars.map(([title, copy], index) => (
                  <Reveal key={copy} delay={(index % 3) * 90}>
                    <article className="h-[124px] border-[1.5px] border-[#c67004] p-[7px] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_26px_rgba(198,112,4,0.22)]">
                      <div className="flex h-full flex-col justify-center border-[0.5px] border-white bg-[#00220b] px-[18px]">
                        <h3 className={`${goldTimes} m-0 font-serif text-[clamp(26px,2.4vw,32px)] leading-[1.154] font-bold uppercase`}>
                          {title}
                        </h3>
                        <p className="m-0 text-sm leading-[1.3] capitalize">{copy}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </div>
        </div>

        <section className="relative isolate px-0 pt-[120px] pb-24 text-center max-[640px]:pt-[72px] max-[640px]:pb-16" id="books">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <BgVideo
              src="/video/gemini_generated_video_91a46f84.mp4"
              poster="/video/gemini_generated_video_91a46f84.jpg"
            />
            <div className="absolute inset-0 bg-[#001908]/75" />
          </div>
          <div className={wrap}>
            <Reveal>
              <h2 className={`${sectionTitle} ${goldTimes}`}>Buy The book</h2>
              <img className="mx-auto block h-auto w-[264px]" src="/images/logo-amazon.png" alt="Amazon Kindle" />
              <div className="relative mx-auto mt-3 aspect-[736/886] w-[min(530px,100%)] animate-float">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    className="absolute top-0 left-[0.06%] h-[104.49%] w-[105.6%] max-w-none"
                    src="/images/book-cover.png"
                    alt="The 9 Pillars book cover"
                  />
                </div>
              </div>
              <a
                className={`${btnGold} relative -mt-[42px] h-[50px] w-[213px] font-serif text-[26px] font-bold uppercase`}
                href="#books"
              >
                Buy Now
              </a>
            </Reveal>
          </div>
        </section>

        <section className="relative flex min-h-[219px] items-center overflow-hidden bg-[#001808] pt-6 pb-16 max-[640px]:text-center">
          <img className="absolute inset-0 h-full w-full max-w-none object-cover mix-blend-luminosity" src="/images/bg-speakers.png" alt="" />
          <div className={`${wrap} relative grid grid-cols-[148px_minmax(0,652px)] items-center justify-center gap-[30px] max-[960px]:grid-cols-[148px_minmax(0,1fr)] max-[640px]:grid-cols-1`}>
            <Reveal>
              <div className="relative h-[179px] w-[148px] rounded-[28px] bg-white max-[640px]:mx-auto">
                <div className="absolute inset-[11px_7px_9px_9px] overflow-hidden">
                  <img
                    className="absolute top-0 left-[0.06%] h-[104.49%] w-[105.6%] max-w-none"
                    src="/images/book-cover.png"
                    alt="The 9 Pillars e-book"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="m-0 text-[22px] leading-[1.3] font-semibold capitalize">
                download My <span className="text-[#ffb30f]">E-Book</span> From Amazon
              </h2>
              <p className="mt-2 text-justify text-sm leading-[1.45] lowercase max-[640px]:text-left">
                Lorem Ipsum into electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages.
              </p>
              <SignupForm variant="band" />
            </Reveal>
          </div>
        </section>

        <section className="relative isolate px-20 pt-10 pb-20 max-[640px]:px-4" aria-label="Listen on Spotify">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <BgVideo
              src="/video/gemini_generated_video_081dddd5.mp4"
              poster="/video/gemini_generated_video_081dddd5.jpg"
            />
            <div className="absolute inset-0 bg-[#001908]/70" />
          </div>
          <div className={wrap}>
            <Reveal>
              <h2 className={`${goldTimes} m-0 text-center font-serif text-[clamp(36px,6vw,96px)] leading-[1.15] font-bold uppercase`}>
                Listen on Spotify
              </h2>
            </Reveal>
            <div className="mt-8 grid w-full grid-cols-[334px_minmax(0,1fr)] items-center gap-x-[61px] max-[960px]:grid-cols-1 max-[960px]:justify-items-center max-[960px]:gap-y-8">
              <div className="relative h-[402px] w-[334px] max-[640px]:h-auto max-[640px]:w-[min(100%,280px)]">
                <img
                  className="pointer-events-none absolute top-[31px] -left-[26px] h-[315px] w-[353px] max-w-none rounded-[10px] object-cover blur-[5px] max-[640px]:top-5 max-[640px]:-left-4 max-[640px]:h-[240px] max-[640px]:w-[280px]"
                  src="/images/spotify-books-blur.png"
                  alt=""
                />
                <div className="relative z-[1] h-[402px] w-[334px] overflow-hidden max-[640px]:h-auto max-[640px]:w-full">
                  <img
                    className="absolute top-0 left-[0.06%] h-[104.49%] w-[105.6%] max-w-none max-[640px]:relative max-[640px]:h-auto max-[640px]:w-full"
                    src="/images/spotify-book.png"
                    alt="The 9 Pillars audiobook"
                  />
                </div>
              </div>
              <div className="w-full min-w-0 text-left max-[960px]:text-center">
                <h3 className="m-0 text-[clamp(22px,2.4vw,30px)] leading-[1.43] font-medium text-white">
                  The 9 Pillars of Systematic Theology Concerning Depression
                </h3>
                <p className="m-0 text-lg leading-normal text-justify lowercase max-[960px]:text-center">
                  Experience the story wherever you go. Listen to the audiobook on Spotify.
                </p>
                <div className="mt-6 flex w-full items-center justify-between gap-3 text-[15px] leading-5 font-medium whitespace-nowrap max-[640px]:gap-1.5 max-[640px]:text-[11px]">
                  <span className="inline-flex shrink-0 items-center gap-2 max-[640px]:gap-1">
                    <img className="max-[640px]:h-3.5 max-[640px]:w-3.5" src="/images/spotify-calendar.svg" alt="" width={21} height={21} />
                    10- Oct-2026
                  </span>
                  <img className="shrink-0 max-[640px]:h-[25px] max-[640px]:w-[88px]" src="/images/spotify-controls.svg" alt="Playback controls" width={142} height={41} />
                  <span className="shrink-0">01 hrs 30 mins</span>
                </div>
                <div className="mt-6 flex w-full flex-wrap items-center gap-6 max-[960px]:justify-center">
                  <a
                    className={`${btnGold} h-[50px] w-[300px] font-serif text-[26px] font-bold uppercase max-[640px]:w-full max-[640px]:max-w-[340px] max-[640px]:text-[20px]`}
                    href="https://open.spotify.com/search/The%209%20Pillars"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen on Spotify
                  </a>
                  <img className="block" src="/images/spotify-logo.svg" alt="Spotify" width={184} height={55} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        <div className="relative isolate">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <BgVideo
              src="/video/gemini_generated_video_da132b58.mp4"
              poster="/video/gemini_generated_video_da132b58.jpg"
            />
            <div className="absolute inset-0 bg-[#001908]/75" />
          </div>

          <section className="px-0 pt-[105px] pb-[130px] text-center max-[640px]:py-[72px]" id="blogs">
            <div className={wrap}>
              <Reveal>
                <h2 className={`${sectionTitle} ${goldTimes}`}>Blogs</h2>
              </Reveal>
              <div className="mx-auto mt-[22px] grid w-full max-w-[1031px] grid-cols-3 gap-[22px] text-left max-[960px]:grid-cols-2 max-[640px]:mx-auto max-[640px]:max-w-[360px] max-[640px]:grid-cols-1">
                {[0, 1, 2].map((index) => (
                  <Reveal key={index} delay={index * 100}>
                    <article className="group flex h-full flex-col overflow-hidden border border-black bg-[#fffaef] shadow-[5px_5px_9px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[8px_12px_18px_rgba(0,0,0,0.35)]">
                      <img
                        className="block aspect-[458/353] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        src="/images/blog-photo.png"
                        alt=""
                      />
                      <div className="flex min-h-[142px] flex-1 items-center justify-between gap-4 bg-[#fffaef] pt-[26px] pr-[22px] pb-[30px] pl-8 font-[family-name:var(--font-blog),Nunito,sans-serif] text-black">
                        <div>
                          <h3 className="mb-1.5 text-[15px] leading-[1.16] font-bold uppercase">Lorem ipsum</h3>
                          <p className="m-0 max-w-[149px] text-[15px] leading-[1.16] font-light capitalize">
                            Lorem ipsum dolor sit amet, consectetuer
                          </p>
                        </div>
                        <a
                          className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full border-[1.5px] border-black transition duration-300 hover:bg-black hover:text-[#fffaef]"
                          href="#blogs"
                          aria-label="Read post"
                        >
                          <svg className="h-[15px] w-[15px] fill-none stroke-current stroke-2 transition-transform duration-300 [stroke-linecap:round] [stroke-linejoin:round] group-hover:translate-x-0.5" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M5 12h13M13 6l6 6-6 6" />
                          </svg>
                        </a>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <footer className="pb-(--footer-pad)" id="contact">
            <div className={`${wrap} grid grid-cols-[minmax(0,290px)_minmax(0,218px)_minmax(0,420px)] items-start justify-between gap-8 max-[960px]:grid-cols-2 pb-8 max-[640px]:grid-cols-1`}>
              <div>
                <p className={`${gold} m-0 font-display text-[clamp(32px,3.1vw,41px)] leading-[1.1] font-normal uppercase`}>
                  The 9 pillars
                </p>
                <p className="mt-1.5 max-w-[245px] text-justify text-sm leading-5 lowercase">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry&apos;s standard the industry&apos;s standard dummy text
                  since.
                </p>
                <div className="relative mt-3 h-[21px] w-[125px]">
                  <img className="block h-[21px] w-[125px] max-w-none" src="/images/social-b.svg" alt="Social links" width={174} height={30} />
                  <img className="absolute top-[9px] left-[50px] h-0.5 w-0.5 max-w-none" src="/images/social-a.svg" alt="" width={3} height={3} />
                </div>
              </div>
              <nav className="flex flex-col items-start" aria-label="Short links">
                <strong className="text-sm leading-5 font-bold text-[#ffb30f] uppercase">Short Links</strong>
                <a className="text-sm leading-5 transition duration-300 hover:translate-x-1 hover:text-[#ffb30f]" href="#home">Home</a>
                <a className="text-sm leading-5 transition duration-300 hover:translate-x-1 hover:text-[#ffb30f]" href="#about">About</a>
                <a className="text-sm leading-5 transition duration-300 hover:translate-x-1 hover:text-[#ffb30f]" href="#books">Books</a>
                <a className="text-sm leading-5 transition duration-300 hover:translate-x-1 hover:text-[#ffb30f]" href="#blogs">Blogs</a>
                <a className="text-sm leading-5 transition duration-300 hover:translate-x-1 hover:text-[#ffb30f]" href="#contact">Contact</a>
              </nav>
              <SignupForm variant="footer" />
            </div>
          </footer>
          <p className="relative z-10 m-0 grid min-h-8 place-items-center bg-[#efaa1c] px-4 py-1 text-center text-sm text-[#20272f] lowercase">
            the9pillars@copyright
          </p>
          <div className="h-6" aria-hidden="true" />
        </div>
      </div>
    </main>
  );
}

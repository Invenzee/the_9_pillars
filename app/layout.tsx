import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-blog",
});

export const metadata: Metadata = {
  title: "The 9 Pillars",
  description: "Of Systematic Theology Concerning Depression",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${nunito.variable} scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="min-w-80 bg-[#001908] font-sans text-sm leading-normal text-white">{children}</body>
    </html>
  );
}

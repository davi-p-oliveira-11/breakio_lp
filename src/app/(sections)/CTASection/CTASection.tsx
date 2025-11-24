"use client";

import { ctaSectionData } from "./ctaSectionData";

export default function CTASection() {
  return (
    <section className="max-w-[1440px] mx-auto bg-white text-gray-900 flex flex-col items-center justify-center px-[24px] py-[80px] md:py-[120px]">
      {/* Heading */}
      <h1 className="text-4xl md:text-[72px] font-extrabold text-center bg-gradient-to-r from-[#C026D3] to-[#701A75] bg-clip-text text-transparent text-nowrap">
        {ctaSectionData.title}
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-center text-[18px] md:text-[20px] font-normal max-w-2xl text-nowrap">
        {ctaSectionData.subtitle}
      </p>

      {/* Button */}
      <a
        href={ctaSectionData.buttonHref}
        className="mt-8 sm:w-auto bg-[#C026D3] text-white font-semibold px-6 py-3 rounded-4xl transition duration-200 hover:opacity-90"
      >
        {ctaSectionData.buttonText}
      </a>
    </section>
  );
}

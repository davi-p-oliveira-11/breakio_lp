"use client";

import Image from "next/image";
import { heroData } from "./heroData";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export default function Hero() {
  const width = useWindowWidth();
  const isMobile = width !== undefined && width < 640; 

  const imageSrc = isMobile ? heroData.image.mobile : heroData.image.desktop;

  return (
    <section className="max-w-[1440px] mx-auto bg-[#fff] text-gray-900 flex flex-col items-center justify-center px-[24px] py-[80px] md:py-[120px]">
      {/* Heading */}
      <h1 className="text-4xl md:text-[72px] font-extrabold text-center bg-gradient-to-r from-[#C026D3] to-[#701A75] bg-clip-text text-transparent leading-tight text-nowrap">
        {heroData.title}
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-center text-[18px] md:text-[20px] font-normal max-w-2xl">
        {heroData.subtitle}
      </p>
      {/* Input + Button */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-xl">
        <input
          type="text"
          placeholder={heroData.inputPlaceholder}
          className="input input-bordered w-full sm:flex-1 text-black rounded-full border-1 border-gray-400 placeholder-gray-400 focus:border-[#C026D3] focus:ring-1 focus:ring-[#C026D3]"
        />

        <button className=" sm:w-auto bg-[#C026D3] text-white font-semibold px-6 py-3 rounded-4xl transition duration-200 hover:opacity-90">
          {heroData.buttonText}
        </button>
      </div>

      {/* Hero Image */}
      <div className="mt-12 w-full max-w-7xl flex justify-center">
        <Image
          src={imageSrc}
          alt={heroData.image.alt}
          width={1280}
          height={465}
          className="w-full h-auto max-w-full"
          priority
        />
      </div>
    </section>
  );
}

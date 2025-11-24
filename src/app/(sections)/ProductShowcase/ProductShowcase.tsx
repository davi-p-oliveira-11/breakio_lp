"use client";

import Image from "next/image";
import { productShowcaseData } from "./productShowcaseData";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export default function ProductShowcase() {
  const width = useWindowWidth();
  const isMobile = width !== undefined && width < 640; 

  const imageSrc = isMobile ? productShowcaseData.image.mobile : productShowcaseData.image.desktop;

  return (
    <section className="max-w-[1440px] mx-auto flex flex-col items-center justify-center px-[24px] py-[80px] md:py-[120px]">
      {/* Heading */}

      {/* Image */}
      <div className="w-full flex justify-center max-w-7xl">
        <Image
          src={imageSrc}
          alt={productShowcaseData.image.alt}
          width={1280} 
          height={830} 
          className="w-full h-auto max-w-full"
          priority
        />
      </div>
    </section>
  );
}

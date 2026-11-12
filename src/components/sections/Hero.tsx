"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] md:min-h-[720px] lg:min-h-[760px] flex items-center justify-center overflow-hidden bg-[#100F0E]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/assets/dn/02_hero/hero-picanha-desktop-1920x760.webp"
            alt="Authentic Brazilian Picanha"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[78%_center] sm:object-right md:object-center"
          />
        </div>

        {/* Tailored Overlays for High Legibility:
            Mobile: Strong vertical gradient so texts are 100% readable above dark background.
            Desktop: Side gradient keeping the right side picanha bright and clear.
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#100F0E] via-[#100F0E]/85 to-[#100F0E]/50 md:hidden" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#100F0E] via-[#100F0E]/85 to-transparent md:w-[65%]" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#100F0E] via-transparent to-[#100F0E]/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1320px] w-full mx-auto px-5 sm:px-6 lg:px-8 pt-28 pb-16 md:py-36">
        <div className="max-w-lg lg:max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <span className="h-[1px] w-6 bg-[#E7B847]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#E7B847] uppercase">
              AUTHENTIC BRAZILIAN FLAVORS
            </span>
          </div>

          {/* Headline with fluid clamp sizing */}
          <h1 className="font-serif text-[34px] sm:text-5xl lg:text-6xl text-[#FFFFFF] font-normal leading-[1.12] mb-4 md:mb-6">
            A Taste of Brazil, <br />
            Right Here in <br />
            <span className="text-[#E7B847] italic font-serif">Buzzards Bay.</span>
          </h1>

          {/* Description */}
          <p className="text-[14px] sm:text-base md:text-lg text-[#F3EEE5]/85 font-light leading-relaxed mb-6 md:mb-8 max-w-md">
            Flavorful dishes, fresh ingredients and the warm hospitality of Brazilian cuisine.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            {/* Primary Order Online CTA */}
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2.5 bg-[#E7B847] hover:bg-[#F3CE70] active:scale-[0.99] text-[#100F0E] font-semibold text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 sm:py-4 rounded-xl sm:rounded-full shadow-md transition-all duration-200"
            >
              <div className="relative w-4 h-4 shrink-0">
                <Image
                  src="/assets/dn/07_icons/ink/icon-fork-spoon-ink.webp"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <span>Order Online</span>
            </Link>

            {/* Secondary Explore Menu CTA */}
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#E7B847] hover:bg-white/5 text-[#F3EEE5] hover:text-[#E7B847] font-medium text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-full transition-all duration-200"
            >
              <span>Explore Menu</span>
              <div className="relative w-3.5 h-3.5 shrink-0">
                <Image
                  src="/assets/dn/07_icons/white/icon-arrow-right-white.webp"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

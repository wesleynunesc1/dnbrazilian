"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-[#100F0E] overflow-hidden">
      {/* ========================================================
          MOBILE HERO (Below md):
          Gastronomic editorial composition:
          - Image positioned in top visual hero frame with generous 16:11 aspect ratio.
          - Clear, appetizing presentation of sliced Brazilian Picanha with accompaniments.
          - Smooth natural dark transition blending directly into solid editorial content container.
          - Zero awkward crops, zero unreadable text overlays.
          ======================================================== */}
      <div className="md:hidden flex flex-col pt-20">
        {/* Mobile Food Showcase Frame */}
        <div className="relative w-full aspect-[16/11] max-h-[380px] bg-[#161413] overflow-hidden">
          <Image
            src="/assets/dn/04_most_loved_dishes/favorite-picanha-plate.webp"
            alt="Authentic Brazilian Picanha Plate at D&N"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle bottom gradient to blend effortlessly into dark copy container */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#100F0E] via-[#100F0E]/70 to-transparent" />
          
          {/* Subtle top vignette for header separation */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#100F0E]/80 to-transparent" />

          {/* Badge: Authentic Brazilian Cut */}
          <div className="absolute bottom-4 left-5 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#100F0E]/85 border border-[#E7B847]/40 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7B847]" />
            <span className="text-[10px] font-semibold tracking-wider uppercase text-[#E7B847]">
              Signature Picanha
            </span>
          </div>
        </div>

        {/* Mobile Editorial Content Container */}
        <div className="px-5 pt-3 pb-12 flex flex-col space-y-4">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-6 bg-[#E7B847]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#E7B847] uppercase">
              AUTHENTIC BRAZILIAN FLAVORS
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-[32px] sm:text-[38px] text-[#FFFFFF] font-normal leading-[1.14]">
            A Taste of Brazil, <br />
            Right Here in <br />
            <span className="text-[#E7B847] italic font-serif">Buzzards Bay.</span>
          </h1>

          {/* Description */}
          <p className="text-[14px] text-[#F3EEE5]/80 font-light leading-relaxed">
            Flavorful dishes, fresh ingredients and the warm hospitality of Brazilian cuisine.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col gap-2.5 pt-2">
            <Link
              href="/menu"
              className="w-full min-h-[48px] inline-flex items-center justify-center gap-2.5 bg-[#E7B847] hover:bg-[#F3CE70] active:scale-[0.99] text-[#100F0E] font-semibold text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl shadow-md transition-all duration-200"
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

            <Link
              href="/menu"
              className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#E7B847] hover:bg-white/5 active:scale-[0.99] text-[#F3EEE5] hover:text-[#E7B847] font-medium text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl transition-all duration-200"
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

      {/* ========================================================
          DESKTOP HERO (md and up):
          Campaign-grade widescreen presentation:
          - Food positioned beautifully on the right, fully recognizable.
          - Wide composition with rich wood/slate presentation.
          - Left-aligned negative space for typography with subtle soft gradient.
          - No giant blurred abstract texture.
          ======================================================== */}
      <div className="hidden md:flex relative min-h-[680px] lg:min-h-[740px] items-center justify-center">
        {/* Full-bleed photography background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/dn/02_hero/hero-picanha-desktop-1920x760.webp"
            alt="Authentic Brazilian Picanha"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[80%_center] lg:object-right"
          />

          {/* Carefully calibrated editorial gradient:
              Keeps food bright and appetizing on the right half,
              while creating deep, crystal-clear contrast for texts on the left.
          */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#100F0E] via-[#100F0E]/80 to-transparent w-[58%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100F0E] via-transparent to-[#100F0E]/40" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1320px] w-full mx-auto px-6 lg:px-8 py-32 lg:py-36">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-[#E7B847]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#E7B847] uppercase">
                AUTHENTIC BRAZILIAN FLAVORS
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-5xl lg:text-6xl text-[#FFFFFF] font-normal leading-[1.12] mb-6">
              A Taste of Brazil, <br />
              Right Here in <br />
              <span className="text-[#E7B847] italic font-serif">Buzzards Bay.</span>
            </h1>

            {/* Description */}
            <p className="text-base lg:text-lg text-[#F3EEE5]/85 font-light leading-relaxed mb-8 max-w-lg">
              Flavorful dishes, fresh ingredients and the warm hospitality of Brazilian cuisine.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              {/* Primary Order Online CTA */}
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2.5 bg-[#E7B847] hover:bg-[#F3CE70] active:scale-[0.99] text-[#100F0E] font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-full shadow-lg transition-all duration-200"
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
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#E7B847] hover:bg-white/5 active:scale-[0.99] text-[#F3EEE5] hover:text-[#E7B847] font-medium text-xs tracking-wider uppercase px-7 py-4 rounded-full transition-all duration-200"
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
      </div>
    </section>
  );
}

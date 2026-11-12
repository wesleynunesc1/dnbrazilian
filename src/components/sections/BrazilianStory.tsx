"use client";

import React from "react";
import Image from "next/image";

export function BrazilianStory() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#100F0E] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Photographic Asset: Brazilian Flag & Feijoada */}
          <div className="w-full lg:w-1/2 shrink-0 relative">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:h-[460px] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] shadow-xl">
              <Image
                src="/assets/dn/05_brazilian_story/brazilian-flag-feijoada-wide.webp"
                alt="Brazilian culinary heritage with feijoada"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Subtle editorial badge */}
            <div className="hidden sm:flex absolute -bottom-4 right-4 bg-[#161413] border border-white/10 rounded-xl p-3 shadow-lg items-center gap-3">
              <div className="relative w-5 h-5">
                <Image
                  src="/assets/dn/07_icons/gold/icon-sparkles-gold.webp"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#E7B847] font-semibold">
                  Heritage & Passion
                </span>
                <span className="text-[11px] text-[#F3EEE5]/70">
                  Buzzards Bay, MA
                </span>
              </div>
            </div>
          </div>

          {/* Right Editorial Story Text */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#E7B847]/90 uppercase">
              OUR BRAZILIAN STORY
            </p>

            <h2 className="font-serif text-[30px] sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal leading-[1.18]">
              More Than Food, <br />
              It&apos;s <span className="text-[#E7B847] italic">Our Culture.</span>
            </h2>

            <div className="w-12 h-[1.5px] bg-[#E7B847]/70" />

            <p className="text-[#F3EEE5]/85 text-sm sm:text-base font-light leading-relaxed">
              D&N Brazilian Cuisine celebrates the rich flavors and warm hospitality of Brazil, bringing authentic culinary experiences to Buzzards Bay.
            </p>

            <p className="text-[#F3EEE5]/65 text-xs sm:text-sm leading-relaxed font-light">
              Every recipe is prepared with care, honoring Brazilian gastronomic traditions — from signature cuts of grilled picanha to comforting feijoada, handcrafted street snacks, and homemade desserts.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 border-t border-white/[0.08] text-left">
              <div>
                <span className="block font-serif text-xl sm:text-2xl text-[#E7B847] font-bold">100%</span>
                <span className="text-[11px] text-[#F3EEE5]/70 uppercase tracking-wider">
                  Authentic Recipes
                </span>
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl text-[#E7B847] font-bold">Fresh</span>
                <span className="text-[11px] text-[#F3EEE5]/70 uppercase tracking-wider">
                  Quality Ingredients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

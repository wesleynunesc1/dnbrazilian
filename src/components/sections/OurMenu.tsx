"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MENU_CATEGORIES } from "@/lib/config/site";

export function OurMenu() {
  return (
    <section className="py-16 md:py-24 bg-[#100F0E] relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Editorial Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-2 md:space-y-4">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#E7B847]/90 uppercase">
              EXPLORE BY CATEGORY
            </p>

            <h2 className="font-serif text-[32px] sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal leading-[1.15]">
              Our <span className="text-[#E7B847] italic">Menu</span>
            </h2>

            <p className="text-[#F3EEE5]/70 text-sm sm:text-base leading-relaxed max-w-sm font-light">
              From classic Brazilian plates to savory portions, sandwiches and irresistible desserts.
            </p>

            <div className="pt-2 hidden lg:block">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#E7B847] hover:text-[#F3CE70] group"
              >
                <span>View Full Menu</span>
                <div className="relative w-3.5 h-3.5 transition-transform group-hover:translate-x-1">
                  <Image
                    src="/assets/dn/07_icons/gold/icon-arrow-right-gold.webp"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Category Cards:
              Mobile: 2-column grid with consistent 1:1 or 4:3 cards, crisp typography.
              Desktop: 2 columns with deeper vertical cards.
          */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-3.5 sm:gap-6">
            {MENU_CATEGORIES.map((cat) => (
              <div key={cat.id}>
                <Link
                  href={`/menu?category=${cat.id}`}
                  className="group block relative h-[180px] sm:h-[260px] md:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#E7B847]/50 shadow-md transition-all duration-300"
                >
                  {/* Category Photo */}
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 300px, 350px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Clean Solid-feel Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100F0E] via-[#100F0E]/40 to-transparent opacity-90 transition-opacity group-hover:opacity-80" />

                  {/* Card Content */}
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 flex items-end justify-between z-10">
                    <div className="space-y-0.5 sm:space-y-1">
                      <div className="relative w-4 h-4 sm:w-5 sm:h-5 mb-1 opacity-90">
                        <Image
                          src={cat.iconGold}
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="font-serif text-[16px] sm:text-2xl text-[#FFFFFF] font-normal leading-tight group-hover:text-[#E7B847] transition-colors">
                        {cat.name}
                      </h3>
                      <p className="hidden sm:block text-xs text-[#F3EEE5]/70 line-clamp-1 font-light">
                        {cat.tagline}
                      </p>
                    </div>

                    {/* Minimalist Arrow Indicator */}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/40 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#E7B847] group-hover:bg-[#E7B847] transition-colors">
                      <div className="relative w-2.5 h-2.5 sm:w-3 sm:h-3">
                        <Image
                          src="/assets/dn/07_icons/white/icon-arrow-right-white.webp"
                          alt=""
                          fill
                          className="object-contain group-hover:brightness-0"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

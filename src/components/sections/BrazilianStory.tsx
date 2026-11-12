"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function BrazilianStory() {
  return (
    <section id="about" className="py-24 bg-[#100F0E] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Photographic Asset: Brazilian Flag & Feijoada */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[340px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/assets/dn/05_brazilian_story/brazilian-flag-feijoada-wide.webp"
                alt="Brazilian culinary heritage with feijoada"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Subtle floating gold accent badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#181615] border border-[#E7B847]/40 rounded-xl p-4 shadow-2xl flex items-center gap-3 backdrop-blur-md">
              <div className="relative w-7 h-7">
                <Image
                  src="/assets/dn/07_icons/gold/icon-sparkles-gold.webp"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#E7B847] font-bold">
                  Heritage & Passion
                </span>
                <span className="text-xs text-[#F3EEE5]/80">
                  Buzzards Bay, MA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Story Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-6 bg-[#E7B847]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#E7B847] uppercase">
                OUR BRAZILIAN STORY
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal leading-tight">
              More Than Food, <br />
              It&apos;s <span className="text-[#E7B847] italic">Our Culture.</span>
            </h2>

            <div className="w-16 h-[2px] bg-[#E7B847]/60" />

            <p className="text-[#F3EEE5]/85 text-base sm:text-lg font-light leading-relaxed">
              D&N Brazilian Cuisine celebrates the rich flavors and warm hospitality of Brazil, bringing authentic culinary experiences to Buzzards Bay.
            </p>

            <p className="text-[#F3EEE5]/70 text-sm leading-relaxed">
              Every recipe is prepared with care, honoring Brazilian gastronomic traditions — from signature cuts of grilled picanha to comforting feijoada, handcrafted street snacks, and homemade desserts.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 border-t border-white/10 text-left">
              <div>
                <span className="block font-serif text-2xl text-[#E7B847] font-bold">100%</span>
                <span className="text-xs text-[#F3EEE5]/70 uppercase tracking-wider">
                  Authentic Recipes
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-[#E7B847] font-bold">Fresh</span>
                <span className="text-xs text-[#F3EEE5]/70 uppercase tracking-wider">
                  Quality Ingredients
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


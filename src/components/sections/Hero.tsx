"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[760px] flex items-center justify-center overflow-hidden bg-[#100F0E]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/assets/dn/02_hero/hero-picanha-desktop-1920x760.webp"
            alt="Authentic Brazilian Picanha"
            fill
            priority
            className="object-cover object-right md:object-center"
          />
        </motion.div>

        {/* Gradient Overlays for High Contrast Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#100F0E] via-[#100F0E]/85 to-transparent md:w-[70%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#100F0E] via-transparent to-[#100F0E]/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="h-[1px] w-8 bg-[#E7B847]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#E7B847] uppercase">
              AUTHENTIC BRAZILIAN FLAVORS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FFFFFF] font-normal leading-[1.15] mb-6"
          >
            A Taste of Brazil, <br />
            Right Here in <br />
            <span className="text-[#E7B847] italic font-serif">Buzzards Bay.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base sm:text-lg text-[#F3EEE5]/85 font-light leading-relaxed mb-8 max-w-lg"
          >
            Flavorful dishes, fresh ingredients and the warm hospitality of Brazilian cuisine.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            {/* Primary Order Online CTA */}
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-3 bg-[#E7B847] hover:bg-[#F3CE70] text-[#100F0E] font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="relative w-4 h-4">
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
              className="inline-flex items-center justify-center gap-2 border border-[#E7B847]/70 hover:border-[#E7B847] hover:bg-[#E7B847]/10 text-[#F3EEE5] hover:text-[#E7B847] font-medium text-sm tracking-wider uppercase px-7 py-4 rounded-full transition-all duration-300"
            >
              <span>Explore Menu</span>
              <div className="relative w-4 h-4">
                <Image
                  src="/assets/dn/07_icons/gold/icon-arrow-right-gold.webp"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MENU_CATEGORIES } from "@/lib/config/site";

export function OurMenu() {
  return (
    <section className="py-24 bg-[#100F0E] relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Editorial Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-28 space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-6 bg-[#E7B847]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#E7B847] uppercase">
                EXPLORE BY CATEGORY
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal leading-tight">
              Our <span className="text-[#E7B847] italic">Menu</span>
            </h2>

            <p className="text-[#F3EEE5]/75 text-base leading-relaxed max-w-sm">
              From classic Brazilian plates to savory portions, sandwiches and irresistible desserts.
            </p>

            <div className="pt-4 hidden lg:block">
              <Link
                href="/menu"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-wider font-semibold text-[#E7B847] hover:text-[#F3CE70] group"
              >
                <span>View Full Menu</span>
                <div className="relative w-4 h-4 transition-transform group-hover:translate-x-1">
                  <Image
                    src="/assets/dn/07_icons/gold/icon-arrow-right-gold.webp"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right 4 Category Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {MENU_CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  href={`/menu?category=${cat.id}`}
                  className="group block relative h-[280px] sm:h-[320px] rounded-2xl overflow-hidden border border-white/10 hover:border-[#E7B847]/60 shadow-xl transition-all duration-500 hover:-translate-y-1.5"
                >
                  {/* Category Photo */}
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Deep Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100F0E] via-[#100F0E]/40 to-transparent opacity-90 transition-opacity group-hover:opacity-80" />

                  {/* Card Content at bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between z-10">
                    <div className="space-y-1">
                      <div className="relative w-6 h-6 mb-2">
                        <Image
                          src={cat.iconGold}
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="font-serif text-2xl text-[#FFFFFF] font-normal group-hover:text-[#E7B847] transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-[#F3EEE5]/70 line-clamp-1">
                        {cat.tagline}
                      </p>
                    </div>

                    {/* Seta Dourada */}
                    <div className="w-9 h-9 rounded-full bg-[#100F0E]/80 border border-[#E7B847]/40 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-[#E7B847] group-hover:bg-[#E7B847] group-hover:text-[#100F0E]">
                      <div className="relative w-4 h-4 transition-transform group-hover:translate-x-0.5">
                        <Image
                          src="/assets/dn/07_icons/gold/icon-arrow-right-gold.webp"
                          alt=""
                          fill
                          className="object-contain group-hover:brightness-0"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


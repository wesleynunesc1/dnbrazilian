"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function OrderSteps() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Dishes",
      description: "Browse authentic plates, portions, and desserts.",
      icon: "/assets/dn/07_icons/ink/icon-cloche-ink.webp",
    },
    {
      number: "02",
      title: "Customize Your Order",
      description: "Select sides, meat temperature and additions.",
      icon: "/assets/dn/07_icons/ink/icon-sliders-ink.webp",
    },
    {
      number: "03",
      title: "Pickup or Delivery",
      description: "Choose convenient carryout or delivery via Wix.",
      icon: "/assets/dn/07_icons/ink/icon-delivery-truck-ink.webp",
    },
    {
      number: "04",
      title: "Check Out Securely",
      description: "Pay fast and safely with Wix official checkout.",
      icon: "/assets/dn/07_icons/ink/icon-credit-card-ink.webp",
    },
  ];

  return (
    <section className="py-24 bg-[#F3EEE5] text-[#100F0E] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="h-[1px] w-6 bg-[#E7B847]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#302016] uppercase">
              SEAMLESS ORDERING
            </span>
            <span className="h-[1px] w-6 bg-[#E7B847]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#100F0E] font-normal">
            Order Online in <span className="italic font-serif">Just a Few Steps</span>
          </h2>

          <p className="text-[#302016]/80 text-sm sm:text-base">
            Your favorite Brazilian meals, ready for pickup or delivery.
          </p>
        </div>

        {/* 4 Steps Row with Connecting Elements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white/70 border border-[#302016]/10 shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Step Number Badge */}
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E7B847] text-[#100F0E] text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow">
                Step {step.number}
              </span>

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-[#E7B847]/15 border border-[#E7B847]/40 flex items-center justify-center my-4 group-hover:scale-110 transition-transform">
                <div className="relative w-8 h-8">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-lg font-semibold text-[#100F0E] mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#302016]/75 leading-relaxed">
                {step.description}
              </p>

              {/* Connecting arrow indicator on desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 opacity-30">
                  <div className="relative w-5 h-5">
                    <Image
                      src="/assets/dn/07_icons/ink/icon-arrow-right-ink.webp"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";

import React from "react";
import Image from "next/image";

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
    <section className="py-16 md:py-24 bg-[#F3EEE5] text-[#100F0E] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-xl mx-auto md:text-center mb-10 md:mb-16 space-y-2">
          <p className="text-[11px] font-bold tracking-[0.2em] text-[#302016]/80 uppercase">
            SEAMLESS ORDERING
          </p>

          <h2 className="font-serif text-[30px] sm:text-4xl lg:text-5xl text-[#100F0E] font-normal leading-[1.15]">
            Order Online in <span className="italic font-serif">Just a Few Steps</span>
          </h2>

          <p className="text-[#302016]/75 text-sm sm:text-base font-light">
            Your favorite Brazilian meals, ready for pickup or delivery.
          </p>
        </div>

        {/* Layout:
            Mobile: Elegant vertical layout with large step numbers and subtle dividers.
            Desktop: 4-column cards with connecting flow.
        */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative flex items-start md:flex-col md:items-center md:text-center p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl bg-white/80 border border-[#302016]/10 shadow-sm gap-4 md:gap-3"
            >
              {/* Step Number: Clean typographic priority */}
              <div className="flex md:flex-col items-center gap-2 shrink-0">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#E7B847]">
                  {step.number}
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#E7B847]/15 flex items-center justify-center shrink-0">
                  <div className="relative w-4 h-4">
                    <Image
                      src={step.icon}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-[16px] sm:text-lg font-semibold text-[#100F0E] mb-0.5 md:mb-1">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#302016]/70 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Connecting arrow indicator on desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 opacity-30">
                  <div className="relative w-4 h-4">
                    <Image
                      src="/assets/dn/07_icons/ink/icon-arrow-right-ink.webp"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

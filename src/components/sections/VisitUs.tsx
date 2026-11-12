"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/config/site";

export function VisitUs() {
  return (
    <section id="visit" className="py-16 md:py-24 bg-[#100F0E] relative border-t border-white/5">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Photographic Interior Asset */}
          <div className="w-full lg:w-1/2 shrink-0">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:h-[460px] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] shadow-xl">
              <Image
                src="/assets/dn/06_visit_us/restaurant-interior.webp"
                alt="D&N Brazilian Cuisine Restaurant Ambiance"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Visit Info */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#E7B847]/90 uppercase">
                VISIT US
              </p>

              <h2 className="font-serif text-[30px] sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal leading-[1.18]">
                Come and Experience <br />
                Brazilian <span className="text-[#E7B847] italic">Hospitality</span>
              </h2>
            </div>

            {/* Info Cards: Clean solid cards, consistent small icons */}
            <div className="space-y-3 sm:space-y-4">
              {/* Location */}
              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="relative w-4 h-4 mt-0.5 shrink-0 opacity-80">
                  <Image
                    src="/assets/dn/07_icons/white/icon-map-pin-white.webp"
                    alt="Address"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase font-semibold tracking-wider text-[#E7B847] mb-0.5">
                    Address
                  </h4>
                  <p className="text-sm text-[#F3EEE5] font-normal">
                    {siteConfig.location.fullAddress}
                  </p>
                  <p className="text-xs text-[#F3EEE5]/60">
                    {siteConfig.location.city}, {siteConfig.location.state},{" "}
                    {siteConfig.location.country}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="relative w-4 h-4 mt-0.5 shrink-0 opacity-80">
                  <Image
                    src="/assets/dn/07_icons/white/icon-clock-white.webp"
                    alt="Hours"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase font-semibold tracking-wider text-[#E7B847] mb-1">
                    Operating Hours
                  </h4>
                  <div className="space-y-0.5">
                    {siteConfig.hours?.map((h, i) => (
                      <p key={i} className="text-xs sm:text-sm text-[#F3EEE5]/80">
                        <span className="font-medium text-[#F3EEE5]">{h.days}:</span> {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact */}
              {siteConfig.contact.phone && (
                <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="relative w-4 h-4 mt-0.5 shrink-0 opacity-80">
                    <Image
                      src="/assets/dn/07_icons/white/icon-phone-white.webp"
                      alt="Phone"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase font-semibold tracking-wider text-[#E7B847] mb-0.5">
                      Phone Number
                    </h4>
                    <p className="text-sm text-[#F3EEE5] font-normal">
                      {siteConfig.contact.phone}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Google Maps CTA */}
            <div>
              <a
                href={siteConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#E7B847] hover:bg-[#F3CE70] active:scale-[0.99] text-[#100F0E] font-semibold text-xs tracking-wider uppercase px-7 py-3.5 sm:py-4 rounded-xl sm:rounded-full shadow-md transition-all"
              >
                <div className="relative w-3.5 h-3.5 shrink-0">
                  <Image
                    src="/assets/dn/07_icons/ink/icon-map-pin-ink.webp"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config/site";

export function VisitUs() {
  return (
    <section id="visit" className="py-24 bg-[#100F0E] relative border-t border-white/5">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Photographic Interior Asset */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="relative h-[340px] sm:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/assets/dn/06_visit_us/restaurant-interior.webp"
                alt="D&N Brazilian Cuisine Restaurant Ambiance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right Visit Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-6 bg-[#E7B847]" />
                <span className="text-xs font-semibold tracking-[0.2em] text-[#E7B847] uppercase">
                  VISIT US
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal leading-tight">
                Come and Experience <br />
                Brazilian <span className="text-[#E7B847] italic">Hospitality</span>
              </h2>
            </div>

            {/* Info Cards */}
            <div className="space-y-5">
              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="relative w-5 h-5 mt-1 shrink-0">
                  <Image
                    src="/assets/dn/07_icons/gold/icon-map-pin-gold.webp"
                    alt="Address"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#E7B847] mb-0.5">
                    Address
                  </h4>
                  <p className="text-sm text-[#F3EEE5] font-medium">
                    {siteConfig.location.fullAddress}
                  </p>
                  <p className="text-xs text-[#F3EEE5]/60">
                    {siteConfig.location.city}, {siteConfig.location.state},{" "}
                    {siteConfig.location.country}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="relative w-5 h-5 mt-1 shrink-0">
                  <Image
                    src="/assets/dn/07_icons/gold/icon-clock-gold.webp"
                    alt="Hours"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#E7B847] mb-1">
                    Opening Hours
                  </h4>
                  <div className="space-y-1">
                    {siteConfig.hours?.map((h, i) => (
                      <p key={i} className="text-xs sm:text-sm text-[#F3EEE5]/85">
                        <span className="font-medium text-[#F3EEE5]">{h.days}:</span> {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact */}
              {siteConfig.contact.phone && (
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="relative w-5 h-5 mt-1 shrink-0">
                    <Image
                      src="/assets/dn/07_icons/gold/icon-phone-gold.webp"
                      alt="Phone"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#E7B847] mb-0.5">
                      Phone Number
                    </h4>
                    <p className="text-sm text-[#F3EEE5] font-medium">
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
                className="inline-flex items-center gap-3 bg-[#E7B847] hover:bg-[#F3CE70] text-[#100F0E] font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <div className="relative w-4 h-4">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}


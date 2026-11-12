"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#0D0C0B] border-t border-white/[0.08] text-[#F3EEE5] pt-12 md:pt-16 pb-10">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-10 border-b border-white/[0.06]">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-3">
            <Link href="/" className="inline-block relative w-[130px] h-[44px]">
              <Image
                src="/assets/dn/01_logo/dn-logo-transparent.webp"
                alt="D&N Brazilian Cuisine"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-xs sm:text-sm text-[#F3EEE5]/65 leading-relaxed font-light max-w-sm">
              Celebrating authentic Brazilian flavors and warm hospitality right in Buzzards Bay, Massachusetts. Fresh ingredients, grilled specialties, and cherished culinary traditions.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="font-serif text-[17px] text-[#E7B847] tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F3EEE5]/75">
              <li>
                <Link href="/" className="hover:text-[#E7B847] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#E7B847] transition-colors">
                  Full Menu
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#E7B847] transition-colors">
                  Order Online
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#E7B847] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/#visit" className="hover:text-[#E7B847] transition-colors">
                  Visit Us & Hours
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Service */}
          <div className="space-y-3">
            <h3 className="font-serif text-[17px] text-[#E7B847] tracking-wide">
              Hours of Operation
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#F3EEE5]/75">
              {siteConfig.hours?.map((h, i) => (
                <li key={i} className="flex flex-col">
                  <span className="font-medium text-[#F3EEE5]">{h.days}</span>
                  <span className="text-[#F3EEE5]/60 text-xs">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="space-y-3">
            <h3 className="font-serif text-[17px] text-[#E7B847] tracking-wide">
              Location & Contact
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#F3EEE5]/75">
              <div className="flex items-start gap-2">
                <div className="relative w-3.5 h-3.5 mt-0.5 shrink-0 opacity-80">
                  <Image
                    src="/assets/dn/07_icons/white/icon-map-pin-white.webp"
                    alt="Location"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>Buzzards Bay, Massachusetts, USA</span>
              </div>

              {siteConfig.contact.phone && (
                <div className="flex items-center gap-2">
                  <div className="relative w-3.5 h-3.5 shrink-0 opacity-80">
                    <Image
                      src="/assets/dn/07_icons/white/icon-phone-white.webp"
                      alt="Phone"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>{siteConfig.contact.phone}</span>
                </div>
              )}

              {/* Minimalist social icons */}
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:border-[#E7B847] transition-colors"
                  aria-label="Instagram"
                >
                  <div className="relative w-3.5 h-3.5 opacity-80">
                    <Image
                      src="/assets/dn/07_icons/white/icon-instagram-white.webp"
                      alt="Instagram"
                      fill
                      className="object-contain"
                    />
                  </div>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:border-[#E7B847] transition-colors"
                  aria-label="Facebook"
                >
                  <div className="relative w-3.5 h-3.5 opacity-80">
                    <Image
                      src="/assets/dn/07_icons/white/icon-facebook-white.webp"
                      alt="Facebook"
                      fill
                      className="object-contain"
                    />
                  </div>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:border-[#E7B847] transition-colors"
                  aria-label="TikTok"
                >
                  <div className="relative w-3.5 h-3.5 opacity-80">
                    <Image
                      src="/assets/dn/07_icons/white/icon-tiktok-white.webp"
                      alt="TikTok"
                      fill
                      className="object-contain"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F3EEE5]/45 gap-3">
          <p>© {currentYear} D&N Brazilian Cuisine. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Buzzards Bay, MA</span>
            <span>•</span>
            <span className="text-[#E7B847]/70">Wix Headless Powered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

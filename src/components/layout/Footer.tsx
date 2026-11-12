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
    <footer className="bg-[#100F0E] border-t border-[#302016] text-[#F3EEE5] pt-16 pb-12">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/5">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <Link href="/" className="inline-block relative w-[160px] h-[55px]">
              <Image
                src="/assets/dn/01_logo/dn-logo-transparent.webp"
                alt="D&N Brazilian Cuisine"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-sm text-[#F3EEE5]/70 leading-relaxed max-w-sm">
              Celebrating authentic Brazilian flavors and warm hospitality right in Buzzards Bay, Massachusetts. Fresh ingredients, grilled specialties, and cherished culinary traditions.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-[#E7B847] tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F3EEE5]/80">
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
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-[#E7B847] tracking-wide">
              Hours of Operation
            </h3>
            <ul className="space-y-2 text-sm text-[#F3EEE5]/80">
              {siteConfig.hours?.map((h, i) => (
                <li key={i} className="flex flex-col">
                  <span className="font-medium text-[#F3EEE5]">{h.days}</span>
                  <span className="text-[#F3EEE5]/60 text-xs">{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 text-xs text-[#E7B847]/80">
              *Pickup and delivery availability configured via Wix.
            </div>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-[#E7B847] tracking-wide">
              Location & Contact
            </h3>
            <div className="space-y-3 text-sm text-[#F3EEE5]/80">
              <div className="flex items-start gap-2.5">
                <div className="relative w-4 h-4 mt-0.5 shrink-0">
                  <Image
                    src="/assets/dn/07_icons/gold/icon-map-pin-gold.webp"
                    alt="Location"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>Buzzards Bay, Massachusetts, USA</span>
              </div>

              {siteConfig.contact.phone ? (
                <div className="flex items-center gap-2.5">
                  <div className="relative w-4 h-4 shrink-0">
                    <Image
                      src="/assets/dn/07_icons/gold/icon-phone-gold.webp"
                      alt="Phone"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>{siteConfig.contact.phone}</span>
                </div>
              ) : (
                <p className="text-xs text-[#F3EEE5]/50">
                  Official contact number will be displayed upon verification.
                </p>
              )}

              {/* Social icons (Rendered when valid links exist or inactive placeholder) */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#E7B847] hover:bg-[#E7B847]/10 transition-colors"
                  aria-label="Instagram"
                >
                  <div className="relative w-4 h-4">
                    <Image
                      src="/assets/dn/07_icons/gold/icon-instagram-gold.webp"
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
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#E7B847] hover:bg-[#E7B847]/10 transition-colors"
                  aria-label="Facebook"
                >
                  <div className="relative w-4 h-4">
                    <Image
                      src="/assets/dn/07_icons/gold/icon-facebook-gold.webp"
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
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#E7B847] hover:bg-[#E7B847]/10 transition-colors"
                  aria-label="TikTok"
                >
                  <div className="relative w-4 h-4">
                    <Image
                      src="/assets/dn/07_icons/gold/icon-tiktok-gold.webp"
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F3EEE5]/50 gap-4">
          <p>© {currentYear} D&N Brazilian Cuisine. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Buzzards Bay, MA</span>
            <span>•</span>
            <span className="text-[#E7B847]/80">Wix Headless Powered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


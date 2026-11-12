"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart/CartContext";

export function Header() {
  const pathname = usePathname();
  const { toggleCart, totalItemCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Order Online", href: "/menu" },
    { label: "About Us", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#100F0E]/95 backdrop-blur-md py-2.5 sm:py-3 border-b border-white/[0.08] shadow-lg"
          : "bg-gradient-to-b from-[#100F0E]/90 via-[#100F0E]/50 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo: Clean and well-proportioned */}
        <Link href="/" className="relative flex items-center">
          <div className="relative w-[120px] h-[40px] sm:w-[145px] sm:h-[48px]">
            <Image
              src="/assets/dn/01_logo/dn-logo-transparent.webp"
              alt="D&N Brazilian Cuisine"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href) &&
                  link.href !== "/#about" &&
                  link.href !== "/#contact";

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-200 py-1 ${
                  isActive ? "text-[#E7B847]" : "text-[#F3EEE5]/80 hover:text-[#E7B847]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#E7B847]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-5">
          {/* User profile icon */}
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center text-[#F3EEE5]/80 hover:text-[#E7B847] transition-colors rounded-full hover:bg-white/5"
            title="User Account"
            aria-label="User Account"
          >
            <div className="relative w-4 h-4">
              <Image
                src="/assets/dn/07_icons/white/icon-user-profile-white.webp"
                alt="Account"
                fill
                className="object-contain opacity-80 hover:opacity-100"
              />
            </div>
          </button>

          {/* Cart button */}
          <button
            type="button"
            onClick={toggleCart}
            className="relative w-10 h-10 flex items-center justify-center text-[#F3EEE5]/80 hover:text-[#E7B847] transition-colors rounded-full hover:bg-white/5"
            aria-label="Shopping Cart"
          >
            <div className="relative w-4 h-4">
              <Image
                src="/assets/dn/07_icons/white/icon-shopping-cart-white.webp"
                alt="Cart"
                fill
                className="object-contain opacity-80 hover:opacity-100"
              />
            </div>
            {totalItemCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#E7B847] text-[#100F0E] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow">
                {totalItemCount}
              </span>
            )}
          </button>

          {/* Order Online CTA */}
          <Link
            href="/menu"
            className="hidden lg:inline-flex items-center justify-center gap-2 bg-[#E7B847] hover:bg-[#F3CE70] text-[#100F0E] font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full shadow-md transition-all"
          >
            <span className="relative w-3.5 h-3.5">
              <Image
                src="/assets/dn/07_icons/ink/icon-fork-spoon-ink.webp"
                alt=""
                fill
                className="object-contain"
              />
            </span>
            <span>Order Online</span>
          </Link>
        </div>

        {/* Mobile Actions: Touch target >= 44px */}
        <div className="flex sm:hidden items-center gap-1">
          <button
            type="button"
            onClick={toggleCart}
            className="relative min-w-[44px] min-h-[44px] flex items-center justify-center text-[#F3EEE5] active:bg-white/5 rounded-full"
            aria-label="Cart"
          >
            <div className="relative w-5 h-5">
              <Image
                src="/assets/dn/07_icons/white/icon-shopping-cart-white.webp"
                alt="Cart"
                fill
                className="object-contain"
              />
            </div>
            {totalItemCount > 0 && (
              <span className="absolute top-1.5 right-1.5 bg-[#E7B847] text-[#100F0E] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow">
                {totalItemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#F3EEE5] active:bg-white/5 rounded-full"
            aria-label="Toggle Menu"
          >
            <div className="relative w-5 h-5">
              {mobileMenuOpen ? (
                <Image
                  src="/assets/dn/07_icons/white/icon-close-white.webp"
                  alt="Close menu"
                  fill
                  className="object-contain"
                />
              ) : (
                <Image
                  src="/assets/dn/07_icons/white/icon-menu-white.webp"
                  alt="Open menu"
                  fill
                  className="object-contain"
                />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#12100F] border-b border-white/10 px-5 pt-3 pb-6 space-y-4 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider font-medium text-[#F3EEE5] hover:text-[#E7B847] py-2.5 border-b border-white/[0.04] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2">
            <Link
              href="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-[#E7B847] text-[#100F0E] font-semibold text-xs tracking-wider uppercase py-3 rounded-xl shadow-md"
            >
              <span className="relative w-3.5 h-3.5">
                <Image
                  src="/assets/dn/07_icons/ink/icon-fork-spoon-ink.webp"
                  alt=""
                  fill
                  className="object-contain"
                />
              </span>
              <span>Order Online</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

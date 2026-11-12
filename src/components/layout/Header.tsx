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
      setIsScrolled(window.scrollY > 20);
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
          ? "bg-[#100F0E]/95 backdrop-blur-md py-3 border-b border-[#302016]/80 shadow-2xl"
          : "bg-gradient-to-b from-[#100F0E]/90 via-[#100F0E]/60 to-transparent py-5"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="relative flex items-center group">
          <div className="relative w-[130px] h-[48px] sm:w-[150px] sm:h-[54px] transition-transform duration-300 group-hover:scale-105">
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
                : pathname.startsWith(link.href) && link.href !== "/#about" && link.href !== "/#contact";

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-sm tracking-wider uppercase font-medium transition-colors duration-200 py-1 ${
                  isActive
                    ? "text-[#E7B847]"
                    : "text-[#F3EEE5]/85 hover:text-[#E7B847]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E7B847] rounded-full animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-6">
          {/* User profile icon */}
          <button
            type="button"
            className="p-2 text-[#F3EEE5]/80 hover:text-[#E7B847] transition-colors rounded-full hover:bg-white/5"
            title="User Account"
            aria-label="User Account"
          >
            <div className="relative w-5 h-5">
              <Image
                src="/assets/dn/07_icons/gold/icon-user-profile-gold.webp"
                alt="Account"
                fill
                className="object-contain"
              />
            </div>
          </button>

          {/* Cart button */}
          <button
            type="button"
            onClick={toggleCart}
            className="relative p-2 text-[#F3EEE5]/80 hover:text-[#E7B847] transition-colors rounded-full hover:bg-white/5"
            aria-label="Shopping Cart"
          >
            <div className="relative w-6 h-6">
              <Image
                src="/assets/dn/07_icons/gold/icon-shopping-cart-gold.webp"
                alt="Cart"
                fill
                className="object-contain"
              />
            </div>
            {totalItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E7B847] text-[#100F0E] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                {totalItemCount}
              </span>
            )}
          </button>

          {/* Order Online CTA */}
          <Link
            href="/menu"
            className="hidden lg:inline-flex items-center justify-center gap-2 bg-[#E7B847] hover:bg-[#F3CE70] text-[#100F0E] font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="relative w-4 h-4">
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

        {/* Mobile Actions: Cart & Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleCart}
            className="relative p-2 text-[#F3EEE5]"
            aria-label="Cart"
          >
            <div className="relative w-6 h-6">
              <Image
                src="/assets/dn/07_icons/gold/icon-shopping-cart-gold.webp"
                alt="Cart"
                fill
                className="object-contain"
              />
            </div>
            {totalItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E7B847] text-[#100F0E] text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#E7B847] focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="relative w-7 h-7">
              <Image
                src="/assets/dn/07_icons/gold/icon-menu-gold.webp"
                alt="Menu"
                fill
                className="object-contain"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#100F0E]/98 border-b border-[#302016] px-6 pt-4 pb-8 space-y-4 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base uppercase tracking-wider font-medium text-[#F3EEE5] hover:text-[#E7B847] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2">
            <Link
              href="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#E7B847] text-[#100F0E] font-semibold text-sm tracking-wider uppercase py-3 rounded-full"
            >
              <span className="relative w-4 h-4">
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


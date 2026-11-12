"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart/CartContext";
import { CartService } from "@/lib/wix/cartService";

export function CartDrawer() {
  const {
    cart,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    setOrderType,
  } = useCart();

  const [isLoadingCheckout, setIsLoadingCheckout] = useState(false);
  const [checkoutMessage, setCheckoutMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCheckout = async () => {
    setIsLoadingCheckout(true);
    setCheckoutMessage(null);

    const result = await CartService.createCheckoutUrl();
    setIsLoadingCheckout(false);

    if (result.checkoutUrl) {
      window.location.href = result.checkoutUrl;
    } else if (result.error) {
      setCheckoutMessage(result.error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#100F0E] border-l border-[#302016] text-[#F3EEE5] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-5 h-5">
                <Image
                  src="/assets/dn/07_icons/gold/icon-shopping-bag-gold.webp"
                  alt="Cart"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="font-serif text-xl text-[#F3EEE5]">Your Order</h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-[#F3EEE5]/60 hover:text-[#E7B847] transition-colors rounded-full"
              aria-label="Close cart"
            >
              <div className="relative w-5 h-5">
                <Image
                  src="/assets/dn/07_icons/gold/icon-close-gold.webp"
                  alt="Close"
                  fill
                  className="object-contain"
                />
              </div>
            </button>
          </div>

          {/* Pickup / Delivery Toggle */}
          <div className="px-6 py-3 bg-[#302016]/40 border-b border-white/5 flex gap-2">
            <button
              onClick={() => setOrderType("pickup")}
              className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all ${
                cart.orderType === "pickup"
                  ? "bg-[#E7B847] text-[#100F0E] shadow"
                  : "bg-black/30 text-[#F3EEE5]/70 hover:text-white"
              }`}
            >
              Pickup
            </button>
            <button
              onClick={() => setOrderType("delivery")}
              className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all ${
                cart.orderType === "delivery"
                  ? "bg-[#E7B847] text-[#100F0E] shadow"
                  : "bg-black/30 text-[#F3EEE5]/70 hover:text-white"
              }`}
            >
              Delivery
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="relative w-16 h-16 opacity-30">
                  <Image
                    src="/assets/dn/07_icons/gold/icon-cloche-gold.webp"
                    alt="Empty cart"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-base font-serif text-[#F3EEE5]/80">Your cart is empty</p>
                <p className="text-xs text-[#F3EEE5]/50 max-w-xs">
                  Explore our authentic Brazilian menu and add your favorite dishes.
                </p>
                <Link
                  href="/menu"
                  onClick={closeCart}
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E7B847] text-[#100F0E] text-xs font-bold uppercase tracking-wider hover:bg-[#F3CE70] transition-colors"
                >
                  Browse Menu
                </Link>
              </div>
            ) : (
              cart.items.map((line) => (
                <div
                  key={line.id}
                  className="bg-white/[0.03] border border-white/5 rounded-xl p-3.5 flex gap-3.5 items-start"
                >
                  {/* Dish Thumbnail */}
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-neutral-900 border border-white/10">
                    <Image
                      src={line.image}
                      alt={line.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-medium text-[#F3EEE5] truncate pr-2">
                        {line.name}
                      </h4>
                      <span className="text-sm font-serif font-bold text-[#E7B847]">
                        ${line.totalPrice.toFixed(2)}
                      </span>
                    </div>

                    {line.selectedOptions && line.selectedOptions.length > 0 && (
                      <div className="text-[11px] text-[#F3EEE5]/60 mt-0.5 space-y-0.5">
                        {line.selectedOptions.map((opt, i) => (
                          <div key={i}>
                            • {opt.optionName}{" "}
                            {opt.price > 0 && `(+$${opt.price.toFixed(2)})`}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-white/10 rounded-lg bg-black/40 overflow-hidden">
                        <button
                          onClick={() => updateQuantity(line.id, line.quantity - 1)}
                          className="px-2.5 py-1 text-xs text-[#F3EEE5]/80 hover:text-[#E7B847] hover:bg-white/5 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-1 text-xs font-semibold text-[#F3EEE5]">
                          {line.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(line.id, line.quantity + 1)}
                          className="px-2.5 py-1 text-xs text-[#F3EEE5]/80 hover:text-[#E7B847] hover:bg-white/5 transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(line.id)}
                        className="text-xs text-[#F3EEE5]/40 hover:text-red-400 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Totals */}
          {cart.items.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-black/40 space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-[#F3EEE5]/70">
                  <span>Subtotal</span>
                  <span>${cart.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#F3EEE5]/70 text-xs">
                  <span>Estimated Tax</span>
                  <span>${cart.tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-white/10 pt-2 flex justify-between font-serif text-lg text-[#F3EEE5] font-bold">
                  <span>Total</span>
                  <span className="text-[#E7B847]">${cart.total.toFixed(2)}</span>
                </div>
              </div>

              {checkoutMessage && (
                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed">
                  {checkoutMessage}
                </div>
              )}

              <button
                onClick={handleCheckout}
                disabled={isLoadingCheckout}
                className="w-full py-3.5 px-4 rounded-full bg-[#E7B847] hover:bg-[#F3CE70] text-[#100F0E] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                <div className="relative w-4 h-4">
                  <Image
                    src="/assets/dn/07_icons/ink/icon-credit-card-ink.webp"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span>
                  {isLoadingCheckout ? "Connecting to Wix..." : "Proceed to Checkout"}
                </span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-[#F3EEE5]/50">
                <span className="flex items-center gap-1">
                  🔒 Secure Wix-Hosted Checkout
                </span>
                <button
                  onClick={clearCart}
                  className="underline hover:text-white transition-colors"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MenuItem } from "@/lib/config/site";
import { useCart } from "@/lib/cart/CartContext";

interface MostLovedDishesProps {
  items: MenuItem[];
  isDemoMode: boolean;
}

export function MostLovedDishes({ items, isDemoMode }: MostLovedDishesProps) {
  const { addToCart } = useCart();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: "smooth" });
      setScrollIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: "smooth" });
      setScrollIndex((prev) => Math.min(items.length - 1, prev + 1));
    }
  };

  const handleAddClick = (dish: MenuItem) => {
    if (dish.optionGroups && dish.optionGroups.length > 0) {
      setSelectedItemForModal(dish);
    } else {
      addToCart(dish, 1);
    }
  };

  return (
    <section className="py-24 bg-[#100F0E] relative border-t border-white/5">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Left Editorial & Right Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-6 bg-[#E7B847]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#E7B847] uppercase">
                GUEST FAVORITES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal">
              Most Loved <span className="text-[#E7B847] italic">Dishes</span>
            </h2>
            <p className="text-[#F3EEE5]/75 text-sm sm:text-base max-w-lg">
              The Brazilian flavors our customers keep coming back for.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="w-11 h-11 rounded-full border border-white/10 hover:border-[#E7B847] bg-white/[0.03] hover:bg-[#E7B847]/10 flex items-center justify-center transition-colors text-[#F3EEE5]"
              aria-label="Previous dishes"
            >
              <div className="relative w-4 h-4">
                <Image
                  src="/assets/dn/07_icons/gold/icon-arrow-left-gold.webp"
                  alt="Left"
                  fill
                  className="object-contain"
                />
              </div>
            </button>
            <button
              onClick={scrollRight}
              className="w-11 h-11 rounded-full border border-white/10 hover:border-[#E7B847] bg-white/[0.03] hover:bg-[#E7B847]/10 flex items-center justify-center transition-colors text-[#F3EEE5]"
              aria-label="Next dishes"
            >
              <div className="relative w-4 h-4">
                <Image
                  src="/assets/dn/07_icons/gold/icon-arrow-right-gold.webp"
                  alt="Right"
                  fill
                  className="object-contain"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((dish) => (
            <div
              key={dish.id}
              className="min-w-[280px] sm:min-w-[340px] md:min-w-[370px] snap-start shrink-0"
            >
              <div className="bg-[#181615] rounded-2xl overflow-hidden border border-white/10 hover:border-[#E7B847]/50 shadow-xl transition-all duration-300 flex flex-col h-full group">
                {/* Dish Photo */}
                <div className="relative h-[220px] sm:h-[240px] w-full overflow-hidden bg-black/40">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {dish.isDemo && (
                    <span className="absolute top-3 left-3 bg-[#302016]/90 border border-[#E7B847]/30 text-[#E7B847] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md">
                      Preview Item
                    </span>
                  )}
                </div>

                {/* Info & Add Action */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-xl text-[#FFFFFF] font-normal group-hover:text-[#E7B847] transition-colors">
                        {dish.name}
                      </h3>
                      <span className="font-serif text-lg font-bold text-[#E7B847] shrink-0">
                        ${dish.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#F3EEE5]/70 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleAddClick(dish)}
                    className="w-full py-3 px-4 rounded-full bg-white/[0.05] hover:bg-[#E7B847] border border-[#E7B847]/40 hover:border-[#E7B847] text-[#F3EEE5] hover:text-[#100F0E] font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-[#E7B847] group-hover:text-[#100F0E]"
                  >
                    <div className="relative w-4 h-4">
                      <Image
                        src="/assets/dn/07_icons/gold/icon-plus-gold.webp"
                        alt=""
                        fill
                        className="object-contain group-hover:brightness-0"
                      />
                    </div>
                    <span>Add to Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.scrollTo({ left: i * 360, behavior: "smooth" });
                  setScrollIndex(i);
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === scrollIndex ? "w-8 bg-[#E7B847]" : "w-2 bg-white/20"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Options Modal if dish has customizers */}
      {selectedItemForModal && (
        <CustomizationModal
          dish={selectedItemForModal}
          onClose={() => setSelectedItemForModal(null)}
          onConfirm={(dish, qty, options) => {
            addToCart(dish, qty, options);
            setSelectedItemForModal(null);
          }}
        />
      )}
    </section>
  );
}

// Modal for dish customization options
function CustomizationModal({
  dish,
  onClose,
  onConfirm,
}: {
  dish: MenuItem;
  onClose: () => void;
  onConfirm: (
    dish: MenuItem,
    quantity: number,
    selectedOptions: { groupName: string; optionName: string; price: number }[]
  ) => void;
}) {
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<{
    [groupName: string]: { name: string; price: number };
  }>({});

  const handleOptionSelect = (groupName: string, optionName: string, price: number) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [groupName]: { name: optionName, price },
    }));
  };

  const handleAdd = () => {
    const optionsArray = Object.entries(selectedOptions).map(([group, opt]) => ({
      groupName: group,
      optionName: opt.name,
      price: opt.price,
    }));
    onConfirm(dish, quantity, optionsArray);
  };

  const totalPerUnit =
    dish.price +
    Object.values(selectedOptions).reduce((acc, opt) => acc + opt.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-[#181615] border border-[#302016] rounded-2xl p-6 text-[#F3EEE5] shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-serif text-2xl text-white">{dish.name}</h3>
            <p className="text-sm text-[#F3EEE5]/70 mt-1">{dish.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#F3EEE5]/60 hover:text-white"
          >
            ✕
          </button>
        </div>

        {dish.optionGroups?.map((group) => (
          <div key={group.id} className="py-4 border-t border-white/10">
            <h4 className="text-sm font-semibold text-[#E7B847] mb-2">
              {group.name} {group.required && <span className="text-red-400">*</span>}
            </h4>
            <div className="space-y-2">
              {group.options.map((opt) => {
                const isSelected = selectedOptions[group.name]?.name === opt.name;
                return (
                  <label
                    key={opt.id}
                    onClick={() => handleOptionSelect(group.name, opt.name, opt.price)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-sm cursor-pointer transition-colors ${
                      isSelected
                        ? "border-[#E7B847] bg-[#E7B847]/10 text-white"
                        : "border-white/10 hover:border-white/30 text-[#F3EEE5]/80"
                    }`}
                  >
                    <span>{opt.name}</span>
                    <span className="text-xs text-[#E7B847]">
                      {opt.price > 0 ? `+$${opt.price.toFixed(2)}` : "Free"}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}

        <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center border border-white/10 rounded-lg bg-black/40">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-2 text-sm text-white/80 hover:text-[#E7B847]"
            >
              -
            </button>
            <span className="px-3 py-2 text-sm font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-2 text-sm text-white/80 hover:text-[#E7B847]"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAdd}
            className="flex-1 py-3 px-6 rounded-full bg-[#E7B847] hover:bg-[#F3CE70] text-[#100F0E] font-bold text-xs uppercase tracking-wider transition-all"
          >
            Add to Order • ${(totalPerUnit * quantity).toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}


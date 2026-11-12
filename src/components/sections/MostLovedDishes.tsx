"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { MenuItem } from "@/lib/config/site";
import { useCart } from "@/lib/cart/CartContext";

interface MostLovedDishesProps {
  items: MenuItem[];
  isDemoMode: boolean;
}

export function MostLovedDishes({ items, isDemoMode }: MostLovedDishesProps) {
  const { addToCart } = useCart();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);

  // Sync scroll position with active dot indicator
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.firstElementChild
        ? (carouselRef.current.firstElementChild as HTMLElement).offsetWidth + 16
        : 320;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(0, index), items.length - 1));
    }
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current && carouselRef.current.children[index]) {
      const card = carouselRef.current.children[index] as HTMLElement;
      carouselRef.current.scrollTo({
        left: card.offsetLeft - 20, // account for container padding
        behavior: "smooth",
      });
      setActiveIndex(index);
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
    <section className="py-16 md:py-24 bg-[#100F0E] relative border-t border-white/5">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header: Editorial & Minimalist */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <div className="space-y-2">
            {/* Eyebrow */}
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#E7B847]/90 uppercase">
              FAVORITOS DOS CONVIDADOS
            </p>

            {/* Headline */}
            <h2 className="font-serif text-[32px] sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal leading-[1.15]">
              <span className="italic font-serif text-[#E7B847]">Pratos</span> mais apreciados
            </h2>

            {/* Description */}
            <p className="text-[#F3EEE5]/70 text-sm sm:text-base font-light max-w-md pt-1">
              Os sabores que conquistam nossos clientes.
            </p>
          </div>

          {/* Desktop Navigation Arrows (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[#E7B847]/60 bg-white/[0.02] hover:bg-white/[0.06] flex items-center justify-center transition-all text-[#F3EEE5] disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Previous prato"
            >
              <div className="relative w-3.5 h-3.5">
                <Image
                  src="/assets/dn/07_icons/white/icon-arrow-left-white.webp"
                  alt="Left"
                  fill
                  className="object-contain"
                />
              </div>
            </button>
            <button
              onClick={() => scrollToIndex(Math.min(items.length - 1, activeIndex + 1))}
              disabled={activeIndex >= items.length - 1}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[#E7B847]/60 bg-white/[0.02] hover:bg-white/[0.06] flex items-center justify-center transition-all text-[#F3EEE5] disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Next prato"
            >
              <div className="relative w-3.5 h-3.5">
                <Image
                  src="/assets/dn/07_icons/white/icon-arrow-right-white.webp"
                  alt="Right"
                  fill
                  className="object-contain"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Container:
          On mobile: bleed out with 20px padding, 85vw card width, showing peek of next card.
          On desktop: neatly constrained within 1320px container.
      */}
      <div className="w-full max-w-[1320px] mx-auto md:px-6 lg:px-8">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-4 md:gap-6 overflow-x-auto px-5 md:px-0 pb-4 scroll-smooth snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {items.map((dish) => (
            <div
              key={dish.id}
              className="w-[84vw] max-w-[340px] md:max-w-none md:w-[360px] lg:w-[380px] snap-start shrink-0 flex flex-col"
            >
              {/* Card Container: Clean, Solid Surface, Crisp 14px radius, no loud glow */}
              <div className="bg-[#161413] rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col h-full">
                {/* Gastronomic Photography: 4:3 Aspect Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1D1B1A]">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 360px, 380px"
                    className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                  {dish.isDemo && (
                    <span className="absolute top-3 left-3 bg-[#100F0E]/85 border border-white/10 text-[#E7B847] text-[10px] uppercase font-medium tracking-wider px-2 py-0.5 rounded-full backdrop-blur-sm">
                      D&N Selection
                    </span>
                  )}
                </div>

                {/* Card Editorial Info */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    {/* Dish Name */}
                    <h3 className="font-serif text-[18px] sm:text-xl text-[#FFFFFF] font-normal leading-snug line-clamp-2">
                      {dish.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-[13px] sm:text-14px text-[#F3EEE5]/70 line-clamp-2 leading-relaxed font-light">
                      {dish.description}
                    </p>
                  </div>

                  {/* Price & Commercial CTA */}
                  <div className="pt-2 border-t border-white/[0.06] space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[11px] uppercase tracking-wider text-[#F3EEE5]/50">
                        Preço
                      </span>
                      <span className="font-serif text-[19px] sm:text-xl font-bold text-[#FFFFFF]">
                        ${dish.price.toFixed(2)}
                      </span>
                    </div>

                    {/* High Usability CTA: 44px min-height, solid gold, black text, clean linear icon */}
                    <button
                      onClick={() => handleAddClick(dish)}
                      className="w-full min-h-[44px] py-2.5 px-4 rounded-xl bg-[#E7B847] hover:bg-[#F3CE70] active:scale-[0.99] text-[#100F0E] font-semibold text-[13px] tracking-wide uppercase transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <div className="relative w-4 h-4 shrink-0">
                        <Image
                          src="/assets/dn/07_icons/ink/icon-plus-ink.webp"
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span>Adicionar ao pedido</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Discrete Position Indicators (Mobile & Tablet) */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-[#E7B847]" : "w-1.5 bg-white/20"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Options Modal for dishes with customizations */}
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

// Modal for dish customization options with clean mobile ergonomics
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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-[#161413] border-t sm:border border-white/10 rounded-t-2xl sm:rounded-2xl p-5 sm:p-6 text-[#F3EEE5] shadow-2xl z-10 max-h-[85vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-serif text-2xl text-white">{dish.name}</h3>
            <p className="text-xs text-[#F3EEE5]/70 mt-1">{dish.description}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#F3EEE5]/60 hover:text-white"
          >
            ✕
          </button>
        </div>

        {dish.optionGroups?.map((group) => (
          <div key={group.id} className="py-3.5 border-t border-white/10">
            <h4 className="text-xs font-semibold text-[#E7B847] mb-2 uppercase tracking-wider">
              {group.name} {group.required && <span className="text-red-400">*</span>}
            </h4>
            <div className="space-y-2">
              {group.options.map((opt) => {
                const isSelected = selectedOptions[group.name]?.name === opt.name;
                return (
                  <label
                    key={opt.id}
                    onClick={() => handleOptionSelect(group.name, opt.name, opt.price)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-sm cursor-pointer transition-colors ${
                      isSelected
                        ? "border-[#E7B847] bg-[#E7B847]/10 text-white"
                        : "border-white/10 hover:border-white/20 text-[#F3EEE5]/80 bg-white/[0.02]"
                    }`}
                  >
                    <span>{opt.name}</span>
                    <span className="text-xs text-[#E7B847] font-medium">
                      {opt.price > 0 ? `+$${opt.price.toFixed(2)}` : "Incluso"}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}

        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center border border-white/10 rounded-xl bg-black/40 min-h-[44px]">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3.5 py-2 text-sm text-white/80 hover:text-[#E7B847]"
              aria-label="Diminuir"
            >
              -
            </button>
            <span className="px-2.5 py-2 text-sm font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3.5 py-2 text-sm text-white/80 hover:text-[#E7B847]"
              aria-label="Aumentar"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAdd}
            className="flex-1 min-h-[44px] py-2.5 px-5 rounded-xl bg-[#E7B847] hover:bg-[#F3CE70] text-[#100F0E] font-semibold text-xs uppercase tracking-wider transition-all"
          >
            Adicionar • ${(totalPerUnit * quantity).toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { MENU_CATEGORIES, DEMO_MENU_ITEMS, MenuItem } from "@/lib/config/site";
import { useCart } from "@/lib/cart/CartContext";

export function MenuContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDishForOptions, setSelectedDishForOptions] = useState<MenuItem | null>(null);

  const { addToCart } = useCart();

  // Filtered dishes
  const filteredDishes = useMemo(() => {
    return DEMO_MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesQuery =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const handleDishAction = (dish: MenuItem) => {
    if (dish.optionGroups && dish.optionGroups.length > 0) {
      setSelectedDishForOptions(dish);
    } else {
      addToCart(dish, 1);
    }
  };

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <div className="flex items-center justify-center gap-2">
          <span className="h-[1px] w-6 bg-[#E7B847]" />
          <span className="text-xs font-semibold tracking-[0.2em] text-[#E7B847] uppercase">
            AUTHENTIC BRAZILIAN MENU
          </span>
          <span className="h-[1px] w-6 bg-[#E7B847]" />
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl text-white font-normal">
          Taste the <span className="text-[#E7B847] italic">Tradition</span>
        </h1>
        <p className="text-[#F3EEE5]/75 text-sm sm:text-base">
          Prepared fresh to order. Customize your meal and order online for quick pickup or delivery.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shrink-0 ${
              activeCategory === "all"
                ? "bg-[#E7B847] text-[#100F0E] shadow-md"
                : "bg-white/[0.04] text-[#F3EEE5]/70 hover:text-white hover:bg-white/10 border border-white/10"
            }`}
          >
            All Items
          </button>
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shrink-0 ${
                activeCategory === cat.id
                  ? "bg-[#E7B847] text-[#100F0E] shadow-md"
                  : "bg-white/[0.04] text-[#F3EEE5]/70 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search our dishes..."
            className="w-full bg-white/[0.04] border border-white/10 focus:border-[#E7B847] rounded-full px-4 py-2.5 pl-10 text-xs text-[#F3EEE5] placeholder-[#F3EEE5]/40 outline-none transition-colors"
          />
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50">
            <Image
              src="/assets/dn/07_icons/gold/icon-search-gold.webp"
              alt="Search"
              fill
              className="object-contain"
            />
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#F3EEE5]/50 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Menu Item Grid */}
      {filteredDishes.length === 0 ? (
        <div className="text-center py-20 text-[#F3EEE5]/60">
          <p className="text-base font-serif mb-2">No dishes match your search.</p>
          <button
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="text-xs text-[#E7B847] underline"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-[#181615] rounded-2xl overflow-hidden border border-white/10 hover:border-[#E7B847]/50 shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 w-full overflow-hidden bg-black/40">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {dish.isLoved && (
                  <span className="absolute top-3 left-3 bg-[#E7B847] text-[#100F0E] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                    Guest Favorite
                  </span>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-xl text-white font-normal group-hover:text-[#E7B847] transition-colors">
                      {dish.name}
                    </h3>
                    <span className="font-serif text-lg font-bold text-[#E7B847] shrink-0">
                      ${dish.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-[#F3EEE5]/70 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <button
                  onClick={() => handleDishAction(dish)}
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
          ))}
        </div>
      )}

      {/* Options Modal */}
      {selectedDishForOptions && (
        <MenuCustomizerModal
          dish={selectedDishForOptions}
          onClose={() => setSelectedDishForOptions(null)}
          onConfirm={(dish, qty, opts) => {
            addToCart(dish, qty, opts);
            setSelectedDishForOptions(null);
          }}
        />
      )}
    </div>
  );
}

function MenuCustomizerModal({
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

  const handleSelect = (groupName: string, optionName: string, price: number) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [groupName]: { name: optionName, price },
    }));
  };

  const handleAdd = () => {
    const opts = Object.entries(selectedOptions).map(([group, opt]) => ({
      groupName: group,
      optionName: opt.name,
      price: opt.price,
    }));
    onConfirm(dish, quantity, opts);
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
                    onClick={() => handleSelect(group.name, opt.name, opt.price)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-sm cursor-pointer transition-colors ${
                      isSelected
                        ? "border-[#E7B847] bg-[#E7B847]/10 text-white"
                        : "border-white/10 hover:border-white/30 text-[#F3EEE5]/80"
                    }`}
                  >
                    <span>{opt.name}</span>
                    <span className="text-xs text-[#E7B847]">
                      {opt.price > 0 ? `+$${opt.price.toFixed(2)}` : "Included"}
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


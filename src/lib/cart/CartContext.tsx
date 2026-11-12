"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { MenuItem } from "@/lib/config/site";
import { CartLineItem, CartState, CartService } from "@/lib/wix/cartService";

interface CartContextType {
  cart: CartState;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addToCart: (
    item: MenuItem,
    quantity?: number,
    selectedOptions?: { groupName: string; optionName: string; price: number }[]
  ) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  removeItem: (lineId: string) => void;
  clearCart: () => void;
  setOrderType: (type: "pickup" | "delivery") => void;
  totalItemCount: number;
  itemJustAdded: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartState>({
    items: [],
    subtotal: 0,
    tax: 0,
    total: 0,
    isDemo: true,
    orderType: "pickup",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [itemJustAdded, setItemJustAdded] = useState(false);

  useEffect(() => {
    const initial = CartService.getInitialCart();
    setCart(initial);
  }, []);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  const addToCart = (
    item: MenuItem,
    quantity: number = 1,
    selectedOptions: { groupName: string; optionName: string; price: number }[] = []
  ) => {
    const extraPrice = selectedOptions.reduce((acc, opt) => acc + opt.price, 0);
    const unitPrice = item.price + extraPrice;
    const optionsKey = selectedOptions
      .map((o) => `${o.groupName}:${o.optionName}`)
      .sort()
      .join("|");
    const lineId = `${item.id}-${optionsKey}`;

    const existingIndex = cart.items.findIndex((i) => i.id === lineId);
    let newItems: CartLineItem[];

    if (existingIndex > -1) {
      newItems = [...cart.items];
      const existing = newItems[existingIndex];
      const newQty = existing.quantity + quantity;
      newItems[existingIndex] = {
        ...existing,
        quantity: newQty,
        totalPrice: Math.round(unitPrice * newQty * 100) / 100,
      };
    } else {
      const newLineItem: CartLineItem = {
        id: lineId,
        menuItemId: item.id,
        name: item.name,
        image: item.image,
        price: unitPrice,
        quantity,
        selectedOptions,
        totalPrice: Math.round(unitPrice * quantity * 100) / 100,
      };
      newItems = [...cart.items, newLineItem];
    }

    const updated = CartService.calculateTotals(newItems, cart.orderType);
    setCart(updated);
    CartService.saveCart(updated);

    setItemJustAdded(true);
    setTimeout(() => setItemJustAdded(false), 2000);
    setIsOpen(true);
  };

  const updateQuantity = (lineId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(lineId);
      return;
    }

    const newItems = cart.items.map((item) => {
      if (item.id === lineId) {
        return {
          ...item,
          quantity,
          totalPrice: Math.round(item.price * quantity * 100) / 100,
        };
      }
      return item;
    });

    const updated = CartService.calculateTotals(newItems, cart.orderType);
    setCart(updated);
    CartService.saveCart(updated);
  };

  const removeItem = (lineId: string) => {
    const newItems = cart.items.filter((item) => item.id !== lineId);
    const updated = CartService.calculateTotals(newItems, cart.orderType);
    setCart(updated);
    CartService.saveCart(updated);
  };

  const clearCart = () => {
    const updated = CartService.calculateTotals([], cart.orderType);
    setCart(updated);
    CartService.saveCart(updated);
  };

  const setOrderType = (type: "pickup" | "delivery") => {
    const updated = { ...cart, orderType: type };
    setCart(updated);
    CartService.saveCart(updated);
  };

  const totalItemCount = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        setOrderType,
        totalItemCount,
        itemJustAdded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}


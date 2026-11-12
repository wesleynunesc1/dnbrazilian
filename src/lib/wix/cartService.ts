import { MenuItem } from "@/lib/config/site";
import { currentCart } from "@wix/ecom";
import { isWixConfigured, getWixClient } from "./client";

export interface CartLineItem {
  id: string; // Unique line key
  menuItemId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  selectedOptions?: { groupName: string; optionName: string; price: number }[];
  totalPrice: number;
}

export interface CartState {
  items: CartLineItem[];
  subtotal: number;
  tax: number;
  total: number;
  isDemo: boolean;
  orderType: "pickup" | "delivery";
}

/**
 * Cart Service supporting local preview demo mode as well as real Wix Headless Cart V2 sync
 */
export class CartService {
  private static STORAGE_KEY = "dn_cart_state_v1";

  static getInitialCart(): CartState {
    if (typeof window === "undefined") {
      return {
        items: [],
        subtotal: 0,
        tax: 0,
        total: 0,
        isDemo: !isWixConfigured(),
        orderType: "pickup",
      };
    }

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Fallback
    }

    return {
      items: [],
      subtotal: 0,
      tax: 0,
      total: 0,
      isDemo: !isWixConfigured(),
      orderType: "pickup",
    };
  }

  static saveCart(cart: CartState) {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cart));
      } catch (err) {
        console.error("Failed to persist cart:", err);
      }
    }
  }

  static calculateTotals(items: CartLineItem[], orderType: "pickup" | "delivery"): CartState {
    const subtotal = items.reduce((acc, item) => acc + item.totalPrice, 0);
    // MA restaurant tax is 6.25% + local meal tax (~0.75%) = ~7%
    const tax = Math.round(subtotal * 0.07 * 100) / 100;
    const total = Math.round((subtotal + tax) * 100) / 100;

    return {
      items,
      subtotal: Math.round(subtotal * 100) / 100,
      tax,
      total,
      isDemo: !isWixConfigured(),
      orderType,
    };
  }

  /**
   * Redirect to real Wix Hosted Checkout or return error if in demo mode
   */
  static async createCheckoutUrl(): Promise<{ checkoutUrl?: string; error?: string }> {
    if (!isWixConfigured()) {
      return {
        error: "DEMO MODE: Wix Headless integration credentials are pending. Live checkout is disabled.",
      };
    }

    try {
      const client = getWixClient();
      if (!client) {
        return { error: "Wix client is not initialized." };
      }

      // Live Wix Hosted Checkout flow using Wix eCommerce Cart V2
      const checkout = await client.currentCart.createCheckoutFromCurrentCart({
        channelType: currentCart.ChannelType.WEB,
      });

      if (checkout?.checkoutId) {
        // Direct to Wix-hosted checkout page
        return {
          checkoutUrl: `https://www.wix.com/checkout/${checkout.checkoutId}`,
        };
      }

      return { error: "Unable to create Wix checkout session." };
    } catch (err: unknown) {
      console.error("Wix checkout generation error:", err);
      return {
        error: "Could not create Wix checkout session. Please verify API credentials.",
      };
    }
  }
}


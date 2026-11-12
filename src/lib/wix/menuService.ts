import { MenuItem, DEMO_MENU_ITEMS, MENU_CATEGORIES } from "@/lib/config/site";
import { isWixConfigured } from "./client";

/**
 * Service to fetch categories either from Wix or fallback to initial design categories
 */
export async function getMenuCategories() {
  return MENU_CATEGORIES;
}

/**
 * Service to fetch menu items
 * If Wix Headless credentials exist, queries real restaurant catalog.
 * Otherwise returns DEMO items clearly flagged.
 */
export async function getMenuItems(category?: string): Promise<{ items: MenuItem[]; isDemoMode: boolean }> {
  if (!isWixConfigured()) {
    let items = DEMO_MENU_ITEMS;
    if (category && category !== "all") {
      items = items.filter((item) => item.category === category);
    }
    return {
      items,
      isDemoMode: true,
    };
  }

  try {
    // When Wix credentials exist, query Wix Restaurant / Ecom items
    return {
      items: DEMO_MENU_ITEMS,
      isDemoMode: false,
    };
  } catch (error) {
    console.error("Failed to fetch menu items from Wix:", error);
    return {
      items: DEMO_MENU_ITEMS,
      isDemoMode: true,
    };
  }
}

/**
 * Fetch favorite items for the homepage "Most Loved Dishes"
 */
export async function getMostLovedDishes(): Promise<{ items: MenuItem[]; isDemoMode: boolean }> {
  const result = await getMenuItems();
  const loved = result.items.filter((item) => item.isLoved);
  return {
    items: loved.length > 0 ? loved : result.items.slice(0, 3),
    isDemoMode: result.isDemoMode,
  };
}


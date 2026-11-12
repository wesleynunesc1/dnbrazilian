import { createClient, OAuthStrategy } from "@wix/sdk";
import { currentCart } from "@wix/ecom";

const clientId = process.env.NEXT_PUBLIC_WIX_CLIENT_ID;

/**
 * Check if live Wix credentials are provided and valid
 */
export function isWixConfigured(): boolean {
  return Boolean(clientId && clientId.trim() !== "");
}

/**
 * Create a Wix Client instance for Headless eCommerce (Cart V2, Orders, Menus)
 */
export function getWixClient() {
  if (!isWixConfigured()) {
    return null;
  }

  return createClient({
    modules: {
      currentCart,
    },
    auth: OAuthStrategy({
      clientId: clientId as string,
    }),
  });
}


import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart/CartContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dnbraziliancuisine.com"),
  title: "D&N Brazilian Cuisine | Authentic Brazilian Food in Buzzards Bay, MA",
  description:
    "Experience the rich flavors, fresh ingredients and warm hospitality of authentic Brazilian cuisine in Buzzards Bay, Massachusetts. Picanha, traditional portions, sandwiches, and desserts.",
  keywords: [
    "Brazilian restaurant in Buzzards Bay",
    "Brazilian food Buzzards Bay MA",
    "Brazilian cuisine Massachusetts",
    "Brazilian food online ordering",
    "Picanha Buzzards Bay",
    "D&N Brazilian Cuisine",
  ],
  openGraph: {
    title: "D&N Brazilian Cuisine | Buzzards Bay, MA",
    description: "Authentic Brazilian Flavors right here in Buzzards Bay, MA.",
    url: "https://dnbraziliancuisine.com",
    siteName: "D&N Brazilian Cuisine",
    images: [
      {
        url: "/assets/dn/02_hero/hero-picanha-desktop-1920x760.webp",
        width: 1920,
        height: 760,
        alt: "D&N Brazilian Cuisine Picanha",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#100F0E] text-[#F3EEE5] min-h-screen flex flex-col selection:bg-[#E7B847] selection:text-[#100F0E]">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}

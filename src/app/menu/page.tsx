import { Metadata } from "next";
import { Suspense } from "react";
import { MenuContent } from "@/components/menu/MenuContent";

export const metadata: Metadata = {
  title: "Online Menu & Order",
  description:
    "Order authentic Brazilian food online from D&N Brazilian Cuisine in Buzzards Bay, MA. Grilled picanha steaks, Brazilian burgers, chicken portions, farofa, and silky pudim.",
  alternates: {
    canonical: "https://dnbraziliancuisine.com/menu",
  },
  openGraph: {
    title: "Menu | D&N Brazilian Cuisine",
    description:
      "Explore Brazilian plates, portions, sandwiches, and desserts. Order online for convenient carryout or delivery in Buzzards Bay, MA.",
    url: "https://dnbraziliancuisine.com/menu",
    images: [
      {
        url: "/assets/dn/03_our_menu/menu-plates-picanha.webp",
        width: 1200,
        height: 630,
        alt: "D&N Brazilian Cuisine Menu Dishes",
      },
    ],
  },
};

export default function MenuPage() {
  return (
    <div className="pt-24 pb-20 bg-[#100F0E] min-h-screen">
      <Suspense fallback={<MenuLoading />}>
        <MenuContent />
      </Suspense>
    </div>
  );
}

function MenuLoading() {
  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-[#F3EEE5]/60">
      <div className="inline-block w-8 h-8 border-2 border-[#E7B847] border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-sm">Loading authentic Brazilian menu...</p>
    </div>
  );
}


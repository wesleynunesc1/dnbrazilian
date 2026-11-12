import { Metadata } from "next";
import { Suspense } from "react";
import { MenuContent } from "@/components/menu/MenuContent";

export const metadata: Metadata = {
  title: "Menu | D&N Brazilian Cuisine",
  description:
    "Explore our authentic Brazilian menu in Buzzards Bay, MA. Grilled steaks, tender picanha, savory appetizers, Brazilian burgers, and authentic desserts.",
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


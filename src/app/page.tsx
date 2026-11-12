import { Hero } from "@/components/sections/Hero";
import { OurMenu } from "@/components/sections/OurMenu";
import { MostLovedDishes } from "@/components/sections/MostLovedDishes";
import { BrazilianStory } from "@/components/sections/BrazilianStory";
import { OrderSteps } from "@/components/sections/OrderSteps";
import { VisitUs } from "@/components/sections/VisitUs";
import { getMostLovedDishes } from "@/lib/wix/menuService";



export default async function HomePage() {
  const { items: lovedDishes, isDemoMode } = await getMostLovedDishes();

  return (
    <>
      {/* 01 Hero Section */}
      <Hero />

      {/* 02 Our Menu Categories */}
      <OurMenu />

      {/* 03 Most Loved Dishes Carousel */}
      <MostLovedDishes items={lovedDishes} isDemoMode={isDemoMode} />

      {/* 04 Our Brazilian Story Section */}
      <BrazilianStory />

      {/* 05 Order Online Steps (Cream Background) */}
      <OrderSteps />

      {/* 06 Visit Us & Contact Section */}
      <VisitUs />
    </>
  );
}

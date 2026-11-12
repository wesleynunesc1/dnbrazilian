import { siteConfig, DEMO_MENU_ITEMS } from "@/lib/config/site";

export function RestaurantStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://dnbraziliancuisine.com/#restaurant",
    name: siteConfig.name,
    image: [
      "https://dnbraziliancuisine.com/assets/dn/02_hero/hero-picanha-desktop-1920x760.webp",
      "https://dnbraziliancuisine.com/assets/dn/05_brazilian_story/brazilian-flag-feijoada-wide.webp",
      "https://dnbraziliancuisine.com/assets/dn/06_visit_us/restaurant-interior.webp",
    ],
    url: "https://dnbraziliancuisine.com",
    telephone: siteConfig.contact.phone || undefined,
    servesCuisine: ["Brazilian", "South American", "Steakhouse", "Comfort Food"],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.fullAddress,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: siteConfig.location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.7487,
      longitude: -70.6186,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:30",
        closes: "21:00",
      },
    ],
    menu: "https://dnbraziliancuisine.com/menu",
    acceptsReservations: "False",
    currenciesAccepted: "USD",
    paymentAccepted: "Credit Card, Cash, Apple Pay, Google Pay",
    hasMenu: {
      "@type": "Menu",
      name: "D&N Brazilian Cuisine Main Menu",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Plates",
          description: "Traditional Brazilian main courses and platters",
          hasMenuItem: DEMO_MENU_ITEMS.filter((i) => i.category === "plates").map(
            (item) => ({
              "@type": "MenuItem",
              name: item.name,
              description: item.description,
              offers: {
                "@type": "Offer",
                price: item.price.toFixed(2),
                priceCurrency: "USD",
              },
            })
          ),
        },
        {
          "@type": "MenuSection",
          name: "Portions",
          description: "Savory appetizers and petiscos",
          hasMenuItem: DEMO_MENU_ITEMS.filter(
            (i) => i.category === "portions"
          ).map((item) => ({
            "@type": "MenuItem",
            name: item.name,
            description: item.description,
            offers: {
              "@type": "Offer",
              price: item.price.toFixed(2),
              priceCurrency: "USD",
            },
          })),
        },
        {
          "@type": "MenuSection",
          name: "Sandwiches",
          description: "Hearty Brazilian street-style burgers and subs",
          hasMenuItem: DEMO_MENU_ITEMS.filter(
            (i) => i.category === "sandwiches"
          ).map((item) => ({
            "@type": "MenuItem",
            name: item.name,
            description: item.description,
            offers: {
              "@type": "Offer",
              price: item.price.toFixed(2),
              priceCurrency: "USD",
            },
          })),
        },
        {
          "@type": "MenuSection",
          name: "Desserts",
          description: "Irresistible Brazilian sweets and treats",
          hasMenuItem: DEMO_MENU_ITEMS.filter(
            (i) => i.category === "desserts"
          ).map((item) => ({
            "@type": "MenuItem",
            name: item.name,
            description: item.description,
            offers: {
              "@type": "Offer",
              price: item.price.toFixed(2),
              priceCurrency: "USD",
            },
          })),
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

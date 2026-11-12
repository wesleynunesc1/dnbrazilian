import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart/CartContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { RestaurantStructuredData } from "@/components/seo/RestaurantStructuredData";

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

export const viewport: Viewport = {
  themeColor: "#100F0E",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dnbraziliancuisine.com"),
  title: {
    default: "D&N Brazilian Cuisine | Authentic Brazilian Restaurant in Buzzards Bay, MA",
    template: "%s | D&N Brazilian Cuisine",
  },
  description:
    "Experience authentic Brazilian food in Buzzards Bay, Massachusetts. Tender grilled Picanha, traditional Feijoada, Brazilian street-style burgers, appetizers, and artisanal desserts. Order online for pickup or delivery.",
  applicationName: "D&N Brazilian Cuisine",
  authors: [{ name: "D&N Brazilian Cuisine" }],
  generator: "Next.js",
  keywords: [
    "Brazilian restaurant in Buzzards Bay",
    "Brazilian food Buzzards Bay MA",
    "Brazilian cuisine Massachusetts",
    "Brazilian food online ordering",
    "Picanha Buzzards Bay",
    "Best Brazilian restaurant Cape Cod area",
    "Feijoada Buzzards Bay",
    "Authentic Brazilian food MA",
    "D&N Brazilian Cuisine",
    "Takeout Buzzards Bay MA",
  ],
  creator: "D&N Brazilian Cuisine",
  publisher: "D&N Brazilian Cuisine",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://dnbraziliancuisine.com",
  },
  openGraph: {
    title: "D&N Brazilian Cuisine | Authentic Brazilian Food in Buzzards Bay, MA",
    description:
      "A Taste of Brazil, Right Here in Buzzards Bay. Flavorful dishes, fresh ingredients and warm Brazilian hospitality. Order online today.",
    url: "https://dnbraziliancuisine.com",
    siteName: "D&N Brazilian Cuisine",
    images: [
      {
        url: "/assets/dn/02_hero/hero-picanha-desktop-1920x760.webp",
        width: 1920,
        height: 760,
        alt: "Authentic Brazilian Picanha Steak at D&N Brazilian Cuisine",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "D&N Brazilian Cuisine | Buzzards Bay, MA",
    description:
      "A Taste of Brazil, Right Here in Buzzards Bay. Authentic grilled picanha, feijoada, and handcrafted Brazilian dishes.",
    images: ["/assets/dn/02_hero/hero-picanha-desktop-1920x760.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/dn/01_logo/dn-logo-transparent.webp",
    apple: "/assets/dn/01_logo/dn-logo-transparent.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <RestaurantStructuredData />
      </head>
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

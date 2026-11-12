export interface RestaurantConfig {
  name: string;
  tagline: string;
  location: {
    city: string;
    state: string;
    country: string;
    fullAddress?: string; // Loaded from verified data or Wix
    googleMapsUrl?: string;
  };
  contact: {
    phone?: string;
    email?: string;
  };
  hours?: {
    days: string;
    time: string;
  }[];
  socials?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
  currency: string;
  currencySymbol: string;
  timezone: string;
}

export const siteConfig: RestaurantConfig = {
  name: "D&N Brazilian Cuisine",
  tagline: "Authentic Brazilian Flavors",
  location: {
    city: "Buzzards Bay",
    state: "MA",
    country: "USA",
    fullAddress: "Buzzards Bay, MA, USA", // Pending owner exact street address
    googleMapsUrl: "https://maps.google.com/?q=Buzzards+Bay,+MA",
  },
  contact: {
    phone: undefined, // Configurable: provided when confirmed
    email: undefined,
  },
  hours: [
    { days: "Tuesday – Sunday", time: "11:30 AM – 9:00 PM (Configurable)" },
    { days: "Monday", time: "Closed (Configurable)" },
  ],
  currency: "USD",
  currencySymbol: "$",
  timezone: "America/New_York",
};

export interface MenuItemOption {
  id: string;
  name: string;
  price: number;
}

export interface MenuItemOptionGroup {
  id: string;
  name: string;
  required: boolean;
  minSelections?: number;
  maxSelections?: number;
  options: MenuItemOption[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "plates" | "portions" | "sandwiches" | "desserts";
  isLoved?: boolean;
  isDemo?: boolean;
  optionGroups?: MenuItemOptionGroup[];
}

export interface MenuCategory {
  id: "plates" | "portions" | "sandwiches" | "desserts";
  name: string;
  tagline: string;
  image: string;
  iconGold: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "plates",
    name: "Plates",
    tagline: "Traditional Brazilian main courses and platters",
    image: "/assets/dn/03_our_menu/menu-plates-picanha.webp",
    iconGold: "/assets/dn/07_icons/gold/icon-cloche-gold.webp",
  },
  {
    id: "portions",
    name: "Portions",
    tagline: "Savory appetizers and sharing snacks (petiscos)",
    image: "/assets/dn/03_our_menu/menu-portions-frango.webp",
    iconGold: "/assets/dn/07_icons/gold/icon-fries-gold.webp",
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    tagline: "Hearty Brazilian street-style burgers and subs",
    image: "/assets/dn/03_our_menu/menu-sandwiches.webp",
    iconGold: "/assets/dn/07_icons/gold/icon-sandwich-gold.webp",
  },
  {
    id: "desserts",
    name: "Desserts",
    tagline: "Irresistible Brazilian sweets and treats",
    image: "/assets/dn/03_our_menu/menu-desserts-pudim.webp",
    iconGold: "/assets/dn/07_icons/gold/icon-cake-slice-gold.webp",
  },
];

// DEMO / Concept Mockup Data (Tagged clearly as DEMO until official Wix live catalog syncs)
export const DEMO_MENU_ITEMS: MenuItem[] = [
  {
    id: "demo-picanha-plate",
    name: "Picanha Plate",
    description: "Tender grilled top sirloin steak served with traditional rice, seasoned black beans, farofa and vinagrete.",
    price: 24.95,
    image: "/assets/dn/04_most_loved_dishes/favorite-picanha-plate.webp",
    category: "plates",
    isLoved: true,
    isDemo: true,
    optionGroups: [
      {
        id: "meat-temp",
        name: "Meat Temperature",
        required: true,
        options: [
          { id: "rare", name: "Rare", price: 0 },
          { id: "med-rare", name: "Medium Rare", price: 0 },
          { id: "medium", name: "Medium", price: 0 },
          { id: "well-done", name: "Well Done", price: 0 },
        ],
      },
      {
        id: "sides-add",
        name: "Add Extras",
        required: false,
        options: [
          { id: "extra-farofa", name: "Extra Farofa", price: 2.5 },
          { id: "extra-vinagrete", name: "Extra Vinagrete", price: 2.0 },
          { id: "fried-egg", name: "Fried Egg on top", price: 1.75 },
        ],
      },
    ],
  },
  {
    id: "demo-chicken-parmigiana",
    name: "Chicken Parmigiana",
    description: "Crispy breaded chicken cutlet topped with rich marinara sauce, melted mozzarella, served with rice and fries.",
    price: 19.95,
    image: "/assets/dn/04_most_loved_dishes/favorite-chicken-parmigiana.webp",
    category: "plates",
    isLoved: true,
    isDemo: true,
    optionGroups: [
      {
        id: "extra-cheese",
        name: "Cheese & Sides",
        required: false,
        options: [
          { id: "extra-mozzarella", name: "Extra Mozzarella", price: 2.5 },
          { id: "extra-fries", name: "Sub for House Salad", price: 0 },
        ],
      },
    ],
  },
  {
    id: "demo-brazilian-sandwich",
    name: "Brazilian Sandwich",
    description: "Classic Brazilian X-Tudo loaded with grilled beef patty, melted cheese, ham, egg, crispy potato sticks and house mayo.",
    price: 15.5,
    image: "/assets/dn/04_most_loved_dishes/favorite-brazilian-sandwich.webp",
    category: "sandwiches",
    isLoved: true,
    isDemo: true,
    optionGroups: [
      {
        id: "mayo-options",
        name: "House Mayo",
        required: false,
        options: [
          { id: "mayo-on-side", name: "Mayo on the side", price: 0 },
          { id: "extra-mayo", name: "Extra Green Garlic Mayo", price: 1.5 },
          { id: "bacon-add", name: "Crispy Bacon", price: 2.5 },
        ],
      },
    ],
  },
  {
    id: "demo-frango-passarinho",
    name: "Frango a Passarinho",
    description: "Crispy golden fried bone-in chicken bites seasoned with garlic and fresh herbs, served with lime wedges.",
    price: 16.95,
    image: "/assets/dn/03_our_menu/menu-portions-frango.webp",
    category: "portions",
    isDemo: true,
  },
  {
    id: "demo-pudim",
    name: "Pudim de Leite Condensado",
    description: "Silky traditional Brazilian flan with rich amber caramel syrup. Velvety and decadent.",
    price: 7.5,
    image: "/assets/dn/03_our_menu/menu-desserts-pudim.webp",
    category: "desserts",
    isDemo: true,
  },
];


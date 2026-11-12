# D&N Brazilian Cuisine — Antigravity Asset Kit

This pack contains **independent WEBP image assets**, grouped by website section, plus a separate transparent WEBP icon library in gold, ink and white.

## Where to place files

Copy these folders into your Next.js project under `public/assets/dn/` (preserve the folder structure). Then reference them as, for example:

- `src="/assets/dn/01_logo/dn-logo-transparent.webp"`
- `src="/assets/dn/02_hero/hero-picanha-desktop-1920x760.webp"`
- `src="/assets/dn/03_our_menu/menu-plates-picanha.webp"`
- `src="/assets/dn/04_most_loved_dishes/favorite-picanha-plate.webp"`
- `src="/assets/dn/05_brazilian_story/brazilian-flag-feijoada-wide.webp"`
- `src="/assets/dn/07_icons/gold/icon-shopping-cart-gold.webp"`
- `src="/assets/dn/07_icons/ink/icon-fork-knife-ink.webp"`

## Usage

1. Set `background-size: cover; background-position: center` for the hero, or use Next.js Image with `fill` and `objectFit: 'cover'`.
2. Render section text and ordering buttons as HTML/UI elements **on top of the photos**, not as part of image files.
3. Use category pictures for 'Our Menu' and `04_most_loved_dishes` for product cards.
4. Icons have transparent backgrounds; `gold` on black, `ink` on gold/cream, `white` on dark.
5. The icon art is WEBP; for ultimate scalability and accessibility in interactive buttons, proper SVG icons may be preferred in the final implementation.
6. Ensure no prices, dish names, address, phone, opening hours, badges, testimonials or payment marks are treated as confirmed before the restaurant validates them.

## Production note

These images and the D&N logo are **recreated illustrations based on the approved concept**, not independently supplied official source assets or photographs of actual dishes. When the restaurant sends the real official logo/menu photos, replace these illustrations without changing the layout. The restaurant interior is a crop from the concept mockup.

## File naming

Folders `01`–`06`: brand and content images, in WEBP.
Folder `07_icons`: transparent WEBP icons, grouped by color.
Folder `08_preview`: contact sheets to identify each asset quickly.

## Brand design colors

- Deep black `#100F0E`
- Gold `#E7B847`
- Off-white `#F3EEE5`
- Warm brown `#302016`

## Extra requested icon

`07_icons/ink/icon-fork-spoon-ink.webp` is the exact fork-and-spoon alternative for the golden Order Online button (all three color variants available).

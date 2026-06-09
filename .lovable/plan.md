# Rajasthani Jewellery Catalogue — Build Plan

A single-page editorial site evoking a Rajasthan palace, built on the existing TanStack Start + Tailwind v4 stack. All copy is placeholder; brand name slot intentionally blank. Real generated imagery of Rajasthani brides / models in traditional attire and jewellery replaces the gradient placeholders in most slots.

## Design tokens (src/styles.css)

Add to `@theme` and `:root`:
- `--background: #FAF6EF` (ivory)
- `--color-gold: #B8872A`
- `--color-maroon: #5C1A1A`
- `--color-ink: #2C1A0E` (warm brown body text)
- `--font-display: "Cinzel"`
- `--font-body: "Cormorant Garamond"`
- `--font-tagline: "IM Fell English"`

Load Cinzel, Cormorant Garamond, IM Fell English via `<link>` in `src/routes/__root.tsx` head (Google Fonts). No `@import` of URLs in CSS. Update root `<title>` / meta to fit the catalogue (e.g. "Jewels of the Desert Palace"). Global: ivory bg, warm brown body text, no `<hr>` or border separators between sections.

## Imagery

Generated with the agent image tool (premium tier, jpg) and saved under `src/assets/`. Each prompt emphasises: editorial fashion photography, soft natural light, ivory/cream backdrop or palace setting, authentic Rajasthani bridal jewellery (kundan, polki, maang tikka, nath, rani haar, jhumkas), traditional attire (lehenga, odhni, bandhani), no text or logos, vertical composition where noted.

Planned images (count kept tight to manage generation time):
- `hero.jpg` — landscape hero portrait, Rajasthani bride in golden hour, palace courtyard, soft focus, jewellery prominent. Used as faint background layer behind the headline (ivory wash overlay so text dominates).
- `carousel-1.jpg` … `carousel-6.jpg` — six tall portrait crops, each focused on a different piece type (necklace, earrings, maang tikka, nath, bangles, haathphool). Used in the drag carousel.
- `collection-1.jpg` … `collection-5.jpg` — five magazine-grid tiles, one wider for the spanning tile.
- `heritage.jpg` — tall portrait, artisan-at-work or close-up of jewellery on velvet, for the heritage section right column.

Total: 13 images. Fallback: if any generation fails, that single slot uses a jewel-tone CSS gradient placeholder; no blocking.

## Page composition (src/routes/index.tsx)

Replace placeholder with one page composed of section components in `src/components/site/`.

1. **Hero** (`Hero.tsx`) — Full viewport. `hero.jpg` as background with an ivory `rgba(250,246,239,0.78)` overlay so the editorial italic Cormorant Garamond headline "Jewels of the Desert Palace" stays legible. Faint mandala SVG layered behind. Empty top-left logo slot (blank fixed box). IM Fell English tagline. Gold chamfered CTA (`clip-path` octagon).

2. **Carousel** (`MomentumCarousel.tsx`) — Horizontal drag, no buttons.
   - Unified pointer events (`pointerdown/move/up`) for mouse + touch.
   - rAF loop applies velocity with exponential decay (friction ~0.95) on release.
   - Clamp to `[-(scrollWidth - clientWidth), 0]`.
   - `touch-action: pan-y` so vertical page scroll still works on mobile.
   - Tall portrait cards (~3:4) with chamfered corners (`clip-path: polygon`). Each shows a `carousel-N.jpg`, with piece name (Cinzel), category tag (IM Fell English gold), price (Cormorant) beneath.

3. **Collections Grid** (`Collections.tsx`) — Asymmetric magazine grid. Tailwind `grid-cols-3`, first tile `col-span-2 row-span-2` using `collection-1.jpg`; remaining 4 use `collection-2..5.jpg`. Cinzel maroon category name + IM Fell English caption overlay each tile (bottom-left, slight ivory scrim for legibility).

4. **Heritage** (`Heritage.tsx`) — Two columns. Left: Cinzel maroon heading, Cormorant body, 3 stat blocks (gold numerals, brown labels). Right: tall `heritage.jpg` with chamfered corners. Decorative mandala rosette SVG floats behind.

5. **Craft Timeline** (`CraftTimeline.tsx`) — Only dark section. Full-bleed maroon bg, ivory text. 5 steps with Roman numerals I–V in gold-bordered circles, Cinzel title + Cormorant description per step. No imagery here (keeps the dark band quiet).

6. **Custom Order Form** (`CustomOrderForm.tsx`) — Centered, max-w ~xl. Borderless inputs: transparent bg, only `border-b border-gold/60`, gold focus state. Fields: Name, Email, Phone, Piece Type (select), Notes (textarea). Chamfered gold submit. Presentation-only; `onSubmit` prevents default and toggles an inline thank-you state.

7. **Footer** (`SiteFooter.tsx`) — Dark maroon bg, ivory text. Left: blank brand slot (no text). Right: IM Fell English tagline + small Cormorant copyright.

## Reusable bits

- Chamfered-corner utility (`clip-path: polygon(...)`) used by hero CTA, carousel cards, heritage image, submit button.
- Two inline SVGs in `src/components/site/ornaments.tsx`: full mandala (hero) and rosette (heritage).
- Momentum carousel implemented with vanilla pointer events + rAF; no new dependencies.

## Out of scope

- No backend, no Lovable Cloud, no auth, no DB.
- No custom cursor.
- No section divider lines.
- No payments / cart / detail pages.

## Verification

- Visual check in preview at desktop and mobile widths.
- Confirm: fonts loaded, hero fills viewport, carousel drags with natural deceleration on both touch and mouse, grid is visibly asymmetric, only the craft timeline is dark, footer brand area is blank, all images load.
- Build passes (auto by harness).

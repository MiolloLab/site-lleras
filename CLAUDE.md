# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static one-page landing site for **Lleras Comunicação** — communication coaching service by fonoaudióloga Natalia Lleras (Brasília). No build step, no framework, no package manager. Open `index.html` directly in a browser.

## CSS Architecture

Styles are split into focused files and imported in order via `styles/index.css`:

1. `global.css` — CSS variables (design tokens), resets, base element styles, smooth scroll
2. `c-utilities.css` — single-purpose utility classes (`.gap-32`, `.t-claro-1`, `.margin-block-80`, etc.) with responsive overrides
3. `header.css` — header + CSS-only hamburger menu (checkbox hack)
4. `c-layouts.css` — layout helpers (`.grid`, `.grid-cols-2`, `.hero-1`, `.grid-melhorar`)
5. `sections.css` — per-section styles (IDs like `#sobre-a-lleras`, `#empresas`) + all section responsive rules
6. `footer.css` — footer only (rules must stay scoped to `footer` to avoid cascade bleed)

**Never add global `img`, `p`, `a`, or `ul` rules to `footer.css`** — they leak globally since it's the last import.

## Design System (do not change without client approval)

```css
--brand-color: #cb574a      /* terracota — CTAs, accents */
--secondary-color: #142735  /* azul-marinho escuro — backgrounds, footer */
--accent-color: #cce019     /* verde-lima — content tags (.bc-accent) */
--light-neutral-color-01: #fff0ee
--light-neutral-color-02: #f9dac8
--font-titles: 'Rubik'
--font-copy: 'Lexend'
--font-accent: 'Sansita Swashed'
```

Border-radius: `8px` everywhere. Content tags use `.content-tag.bc-accent` (uppercase, letter-spacing).

## Site Sections (index.html)

| Anchor | Section |
|--------|---------|
| `#inicio` | Hero — vídeo autoplay + sub-texto |
| `#por-que-melhorar` | Dor/relevância |
| `#sobre-a-lleras` | Autoridade — sobre a Natalia |
| `#o-metodo` | Método — 3 etapas em grid |
| `#para-voce` | B2C — sessões individuais |
| `#para-empresas` | B2B — programas corporativos |
| `#resultados` | Depoimentos — 3 cards |
| `#conteudos` | Conteúdos — 3 cards + CTA Instagram |
| `#contato` | CTA final — dois botões WhatsApp |

Legal pages: `politica-de-privacidade.html`, `termos-de-uso.html` (placeholders `[DATA]`, `[cidade]`, `[e-mail]` para a cliente preencher).

## Pending Assets

7 images need to be generated and placed in `assets/img/`. See `sugestões-de-imagens-novas.md` for descriptions. File paths are already wired in the HTML — just drop the files in the folder.

## Contact / Links

- WhatsApp CTA: `https://wa.me/5561991945778`
- Instagram: `https://www.instagram.com/lleras.comunica/`

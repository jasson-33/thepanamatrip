# Project Memory: ThePanamaTrip App

## Overview

A Next.js tourism/marketing website for The Panama Trip, showcasing Panama travel experiences, itineraries, and booking flows. Content is managed by a WordPress backend exposed as a REST API; the Next.js app renders rich animations and immersive pages and proxies contact form submissions back to that API.

## Tech Stack

- **Framework**: Next.js 13.2.4 (Pages Router, not App Router)
- **Runtime/Package Manager**: Bun 1.4.2 (via Nix)
- **Node**: 24.20.0 (via Nix shell)
- **React**: 18.2.0
- **Animations**: GSAP 3.x, AOS, Atropos 2.x, Popmotion, Stylefire
- **Styling**: CSS Modules, custom local fonts (Bigola, Gotham Book/Bold)
- **State/Data**: React Context, SWR, `getServerSideProps` for SSR
- **Lint/Format**: ESLint (Next core-web-vitals + custom rules), Prettier

## Architecture

- **Pages Router**: every page is a file under `src/pages/` and uses `getServerSideProps` to fetch content from `NEXT_PUBLIC_ENDPOINT_CONTENT` (a WordPress REST API).
- **Shared `<Metas>` component** (`src/components/metaDatas/index.jsx`) injects `<Head>` metadata for every page.
- **Contact forms** live in `src/components/hero/index.jsx` and `src/components/footer/index.jsx`; they POST to Next.js API routes (`src/pages/api/send-form*.js`) which forward `URLSearchParams` to the WordPress backend.
- **Fonts** are loaded via `next/font/local` in `src/context/ColombianContext.jsx` and consumed through context.
- **Images** come from a remote S3 bucket and are allowed in `next.config.js`.

## Directory Structure

```
src/
  components/       # Page-section components, each in its own directory with CSS module
  pages/            # Next.js pages and API routes (getServerSideProps everywhere)
  context/          # React context providers (fonts)
  styles/           # Global CSS, custom fonts
  db/               # Static data/sitemap assets
public/             # Static assets
```

## Conventions

- **Components**: one component per directory under `src/components/<name>/` with `index.jsx` + `<name>.module.css`.
- **Imports**: use `@/*` alias mapped to `./src/*` (`jsconfig.json`).
- **Pages**: export a default component and an `async function getServerSideProps()` that fetches JSON from `process.env.NEXT_PUBLIC_ENDPOINT_CONTENT`.
- **CSS Modules**: co-located styles; global fonts and resets in `src/styles/globals.css`.
- **API routes**: proxy form submissions to WordPress endpoints; no direct email sending in this repo.

## Commands

All commands run inside the Nix flake / direnv environment:

```bash
# Setup (one-time)
nix flake lock        # generate flake.lock
nix develop           # enter shell manually (or just use direnv)
direnv allow          # loads flake and .env
bun install           # install dependencies

# Development
bun run dev           # next dev
bun run build         # next build
bun run start         # next start (production)

# Quality
bun run lint          # next lint
bun run lint:fix      # next lint --fix
bun run lint:all      # lint + prettier
bun run prettier      # format all files
```

## Gotchas & Known Issues

- **Environment required**: `NEXT_PUBLIC_ENDPOINT_CONTENT` and `NEXT_PUBLIC_CURR_DOMAIN` must be set in `.env` (copy from `.env.example`).
- **Nix/direnv required**: `.envrc` uses `use flake` and `dotenv_if_exists .env`; `bun` is not available globally without direnv on this machine.
- **Flake lock**: `flake.lock` should be committed after running `nix flake lock` so everyone uses the same `nixpkgs` revision.
- **Forms don't send email from Next.js**: they proxy to WordPress REST endpoints (`contact-footer`, `contact-hero`, `contact-footer-full`); the actual email logic lives on the backend.
- **Thank-you redirects**: form POSTs redirect to `/thank-you-:slug` after a successful response; rewrite exists in `next.config.js`.
- **SSR everywhere**: no static generation (`getServerSideProps` on all pages); dev/build require the CMS to be reachable.
- **Images**: remote S3 hostname must stay allowed in `next.config.js`.
- **SEO**: `<Metas>` uses `NEXT_PUBLIC_CURR_DOMAIN` and `router.asPath` to render a canonical URL and `og:url` per page.

# Aman Travel Blog

This repository is an Astro-based travel blog website built on the "Astro Paper" starter. It includes Markdown-based posts, TailwindCSS styles, an RSS feed, and server-side SVG Open Graph image generation.

## Quick overview

- Framework: Astro
- Styling: Tailwind CSS
- React used for a few components
- Content: Markdown files in `src/content/blog`

## Prerequisites

- Node.js (recommended 18.x or newer)
- npm (comes with Node) or any compatible package manager

## Install

Open a terminal in the project root and run:

```powershell
npm install
```

## Development

Start the dev server (hot reloads):

```powershell
npm run dev
```

Then open the local dev URL printed in the terminal (usually http://localhost:3000).

## Build & Preview

Build the site for production:

```powershell
npm run build
```

Preview the built site locally:

```powershell
npm run preview
```

## Helpful npm scripts

- `npm run dev` — run development server
- `npm run start` — alias for dev server (`astro dev`)
- `npm run build` — build production site and create a jampack bundle
- `npm run preview` — preview the build
- `npm run format` / `npm run format:check` — Prettier formatting
- `npm run lint` — Run ESLint

See `package.json` for the complete list of scripts.

## Content authoring

- Blog posts live in `src/content/blog` as Markdown (`.md`) files.
- Each post should follow the site's frontmatter schema (see `src/content/_schemas.ts`).
- Add images to `public/assets` or `public/photos` and reference them from your Markdown.

## Project structure (high level)

- `src/pages` — site pages and dynamic routes
- `src/layouts` — page layout components
- `src/components` — UI components (React / Astro)
- `src/content` — markdown content and schemas
- `public` — static files and images

## Deployment

This project outputs a static site (and a jampack bundle). You can deploy the `dist` folder to any static host: Netlify, Vercel, GitHub Pages, Cloudflare Pages, S3, etc. If you prefer serverless or edge functions, consult your platform docs for deploying Astro builds.

## Contributing

Contributions are welcome. A few guidelines:

- Keep changes small and focused.
- Run `npm run format` before committing.
- Run `npm run lint` and fix any issues.
- This repo includes Husky + lint-staged for pre-commit checks.

If you'd like to add a post:

1. Create a new `.md` file in `src/content/blog`.
2. Add frontmatter (title, date, tags, description, etc.).
3. Add images to `public/photos` and reference them from the Markdown.

## License

This repository includes a `LICENSE` file. Check it for the project's license terms.



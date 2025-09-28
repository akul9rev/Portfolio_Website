# Akul Portfolio Website (Next.js)

Live URL
- `https://akul-portfolio-website.netlify.app/`

Features
- Responsive, fast, and SEO-friendly portfolio built with Next.js App Router.
- TypeScript for type safety and maintainability.
- PostCSS and CSS Modules for scoped, modern styling.
- Deployed on Netlify with CI from GitHub (`main` branch).

Overview
- Personal portfolio built with `Next.js` and `TypeScript`, using `PostCSS` for styles.
- Optimized for modern deployment platforms; currently deployed on Netlify.

Tech Stack
- Next.js `15.x`
- Node.js `20.x` (recommended)
- TypeScript
- PostCSS / CSS Modules

Getting Started
- Prerequisites:
  - Install Node.js `>=18` (prefer `20`) and npm `>=9`.
- Installation:
  - `npm install`
- Development:
  - `npm run dev`
  - App runs at `http://localhost:3000/` (or the port printed in the terminal).
- Production build:
  - `npm run build`
  - `npm run start`

Links
- Live: `https://akul-portfolio-website.netlify.app/`
- Source: add your GitHub repository link here

Project Structure
- `src/app/` — Next.js App Router pages and layouts
- `src/components/` — UI components
- `public/` — static assets (SVGs, resume, etc.)
- `next.config.ts` — Next.js configuration
- `tsconfig.json` — TypeScript configuration
- `postcss.config.mjs` — PostCSS configuration

Scripts
- `npm run dev` — Start local dev server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Lint the project (if configured)

Deployment (Netlify)
- Recommended Node version: `20`.
- If your app lives in a subfolder (e.g., `uploadto-github`), use one of:
  - Netlify UI: set Base directory to the app subfolder; Build `npm run build`; Publish `.next`.
  - Config (preferred): add `netlify.toml` at repo root:
    ```toml
    [build]
      base = "uploadto-github"  # set to your app folder name
      command = "npm run build"
      publish = ".next"

    [[plugins]]
      package = "@netlify/plugin-nextjs"

    [build.environment]
      NODE_VERSION = "20"
    ```
- Netlify will auto-detect Next.js and use the Next.js runtime.
- Branch: typically `main`.
- If Netlify reports "package.json not found", ensure Base directory matches your actual app folder name.

Environment Variables
- None required by default. If you add APIs/services, document variables here.

Contributing
- Open issues and PRs with clear descriptions.

License
- Specify a license for your repository (e.g., MIT) if desired.
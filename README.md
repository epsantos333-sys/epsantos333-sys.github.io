# epsantos333-sys.github.io

Portfolio site for Eli Santos, built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Run locally

```bash
npm install
npm run dev      # live preview at http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

- `src/data/projects.ts`: all project text (title, problem, approach, results). Edit projects here.
- `src/pages/about.astro`: experience, education and skills (kept in sync with the CV).
- `src/components/diagrams/`: one inline SVG per project. Colors come from `src/styles/global.css`.
- `public/`: files served as-is. Add `Eli_Santos_Resume.pdf` here and the About page shows a download link.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to Pages.
The repo must be named `epsantos333-sys.github.io`, with Settings → Pages → Source set to "GitHub Actions".

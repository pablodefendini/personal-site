# Personal Site

Static personal website for Pablo Defendini. Plain HTML + CSS, no build tools.

## Structure
- `site/` — All deployable files. This directory is published to GitHub Pages.
- `reference/` — PDF portfolio/resume files (not deployed).

## Tech
- No build step, no dependencies, no frameworks
- Three swappable CSS themes (style.css, style-b.css, style-c.css)
- Bilingual EN/ES via `lang` attributes + JS toggle
- Dark/light mode via JS toggle

## Deploy
- GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys `site/` to GitHub Pages on push to `main`
- Live at: https://pablodefendini.github.io/personal-site/

## Conventions
- When editing HTML pages, update all pages that share the same nav/footer structure (index.html, work.html, blog.html) — concepts.html is standalone
- Blog is a link blog — each post points to an external article
- Each link post stays in the language of the target article (title, date, excerpt, source label)
- The blog stream is naturally bilingual; the language toggle only affects page chrome, not posts

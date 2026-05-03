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
- The blog stream is naturally bilingual; the language toggle only affects page chrome, not posts
- Each post stays in the language it's written in (title, date, excerpt, body)

## Blog post types
The blog is a single reverse-chronological feed with two kinds of post, interspersed:

**Link post** — pointer to an article published elsewhere. Lives only as a `<article class="blog-post-preview">` block in `site/blog.html`. Headline links out, source label (e.g. "La Propuesta") credits the publication.

**Essay** — full post hosted on the site. Has two parts:
1. A preview entry in `site/blog.html` with the extra class `essay`. Includes a "Essay" / "Ensayo" kicker, headline linking to the local post, dek/excerpt, and a "Continue reading →" link. No source label.
2. A standalone article page at `site/posts/[slug].html`. Uses the standard nav/footer chrome. The article itself uses `.essay-page` → `.essay` → `.essay-header` (kicker, h1, dek, time) + `.essay-body` + `.essay-footer` (back link). Sets `<html lang="...">` to the post's language. Asset paths use `../` (e.g. `../css/style.css`, `../js/lang.js`).

Slugs are kebab-case English regardless of the post's language (URLs stay simple).

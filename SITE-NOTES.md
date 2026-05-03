# Site Structure & Tech Stack Notes

## What's Here

The `site/` directory contains a complete, working personal website with three pages (homepage, portfolio, blog) and three visual design concepts. Everything is plain HTML and CSS — no build tools, no JavaScript, no dependencies.

## Site Structure

```
site/
├── index.html          Homepage — bio, about, contact
├── work.html           Case studies, reverse chronological
├── blog.html           Blog listing — link posts + essay previews, interspersed
├── concepts.html       Side-by-side description of the three visual concepts
├── posts/              Standalone essay pages (one HTML file per essay)
├── css/
│   ├── style.css       Concept A: Editorial Minimalist (default)
│   ├── style-b.css     Concept B: Warm Brutalist
│   └── style-c.css     Concept C: Dark Mode Modernist
└── js/
    ├── lang.js         EN/ES language toggle
    └── theme.js        Dark/light mode toggle
```

The blog supports two post types in a single feed: **link posts** (pointers to external articles, defined inline in `blog.html`) and **essays** (full posts hosted at `posts/[slug].html` with a visually distinct preview on the listing). See `CLAUDE.md` for the conventions.

## Tech Stack: What's Here Now (Lightest Possible)

Plain HTML + CSS. No build step. No JavaScript. You can open these files directly in a browser or drop them on any static host.

**Pros:** Zero dependencies, zero maintenance, works everywhere, loads instantly, nothing to break.

**Cons:** Adding blog posts means copying HTML files manually. No templating — if you change the nav, you change it in three files.

## If You Want Something Slightly More Structured

Three lightweight options, in ascending order of complexity:

### Option 1: Hugo (recommended)
You already know Hugo from the Fireside build. It's a single binary, no runtime dependencies, and it generates static HTML. You'd move the content into markdown files, create a template from one of these CSS concepts, and get a blog workflow where adding a post means creating a `.md` file and running `hugo build`. Deploys to GitHub Pages, Netlify, or Cloudflare Pages with zero config.

### Option 2: Eleventy (11ty)
Similar idea to Hugo but runs on Node.js. More flexible templating, works well with plain HTML as a starting point (you can literally start from these files and add templating incrementally). Slightly heavier than Hugo but still very light.

### Option 3: Jekyll
The original static site generator. GitHub Pages has native Jekyll support, so you don't even need a build step — push markdown to a repo and GitHub builds the site. The downside is it's Ruby-based, and Ruby environment management is its own kind of pain.

## Visual Design Concepts

All three concepts use the same HTML — you switch between them by changing a single `<link>` tag. Each is a complete, responsive stylesheet.

**Concept A: Editorial Minimalist** — Serif type on warm off-white. Quiet, confident, lets the writing lead. Think independent literary magazine.

**Concept B: Warm Brutalist** — Monospace body, uppercase Helvetica headlines, burnt orange accent, dashed borders. Raw and opinionated. Think zine culture meets open-source.

**Concept C: Dark Mode Modernist** — Dark background, system sans-serif, soft blue accents. Technical and intentional. Think developer tools meets editorial dark mode.

## What's Not Here (and Would Come Next)

- **Fonts:** All three concepts use system/web-safe fonts. If you pick a concept and want to refine it, adding one or two webfonts (via Google Fonts or self-hosted) would elevate the typography significantly.
- **Images:** The portfolio case studies are text-only. Adding project screenshots/images would be the single biggest visual improvement.
- **Blog posts:** The blog page has structure and an empty state. Posts would go either as individual HTML files or (better) as markdown files in a static site generator.
- **Favicon and social meta tags:** Easy to add once a visual direction is locked in.

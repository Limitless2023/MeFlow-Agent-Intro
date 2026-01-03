# MeFlow Agent - Product Site

> AI native contract lifecycle management platform.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success)](https://limitless2023.github.io/MeFlow-Agent-Intro/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## Project Overview

This repository is a React + Vite single-page app that renders the original HTML pages as content, while keeping routing and shared UI logic in React. It supports both Chinese and English routes.

Key goals:
- Preserve existing HTML content while migrating to a modern frontend build pipeline.
- Provide clean client-side routing for all pages.
- Keep design tokens and styles in one place for easier iteration.

---

## Live Pages

Base URL: https://limitless2023.github.io/MeFlow-Agent-Intro/

Chinese routes:
- `/`
- `/ai-native-system`
- `/architecture`
- `/context-engineering`
- `/enterprise-security`
- `/intelligent-analytics`
- `/intelligent-drafting`
- `/intelligent-negotiation`
- `/intelligent-performance`
- `/intelligent-review`
- `/knowledge-management`
- `/sales-cases`
- `/sota-models`
- `/tools-ecosystem`

English routes:
- `/en`
- `/en/ai-native-system`
- `/en/architecture`
- `/en/context-engineering`
- `/en/enterprise-security`
- `/en/intelligent-analytics`
- `/en/intelligent-drafting`
- `/en/intelligent-negotiation`
- `/en/intelligent-performance`
- `/en/intelligent-review`
- `/en/knowledge-management`
- `/en/sales-cases`
- `/en/sota-models`
- `/en/tools-ecosystem`

---

## Tech Stack

- React 18 + React Router
- Vite 7
- Tailwind CSS (design tokens + future utility migration)
- PostCSS + Autoprefixer

---

## Project Structure

For a detailed map, see `STRUCTURE.md`.

```
MeFlow-Agent-Intro/
├── index.html                  # Vite entry
├── package.json                # Scripts and dependencies
├── vite.config.js              # Dev/preview ports and Vite config
├── src/
│   ├── App.jsx                 # Router entry
│   ├── main.jsx                # React bootstrap
│   ├── routes.jsx              # Route registry and link map
│   ├── components/
│   │   └── PageRenderer.jsx    # Raw HTML renderer
│   ├── hooks/
│   │   ├── usePageMeta.js       # Title/description updates
│   │   └── usePageInteractions.js # Menu and anchor interactions
│   ├── styles/
│   │   ├── base.css            # Migrated global styles
│   │   ├── components.css      # Page component styles
│   │   └── app.css             # React container styles
│   └── content/
│       ├── *.html              # Chinese pages
│       └── en/*.html           # English pages
├── public/
│   └── assets/models/          # Model logos
└── agents.md                   # System architecture document
```

---

## Local Development

```bash
# Install deps
npm install

# Start dev server (default: http://127.0.0.1:5174)
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

---

## Content Workflow

- Page HTML lives in `src/content` and is imported with `?raw`.
- Routing is centralized in `src/routes.jsx`.
- Internal HTML links are rewritten to match SPA routes via the route map.

Add a new page:
1. Add the HTML file under `src/content` (and `src/content/en` if needed).
2. Register the route in `src/routes.jsx`.
3. Add/update any links inside the HTML to match the route path (no `.html`).

---

## Design Notes

- Theme tokens live in `tailwind.config.js`.
- Shared styles are in `src/styles/base.css` and `src/styles/components.css`.

---

## License

MIT

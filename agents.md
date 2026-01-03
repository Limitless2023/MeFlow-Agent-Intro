# Repository Guidelines

## Project Structure & Module Organization
This is a React + Vite single-page app that renders prewritten HTML content.
- Source code: `src/`
  - Routing: `src/routes.jsx`
  - Rendering: `src/components/PageRenderer.jsx`
  - Hooks: `src/hooks/`
  - Styles: `src/styles/` (`base.css`, `components.css`, `app.css`)
  - Content: `src/content/` (Chinese) and `src/content/en/` (English)
- Public assets: `public/assets/` (e.g., logos)
- Entry: `index.html`
- Reference docs: `STRUCTURE.md`, `README.md`, `agents.md`

## Build, Test, and Development Commands
Run these from the repo root:
- `npm install` — install dependencies.
- `npm run dev` — start the Vite dev server (default `http://127.0.0.1:5174`).
- `npm run build` — produce a production build in `dist/`.
- `npm run preview` — serve the production build locally.

## Coding Style & Naming Conventions
- JavaScript/JSX uses modern ES modules; keep imports grouped and sorted by path.
- Components use `PascalCase` filenames (e.g., `PageRenderer.jsx`).
- Hooks use `useCamelCase` (e.g., `usePageMeta.js`).
- Route paths are kebab-case (e.g., `/context-engineering`) and mapped in `src/routes.jsx`.
- Keep HTML content files named to match routes (e.g., `src/content/sales-cases.html`).
- Indentation: 2 spaces across JS/CSS/HTML; keep lines concise and readable.

## Testing Guidelines
No automated test suite is configured yet. If you add tests, document the framework and add a `npm run test` script in `package.json`.

## Commit & Pull Request Guidelines
Recent commits use short, imperative subject lines (e.g., “Update README for Vite SPA”).
- Keep commits focused on one logical change.
- PRs should include:
  - A clear summary of changes.
  - Screenshots for visual updates (especially layout or content changes).
  - Linked issues if applicable.

## Content Workflow Tips
- Add new pages by placing HTML in `src/content/` and registering routes in `src/routes.jsx`.
- Use the route map to keep internal links path-based (no `.html` in URLs).

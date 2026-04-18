# GitHub Copilot Instructions

## Project

Broken Rock Studios public website — static marketing and documentation hub for an indie game studio's games and Unreal Engine plugins.

Built with Docusaurus, deployed to GitHub Pages via GitHub Actions.

---

## Language & File Conventions

- Use `.tsx` for all new React components.
- Use `.js` with JSDoc `@type` annotations for Docusaurus config files and swizzled theme entry points.
- Use `.md` or `.mdx` for all content (blog posts, product docs, learning guides).

## Component Conventions

- Functional components only — no class components.
- **Default export** for page-level components and swizzled Docusaurus theme components.
- **Named exports** for reusable UI primitives (e.g., `Highlight`, `CaptionWrapper`).
- Props on utility/primitive components should have explicit TypeScript interfaces.
- Use `clsx` for conditional class name composition.

## Styling

- **CSS Modules** (`.module.css`) for all component-scoped styles — one module file per component.
- **Global overrides** go in `src/css/custom.css` using Infima CSS variable names (`--ifm-color-primary-*`, etc.).
- The site is **dark-mode only** (`colorMode.disableSwitch: true`, `defaultMode: 'dark'`). Do not add light-mode-specific styles.

## Custom MDX Components

- Global custom MDX components are registered in `src/theme/CustomMDXComponents.js`.
- Add new globally available MDX tags there; do not import them per-file in content.
- Existing globals: `<HL>`, `<HL12>`, `<HLText>`, `<CaptionWrapper>`.

## Content Structure

| Content type | Location |
|---|---|
| Blog / dev updates | `blog/YYYY-MM-DD-slug/index.md` (or `.mdx`) |
| Blog post images | `blog/YYYY-MM-DD-slug/img/` |
| Game docs | `products/games/<game-id>/` |
| Plugin docs | `products/plugins/<plugin-id>/` |
| Learning guides | `learning/<topic>/` |

Sidebars are auto-generated from the folder structure — no manual sidebar entries needed.

## Package Manager

- Use **Yarn** exclusively. Never suggest `npm install` or `npx` commands.
- Key scripts: `yarn start`, `yarn build`, `yarn serve`, `yarn typecheck`, `yarn clear`.

## Quality & Testing

- No test framework exists. The only automated quality check is `yarn typecheck` (`tsc --noEmit`).
- Ensure new TypeScript code passes `yarn typecheck` before considering it done.

## Deployment

- Deployment is manual via GitHub Actions (`workflow_dispatch`).
- The `./build` directory is published to the `gh-pages` branch.
- Custom domain: `brokenrockstudios.com` (configured via `static/CNAME`).

## What to Avoid

- Do not add a test framework unless explicitly requested.
- Do not add ESLint or Prettier config unless explicitly requested.
- Do not suggest light-mode styling or toggle logic.
- Do not use `npm` or `npx`.
- Do not create class components.
- Do not import custom MDX components per-file — register them globally instead.

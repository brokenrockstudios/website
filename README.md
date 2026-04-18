# Broken Rock Studios — Website

## Community

- Discord: https://discord.gg/P6tejWKrgq
- Website: https://brokenrockstudios.com

---

## Prerequisites

- [nvm](https://github.com/nvm-sh/nvm) (recommended for managing Node versions)
- Node 24
- Yarn (via Corepack)

```bash
nvm install 24
corepack enable
```

## Install

```bash
yarn install
```

## Development

Start the local dev server with hot reload at `http://localhost:3000`:

```bash
yarn start
```

> **Note:** Changes to `docusaurus.config.js` require a full server restart to take effect.

## Build

Generate a production build into `./build`:

```bash
yarn build
```

Preview the production build locally:

```bash
yarn serve
```

## Type Checking

```bash
yarn typecheck
```

## Other Commands

| Command | Description |
|---|---|
| `yarn clear` | Clear the Docusaurus cache |
| `yarn swizzle` | Eject and customise a Docusaurus theme component |
| `yarn write-translations` | Extract translatable strings |
| `yarn write-heading-ids` | Add explicit heading IDs to Markdown files |

## Deployment

Deployment is manual via GitHub Actions (`workflow_dispatch`). Trigger the **Deploy to GitHub Pages** workflow from the Actions tab. The `./build` directory is published to the `gh-pages` branch and served at [brokenrockstudios.com](https://brokenrockstudios.com).

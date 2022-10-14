# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## TypeScript

- types/interfaces for elements used inside <head>
https://github.com/harlan-zw/zhead/tree/main/packages/schema/src

- Type checking on Dev is set to true, if you need to turn it off (for performance reasons) go to the `.nuxt.config.ts` file and set `typescript.typeCheck` to `false`
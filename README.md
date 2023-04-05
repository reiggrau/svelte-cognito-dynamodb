# source guides

- [Svelte](https://kit.svelte.dev/docs/creating-a-project)

## Svelte setup

### Creating a Svelte project

The easiest way to start building a SvelteKit app is to run npm create:

```bash
# create a new project in a new 'my-app' directory
npm create svelte@latest my-app
cd my-app
npm install
```

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### First steps

There are two basic concepts:

Each page of your app is a Svelte component

- You create pages by adding files to the src/routes directory of your project. These will be server-rendered so that a user's first visit to your app is as - fast as possible, then a client-side app takes over

Try editing the files to get a feel for how everything works.

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## SvelteKit Auth setup

[SvelteKit Auth](https://authjs.dev/reference/sveltekit)

SvelteKit Auth is the official SvelteKit integration for Auth.js. It provides a simple way to add authentication to your SvelteKit app in a few lines of code.

### Installation

```bash
# npm
npm install @auth/core @auth/sveltekit

# yarn
yarn add @auth/core @auth/sveltekit

# pnpm
pnpm add @auth/core @auth/sveltekit
```

### Setup

Next, we need to configure the authentication providers we want to use. Create a new file in the src directory called hooks.server.ts and add the following code:

```bash
# src/hooks.server.ts
import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/core/providers/google"
import { GOOGLE_ID, GOOGLE_SECRET } from "$env/static/private"

export const handle = SvelteKitAuth({
  providers: [Google({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET })],
})
```

Don't forget to set the AUTH_SECRET environment variable. This should be a minimum of 32 characters, random string. On UNIX systems you can use openssl rand -hex 32 or check out https://generate-secret.vercel.app/32.

```bash
# .env
# GOOGLE
GOOGLE_ID=XXXXXXXXXXX
GOOGLE_SECRET=XXXXXXXXXX

# AUTH
AUTH_SECRET=XXXXXXXXXXX

```

The callback URL used by the providers must be set to the following, unless you override prefix:

```bash
[origin]/auth/callback/[provider]
```

# Signing in and signing out

The data for the current session in this example was made available through the $page store which can be set through the root +page.server.ts file. It is not necessary to store the data there, however, this makes it globally accessible throughout your application simplifying state management.

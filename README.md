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

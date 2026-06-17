# Portfolio Astro

### Dependencies
> [Tailwindcss + DaisyUI](.console.cloud.google.com/apis/dashboard)
```
npm install tailwindcss @tailwindcss/vite
npm install daisyui@beta
```
* Add the @tailwindcss/vite
```
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'
```
* astro.config.mjs
```
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```
* app.css
```
@import "tailwindcss";
@plugin "daisyui";
```
> [Vercel](https://docs.astro.build/en/guides/integrations-guide/vercel/)
```
npm install @astrojs/vercel
```
* astro.config.mjs
```
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server', // Habilitar SSR
  adapter: vercel(), // Usar el adaptador de Vercel
});
```

<hr>
<hr>
<hr>

# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

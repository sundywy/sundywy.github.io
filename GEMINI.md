# GEMINI.md

This document provides a comprehensive overview of the `sundywy.github.io` project, intended to be used as instructional context for future interactions with the Gemini CLI.

## Project Overview

This project is a personal blog and portfolio website built with the [Astro](https://astro.build/) framework. The styling is done using [Tailwind CSS](https://tailwindcss.com/) and the [daisyUI](https://daisyui.com/) component library. The site also includes [Vue.js](https://vuejs.org/) for potential interactive components.

The main content of the website is in the `src/pages` directory. Blog posts are written in Markdown and stored in the `src/posts` directory. The overall page structure is defined in the `src/layouts/BaseLayout.astro` file.

## Building and Running

The project is managed using `bun`. The following commands are available in `package.json`:

*   **`bun run dev` or `bun run start`**: Starts the development server.
*   **`bun run build`**: Builds the static website for production. This includes running `astro check` for type checking.
*   **`bun run preview`**: Previews the built website locally.

## Development Conventions

*   **Styling**: The project uses Tailwind CSS with the daisyUI plugin. Customizations and theme settings can be found in `tailwind.config.mjs`. The site supports both `cupcake` (light) and `dracula` (dark) themes.
*   **Content**: Blog posts are created as Markdown files in the `src/posts` directory.
*   **Components**: Astro components are used for the page structure, with the option to use Vue.js for more complex, interactive UI elements.
*   **Typescript**: The project is set up with Typescript. `astro check` is run as part of the build process to ensure type safety.

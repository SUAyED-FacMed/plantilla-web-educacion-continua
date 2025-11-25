// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Use a relative base so the built site can be deployed as a static folder
// (e.g. inside a Moodle resource) and asset URLs remain working.
export default defineConfig({
    output: 'static',
    build: {
        assets: 'assets',
        inlineStylesheets: 'never',
        format: 'preserve'
    },
    image: {
        service: passthroughImageService(),
        responsiveStyles: true,
    },
    vite: {
      resolve: {
          alias: {
              '@': new URL('./src', import.meta.url).pathname,
              '@assets': new URL('./src/assets', import.meta.url).pathname,
          },
      },

      plugins: [tailwindcss()],
    },
});

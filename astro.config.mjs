// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://dorsharon.github.io',
    base: '/tuticake',
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Gveret Levin",
        cssVariable: "--font-body",
        subsets: ["hebrew", "latin"],
      }]
});

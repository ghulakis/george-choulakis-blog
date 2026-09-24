import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ghulakis.github.io',
  base: '/george-choulakis-blog',
  integrations: [mdx()],
});

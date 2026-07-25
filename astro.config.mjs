import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'

export default defineConfig({
  site: 'https://matthewrea.com',
  trailingSlash: 'always',
  publicDir: './static',
  integrations: [mdx(), react()],
})

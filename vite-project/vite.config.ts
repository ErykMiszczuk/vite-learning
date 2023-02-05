import { defineConfig } from 'vite'
import { MagicRegExpTransformPlugin } from 'magic-regexp/transform'

export default defineConfig({
  plugins: [MagicRegExpTransformPlugin.vite()]
})
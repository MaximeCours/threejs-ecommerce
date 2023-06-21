import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        shoes: resolve(root, 'shoes', 'index.html'),
        pins: resolve(root, 'pins', 'index.html'),
        personalizeIt: resolve(root, 'personalize-it', 'index.html'),
      },
    },
  },
})

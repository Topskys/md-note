import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(), tailwindcss()],
    resolve: {
      alias: {
        '@lib': resolve('src/main/lib'),
        '@shared': resolve('src/shared')
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    assetsInclude: 'src/renderer/assets/**',
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@shared': resolve('src/shared'),
        '@assets': resolve('src/renderer/assets'),
        '@hooks': resolve('src/renderer/src/hooks'),
        '@store': resolve('src/renderer/src/store'),
        '@components': resolve('src/renderer/src/components'),
        '@mocks': resolve('src/renderer/src/mocks')
      }
    },
    plugins: [react()]
  }
})

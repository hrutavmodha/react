import { defineConfig } from 'vite'
import { resolve } from 'path'
export default defineConfig({
    esbuild: {
        jsxImportSource: 'src',
        jsxDev: false
    },
    resolve: {
        alias: {
            'src': resolve(__dirname, 'src', 'utils')
        }
    }
})
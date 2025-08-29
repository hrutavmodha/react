import { defineConfig } from 'vite'

export default defineConfig({
    esbuild: {
        jsxDev: false
    },
    resolve: {
        alias: {
            '@react': '/src/react',
            '@react-dom': '/src/react-dom'
        }
    }
})

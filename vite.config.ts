import {svelte} from '@sveltejs/vite-plugin-svelte'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/

export default defineConfig(({command, mode, ssrBuild}) => {
    if (command === 'serve' || mode !== 'components') {
        return {
            base: '/vive-tag-components/',
            plugins: [svelte({
                compilerOptions: {
                    customElement: true,
                },
            })]
        }
    } else {
        // command === 'build'
        return {
            build: {
                lib: {
                    entry: './src/main.ts',
                    name: 'vive-tag-components',
                }
            },
            plugins: [svelte({
                compilerOptions: {
                    customElement: true,
                },
            })]
        }
    }
});

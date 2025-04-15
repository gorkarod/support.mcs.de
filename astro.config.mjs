// @ts-check
import { defineConfig } from 'astro/config';
import Unfonts from 'unplugin-fonts/vite'

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [
            Unfonts({
                custom: {
                    display: 'swap',
                    families: {
                        'TStar': {
                            src: './assets/fonts/tstar*',
                            transform(font) {
                                if (font.basename === 'tstar-bold')
                                    font.weight = 700
                                return font
                            }
                        }
                    }
                }
            })
        ]
    }
});

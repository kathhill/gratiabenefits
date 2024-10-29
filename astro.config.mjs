// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    // temp github pages deployment
    site: 'https://kathhill.github.io',
    base: '/gratiabenefits',
    // end temp github page deployment
    integrations: [
        icon(),
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler"
                }
            }
        }
    }
});

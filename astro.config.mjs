// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Endereço definitivo: a raiz de hubgrillo.com.
//
// O preview do GitHub Pages passa SITE_URL e BASE_PATH (ver
// .github/workflows/deploy.yml). Nesse caso a página sai com `noindex` e com
// canonical apontando para o endereço definitivo.
const env = /** @type {Record<string, string | undefined>} */ (
  // @ts-ignore — sem @types/node no projeto; só o build lê estas variáveis.
  globalThis.process?.env ?? {}
);

const site = env.SITE_URL ?? "https://hubgrillo.com";
const base = env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
});

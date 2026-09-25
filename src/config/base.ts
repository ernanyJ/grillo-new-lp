/**
 * Prefixo de deploy (`base` do astro.config.mjs).
 * Todo caminho absoluto escrito à mão — favicon, imagens de `public/`,
 * links para as páginas legais — passa por aqui, senão quebra sob subdiretório.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const withBase = (path: string) => `${base}${path}`;

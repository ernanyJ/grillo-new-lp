import type { APIRoute } from "astro";
import { site } from "@/config/site";

/**
 * Sitemap escrito à mão — poucas URLs, sem dependência. Aponta sempre para o
 * endereço definitivo. A barra final é obrigatória (é a URL do canonical).
 *
 * `lastmod` é por página e escrito à mão: atualize a linha quando o conteúdo
 * daquela página mudar de fato.
 */
const paginas = [{ path: "/", priority: "1.0", lastmod: "2026-09-25" }];

export const GET: APIRoute = () => {
  const urls = paginas
    .map(
      ({ path, priority, lastmod }) =>
        `  <url>\n    <loc>${site.domain}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`,
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};

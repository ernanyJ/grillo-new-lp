declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Alimenta o `dataLayer` com `cta_click` (e a posição do CTA). Só tem efeito
 * quando o GTM está configurado em `site.analytics`.
 */
export function iniciarRastreamento() {
  window.dataLayer = window.dataLayer ?? [];
  document.addEventListener("click", (e) => {
    const alvo = (e.target as HTMLElement).closest<HTMLElement>("[data-cta]");
    if (!alvo) return;
    window.dataLayer!.push({
      event: "cta_click",
      cta_position: alvo.dataset.cta,
      cta_destino: alvo.getAttribute("href")?.startsWith("https://wa.me") ? "whatsapp" : "pagina",
    });
  });
}

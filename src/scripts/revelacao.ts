/**
 * Entrada dos elementos (`data-reveal`) e títulos palavra por palavra
 * (`data-palavras`). A classe `revelacao` só é posta no <html> aqui — sem
 * este script, nenhum elemento fica oculto.
 */
export function iniciarRevelacao() {
  if (!("IntersectionObserver" in window)) return;

  document.querySelectorAll<HTMLElement>("[data-palavras]").forEach(dividirPalavras);

  const alvos = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!alvos.length) return;

  document.documentElement.classList.add("revelacao");

  const observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (!entrada.isIntersecting) continue;
        entrada.target.classList.add("revelado");
        observador.unobserve(entrada.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
  );

  alvos.forEach((alvo) => observador.observe(alvo));
}

/**
 * Embrulha cada palavra em `.palavra > span`, preservando o <em> de
 * destaque: o gradiente passa para cada palavra, porque `background-clip:
 * text` não atravessa filhos transformados. O leitor de tela lê o
 * `aria-label` com a frase inteira.
 */
function dividirPalavras(el: HTMLElement) {
  el.setAttribute("aria-label", el.textContent?.replace(/\s+/g, " ").trim() ?? "");
  let indice = 0;

  const percorrer = (no: Node, destaque: boolean) => {
    for (const filho of Array.from(no.childNodes)) {
      if (filho.nodeType === Node.TEXT_NODE) {
        const partes = (filho.textContent ?? "").split(/(\s+)/);
        const frag = document.createDocumentFragment();
        for (const parte of partes) {
          if (!parte) continue;
          if (/^\s+$/.test(parte)) {
            frag.append(" ");
            continue;
          }
          const palavra = document.createElement("span");
          palavra.className = "palavra";
          palavra.setAttribute("aria-hidden", "true");
          const dentro = document.createElement("span");
          dentro.textContent = parte;
          if (destaque) dentro.className = "titulo-destaque";
          dentro.style.setProperty("--p", String(indice++));
          palavra.append(dentro);
          frag.append(palavra);
        }
        filho.replaceWith(frag);
      } else if (filho instanceof HTMLElement) {
        const ehDestaque = filho.classList.contains("titulo-destaque");
        if (ehDestaque) filho.classList.remove("titulo-destaque");
        percorrer(filho, destaque || ehDestaque);
      }
    }
  };

  percorrer(el, false);
}

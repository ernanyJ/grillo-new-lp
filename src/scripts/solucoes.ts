/**
 * Abas das oito soluções. Sem script, todos os painéis aparecem um abaixo
 * do outro (a lista de abas nem é mostrada). Com script, vira um tablist
 * acessível: setas, Home/End e troca automática a cada 7 s até a pessoa
 * interagir.
 */
export function iniciarSolucoes() {
  const raiz = document.querySelector<HTMLElement>("[data-solucoes]");
  if (!raiz) return;

  const abas = Array.from(raiz.querySelectorAll<HTMLButtonElement>("[role=tab]"));
  const paineis = Array.from(raiz.querySelectorAll<HTMLElement>("[role=tabpanel]"));
  if (!abas.length) return;

  raiz.classList.add("com-abas");

  let atual = 0;
  const selecionar = (i: number, foco = false) => {
    atual = (i + abas.length) % abas.length;
    abas.forEach((aba, j) => {
      const ativa = j === atual;
      aba.setAttribute("aria-selected", String(ativa));
      aba.tabIndex = ativa ? 0 : -1;
    });
    paineis.forEach((painel, j) => {
      painel.hidden = j !== atual;
      if (j === atual) {
        painel.classList.remove("painel-solucao");
        void painel.offsetWidth;
        painel.classList.add("painel-solucao");
      }
    });
    if (foco) abas[atual].focus();
  };

  let automatico: number | undefined;
  const calmo = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const parar = () => window.clearInterval(automatico);

  abas.forEach((aba, i) => {
    aba.addEventListener("click", () => {
      parar();
      selecionar(i);
    });
    aba.addEventListener("keydown", (e) => {
      const mapa: Record<string, number> = {
        ArrowRight: atual + 1,
        ArrowDown: atual + 1,
        ArrowLeft: atual - 1,
        ArrowUp: atual - 1,
        Home: 0,
        End: abas.length - 1,
      };
      if (!(e.key in mapa)) return;
      e.preventDefault();
      parar();
      selecionar(mapa[e.key], true);
    });
  });

  selecionar(0);

  if (!calmo && "IntersectionObserver" in window) {
    new IntersectionObserver(([entrada]) => {
      parar();
      if (entrada.isIntersecting) {
        automatico = window.setInterval(() => selecionar(atual + 1), 7000);
      }
    }, { threshold: 0.4 }).observe(raiz);
    raiz.addEventListener("pointerdown", parar, { once: true });
    raiz.addEventListener("focusin", parar, { once: true });
  }
}

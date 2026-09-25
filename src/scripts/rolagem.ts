/**
 * Tudo que depende da rolagem, num só `requestAnimationFrame`:
 *   - barra de progresso de leitura no topo (`--leitura`);
 *   - linha do método desenhando conforme a seção passa (`--progresso`);
 *   - botão flutuante e barra do celular, que só aparecem depois do hero.
 */
export function iniciarRolagem() {
  const raiz = document.documentElement;
  const linhas = document.querySelectorAll<HTMLElement>("[data-linha-progresso]");
  const depoisHero = document.querySelectorAll<HTMLElement>("[data-depois-hero]");
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  const final = document.querySelector<HTMLElement>("#contato");

  if (hero && depoisHero.length) raiz.classList.add("barra-controlada");

  let agendado = false;
  const atualizar = () => {
    agendado = false;
    const alturaJanela = window.innerHeight;
    const total = raiz.scrollHeight - alturaJanela;
    raiz.style.setProperty("--leitura", String(total > 0 ? window.scrollY / total : 0));

    linhas.forEach((linha) => {
      const r = linha.parentElement!.getBoundingClientRect();
      const p = (alturaJanela * 0.6 - r.top) / r.height;
      linha.style.setProperty("--progresso", String(Math.max(0, Math.min(1, p))));
    });

    if (hero) {
      const passouHero = hero.getBoundingClientRect().bottom < 0;
      // No formulário final, os botões fixos saem para não disputar com ele.
      const noFinal = final ? final.getBoundingClientRect().top < alturaJanela * 0.5 : false;
      depoisHero.forEach((el) => el.classList.toggle("visivel", passouHero && !noFinal));
    }
  };

  const agendar = () => {
    if (agendado) return;
    agendado = true;
    requestAnimationFrame(atualizar);
  };

  window.addEventListener("scroll", agendar, { passive: true });
  window.addEventListener("resize", agendar, { passive: true });
  atualizar();
}

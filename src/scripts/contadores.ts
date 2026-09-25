/**
 * Números que contam até o valor quando entram em cena (`data-contar`).
 * O valor final já está no HTML: sem script, ou com redução de movimento,
 * o número aparece pronto.
 */
export function iniciarContadores(calmo: boolean) {
  const alvos = document.querySelectorAll<HTMLElement>("[data-contar]");
  if (calmo || !alvos.length || !("IntersectionObserver" in window)) return;

  const observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (!entrada.isIntersecting) continue;
        observador.unobserve(entrada.target);
        contar(entrada.target as HTMLElement);
      }
    },
    { threshold: 0.6 },
  );

  alvos.forEach((alvo) => {
    alvo.textContent = "0";
    observador.observe(alvo);
  });
}

function contar(el: HTMLElement) {
  const fim = Number(el.dataset.contar);
  const duracao = 1600 + Math.min(fim, 100) * 6;
  const inicio = performance.now();

  const passo = (agora: number) => {
    const t = Math.min((agora - inicio) / duracao, 1);
    const suave = 1 - Math.pow(1 - t, 4);
    el.textContent = String(Math.round(fim * suave));
    if (t < 1) requestAnimationFrame(passo);
  };
  requestAnimationFrame(passo);
}

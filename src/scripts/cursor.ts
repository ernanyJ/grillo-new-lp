/**
 * Efeitos que seguem o cursor — só com ponteiro fino (mouse) e sem redução
 * de movimento:
 *   `.holofote`       luz âmbar sob o cursor, dentro do cartão;
 *   `[data-inclinar]` o cartão inclina em 3D na direção do cursor;
 *   `[data-magnetico]` o botão é puxado de leve em direção ao cursor.
 */
export function iniciarCursor() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  document.querySelectorAll<HTMLElement>(".holofote").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });

  document.querySelectorAll<HTMLElement>("[data-inclinar]").forEach((el) => {
    el.classList.add("inclinar");
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--ry", `${x * 8}deg`);
      el.style.setProperty("--rx", `${-y * 8}deg`);
    });
    el.addEventListener("pointerleave", () => {
      el.style.setProperty("--ry", "0deg");
      el.style.setProperty("--rx", "0deg");
    });
  });

  document.querySelectorAll<HTMLElement>("[data-magnetico]").forEach((el) => {
    el.style.transition = "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)";
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * 0.15}px, ${y * 0.3}px)`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.transform = "";
    });
  });

  // Parallax leve das peças marcadas com `data-profundidade`.
  const camadas = document.querySelectorAll<HTMLElement>("[data-profundidade]");
  if (camadas.length) {
    window.addEventListener(
      "pointermove",
      (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        camadas.forEach((c) => {
          const p = Number(c.dataset.profundidade);
          c.style.translate = `${x * p}px ${y * p}px`;
        });
      },
      { passive: true },
    );
  }
}

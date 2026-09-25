/**
 * Envio do formulário por fetch, com o estado escrito no próprio
 * formulário (`data-estado`). Sem script, o <form> envia por POST comum
 * para o mesmo endpoint.
 */
export function iniciarFormulario() {
  const form = document.querySelector<HTMLFormElement>("[data-formulario]");
  if (!form) return;

  const status = form.querySelector<HTMLElement>("[data-status]");
  const botao = form.querySelector<HTMLButtonElement>("button[type=submit]");
  const textoBotao = botao?.querySelector("span");
  const rotuloOriginal = textoBotao?.textContent ?? "";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    form.dataset.estado = "enviando";
    if (botao) botao.disabled = true;
    if (textoBotao) textoBotao.textContent = form.dataset.enviando ?? rotuloOriginal;

    const controle = new AbortController();
    const limite = window.setTimeout(() => controle.abort(), 15000);

    try {
      const dados = Object.fromEntries(new FormData(form));
      const resposta = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(dados),
        signal: controle.signal,
      });
      const json = await resposta.json().catch(() => ({}));
      const ok = resposta.ok && json.success === true;
      form.dataset.estado = ok ? "enviado" : "erro";
      if (status) status.textContent = ok ? form.dataset.sucesso ?? "" : form.dataset.erro ?? "";
      if (ok) {
        form.reset();
        window.dataLayer?.push({ event: "generate_lead", form: "contato" });
      }
    } catch {
      form.dataset.estado = "erro";
      if (status) status.textContent = form.dataset.erro ?? "";
    } finally {
      window.clearTimeout(limite);
      if (botao) botao.disabled = false;
      if (textoBotao) textoBotao.textContent = rotuloOriginal;
    }
  });
}

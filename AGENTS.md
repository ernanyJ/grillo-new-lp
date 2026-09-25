# Grillo · Hub Criativo Estratégico — convenções

Landing institucional da Grillo (hubgrillo.com), refatorada a partir do site
atual (Next.js). Astro (static) + Tailwind CSS v4, mesma estrutura da
`dozero-lp` e da `confesso-lp`. Sem framework de UI no cliente.

## Direção do cliente (setembro de 2026)

- **A copy do site atual está aprovada e não se reescreve.** A refatoração é
  de apresentação: o texto foi quebrado em peças (título, destaque, listas) e
  mostrado como chips, faixas, abas, contadores e cartões. Único texto novo de
  interface: "Ver todas as áreas" (projetos). As "dúvidas comuns" que ficavam
  ao lado do formulário foram para o FAQ (prazo, contratos, diagnóstico).
- **Menos texto aparente, mais hierarquia e respiro.**
- **Muito movimento** — pedido central do cliente. Ao contrário das LPs de
  produto, aqui é permitido animação contínua: símbolo e anéis girando,
  satélites em órbita, faixas infinitas, manchas de luz à deriva, contadores,
  títulos palavra por palavra, linha do método desenhando na rolagem,
  cartões com inclinação 3D e holofote, CTA magnético. Regras: movimento
  contínuo é sempre decorativo (`aria-hidden`), nunca esconde informação, e
  `prefers-reduced-motion` desliga tudo.
- **Conversão**: o CTA é sempre a conversa no WhatsApp (`site.whatsapp`).
  Um CTA por seção, cabeçalho fixo, botão flutuante (desktop) e barra no
  celular — os dois fixos só aparecem depois do hero e saem no contato.
  Formulário via Web3Forms, mesmo endpoint e chave do site atual.
- **Essência mantida**: Grillo como hub (consultoria, laboratório, núcleo
  técnico, escola), paleta da marca, nada de virar agência.

## Sistema visual

- Campo escuro contínuo (`fundo`/`fundo-2` alternando, `preto` no rodapé),
  halo âmbar (`tone="brilho"`) só no contato.
- Paleta da marca: `floresta` #143D29, `ambar` #F6A200 (acento único: botão,
  destaque, número, ícone), `teal` #4E9696 (linhas de sistema, órbitas).
  Cores só por token (`@theme` em `src/styles/global.css`; paleta padrão do
  Tailwind desligada — `text-white` não existe).
- Bebas Neue (`titulo`, `numero`) + Plus Jakarta Sans (`texto`, `rotulo`).
- Utilitários de movimento em `global.css`: `girar`, `girar-reverso`,
  `flutuar`, `deriva`, `orbita`/`satelite`, `faixa`, `brilho-varrer`,
  `pulso`, `holofote`, `inclinar`, `elo`, `riscar`.
- `data-reveal` aceita `subir` (padrão), `esquerda`, `direita`, `escala`,
  `foco`, `girar`; `--i` escalona e `--atraso` adia. `data-palavras` sobe o
  título palavra por palavra. `data-contar` conta números. `data-inclinar`,
  `data-magnetico`, `data-profundidade` seguem o cursor.

## Código

- Copy em `src/data/landing.ts`; dados do negócio (WhatsApp, e-mail,
  números da Workana, formulário, redes) em `src/config/site.ts`.
- Seções em `src/components/sections/`, montadas em `src/pages/index.astro`:
  hero · provas · manifesto · sobre · soluções · método · entregas ·
  diferenciais · projetos · depoimentos · para quem · fundador · FAQ · contato.
- **JavaScript é camada extra** (`src/scripts/`): sem ele, tudo aparece, as
  soluções ficam empilhadas, o FAQ é `<details>` e o formulário envia por POST.
- Imagens em `src/assets/` via `astro:assets`. Alias `@/`.
- Grid com coluna `fr` que contém faixa: use `minmax(0, …fr)`, senão a faixa
  (`width: max-content`) estoura a coluna.

## Verificação

`pnpm check` e `pnpm build` antes de considerar pronto. Conferir em 1440 e
390 px de largura, e com redução de movimento.

## Pendências

- Referência das animações "do Pierri" que o cliente citou — não localizada
  no projeto; os efeitos atuais são uma interpretação.
- GTM (`site.analytics.gtmId`) e evento de conversão do formulário
  (`generate_lead` já vai para o `dataLayer`).
- Imagem social (`public/images/og.jpg`) gerada automaticamente — trocar por
  arte final se houver.
- Deploy: hoje o site está em Next.js; a troca de hospedagem/DNS de
  hubgrillo.com precisa ser combinada.

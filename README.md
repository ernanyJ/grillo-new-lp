# Grillo · Hub Criativo Estratégico

Landing de hubgrillo.com — Astro + Tailwind CSS v4. Convenções em `CLAUDE.md`.

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # saída em dist/
```

## Deploy

Push em `main` publica o preview no GitHub Pages
(`.github/workflows/deploy.yml`) em https://ernanyj.github.io/grillo-new-lp/,
com `noindex` e canonical para hubgrillo.com. Se o repositório tiver outro
nome, troque `BASE_PATH` no workflow.

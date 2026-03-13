# Maison Aura

Demo premium em React + Vite para clinica ficticia de estetica facial avancada, pensada para portfolio comercial no nicho de harmonizacao facial, rejuvenescimento e med spa.

## Projeto oficial

- Repositorio Git: `Wesleysc94/maison-aura-estetica-premium-demo`
- Projeto Vercel: `maison-aura-estetica-premium-demo`
- Fluxo de deploy: `push` na branch `main`

## Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Router

## Rodando localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Fluxo recomendado para upgrades

```bash
npm run verify
git add .
git commit -m "feat: descricao da melhoria"
git push origin main
```

Se preferir, use:

```bash
npm run deploy
```

Esse comando valida o projeto com lint + build e faz apenas o `push` para `main`. O deploy em producao acontece pela Vercel ligada a este repositorio.

## Observacao

Os textos, marca e contatos sao demonstrativos. A tentativa de gerar assets por IA ficou bloqueada por `OPENAI_API_KEY` invalida, entao a demo usa fallback visual local para manter a navegacao funcional e apresentavel.

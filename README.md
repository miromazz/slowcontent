# Slow Content — site

Site estático em HTML/CSS/JS puro, sem build. Abra `index.html` no navegador para rodar localmente, ou publique em qualquer hosting estático (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

## Estrutura

```
.
├── index.html        — página única com todas as seções
├── pacotes.css       — estilos da seção Pacotes
├── packages.js       — dados dos pacotes (único arquivo para editar preços e textos)
├── img/              — fotos e capas (coloque aqui as imagens referenciadas no HTML)
└── fonts/            — Neue Montreal e Inter em woff2 (coloque aqui os arquivos da marca)
```

## Imagens e fontes esperadas

O HTML referencia estes caminhos — adicione os arquivos antes de publicar:

**img/**

- yoga-por-do-sol.jpg, yoga-retrato.jpg, yoga-parque.jpg
- maktub-custo-oculto.jpg, maktub-beneficio-decisao.jpg, maktub-ombro-amigo.jpg
- the-pink-dream.jpg, the-rebel.jpg, the-artists-ritual.jpg
- north-side.jpg, doing-with-the-hands.jpg, atletas-lookbook.jpg, sao-paulo-streets.jpg

**fonts/**

- NeueMontreal-Regular.woff2, NeueMontreal-Medium.woff2, NeueMontreal-Bold.woff2
- Inter-Regular.woff2, Inter-Medium.woff2, Inter-SemiBold.woff2

Sem esses arquivos o site funciona, mas as imagens ficam com placeholder e as fontes caem no fallback (Helvetica/system-ui).

## Como editar

| O que mudar | Onde |
|---|---|
| Preços, itens, condições, aviso de mídia paga | `packages.js` → array `PACKAGES` |
| Número do WhatsApp | `packages.js` → `WHATSAPP = "5511966530847"` (formato internacional, sem "+") |
| Perguntas do FAQ | `index.html`, dentro de `<section id="pacotes">`, blocos `<details>` |
| Textos do hero, serviços, valores | `index.html` |
| Email, redes sociais | `index.html`, bloco `<footer>` |

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (público ou privado com Pro).
2. Suba todos os arquivos para a branch `main`.
3. Em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`. Salve.
4. Em cerca de um minuto, o site estará em `https://<seu-usuario>.github.io/<nome-do-repo>/`.
5. Para domínio próprio (ex: `slowcontent.com.br`), adicione um arquivo `CNAME` com o domínio e configure o DNS do provedor para apontar para o GitHub.

### Linha única pelo terminal

```bash
git init
git add .
git commit -m "slow content site"
git branch -M main
git remote add origin https://github.com/<seu-usuario>/<nome-do-repo>.git
git push -u origin main
```

Depois ative Pages pelo painel do GitHub.

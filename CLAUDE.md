# Line Svendsen – portfolio

Personlig portfolio bygget med React 19, Vite 8 og React Router 8. Live på https://www.line-svendsen.dk.

## Kommandoer

- `npm run dev` – udviklingsserver
- `npm run build` – produktionsbuild til `dist/`
- `npm run preview` – server det byggede `dist/` lokalt
- `npm run lint` – oxlint (`.oxlintrc.json`)

## Struktur

- `src/App.jsx` – ruter: `/`, `/projects/:slug`, `/about`, `*` (404)
- `src/pages/` – én fil pr. side
- `src/components/` – Navbar, Footer, IntroOverlay
- `src/data/projects.js` – alle projekter; `slug` bruges i URL'en
- `src/index.css` – al styling i én fil
- `public/` – billeder og SVG'er, refereres med `${import.meta.env.BASE_URL}filnavn`

## Hosting

- Vercel deployer **production fra `main`**. Andre branches får kun preview-links.
- Domæne: `line-svendsen.dk` (DNS hos Simply.com). `www` er primær; apex redirecter til `www`.
- `vercel.json` rewriter alle ruter til `index.html`, så dybe links virker. Fjern den ikke.
- GitHub Pages bruges ikke længere.

## Konventioner

- Alt indhold, commit-beskeder og UI-tekst er på **dansk**.
- Arbejd på en feature-branch og merge til `main` via pull request.
- Fonten (Ibarra Real Nova) hostes selv via `@fontsource-variable/ibarra-real-nova` af hensyn til GDPR. Tilføj ikke Google Fonts eller andre tredjeparts-ressourcer, der sender besøgendes IP videre.

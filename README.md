# Portfolio — Atachart Changtroraleke

A Vite + React + Tailwind portfolio site, built from the resume content in `src/data/resume.js`.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Edit content

All resume text lives in one place: `src/data/resume.js`. Update your summary, stats,
experience, projects, skills, or education there — the components just render it.

## Deploy to Netlify

**Option A — drag and drop**
```bash
npm install
npm run build
```
Then drag the generated `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

**Option B — connect a Git repo (recommended, gives you auto-deploys)**
1. Push this folder to a GitHub repo.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Build command: `npm run build` · Publish directory: `dist` (already set in `netlify.toml`).
4. Deploy. Every push to your main branch redeploys automatically.

**Option C — Netlify CLI**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## Stack

- React 18 + Vite
- Tailwind CSS (custom palette — see `tailwind.config.js`)
- Fraunces / IBM Plex Sans / IBM Plex Mono (Google Fonts)
- No other runtime dependencies
# myportfolio

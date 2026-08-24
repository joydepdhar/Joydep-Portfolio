# 🚀 Deploying Joydep-Portfolio to GitHub Pages (Free)

This project is **already fully configured** for free GitHub Pages hosting.
You only need to push the code and flip **one setting** in GitHub.

| What | Where | Status |
|---|---|---|
| Deploy workflow | `.github/workflows/deploy.yml` | ✅ Ready |
| Vite base path | `vite.config.js` → `base: './'` | ✅ Ready |
| SPA routing | HashRouter (deep links never break) | ✅ Ready |
| Your code on GitHub | `joydepdhar/Joydep-Portfolio` | ⚠️ Not pushed yet |

**Final live URL:** <https://joydepdhar.github.io/Joydep-Portfolio/>

---

## Step 1 — Commit and push your code

Open a terminal in the project root and run:

```bash
cd ~/Python-Development-Project/Portfolio_Research_Port/Joydep-Portfolio

git add .
git commit -m "Add portfolio site with GitHub Pages deploy workflow"
git push origin main
```

> `.gitignore` already excludes `node_modules/` and `dist/`, so only source
> files are pushed — nothing bloated.

---

## Step 2 — Enable GitHub Actions as the Pages source (one time)

This is the **only manual step**, done once per repository:

1. Go to your repo on GitHub:
   <https://github.com/joydepdhar/Joydep-Portfolio>
2. Open **Settings** → **Pages** (left sidebar).
3. Under **"Build and deployment"**, set:
   - **Source:** `GitHub Actions`
   *(NOT "Deploy from a branch")*

Done. The workflow now takes over permanently.

---

## Step 3 — Watch the first deployment run

1. Go to the **Actions** tab of your repo:
   <https://github.com/joydepdhar/Joydep-Portfolio/actions>
2. You should see a run called **"Deploy to GitHub Pages"**
   (triggered by your Step 1 push).
3. Wait ~2 minutes until it shows a green ✅.

If you don't see a run, trigger one manually:
**Actions → Deploy to GitHub Pages → Run workflow → Run**

---

## Step 4 — Verify the site is live 🎉

Visit:

```
https://joydepdhar.github.io/Joydep-Portfolio/
```

Test these too:

| URL | Should show |
|---|---|
| `.../#/research` | Research page |
| `.../#/research/thesis` | Paper-style thesis page |
| Refresh any page | Same content (HashRouter = no 404s) |

---

## Everyday updates after this

Just edit content (`src/data/*.js`) or components, then:

```bash
git add .
git commit -m "Update content"
git push origin main
```

GitHub Actions rebuilds and redeploys automatically. That's it.

---

## Alternative: manual deploy (no Actions)

```bash
npm install
npm run build
npx gh-pages -d dist
```

Pushes `dist/` to the `gh-pages` branch. Only use this if you switch
Pages Source to "Deploy from a branch → gh-pages".

---

## Optional: custom domain

1. Buy a domain, then in repo **Settings → Pages → Custom domain**,
   enter e.g. `www.joydepdhar.com`.
2. At your DNS provider, point a **CNAME record** to
   `joydepdhar.github.io`.
3. Because `base: './'` is used, **no rebuild is needed** — the same
   build works under any domain.
4. Tick **Enforce HTTPS** once the certificate is issued (~a few minutes).

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Workflow fails at `npm ci` | Ensure `package-lock.json` is committed (it is). |
| 404 on the site | Check Settings → Pages → Source is **GitHub Actions**, not a branch. |
| Blank white page | Hard-refresh (`Ctrl+Shift+R`) — old cached asset paths. |
| Assets 404 / broken CSS | Never change `base` away from `'./'` in `vite.config.js`. |
| First deploy pending | Actions can take 1–3 min; refresh the Actions tab. |
| Changed Pages source later | Always keep it as **GitHub Actions**, or the workflow deploys get rejected. |

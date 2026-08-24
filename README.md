# Joydep Dhar — Academic Research Portfolio

Minimal, research-first personal portfolio for **Joydep Dhar — Computer Vision & Deep Learning Researcher**.

Built with **React + Vite + Tailwind CSS v4 + react-router-dom + lucide-react**, deployed as a fully static site on **GitHub Pages**. No backend, no database, no environment variables.

> Live site: <https://joydepdhar.github.io/Joydep-Portfolio/>

---

## Project setup

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev
```

## Development

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Local dev server with hot reload          |
| `npm run build`   | Production build → `dist/`                |
| `npm run preview` | Serve the production build locally        |

### Project structure

```text
├── public/
│   ├── favicon.svg              # Site icon
│   └── Joydep-Dhar-CV.pdf       # Downloadable CV (replace to update)
├── src/
│   ├── data/                    # ← ALL site content lives here
│   │   ├── profile.js           # Name, title, email, social links, CV file
│   │   ├── research.js          # Interests, thesis, dataset, results, pipelines
│   │   ├── projects.js          # Software projects
│   │   ├── experience.js        # Professional experience
│   │   ├── education.js         # Education + academic timeline
│   │   ├── skills.js            # Skill groups
│   │   └── certifications.js    # Certifications & awards
│   ├── components/              # One component per section
│   ├── pages/
│   │   ├── HomePage.jsx         # /  (all sections, research-first order)
│   │   ├── ResearchPage.jsx     # /#/research
│   │   └── ThesisPage.jsx       # /#/research/thesis  (paper-style)
│   ├── lib/                     # Small utilities (scroll, page titles)
│   ├── App.jsx                  # Routes (HashRouter)
│   └── main.jsx
├── index.html                   # SEO + Open Graph metadata
├── vite.config.js               # base: './' → works on any Pages URL
└── .github/workflows/deploy.yml # GitHub Actions deployment
```

## Build

```bash
npm run build
```

Output goes to `dist/`. The Vite base path is set to `./` (relative), so the same build works under a project page (`/Joydep-Portfolio/`), a user site root, or a custom domain — no rebuild needed.

Routing uses **HashRouter**, so refreshing or sharing deep links like `/#/research/thesis` never breaks on GitHub Pages (static hosting has no SPA rewrite rules).

## GitHub Pages deployment

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`):

1. Push to `main`.
2. GitHub Actions installs, builds, and deploys `dist/` to Pages.
3. In your repo: **Settings → Pages → Source → GitHub Actions** (select this once if not already set).

Manual deploy alternative:

```bash
npm run build
npx gh-pages -d dist
```

## How to add a research project

1. Open `src/data/projects.js`.
2. Append an object — components render it automatically:

```js
{
  title: 'My New Research Project',
  technologies: ['Python', 'TensorFlow'],
  problem: 'What question does it answer?',
  approach: 'How was it built?',
  features: ['Key feature one', 'Key feature two'],
  results: ['Optional measured result'], // omit or leave [] if none
  github: 'https://github.com/joydepdhar/repo-name', // or null to hide link
},
```

To extend the thesis/research content itself (e.g., a future publication), edit
`src/data/research.js` — the Home, Research, and Thesis pages all read from that
single source of truth.

## How to update the CV

Replace this file, keeping the same filename:

```text
public/Joydep-Dhar-CV.pdf
```

Everything else works automatically (navbar button, hero button).

## How to update contact information

Edit `src/data/profile.js` — hero links, contact section, and footer all read
from that one file.

---

### Content integrity note

Everything shown on this site comes from Joydep's CV. No publications, patents,
grants, citations, or affiliations are claimed anywhere because none are listed.

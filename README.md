# Portfolio

Personal developer portfolio built with React, Vite, and Tailwind CSS. Deployed to GitHub Pages.

**Live site:** [bmkhn.github.io](https://bmkhn.github.io)

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- GitHub Pages + GitHub Actions

## Getting Started

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
```

## Deployment

Push to `main` — GitHub Actions handles the rest.

```bash
git add .
git commit -m "Update portfolio"
git push
```

## Updating Content

All portfolio content lives in `src/data/`. No need to touch React components.

| What to update | File |
|---|---|
| Name, bio, links | `src/data/site.js` |
| Projects | `src/data/projects.js` |
| Experience | `src/data/experience.js` |
| Skills | `src/data/skills.js` |
| Education | `src/data/education.js` |
| Certifications | `src/data/certifications.js` |

## License

MIT

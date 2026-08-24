# Developer Portfolio

A production-quality personal developer portfolio built with React, Vite, Tailwind CSS, and deployed to GitHub Pages.

## ✏️ How to Update My Portfolio

All portfolio content is stored in `src/data/`. You generally **do not need to edit React components** to update your information.

### Quick Reference

| Task                      | File                                |
| ------------------------- | ----------------------------------- |
| Change name/title         | `src/data/site.js`                  |
| Change bio                | `src/data/site.js`                  |
| Change email              | `src/data/site.js`                  |
| Change GitHub             | `src/data/site.js`                  |
| Change LinkedIn           | `src/data/site.js`                  |
| Change CV                 | `src/data/site.js`                  |
| Add/remove project        | `src/data/projects.js`              |
| Add project GitHub        | `src/data/projects.js`              |
| Add project live site     | `src/data/projects.js`              |
| Add/remove experience     | `src/data/experience.js`            |
| Add/remove skill          | `src/data/skills.js`                |
| Update education          | `src/data/education.js`             |
| Add certification         | `src/data/certifications.js`        |
| Replace profile photo     | `public/images/profile/`            |
| Replace project thumbnail | `public/images/projects/`           |
| Change design             | `src/components/` / `src/index.css` |

---

## 📝 Personal Information

Edit **`src/data/site.js`** to update:

- Name
- Professional title
- Subtitle
- Hero description
- Email
- GitHub URL
- LinkedIn URL
- CV URL
- Focus areas
- About paragraphs

**Example:**
```js
export const site = {
  name: "Your Name",
  title: "Software Developer",
  subtitle: "Web Applications · Systems Development",
  email: "you@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  // ...
};
```

---

## 🚀 Projects

Edit **`src/data/projects.js`** to manage projects.

### Field Reference

| Field          | Description                                           | Required |
| -------------- | ----------------------------------------------------- | -------- |
| `id`           | Unique identifier (slug)                              | Yes      |
| `title`        | Project name                                          | Yes      |
| `category`     | "Production System", "Academic Project", "Personal Project" | Yes |
| `date`         | Date range (e.g., "Jul 2026 – Present")              | Yes      |
| `organization` | Company/university name                               | No       |
| `description`  | Short project description                             | Yes      |
| `technologies` | Array of technology names                             | Yes      |
| `features`     | Array of feature descriptions                         | Yes      |
| `highlights`   | Array of key technical highlights                     | No       |
| `image`        | Path to screenshot (`/images/projects/name.png`)      | No       |
| `liveUrl`      | Public website URL (leave `""` if none)               | No       |
| `githubUrl`    | Repository URL (leave `""` if none)                   | No       |
| `role`         | Your role (e.g., "Sole Developer")                    | No       |
| `status`       | "Production" or "Completed"                           | No       |
| `deployment`   | Hosting platform                                      | No       |

### Adding a Project

```js
{
  id: "my-new-project",
  title: "My New Project",
  category: "Web Application",
  date: "2026",
  organization: "Organization Name",
  description: "What this project does.",
  technologies: ["Laravel", "PHP", "MySQL"],
  features: [
    "Feature one",
    "Feature two"
  ],
  image: "/images/projects/my-new-project.png",
  liveUrl: "",
  githubUrl: "",
  role: "Full-Stack Developer",
  status: "Completed",
}
```

### Important Rules About URLs

- **`liveUrl`**: Only fill in when a public website exists.
- **`githubUrl`**: Only fill in when a repository exists.
- Empty URLs (`""`) automatically hide the corresponding button.
- **Never add fake or placeholder URLs.**

---

## 💼 Experience

Edit **`src/data/experience.js`** to manage work experience.

### Field Reference

| Field              | Description                         |
| ------------------ | ----------------------------------- |
| `title`            | Job title                           |
| `company`          | Company/organization name           |
| `date`             | Date range                          |
| `location`         | Optional location                   |
| `description`      | Short description                   |
| `responsibilities` | Array of responsibilities/highlights|
| `technologies`     | Array of technologies used          |
| `featured`         | `true` for primary roles            |
| `minor`            | `true` for less prominent roles     |

---

## 🛠️ Skills

Edit **`src/data/skills.js`** to manage skill categories.

Skills are organized by category. Set `featured: true` on your top skills for visual emphasis.

```js
{
  name: "Languages",
  skills: [
    { name: "Python", featured: true },
    { name: "PHP", featured: true },
    { name: "JavaScript", featured: false },
  ],
},
```

---

## 🎓 Education

Edit **`src/data/education.js`** to update education details.

```js
{
  degree: "Bachelor of Science in Information Technology",
  institution: "Palawan State University",
  date: "2022 – 2026",
  gwa: "1.66",
  description: "Your description here.",
}
```

---

## 📜 Certifications

Edit **`src/data/certifications.js`** to add or update certifications.

```js
{
  name: "Certification Name",
  issuer: "Issuing Organization",
  date: "Nov 2025",
  credentialId: "",
  credentialUrl: "",
}
```

Set `credentialUrl` to link to the verification page.

---

## 🖼️ Images

Images are stored in `public/images/`:

```
public/
└── images/
    ├── profile/
    │   └── me.jpg
    └── projects/
        ├── membership-system.png
        ├── pmis.png
        ├── hris.png
        ├── mnemosyne.png
        └── sophrosyne.png
```

- **Profile photo**: Place your portrait at `public/images/profile/me.jpg`
- **Project thumbnails**: Place screenshots at `public/images/projects/your-project.png`
- If a filename changes, update the `image` field in `src/data/projects.js`
- Images are optional — CSS placeholders appear when images are missing

---

## 🔗 Links

All configurable links are in **`src/data/site.js`**:

- `email` — your email address
- `github` — your GitHub profile URL
- `linkedin` — your LinkedIn profile URL
- `cvUrl` — link to downloadable CV

Project-specific links are in **`src/data/projects.js`**:

- `liveUrl` — production website URL
- `githubUrl` — source code repository URL

---

## ⚙️ What I Usually DON'T Need to Edit

You generally should **NOT** edit these files unless you want to change the site's design or functionality:

- `src/components/`
- `src/App.jsx`
- `src/main.jsx`
- `src/index.css`
- `tailwind.config.js`
- `vite.config.js`

> **If you only want to update your information, projects, experience, skills, education, certifications, images, or links — edit the files inside `src/data/`.**

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`.

---

## 🏗️ Building

```bash
npm run build
```

This creates a production build in the `dist/` directory.

---

## 🚀 Deployment

This project is configured for GitHub Pages deployment via GitHub Actions.

### Setup

1. Push this repository to GitHub as `[YOUR_USERNAME].github.io`
2. Go to **Settings → Pages** in your GitHub repository
3. Set **Source** to **GitHub Actions**
4. Push changes to the `main` branch — deployment happens automatically

### Manual Deploy

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions will build and deploy the updated site.

---

## 🆘 Common Tasks

### Change my name
Edit `src/data/site.js` → `name` field

### Add a new project
Add a new entry to the array in `src/data/projects.js`

### Remove a project
Delete the project object from `src/data/projects.js`

### Add a project image
1. Place the image in `public/images/projects/`
2. Set the `image` field in the project data to `/images/projects/your-image.png`

### Add a live website link
Set the `liveUrl` field in the project data

### Add a GitHub repository link
Set the `githubUrl` field in the project data

### Update skills
Edit `src/data/skills.js`

### Add experience
Add a new entry to the array in `src/data/experience.js`

---

## ⚠️ Security Warning

> **Never put passwords, API keys, database credentials, private tokens, `.env` secrets, or other sensitive information in this repository.**
>
> This is a static GitHub Pages website, so anything included in the frontend can potentially be viewed by website visitors.

---

## Tech Stack

- **React** — UI framework
- **Vite** — Build tool
- **Tailwind CSS** — Utility-first CSS
- **GitHub Pages** — Static hosting
- **GitHub Actions** — CI/CD deployment

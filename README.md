# Rama Krishnan L — Portfolio

A premium, dark-gradient, glassmorphism portfolio built with **React + Vite + Tailwind CSS**.

## Run it in VS Code

1. Unzip/open this folder in VS Code.
2. Open a terminal (`` Ctrl+` ``) and install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the printed local URL (usually `http://localhost:5173`) in your browser.

## Build for production

```bash
npm run build
npm run preview
```

The production-ready files will be generated in the `dist/` folder — you can deploy that
folder to any static host (Vercel, Netlify, GitHub Pages, etc).

## Project structure

```
portfolio/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/
    │   └── profile.jpg        # your profile photo
    ├── data/
    │   └── projects.js        # edit project details here
    ├── hooks/
    │   ├── useReveal.js
    │   └── useCountUp.js
    └── components/
        ├── Loader.jsx
        ├── Navbar.jsx
        ├── CursorGlow.jsx
        ├── Particles.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Stats.jsx
        ├── Skills.jsx
        ├── Services.jsx
        ├── Projects.jsx
        ├── ProjectModal.jsx
        ├── Achievements.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── BackToTop.jsx
```

## Customizing

- **Resume**: the "Download Resume" button is a placeholder — once you have a PDF, drop it in
  `public/` and update the button in `src/components/Hero.jsx` to link/download it.
- **GitHub links**: update the `github` field for each project in `src/data/projects.js`, and
  the placeholder links in `src/components/Contact.jsx` / `Footer.jsx` if needed.
- **Achievements**: replace the "Coming Soon" badges in `src/components/Achievements.jsx` as
  certifications, hackathons, and awards come in.
- **Colors**: the gradient palette (blue/purple/cyan on deep navy) is defined in
  `tailwind.config.js` under `theme.extend.colors` and `backgroundImage`.

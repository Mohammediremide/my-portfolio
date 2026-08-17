# Mohammed — Frontend Developer Portfolio

A premium, dark-themed, interactive developer portfolio built with React 19,
Vite, Tailwind CSS v4, and Framer Motion.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

## Where to edit things

Everything here is written so you can drop in your real content without
touching layout code.

| What | File |
|---|---|
| Projects grid + filters | `src/data/projects.js` |
| Featured project (MoveMate) | top of `src/data/projects.js` (`featuredProject`) |
| Skills & tools | `src/data/skills.js` |
| Timeline / journey | `src/data/experience.js` |
| Social links (GitHub, X, email) | `src/components/Hero.jsx` and `src/components/Footer.jsx` |
| GitHub username for live stats | `GITHUB_USERNAME` constant at the top of `src/components/GithubSection.jsx` |
| Hero name/copy | `src/components/Hero.jsx` |
| Colors, fonts, spacing tokens | `src/index.css` (`@theme` block) |

## Contact form

The form in `src/components/Contact.jsx` validates on the client and shows a
success state, but **no email is actually sent** — there's no backend wired
up yet. Replace the `setTimeout` placeholder inside `handleSubmit` with a
real call to an email service (EmailJS, Resend, a serverless function, etc.)
when you're ready to go live.

## Notes

- The custom cursor and heavier hover animations automatically disable on
  touch devices and when the OS-level "reduce motion" setting is on.
- Project card images are placeholders (a subtle gradient + icon) — swap in
  real screenshots by editing the `image` field per project and updating the
  card markup in `src/components/Projects.jsx`.
- GitHub stats pull live from the public GitHub API for whatever username you
  set; if the request fails (offline, rate-limited) it falls back to static
  numbers instead of breaking the section.

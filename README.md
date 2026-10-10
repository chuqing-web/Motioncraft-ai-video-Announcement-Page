# MotionCraft — Product Site

Static bilingual (EN / 中文) marketing site for **MotionCraft · AI Motion Studio**.

## Local preview

Open `index.html` in a browser, or from this folder:

```powershell
npx --yes serve .
```

Then visit the URL printed in the terminal (usually `http://localhost:3000`).

## Structure

| Path | Role |
|------|------|
| `index.html` | Single-page site |
| `css/styles.css` | Visual system (aligned with Announcement_Page) |
| `js/i18n.js` | EN / ZH dictionary (default: EN) |
| `js/main.js` | Scroll header + reveal |
| `assets/images/` | Product screenshots |

## After you have a GitHub repo

Replace the footer placeholder `GitHub · Coming soon` in `index.html` / `js/i18n.js` (`footer.github`) with a real link.

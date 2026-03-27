# NOEL / Unofficial Dossier

A static, GitHub Pages–ready character page for **Noel Hale**.

## Included

- `index.html` — page structure
- `styles.css` — visual system, layout, motion, responsive rules
- `app.js` — language toggle, hidden background gate, pointer tilt, WebGL shader

## Core experience

- High-end dark dossier aesthetic with thin-line UI and restrained detail
- Full-screen **3D shader background** with mouse / touch response
- **Korean / English** toggle via the globe button in the top-right corner
- **Locked growth background** that only opens after a custom interaction:
  - hold the seal
  - enter the chronology in order: **1992 → 2010 → 2016**
- Responsive layout tuned for desktop and mobile
- No build step required

## Deploy on GitHub Pages

### Option 1 — repository root

1. Create a GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Set the source to **Deploy from a branch**.
5. Choose your main branch and **/root**.
6. Save.

### Option 2 — `/docs` folder

1. Create a repository.
2. Put this folder's contents inside `/docs`.
3. In **Settings → Pages**, choose the main branch and **/docs**.
4. Save.

## Notes

- The page uses a WebGL shader for the background. If WebGL is unavailable, the page falls back to layered gradients.
- The hidden background state is stored in `localStorage` after unlock.
- Some atmosphere-specific tokens such as `DOB`, `MI6`, `NOC`, and `NOEL` stay untranslated by design.
- The page currently uses Google Fonts. If you want a fully offline version, replace the font import in `index.html` with a system font stack.

## Easy custom edits

- Change text in `app.js` inside the `copy` object.
- Adjust colours and spacing in `styles.css` under `:root`.
- Tune shader feel in `app.js` inside `setupShader()`.
- To reset the hidden background locally, clear this key in the browser:
  - `localStorage.removeItem('noel-dossier-unlocked')`

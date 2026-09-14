# Aaron Saclolo — personal portfolio site

Static one-page site (no build step): `index.html`, `styles.css`, `script.js`, `favicon.svg`.

## Before you publish

Edit contact placeholders in `index.html`:

- `hello@REPLACE.me`
- `[Your Facebook / Messenger link]`
- `[Your WhatsApp link or number]`

## Preview locally

```bash
# Option A — open the file
xdg-open index.html   # or double-click index.html

# Option B — tiny static server
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Deploy on GitHub Pages

Best for a repo named `aaron-saclolo`, `portfolio`, or similar. Your live URL will look like:

`https://YOURUSERNAME.github.io/REPO_NAME/`

### 1. Create the repo

1. On GitHub, create a **new public repository** (e.g. `aaron-saclolo` or `portfolio`).
2. Do **not** initialize with a README if you will push this folder as the root.

### 2. Push this site as the repo root

From this `website/` folder (the one that contains `index.html`):

```bash
git init
git add index.html styles.css script.js favicon.svg README.md
git commit -m "Add Aaron Saclolo portfolio site"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/REPO_NAME.git
git push -u origin main
```

Replace `YOURUSERNAME` and `REPO_NAME` with your GitHub username and repo name.

**Tip:** If this folder already lives inside a larger project, either:

- Copy only these site files into a new empty repo, **or**
- Keep them in a `/docs` folder (see alternate setup below).

### 3. Turn on GitHub Pages

1. Open the repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
3. Branch: **main** · Folder: **/ (root)** → **Save**.
4. Wait 1–2 minutes, then open:

   `https://YOURUSERNAME.github.io/REPO_NAME/`

   Example: `https://aaronsaclolo.github.io/aaron-saclolo/`

### Alternate: `/docs` folder

If you prefer keeping the site in a `docs/` directory of a larger repo:

1. Put `index.html`, `styles.css`, `script.js`, and `favicon.svg` in `/docs`.
2. Settings → Pages → Branch: **main** · Folder: **/docs**.

### Custom domain (optional)

Settings → Pages → **Custom domain** → enter your domain and follow GitHub’s DNS instructions.

### Project-site asset paths

This site uses **relative** links (`styles.css`, `script.js`, `favicon.svg`), so it works on both:

- `https://YOURUSERNAME.github.io/REPO_NAME/` (project site)
- A custom domain or user site (`YOURUSERNAME.github.io`)

No base-path changes needed.

---

## Other free hosts

### Cloudflare Pages

1. Push this folder to GitHub/GitLab (or upload via Wrangler).
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages**.
3. Connect the repo; root directory = folder with `index.html`.
4. Build command: empty. Output directory: `/` (or `.`).
5. Deploy → copy the `*.pages.dev` URL.

### Netlify

1. Drag-and-drop this folder onto [https://app.netlify.com/drop](https://app.netlify.com/drop), **or**
2. Import from Git → publish directory = folder with `index.html` → Deploy.

---

## Tip

Keep Upwork as one channel: [upwork.com/freelancers/aarons3](https://upwork.com/freelancers/aarons3). This site is for clients who prefer email / Messenger / WhatsApp.

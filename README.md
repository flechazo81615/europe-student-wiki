# Europe Student Wiki

A Traditional-Chinese practical guide for exchange students and independent travellers in Europe. The project demonstrates a reusable AI-assisted workflow governed by `AGENTS.md`.

## What's included
- Responsive editorial-style homepage with searchable guide cards
- Four starter guides: Brno, Prague, Vienna, and Barcelona
- Shared CSS and JavaScript
- Consistent page template and content rules in `AGENTS.md`

## Preview locally
This is a static site. You can open `index.html` directly in a browser, or run a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages
1. Create a GitHub repository, for example `europe-student-wiki`.
2. Upload/push all files in this folder to the repository's `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then save.
6. Wait for the deployment to finish. The site will be available at `https://YOUR-USERNAME.github.io/europe-student-wiki/`.

## Updating the wiki with an AI assistant
Start a new task by asking the assistant to read `AGENTS.md` first. For example:

> Read AGENTS.md. Add a city guide for Budapest using the existing city-page structure and visual system. Add it to the homepage guide list, verify all relative links, and update the README only if necessary.

## Content note
Travel rules, transport fares, opening hours, and entry requirements change. Starter pages focus on general orientation and provide official links where possible. Verify current details with official sources before travelling.

# AGENTS.md — Europe Student Wiki

## 1. Project purpose
Build and maintain a practical, student-friendly knowledge base for people studying, living, and travelling in Europe. The site is an editorial-style wiki, not a booking service. Its content should help readers plan responsibly and know what to verify before travelling.

## 2. Audience and language
- Primary audience: university students and exchange students.
- Default language: Traditional Chinese (繁體中文).
- Keep proper nouns, official transport terms, and useful local terms in their original language, with a Chinese explanation where helpful.
- Write clearly and concisely. Explain unfamiliar terms instead of assuming prior knowledge.

## 3. Visual direction
- Overall feel: clean European travel magazine.
- Use a warm off-white background, deep navy text, muted blue/teal accents, and restrained coral highlights.
- Use generous whitespace, readable typography, editorial headings, image-led feature cards, and consistent spacing.
- Responsive layout is mandatory: desktop, tablet, and mobile.
- Avoid clutter, excessive gradients, emoji decoration, and oversized animations.
- Maintain accessible contrast, visible focus states, semantic HTML, and descriptive image alt text.

## 4. Site architecture
- `index.html`: homepage and category entry point.
- `pages/`: one HTML file per city or evergreen guide.
- `css/style.css`: all shared styling.
- `js/main.js`: shared navigation, mobile menu, search/filter behaviour, and reusable UI logic.
- `data/`: structured content used by the site.
- `assets/images/`: locally stored images when available. Use descriptive filenames.
- `README.md`: project overview, local preview instructions, and GitHub Pages deployment steps.

## 5. Content structure
Every city guide should use the same order:
1. Hero title and short introduction
2. At-a-glance facts (country, currency, language, suggested visit length)
3. Getting there and getting around
4. Recommended areas and sights
5. Budget notes (clearly label estimates and currency)
6. Practical tips and common mistakes
7. Official links / sources to verify
8. Last reviewed date

Evergreen guides should include:
- Who the guide is for
- Step-by-step advice
- Approximate costs only when dated and sourced
- What may change and where to verify it
- Sources and last reviewed date

## 6. Accuracy and sourcing rules
- Never invent opening hours, ticket prices, transport schedules, visa rules, or current policies.
- Distinguish stable general advice from time-sensitive information.
- For changing information, link to official operator, government, university, or venue sources.
- If a value is an estimate, label it as an estimate and include an "as of" date.
- Do not present personal experience as universal fact.
- Do not provide legal, immigration, or medical advice as a definitive conclusion; direct readers to official authorities or qualified professionals.
- When information has not been verified, say so explicitly.

## 7. File naming and placement
- Use lowercase English filenames with hyphens: `budapest.html`, `train-travel.html`.
- Put city pages in `pages/`; shared styles in `css/`; shared scripts in `js/`.
- Use UTF-8 encoding.
- Do not create duplicate pages for the same destination. Update the existing page instead.
- Keep asset names descriptive, e.g. `prague-old-town.jpg`.

## 8. Rules for adding or editing pages
- Read this file before making project changes.
- Reuse the shared header, footer, typography, colours, and card patterns.
- Every new page must link back to the homepage and include consistent navigation.
- Add the page to the homepage's "Explore the Wiki" list.
- Use semantic headings in order (`h1` then `h2`, etc.); each page must have exactly one primary `h1`.
- Include meaningful page title, meta description, and image alt text.
- Include sources and a last-reviewed date for factual guides.
- Keep links descriptive; avoid "click here".
- Do not silently delete existing content or change the site's visual system.

## 9. Search and interaction
- Search should filter the visible guide cards by title, category, and short description.
- Navigation must work with keyboard and touch.
- Interactions must degrade gracefully if JavaScript is unavailable.
- Do not add trackers, API keys, server dependencies, or external services unless explicitly requested.

## 10. Definition of done
A change is complete only when:
- All links and navigation paths are valid.
- The page works when opened locally and when hosted at a GitHub Pages project URL.
- Layout is usable at mobile width (320px and above).
- No console errors are introduced.
- New pages follow the content structure and design rules above.
- The homepage index is updated.
- Documentation is updated if setup or deployment steps change.

## 11. GitHub Pages compatibility
- Use relative paths (`../css/style.css`, `../js/main.js`) from pages under `pages/`.
- Do not rely on a backend, build step, environment variables, or root-absolute asset paths.
- The site must be deployable as a static site from the repository root using GitHub Pages.

# BBQ Solutions Playbook by Station House

A free BBQ business academy: playbooks, toolkits, and operating systems that funnel
operators toward Station House Systems consulting, Station House OS, and Method licensing.
Static site — no build step. Open `index.html` or serve the folder with any web server.

## Structure

| File | Purpose |
|---|---|
| `index.html` | Homepage: hero, Start Here problem router, library preview, featured playbooks, proof, subtle implementation CTA |
| `playbooks.html` | Playbook library with track filters (`?cat=production` deep-links a filter) |
| `toolkits.html` | Toolkit library with the same filters |
| `playbook.html?id=…` | Presentation-style player (keyboard ←/→, swipe, progress, resume via localStorage, `#s4` deep-links a slide) |
| `toolkit.html?id=…` | Printable tool pages (print stylesheet = save-as-PDF); capacity calculator is interactive |
| `method.html` | Station House Method — free framework vs. licensed specifications |
| `about.html` | Story, ecosystem, honesty note |
| `help.html` | Ways We Can Help (no pricing) + Systems Review form |
| `css/site.css` | Entire design system, incl. player + print styles |
| `js/catalog.js` | **Data**: categories/tracks, playbook + toolkit metadata |
| `js/playbook-content-a.js`, `-b.js` | **Data**: playbook lessons (HTML per slide) + end CTAs |
| `js/toolkit-content.js` | **Data**: toolkit sections |
| `js/ui.js` | Shared header/footer/cards/filters |
| `js/player.js`, `js/tool.js` | Player and tool renderers |

## Adding a playbook
1. Add metadata to `CATALOG.playbooks` in `js/catalog.js` (id, title, category, time, description, resources).
2. Add `PLAYBOOK_CONTENT["your-id"] = { intro, lessons: [{eyebrow, title, html}], cta: {…} }` in a content file.
Done — library, filters, player, and resources wire up automatically. Toolkits work the same way.

## Connecting real services later
- **Form backend / CRM:** `help.html` currently validates and opens a prefilled email to
  info@stationhousebbq.com (with a copyable fallback — no fake success states). Swap the
  submit handler for a POST when a backend exists.
- **PDF downloads:** tools are printable web versions. When real PDFs exist, add a `pdf`
  URL per toolkit in `catalog.js` and render a download button in `tool.js`.
- **Photography:** replace the SVG-texture aesthetic with real Station House photos where
  available (hero, proof section, playbook covers). Never stock.

## Guardrails baked into the content
- No public pricing anywhere — commercial CTAs route to the Systems Review.
- Free content teaches frameworks, planning math, workflows, and scripts.
- Protected: exact cook stages, temperatures, humidity, timing, reheating specs,
  recipes, and equipment-specific procedures — referenced only as licensed material.

(The previous one-page consulting site copy is archived in `_archive/site-copy.md`.)

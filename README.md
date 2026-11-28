This project contains the content for the website at [tactilityproject.org](https://tactilityproject.org).

The pages are markdown files in `docs/`. [Eleventy](https://www.11ty.dev) turns them into static HTML.

Install the dependencies (Node.js 20 or newer):

```sh
npm install
```

Develop with a local server that reloads on changes:

```sh
npm start
```

Build the site into `_site/`:

```sh
npm run build
```

## Where things are

- `docs/*.md`: the pages. `docs/index.md` is the home page; its hero, screenshots and supporter logos are listed in the frontmatter.
- `docs/devices/*.md`: one page per device. The Supported Devices list is generated from the frontmatter of these files, see [DEVICE_TEMPLATE.md](DEVICE_TEMPLATE.md).
- `docs/_data/`: site name, community links and navigation.
- `docs/_includes/`: page layouts.
- `docs/assets/site.css`: the stylesheet.

## Translations

The site is available in English (at the root), German (`/de/`), Spanish (`/es/`), Japanese (`/ja/`), Simplified Chinese (`/zh/`) and Traditional Chinese (`/zh-tw/`).

- `docs/<language>/*.md`: the translated pages, with the same file names as the English ones. A folder's `<language>.11tydata.json` sets the page language.
- `docs/_data/i18n.json`: the list of languages and the texts of the layouts (navigation, badges, buttons) in every language.
- Device pages are not translated: `docs/device-translations.njk` generates `/<language>/devices/<device>/` from the English page, with translated navigation and badges. Their canonical URL is the English page.
- Link to other pages by their path from `docs/`, e.g. `[Features](de/features.md)`; a plain `features.md` points to the English page.
- Give translated headings the English anchor, so links with `#` work in every language: `## Konnektivität {#connectivity}`.
- In Japanese and Chinese, keep each paragraph on one line: a line break inside a paragraph shows up as a space.
- First visit to an English page without a referrer (typed in, bookmark): a script in `docs/_includes/base.njk` redirects to the browser's language when the site has it. A language picked in the language menu is stored in `localStorage` and stops the redirect.
- When an English page changes, update the translated pages too.

## Markdown extras

- Alerts: `> [!NOTE]` and `> [!WARNING]` blocks.
- Tabbed card: wrap `::: tab <Title>` blocks in `:::: tabs` ... `::::` (see `docs/installing.md`).
- Option cards with a button at the top of a page: `options:` in the frontmatter (see `docs/installing.md`).
- A paragraph of linked images is shown as a row of logos (see `docs/community.md`).

Pushing to `main` builds and publishes the site with GitHub Actions (`.github/workflows/deploy.yml`).

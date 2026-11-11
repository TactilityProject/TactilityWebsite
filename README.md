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

Pushing to `main` builds and publishes the site with GitHub Actions (`.github/workflows/deploy.yml`).

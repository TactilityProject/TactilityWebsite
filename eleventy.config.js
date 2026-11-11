import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import fs from "node:fs";
import markdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import alerts from "markdown-it-github-alerts";

const fonts = "node_modules/@fontsource-variable";

export default function (eleventyConfig) {
  // Lets markdown link to other pages by file name, e.g. [FAQ](faq.md)
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.setLibrary(
    "md",
    markdownIt({ html: true, linkify: true })
      .use(anchor, { permalink: anchor.permalink.headerLink({ safariReaderFix: true }) })
      .use(alerts),
  );

  eleventyConfig.addGlobalData("layout", "page");

  eleventyConfig.addPassthroughCopy("docs/images");
  eleventyConfig.addPassthroughCopy("docs/assets");
  eleventyConfig.addPassthroughCopy("docs/CNAME");
  eleventyConfig.addPassthroughCopy({
    [`${fonts}/inter/files/inter-latin-wght-normal.woff2`]: "assets/fonts/inter.woff2",
    [`${fonts}/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2`]: "assets/fonts/jetbrains-mono.woff2",
  });

  // Device pages grouped for the directory: one group per vendor with several
  // devices, the rest under "Other", incubating devices last.
  eleventyConfig.addFilter("deviceGroups", (devices) => {
    const byTitle = (a, b) => a.data.title.localeCompare(b.data.title, "en", { numeric: true });
    const vendors = new Map();
    const incubating = [];
    for (const device of [...devices].sort(byTitle)) {
      if (device.data.incubating) {
        incubating.push(device);
        continue;
      }
      const vendor = device.data.vendor;
      if (!vendors.has(vendor)) vendors.set(vendor, []);
      vendors.get(vendor).push(device);
    }
    const groups = [];
    const other = [];
    for (const [name, list] of [...vendors].sort((a, b) => a[0].localeCompare(b[0]))) {
      if (list.length > 1) groups.push({ name, devices: list });
      else other.push(...list);
    }
    if (other.length) groups.push({ name: "Other", devices: other.sort(byTitle) });
    if (incubating.length) {
      groups.push({
        name: "Incubating",
        note: "Work in progress: expect missing features and rough edges.",
        devices: incubating,
      });
    }
    return groups;
  });

  // Installer targets of a device page. The installer id defaults to the file
  // name; `installer` in the frontmatter overrides it with one id or a list of
  // ids / { id, label } entries for devices with several firmware builds.
  eleventyConfig.addFilter("installTargets", (installer, fileSlug) => {
    if (installer === false) return [];
    const entries = Array.isArray(installer) ? installer : [installer || fileSlug];
    return entries.map((entry) => (typeof entry === "string" ? { id: entry } : entry));
  });

  // Pixel size of a PNG in docs/, read from its header, so screenshots of any
  // size get correct width/height attributes. Small ones are shown as pixel art.
  eleventyConfig.addFilter("pngSize", (src) => {
    try {
      const fd = fs.openSync(`docs${src}`, "r");
      const header = Buffer.alloc(24);
      fs.readSync(fd, header, 0, 24, 0);
      fs.closeSync(fd);
      if (header.toString("latin1", 12, 16) !== "IHDR") return null;
      return { width: header.readUInt32BE(16), height: header.readUInt32BE(20) };
    } catch {
      return null;
    }
  });

  // Second-level headings of rendered content, for the "On this page" list
  eleventyConfig.addFilter("headings", (html) =>
    [...String(html).matchAll(/<h2 id="([^"]+)"[^>]*>(.*?)<\/h2>/gs)].map((m) => ({
      id: m[1],
      text: m[2].replace(/<[^>]+>/g, ""),
    })),
  );

  return {
    dir: { input: "docs", output: "_site" },
    markdownTemplateEngine: false,
  };
}

// Writes static HTML for each route so the copy is readable without JavaScript
// (search engines, printed or saved copies). Runs after `vite build` and the SSR build.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render, routes, PAGE_META } = await import(pathToFileURL(ssrEntry).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8");

const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const escapeText = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

for (const route of routes) {
  const { title, description } = PAGE_META[route];
  const appHtml = render(route);
  if (!appHtml.trim()) throw new Error(`Prerender produced empty HTML for ${route}`);

  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(title)}</title>`)
    .replace(
      /(<meta\s+(?:name|property)="(?:description|og:description|twitter:description)"\s+content=")[^"]*(")/g,
      `$1${escapeAttr(description)}$2`
    )
    .replace(
      /(<meta\s+(?:name|property)="(?:og:title|twitter:title)"\s+content=")[^"]*(")/g,
      `$1${escapeAttr(title)}$2`
    )
    .replace(
      /(<meta\s+(?:name|property)="(?:og:url|twitter:url)"\s+content="https:\/\/joinglocommunity\.com)\/[^"]*(")/g,
      `$1${route}$2`
    )
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // Cloudflare Pages serves /membership from membership.html.
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), html);
  console.log(`prerendered ${route} -> dist/${file}`);
}

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });

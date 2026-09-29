import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";

const output = new URL("../dist/", import.meta.url);
const siteUrl = "https://edwinnrm.dev.br/";
const previewUrl = "https://edwin-medina-portfolio.edwinnrm.chatgpt.site/";

// GitHub Pages serves 404.html for direct visits to SPA project routes.
await copyFile(new URL("index.html", output), new URL("404.html", output));
await writeFile(new URL(".nojekyll", output), "");
await writeFile(new URL("CNAME", output), "edwinnrm.dev.br\n");

for (const slug of ["resumeos", "atlas-agroindustrial", "kleos", "lazyjob"]) {
  const route = new URL(`projects/${slug}/`, output);
  await mkdir(route, { recursive: true });
  await copyFile(new URL("index.html", output), new URL("index.html", route));
}

for (const filename of ["robots.txt", "sitemap.xml"]) {
  const path = new URL(filename, output);
  const content = await readFile(path, "utf8");
  const normalized = content
    .replaceAll(previewUrl, siteUrl)
    .replaceAll(/(<loc>https:\/\/edwinnrm\.dev\.br\/projects\/[^<\/]+)(<\/loc>)/g, "$1/$2");
  await writeFile(path, normalized);
}

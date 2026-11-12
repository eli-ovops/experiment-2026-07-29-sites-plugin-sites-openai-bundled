import { industries, solutions } from "../content";

export async function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const paths = [
    "",
    "/solutions",
    ...solutions.map((item) => `/solutions/${item.slug}`),
    "/industries",
    ...industries.map((item) => `/industries/${item.slug}`),
    "/delivery",
    "/cases",
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "content-type": "application/xml; charset=utf-8" },
  });
}

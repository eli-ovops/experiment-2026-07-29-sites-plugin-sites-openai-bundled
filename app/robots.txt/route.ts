export async function GET(request: Request) {
  const origin = new URL(request.url).origin;
  return new Response(`User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

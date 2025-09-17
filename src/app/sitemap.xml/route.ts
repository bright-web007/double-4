import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  // ✅ headers() is synchronous
  const headersList =  headers()
  const host = (await headersList).get('host') // e.g. localhost:3000 or yourdomain.com
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
  const baseUrl = `${protocol}://${host}`

  const routes = [
    { url: "/", priority: 1.0 },
    { url: "/about", priority: 1.0 },
    { url: "/services", priority: 1.0 },
    { url: "/menu", priority: 1.0 },
    { url: "/gallery", priority: 1.0 },
    { url: "/contact-us", priority: 1.0 },
  ]

  const lastmod = new Date().toISOString().split("T")[0]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}

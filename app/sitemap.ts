import { generateSitemap } from "@ai-whisperers/seo"
import content from "@/content/es.json"

const c = content as any
const base = c.site?.url || "https://jottaink.paragu-ai.com"

export default function sitemap() {
  return generateSitemap({
    baseUrl: base,
    pages: [
      { url: "/", priority: 1.0, changeFrequency: "weekly" },
      { url: "/trabajo", priority: 0.9, changeFrequency: "monthly" },
      { url: "/servicios", priority: 0.8, changeFrequency: "monthly" },
      { url: "/faq", priority: 0.7, changeFrequency: "monthly" },
      { url: "/contacto", priority: 0.6, changeFrequency: "monthly" },
    ],
  })
}

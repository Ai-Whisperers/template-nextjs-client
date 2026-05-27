import { faqSchema } from "@ai-whisperers/seo"
import content from "@/content/es.json"

export function FaqJsonLd() {
  const faq = (content as any).faq || {}
  const items: any[] = faq.items || []
  if (items.length === 0) return null

  const data = faqSchema(items.map((i: any) => ({ question: i.q, answer: i.a })))
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

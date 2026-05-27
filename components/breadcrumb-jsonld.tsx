import { breadcrumbSchema } from "@ai-whisperers/seo"

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = breadcrumbSchema(items.map(i => ({ name: i.name, item: `https://jottaink.paragu-ai.com${i.url}` })))
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

import { articleSchema } from "@ai-whisperers/seo"

export function ArticleJsonLd({ title, description, date, author, slug }: {
  title: string; description: string; date: string; author: string; slug: string
}) {
  const data = articleSchema({
    headline: title,
    description,
    author,
    datePublished: date,
    publisherName: "Jota Ink",
  })
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

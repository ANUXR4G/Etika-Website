import Link from "next/link"

export function ProductCard({
  title,
  description,
  href,
  query,
}: {
  title: string
  description: string
  href?: string
  query: string
}) {
  return (
    <div className="floating-card overflow-hidden">
      <img
        src={`/.jpg?height=200&width=400&query=${encodeURIComponent(query)}`}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-5">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-foreground/70 mt-1">{description}</p>
        {href ? (
          <Link href={href} className="inline-block mt-3 text-sm text-primary hover:underline">
            Learn more
          </Link>
        ) : null}
      </div>
    </div>
  )
}

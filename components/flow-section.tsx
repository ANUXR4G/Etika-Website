import type { ReactNode } from "react"

type Item = {
  title: string
  description: string
  cta?: ReactNode
  imageAlt: string
  imageQuery: string
}

export function FlowSection({ items, heading, sub }: { items: Item[]; heading: string; sub?: string }) {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-balance">{heading}</h2>
          {sub ? <p className="mt-3 text-foreground/70">{sub}</p> : null}
        </div>

        <div className="relative mt-12 grid gap-10 lg:grid-cols-3">
          {items.map((it, i) => (
            <article key={i} className="relative flex flex-col items-center">
              <div className="mx-auto w-48 h-48 rounded-full overflow-hidden ring-4 ring-accent/50 bg-card shrink-0">
                <img
                  src={`/.jpg?key=o2oq0&height=320&width=320&query=${encodeURIComponent(it.imageQuery)}`}
                  alt={it.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 floating-card p-6 w-full">
                <h3 className="font-semibold text-lg text-center">{it.title}</h3>
                <p className="text-sm text-foreground/70 mt-2 text-center">{it.description}</p>
                {it.cta ? <div className="mt-4 flex justify-center">{it.cta}</div> : null}
              </div>
            </article>
          ))}

          {/* SVG curved flow connector with extended left and right curves */}
          <svg
            className="pointer-events-none absolute inset-0 -z-10 hidden lg:block"
            viewBox="0 0 1400 300"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
            style={{ left: '-100px', right: '-100px', width: 'calc(100% + 200px)' }}
          >
            <path 
              className="flow-path" 
              d="M 0 150 C 80 60, 120 200, 300 96 C 400 180, 440 10, 700 96 C 960 180, 1000 10, 1100 96 C 1280 200, 1320 60, 1400 150" 
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeOpacity="0.3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

import { ProductCard } from "@/components/product-card"

export default function ProductsPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">Products</h1>
        <p className="mt-3 max-w-3xl text-foreground/70">
          A unique mix of sustainable materials — carefully sourced and quality‑checked.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            title="Recyclable Metals"
            description="Aluminum, copper, and more for circular manufacturing."
            query="Recyclable%20metals%20ingots"
          />
          <ProductCard
            title="Recyclable Non‑Metals"
            description="High‑grade plastic and glass inputs for reprocessing."
            query="Recyclable%20non-metals%20plastic%20bales"
          />
          <ProductCard
            title="Pine Wood Logs"
            description="Responsibly managed timber with documented provenance."
            query="Pine%20wood%20logs%20stack"
          />
          <ProductCard
            title="Premium Bananas"
            description="Ethically traded bananas meeting export standards."
            query="Premium%20bananas%20on%20branch"
          />
          <ProductCard
            title="Custom Sourcing"
            description="Looking for something else? We can help."
            query="Sustainable%20supply%20chain%20concept"
          />
        </div>

        <div className="mt-12 section-primary rounded-lg p-6 flex flex-col md:flex-row items-center gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">Need a detailed catalog?</h2>
            <p className="opacity-90">Get specifications, grades, and ordering guidelines.</p>
          </div>
          <a href="/contact" className="md:ml-auto px-5 py-2.5 rounded-md bg-primary-foreground text-primary text-sm">
            Request catalog
          </a>
        </div>
      </div>
    </section>
  )
}

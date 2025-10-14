import { FlowSection } from "@/components/flow-section"

export default function ServicesPage() {
  return (
    <>
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold">Services</h1>
          <p className="mt-3 max-w-3xl text-foreground/70">
            From sourcing to logistics, we deliver reliable, ethical, and efficient materials supply across sectors.
          </p>
        </div>
      </section>

      <FlowSection
        heading="How We Power Sustainable Growth"
        items={[
          {
            title: "Recyclables Supply",
            description:
              "Sourcing metals and non‑metals for the circular economy with strict quality verification and traceability.",
            imageAlt: "Recyclable metal scrap close-up",
            imageQuery: "Recyclable%20metal%20scrap%20macro",
          },
          {
            title: "Renewable Timber",
            description:
              "Responsibly managed pine wood logs with sustainable forestry partners and transparent chain‑of‑custody.",
            imageAlt: "Sustainable pine timber",
            imageQuery: "Sustainable%20pine%20timber%20forest",
          },
          {
            title: "Agri Trade",
            description: "Premium bananas sourced from farms aligned with ethical labor and environmental practices.",
            imageAlt: "Banana farms",
            imageQuery: "Banana%20plantation%20aerial",
          },
        ]}
      />

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Why companies choose Etika</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["Traceability", "Lot-level documentation and partner audits."],
              ["Quality Control", "Multi-point checks before shipment."],
              ["Green Logistics", "Optimized routes and recycled packaging."],
              ["Compliance", "Aligned with environmental and labor standards."],
            ].map(([title, desc]) => (
              <div key={title} className="floating-card p-6">
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-foreground/70 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-muted py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Our process</h2>
          <div className="mt-6 grid md:grid-cols-4 gap-6 text-sm">
            {[
              ["1. Sourcing", "Screen and onboard ethical partners."],
              ["2. Verification", "Material tests and documentation."],
              ["3. Logistics", "Efficient, low‑impact transport."],
              ["4. Delivery", "On-time arrival with full records."],
            ].map(([t, d]) => (
              <div key={t} className="floating-card p-5">
                <strong>{t}</strong>
                <p className="mt-2 text-foreground/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

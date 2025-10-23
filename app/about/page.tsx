import TimelinePage from "@/components/timeline";

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-balance text-4xl sm:text-5xl font-semibold leading-tight">
              About <span className="text-primary">Etika</span>
            </h1>
            <p className="mt-4 text-pretty text-foreground/70">
              The name “Etika” reflects our promise: ethical sourcing that protects communities, regenerates nature, and
              empowers responsible growth. We connect industries with recyclable inputs, renewable timber, and
              agricultural produce—verifiably and transparently.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/services" className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm">
                Our Services
              </a>
              <a href="/contact" className="px-5 py-2.5 rounded-md border border-border text-sm hover:bg-muted">
                Partner with us
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="floating-card overflow-hidden">
              <img
                src="/images/leaf-collage.jpg"
                alt="Leaf collage with sustainable materials"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-accent/40 float-y" />
            <div
              className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-primary/20 float-y"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="floating-card p-6">
            <h3 className="text-lg font-semibold">Ethics First</h3>
            <p className="text-sm text-foreground/70 mt-2">
              Full traceability, fair labor, and audited partners across the supply chain.
            </p>
          </div>
          <div className="floating-card p-6">
            <h3 className="text-lg font-semibold">Nature Positive</h3>
            <p className="text-sm text-foreground/70 mt-2">
              Circular materials and reforestation initiatives reduce environmental impact.
            </p>
          </div>
          <div className="floating-card p-6">
            <h3 className="text-lg font-semibold">Reliable at Scale</h3>
            <p className="text-sm text-foreground/70 mt-2">
              Global logistics with consistent quality and on-time delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">Our Story: Ethical Sourcing for a Sustainable Future</h2>
          <p className="mt-3 max-w-4xl text-foreground/70">
            At Etika Pvt Ltd, our mission is to drive sustainable growth by providing a diverse range of high‑quality
            materials. We believe responsible commerce and environmental stewardship are the foundations of long‑term
            success.
          </p>
          <div className="mt-10">
            <div className="relative grid gap-10 lg:grid-cols-3">
              {[
                {
                  title: "The Circular Economy",
                  desc: "Top‑quality recyclable metals and non‑metals for waste reduction and resource efficiency.",
                  alt: "Recyclables",
                  q: "Recyclable materials macro",
                },
                {
                  title: "Renewable Resources",
                  desc: "Responsibly managed pine wood logs for a continuous, sustainable supply.",
                  alt: "Timber",
                  q: "Sustainable pine forest logs",
                },
                {
                  title: "Agricultural Excellence",
                  desc: "Premium export‑grade bananas supporting ethical, sustainable farming.",
                  alt: "Bananas",
                  q: "Premium bananas still life",
                },
              ].map((it, i) => (
                <article key={i} className="relative">
                  <div className="mx-auto w-40 h-40 rounded-full overflow-hidden ring-4 ring-accent/50 bg-card">
                    <img
                      src={`/.jpg?key=qaa2z&height=280&width=280&query=${encodeURIComponent(it.q)}`}
                      alt={it.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-5 floating-card p-6">
                    <h3 className="font-semibold">{it.title}</h3>
                    <p className="text-sm text-foreground/70 mt-2">{it.desc}</p>
                  </div>
                </article>
              ))}
              <svg
                className="pointer-events-none absolute inset-0 -z-10"
                viewBox="0 0 1200 360"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path className="flow-path" d="M 60 100 C 260 40, 440 140, 620 100 S 980 200, 1120 140" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="section-muted py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Milestones</h2>
          <TimelinePage />
        </div>
      </section>

      <section className="section-primary py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold">Partner with Etika</h2>
            <p className="mt-2 opacity-90">Let’s build a healthier supply chain together.</p>
          </div>
          <div className="md:ml-auto">
            <a href="/contact" className="px-5 py-2.5 rounded-md bg-primary-foreground text-primary text-sm">
              Start a conversation
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Ethical Sourcing for a <span className="text-primary">Sustainable Future</span>
          </h1>
          <p className="mt-5 text-pretty text-foreground/70">
            At Etika Pvt Ltd, our mission is to drive sustainable growth by providing a diverse range of high-quality
            materials. The name “Etika” reflects the ethical, responsible approach we bring to every part of our
            business.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Link href="/services" className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm">
              Explore Services
            </Link>
            <Link href="/contact" className="px-5 py-2.5 rounded-md border border-border text-sm hover:bg-muted">
              Contact Us
            </Link>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 text-center">
            <div>
              <dt className="text-2xl font-semibold">30k+</dt>
              <dd className="text-xs text-foreground/60">Tons sourced</dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold">80k+</dt>
              <dd className="text-xs text-foreground/60">Trees replanted</dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold">90+</dt>
              <dd className="text-xs text-foreground/60">Global partners</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="floating-card p-4 sm:p-6 relative overflow-hidden">
            <img
              src="/images/hero-organic.jpg"
              alt="Organic montage: recycled metals, pine logs, and bananas"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-4 top-4 w-24 h-24 rounded-full bg-primary/15 blur-2xl float-y" />
              <div
                className="absolute right-6 bottom-6 w-20 h-20 rounded-full bg-accent/30 blur-xl float-y"
                style={{ animationDelay: "1.2s" }}
              />
            </div>
          </div>

          {/* callout chips */}
          <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-accent/40 float-y" />
          <div
            className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/20 float-y"
            style={{ animationDelay: "0.8s" }}
          />

          <div className="absolute -bottom-5 right-10 floating-card px-4 py-2 text-xs text-foreground/80 hidden sm:block pulse-ring">
            Recyclable • Renewable • Ethical
          </div>
        </div>
      </div>
    </section>
  )
}

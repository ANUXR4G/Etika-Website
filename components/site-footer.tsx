import Link from "next/link"

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">
            <span className="text-primary">Etika</span> Pvt Ltd
          </div>
          <p className="text-sm text-foreground/70 mt-2">
            Ethical sourcing for a sustainable future — powering growth with responsibly traded materials.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm">
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/services" className="hover:text-primary">
            Services
          </Link>
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="text-sm text-foreground/60 md:text-right">© {year} Etika Pvt Ltd. All rights reserved.</div>
      </div>
    </footer>
  )
}

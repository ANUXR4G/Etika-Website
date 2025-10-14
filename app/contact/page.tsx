import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">Contact</h1>
        <p className="mt-3 text-foreground/70">
          Tell us about your sourcing needs. We’ll respond within 1–2 business days.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

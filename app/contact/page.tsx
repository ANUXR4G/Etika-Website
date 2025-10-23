import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/contact.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional: Dark overlay for better text readability */}
      <div className="absolute inset-0  -z-10" />

      {/* Contact Section */}
      <section className="relative z-10 py-6 lg:py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-[#0e7a3e]">Contact</h1>
          <p className="mt-3 text-[#0e7a3e]/90">
            Tell us about your sourcing needs. We'll respond within 1–2 business days.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

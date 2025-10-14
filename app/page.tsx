"use client"

import { motion } from "framer-motion"
import { Hero } from "@/components/hero"
import { FlowSection } from "@/components/flow-section"

export default function HomePage() {
  const features = [
    {
      title: "Ethical by design",
      description: "Partners vetted for fair labor and environmental impact.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Nature‑positive",
      description: "We prioritize recyclable inputs and reforestation.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Transparent",
      description: "Full chain‑of‑custody, lot tracking, and documentation.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Global & Reliable",
      description: "A network that delivers on time at scale.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  }

  return (
    <>
      <Hero />
      
      <FlowSection
        heading="Our Diverse Commitment to Quality"
        sub="A singular source for powering your sustainable growth."
        items={[
          {
            title: "The Circular Economy",
            description:
              "We source and supply top‑quality recyclable metals and non‑metals, contributing directly to waste reduction and resource efficiency.",
            imageAlt: "Recyclable metals and non‑metals",
            imageQuery: "Recyclable%20metals%20and%20non-metals%20close-up",
          },
          {
            title: "Renewable Resources",
            description:
              "We provide responsibly managed pine wood logs, ensuring a continuous supply of sustainable wood for global needs.",
            imageAlt: "Pine wood logs",
            imageQuery: "Pine%20wood%20logs%20stack",
          },
          {
            title: "Agricultural Excellence",
            description:
              "We trade premium agricultural products — specifically high‑quality bananas — supporting ethical and sustainable farming.",
            imageAlt: "Bananas",
            imageQuery: "Premium%20bananas%20still%20life",
          },
        ]}
      />

      <section className="section-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">Partner with Etika</h2>
          <p className="mt-3 max-w-3xl text-foreground/70">
            When you choose Etika, you're not just getting quality materials; you are partnering with a company
            committed to an ethical supply chain and a healthier environment.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <figure className="floating-card overflow-hidden">
              <img
                src="/images/reference-matcha.png"
                alt="Reference layout with flowing connectors"
                className="w-full h-auto"
              />
              <figcaption className="p-4 text-sm text-foreground/70">
                Reference: flowing connectors and circular visuals
              </figcaption>
            </figure>
            <figure className="floating-card overflow-hidden">
              <img
                src="/images/reference-skincare.png"
                alt="Reference hero with layered cards"
                className="w-full h-auto"
              />
              <figcaption className="p-4 text-sm text-foreground/70">
                Reference: layered hero cards and callouts
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Why Etika
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-accent via-primary to-accent rounded-full" />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 via-primary/30 to-accent/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                
                <div className="relative floating-card p-8 h-full rounded-2xl border border-border/40 group-hover:border-accent/50 transition-all duration-500 bg-card/80 backdrop-blur-sm">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg mb-3 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-8 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20">
        <div className="flex">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                  Let's build a greener supply chain
                </h2>
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                  Let's build a greener supply chain
                </h2>
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
            ))}
          </motion.div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <a 
            href="/contact" 
            className="pointer-events-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-2xl hover:scale-105 hover:shadow-accent/50 transition-all duration-300 border-2 border-primary-foreground/20"
          >
            Get in touch
          </a>
        </div>
      </section>
    </>
  )
}

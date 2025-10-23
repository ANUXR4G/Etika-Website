"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface FlowItem {
  title: string
  description: string
  imageAlt: string
  imageQuery: string
  imageSrc?: any // For local images
}

interface FlowSectionProps {
  heading: string
  sub: string
  items: FlowItem[]
}

export function FlowSection({ heading, sub, items }: FlowSectionProps) {
  return (
    <section className="relative py-20 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {heading}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {sub}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting dashed line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-primary/30 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative flex flex-col items-center"
              >
                {/* Circle with image */}
                <div className="relative w-48 h-48 mb-8 group">
                  <div className="absolute inset-0 rounded-full border-4 border-primary bg-background shadow-lg group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-4 rounded-full overflow-hidden">
                    {item.imageSrc ? (
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <img
                        src={`https://source.unsplash.com/400x400/?${item.imageQuery}`}
                        alt={item.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  {/* Label */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full whitespace-nowrap text-sm font-medium text-primary-foreground shadow-md">
                    {item.title.split(" ").slice(-2).join(" ")}
                  </div>
                </div>

                {/* Card */}
                <div className="floating-card p-6 rounded-2xl text-center max-w-sm bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

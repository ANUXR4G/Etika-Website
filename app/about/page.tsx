"use client";

import TimelinePage from "@/components/timeline";
import Image from "next/image";
import { motion } from "framer-motion";
import circular from "@/public/circulareconomy.png";
import agri from "@/public/agri.png";
import renewable from "@/public/renewable.png";

export default function AboutPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <>
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-balance text-4xl sm:text-5xl font-semibold leading-tight">
              About <span className="text-primary">Etika</span>
            </h1>
            <p className="mt-4 text-pretty text-foreground/70">
              The name "Etika" reflects our promise: ethical sourcing that protects communities, regenerates nature,
              and empowers responsible growth. We connect industries with recyclable inputs, renewable timber, and
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="floating-card overflow-hidden">
              <img src="/images/leaf-collage.jpg" alt="Leaf collage with sustainable materials" className="w-full h-auto" />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-accent/40 float-y" />
            <div
              className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-primary/20 float-y"
              style={{ animationDelay: "1s" }}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Ethics First",
                desc: "Full traceability, fair labor, and audited partners across the supply chain.",
              },
              {
                title: "Nature Positive",
                desc: "Circular materials and reforestation initiatives reduce environmental impact.",
              },
              {
                title: "Reliable at Scale",
                desc: "Global logistics with consistent quality and on-time delivery.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="floating-card p-6 border border-border/40 hover:border-accent/50 transition-all duration-500 rounded-2xl"
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-foreground/70 mt-2">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Flow Section - Matching HomePage FlowSection styling with enhanced hover effects */}
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
              Our Story: Ethical Sourcing for a Sustainable Future
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              At Etika Pvt Ltd, our mission is to drive sustainable growth by providing a diverse range of high‑quality
              materials. We believe responsible commerce and environmental stewardship are the foundations of long‑term
              success.
            </p>
          </motion.div>

          <div className="relative">
            {/* Animated SVG curve with moving dots */}
            <svg
              className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2 w-[120%] h-48 hidden lg:block"
              viewBox="0 0 1400 200"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0e7a3e" stopOpacity="0.3" />
                  <stop offset="20%" stopColor="#0e7a3e" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#0e7a3e" stopOpacity="1" />
                  <stop offset="80%" stopColor="#0e7a3e" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#0e7a3e" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              <path
                d="M 50 100 Q 200 80, 350 100 Q 500 60, 700 100 Q 900 140, 1050 100 Q 1200 80, 1350 100"
                fill="none"
                stroke="url(#flowGradient)"
                strokeWidth="3"
                strokeDasharray="12 8"
                strokeLinecap="round"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1s" repeatCount="indefinite" />
              </path>

              <circle r="6" fill="#0e7a3e" opacity="1">
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  path="M 50 100 Q 200 80, 350 100 Q 500 60, 700 100 Q 900 140, 1050 100 Q 1200 80, 1350 100"
                />
              </circle>

              <circle r="6" fill="#0e7a3e" opacity="0.7">
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  begin="2s"
                  path="M 50 100 Q 200 80, 350 100 Q 500 60, 700 100 Q 900 140, 1050 100 Q 1200 80, 1350 100"
                />
              </circle>

              <circle r="6" fill="#0e7a3e" opacity="0.5">
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  begin="4s"
                  path="M 50 100 Q 200 80, 350 100 Q 500 60, 700 100 Q 900 140, 1050 100 Q 1200 80, 1350 100"
                />
              </circle>

              <path
                d="M 700 100 L 695 95 M 700 100 L 695 105"
                fill="none"
                stroke="#0e7a3e"
                strokeWidth="2.5"
                strokeOpacity="1"
                strokeLinecap="round"
              />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4">
              {[
                {
                  title: "The Circular Economy",
                  desc: "We source and supply top‑quality recyclable metals and non‑metals, contributing directly to waste reduction and resource efficiency.",
                  alt: "Circular Economy",
                  image: circular,
                },
                {
                  title: "Renewable Resources",
                  desc: "We provide responsibly managed pine wood logs, ensuring a continuous supply of sustainable wood for global needs.",
                  alt: "Pine wood logs",
                  image: renewable,
                },
                {
                  title: "Agricultural Excellence",
                  desc: "We trade premium agricultural products — specifically high‑quality bananas — supporting ethical and sustainable farming.",
                  alt: "Fresh Bananas",
                  image: agri,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Circle with image - Enhanced hover effects */}
                  <div className="relative w-48 h-48 mb-8 group">
                    {/* Outer border with hover effect */}
                    <div className="absolute inset-0 rounded-full border-4 border-primary bg-background shadow-lg group-hover:border-[#0e7a3e] group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300" />
                    
                    {/* Inner circle with image and zoom effect */}
                    <div className="absolute inset-4 rounded-full overflow-hidden">
                      <Image 
                        src={item.image} 
                        alt={item.alt} 
                        fill 
                        className="object-cover group-hover:scale-125 transition-transform duration-500 ease-out" 
                      />
                    </div>
                    
                    {/* Step Label - Larger text size */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1.5 rounded-full whitespace-nowrap text-base font-semibold text-primary-foreground shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      Step {idx + 1}
                    </div>
                  </div>

                  {/* Card with hover effects */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="floating-card p-6 rounded-2xl text-center max-w-sm bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-muted py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Milestones</h2>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-accent via-primary to-accent rounded-full" />
          </motion.div>
          <TimelinePage />
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
                  Partner with Etika
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
                  Partner with Etika
                </h2>
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-primary py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold">Let's build a healthier supply chain together</h2>
            <p className="mt-2 opacity-90">Join us in creating a sustainable future.</p>
          </div>
          <div className="md:ml-auto">
            <a href="/contact" className="px-5 py-2.5 rounded-md bg-primary-foreground text-primary text-sm">
              Start a conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

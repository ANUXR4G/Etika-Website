"use client"

import Link from "next/link"
import { motion } from "framer-motion"

function RevealText({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span style={{ position: "relative", display: "inline-block", overflow: "hidden" }}>
      <motion.span
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: delay + 0.8,
          duration: 0.6,
          ease: [0.33, 1, 0.68, 1]
        }}
        style={{ display: "inline-block" }}
      >
        {children}
      </motion.span>
      
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#cee7ad",
          transformOrigin: "left",
          zIndex: 1,
        }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.22, 1, 0.36, 1]
        }}
        onAnimationStart={(definition) => {
          // Animate the box sliding in and out
        }}
        animate={{
          scaleX: [0, 1, 1, 0],
          transformOrigin: ["left", "left", "right", "right"]
        }}
        // @ts-ignore
        transition={{
          duration: 1.6,
          delay: delay,
          times: [0, 0.3, 0.7, 1],
          ease: [0.65, 0, 0.35, 1]
        }}
      />
    </span>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            <RevealText delay={0}>
              Ethical Sourcing for a{" "}
            </RevealText>
            <RevealText delay={0.3}>
              <span className="text-primary">Sustainable Future</span>
            </RevealText>
          </h1>
          
          <RevealText delay={0.6}>
            <p className="mt-5 text-pretty text-foreground/70">
              At Etika Pvt Ltd, our mission is to drive sustainable growth by providing a diverse range of high-quality
              materials. The name "Etika" reflects the ethical, responsible approach we bring to every part of our
              business.
            </p>
          </RevealText>

          <div className="mt-8 flex items-center gap-3">
            <RevealText delay={0.9}>
              <Link href="/services" className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm">
                Explore Services
              </Link>
            </RevealText>
            <RevealText delay={1.1}>
              <Link href="/contact" className="px-5 py-2.5 rounded-md border border-border text-sm hover:bg-muted">
                Contact Us
              </Link>
            </RevealText>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 text-center">
            <RevealText delay={1.3}>
              <div>
                <dt className="text-2xl font-semibold">30k+</dt>
                <dd className="text-xs text-foreground/60">Tons sourced</dd>
              </div>
            </RevealText>
            <RevealText delay={1.5}>
              <div>
                <dt className="text-2xl font-semibold">80k+</dt>
                <dd className="text-xs text-foreground/60">Trees replanted</dd>
              </div>
            </RevealText>
            <RevealText delay={1.7}>
              <div>
                <dt className="text-2xl font-semibold">90+</dt>
                <dd className="text-xs text-foreground/60">Global partners</dd>
              </div>
            </RevealText>
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

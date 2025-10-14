"use client"
import { useState } from "react"
import type React from "react"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form) as any)
    try {
      console.log("[v0] Contact form submitting:", data)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("sent")
      form.reset()
    } catch (err) {
      console.log("[v0] Contact form error:", (err as Error).message)
      setStatus("error")
    }
  }

  return (
    <form onSubmit={onSubmit} className="floating-card p-6 grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <input id="name" name="name" required className="h-10 rounded-md border border-border bg-background px-3" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="h-10 rounded-md border border-border bg-background px-3"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid gap-1">
          <label htmlFor="company" className="text-sm">
            Company
          </label>
          <input id="company" name="company" className="h-10 rounded-md border border-border bg-background px-3" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="topic" className="text-sm">
            Topic
          </label>
          <input
            id="topic"
            name="topic"
            placeholder="e.g., Pine wood supply"
            className="h-10 rounded-md border border-border bg-background px-3"
          />
        </div>
      </div>
      <div className="grid gap-1">
        <label htmlFor="message" className="text-sm">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="rounded-md border border-border bg-background px-3 py-2"
        />
      </div>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "sent" && <span className="text-sm text-primary">Thanks! We'll get back to you shortly.</span>}
        {status === "error" && <span className="text-sm text-destructive">Something went wrong. Try again.</span>}
      </div>
    </form>
  )
}

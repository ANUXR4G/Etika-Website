export async function POST(req: Request) {
  const data = await req.json().catch(() => ({}))
  console.log("[v0] /api/contact data:", data)
  return Response.json({ ok: true })
}

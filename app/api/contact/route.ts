import { NextResponse } from 'next/server'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = body.name?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const message = body.message?.trim() ?? ''

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const apiKey = process.env.MAILGUN_API_KEY
  const domain = process.env.MAILGUN_DOMAIN
  const to = process.env.CONTACT_EMAIL_TO

  if (!apiKey || !domain || !to) {
    console.error('Contact form: missing Mailgun environment variables.')
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 })
  }

  // Mailgun EU-region accounts must set MAILGUN_API_BASE=https://api.eu.mailgun.net
  const apiBase = process.env.MAILGUN_API_BASE ?? 'https://api.mailgun.net'
  const from = process.env.MAILGUN_FROM ?? `Discryptic Website <postmaster@${domain}>`

  const params = new URLSearchParams({
    from,
    to,
    subject: `New contact form message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    'h:Reply-To': email,
  })

  try {
    const res = await fetch(`${apiBase}/v3/${domain}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${apiKey}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    })

    if (!res.ok) {
      console.error('Mailgun error:', res.status, await res.text())
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 502 })
    }
  } catch (err) {
    console.error('Mailgun request failed:', err)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}

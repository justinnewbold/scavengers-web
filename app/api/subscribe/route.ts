import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Simple in-memory rate limiting (resets on server restart)
// For production, consider using Redis or a dedicated rate limiting service
const rateLimit = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_MAX = 5 // Max requests per window
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute in milliseconds

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimit.get(ip)

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 }
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 }
  }

  record.count++
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count }
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const headersList = await headers()
    const forwardedFor = headersList.get('x-forwarded-for')
    const ip = forwardedFor?.split(',')[0]?.trim() || 'unknown'

    // Check rate limit
    const { allowed, remaining } = checkRateLimit(ip)
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'Retry-After': '60',
          },
        }
      )
    }

    const { email, turnstileToken } = await request.json()

    // Verify Turnstile token if configured
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY
    if (turnstileSecret && turnstileToken && turnstileToken !== 'development-mode') {
      const turnstileResponse = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            secret: turnstileSecret,
            response: turnstileToken,
            remoteip: ip,
          }),
        }
      )

      const turnstileResult = await turnstileResponse.json()

      if (!turnstileResult.success) {
        return NextResponse.json(
          { error: 'Bot verification failed. Please try again.' },
          { status: 400 }
        )
      }
    }

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if Supabase is configured
    if (!supabaseUrl || !supabaseKey) {
      // In development without Supabase, just log and return success
      console.log('Email subscription (Supabase not configured):', email)
      return NextResponse.json(
        { message: 'Subscription recorded (development mode)' },
        { status: 200 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Insert email into waitlist table
    const { error } = await supabase
      .from('waitlist')
      .insert([{ email, created_at: new Date().toISOString() }])

    if (error) {
      // Handle duplicate email
      if (error.code === '23505') {
        return NextResponse.json(
          { message: 'You are already on the waitlist!' },
          { status: 200 }
        )
      }
      throw error
    }

    return NextResponse.json(
      { message: 'Successfully added to waitlist!' },
      {
        status: 200,
        headers: { 'X-RateLimit-Remaining': remaining.toString() },
      }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}

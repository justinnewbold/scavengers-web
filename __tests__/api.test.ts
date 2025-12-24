/**
 * @jest-environment node
 */

import { POST } from '../app/api/subscribe/route'

// Mock next/headers
jest.mock('next/headers', () => ({
  headers: jest.fn(() => Promise.resolve({
    get: jest.fn((name: string) => {
      if (name === 'x-forwarded-for') return '127.0.0.1'
      return null
    }),
  })),
}))

describe('Subscribe API', () => {
  it('returns 400 when email is missing', async () => {
    const request = new Request('http://localhost:3000/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBe('Email is required')
  })

  it('returns 400 for invalid email format', async () => {
    const request = new Request('http://localhost:3000/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'not-an-email' }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBe('Invalid email format')
  })

  it('returns 200 for valid email when Supabase is not configured', async () => {
    const request = new Request('http://localhost:3000/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com' }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.message).toBe('Subscription recorded (development mode)')
  })

  it('includes rate limit header in response', async () => {
    const request = new Request('http://localhost:3000/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'ratelimit@example.com' }),
    })

    const response = await POST(request)
    expect(response.headers.get('X-RateLimit-Remaining')).toBeDefined()
  })
})

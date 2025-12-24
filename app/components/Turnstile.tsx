'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    turnstile: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string
          callback: (token: string) => void
          'error-callback': () => void
          'expired-callback': () => void
          theme: 'light' | 'dark' | 'auto'
        }
      ) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
    onTurnstileLoad: () => void
  }
}

interface TurnstileProps {
  onVerify: (token: string) => void
  onError?: () => void
  onExpire?: () => void
}

export default function Turnstile({ onVerify, onError, onExpire }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

    if (!siteKey) {
      console.warn('Turnstile site key not configured, skipping bot protection')
      // Auto-verify in development without Turnstile
      onVerify('development-mode')
      return
    }

    const renderWidget = () => {
      if (containerRef.current && window.turnstile && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: onVerify,
          'error-callback': () => onError?.(),
          'expired-callback': () => onExpire?.(),
          theme: 'dark',
        })
      }
    }

    // Check if Turnstile is already loaded
    if (window.turnstile) {
      renderWidget()
    } else {
      // Wait for script to load
      window.onTurnstileLoad = renderWidget

      // Load the script if not already present
      if (!document.querySelector('script[src*="turnstile"]')) {
        const script = document.createElement('script')
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad'
        script.async = true
        script.defer = true
        document.head.appendChild(script)
      }
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [onVerify, onError, onExpire])

  return (
    <div
      ref={containerRef}
      className="flex justify-center my-4"
      aria-label="Bot verification"
    />
  )
}

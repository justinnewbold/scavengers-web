'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl mb-4">😵</div>
        <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          We encountered an unexpected error. Please try again or contact support if the problem persists.
        </p>
        <button
          onClick={reset}
          className="bg-primary hover:bg-primary-light px-8 py-4 rounded-xl font-semibold text-lg transition"
        >
          Try Again
        </button>
      </div>
    </main>
  )
}

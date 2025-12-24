import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Scavengers - AI-Powered Scavenger Hunts'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 20%, rgba(108, 99, 255, 0.15) 0%, transparent 50%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 70% 80%, rgba(0, 217, 255, 0.1) 0%, transparent 50%)',
            display: 'flex',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <span style={{ fontSize: '72px' }}>🎯</span>
          <span
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Scavengers
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <span
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #6C63FF 0%, #00D9FF 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            AI-Powered Scavenger Hunts
          </span>
          <span
            style={{
              fontSize: '28px',
              color: '#9ca3af',
              maxWidth: '800px',
              textAlign: 'center',
            }}
          >
            Create amazing hunts in seconds. Free for up to 15 players!
          </span>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: '64px',
            marginTop: '48px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#6C63FF' }}>Free</span>
            <span style={{ fontSize: '18px', color: '#9ca3af' }}>Up to 15 players</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#00D9FF' }}>30s</span>
            <span style={{ fontSize: '18px', color: '#9ca3af' }}>AI Generation</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#10b981' }}>100%</span>
            <span style={{ fontSize: '18px', color: '#9ca3af' }}>Offline Ready</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

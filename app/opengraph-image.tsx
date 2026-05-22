import { ImageResponse } from 'next/og'

export const alt = 'Discryptic — Digital Venture Studio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <p
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#ffffff',
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontFamily: 'sans-serif',
            }}
          >
            Discryptic
          </p>
          <p
            style={{
              fontSize: 24,
              color: '#a4a7ae',
              margin: 0,
              fontWeight: 400,
              fontFamily: 'sans-serif',
            }}
          >
            Building and scaling digital brands across AI, finance, compliance
            and emerging digital markets.
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '80px',
            right: '80px',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#ae8c69',
          }}
        />
      </div>
    ),
    { ...size }
  )
}

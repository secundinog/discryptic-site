'use client'

import { useRef, useEffect } from 'react'

const words =
  'Discryptic is a digital venture studio focused on identifying opportunities in high-potential niches and turning them into profitable online businesses'.split(
    ' '
  )

const startColors = words.map((_, i) =>
  i === 0 ? [233, 234, 235] : [37, 43, 55]
)

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const { top, height } = sectionRef.current.getBoundingClientRect()
      const vh = window.innerHeight
      // Scroll range = section height minus one viewport (the sticky window)
      const scrollRange = height - vh
      // p goes 0→1 as the section scrolls from its top aligned to viewport top → section bottom aligned to viewport bottom
      const p = Math.max(0, Math.min(1, -top / scrollRange))

      wordRefs.current.forEach((el, i) => {
        if (!el) return
        const t = Math.max(0, Math.min(1, p * words.length - i))
        const [sr, sg, sb] = startColors[i]
        el.style.color = `rgb(${Math.round(sr + (255 - sr) * t)},${Math.round(sg + (255 - sg) * t)},${Math.round(sb + (255 - sb) * t)})`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={sectionRef} id="about" style={{ height: '280vh' }} className="relative">
      <div className="sticky top-0 flex min-h-screen items-center">
        <div className="container-site">
          <p className="text-center text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            {words.map((word, i) => (
              <span
                key={i}
                ref={(el) => { wordRefs.current[i] = el }}
                style={{ color: i === 0 ? '#e9eaeb' : '#252b37' }}
              >
                {word}{' '}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}

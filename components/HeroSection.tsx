import Link from 'next/link'

function DotPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(255,255,255,0.45) 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px',
        maskImage:
          'radial-gradient(ellipse 55% 90% at 85% 50%, black 0%, transparent 80%)',
      }}
    />
  )
}

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[800px] items-center overflow-hidden py-20">
      <DotPattern />

      <div className="container-site relative z-10 w-full">
        <div className="flex max-w-3xl flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-site-white md:text-7xl">
              Building and scaling{' '}
              <span className="text-gray-600">digital brands</span>
            </h1>
            <p className="max-w-xl text-base text-gray-200">
              We develop online businesses across AI, finance, compliance and
              emerging digital markets.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-3">
              <Link
                href="#portfolio"
                className="btn-slide-primary rounded-btn border border-transparent bg-site-white px-4 py-2.5 text-base font-semibold text-site-black"
              >
                <span className="relative z-10">Explore Portfolio</span>
              </Link>
              <Link
                href="#contact"
                className="btn-slide-outline rounded-btn border border-white/40 px-4 py-2.5 text-base font-semibold text-site-white"
              >
                <span className="relative z-10">Get in touch</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm text-accent">Venture studio model</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span className="text-sm text-accent">Lean builds</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span className="text-sm text-accent">SEO-driven growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

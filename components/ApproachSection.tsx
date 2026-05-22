interface Principle {
  number: string
  label: string
  description: string
}

const principles: Principle[] = [
  {
    number: '01',
    label: 'Lean Development',
    description:
      "We start with sharp MVPs and iterate quickly. Small teams, deliberate scope, deliberate cadence — shipping what compounds and cutting what doesn't.",
  },
  {
    number: '02',
    label: 'SEO-driven growth',
    description:
      'Every project is built with search and content distribution in mind. Topic authority, page architecture, and the long, quiet work of becoming the canonical source.',
  },
  {
    number: '03',
    label: 'Technical Precision',
    description:
      'Clean architecture, modern frameworks, and reliable infrastructure. Engineering is a first-class craft — typed, tested, observable, boring on purpose.',
  },
  {
    number: '04',
    label: 'Long-term roadmap',
    description:
      'Each brand is designed as a standalone business rather than a short-term experiment. Decisions weighed in years, not quarters — built to outlast the cycle.',
  },
]

export default function ApproachSection() {
  return (
    <section className="py-14 md:py-20">
      <div className="container-site flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-gray-200 md:text-5xl">How we build.</h2>
          <p className="max-w-lg text-base text-gray-400">
            Four constants that shape every project across the portfolio —
            engineering, distribution, capital, and time.
          </p>
        </div>

        <div className="flex flex-col">
          {principles.map((principle, i) => (
            <div key={principle.number} className="group">
              <div className="-mx-4 grid grid-cols-1 gap-4 rounded px-4 py-10 transition-colors duration-300 group-hover:bg-white/[0.03] md:grid-cols-[280px_1fr] md:gap-16 lg:grid-cols-[400px_1fr]">
                <div className="flex items-center gap-10 md:gap-12">
                  <span className="w-8 text-base font-semibold text-gray-600 transition-colors duration-300 group-hover:text-gray-400">
                    {principle.number}
                  </span>
                  <span className="text-2xl font-semibold text-gray-200 transition-colors duration-300 group-hover:text-white">
                    {principle.label}
                  </span>
                </div>
                <p className="text-base text-gray-400 transition-colors duration-300 group-hover:text-gray-200">{principle.description}</p>
              </div>
              {i < principles.length - 1 && (
                <div className="border-t border-gray-800" />
              )}
            </div>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}

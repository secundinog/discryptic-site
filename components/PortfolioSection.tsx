import Link from 'next/link'
import { ArrowUpRight } from '@/components/icons'

interface Project {
  index: string
  name: string
  description: string
  domain: string
  href: string
}

const projects: Project[] = [
  {
    index: '01 / 04',
    name: 'Appster',
    description:
      'AI-powered search and recommendation engine for mobile and web apps',
    domain: 'appster.com',
    href: 'https://appster.com',
  },
  {
    index: '02 / 04',
    name: 'Labor Compliance',
    description:
      'Media site covering workplace regulations, best practices and compliance trends in the U.S.',
    domain: 'laborcompliance.com',
    href: 'https://laborcompliance.com',
  },
  {
    index: '03 / 04',
    name: 'MoneyCare.com',
    description:
      'Personal finance tools, calculators and long-term planning resources.',
    domain: 'moneycare.com',
    href: 'https://moneycare.com',
  },
  {
    index: '04 / 04',
    name: 'FrenchAssistant.com',
    description: 'AI powered tools and curated resources for French learners.',
    domain: 'frenchassistant.com',
    href: 'https://frenchassistant.com',
  },
]

// Figma ellipse: 443×471px container at right=-194.77, top=-197
// Center in card coords ≈ (581, 38), rotated 41.25°, expanded ~3× via inset
function BronzeGlow({ id }: { id: string }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      viewBox="0 0 608 450"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id={id} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#C8924A" stopOpacity="0.72" />
          <stop offset="25%"  stopColor="#B88C5A" stopOpacity="0.42" />
          <stop offset="55%"  stopColor="#AE8C69" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#AE8C69" stopOpacity="0"   />
        </radialGradient>
      </defs>
      {/* rx/ry derived from Figma inset-expanded ellipse dims (≈671×973), halved */}
      <ellipse
        cx="581"
        cy="38"
        rx="336"
        ry="487"
        transform="rotate(-41.25 581 38)"
        fill={`url(#${id})`}
      />
    </svg>
  )
}

function ProjectCard({ project, cardIndex }: { project: Project; cardIndex: number }) {
  return (
    <Link
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between overflow-hidden border border-gray-800 p-6 transition-colors duration-500 hover:border-gray-600 md:p-10"
    >
      <BronzeGlow id={`bronze-glow-${cardIndex}`} />

      <div className="relative flex items-center justify-between">
        <span className="text-base font-semibold text-gray-600">
          {project.index}
        </span>
        <ArrowUpRight className="h-6 w-6 text-gray-600 transition-colors duration-300 group-hover:text-gray-200" />
      </div>

      <div className="relative flex flex-col gap-8 pt-12 md:pt-32">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-gray-200 md:text-4xl">
            {project.name}
          </h3>
          <p className="text-base text-gray-200">{project.description}</p>
        </div>
        <div>
          <div className="mb-6 border-t border-gray-800" />
          <p className="text-base text-gray-200">{project.domain}</p>
        </div>
      </div>
    </Link>
  )
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-14 md:py-20">
      <div className="container-site flex flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-3xl font-semibold text-gray-200 md:text-5xl lg:max-w-lg">
            Projects under the Discryptic umbrella.
          </h2>
          <p className="max-w-md text-base text-gray-200 lg:pb-2">
            We operate a small, focused portfolio of brands. Each project is
            designed to stand on its own as a sustainable online business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.index} project={project} cardIndex={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

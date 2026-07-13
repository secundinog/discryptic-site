import Link from 'next/link'
import Image from 'next/image'

const studioLinks = [
  { label: 'About', href: '#about' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
]

const portfolioLinks = [
  { label: 'Appster', href: 'https://appster.com' },
  { label: 'LaborCompliance', href: 'https://laborcompliance.com' },
  { label: 'MoneyCare', href: 'https://moneycare.com' },
  { label: 'French Assistant', href: 'https://frenchassistant.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 pb-6 pt-12">
      <div className="container-site flex flex-col gap-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-4 lg:max-w-sm">
            <Link href="/" aria-label="Discryptic home">
              <Image
                src="/assets/discryptic logo.svg"
                alt="Discryptic"
                width={240}
                height={32}
                unoptimized
              />
            </Link>
            <p className="text-base text-gray-200">
              A digital venture studio building and scaling online businesses for
              the long term.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            <div className="flex flex-col gap-4">
              <p className="text-base text-gray-400">Studio</p>
              {studioLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base text-gray-200 transition-colors hover:text-site-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-base text-gray-400">Portfolio</p>
              {portfolioLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-200 transition-colors hover:text-site-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-base text-gray-400">Contact</p>
              <a
                href="mailto:hello@discryptic.com"
                className="text-base text-gray-200 transition-colors hover:text-site-white"
              >
                hello@discryptic.com
              </a>
            </div>
          </div>
        </div>

        <p className="text-base text-gray-200">
          © 2026 Discryptic LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

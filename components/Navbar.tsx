import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-site-black/90 backdrop-blur-sm">
      <nav className="container-site flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="Discryptic home">
          <Image
            src="/assets/discryptic logo.svg"
            alt="Discryptic"
            width={180}
            height={24}
            unoptimized
          />
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#about"
              className="text-base text-gray-200 transition-colors hover:text-site-white"
            >
              About
            </Link>
            <Link
              href="#portfolio"
              className="text-base text-gray-200 transition-colors hover:text-site-white"
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="text-base text-gray-200 transition-colors hover:text-site-white"
            >
              Contact
            </Link>
          </div>

          <Link
            href="#contact"
            className="btn-slide-outline rounded-btn border border-white/40 px-4 py-2.5 text-base font-semibold text-site-white"
          >
            <span className="relative z-10">Get in touch</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

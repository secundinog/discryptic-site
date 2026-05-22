'use client'

import { useState, FormEvent } from 'react'

function FormField({
  label,
  id,
  type = 'text',
  placeholder,
  multiline = false,
  disabled = false,
}: {
  label: string
  id: string
  type?: string
  placeholder: string
  multiline?: boolean
  disabled?: boolean
}) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="text-sm font-medium text-gray-200">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          rows={6}
          disabled={disabled}
          className="w-full resize-none border-b border-gray-800 bg-transparent pb-4 text-base text-gray-200 placeholder-gray-400 outline-none transition-colors focus:border-gray-400 disabled:cursor-default"
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full border-b border-gray-800 bg-transparent pb-3 text-base text-gray-200 placeholder-gray-400 outline-none transition-colors focus:border-gray-400 disabled:cursor-default"
        />
      )}
    </div>
  )
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-14 md:py-20">
      <div className="container-site flex flex-col gap-16 lg:flex-row lg:gap-24">
        <div className="lg:max-w-xl">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-gray-200 md:text-5xl">
            {`Let's talk. If you're a developer, designer, or partner `}
            <span className="text-gray-600">interested in collaborating.</span>
          </h2>
        </div>

        <div className="w-full max-w-lg lg:ml-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className={`flex flex-col gap-8 transition-opacity duration-500 ${submitted ? 'pointer-events-none opacity-30' : 'opacity-100'}`}>
              <FormField id="name" label="Name" placeholder="Your name" disabled={submitted} />
              <FormField
                id="email"
                label="Email"
                type="email"
                placeholder="you@example.com"
                disabled={submitted}
              />
              <FormField
                id="message"
                label="Message"
                placeholder="What are you working on?"
                multiline
                disabled={submitted}
              />
            </div>

            <div className="flex items-center justify-between">
              {submitted ? (
                <p
                  className="animate-[fadeIn_0.4s_ease_forwards] text-sm text-gray-400"
                  style={{ animationDelay: '150ms', opacity: 0 }}
                >
                  Thanks — we&apos;ll be in touch.{' '}
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-gray-200 underline underline-offset-2 transition-colors hover:text-white"
                  >
                    Send another
                  </button>
                </p>
              ) : (
                <span />
              )}
              <button
                type="submit"
                disabled={submitted}
                className={`rounded-btn px-4 py-2.5 text-base font-semibold ${
                  submitted
                    ? 'flex items-center gap-2 bg-gray-800 text-gray-400 cursor-default transition-colors duration-300'
                    : 'btn-slide-primary border border-transparent bg-site-white text-site-black'
                }`}
              >
                {submitted ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Sent
                  </>
                ) : (
                  <span className="relative z-10">Submit</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile.js'
import SectionHeading from './SectionHeading.jsx'

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-stone-200/70 bg-white py-16 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Contact"
          align="center"
        />

        <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-stone-200 bg-stone-50/60 p-8 text-center sm:p-12">
          <p className="font-serif text-xl font-semibold text-stone-900">
            {profile.name}
          </p>
          <p className="mt-1 text-sm font-medium text-accent-700">{profile.title}</p>

          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-stone-600 sm:text-base">
            Interested in research collaboration, graduate study, or AI/Computer
            Vision opportunities?
          </p>

          <div className="mt-7">
            <a
              href={`mailto:${profile.email}?subject=Research%20collaboration%20%2F%20Graduate%20study%20inquiry`}
              className="inline-flex items-center gap-2 rounded-md bg-accent-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-800"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email Me
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 text-stone-600 transition-colors hover:text-accent-800"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {profile.email}
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-600 transition-colors hover:text-accent-800"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              {profile.githubLabel}
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-600 transition-colors hover:text-accent-800"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              {profile.linkedinLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Minimal academic footer — exactly what the brief asks for, nothing more.
 */
import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-serif text-base font-semibold text-stone-900">
              {profile.name}
            </p>
            <p className="mt-1 text-xs text-stone-500">
              Computer Vision · Deep Learning · AI Research
            </p>
          </div>

          <div className="flex items-center gap-5 text-sm text-stone-600">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent-800"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <span aria-hidden="true" className="text-stone-300">|</span>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent-800"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <span aria-hidden="true" className="text-stone-300">|</span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent-800"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-stone-400">
          © 2026 Joydep Dhar
        </p>
      </div>
    </footer>
  )
}

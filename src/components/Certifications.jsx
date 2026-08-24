import { BadgeCheck } from 'lucide-react'
import { certifications } from '../data/certifications.js'
import SectionHeading from './SectionHeading.jsx'

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 bg-white py-16 sm:py-20"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Credentials" title="Certifications & Awards" />

        <ul className="mt-8 grid gap-x-12 md:grid-cols-2">
          {certifications.map((c) => (
            <li
              key={c.title}
              className="flex items-start gap-3 border-b border-stone-100 py-4 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0"
            >
              <BadgeCheck
                className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent-600"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium text-stone-900">{c.title}</p>
                <p className="mt-0.5 text-xs text-stone-500">{c.issuer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import { Briefcase, Calendar } from 'lucide-react'
import { experience } from '../data/experience.js'
import SectionHeading from './SectionHeading.jsx'

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-16 sm:py-20"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Career"
          title="Professional Experience"
          description="Industry engineering practice alongside my research background."
        />

        <ol className="mt-10 space-y-8">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="relative border-l-2 border-stone-200 pl-6"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[8px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent-500 bg-white"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="inline-flex items-center gap-2 font-serif text-lg font-semibold text-stone-900">
                  {job.role}
                  <span className="font-sans text-sm font-medium text-accent-700">
                    — {job.company}
                  </span>
                </h3>
                <p className="inline-flex items-center gap-1.5 text-xs text-stone-500">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {job.period}
                </p>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {job.summary}
              </p>

              <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {job.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm leading-relaxed text-stone-700"
                  >
                    <Briefcase
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-stone-400"
                      aria-hidden="true"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

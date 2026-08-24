/**
 * Compact academic timeline communicating the transition:
 * Academic Research → Engineering → Continued AI/Research Development.
 * (No claim of ongoing research is made beyond what the CV supports.)
 */
import { academicTimeline, trajectoryNote } from '../data/education.js'
import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const trajectorySteps = trajectoryNote.split('→').map((s) => s.trim())

export default function ResearchTimeline() {
  return (
    <section
      id="timeline"
      className="scroll-mt-24 py-16 sm:py-20"
      aria-labelledby="timeline-heading"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Trajectory"
          title="Academic Timeline"
        />

        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {academicTimeline.map((t) => (
            <li
              key={t.period}
              className={`relative rounded-lg border bg-white p-6 ${
                t.current ? 'border-accent-300 ring-1 ring-inset ring-accent-100' : 'border-stone-200'
              }`}
            >
              {t.current && (
                <span
                  aria-label="Current"
                  className="absolute right-5 top-5 flex h-2.5 w-2.5 rounded-full bg-accent-500 node-pulse"
                />
              )}
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700 tabular-nums">
                {t.period}
              </p>
              <p className="mt-2 text-sm font-medium leading-snug text-stone-900">
                {t.title}
              </p>
            </li>
          ))}
        </ol>

        {/* transition message */}
        <p className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-stone-500">
          {trajectorySteps.map((step, i) => (
            <span key={step} className="inline-flex items-center gap-3">
              <span
                className={`font-medium ${
                  i === trajectorySteps.length - 1 ? 'text-accent-700' : ''
                }`}
              >
                {step}
              </span>
              {i < trajectorySteps.length - 1 && (
                <ArrowRight className="h-3.5 w-3.5 text-stone-400" aria-hidden="true" />
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}

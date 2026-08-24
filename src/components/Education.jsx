import { Award, BadgeCheck, GraduationCap } from 'lucide-react'
import { education } from '../data/education.js'
import SectionHeading from './SectionHeading.jsx'

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 bg-white py-16 sm:py-20"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Academics" title="Education" />

        <ol className="mt-10 space-y-6">
          {education.map((e) => (
            <li
              key={e.institution}
              className="rounded-lg border border-stone-200 p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                <div>
                  <h3 className="inline-flex items-center gap-2.5 font-serif text-xl font-semibold text-stone-900">
                    <GraduationCap className="h-5 w-5 text-accent-600" aria-hidden="true" />
                    {e.institution}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-accent-700">{e.degree}</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center rounded-md border border-accent-200 bg-accent-50 px-3 py-1 text-sm font-semibold tabular-nums text-accent-800">
                    CGPA {e.cgpa}
                  </span>
                  <p className="mt-1.5 text-xs text-stone-500">{e.period}</p>
                </div>
              </div>

              {/* Dean's List highlight */}
              <div className="mt-6 rounded-md border border-accent-200 bg-accent-50/70 p-4 sm:p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-accent-900">
                  <Award className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {e.honors.title} — {e.honors.subtitle}
                </p>
                <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                  {e.honors.semesters.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-xs leading-relaxed text-stone-600">
                      <BadgeCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-600" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="mt-6 border-l-2 border-stone-300 pl-4 font-serif text-sm italic leading-relaxed text-stone-600">
                {e.note}
              </blockquote>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

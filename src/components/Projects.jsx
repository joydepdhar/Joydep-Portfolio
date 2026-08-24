import { Code2, Github, TrendingUp } from 'lucide-react'
import { projects } from '../data/projects.js'
import SectionHeading from './SectionHeading.jsx'

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-stone-200/70 py-16 sm:py-20"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Projects"
          description="Software engineering projects that complement my research work — full-stack systems built with Python and modern web tooling."
        />

        <div className="mt-10 space-y-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-lg border border-stone-200 bg-white p-6 transition-colors hover:border-accent-300 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                <h3 className="inline-flex items-center gap-2.5 font-serif text-xl font-semibold text-stone-900">
                  <Code2 className="h-5 w-5 text-accent-600" aria-hidden="true" />
                  {p.title}
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {p.technologies.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-0.5 text-xs font-medium text-stone-600"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <dl className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                    Problem
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-stone-700">
                    {p.problem}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                    Approach
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-stone-700">
                    {p.approach}
                  </dd>
                </div>
              </dl>

              {p.features.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-1.5 text-xs text-stone-500"
                    >
                      <span aria-hidden="true" className="text-accent-400">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              {p.results.length > 0 && (
                <div className="mt-5 rounded-md border border-stone-200 bg-stone-50 p-4">
                  <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                    <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                    Result
                  </p>
                  <ul className="mt-2 space-y-1">
                    {p.results.map((r) => (
                      <li key={r} className="text-sm leading-relaxed text-stone-700">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-800 transition-colors hover:border-accent-400 hover:text-accent-800"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  View on GitHub
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

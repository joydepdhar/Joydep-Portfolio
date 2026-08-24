import { skillGroups } from '../data/skills.js'
import SectionHeading from './SectionHeading.jsx'

/** Categorized research-oriented skills — deliberately no percentage bars. */
export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-16 sm:py-20"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Toolbox" title="Technical Skills" />

        <div className="mt-10 grid gap-x-10 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.group}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                {g.group}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-stone-200 bg-white px-3 py-1.5 text-sm text-stone-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

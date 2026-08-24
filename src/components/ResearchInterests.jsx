import { Eye, BrainCircuit, ShieldAlert, Video, Network } from 'lucide-react'
import { researchInterests } from '../data/research.js'
import SectionHeading from './SectionHeading.jsx'

const icons = [Eye, BrainCircuit, ShieldAlert, Video, Network]

export default function ResearchInterests() {
  return (
    <section id="research-interests" className="scroll-mt-24 border-t border-stone-200/70 bg-white py-16 sm:py-20" aria-labelledby="interests-heading">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Research"
          title="Research Interests"
          description="Five connected areas guiding my academic work — from visual understanding to real-time intelligent surveillance."
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {researchInterests.map((area, i) => {
            const Icon = icons[i % icons.length]
            return (
              <li
                key={area.title}
                className={`group rounded-lg border border-stone-200 bg-stone-50/60 p-6 transition-colors hover:border-accent-300 hover:bg-white ${
                  i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <Icon className="h-5 w-5 text-accent-600" aria-hidden="true" />
                <h3 className="mt-3 font-serif text-lg font-semibold text-stone-900">
                  {area.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                  {area.description}
                </p>
              </li>
            )
          })}

          {/* quiet filler cell keeps the grid balanced */}
          <li className="hidden rounded-lg border border-dashed border-stone-200 p-6 lg:flex lg:items-center lg:justify-center">
            <p className="text-center text-xs leading-relaxed text-stone-400">
              Areas of active study —<br />
              updated as new work begins.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

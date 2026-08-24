/**
 * Research contribution checklist — strictly the points documented in the CV.
 * No publication / patent / grant claims are made anywhere on this site.
 */
import { CheckCircle2 } from 'lucide-react'
import { thesis } from '../data/research.js'

export default function ResearchContribution({ compact = false }) {
  return (
    <ul
      className={`grid gap-x-10 gap-y-3 ${
        compact ? 'sm:grid-cols-1' : 'sm:grid-cols-2'
      }`}
    >
      {thesis.contributions.map((point) => (
        <li key={point} className="flex items-start gap-3">
          <CheckCircle2
            className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent-600"
            aria-hidden="true"
          />
          <span className="text-sm leading-relaxed text-stone-700">{point}</span>
        </li>
      ))}
    </ul>
  )
}

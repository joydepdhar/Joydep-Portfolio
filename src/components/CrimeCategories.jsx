/**
 * Numbered grid of the 14 crime/activity categories addressed by the thesis.
 */
import { thesis } from '../data/research.js'

export default function CrimeCategories() {
  return (
    <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {thesis.categories.map((category, i) => (
        <li
          key={category}
          className="flex items-center gap-3 rounded-md border border-stone-200 bg-white px-4 py-2.5"
        >
          <span
            aria-hidden="true"
            className="text-[11px] font-semibold tabular-nums text-accent-700"
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <span
            className={`text-sm font-medium ${
              category === 'Normal' ? 'text-emerald-700' : 'text-stone-800'
            }`}
          >
            {category}
          </span>
        </li>
      ))}
    </ol>
  )
}

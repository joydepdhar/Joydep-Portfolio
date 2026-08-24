/**
 * Evaluation section — metric definitions only.
 * Per-metric numbers are NOT fabricated; they live in the thesis itself.
 */
import { Info, ShieldCheck } from 'lucide-react'
import { thesis } from '../data/research.js'

export default function EvaluationMetrics() {
  const { evaluationMetrics, evaluationNote, liveValidation } = thesis

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {evaluationMetrics.map((m) => (
          <div
            key={m.name}
            className="rounded-lg border border-stone-200 bg-white p-5"
          >
            <h4 className="font-serif text-base font-semibold text-stone-900">
              {m.name}
            </h4>
            <p className="mt-2 inline-block rounded bg-accent-50 px-2 py-1 font-mono text-[11px] text-accent-800 ring-1 ring-inset ring-accent-100">
              {m.formula}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">{m.purpose}</p>
          </div>
        ))}
      </div>

      <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-stone-500">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-stone-400" aria-hidden="true" />
        {evaluationNote}
      </p>

      {/* live CCTV validation */}
      <div className="mt-8 rounded-lg border border-stone-200 bg-white p-6 sm:p-7">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="h-5 w-5 text-accent-600" aria-hidden="true" />
          <h4 className="font-serif text-lg font-semibold text-stone-900">
            Live CCTV Validation
          </h4>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          {liveValidation.intro}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {liveValidation.events.map((e) => (
            <li
              key={e}
              className={`rounded-full border px-3 py-1 text-xs font-medium ${
                e === 'Normal'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                  : 'border-accent-200 bg-accent-50 text-accent-800'
              }`}
            >
              {e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/**
 * Vertical research-pipeline diagram (academic figure style).
 * Used on the Research overview page and the Thesis page.
 */
export default function PipelineDiagram({ steps, label }) {
  return (
    <figure>
      {label && (
        <figcaption className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
          Figure — {label}
        </figcaption>
      )}
      <ol className="relative">
        {/* rail */}
        <span
          aria-hidden="true"
          className="absolute bottom-3 left-[13px] top-3 w-px bg-stone-200"
        />
        {steps.map((step, i) => (
          <li key={step.label} className="relative pb-7 pl-12 last:pb-0">
            <span className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-accent-300 bg-accent-50 text-[11px] font-semibold tabular-nums text-accent-800">
              {i + 1}
            </span>
            <p className="font-medium text-stone-900">{step.label}</p>
            {step.detail && (
              <p className="mt-0.5 text-sm leading-snug text-stone-500">{step.detail}</p>
            )}
          </li>
        ))}
      </ol>
    </figure>
  )
}

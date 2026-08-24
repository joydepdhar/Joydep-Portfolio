/**
 * Model comparison bar chart — pure CSS, no chart library.
 * Reports exactly the numbers from the CV: nothing exaggerated.
 */
import { Target, CheckCircle2 } from 'lucide-react'
import { thesis } from '../data/research.js'

const axisTicks = [0, 25, 50, 75, 100]

export default function ModelComparison({ compact = false }) {
  const { resnet50, vgg19, validationAccuracy, comparisonNote, perClassNote } =
    thesis.results

  return (
    <div role="img" aria-label={`Bar chart of test accuracy: ${resnet50.model} ${resnet50.testAccuracy} percent versus ${vgg19.model} ${vgg19.testAccuracy} percent`}>
      <div className={compact ? 'space-y-4' : 'space-y-6'}>
        {[resnet50, vgg19].map((m) => (
          <div key={m.model}>
            <div className="mb-1.5 flex items-baseline justify-between text-sm">
              <p className="font-medium text-stone-900">
                {m.model}
                <span className="ml-2 hidden text-xs font-normal text-stone-400 sm:inline">
                  {m.role}
                </span>
              </p>
              <p className="font-semibold tabular-nums text-stone-900">
                {m.testAccuracy}%
              </p>
            </div>
            <div className="h-3 overflow-hidden rounded-full border border-stone-200 bg-stone-100">
              <div
                className={`h-full rounded-full ${
                  m.model === resnet50.model ? 'bg-accent-600' : 'bg-stone-400'
                }`}
                style={{ width: `${m.testAccuracy}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {!compact && (
        <>
          <div className="mt-1 flex justify-between text-[11px] tabular-nums text-stone-400" aria-hidden="true">
            {axisTicks.map((t) => (
              <span key={t}>{t}%</span>
            ))}
          </div>

          {/* validation accuracy callout */}
          <div className="mt-7 flex items-start gap-3 rounded-md border border-accent-200 bg-accent-50 px-4 py-3.5">
            <Target className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-stone-700">
              Validation accuracy — <strong className="font-semibold text-accent-900">ResNet-50: {validationAccuracy}%</strong>
            </p>
          </div>

          {/* interpretation */}
          <blockquote className="mt-6 border-l-2 border-accent-300 pl-4 font-serif text-base italic leading-relaxed text-stone-600">
            “{comparisonNote}”
          </blockquote>

          <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-stone-600">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" aria-hidden="true" />
            {perClassNote}
          </p>
        </>
      )}
    </div>
  )
}

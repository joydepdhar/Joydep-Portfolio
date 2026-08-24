import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ChevronRight,
  GraduationCap,
  User,
} from 'lucide-react'
import { thesis } from '../data/research.js'
import SectionHeading from './SectionHeading.jsx'

const pipelineStrip = [
  'UCF Crime Dataset',
  'Pre-processing',
  'Augmentation',
  'Transfer Learning',
  'ResNet-50 / VGG-19',
  'Evaluation',
  'Live CCTV Testing',
]

const keyStats = [
  { value: '91.56%', label: 'Test accuracy · ResNet-50' },
  { value: '76.97%', label: 'Validation accuracy · ResNet-50' },
  { value: '14', label: 'Activity categories' },
  { value: '777,653', label: 'Frames · UCF Crime' },
]

export default function FeaturedResearch() {
  return (
    <section id="featured-research" className="scroll-mt-24 py-16 sm:py-20" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Featured Research" title="Featured Research" />

        <article className="mt-8 rounded-xl border border-stone-200 bg-white p-7 sm:p-10 lg:p-12">
          {/* badges */}
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-800 ring-1 ring-inset ring-accent-200">
              {thesis.type}
            </span>
            <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 ring-1 ring-inset ring-stone-200">
              {thesis.period}
            </span>
          </div>

          <h3 className="mt-5 font-serif text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            {thesis.title}
          </h3>

          <div className="mt-4 flex flex-col gap-1.5 text-sm text-stone-600">
            <p className="inline-flex items-center gap-2">
              <GraduationCap className="h-4 w-4 shrink-0 text-accent-600" aria-hidden="true" />
              {thesis.institution}
            </p>
            <p className="inline-flex items-center gap-2">
              <User className="h-4 w-4 shrink-0 text-accent-600" aria-hidden="true" />
              Supervisor — {thesis.supervisor}
            </p>
          </div>

          <blockquote className="mt-6 border-l-2 border-accent-300 pl-4 font-serif text-base italic leading-relaxed text-stone-700">
            {thesis.focus}
          </blockquote>

          {/* key numbers */}
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-stone-100 py-7 lg:grid-cols-4">
            {keyStats.map((s) => (
              <div key={s.label}>
                <dd className="font-serif text-2xl font-semibold tabular-nums text-accent-800 sm:text-[1.7rem]">
                  {s.value}
                </dd>
                <dt className="mt-1 text-xs leading-snug text-stone-500">{s.label}</dt>
              </div>
            ))}
          </dl>

          {/* activity categories */}
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Detected activity categories
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {thesis.categories.map((c) => (
              <li
                key={c}
                className={`rounded-full border px-3 py-1 text-xs font-medium ${
                  c === 'Normal'
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                    : 'border-stone-200 bg-stone-50 text-stone-700'
                }`}
              >
                {c}
              </li>
            ))}
          </ul>

          {/* condensed pipeline */}
          <div className="mt-8 overflow-x-auto pb-1">
            <ol className="flex w-max items-center gap-1.5 text-xs text-stone-600">
              {pipelineStrip.map((step, i) => (
                <li key={step} className="flex items-center gap-1.5">
                  <span
                    className={`whitespace-nowrap rounded-md border px-2.5 py-1.5 ${
                      i === pipelineStrip.length - 1
                        ? 'border-accent-200 bg-accent-50 font-medium text-accent-800'
                        : 'border-stone-200 bg-white'
                    }`}
                  >
                    {step}
                  </span>
                  {i < pipelineStrip.length - 1 && (
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-stone-400" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* actions */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/research/thesis"
              className="inline-flex items-center gap-2 rounded-md bg-accent-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-800"
            >
              Read the Full Thesis
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/research"
              className="text-sm font-semibold text-accent-700 underline-offset-4 transition-colors hover:text-accent-900 hover:underline"
            >
              Methodology overview →
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}

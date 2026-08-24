import { Link } from 'react-router-dom'
import { ArrowRight, Database, SlidersHorizontal } from 'lucide-react'
import ResearchInterests from '../components/ResearchInterests.jsx'
import PipelineDiagram from '../components/PipelineDiagram.jsx'
import ModelComparison from '../components/ModelComparison.jsx'
import ResearchContribution from '../components/ResearchContribution.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { usePageTitle } from '../lib/usePageTitle.js'
import { researchPipeline, thesis } from '../data/research.js'
import { profile } from '../data/profile.js'

/**
 * Research overview — interests, methodology pipeline, headline results,
 * contribution, and a pointer to the full thesis page.
 */
export default function ResearchPage() {
  usePageTitle('Research')

  return (
    <>
      {/* page header */}
      <section className="border-b border-stone-200/70 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-700">
            Research
          </p>
          <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            How I approach visual understanding problems
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
            My work centers on teaching machines to interpret video reliably and
            quickly enough for real-world surveillance. The through-line across my
            interests is applied deep learning: architectures, data preparation,
            and evaluation practices that hold up outside the lab.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="-mx-5 sm:-mx-8">
          <ResearchInterests />
        </div>

        {/* methodology + dataset snapshot */}
        <section className="py-16 sm:py-20" aria-labelledby="methodology-heading">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Methodology"
                title="Research Pipeline"
                description="End-to-end workflow used in my thesis experiments — from raw CCTV video to real-time prediction."
              />
              <div className="mt-8">
                <PipelineDiagram steps={researchPipeline} label="Research workflow" />
              </div>
            </div>

            <div className="space-y-6 lg:pt-[4.7rem]">
              <div className="rounded-lg border border-stone-200 bg-white p-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-stone-900">
                  <Database className="h-4 w-4 text-accent-600" aria-hidden="true" />
                  {thesis.dataset.name}
                </p>
                <dl className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-md bg-stone-50 p-3 ring-1 ring-inset ring-stone-100">
                    <dd className="font-serif text-lg font-semibold tabular-nums text-stone-900">777,653</dd>
                    <dt className="mt-0.5 text-[11px] text-stone-500">frames</dt>
                  </div>
                  <div className="rounded-md bg-accent-50 p-3 ring-1 ring-inset ring-accent-100">
                    <dd className="font-serif text-lg font-semibold tabular-nums text-accent-800">85.7%</dd>
                    <dt className="mt-0.5 text-[11px] text-stone-500">training</dt>
                  </div>
                  <div className="rounded-md bg-stone-50 p-3 ring-1 ring-inset ring-stone-100">
                    <dd className="font-serif text-lg font-semibold tabular-nums text-stone-900">14.3%</dd>
                    <dt className="mt-0.5 text-[11px] text-stone-500">test</dt>
                  </div>
                </dl>
                <Link
                  to="/research/thesis"
                  className="mt-4 inline-block text-sm font-semibold text-accent-700 underline-offset-4 hover:underline"
                >
                  Dataset &amp; methodology details →
                </Link>
              </div>

              <div className="rounded-lg border border-stone-200 bg-white p-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-stone-900">
                  <SlidersHorizontal className="h-4 w-4 text-accent-600" aria-hidden="true" />
                  Documented pre-processing
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {thesis.preprocessing.map((step) => (
                    <li
                      key={step}
                      className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-600"
                    >
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>


      {/* results band */}
      <section
        className="border-y border-stone-200/70 bg-white py-16 sm:py-20"
        aria-labelledby="results-heading"
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Experimental Results"
            title="Model Comparison"
            description="Two transfer-learning backbones were benchmarked on the same splits and preprocessing."
          />
          <div className="mt-10 max-w-2xl">
            <ModelComparison />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* contribution */}
        <section className="py-16 sm:py-20" aria-labelledby="contribution-heading">
          <SectionHeading eyebrow="Outcomes" title="Research Contribution" />
          <div className="mt-7 rounded-lg border border-stone-200 bg-white p-6 sm:p-8">
            <ResearchContribution />
          </div>
        </section>

        {/* thesis call-to-action */}
        <section className="pb-20" aria-label="Thesis link">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-accent-200 bg-accent-50/60 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="font-serif text-xl font-semibold text-stone-900 sm:text-2xl">
                {thesis.title}
              </h2>
              <p className="mt-1.5 text-sm text-stone-600">
                Full abstract, dataset statistics, methodology and evaluation — written up in detail.
              </p>
            </div>
            <Link
              to="/research/thesis"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-accent-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-800"
            >
              Read the Thesis
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <p className="mt-6 pb-2 text-center text-sm text-stone-500">
            Questions about the work?{' '}
            <a
              href={`mailto:${profile.email}`}
              className="font-semibold text-accent-700 underline-offset-4 hover:underline"
            >
              Get in touch
            </a>
            .
          </p>
        </section>
      </div>
    </>
  )
}

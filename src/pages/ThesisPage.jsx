import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  User,
} from 'lucide-react'
import PipelineDiagram from '../components/PipelineDiagram.jsx'
import ModelComparison from '../components/ModelComparison.jsx'
import EvaluationMetrics from '../components/EvaluationMetrics.jsx'
import CrimeCategories from '../components/CrimeCategories.jsx'
import ResearchContribution from '../components/ResearchContribution.jsx'
import { usePageTitle } from '../lib/usePageTitle.js'
import { thesisPipeline, thesis } from '../data/research.js'

/** Paper-style section heading: "1 · Abstract". */
function PaperHeading({ number, title }) {
  return (
    <h2 className="flex items-baseline gap-3 font-serif text-2xl font-semibold tracking-tight text-stone-900">
      <span aria-hidden="true" className="text-base tabular-nums text-accent-600">
        {String(number).padStart(2, '0')}
      </span>
      {title}
    </h2>
  )
}

/**
 * Dedicated thesis page — structured like a research paper.
 * Every claim traces back to the CV; nothing is embellished.
 */
export default function ThesisPage() {
  usePageTitle('Undergraduate Thesis')

  return (
    <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
      {/* breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm">
        <Link
          to="/research"
          className="inline-flex items-center gap-1.5 font-medium text-stone-500 transition-colors hover:text-accent-800"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Research
        </Link>
      </nav>

      {/* paper header */}
      <header className="mt-8">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-800 ring-1 ring-inset ring-accent-200">
            {thesis.type}
          </span>
          <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 ring-1 ring-inset ring-stone-200">
            {thesis.period}
          </span>
        </div>

        <h1 className="mt-5 font-serif text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-[2.6rem] sm:leading-[1.15]">
          {thesis.title}
        </h1>

        <div className="mt-5 flex flex-col gap-1.5 text-sm text-stone-600">
          <p className="inline-flex items-center gap-2">
            <GraduationCap className="h-4 w-4 shrink-0 text-accent-600" aria-hidden="true" />
            {thesis.institution}
          </p>
          <p className="inline-flex items-center gap-2">
            <User className="h-4 w-4 shrink-0 text-accent-600" aria-hidden="true" />
            Supervisor — {thesis.supervisor}
            <span className="text-stone-400">· {thesis.supervisorRole}</span>
          </p>
        </div>

        <blockquote className="mt-7 border-l-2 border-accent-300 pl-4 font-serif text-lg italic leading-relaxed text-stone-700">
          {thesis.focus}
        </blockquote>
      </header>

      {/* 01 — Abstract */}
      <section className="mt-14 border-t border-stone-200 pt-10" aria-labelledby="abstract-heading">
        <PaperHeading number={1} title="Abstract" />
        <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-stone-700">
          {thesis.abstract.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* 02 — Research Problem */}
      <section className="mt-12 border-t border-stone-200 pt-10" aria-labelledby="problem-heading">
        <PaperHeading number={2} title="Research Problem" />
        <p className="mt-5 text-[15px] leading-relaxed text-stone-700">
          {thesis.problem}
        </p>
      </section>

      {/* 03 — Dataset */}
      <section className="mt-12 border-t border-stone-200 pt-10" aria-labelledby="dataset-heading">
        <PaperHeading number={3} title="Dataset" />
        <p className="mt-5 font-serif text-xl font-semibold text-stone-900">
          {thesis.dataset.name}
        </p>
        <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-md border border-stone-200 bg-white p-4 text-center">
            <dd className="font-serif text-2xl font-semibold tabular-nums text-stone-900">777,653</dd>
            <dt className="mt-1 text-xs text-stone-500">total frames</dt>
          </div>
          <div className="rounded-md border border-accent-200 bg-accent-50 p-4 text-center">
            <dd className="font-serif text-2xl font-semibold tabular-nums text-accent-800">85.7%</dd>
            <dt className="mt-1 text-xs text-stone-500">training split</dt>
          </div>
          <div className="rounded-md border border-stone-200 bg-white p-4 text-center">
            <dd className="font-serif text-2xl font-semibold tabular-nums text-stone-900">14.3%</dd>
            <dt className="mt-1 text-xs text-stone-500">test split</dt>
          </div>
        </dl>
        <p className="mt-4 text-sm leading-relaxed text-stone-500">
          Statistics as documented in the thesis. The dataset spans{' '}
          {thesis.dataset.categoriesCount} crime and activity categories.
        </p>
      </section>


      {/* 04 — Methodology */}
      <section className="mt-12 border-t border-stone-200 pt-10" aria-labelledby="methodology-heading">
        <PaperHeading number={4} title="Methodology" />
        <div className="mt-6 rounded-lg border border-stone-200 bg-white p-6 sm:p-8">
          <PipelineDiagram steps={thesisPipeline} label="Thesis research pipeline" />
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
          Documented pre-processing &amp; augmentation
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {thesis.preprocessing.map((step) => (
            <li
              key={step}
              className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-700"
            >
              {step}
            </li>
          ))}
        </ul>
      </section>

      {/* 05 — Model Comparison */}
      <section className="mt-12 border-t border-stone-200 pt-10" aria-labelledby="comparison-heading">
        <PaperHeading number={5} title="Model Comparison" />
        <div className="mt-6">
          <ModelComparison />
        </div>
      </section>

      {/* 06 — Evaluation */}
      <section className="mt-12 border-t border-stone-200 pt-10" aria-labelledby="evaluation-heading">
        <PaperHeading number={6} title="Evaluation" />
        <p className="mb-6 mt-5 text-[15px] leading-relaxed text-stone-700">
          Model quality was assessed with a multi-metric protocol rather than
          accuracy alone:
        </p>
        <EvaluationMetrics />
      </section>

      {/* 07 — Activity Categories */}
      <section className="mt-12 border-t border-stone-200 pt-10" aria-labelledby="categories-heading">
        <PaperHeading number={7} title="Activity Categories" />
        <p className="mb-6 mt-5 text-[15px] leading-relaxed text-stone-700">
          The system addressed {thesis.dataset.categoriesCount} crime and activity
          categories:
        </p>
        <CrimeCategories />
      </section>

      {/* 08 — Research Contribution */}
      <section className="mt-12 border-t border-stone-200 pt-10" aria-labelledby="contribution-heading">
        <PaperHeading number={8} title="Research Contribution" />
        <div className="mt-6">
          <ResearchContribution compact />
        </div>
      </section>

      {/* paper footer navigation */}
      <footer className="mt-16 flex flex-col justify-between gap-4 border-t border-stone-200 pt-8 sm:flex-row">
        <Link
          to="/research"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 transition-colors hover:text-accent-800"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Research
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-700 transition-colors hover:text-accent-900"
        >
          Return Home
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </footer>
    </article>
  )
}

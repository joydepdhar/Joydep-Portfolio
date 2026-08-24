import { Link } from 'react-router-dom'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile, cvUrl } from '../data/profile.js'
import { thesis } from '../data/research.js'

const stats = [
  { value: '3.80 / 4.00', label: 'B.Sc. CGPA — AIUB' },
  {
    value: `${thesis.results.resnet50.testAccuracy}%`,
    label: 'Test accuracy — ResNet-50 (thesis)',
  },
  {
    value: String(thesis.dataset.categoriesCount),
    label: 'Activity categories detected',
  },
]

export default function Hero() {
  return (
    <section className="overflow-hidden" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24 lg:pt-24">
        <div>
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.22em] text-accent-700">
            Research Portfolio
          </p>

          <h1
            id="hero-heading"
            className="animate-fade-up mt-3 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-stone-900 sm:text-5xl lg:text-[3.4rem]"
            style={{ animationDelay: '0.08s' }}
          >
            Joydep Dhar
          </h1>

          <p
            className="animate-fade-up mt-3 text-lg font-medium text-accent-700 sm:text-xl"
            style={{ animationDelay: '0.16s' }}
          >
            Computer Vision &amp; Deep Learning Researcher
          </p>

          <p
            className="animate-fade-up mt-5 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg"
            style={{ animationDelay: '0.24s' }}
          >
            {profile.tagline}
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: '0.32s' }}
          >
            <Link
              to="/research"
              className="inline-flex items-center gap-2 rounded-md bg-accent-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-800"
            >
              View Research
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-800 transition-colors hover:border-accent-400 hover:text-accent-800"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>

        <HeroGraphic />
      </div>
    </section>
  )
}


function HeroGraphic() {
  const nodes = [
    [60, 80], [180, 40], [320, 70], [90, 190], [220, 150],
    [350, 170], [140, 300], [280, 280], [380, 300], [40, 300],
  ]
  const edges = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5],
    [3, 9], [4, 7], [5, 8], [6, 7], [7, 8], [6, 9], [4, 6],
  ]
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto hidden w-full max-w-sm lg:block"
      style={{
        backgroundImage: 'radial-gradient(circle, #e7e5e4 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
    >
      <svg viewBox="0 0 420 360" className="h-auto w-full opacity-70">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            stroke="#c3d5ee"
            strokeWidth="1.4"
          />
        ))}
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 6 : 4} fill="#97b8e0" />
        ))}
        <circle cx="220" cy="150" r="10" fill="#315a99" className="node-pulse" />
        <circle cx="90" cy="190" r="7" fill="#6594cd" className="node-pulse" style={{ animationDelay: '1.4s' }} />
        <circle cx="350" cy="170" r="7" fill="#6594cd" className="node-pulse" style={{ animationDelay: '2.8s' }} />
        <rect
          x="24"
          y="24"
          width="372"
          height="312"
          fill="none"
          stroke="#c3d5ee"
          strokeWidth="1.2"
          strokeDasharray="6 8"
          rx="10"
        />
      </svg>
    </div>
  )
}

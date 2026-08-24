import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Download } from 'lucide-react'
import { profile, cvUrl } from '../data/profile.js'
import { scrollToId } from '../lib/scroll.js'

const routeLinks = [
  { label: 'Home', to: '/' },
  { label: 'Research', to: '/research' },
  { label: 'Thesis', to: '/research/thesis' },
]

const sectionLinks = [
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const goToSection = (id) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
    } else {
      scrollToId(id)
    }
  }

  const linkBase = 'text-sm font-medium transition-colors'
  const activeCls = 'text-accent-800'
  const idleCls = 'text-stone-600 hover:text-stone-950'

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/85 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8"
      >
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-accent-800 font-serif text-sm font-semibold text-white"
          >
            JD
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-stone-900">
            Joydep Dhar
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {routeLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={`${linkBase} ${
                location.pathname === l.to ? activeCls : idleCls
              }`}
            >
              {l.label}
            </Link>
          ))}
          {sectionLinks.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => goToSection(l.id)}
              className={`${linkBase} cursor-pointer ${idleCls}`}
            >
              {l.label}
            </button>
          ))}
          <a
            href={cvUrl}
            download
            className="inline-flex items-center gap-1.5 rounded-md border border-stone-300 bg-white px-3.5 py-1.5 text-sm font-semibold text-stone-800 transition-colors hover:border-accent-400 hover:text-accent-800"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-stone-700 transition-colors hover:bg-stone-200/70 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-stone-200/80 bg-stone-50/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto max-w-5xl space-y-1 px-5 py-4 sm:px-8">
            {routeLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2.5 text-sm font-medium ${
                  location.pathname === l.to
                    ? 'bg-accent-50 text-accent-800'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {l.label}
              </Link>
            ))}
            {sectionLinks.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => goToSection(l.id)}
                className="block w-full cursor-pointer rounded-md px-3 py-2.5 text-left text-sm font-medium text-stone-700 hover:bg-stone-100"
              >
                {l.label}
              </button>
            ))}
            <a
              href={cvUrl}
              download
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-accent-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-800"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

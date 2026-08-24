import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import ResearchInterests from '../components/ResearchInterests.jsx'
import FeaturedResearch from '../components/FeaturedResearch.jsx'
import ResearchContribution from '../components/ResearchContribution.jsx'
import Projects from '../components/Projects.jsx'
import Experience from '../components/Experience.jsx'
import Education from '../components/Education.jsx'
import ResearchTimeline from '../components/ResearchTimeline.jsx'
import Skills from '../components/Skills.jsx'
import Certifications from '../components/Certifications.jsx'
import Contact from '../components/Contact.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { scrollToId } from '../lib/scroll.js'
import { usePageTitle } from '../lib/usePageTitle.js'

/**
 * Homepage — research-first hierarchy:
 * Identity → Interests → Featured thesis → Contribution → Projects →
 * Experience → Education → Timeline → Skills → Certifications → Contact.
 */
export default function HomePage() {
  usePageTitle('')
  const location = useLocation()

  // Arriving from another route with a section target (navbar section links).
  useEffect(() => {
    const target = location.state?.scrollTo
    if (target) {
      const t = setTimeout(() => scrollToId(target), 80)
      return () => clearTimeout(t)
    }
  }, [location.state])

  return (
    <>
      <Hero />
      <ResearchInterests />
      <FeaturedResearch />

      {/* slim research-contribution strip */}
      <section className="py-14 sm:py-16" aria-labelledby="contribution-heading">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading eyebrow="Outcomes" title="Research Contribution" />
          <div className="mt-7 rounded-lg border border-stone-200 bg-white p-6 sm:p-8">
            <ResearchContribution />
          </div>
        </div>
      </section>

      <Projects />
      <Experience />
      <Education />
      <ResearchTimeline />
      <Skills />
      <Certifications />
      <Contact />
    </>
  )
}

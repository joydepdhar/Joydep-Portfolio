import { useEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import ResearchPage from './pages/ResearchPage.jsx'
import ThesisPage from './pages/ThesisPage.jsx'

/**
 * Scrolls to top on route change — unless a section target was requested
 * (navbar section links navigate home with { state: { scrollTo } }).
 */
function ScrollManager() {
  const location = useLocation()
  useEffect(() => {
    if (!location.state?.scrollTo) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [location.pathname, location.state])
  return null
}

/**
 * HashRouter keeps every deep link (e.g. /#/research/thesis) resolvable by the
 * static file server on GitHub Pages — refreshing or sharing URLs always works.
 */
export default function App() {
  return (
    <HashRouter>
      <ScrollManager />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/research/thesis" element={<ThesisPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

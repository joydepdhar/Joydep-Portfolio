import { useEffect } from 'react'

/** Keeps the document title in sync with the active page. */
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} — Joydep Dhar`
      : 'Joydep Dhar | Computer Vision & Deep Learning Researcher'
  }, [title])
}

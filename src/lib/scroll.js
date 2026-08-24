/** Smooth-scrolls to an element by id (sections carry scroll-margin for the sticky navbar). */
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

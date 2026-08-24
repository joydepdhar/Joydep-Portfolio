/**
 * Shared section heading — small-caps eyebrow + serif title.
 * Keeps typographic hierarchy consistent across every section.
 */
export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const centered = align === 'center'
  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-700">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-stone-600">{description}</p>
      )}
    </div>
  )
}

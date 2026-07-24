import { useEffect } from 'react'

/**
 * Observes all elements with the `.reveal` class inside the given ref
 * (or the whole document if no ref supplied) and adds `.in-view`
 * once they scroll into the viewport.
 */
export default function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in-view)')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

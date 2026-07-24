import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `end` once the returned ref enters the viewport.
 */
export default function useCountUp(end, duration = 1600) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(step)
            else setValue(end)
          }
          requestAnimationFrame(step)
          observer.unobserve(node)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  return [ref, value]
}

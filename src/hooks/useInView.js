import { useEffect, useRef, useState } from 'react'

export function useInView({ threshold = 0.15, root = null, rootMargin = '0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.unobserve(entry.target)
        }
      })
    }, { threshold, root, rootMargin })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold, root, rootMargin])

  return [ref, inView]
}

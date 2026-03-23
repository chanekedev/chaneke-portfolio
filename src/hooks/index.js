import { useEffect, useRef, useState } from "react"

export function useIntersectionObserver(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: options.threshold ?? 0.2,
        rootMargin: options.rootMargin ?? "0px",
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return [ref, isVisible]
}

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollY
}

export function useMediaQuery(query) {
  const getMatches = (q) => window.matchMedia(q).matches
  const [matches, setMatches] = useState(() => getMatches(query))

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = () => setMatches(getMatches(query))
    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [query])

  return matches
}

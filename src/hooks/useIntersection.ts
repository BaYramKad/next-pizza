import { useCallback } from 'react'

export const useIntersection = (fn: () => void, threshold: number = 0.4) => {
  return useCallback(
    (el: HTMLDivElement | null) => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              fn()
            }
          })
        },
        { threshold }
      )

      if (el) {
        observer.observe(el)
      }
      return () => observer.disconnect()
    },
    [fn, threshold]
  )
}

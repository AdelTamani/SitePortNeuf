import { useEffect, useRef } from 'react'

type FadeInProps = {
  children?: React.ReactNode
  className?: string
  delay?: 0 | 1 | 2
  style?: React.CSSProperties
}

export default function FadeIn({ children, className = '', delay = 0, style }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay === 1 ? 'delay-1' : delay === 2 ? 'delay-2' : ''

  return (
    <div ref={ref} className={`fade-in ${delayClass} ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}

'use client'
import { useEffect } from 'react'

/**
 * useScrollReveal — adds `.on` class to every .reveal / .reveal-l / .reveal-r
 * element when it enters the viewport.
 * Also animates .prog-fill bars and data-target counters.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('on')

          // Animate progress bars
          entry.target.querySelectorAll('.prog-fill').forEach((bar) => {
            setTimeout(() => { bar.style.width = bar.dataset.w + '%' }, 450)
          })

          // Animate stat counters
          entry.target.querySelectorAll('[data-target]').forEach(animateCounter)

          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.1 }
    )

    document
      .querySelectorAll('.reveal, .reveal-l, .reveal-r')
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10)
  const dur    = 2200
  const step   = target / (dur / 16)
  let cur = 0

  const tick = () => {
    cur = Math.min(cur + step, target)
    el.textContent = Math.floor(cur) + '+'
    if (cur < target) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

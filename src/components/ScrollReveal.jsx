'use client'

/* eslint-disable react-hooks/set-state-in-effect -- useLayoutEffect measures viewport before paint so above-the-fold content is not left at opacity:0 */
import { motion } from 'framer-motion'
import { useLayoutEffect, useRef, useState, forwardRef } from 'react'

/**
 * Scroll-triggered reveal without first-paint jank: elements already in the
 * viewport skip opacity:0 initial state (measured in useLayoutEffect before paint).
 * Stagger/extra delays apply only when the block was off-screen on first measure.
 */
export const ScrollReveal = forwardRef(function ScrollReveal(
  {
    children,
    className,
    axis = 'y',
    yFrom = 24,
    xFrom = -24,
    staggerIndex = 0,
    staggerStep = 0.08,
    extraDelay = 0,
    duration = 0.5,
    viewport = { once: true },
    ...rest
  },
  forwardedRef
) {
  const ref = useRef(null)
  const [{ ready, inViewOnMount }, setReveal] = useState({
    ready: false,
    inViewOnMount: true,
  })

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight
    const inView = rect.top < vh && rect.bottom > 0
    setReveal({ ready: true, inViewOnMount: inView })
  }, [])

  const hiddenFrom =
    axis === 'y' ? { opacity: 0, y: yFrom } : { opacity: 0, x: xFrom }

  const inViewTarget =
    axis === 'y' ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 }

  const initial = !ready ? false : (inViewOnMount ? false : hiddenFrom)

  const delay =
    !ready || inViewOnMount ? 0 : extraDelay + staggerIndex * staggerStep

  return (
    <motion.div
      ref={(node) => {
        ref.current = node
        if (typeof forwardedRef === 'function') forwardedRef(node)
        else if (forwardedRef) forwardedRef.current = node
      }}
      initial={initial}
      whileInView={inViewTarget}
      viewport={viewport}
      transition={{ duration, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
})

ScrollReveal.displayName = 'ScrollReveal'

export default ScrollReveal

/**
 * Same mount logic for motion animate() (e.g. tab switches) so first paint
 * in the viewport is not opacity:0.
 */
export function ScrollRevealTab({ children, className, tabKey, yFrom = 16, duration = 0.35 }) {
  const ref = useRef(null)
  const [{ ready, inViewOnMount }, setReveal] = useState({
    ready: false,
    inViewOnMount: true,
  })

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight
    setReveal({ ready: true, inViewOnMount: rect.top < vh && rect.bottom > 0 })
  }, [tabKey])

  const initial = !ready ? false : (inViewOnMount ? false : { opacity: 0, y: yFrom })

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

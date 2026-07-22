import { useInView } from '../hooks/useInView'

const variants = {
  up: {
    hidden: 'translate-y-6 opacity-0',
    shown: 'translate-y-0 opacity-100',
  },
  wipe: {
    hidden: 'opacity-60 [clip-path:inset(0_100%_0_0)]',
    shown: 'opacity-100 [clip-path:inset(0_0%_0_0)]',
  },
}

function Reveal({ children, className = '', delay = 0, variant = 'up' }) {
  const [ref, inView] = useInView()
  const state = variants[variant]

  return (
    <div ref={ref} className={className}>
      <div
        className={`h-full w-full transition-all duration-700 ease-out ${inView ? state.shown : state.hidden}`}
        style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      >
        {children}
      </div>
    </div>
  )
}

export default Reveal

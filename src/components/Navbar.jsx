import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects', end: false },
  { to: '/contact', label: 'Contact', end: false },
]

function linkClasses({ isActive }) {
  return `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive
      ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10'
      : 'text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'
  }`
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <NavLink
          to="/"
          end
          className="flex items-baseline rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 font-mono text-base font-semibold text-gray-900 shadow-sm transition-all hover:border-orange-400 hover:ring-2 hover:ring-orange-500/15 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:border-orange-500"
        >
          <span className="text-gray-400 dark:text-gray-500">&lt;</span>
          RQG
          <span className="text-orange-600 dark:text-orange-400">.</span>
          Portfolio
          <span className="text-gray-400 dark:text-gray-500">&nbsp;/&gt;</span>
          <span className="ml-0.5 h-[15px] w-[2px] translate-y-0.5 animate-blink bg-orange-600 dark:bg-orange-400" />
        </NavLink>

        <button
          type="button"
          className="p-2 text-gray-600 sm:hidden dark:text-gray-300"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end} className={linkClasses}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 px-4 pb-4 sm:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={linkClasses}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar

import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { projects, categories } from '../data/projects'
import profilePhoto from '../assets/profile.jpg'
import Reveal from '../components/Reveal'

const techCount = new Set(projects.flatMap((project) => project.tech)).size

const stats = [
  { label: 'Projects Built', value: projects.length },
  { label: 'Categories Explored', value: categories.length - 1 },
  { label: 'Technologies Used', value: techCount },
]

const skillGroups = [
  { label: 'Frontend', items: ['React', 'React Router', 'Tailwind CSS', 'Lucide React'] },
  { label: 'Data & APIs', items: ['Firebase Auth', 'Firestore', 'REST API', 'Open-Meteo API'] },
]

function Home() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl bg-gray-950 text-white">
        <div className="grid lg:grid-cols-2 lg:items-stretch">
          <div className="order-2 flex flex-col justify-center gap-6 p-8 sm:p-12 lg:order-1 lg:py-20">
            <Reveal>
              <h1 className="text-4xl leading-[1.1] font-bold sm:text-5xl">
                I&apos;m Richmond,
                <br />a Full-Stack Developer
              </h1>
            </Reveal>
            <Reveal delay={150} variant="wipe">
              <p className="max-w-md leading-relaxed text-gray-400">
                I turn <span className="font-medium text-orange-500">bold ideas</span> into{' '}
                <span className="font-medium text-orange-500">real, working products</span> —
                blending clean interfaces, sharp logic, and fast execution into experiences
                people actually enjoy using.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-md bg-orange-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-500"
                >
                  View Projects <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:border-orange-500"
                >
                  Contact Me
                </Link>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex items-center gap-4 pt-4 text-sm text-gray-500">
                <span className="tracking-widest uppercase">Follow Me</span>
                <a href="https://github.com/richgolo" target="_blank" rel="noreferrer" className="hover:text-orange-400">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-orange-400">
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="relative order-1 aspect-[4/5] lg:order-2 lg:aspect-auto">
            <img
              src={profilePhoto}
              alt="Richmond Quaye Golo"
              className="h-full w-full object-cover object-top grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent lg:bg-gradient-to-r" />
          </Reveal>
        </div>

        <a
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-4 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-orange-600 text-white transition-colors hover:bg-orange-500 lg:bottom-8"
        >
          <ChevronDown size={20} />
        </a>
      </section>

      <section id="about" className="scroll-mt-20">
        <Reveal>
          <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">About Me</h2>
          <p className="max-w-2xl text-gray-600 dark:text-gray-400">
            I&apos;m a full-stack developer who enjoys building clean, functional interfaces from
            idea to deployment. Here&apos;s a quick snapshot of what I&apos;ve worked on so far.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-3 gap-4 sm:max-w-lg">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100}>
              <div className="rounded-lg border border-gray-200 p-4 text-center dark:border-gray-800">
                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <Reveal>
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Skills &amp; Tech Stack
          </h2>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.label} delay={index * 100}>
              <h3 className="mb-3 text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-orange-400 hover:text-orange-600 dark:border-gray-800 dark:text-gray-300 dark:hover:border-orange-500 dark:hover:text-orange-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-600 dark:bg-orange-400" />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home

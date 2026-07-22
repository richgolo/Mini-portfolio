import studentDirectoryImg from '../assets/projects/student-directory.jpg'
import themeCrudTodoImg from '../assets/projects/theme-crud-todo.jpg'
import themedNotesImg from '../assets/projects/themed-notes.jpg'
import weatherSnapchotImg from '../assets/projects/weather-snapchot.jpg'
import beanImg from '../assets/projects/bean.jpg'
import crudeImg from '../assets/projects/crude.jpg'
import galleryCardImg from '../assets/projects/gallery-card.jpg'
import liveDataDashboardImg from '../assets/projects/live-data-dashboard.jpg'
import shopmartImg from '../assets/projects/shopmart.jpg'

export const categories = ['All', 'Web Apps', 'Dashboards', 'Landing Pages']

export const projects = [
  {
    id: 'student-directory',
    title: 'Student Directory',
    category: 'Dashboards',
    summary: 'A searchable student directory with filtering and expandable profile cards.',
    description:
      "A dashboard-style directory listing students with avatar initials, cohort, and skill level. Users can search by name, filter by skill level, and sort alphabetically or by level. Clicking a card expands it to reveal a bio and a link to the student's GitHub profile, all inside a sidebar admin-panel layout.",
    tech: ['React', 'Tailwind CSS', 'Lucide React'],
    image: studentDirectoryImg,
    repoUrl: 'https://github.com/richgolo/Student-Directory',
  },
  {
    id: 'theme-crud-todo',
    title: 'Themed Todo App',
    category: 'Web Apps',
    summary: 'A full CRUD todo list with live stats, filters, and a light/dark theme toggle.',
    description:
      'A todo manager built around React Context and custom hooks. Tasks can be created, edited, completed, and deleted, with everything persisted to localStorage. A stats bar tracks total/active/completed counts, filter tabs narrow the list down, and a theme toggle switches the whole UI between light and dark.',
    tech: ['React', 'Tailwind CSS', 'Lucide React'],
    image: themeCrudTodoImg,
    repoUrl: 'https://github.com/richgolo/THEME-CRUD-TODO-APP',
  },
  {
    id: 'themed-notes',
    title: 'Themed Notes',
    category: 'Web Apps',
    summary: 'A lightweight notes app with inline editing and a light/dark theme toggle.',
    description:
      'A simple note-taking app where notes can be created, edited inline, and deleted, all persisted through a custom useLocalStorage hook. A header toggle switches between light and dark theme via Context, with each note timestamped on creation.',
    tech: ['React'],
    image: themedNotesImg,
    repoUrl: 'https://github.com/richgolo/Themed-Notes-App',
  },
  {
    id: 'weather-snapchot',
    title: 'Weather.Now',
    category: 'Web Apps',
    summary: 'A live city weather lookup with an hourly forecast chart and dynamic theming.',
    description:
      'A weather app that geocodes a searched city and fetches live current + hourly conditions from the free Open-Meteo API. Shows current temperature with a Celsius/Fahrenheit toggle, condition details (cloud cover, humidity, wind, rain), an hourly temperature bar chart, and a background photo/gradient that changes based on the current weather condition.',
    tech: ['React', 'Tailwind CSS', 'Lucide React', 'Open-Meteo API'],
    image: weatherSnapchotImg,
    repoUrl: 'https://github.com/richgolo/Weather-Snapchot',
  },
  {
    id: 'bean-coffee',
    title: 'Bean Scene',
    category: 'Landing Pages',
    summary: 'A full-bleed marketing landing page for a fictional coffee shop.',
    description:
      'A coffee shop landing page with a transparent navbar over a full-viewport hero image, bold typography, and warm copy introducing the brand. Set up with React Router as the foundation for a larger multi-page site.',
    tech: ['React', 'Tailwind CSS', 'React Router'],
    image: beanImg,
  },
  {
    id: 'crude-skool',
    title: 'Skool — School Management System',
    category: 'Web Apps',
    summary: 'A school management app with Firebase Auth and live Firestore CRUD for student records.',
    description:
      "A student management system with Firebase Authentication (sign up/login/logout) and a live-updating student list backed by Firestore's onSnapshot listener. Includes registration, search, inline edit/delete, and a marketing home page introducing the platform.",
    tech: ['React', 'Tailwind CSS', 'Firebase Auth', 'Firestore', 'Lucide React'],
    image: crudeImg,
  },
  {
    id: 'gallery-card',
    title: 'Team Card Gallery',
    category: 'Web Apps',
    summary: 'An accessible team-member card gallery that expands to reveal bios and GitHub links.',
    description:
      'A profile-card grid rendering team members from a static data file. Clicking (or pressing Enter/Space, for full keyboard accessibility) a card expands it to show a bio and GitHub link, with a live counter tracking how many cards are expanded.',
    tech: ['React'],
    image: galleryCardImg,
    repoUrl: 'https://github.com/richgolo/gallery-card',
  },
  {
    id: 'live-data-dashboard',
    title: 'Live Data Dashboard',
    category: 'Dashboards',
    summary: 'A small dashboard combining a live-ticking clock with a user directory from a REST API.',
    description:
      'A two-widget dashboard: a live clock that updates every second, and a user directory fetched from a public REST API with manual refresh and loading/error handling.',
    tech: ['React', 'REST API'],
    image: liveDataDashboardImg,
    repoUrl: 'https://github.com/richgolo/live-data-dashboard',
  },
  {
    id: 'shopmart',
    title: 'FurnitureStore',
    category: 'Landing Pages',
    summary: 'A furniture e-commerce site in progress, with a complete About page and routing shell.',
    description:
      "An e-commerce shell for a furniture store with routing for Home, Products, About, Contact, and Cart. The About page and footer (with newsletter signup) are fully built out; the product catalog and cart are still in progress, with a full set of product photography already in place for when they're wired up.",
    tech: ['React', 'Tailwind CSS', 'React Router', 'Lucide React'],
    image: shopmartImg,
  },
]

export function getProjectById(id) {
  return projects.find((project) => project.id === id)
}

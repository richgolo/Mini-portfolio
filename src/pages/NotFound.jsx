import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <Compass size={48} className="mb-4 text-orange-500" />
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">404</h1>
      <p className="mt-2 max-w-sm text-gray-600 dark:text-gray-400">
        Page Not Found. The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-orange-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-700"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound

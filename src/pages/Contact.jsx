import { useState } from 'react'
import { Send } from 'lucide-react'

const initialForm = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Name is required.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }

  return errors
}

function Contact() {
  const [values, setValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setSubmitted(false)

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
      setValues(initialForm)
    }
  }

  function inputClasses(field) {
    return `w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 ${
      errors[field] ? 'border-red-400' : 'border-gray-300 dark:border-gray-700'
    }`
  }

  return (
    <div>
      <section className="mb-10 rounded-3xl bg-gray-950 px-6 py-10 text-center text-white sm:px-10 sm:py-14">
        <p className="text-sm font-medium tracking-widest text-orange-500 uppercase">
          Get In Touch
        </p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Contact</h1>
        <p className="mx-auto mt-3 max-w-md text-gray-400">
          Have a project in mind or just want to say hi? Send a message below.
        </p>
      </section>

      <div className="mx-auto max-w-lg">
        {submitted && (
          <div className="mb-6 rounded-md border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-700 dark:bg-green-500/10 dark:text-green-400">
            Thanks for reaching out! I&apos;ll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              className={inputClasses('name')}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className={inputClasses('email')}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              className={inputClasses('message')}
            />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-orange-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-700"
          >
            Send Message <Send size={15} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

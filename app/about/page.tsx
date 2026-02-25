export const metadata = {
  title: 'Contact',
  description: 'Contact Nanyang Intelligence.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact</h1>
      <p className="mb-8 text-neutral-800 dark:text-neutral-200">
        {`Curious what AI could look like in your business? Leave your email and we'll be in touch within 24 hours.`}
      </p>
      <form action="https://formspree.io/f/xaqdazba" method="POST" className="flex flex-col gap-4 max-w-sm">
        <input type="hidden" name="_subject" value="New contact from NanyangIntelligence.com" />
        <input type="hidden" name="_next" value="https://nanyangintelligence.com/about" />
        <input
          type="text"
          name="name"
          placeholder="Your name (optional)"
          className="px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-600"
        />
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          className="px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-600"
        />
        <textarea
          name="message"
          placeholder="Your message (optional)"
          rows={4}
          className="px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-600 resize-none"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black text-sm font-medium transition-opacity hover:opacity-80"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

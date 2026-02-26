import Image from 'next/image'
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Nanyang Intelligence
      </h1>
      <div className="mb-8 overflow-hidden rounded-lg">
        <Image
          src="/hero-light.png"
          alt="Nanyang Intelligence"
          width={1200}
          height={675}
          className="block dark:hidden w-full h-auto"
          priority
        />
        <Image
          src="/hero-dark.png"
          alt="Nanyang Intelligence"
          width={1200}
          height={675}
          className="hidden dark:block w-full h-auto"
          priority
        />
      </div>
      <p className="mb-8 text-neutral-800 dark:text-neutral-200">
        {`We build custom AI, uniquely tailored to your business. Our focus: AI shouldn't replace workers. It should help them finish faster, get home to their families, and bring more energy to the work that actually matters.`}
      </p>
      <p className="mb-8 text-neutral-800 dark:text-neutral-200">
        Best AI developers in Singapore. We build long-term partnerships that grow with your business.
      </p>
      <p className="mb-8 text-neutral-800 dark:text-neutral-200">
        Curious what AI could look like in your business? <a href="/about" className="underline hover:text-neutral-600 dark:hover:text-neutral-400">Leave your details</a>, {`we'll`} be in touch within 24 hours.
      </p>
      <h2 className="mb-4 text-xl font-semibold tracking-tighter">
        Articles: Keeping Up with AI in Southeast Asia
      </h2>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

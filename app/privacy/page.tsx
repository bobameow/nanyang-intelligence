export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Nanyang Intelligence.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Privacy Policy
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          <strong>Last updated:</strong> 25 February 2026
        </p>

        <p>
          Nanyang Intelligence ("we", "us", "our") operates the website
          nanyangintelligence.com. This Privacy Policy explains how we collect,
          use, and protect your personal data.
        </p>

        <h2>Data We Collect</h2>
        <p>
          When you use our contact form, we collect the information you provide:
          your email address, and optionally your name and message. We do not
          collect data beyond what you voluntarily submit.
        </p>

        <h2>How We Use Your Data</h2>
        <p>
          We use the information you provide solely to respond to your inquiry.
          We do not sell, rent, or share your personal data with third parties
          for marketing purposes.
        </p>

        <h2>Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul>
          <li>
            <strong>Formspree</strong> — processes contact form submissions.
            Your form data is transmitted through their servers. See{' '}
            <a
              href="https://formspree.io/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Formspree Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong>Vercel Analytics</strong> — collects anonymous, aggregated
            website usage data. No personally identifiable information is
            collected. See{' '}
            <a
              href="https://vercel.com/docs/analytics/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel Analytics Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong>Vercel Speed Insights</strong> — collects anonymous
            performance metrics. See{' '}
            <a
              href="https://vercel.com/docs/speed-insights"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel Speed Insights documentation
            </a>
            .
          </li>
        </ul>

        <h2>Cookies</h2>
        <p>
          This website does not use cookies beyond those strictly necessary for
          the site to function. We do not use tracking cookies or advertising
          cookies.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain contact form submissions only as long as necessary to
          respond to your inquiry and for reasonable business record-keeping
          purposes.
        </p>

        <h2>Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your
          personal data at any time by contacting us at{' '}
          <a href="mailto:jovan@nanyangintelligence.com">
            jovan@nanyangintelligence.com
          </a>
          .
        </p>

        <h2>PDPA Compliance</h2>
        <p>
          We comply with the Singapore Personal Data Protection Act (PDPA). If
          you have concerns about how your data is handled, you may contact us
          or lodge a complaint with the Personal Data Protection Commission
          (PDPC).
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>

        <h2>Contact</h2>
        <p>
          For any questions about this Privacy Policy, contact us at{' '}
          <a href="mailto:jovan@nanyangintelligence.com">
            jovan@nanyangintelligence.com
          </a>
          .
        </p>
      </div>
    </section>
  )
}

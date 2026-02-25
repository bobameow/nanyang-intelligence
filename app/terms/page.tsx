export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Nanyang Intelligence.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Terms of Service
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          <strong>Last updated:</strong> 25 February 2026
        </p>

        <p>
          By accessing and using the Nanyang Intelligence website
          (nanyangintelligence.com), you agree to the following terms.
        </p>

        <h2>Informational Content</h2>
        <p>
          The content on this website is provided for general informational
          purposes only. It does not constitute professional advice. While we
          strive for accuracy, we make no warranties regarding the completeness
          or reliability of any information on this site.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content on this website — including text, graphics, logos, and
          software — is the property of Nanyang Intelligence or its content
          suppliers and is protected by applicable intellectual property laws.
          You may not reproduce, distribute, or create derivative works from
          this content without our prior written consent.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Nanyang Intelligence shall not
          be liable for any indirect, incidental, special, consequential, or
          punitive damages arising from your use of this website or any content
          provided herein.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          This website may contain links to third-party websites. We are not
          responsible for the content or practices of any linked sites.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes take
          effect immediately upon posting. Continued use of the website
          constitutes acceptance of the updated terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with the laws
          of the Republic of Singapore. Any disputes arising from these terms
          shall be subject to the exclusive jurisdiction of the courts of
          Singapore.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these terms, contact us at{' '}
          <a href="mailto:jovan@nanyangintelligence.com">
            jovan@nanyangintelligence.com
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export default function TermsPage() {
  return (
    <div className="w-full px-4 md:px-8 py-12">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold font-sans tracking-tight mb-2">Terms of Service</h1>
        <p className="text-foreground/50 font-mono text-sm mb-12">Last updated: July 2026</p>

        <div className="space-y-10 text-foreground/80 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">1. Acceptance of Terms</h2>
            <p>By accessing or using Next Hub, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">2. Description of Service</h2>
            <p>Next Hub is a community-driven resource discovery platform that aggregates technical resources including documentation, tutorials, libraries, tools, and learning materials for developers, students, and tech enthusiasts.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">3. User Accounts</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide accurate and complete information when creating an account.</li>
              <li>You are responsible for maintaining the security of your account credentials.</li>
              <li>You must not share your account with others or create multiple accounts.</li>
              <li>We reserve the right to suspend or terminate accounts that violate these terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">4. User-Submitted Content</h2>
            <p className="mb-3">When you submit resources or content to Next Hub:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You confirm that you have the right to share the content.</li>
              <li>You grant Next Hub a non-exclusive license to display and distribute the content on the platform.</li>
              <li>You retain ownership of your original content.</li>
              <li>All submissions are subject to moderation and may be removed at our discretion.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">5. Acceptable Use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submit spam, malicious links, or misleading content.</li>
              <li>Attempt to gain unauthorized access to the platform or other users&apos; accounts.</li>
              <li>Use the platform for any illegal purpose.</li>
              <li>Scrape, crawl, or use automated tools to access content without permission.</li>
              <li>Harass, abuse, or threaten other users.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">6. Intellectual Property</h2>
            <p>The Next Hub name, logo, design, and original content are the property of Next Hub. Resources linked on the platform belong to their respective owners. We do not claim ownership of external content.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">7. Disclaimer</h2>
            <p>Next Hub is provided &quot;as is&quot; without warranties of any kind. We do not guarantee the accuracy, completeness, or usefulness of any resources listed on the platform. Use external resources at your own risk.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">8. Limitation of Liability</h2>
            <p>In no event shall Next Hub be liable for any indirect, incidental, special, or consequential damages arising out of your use of the platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">9. Changes to Terms</h2>
            <p>We may modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the new terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">10. Contact</h2>
            <p>Questions about these terms? Contact us at <a href="mailto:legal@nexthub.dev" className="text-primary hover:underline">legal@nexthub.dev</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

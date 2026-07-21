export default function PrivacyPage() {
  return (
    <div className="w-full px-4 md:px-8 py-12">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold font-sans tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-foreground/50 font-mono text-sm mb-12">Last updated: July 2026</p>

        <div className="space-y-10 text-foreground/80 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">1. Information We Collect</h2>
            <p className="mb-3">When you use Next Hub, we may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Information:</strong> Email address, username, and profile details when you create an account.</li>
              <li><strong>Usage Data:</strong> Pages visited, resources bookmarked, search queries, and interaction patterns.</li>
              <li><strong>Device Information:</strong> Browser type, operating system, screen resolution, and IP address.</li>
              <li><strong>Cookies:</strong> Small data files stored on your device to maintain session state and preferences.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve the Next Hub platform and its features.</li>
              <li>To personalize your experience, including resource recommendations.</li>
              <li>To send you notifications about new resources, events, and community activity (with your consent).</li>
              <li>To analyze platform usage and improve performance.</li>
              <li>To prevent fraud and enforce our Terms of Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">3. Data Sharing</h2>
            <p className="mb-3">We do not sell your personal data. We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Hosting (Vercel), database (Supabase), and analytics services that help us operate the platform.</li>
              <li><strong>Legal Requirements:</strong> If required by law, regulation, or legal process.</li>
              <li><strong>Community:</strong> Your public profile, submitted resources, and community activity are visible to other users.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">4. Data Security</h2>
            <p>We implement industry-standard security measures including encrypted connections (HTTPS), secure authentication, and regular security audits. However, no method of transmission over the Internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">5. Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, correct, or delete your personal data.</li>
              <li>Object to or restrict certain processing of your data.</li>
              <li>Export your data in a portable format.</li>
              <li>Withdraw consent at any time.</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at <a href="mailto:privacy@nexthub.dev" className="text-primary hover:underline">privacy@nexthub.dev</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">6. Children&apos;s Privacy</h2>
            <p>Next Hub is not intended for users under the age of 13. We do not knowingly collect personal information from children under 13.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@nexthub.dev" className="text-primary hover:underline">privacy@nexthub.dev</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

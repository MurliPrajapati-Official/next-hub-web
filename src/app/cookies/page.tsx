export default function CookiesPage() {
  return (
    <div className="w-full px-4 md:px-8 py-12">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold font-sans tracking-tight mb-2">Cookie Policy</h1>
        <p className="text-foreground/50 font-mono text-sm mb-12">Last updated: July 2026</p>

        <div className="space-y-10 text-foreground/80 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">1. What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your experience.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">2. How We Use Cookies</h2>
            <p className="mb-3">Next Hub uses the following types of cookies:</p>
            <div className="border border-border rounded-md overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 font-bold text-foreground">Type</th>
                    <th className="text-left px-4 py-3 font-bold text-foreground">Purpose</th>
                    <th className="text-left px-4 py-3 font-bold text-foreground">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium">Essential</td>
                    <td className="px-4 py-3 text-foreground/70">Authentication, session management, security</td>
                    <td className="px-4 py-3 text-foreground/70 font-mono">Session</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium">Functional</td>
                    <td className="px-4 py-3 text-foreground/70">Theme preferences, language settings</td>
                    <td className="px-4 py-3 text-foreground/70 font-mono">1 year</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium">Analytics</td>
                    <td className="px-4 py-3 text-foreground/70">Usage patterns, page views, feature usage</td>
                    <td className="px-4 py-3 text-foreground/70 font-mono">2 years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Performance</td>
                    <td className="px-4 py-3 text-foreground/70">Page load times, error tracking</td>
                    <td className="px-4 py-3 text-foreground/70 font-mono">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">3. Third-Party Cookies</h2>
            <p>We may use third-party services (such as analytics providers) that set their own cookies. These cookies are governed by the respective third party&apos;s privacy policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">4. Managing Cookies</h2>
            <p className="mb-3">You can control and manage cookies through your browser settings. Most browsers allow you to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>View and delete existing cookies.</li>
              <li>Block all cookies or only third-party cookies.</li>
              <li>Set preferences for specific websites.</li>
            </ul>
            <p className="mt-3">Please note that disabling essential cookies may affect the functionality of Next Hub.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-sans mb-4 text-foreground">5. Contact</h2>
            <p>For questions about our cookie practices, contact us at <a href="mailto:privacy@nexthub.dev" className="text-primary hover:underline">privacy@nexthub.dev</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

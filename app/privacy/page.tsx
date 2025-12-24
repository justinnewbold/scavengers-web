import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy - Scavengers',
  description: 'Privacy Policy for the Scavengers app and website.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: December 24, 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to Scavengers (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy
              and ensuring the security of your personal information. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our mobile application and website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium mb-2 text-primary">Information You Provide</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Email address (for waitlist and account registration)</li>
              <li>Profile information (username, display name)</li>
              <li>Hunt content you create (challenges, hints, descriptions)</li>
              <li>Photos submitted for challenge verification</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 text-primary">Automatically Collected Information</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Device information (type, operating system, unique identifiers)</li>
              <li>Usage data (features used, time spent, interactions)</li>
              <li>Location data (only when GPS challenges are active and with your permission)</li>
              <li>Log data (IP address, browser type, access times)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes and updates</li>
              <li>To provide customer support</li>
              <li>To verify challenge completion (photo and GPS verification)</li>
              <li>To improve our AI algorithms and user experience</li>
              <li>To detect and prevent fraud or abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Photo Processing</h2>
            <p className="text-gray-300 leading-relaxed">
              Photos submitted for challenge verification are processed using AI to determine if the challenge
              requirements are met. When possible, photo analysis is performed locally on your device.
              Photos are not stored permanently on our servers and are deleted after verification is complete,
              typically within 24 hours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Sharing</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information only in these circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>With other players in your hunt (leaderboard scores, team membership)</li>
              <li>With service providers who assist in our operations</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your information.
              However, no electronic transmission or storage is 100% secure. We encourage you to use strong
              passwords and keep your login credentials confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and associated data</li>
              <li>Export your data in a portable format</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent for location tracking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Scavengers is not intended for children under 13. We do not knowingly collect personal information
              from children under 13. If you believe we have collected such information, please contact us
              immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@scavengers.app" className="text-primary hover:underline">
                privacy@scavengers.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

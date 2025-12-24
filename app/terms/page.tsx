import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service - Scavengers',
  description: 'Terms of Service for the Scavengers app and website.',
}

export default function TermsOfService() {
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

        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last updated: December 24, 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using Scavengers (&quot;the Service&quot;), you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-gray-300 leading-relaxed">
              Scavengers is an AI-powered platform for creating and playing scavenger hunts. The Service
              includes mobile applications, web interfaces, and related features for hunt creation,
              participant management, and challenge verification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the security of your account credentials</li>
              <li>You must notify us immediately of any unauthorized access to your account</li>
              <li>You must be at least 13 years old to create an account</li>
              <li>One person may not maintain more than one account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
            <p className="text-gray-300 leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Create content that is illegal, harmful, threatening, or harassing</li>
              <li>Impersonate any person or entity</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Create hunts that encourage dangerous or illegal activities</li>
              <li>Upload malicious code or attempt to exploit vulnerabilities</li>
              <li>Scrape or collect user data without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You retain ownership of content you create (&quot;User Content&quot;). By uploading User Content, you grant
              us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content
              as necessary to provide the Service.
            </p>
            <p className="text-gray-300 leading-relaxed">
              You are solely responsible for your User Content and the consequences of posting it. We do not
              endorse any User Content or any opinion contained therein.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Subscription and Payments</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Free tier includes up to 15 participants per hunt and 3 active hunts</li>
              <li>Premium subscriptions are billed monthly or annually</li>
              <li>Subscriptions automatically renew unless cancelled</li>
              <li>Refunds are provided in accordance with applicable app store policies</li>
              <li>We reserve the right to modify pricing with reasonable notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              The Service, including its original content, features, and functionality, is owned by Scavengers
              and is protected by international copyright, trademark, and other intellectual property laws.
              Our AI-generated content is provided for your use within hunts but remains our property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Safety and Liability</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Scavenger hunts may involve physical activity and travel to various locations. By participating:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>You acknowledge that you participate at your own risk</li>
              <li>You agree to follow all applicable laws and safety guidelines</li>
              <li>You will not trespass on private property</li>
              <li>You are responsible for your own safety and the safety of minors in your care</li>
              <li>We are not liable for any injuries, damages, or losses incurred during hunts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-gray-300 leading-relaxed">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER
              EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR
              ERROR-FREE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SCAVENGERS SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We may terminate or suspend your account at any time for violations of these Terms. You may
              delete your account at any time through the app settings. Upon termination, your right to
              use the Service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of significant
              changes via email or in-app notification. Continued use of the Service after changes
              constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the United States,
              without regard to conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@scavengers.app" className="text-primary hover:underline">
                legal@scavengers.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

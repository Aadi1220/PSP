import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-gray-700">
          <div>
            <p className="text-sm text-gray-500 mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="mb-4">
              This Privacy Policy explains how we collect, use, disclose, and safeguard personal information when our website and services are used, and outlines rights and choices regarding that information.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Name, email address, and phone number</li>
                <li>Billing and shipping addresses (where applicable)</li>
                <li>Payment details processed via third-party gateways</li>
                <li>Account credentials (username and hashed password)</li>
                <li>Profile details and preferences voluntarily provided</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Automatically Collected</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address, device and operating system details</li>
                <li>Browser type, version, and user agent</li>
                <li>Pages visited, referral URLs, and session duration</li>
                <li>Cookies, pixels, and similar tracking technologies</li>
                <li>Approximate location data where permissioned</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Information</h2>
            <p className="mb-4">Information may be used to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, operate, and maintain our services</li>
              <li>Process orders, invoices, and payment confirmations</li>
              <li>Communicate regarding accounts, services, and support</li>
              <li>Send offers or updates with prior consent</li>
              <li>Improve performance, features, and user experience</li>
              <li>Comply with legal, tax, and regulatory obligations</li>
              <li>Detect, prevent, and investigate fraud and abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Information Sharing</h2>
            <p className="mb-4">Personal information may be disclosed to:</p>

            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-yellow-900 mb-2">Third-Party Service Providers</h3>
              <ul className="text-yellow-800 list-disc pl-6">
                <li>Payment gateways and processors (e.g., Razorpay)</li>
                <li>Cloud hosting and storage providers</li>
                <li>Email and marketing communication platforms</li>
                <li>Analytics solutions (e.g., Google Analytics)</li>
              </ul>
            </div>

            <p className="mb-4">
              Personal information is not sold or rented to third parties for direct marketing, and sharing is limited to service delivery, legal compliance, and protection of rights and security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Cookies and Tracking</h2>
            <p className="mb-4">We use cookies and similar tools to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Remember preferences, sessions, and authentication</li>
              <li>Measure traffic, performance, and user interactions</li>
              <li>Personalize content and supported advertisements</li>
              <li>Maintain security and detect fraudulent activity</li>
            </ul>
            <p className="mb-4">
              Cookie settings can be managed in the browser; disabling some cookies may limit functionality. Consent tools may also be provided where required.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Security</h2>
            <p className="mb-4">Security measures include:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>HTTPS/SSL encryption in transit</li>
              <li>Hardened servers and restricted access controls</li>
              <li>Periodic updates, monitoring, and audits</li>
              <li>Least-privilege and role-based data access</li>
              <li>Staff awareness and confidentiality practices</li>
            </ul>
            <div className="bg-red-50 p-4 rounded-lg mb-4">
              <p className="text-red-800">
                <strong>Important:</strong> No method of transmission or storage is fully secure, and absolute security cannot be guaranteed.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights</h2>
            <p className="mb-4">Subject to applicable laws, users may request:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Access:</strong> A copy of personal data held</li>
              <li><strong>Correction:</strong> Rectification of inaccurate data</li>
              <li><strong>Deletion:</strong> Erasure, subject to legal holds</li>
              <li><strong>Portability:</strong> Export in a common format</li>
              <li><strong>Opt-out:</strong> Marketing communications control</li>
              <li><strong>Restriction:</strong> Limits on certain processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Data Retention</h2>
            <p className="mb-4">
              Data is retained only as long as necessary for the purposes described or as required by law and taxation.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Account data: retained until account deletion</li>
              <li>Transaction records: kept for statutory periods</li>
              <li>Marketing preferences: stored until unsubscribed</li>
              <li>Analytics data: retained per tool configuration</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Children’s Privacy</h2>
            <p className="mb-4">
              Services are intended for adults; information from individuals under 18 is not knowingly collected, and accounts by minors are not permitted under our Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. International Transfers</h2>
            <p className="mb-4">
              Data may be processed and stored on servers in jurisdictions outside the country of residence with appropriate safeguards consistent with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Changes to This Policy</h2>
            <p className="mb-4">
              This policy may be updated periodically; material changes will be communicated through the site notice and/or email, with the “Last updated” date revised accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Contact Us</h2>
            <p className="mb-4">
              Questions or requests regarding this Privacy Policy can be sent to:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Email: Support@perfectserviceprovider.com</p>
              <p>Phone: +91 89202 67022</p>
              <p>Address: Rohini Sector 24, Delhi, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

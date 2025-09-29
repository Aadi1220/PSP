import React from 'react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>

        <div className="space-y-6 text-gray-700">
          <div>
            <p className="text-sm text-gray-500 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mb-4">
              These Terms and Conditions govern use of the website and services of Perfectserviceprovider and form a binding agreement between the user and the Company; access or use signifies acceptance of these Terms and related policies. Users must be at least 18 years old to use the Service. 
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Interpretation and Definitions</h2>
            <p className="mb-4">
              “Affiliate” means an entity under common control where control denotes ownership of 50% or more voting interests; “Country” refers to Delhi, India; “Company” refers to Perfectserviceprovider, Rohini Sector 24, Delhi; “Device” means any device that can access the Service; “Service” refers to the website; “You” denotes the individual or entity using the Service. 
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Acknowledgment</h2>
            <p className="mb-4">
              By accessing or using the Service, users agree to be bound by these Terms; if any part is unacceptable, do not use the Service. Continued use is also conditioned on acceptance of the Privacy Policy, which describes how personal information is collected, used, and disclosed. 
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Links to Other Websites</h2>
            <p className="mb-4">
              The Service may include links to third-party websites or services not owned or controlled by the Company; the Company is not responsible for their content, policies, or practices and disclaims liability for any resulting damages. Users should review third-party terms and privacy policies before use. 
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Termination</h2>
            <p className="mb-4">
              The Company may suspend or terminate access immediately, without prior notice or liability, for any reason including breach of these Terms; upon termination, the right to use the Service ceases immediately. 
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, the Company and suppliers are not liable for special, incidental, indirect, or consequential damages, including lost profits, data loss, business interruption, or privacy loss; total liability shall not exceed the amount actually paid through the Service or 100 USD if no purchases were made. Some jurisdictions may not allow certain exclusions; limits apply to the fullest extent permitted. 
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. “AS IS” and “AS AVAILABLE”</h2>
            <p className="mb-4">
              The Service is provided without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, title, and non-infringement; no guarantee is made that the Service will meet requirements, be uninterrupted, error-free, or secure, and no representation is made regarding freedom from malware or harmful components. Statutory rights may vary by jurisdiction. 
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Governing Law</h2>
            <p className="mb-4">
              These Terms are governed by the laws of the Country (Delhi, India), excluding conflict of law rules, and use of the Service may also be subject to local, state, national, or international laws as applicable. 
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Dispute Resolution</h2>
            <p className="mb-4">
              Users agree to first attempt to resolve any concern or dispute informally by contacting the Company before pursuing other remedies, subject to applicable law. 
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Regional Compliance</h2>
            <p className="mb-4">
              EU consumers may benefit from mandatory provisions of the law of their country of residence; U.S. compliance includes representations regarding embargoed countries and restricted parties as required by U.S. law. 
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Severability and Waiver</h2>
            <p className="mb-4">
              If any provision is found unenforceable or invalid, it will be modified and interpreted to accomplish its objectives to the greatest extent permitted, and the remaining provisions remain in effect; failure to enforce any right is not a waiver of future enforcement. 
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Translation</h2>
            <p className="mb-4">
              If these Terms are translated and discrepancies arise, the original English text controls in the event of a dispute unless otherwise required by law. 
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Changes to These Terms</h2>
            <p className="mb-4">
              The Company may modify or replace these Terms at any time at its sole discretion; for material changes, reasonable efforts will be made to provide at least 30 days’ notice prior to effectiveness, and continued use after changes become effective constitutes acceptance. 
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">13. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms and Conditions, contact the Company using the details below or the contact page. 
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Email: shashwat@Perfectserviceprovider.com</p>
              <p>Phone: +91 8920267022</p>
              <p>Website: https://Perfectserviceprovider.com/contact/</p>
              <p>Address: Rohini Sector 24, Delhi, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;

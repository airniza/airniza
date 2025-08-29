import Link from "next/link";


export const metadata = {
  title: "Terms & Conditions",
  description: "Airniza terms & conditions page", 
  alternates:{
    canonical: "https://airniza.com/terms-conditions"
  }
}




export default function TermsConditions() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Terms & Conditions</h1>
      <p className="text-gray-600"><strong>Last Updated:</strong> August 21, 2025</p>

      <p className="text-gray-700">Please read these terms and conditions carefully before using the Service.</p>

      <h2 className="text-2xl font-semibold">Definitions</h2>
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        <li><strong>Affiliate:</strong> Entity that controls, is controlled by, or is under common control with a party.</li>
        <li><strong>Country:</strong> Uttar Pradesh, India</li>
        <li><strong>Company:</strong> Airniza</li>
        <li><strong>Device:</strong> Any device that can access the Service (computer, phone, tablet)</li>
        <li><strong>Service:</strong> The Website</li>
        <li><strong>Terms:</strong> These Terms & Conditions</li>
        <li><strong>Third-party Social Media Service:</strong> Services or content provided by third-parties</li>
        <li><strong>Website:</strong> Airniza, <a className="text-blue-600 underline" href="https://airniza.com/">https://airniza.com/</a></li>
        <li><strong>You:</strong> Individual accessing or using the Service</li>
      </ul>

      <h2 className="text-2xl font-semibold">Acknowledgment</h2>
      <p className="text-gray-700">By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part, do not access the Service. You must be over 18 years old.</p>

      <h2 className="text-2xl font-semibold">Links to Other Websites</h2>
      <p className="text-gray-700">The Service may contain links to third-party websites or services. Airniza is not responsible for content, privacy policies, or practices of third-party websites. Review their terms and privacy policies before use.</p>

      <h2 className="text-2xl font-semibold">Termination</h2>
      <p className="text-gray-700">Access may be terminated immediately for any breach of Terms. Upon termination, your right to use the Service ends immediately.</p>

      <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
      <p className="text-gray-700">{"Airniza and its suppliers' liability is limited to the amount paid by you through the Service or 100 USD if nothing was purchased. Not liable for indirect, incidental, or consequential damages."}</p>

      <h2 className="text-2xl font-semibold">AS IS and AS AVAILABLE Disclaimer</h2>
      <p className="text-gray-700">{`Service is provided "AS IS" and "AS AVAILABLE" without warranties. Airniza disclaims all express or implied warranties, including merchantability, fitness for a purpose, and non-infringement. Service may have errors or interruptions.`}</p>

      <h2 className="text-2xl font-semibold">Governing Law</h2>
      <p className="text-gray-700">These Terms are governed by the laws of Uttar Pradesh, India, excluding conflict-of-law rules. Local or international laws may also apply.</p>

      <h2 className="text-2xl font-semibold">Disputes Resolution</h2>
      <p className="text-gray-700">Any concerns or disputes should first be addressed informally by contacting Airniza.</p>

      <h2 className="text-2xl font-semibold">European Union Users</h2>
      <p className="text-gray-700">EU consumers benefit from mandatory provisions of the law of their country of residence.</p>

      <h2 className="text-2xl font-semibold">United States Legal Compliance</h2>
      <p className="text-gray-700">Users must not be in embargoed countries or on US prohibited parties lists.</p>

      <h2 className="text-2xl font-semibold">Severability and Waiver</h2>
      <p className="text-gray-700"><strong>Severability:</strong> If any provision is invalid, remaining provisions remain in effect.</p>
      <p className="text-gray-700"><strong>Waiver:</strong> Failure to enforce any provision does not waive future enforcement.</p>

      <h2 className="text-2xl font-semibold">Translation Interpretation</h2>
      <p className="text-gray-700">In case of translation, the original English text prevails in disputes.</p>

      <h2 className="text-2xl font-semibold">Changes to Terms</h2>
      <p className="text-gray-700">Airniza may update these Terms at any time. Material changes will have at least 30 days’ notice. Continued use after changes means acceptance of revised Terms.</p>

      <h2 className="text-2xl font-semibold">Contact Us</h2>
      <p className="text-gray-700">For questions about these Terms, <Link className="text-primary font-bold" href="/contact-us">Contact us</Link> here.</p>
    </main>
  );
}

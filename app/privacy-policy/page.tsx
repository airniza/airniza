import Link from "next/link";




export const metadata = {
  title: "Privacy Policy",
  description: "Airniza privacy policy page", 
  alternates:{
    canonical: "https://airniza.com/privacy-policy"
  }
}



export default function PrivacyPolicy () {

  return  <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-gray-600"><strong>Last Updated:</strong> August 21, 2025</p>

      <p className="text-gray-700">This Privacy Policy explains how Airniza collects, uses, and protects your information when you use the Service. It also explains your rights regarding your data. By using the Service, you consent to the collection and use of data according to this Privacy Policy.</p>

      <h2 className="text-2xl font-semibold">Definitions</h2>
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        <li><strong>Company:</strong> Airniza</li>
        <li><strong>Service:</strong> The Website</li>
        <li><strong>You:</strong> Individual accessing or using the Service</li>
        <li><strong>Website:</strong> Airniza, <a className="text-blue-600 underline" href="https://airniza.com/">https://airniza.com/</a></li>
        <li><strong>Personal Data:</strong> Information that can identify an individual</li>
        <li><strong>Usage Data:</strong> Automatically collected information from using the Service</li>
        <li><strong>Device:</strong> Any device accessing the Service</li>
        <li><strong>Cookies:</strong> Small files placed on your device for tracking and preferences</li>
      </ul>

      <h2 className="text-2xl font-semibold">Data Collection</h2>
      <p className="text-gray-700"><strong>Personal Data:</strong> Email address, name, phone number</p>
      <p className="text-gray-700"><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent, device identifiers, search inputs, location data</p>
      <p className="text-gray-700"><strong>Location Data:</strong> Real-time location is collected if you allow access to provide accurate AQI, PM2.5, temperature, and humidity.</p>

      <h2 className="text-2xl font-semibold">Use of Data</h2>
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        <li>Provide and maintain Service</li>
        <li>Display accurate air quality results</li>
        <li>Contact you regarding updates or offers</li>
        <li>Manage accounts and requests</li>
        <li>Analyze usage trends and improve Service</li>
      </ul>

      <h2 className="text-2xl font-semibold">Sharing of Data</h2>
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        <li>With Service Providers for monitoring and communication</li>
        <li>For business transfers such as mergers or sales</li>
        <li>With Affiliates and partners under privacy compliance</li>
        <li>Publicly if you share in community features</li>
        <li>With your consent</li>
      </ul>

      <h2 className="text-2xl font-semibold">Retention of Data</h2>
      <p className="text-gray-700">Data is retained only as long as necessary or for legal obligations. Usage Data may be retained for shorter periods unless required for security or legal reasons.</p>

      <h2 className="text-2xl font-semibold">Transfer of Data</h2>
      <p className="text-gray-700">Data may be stored or processed outside your jurisdiction. By using the Service, you consent to this transfer. Airniza takes reasonable steps to secure your data.</p>

      <h2 className="text-2xl font-semibold">Deleting Personal Data</h2>
      <p className="text-gray-700">You may request deletion or modification of your data through your account or by contacting Airniza. Certain information may be retained for legal obligations.</p>

      <h2 className="text-2xl font-semibold">Children’s Privacy</h2>
      <p className="text-gray-700">Service does not target children under 13. Data from children under 13 is removed if discovered without parental consent.</p>

      <h2 className="text-2xl font-semibold">Security of Data</h2>
      <p className="text-gray-700">Airniza uses commercially reasonable methods to protect data but cannot guarantee absolute security.</p>

      <h2 className="text-2xl font-semibold">Links to Other Websites</h2>
      <p className="text-gray-700">Airniza is not responsible for content or privacy policies of external websites linked from the Service.</p>

      <h2 className="text-2xl font-semibold">Changes to Privacy Policy</h2>
      <p className="text-gray-700">Airniza may update this Privacy Policy and will post changes on this page. Updates are effective immediately when posted.</p>

      <h2 className="text-2xl font-semibold">Contact Us</h2>
      <p className="text-gray-700">For questions about this Privacy Policy, <Link className="text-primary font-bold" href="/contact-us">Contact us</Link> here.</p>
    </main>
}

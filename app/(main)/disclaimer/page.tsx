import Link from "next/link";

export const metadata = {
  title: "Disclaimer",
  description: "Airniza Disclaimer page", 
  alternates:{
    canonical: "https://airniza.com/disclaimer"
  }
}

export default function Disclaimer () {
  return <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Disclaimer</h1>
      <p className="text-gray-600"><strong>Last Updated:</strong> August 21, 2025</p>

      <h2 className="text-2xl font-semibold">Interpretation and Definitions</h2>
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        <li><strong>Company:</strong> Airniza</li>
        <li><strong>Service:</strong> The Website</li>
        <li><strong>You:</strong> Individual accessing or using the Service</li>
        <li><strong>Website:</strong> Airniza, <a className="text-blue-600 underline" href="https://airniza.com/">https://airniza.com/</a></li>
      </ul>

      <h2 className="text-2xl font-semibold">Disclaimer</h2>
      <p className="text-gray-700">Information on the Service is for general purposes only. Company assumes no responsibility for errors or omissions. Company is not liable for any damages. Content may change at any time without notice. Company does not guarantee Service is free from viruses or harmful components.</p>

      <h2 className="text-2xl font-semibold">Real-Time Data Disclaimer</h2>
      <p className="text-gray-700">Airniza collects location information and search inputs from users to provide real-time air quality data including AQI, PM2.5, temperature, and humidity. This information is used only to display accurate results and improve Service experience. By using location or search features, you consent to this data collection.</p>

      <h2 className="text-2xl font-semibold">External Links Disclaimer</h2>
      <p className="text-gray-700">The Service may contain links to external websites. Airniza is not responsible for their content, privacy practices, or accuracy.</p>

      <h2 className="text-2xl font-semibold">Errors and Omissions Disclaimer</h2>
      <p className="text-gray-700">Information is for general guidance only. Errors or omissions may occur. Airniza is not responsible for results obtained from using this information.</p>

      <h2 className="text-2xl font-semibold">Fair Use Disclaimer</h2>
      <p className="text-gray-700">Airniza may use copyrighted material for purposes such as criticism, comment, news reporting, teaching, scholarship, or research under fair use.</p>

      <h2 className="text-2xl font-semibold">Views Expressed Disclaimer</h2>
      <p className="text-gray-700">Views and opinions are those of the authors and do not necessarily reflect the official position of Airniza. Comments may be removed at any time.</p>

      <h2 className="text-2xl font-semibold">No Responsibility Disclaimer</h2>
      <p className="text-gray-700">Information on the Service is not a substitute for professional advice. Airniza is not responsible for legal, accounting, tax, or other decisions based on the Service.</p>

      <h2 className="text-2xl font-semibold">Use at Your Own Risk</h2>
      <p className="text-gray-700">All information is provided as is without guarantee of completeness, accuracy, timeliness, or results. Airniza is not liable for decisions or actions taken in reliance on the information.</p>

      <h2 className="text-2xl font-semibold">Contact Us</h2>
      <p className="text-gray-700">For questions about this Disclaimer, <Link className="text-primary font-bold" href="/contact-us">Contact us</Link> here.</p>
    </main>

}
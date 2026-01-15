import Link from "next/link";


export const metadata = {
  title: "About Us",
  description: "Airniza About Us page", 
  alternates:{
    canonical: "https://airniza.com/about-us"
  }
}

export default function AboutPage () {
  return <div className="px-10 py-12">
    <h1 className="text-3xl font-bold mb-4">About Us</h1>
    <p className="mb-2">Welcome to Airniza, your go-to platform for real-time air quality monitoring and environmental insights. We provide up-to-date information on AQI, PM2.5 levels, temperature, and humidity so you can make informed decisions for healthier living.</p>
    <p className="mb-2">
      At Airniza, we understand that clean air and a safe environment are essential for your well-being. Our mission is to deliver accurate, easy-to-understand air quality data for cities across the United States, helping you stay aware of the air you breathe every day.
    </p>
    <h2 className="text-2xl font-bold mb-4 mt-5">Why Choose Airniza?</h2>
    <ul className="list-disc pl-6">
      <li><p><span className="font-bold">Real-Time AQI Updates:</span> Real-Time AQI Updates: Track city-specific air quality and PM2.5 levels in real time, so you always know the current conditions.</p></li>
      <li><p><span className="font-bold">Comprehensive Environmental Data:</span> Beyond AQI, monitor temperature, humidity, and other key environmental factors that impact your indoor and outdoor air quality.</p></li>
      <li><p><span className="font-bold">Practical Health Tips:</span> Learn actionable steps to improve indoor air quality and protect your family from pollution.</p></li>
      <li><p><span className="font-bold">Trusted Insights:</span> Our platform provides reliable and accurate air quality information for better decision making.</p></li>
      <li><p><span className="font-bold">Passion for Clean Air:</span> Air quality is not just data, it is our commitment. We aim to make environmental awareness simple, actionable, and accessible.</p></li>
    </ul>
    <h3 className="text-2xl font-bold mt-3 mb-4">Our Vision</h3>
    <p className="mb-2">To empower individuals and communities with the knowledge and tools they need for better air quality monitoring, healthier living, and informed decisions about their environment.</p>
    <p className="mb-2">Thank you for visiting Airniza. Together, lets make every breath cleaner and healthier. For any questions or feedback, <Link href="/contact-us" className="text-primary font-bold">Contact us</Link> here.</p>

  </div>
}
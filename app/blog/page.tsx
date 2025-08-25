import Link from "next/link";

export default function BlogPage () {





  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
    <h1 className="text-3xl font-bold">Latest Blog Posts</h1>
    <div>
     <ol className="text-primary list-decimal list-inside space-y-3 mt-4">
      <li><Link href="/best-air-purifiers-for-allergies-asthma-and-dust" className="text-xl">Best Air Purifiers for Allergies, Asthma and Dust</Link></li>
      <li><Link href="/can-air-purifiers-remove-cigarette-smoke" className="text-xl">Can Air Purifiers remove Cigarette Smoke?</Link></li>
      <li><Link href="/how-long-to-run-air-purifier-in-bedroom" className="text-xl">How long to run Air purifier in Bedroom?</Link></li>
      <li><Link href="/best-place-to-put-dehumidifier-in-2-story-house" className="text-xl">Best place to put Dehumidifier in 2 story house</Link></li>
      <li><Link href="/how-to-clean-crane-humidifier-with-vinegar" className="text-xl">How to Clean Humidifier with vinegar</Link></li>
     </ol>
    </div>









  </div>
}
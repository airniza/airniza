
export default function WebsiteSchema () {



return {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Airniza",
  "url": "https://airniza.com/",
  "inLanguage": "en",
  "logo": {
      "@type": "ImageObject",
      "url": "https://airniza.com/logo.png",
      "width": 250,
      "height": 60,
      "caption": "Airniza Logo"
    },
  "sameAs": [
      "https://www.facebook.com/profile.php?id=61580240519068",
      "https://x.com/airniza_real"
    ],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://airniza.com/search?query={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

};
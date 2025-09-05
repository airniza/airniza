
export default function WebsiteSchema () {



return {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Airniza",
  "url": "https://airniza.com/",
  "inLanguage": "en",
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
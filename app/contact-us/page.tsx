import ContactPageHelper from "@/components/helpers/ContactPageHelper";

export const metadata = {
  title: "Contact Us",
  description: "Airniza Contact Us page", 
  alternates:{
    canonical: "https://airniza.com/contact-us"
  }
}

export default function ContactPage() {
  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6 text-gray-600">
        Have questions or feedback? Fill out the form below and we will get back
        to you as soon as possible.
      </p>
      <ContactPageHelper />
    </div>
  );
}
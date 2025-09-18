import Link from "next/link";

const quickLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Terms & Conditions", href: "/terms-conditions" },
  { name: "License", href: "/license" },
];

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-6">
      {/* Quick Links Row */}
      <div className="flex justify-center space-x-6 mb-4">
        {quickLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="hover:text-gray-300 transition"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Airniza. All rights reserved.
      </div>
    </footer>
  );
}

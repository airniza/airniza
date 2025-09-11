"use client";

import { FaLink } from "react-icons/fa";

export default function CopyLinkButton({ url, city }: { url: string; city: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    alert(`${city} air quality link copied!`);
  };

  return (
    <button
      onClick={handleCopy}
      aria-label={`Copy ${city} air quality link`}
      className="p-2 rounded-full bg-gray-500 text-white hover:opacity-90"
    >
      <FaLink size={22} />
    </button>
  );
}

import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
  FaLinkedin,
  FaPinterest,
  FaEnvelope,
} from "react-icons/fa";

import CopyLinkButton from "./CopyLinkButton"; // ✅ import

type ShareProps = {
  url: string;
  city: string;
  state?: string;
};

export default async function SocialShare({ url, city, state }: ShareProps) {
  const baseText = `${city} current air quality`;
  const hashtags = `AirQuality,AQI,${city.replace(/\s+/g, "")}${
    state ? "," + state.replace(/\s+/g, "") : ""
  }`;

  const fbShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&hashtag=%23AirQuality`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(baseText)}&hashtags=${hashtags}`;
  const whatsappShare = `https://wa.me/?text=${encodeURIComponent(`${baseText}\n${url}`)}`;
  const telegramShare = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(baseText)}`;
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const pinterestShare = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(baseText + " #" + hashtags.replace(/,/g, " #"))}`;
  const emailShare = `mailto:?subject=${encodeURIComponent(baseText)}&body=${encodeURIComponent(`${baseText}\n${url}`)}`;

  return (
    <div className="flex flex-wrap gap-3 mt-4">
      <a href={fbShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-600 text-white hover:opacity-90">
        <FaFacebook size={22} />
      </a>
      <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-sky-500 text-white hover:opacity-90">
        <FaTwitter size={22} />
      </a>
      <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-green-500 text-white hover:opacity-90">
        <FaWhatsapp size={22} />
      </a>
      <a href={telegramShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-400 text-white hover:opacity-90">
        <FaTelegram size={22} />
      </a>
      <a href={linkedinShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-700 text-white hover:opacity-90">
        <FaLinkedin size={22} />
      </a>
      <a href={pinterestShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-red-600 text-white hover:opacity-90">
        <FaPinterest size={22} />
      </a>
      <a href={emailShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-700 text-white hover:opacity-90">
        <FaEnvelope size={22} />
      </a>

      {/* ✅ Client button alag file se */}
      <CopyLinkButton url={url} city={city} />
    </div>
  );
}

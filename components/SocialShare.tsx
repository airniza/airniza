import { 
  FaFacebook,
  FaXTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaPinterest,
  FaEnvelope,
} from "react-icons/fa6";

type ShareProps = {
  url: string;
  city: string;
  state?: string;
};

export default async function SocialShare({ url }: ShareProps) {
  const fbShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const xShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
  const whatsappShare = `https://wa.me/?text=${encodeURIComponent(url)}`;
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const pinterestShare = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}`;
  const emailShare = `mailto:?body=${encodeURIComponent(url)}`;

  return (
    <div className="flex flex-wrap items-center gap-3 mt-4 justify-center">
      {/* Text on left */}
      <span className="text-base sm:text-lg font-medium text-gray-700">
        Share on
      </span>

      {/* Icons */}
      <div className="flex flex-wrap gap-3">
        <a
          href={fbShare}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-blue-600 text-white hover:opacity-90"
        >
          <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a
          href={xShare}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-black text-white hover:opacity-90"
        >
          <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a
          href={whatsappShare}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-green-500 text-white hover:opacity-90"
        >
          <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a
          href={linkedinShare}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-blue-700 text-white hover:opacity-90"
        >
          <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a
          href={pinterestShare}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-red-600 text-white hover:opacity-90"
        >
          <FaPinterest className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a
          href={emailShare}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-700 text-white hover:opacity-90"
        >
          <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>
    </div>
  );
}

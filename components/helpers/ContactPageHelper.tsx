"use client";
import { useState } from "react";

type Web3FormsResponse = {
  success: boolean;
  message?: string;
};

export default function ContactPageHelper() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "f567d544-9ccc-48d1-ad9a-dade5c0f4758");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = (await res.json()) as Web3FormsResponse;

    setLoading(false);

    if (data.success) {
      setStatus("✅ Message sent successfully!");
      form.reset();
    } else {
      setStatus("❌ Something went wrong. Please try again!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full border rounded p-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full border rounded p-2"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="w-full border rounded p-2 h-32"
      />

      {/* Honeypot spam protection */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded text-white ${
          loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Sending..." : "Send"}
      </button>

      {status && <p className="mt-4 text-center">{status}</p>}
    </form>
  );
}

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "919278927890"; // Replace with your WhatsApp number

  const message = encodeURIComponent(
    "Hello Techsail, I'm interested in your engineering and facility management services."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-400/50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
      <span className="hidden md:block font-semibold">
        Chat with us
      </span>
    </a>
  );
}
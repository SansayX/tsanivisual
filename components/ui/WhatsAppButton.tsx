import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/config";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Tsanii Visual on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#181818] text-white shadow-xl transition hover:-translate-y-1 sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={22} />
    </a>
  );
}

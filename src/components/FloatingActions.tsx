import { MessageCircle, Phone } from "lucide-react";
import { CLINIC } from "@/lib/i18n";
import { waLink } from "@/lib/whatsapp";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="size-14 rounded-full bg-[#25D366] text-white shadow-gold flex items-center justify-center hover:scale-110 transition animate-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="size-7" />
      </a>
      <a
        href={`tel:${CLINIC.phoneIntl}`}
        className="size-14 rounded-full bg-gradient-primary text-primary-foreground shadow-soft flex items-center justify-center hover:scale-110 transition"
        aria-label="Call"
      >
        <Phone className="size-6" />
      </a>
    </div>
  );
}
import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { CLINIC } from "@/lib/i18n";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Logo size={48} />
            <div>
              <div className="font-display text-xl font-semibold">{CLINIC.name}</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Holistic Healing · Chennai</div>
            </div>
          </div>
          <p className="text-sm opacity-70 max-w-md leading-relaxed">
            Authentic acupuncture and traditional varmam therapy guided by 13+ years of practice. Calm, personalized care for body and mind.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="size-9 rounded-full bg-background/10 hover:bg-accent/30 flex items-center justify-center transition">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-accent">Visit</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2"><MapPin className="size-4 mt-0.5 shrink-0" /> {CLINIC.address}</li>
            <li className="flex gap-2"><Clock className="size-4 mt-0.5 shrink-0" /><span>{CLINIC.hours.join(" · ")}</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-accent">Contact</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li><a href={`tel:${CLINIC.phoneIntl}`} className="flex gap-2 hover:text-accent"><Phone className="size-4" /> {CLINIC.phone}</a></li>
            <li><a href={`mailto:${CLINIC.email}`} className="flex gap-2 hover:text-accent break-all"><Mail className="size-4" /> {CLINIC.email}</a></li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <Link to="/appointment" className="px-3 py-1.5 rounded-full bg-accent text-accent-foreground font-semibold">Book</Link>
            <Link to="/contact" className="px-3 py-1.5 rounded-full border border-background/30">Map</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 py-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
      </div>
    </footer>
  );
}

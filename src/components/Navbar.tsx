import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Globe, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { useLang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/whatsapp";


export function Navbar() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: t("nav_home") },
    { to: "/about", label: t("nav_about") },
    { to: "/treatments", label: t("nav_treatments") },
    { to: "/gallery", label: t("nav_gallery") },
    { to: "/testimonials", label: t("nav_testimonials") },
    { to: "/faq", label: t("nav_faq") },
    { to: "/contact", label: t("nav_contact") },
  ] as const;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-xl shadow-soft border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <Logo size={42} className="transition-transform group-hover:rotate-12 duration-500" />
          <div className="leading-tight">
            <div className="font-display text-base md:text-lg font-semibold text-foreground">Iraivazhi</div>
            <div className="text-[10px] md:text-xs text-muted-foreground tracking-wide uppercase">Acupuncture & Varmam</div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "ta" : "en")}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-semibold hover:bg-primary-soft transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="size-3.5" />
            {lang === "en" ? "தமிழ்" : "English"}
          </button>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex size-9 rounded-full bg-[#25D366] text-white items-center justify-center hover:scale-110 transition"
            aria-label="WhatsApp"
          >
            <MessageCircle className="size-4" />
          </a>
          <Button asChild size="sm" className="hidden md:inline-flex bg-gradient-primary shadow-soft">
            <Link to="/appointment">{t("cta_book")}</Link>
          </Button>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-up">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-foreground/80 hover:bg-primary-soft hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => setLang(lang === "en" ? "ta" : "en")}
              className="mt-2 px-3 py-3 rounded-lg text-left text-sm font-semibold text-primary border border-border"
            >
              <Globe className="inline size-4 mr-2" />
              {lang === "en" ? "தமிழில் காண்க" : "View in English"}
            </button>
            <Button asChild className="mt-2 bg-gradient-primary">
              <Link to="/appointment" onClick={() => setOpen(false)}>{t("cta_book")}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

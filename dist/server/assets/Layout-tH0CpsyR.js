import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import * as React from "react";
import { useState, useEffect } from "react";
import { Globe, MessageCircle, X, Menu, Facebook, Instagram, Youtube, MapPin, Clock, Phone, Mail } from "lucide-react";
import { C as CLINIC, u as useLang } from "./router-CUQ3MY0C.js";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const logo = "/assets/logo-DDIPILBV.png";
function Logo({ size = 40, className = "" }) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: logo,
      alt: "Iraivazhi Yin Yang logo",
      width: size,
      height: size,
      className,
      style: { width: size, height: size }
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const WA_NUMBER = CLINIC.phoneIntl.replace(/\D/g, "");
const WA_DEFAULT_MSG = "Hello, I would like to book an appointment at Iraivazhi Acupuncture & Varmam.";
function waLink(message = WA_DEFAULT_MSG) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
function Navbar() {
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
    { to: "/contact", label: t("nav_contact") }
  ];
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-xl shadow-soft border-b border-border/60" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("nav", { className: "container mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", children: [
            /* @__PURE__ */ jsx(Logo, { size: 42, className: "transition-transform group-hover:rotate-12 duration-500" }),
            /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsx("div", { className: "font-display text-base md:text-lg font-semibold text-foreground", children: "Iraivazhi" }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] md:text-xs text-muted-foreground tracking-wide uppercase", children: "Acupuncture & Varmam" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              className: "px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors",
              activeProps: { className: "text-primary" },
              children: l.label
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setLang(lang === "en" ? "ta" : "en"),
                className: "hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-semibold hover:bg-primary-soft transition-colors",
                "aria-label": "Toggle language",
                children: [
                  /* @__PURE__ */ jsx(Globe, { className: "size-3.5" }),
                  lang === "en" ? "தமிழ்" : "English"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: waLink(),
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hidden sm:inline-flex size-9 rounded-full bg-[#25D366] text-white items-center justify-center hover:scale-110 transition",
                "aria-label": "WhatsApp",
                children: /* @__PURE__ */ jsx(MessageCircle, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", className: "hidden md:inline-flex bg-gradient-primary shadow-soft", children: /* @__PURE__ */ jsx(Link, { to: "/appointment", children: t("cta_book") }) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "lg:hidden p-2 rounded-md hover:bg-muted",
                onClick: () => setOpen(!open),
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsx(Menu, { className: "size-5" })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "lg:hidden bg-background border-t border-border animate-fade-up", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 py-4 flex flex-col gap-1", children: [
          links.map((l) => /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              onClick: () => setOpen(false),
              className: "px-3 py-3 rounded-lg text-foreground/80 hover:bg-primary-soft hover:text-primary",
              children: l.label
            },
            l.to
          )),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setLang(lang === "en" ? "ta" : "en"),
              className: "mt-2 px-3 py-3 rounded-lg text-left text-sm font-semibold text-primary border border-border",
              children: [
                /* @__PURE__ */ jsx(Globe, { className: "inline size-4 mr-2" }),
                lang === "en" ? "தமிழில் காண்க" : "View in English"
              ]
            }
          ),
          /* @__PURE__ */ jsx(Button, { asChild: true, className: "mt-2 bg-gradient-primary", children: /* @__PURE__ */ jsx(Link, { to: "/appointment", onClick: () => setOpen(false), children: t("cta_book") }) })
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-foreground text-background mt-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 py-16 grid md:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx(Logo, { size: 48 }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-display text-xl font-semibold", children: CLINIC.name }),
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest opacity-70", children: "Holistic Healing · Chennai" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm opacity-70 max-w-md leading-relaxed", children: "Authentic acupuncture and traditional varmam therapy guided by 13+ years of practice. Calm, personalized care for body and mind." }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-3 mt-6", children: [Facebook, Instagram, Youtube].map((Icon, i) => /* @__PURE__ */ jsx("a", { href: "#", className: "size-9 rounded-full bg-background/10 hover:bg-accent/30 flex items-center justify-center transition", children: /* @__PURE__ */ jsx(Icon, { className: "size-4" }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4 text-accent", children: "Visit" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm opacity-80", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "size-4 mt-0.5 shrink-0" }),
            " ",
            CLINIC.address
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Clock, { className: "size-4 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: CLINIC.hours.join(" · ") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4 text-accent", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm opacity-80", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: `tel:${CLINIC.phoneIntl}`, className: "flex gap-2 hover:text-accent", children: [
            /* @__PURE__ */ jsx(Phone, { className: "size-4" }),
            " ",
            CLINIC.phone
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: `mailto:${CLINIC.email}`, className: "flex gap-2 hover:text-accent break-all", children: [
            /* @__PURE__ */ jsx(Mail, { className: "size-4" }),
            " ",
            CLINIC.email
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-wrap gap-2 text-xs", children: [
          /* @__PURE__ */ jsx(Link, { to: "/appointment", className: "px-3 py-1.5 rounded-full bg-accent text-accent-foreground font-semibold", children: "Book" }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "px-3 py-1.5 rounded-full border border-background/30", children: "Map" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-background/10 py-5 text-center text-xs opacity-60", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      CLINIC.name,
      ". All rights reserved."
    ] })
  ] });
}
function FloatingActions() {
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-5 right-5 z-40 flex flex-col gap-3", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: waLink(),
        target: "_blank",
        rel: "noopener noreferrer",
        className: "size-14 rounded-full bg-[#25D366] text-white shadow-gold flex items-center justify-center hover:scale-110 transition animate-float",
        "aria-label": "Chat on WhatsApp",
        children: /* @__PURE__ */ jsx(MessageCircle, { className: "size-7" })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: `tel:${CLINIC.phoneIntl}`,
        className: "size-14 rounded-full bg-gradient-primary text-primary-foreground shadow-soft flex items-center justify-center hover:scale-110 transition",
        "aria-label": "Call",
        children: /* @__PURE__ */ jsx(Phone, { className: "size-6" })
      }
    )
  ] });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1 pt-16 md:pt-20", children }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FloatingActions, {})
  ] });
}
export {
  Button as B,
  Layout as L,
  Logo as a,
  cn as c,
  waLink as w
};

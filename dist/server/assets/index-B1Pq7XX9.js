import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Calendar, MessageCircle, Phone, Award, Heart, Sparkles, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { L as Layout, a as Logo, B as Button } from "./Layout-tH0CpsyR.js";
import { u as useLang, C as CLINIC } from "./router-CUQ3MY0C.js";
import { t as therapist } from "./therapist-Ce6h1moY.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-query";
import "sonner";
import "zod";
const heroBg = "data:image/jpeg;base64,";
const treatments = ["Back Pain", "Neck Pain", "Sciatica", "Migraine", "Knee Pain", "Stress Relief", "Paralysis Support", "Nerve Problems", "Sleep Disorders", "General Wellness"];
function Home() {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden min-h-[92vh] flex items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsx("img", { src: heroBg, alt: "", className: "w-full h-full object-cover opacity-30" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-hero opacity-90" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "animate-fade-up", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur border border-border shadow-soft", children: [
            /* @__PURE__ */ jsx(Logo, { size: 22 }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold tracking-widest uppercase text-primary", children: CLINIC.name })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "mt-6 text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-foreground leading-[1.05] text-balance", children: t("tagline") }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed", children: t("hero_desc") }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-gradient-primary shadow-soft text-base h-12 px-6", children: /* @__PURE__ */ jsxs(Link, { to: "/appointment", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "size-5" }),
              " ",
              t("cta_book")
            ] }) }),
            /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "h-12 px-6 border-2 bg-background/60 backdrop-blur", children: /* @__PURE__ */ jsxs("a", { href: `https://wa.me/${CLINIC.phoneIntl.replace("+", "")}`, target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsx(MessageCircle, { className: "size-5" }),
              " ",
              t("cta_whatsapp")
            ] }) }),
            /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "ghost", className: "h-12 px-6", children: /* @__PURE__ */ jsxs("a", { href: `tel:${CLINIC.phoneIntl}`, children: [
              /* @__PURE__ */ jsx(Phone, { className: "size-5" }),
              " ",
              t("cta_call")
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3", children: [{
            Icon: Award,
            label: t("trust_experience")
          }, {
            Icon: Heart,
            label: t("trust_holistic")
          }, {
            Icon: Sparkles,
            label: t("trust_personal")
          }, {
            Icon: MapPin,
            label: t("trust_chennai")
          }].map(({
            Icon,
            label
          }) => /* @__PURE__ */ jsxs("div", { className: "p-3 rounded-xl bg-background/70 backdrop-blur border border-border/60", children: [
            /* @__PURE__ */ jsx(Icon, { className: "size-5 text-primary" }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs font-semibold leading-tight", children: label })
          ] }, label)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative animate-fade-up [animation-delay:200ms]", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-6 bg-gradient-gold rounded-full blur-3xl opacity-30" }),
          /* @__PURE__ */ jsx("div", { className: "relative aspect-square rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary-soft to-secondary shadow-card border-4 border-background", children: /* @__PURE__ */ jsx("img", { src: therapist, alt: "Therapist P. Manikandan", className: "w-full h-full object-cover object-top" }) }),
          /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 -left-4 sm:left-6 bg-background rounded-2xl px-5 py-4 shadow-card border border-border max-w-[220px]", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsx(Logo, { size: 18 }),
              " Lead Practitioner"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 font-display font-semibold text-base", children: CLINIC.therapist }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: CLINIC.qualifications })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "container mx-auto px-6 py-20", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-accent-foreground bg-accent/30 px-3 py-1 rounded-full", children: t("about_title") }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl md:text-5xl font-display font-semibold text-balance", children: t("hero_title") }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "At Iraivazhi, ancient Tamil varmam wisdom meets the precision of acupuncture. Every session is personalized — calm, drug-free, and rooted in your unique balance." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3", children: ["Personalized diagnosis & treatment plan", "Sterile, single-use needles", "Bilingual care — Tamil & English", "Family-friendly clinic in T Nagar"].map((s) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "size-5 text-primary shrink-0" }),
          " ",
          s
        ] }, s)) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, className: "mt-8 bg-gradient-primary", children: /* @__PURE__ */ jsxs(Link, { to: "/about", children: [
          "Meet Therapist Manikandan ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: [{
        k: "13+",
        v: "Years of practice"
      }, {
        k: "10k+",
        v: "Sessions delivered"
      }, {
        k: "10",
        v: "Conditions treated"
      }, {
        k: "5★",
        v: "Patient experience"
      }].map((s) => /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-card shadow-card border border-border", children: [
        /* @__PURE__ */ jsx("div", { className: "text-4xl font-display font-semibold text-primary", children: s.k }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-1", children: s.v })
      ] }, s.v)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-primary-soft/50 py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-primary", children: "Treatments" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-display font-semibold", children: "What we treat" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Holistic relief from a range of physical, neurological and emotional conditions." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4", children: treatments.map((tr, i) => /* @__PURE__ */ jsxs(Link, { to: "/treatments", className: "group p-5 rounded-2xl bg-background border border-border hover:border-primary hover:shadow-soft transition-all", style: {
        animationDelay: `${i * 40}ms`
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "size-10 rounded-xl bg-gradient-gold/30 flex items-center justify-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition", children: /* @__PURE__ */ jsx(Heart, { className: "size-5" }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 font-semibold", children: tr }),
        /* @__PURE__ */ jsxs("div", { className: "mt-1 text-xs text-muted-foreground flex items-center gap-1 opacity-0 group-hover:opacity-100 transition", children: [
          "Learn more ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "size-3" })
        ] })
      ] }, tr)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container mx-auto px-6 py-20", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-16 text-primary-foreground shadow-card", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -right-12 -top-12 size-64 rounded-full bg-accent/30 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative grid md:grid-cols-[1.5fr_1fr] gap-8 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Logo, { size: 48, className: "mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-display font-semibold", children: "Ready to begin your healing journey?" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-3 opacity-90 max-w-lg", children: [
            "Book your consultation at ",
            CLINIC.name,
            ". Same-week slots available."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "secondary", className: "bg-background text-primary h-12", children: /* @__PURE__ */ jsx(Link, { to: "/appointment", children: t("cta_book") }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-background/40 bg-transparent text-primary-foreground hover:bg-background/10 h-12", children: /* @__PURE__ */ jsxs("a", { href: `tel:${CLINIC.phoneIntl}`, children: [
            /* @__PURE__ */ jsx(Phone, { className: "size-4" }),
            " ",
            CLINIC.phone
          ] }) })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};

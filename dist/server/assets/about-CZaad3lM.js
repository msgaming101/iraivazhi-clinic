import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Award, GraduationCap, Stethoscope, Heart } from "lucide-react";
import { L as Layout, B as Button } from "./Layout-tH0CpsyR.js";
import { C as CLINIC } from "./router-CUQ3MY0C.js";
import { t as therapist } from "./therapist-Ce6h1moY.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-query";
import "sonner";
import "zod";
function About() {
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx("section", { className: "container mx-auto px-6 py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:sticky lg:top-28", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gradient-gold rounded-3xl blur-2xl opacity-30" }),
      /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/5] rounded-3xl overflow-hidden bg-primary-soft shadow-card border-4 border-background", children: /* @__PURE__ */ jsx("img", { src: therapist, alt: "Therapist P. Manikandan", className: "w-full h-full object-cover" }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-primary", children: "About the Therapist" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl md:text-6xl font-display font-semibold leading-tight", children: CLINIC.therapist }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: CLINIC.qualifications }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-relaxed", children: "For over 13 years, Therapist Manikandan has guided patients across Chennai through pain, paralysis, stress and chronic conditions — using a thoughtful blend of acupuncture and the ancient Tamil science of varmam." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "His approach is gentle and deeply personal: each diagnosis considers your body, breath, and mind. The result is care that doesn't just manage symptoms — it restores natural balance." }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid sm:grid-cols-2 gap-4", children: [{
        Icon: Award,
        label: "13 Years",
        desc: "of dedicated clinical practice"
      }, {
        Icon: GraduationCap,
        label: "BEMS · MD",
        desc: "Acupuncture & integrative medicine"
      }, {
        Icon: Stethoscope,
        label: "Specialization",
        desc: "Acupuncture & varmam therapy"
      }, {
        Icon: Heart,
        label: "BA Psychology",
        desc: "Mind-body wellbeing focus"
      }].map((c) => /* @__PURE__ */ jsxs("div", { className: "p-5 rounded-2xl bg-card border border-border shadow-soft", children: [
        /* @__PURE__ */ jsx(c.Icon, { className: "size-6 text-primary" }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 font-display text-xl font-semibold", children: c.label }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: c.desc })
      ] }, c.label)) }),
      /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "mt-10 bg-gradient-primary", children: /* @__PURE__ */ jsx(Link, { to: "/appointment", children: "Book a Consultation" }) })
    ] })
  ] }) }) });
}
export {
  About as component
};

import { jsx, jsxs } from "react/jsx-runtime";
import { L as Layout } from "./Layout-tH0CpsyR.js";
import { Quote, Star } from "lucide-react";
import "@tanstack/react-router";
import "react";
import "./router-CUQ3MY0C.js";
import "@tanstack/react-query";
import "sonner";
import "zod";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const items = [{
  name: "Lakshmi R.",
  role: "T Nagar",
  text: "After years of back pain, Therapist Manikandan's treatment gave me my life back. The clinic is calm and welcoming.",
  rating: 5
}, {
  name: "Suresh K.",
  role: "Adyar",
  text: "Migraine episodes used to derail my week. After consistent sessions, they've nearly disappeared.",
  rating: 5
}, {
  name: "Priya V.",
  role: "Nungambakkam",
  text: "I was skeptical about acupuncture, but the personalized care won me over. Stress relief like nothing else.",
  rating: 5
}, {
  name: "Arun M.",
  role: "Anna Nagar",
  text: "Excellent varmam therapy for my knee. Mobility improved within weeks. Highly recommend.",
  rating: 5
}, {
  name: "Sangeetha P.",
  role: "Velachery",
  text: "Compassionate therapist, sterile clinic, and genuine results. Will keep coming back.",
  rating: 5
}, {
  name: "Karthik S.",
  role: "Mylapore",
  text: "Helped my mother after a partial paralysis episode. Steady progress and a hopeful experience.",
  rating: 5
}];
function Testimonials() {
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("section", { className: "container mx-auto px-6 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-primary", children: "Patient Stories" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl md:text-6xl font-display font-semibold", children: "What our patients say" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: items.map((t, i) => /* @__PURE__ */ jsxs("div", { className: "p-7 rounded-3xl bg-card border border-border shadow-soft hover:shadow-card transition animate-fade-up", style: {
      animationDelay: `${i * 60}ms`
    }, children: [
      /* @__PURE__ */ jsx(Quote, { className: "size-8 text-accent" }),
      /* @__PURE__ */ jsx("div", { className: "mt-3 flex gap-0.5", children: Array.from({
        length: t.rating
      }).map((_, k) => /* @__PURE__ */ jsx(Star, { className: "size-4 fill-accent text-accent" }, k)) }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 leading-relaxed", children: [
        '"',
        t.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 pt-5 border-t border-border", children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold", children: t.name }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: t.role })
      ] })
    ] }, i)) })
  ] }) });
}
export {
  Testimonials as component
};

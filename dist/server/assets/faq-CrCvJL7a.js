import { jsx, jsxs } from "react/jsx-runtime";
import { c as cn, L as Layout } from "./Layout-tH0CpsyR.js";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import "@tanstack/react-router";
import "./router-CUQ3MY0C.js";
import "@tanstack/react-query";
import "sonner";
import "zod";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
const items = [{
  q: "Is acupuncture painful?",
  a: "No. The needles are extremely fine — most patients feel only a slight tingling or warmth. The session is deeply relaxing."
}, {
  q: "What is varmam therapy?",
  a: "Varmam is an ancient Tamil healing science that stimulates specific energy points on the body to relieve pain and restore balance, without medication."
}, {
  q: "How many sessions will I need?",
  a: "It depends on the condition. Most patients see meaningful improvement in 5–10 sessions; chronic conditions may need a longer plan."
}, {
  q: "Are the needles safe and sterile?",
  a: "Yes. We use single-use, sterile, disposable needles for every patient."
}, {
  q: "Do you treat children and elderly patients?",
  a: "Yes. Treatments are gentle and tailored for all ages."
}, {
  q: "Can I combine it with my existing medication?",
  a: "Acupuncture and varmam are complementary and safe alongside most medications. Always inform your therapist about all treatments."
}, {
  q: "Do you accept walk-ins?",
  a: "We strongly recommend booking in advance through the website or WhatsApp to guarantee your slot."
}, {
  q: "What should I wear?",
  a: "Wear loose, comfortable clothing. Treatment areas should be accessible."
}];
function FAQ() {
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("section", { className: "container mx-auto px-6 py-16 md:py-24 max-w-3xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-primary", children: "Questions" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl md:text-6xl font-display font-semibold", children: "Frequently asked" })
    ] }),
    /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "mt-10 space-y-3", children: items.map((it, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `i${i}`, className: "border border-border rounded-2xl px-5 bg-card shadow-soft", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left font-semibold hover:no-underline", children: it.q }),
      /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground leading-relaxed", children: it.a })
    ] }, i)) })
  ] }) });
}
export {
  FAQ as component
};

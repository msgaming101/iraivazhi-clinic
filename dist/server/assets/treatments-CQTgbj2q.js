import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import * as React from "react";
import { useState } from "react";
import { c as cn, B as Button, w as waLink, L as Layout } from "./Layout-tH0CpsyR.js";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Check, Calendar, MessageCircle, Bone, Activity, Zap, Brain, Footprints, Wind, HeartPulse, Sparkles, Moon, Sun, ArrowRight } from "lucide-react";
import "./router-CUQ3MY0C.js";
import "@tanstack/react-query";
import "sonner";
import "zod";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
function TreatmentDetailDialog({
  treatment,
  open,
  onOpenChange
}) {
  if (!treatment) return null;
  const { Icon } = treatment;
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-2xl max-h-[88vh] overflow-y-auto p-0 gap-0 rounded-3xl", children: [
    /* @__PURE__ */ jsx("div", { className: "p-6 md:p-8 bg-gradient-primary text-primary-foreground rounded-t-3xl", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "size-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "size-7" }) }),
      /* @__PURE__ */ jsxs(DialogHeader, { className: "text-left space-y-1.5", children: [
        /* @__PURE__ */ jsx(DialogTitle, { className: "text-2xl md:text-3xl font-display font-semibold", children: treatment.name }),
        /* @__PURE__ */ jsx(DialogDescription, { className: "text-primary-foreground/85 text-sm md:text-base", children: treatment.short })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-8 space-y-6", children: [
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: treatment.description }),
      /* @__PURE__ */ jsx(Section, { title: "Common Symptoms", children: /* @__PURE__ */ jsx("ul", { className: "grid sm:grid-cols-2 gap-y-1.5 gap-x-4", children: treatment.symptoms.map((s) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2 text-sm", children: [
        /* @__PURE__ */ jsx(Check, { className: "size-4 text-primary mt-0.5 shrink-0" }),
        s
      ] }, s)) }) }),
      /* @__PURE__ */ jsx(Section, { title: "Possible Causes", children: /* @__PURE__ */ jsx("ul", { className: "grid sm:grid-cols-2 gap-y-1.5 gap-x-4", children: treatment.causes.map((s) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2 text-sm", children: [
        /* @__PURE__ */ jsx(Check, { className: "size-4 text-primary mt-0.5 shrink-0" }),
        s
      ] }, s)) }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx(InfoCard, { title: "How Acupuncture Helps", body: treatment.acupuncture }),
        /* @__PURE__ */ jsx(InfoCard, { title: "How Varmam Helps", body: treatment.varmam })
      ] }),
      /* @__PURE__ */ jsx(Section, { title: "Recovery & Support", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: treatment.recovery }) }),
      /* @__PURE__ */ jsx(Section, { title: "Benefits", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: treatment.benefits.map((b) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold", children: b }, b)) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 pt-2", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "flex-1 bg-gradient-primary", children: /* @__PURE__ */ jsxs(Link, { to: "/appointment", onClick: () => onOpenChange(false), children: [
          /* @__PURE__ */ jsx(Calendar, { className: "size-4" }),
          " Book Appointment"
        ] }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "flex-1", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: waLink(`Hello, I would like to know more about ${treatment.name} treatment at Iraivazhi Acupuncture & Varmam.`),
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
              /* @__PURE__ */ jsx(MessageCircle, { className: "size-4" }),
              " Ask on WhatsApp"
            ]
          }
        ) })
      ] })
    ] })
  ] }) });
}
function Section({ title, children }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold mb-2", children: title }),
    children
  ] });
}
function InfoCard({ title, body }) {
  return /* @__PURE__ */ jsxs("div", { className: "p-5 rounded-2xl bg-gradient-gold/20 border border-border", children: [
    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm uppercase tracking-wide text-primary", children: title }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-foreground/80 leading-relaxed", children: body })
  ] });
}
const TREATMENTS = [
  {
    slug: "back-pain",
    Icon: Bone,
    name: "Back Pain",
    short: "Targeted relief for chronic and acute lower & upper back pain.",
    description: "Back pain affects mobility, sleep and daily activity. Our treatment combines precise acupuncture with traditional varmam pressure-point therapy to release tension and restore spinal balance.",
    symptoms: ["Stiffness in the lower or upper back", "Sharp pain with movement", "Muscle spasms", "Difficulty standing or bending", "Pain radiating to hips"],
    causes: ["Poor posture or prolonged sitting", "Heavy lifting or strain", "Disc compression", "Age-related wear", "Lack of core strength"],
    acupuncture: "Fine sterile needles target points along the bladder and governing meridians to reduce inflammation, improve blood flow and release tight muscle layers.",
    varmam: "Gentle thumb pressure on specific varma points around the spine relaxes deep paraspinal muscles and rebalances nerve flow without medication.",
    recovery: "Most patients feel noticeable relief within 4–6 sessions. A typical course is 8–12 sessions, followed by simple posture exercises shared by the therapist.",
    benefits: ["Drug-free pain relief", "Improved posture & flexibility", "Better sleep", "Long-lasting results"]
  },
  {
    slug: "neck-pain",
    Icon: Activity,
    name: "Neck Pain",
    short: "Release tension from posture, spondylosis and stress.",
    description: "Modern lifestyles, screen use and stress create chronic neck tightness. Acupuncture and varmam together calm the muscles and improve cervical mobility.",
    symptoms: ["Stiff neck", "Headaches at the base of skull", "Shoulder tightness", "Tingling in arms", "Reduced range of motion"],
    causes: ["Long screen hours", "Cervical spondylosis", "Stress & poor sleep posture", "Old injury"],
    acupuncture: "Needles placed at GB20, GB21 and surrounding points relieve trapezius spasm and increase oxygen to the cervical region.",
    varmam: "Soft varmam strokes along the neck and shoulder line release deep knots and rebalance pranic flow.",
    recovery: "Relief usually begins within 2–3 sessions; full course 6–10 sessions.",
    benefits: ["Quick tension release", "Fewer headaches", "Improved focus", "Better posture"]
  },
  {
    slug: "sciatica",
    Icon: Zap,
    name: "Sciatica",
    short: "Nerve-focused therapy to ease radiating leg pain.",
    description: "Sciatic nerve irritation causes shooting pain from the lower back into the leg. Our integrated therapy reduces nerve inflammation and restores comfortable movement.",
    symptoms: ["Burning pain down one leg", "Numbness or tingling", "Weakness in foot or leg", "Pain when sitting"],
    causes: ["Herniated disc", "Piriformis syndrome", "Spinal stenosis", "Prolonged sitting"],
    acupuncture: "Distal and local points along the bladder and gallbladder meridians decompress nerve pressure and reduce inflammation.",
    varmam: "Targeted pressure at hip and sacrum varma points releases the piriformis and frees the sciatic nerve.",
    recovery: "Significant relief in 6–8 sessions; complete recovery in 10–15 sessions for chronic cases.",
    benefits: ["Walk comfortably again", "No painkillers needed", "Restored leg strength"]
  },
  {
    slug: "migraine",
    Icon: Brain,
    name: "Migraine",
    short: "Reduce frequency and intensity of recurring headaches.",
    description: "Migraines disrupt life with throbbing pain, nausea and sensitivity. Our therapy reduces both intensity and frequency by calming the nervous system.",
    symptoms: ["Throbbing one-sided headache", "Nausea or vomiting", "Light or sound sensitivity", "Visual aura"],
    causes: ["Hormonal changes", "Stress", "Poor sleep", "Food triggers", "Tension build-up"],
    acupuncture: "Points such as LI4, GB20 and Yintang regulate serotonin levels and calm vascular reactivity.",
    varmam: "Fine varmam touch on temples and skull points eases pressure and quietens the nervous system.",
    recovery: "Frequency drops noticeably within 4 weeks. A full course runs 8–12 sessions.",
    benefits: ["Fewer attacks", "Lower medication need", "Calmer mind", "Better sleep"]
  },
  {
    slug: "knee-pain",
    Icon: Footprints,
    name: "Knee Pain",
    short: "Improve mobility and reduce inflammation naturally.",
    description: "Whether from age, injury or arthritis, knee pain limits independence. We help reduce swelling and rebuild joint comfort.",
    symptoms: ["Stiffness on waking", "Pain climbing stairs", "Swelling", "Clicking or grinding"],
    causes: ["Osteoarthritis", "Ligament strain", "Overuse", "Weight pressure"],
    acupuncture: "Needles around ST35, SP9 and Xiyan points reduce joint inflammation and stimulate cartilage health.",
    varmam: "Gentle varmam mobilises the knee capsule, freeing trapped fluid and improving range.",
    recovery: "Improvement seen within 5–7 sessions; full course 10–15 sessions.",
    benefits: ["Walk and climb easily", "Less swelling", "Stronger joints"]
  },
  {
    slug: "stress-relief",
    Icon: Wind,
    name: "Stress Relief",
    short: "Calm the nervous system through mind-body balance.",
    description: "Chronic stress affects sleep, mood and immunity. Acupuncture + varmam restore parasympathetic balance for deep, lasting calm.",
    symptoms: ["Racing thoughts", "Tight shoulders", "Poor sleep", "Low energy", "Anxiety"],
    causes: ["Work pressure", "Emotional strain", "Hormonal imbalance", "Lifestyle"],
    acupuncture: "Heart and pericardium meridian points calm the mind and reduce cortisol response.",
    varmam: "Soothing varmam on head, spine and feet activates the body's natural relaxation response.",
    recovery: "Most patients feel calmer from the first session; 6–8 sessions for stable balance.",
    benefits: ["Deep relaxation", "Better sleep", "Clearer thinking", "Improved mood"]
  },
  {
    slug: "paralysis-support",
    Icon: HeartPulse,
    name: "Paralysis Support",
    short: "Long-term rehabilitation through nerve stimulation.",
    description: "For post-stroke, facial or limb paralysis, our therapy supports nerve regeneration and muscle re-education over a structured course.",
    symptoms: ["Loss of movement in face or limb", "Weakness", "Speech difficulty", "Reduced sensation"],
    causes: ["Stroke", "Bell's palsy", "Nerve injury", "Spinal conditions"],
    acupuncture: "Scalp and local body acupuncture stimulates affected motor zones and improves nerve conduction.",
    varmam: "Targeted varmam reactivates dormant nerve pathways and restores micro-circulation.",
    recovery: "Best results when started early. Long-term programmes of 3–6 months show meaningful functional recovery.",
    benefits: ["Regained movement", "Improved speech", "Greater independence"]
  },
  {
    slug: "nerve-problems",
    Icon: Sparkles,
    name: "Nerve Problems",
    short: "Address neuropathy, numbness and tingling.",
    description: "Diabetic neuropathy and other nerve issues respond well to combined acupuncture and varmam by restoring circulation and nerve signalling.",
    symptoms: ["Numbness in hands or feet", "Pins-and-needles", "Burning sensation", "Loss of balance"],
    causes: ["Diabetes", "Vitamin deficiency", "Nerve compression", "Toxin exposure"],
    acupuncture: "Distal points on hands and feet stimulate peripheral nerve regeneration and circulation.",
    varmam: "Light varmam along nerve pathways awakens sensation and reduces burning.",
    recovery: "Sensation improves over 8–12 sessions; ongoing care recommended for diabetic patients.",
    benefits: ["Reduced numbness", "Better balance", "Comfortable sleep"]
  },
  {
    slug: "sleep-disorders",
    Icon: Moon,
    name: "Sleep Disorders",
    short: "Restore deep, restful sleep without medication.",
    description: "Insomnia and disturbed sleep respond beautifully to gentle nervous-system rebalancing.",
    symptoms: ["Difficulty falling asleep", "Frequent waking", "Early morning awakening", "Daytime fatigue"],
    causes: ["Stress & anxiety", "Hormonal changes", "Caffeine or screens", "Pain conditions"],
    acupuncture: "Heart-7, Spleen-6 and Anmian points reset the sleep cycle and calm the mind.",
    varmam: "Soft head and foot varmam release tension and induce natural drowsiness.",
    recovery: "Many sleep deeper from the first week. Full course 6–10 sessions.",
    benefits: ["Fall asleep faster", "Stay asleep longer", "Wake up refreshed"]
  },
  {
    slug: "general-wellness",
    Icon: Sun,
    name: "General Wellness",
    short: "Preventive care to keep body and mind in harmony.",
    description: "Regular sessions maintain energy, immunity and emotional balance — ideal for those without specific complaints who value preventive health.",
    symptoms: ["Low energy", "Frequent minor illness", "Mood ups and downs", "Mild aches"],
    causes: ["Modern lifestyle", "Imbalanced diet", "Lack of rest", "Stress accumulation"],
    acupuncture: "Balancing points across major meridians tune the body's energy systems.",
    varmam: "Whole-body varmam clears stagnation and reinforces vitality.",
    recovery: "Recommended monthly or seasonally as a wellness ritual.",
    benefits: ["More energy", "Stronger immunity", "Emotional balance", "Healthy ageing"]
  }
];
function Treatments() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const openTreatment = (t) => {
    setSelected(t);
    setOpen(true);
  };
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsxs("section", { className: "container mx-auto px-6 py-16 md:py-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-primary", children: "Our Care" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl md:text-6xl font-display font-semibold", children: "Treatments we offer" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: "Each treatment combines acupuncture precision with the gentle, traditional touch of Tamil varmam therapy." }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Tap any treatment to learn more." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: TREATMENTS.map((it, i) => /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => openTreatment(it), className: "text-left group p-7 rounded-3xl bg-card border border-border shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-primary/40 transition-all animate-fade-up focus:outline-none focus:ring-2 focus:ring-primary", style: {
        animationDelay: `${i * 50}ms`
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "size-12 rounded-2xl bg-gradient-gold/30 group-hover:bg-gradient-primary group-hover:text-primary-foreground flex items-center justify-center transition", children: /* @__PURE__ */ jsx(it.Icon, { className: "size-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 text-xl font-display font-semibold", children: it.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: it.short }),
        /* @__PURE__ */ jsxs("span", { className: "mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition", children: [
          "Learn more ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "size-3.5" })
        ] })
      ] }, it.slug)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-gradient-primary", children: /* @__PURE__ */ jsx(Link, { to: "/appointment", children: "Book your treatment" }) }) })
    ] }),
    /* @__PURE__ */ jsx(TreatmentDetailDialog, { treatment: selected, open, onOpenChange: setOpen })
  ] });
}
export {
  Treatments as component
};

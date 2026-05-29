import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, createContext, useContext } from "react";
import { Toaster as Toaster$1 } from "sonner";
import { z } from "zod";
const appCss = "/assets/styles-DsztUnGI.css";
const dict = {
  brand: { en: "Iraivazhi Acupuncture & Varmam", ta: "இறைவழி அக்குபஞ்சர் & வர்மம்" },
  tagline: { en: "Natural Healing Through Acupuncture & Varmam", ta: "அக்குபஞ்சர் மற்றும் வர்ம சிகிச்சை மூலம் இயற்கை குணமாக்கல்" },
  nav_home: { en: "Home", ta: "முகப்பு" },
  nav_about: { en: "About", ta: "மருத்துவர்" },
  nav_treatments: { en: "Treatments", ta: "சிகிச்சைகள்" },
  nav_appointment: { en: "Appointment", ta: "சந்திப்பு" },
  nav_testimonials: { en: "Testimonials", ta: "சாட்சிகள்" },
  nav_gallery: { en: "Gallery", ta: "படங்கள்" },
  nav_contact: { en: "Contact", ta: "தொடர்பு" },
  nav_faq: { en: "FAQ", ta: "கேள்விகள்" },
  cta_book: { en: "Book Appointment", ta: "சந்திப்பை பதிவு செய்யுங்கள்" },
  cta_whatsapp: { en: "WhatsApp Now", ta: "வாட்ஸ்அப் செய்யுங்கள்" },
  cta_call: { en: "Call Clinic", ta: "மருத்துவமனையை அழைக்கவும்" },
  trust_experience: { en: "13+ Years Experience", ta: "13+ ஆண்டுகள் அனுபவம்" },
  trust_holistic: { en: "Holistic Healing", ta: "முழுமையான குணமாக்கல்" },
  trust_personal: { en: "Personalized Care", ta: "தனிப்பட்ட கவனிப்பு" },
  trust_chennai: { en: "Chennai Clinic", ta: "சென்னை கிளினிக்" },
  hero_title: {
    en: "A sanctuary for healing in the heart of Chennai",
    ta: "சென்னையின் இதயத்தில் குணமளிக்கும் அமைதியான சிகிச்சை மையம்"
  },
  hero_desc: {
    en: "At Iraivazhi, ancient Tamil varmam wisdom meets the precision of acupuncture.",
    ta: "இறைவழியில், பாரம்பரிய தமிழ் வர்ம அறிவும் அக்குபஞ்சர் சிகிச்சையும் இணைகின்றன."
  },
  about_title: {
    en: "About The Clinic",
    ta: "மருத்துவமனை பற்றி"
  },
  gallery_title: {
    en: "Gallery",
    ta: "புகைப்படங்கள்"
  },
  faq_title: {
    en: "Frequently Asked Questions",
    ta: "அடிக்கடி கேட்கப்படும் கேள்விகள்"
  },
  contact_title: {
    en: "Contact Us",
    ta: "தொடர்பு கொள்ளுங்கள்"
  },
  appointment_success: {
    en: "Your appointment has been confirmed successfully.",
    ta: "உங்கள் சந்திப்பு வெற்றிகரமாக பதிவு செய்யப்பட்டது."
  },
  login_title: {
    en: "Patient Login",
    ta: "நோயாளர் உள்நுழைவு"
  },
  signup_title: {
    en: "Create Account",
    ta: "கணக்கு உருவாக்கவும்"
  },
  admin_title: {
    en: "Admin Portal",
    ta: "நிர்வாக பகுதி"
  },
  email_label: {
    en: "Email",
    ta: "மின்னஞ்சல்"
  },
  password_label: {
    en: "Password",
    ta: "கடவுச்சொல்"
  },
  phone_label: {
    en: "Phone Number",
    ta: "தொலைபேசி எண்"
  },
  reason_label: {
    en: "Reason For Visit",
    ta: "வருகைக்கான காரணம்"
  },
  booked_label: {
    en: "Booked",
    ta: "பதிவு செய்யப்பட்டது"
  }
};
const LangCtx = createContext({
  lang: "en",
  setLang: () => {
  },
  t: (k) => dict[k]?.en ?? String(k)
});
function LangProvider({ children }) {
  const [lang, setLangState] = useState("en");
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (stored) setLangState(stored);
  }, []);
  const setLang = (l) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  const t = (k) => dict[k]?.[lang] ?? String(k);
  return /* @__PURE__ */ jsx(LangCtx.Provider, { value: { lang, setLang, t }, children });
}
const useLang = () => useContext(LangCtx);
const CLINIC = {
  name: "Iraivazhi Acupuncture & Varmam",
  therapist: "Therapist P. Manikandan",
  qualifications: "BEMS, BA Psychology, MD Acupuncture",
  phone: "9840251755",
  phoneIntl: "+919840251755",
  email: "manitnagar@gmail.com",
  address: "No.1, New Boag Road, Lallitha Puram, T Nagar, Chennai – 600017",
  hours: ["10:00 AM – 1:00 PM", "4:00 PM – 7:30 PM"]
};
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$a = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Iraivazhi Acupuncture & Varmam — Chennai Holistic Healing Clinic" },
      { name: "description", content: "Iraivazhi Acupuncture & Varmam in T Nagar, Chennai. Therapist P. Manikandan offers 13+ years of acupuncture and varmam therapy for pain, stress, paralysis & wellness." },
      { name: "author", content: "Iraivazhi Acupuncture & Varmam" },
      { property: "og:title", content: "Iraivazhi Acupuncture & Varmam — Chennai Holistic Healing Clinic" },
      { property: "og:description", content: "Iraivazhi Acupuncture & Varmam in T Nagar, Chennai. Therapist P. Manikandan offers 13+ years of acupuncture and varmam therapy for pain, stress, paralysis & wellness." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Iraivazhi Acupuncture & Varmam — Chennai Holistic Healing Clinic" },
      { name: "twitter:description", content: "Iraivazhi Acupuncture & Varmam in T Nagar, Chennai. Therapist P. Manikandan offers 13+ years of acupuncture and varmam therapy for pain, stress, paralysis & wellness." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/5573fcdc-2c67-431f-abe3-53b97d631537" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/5573fcdc-2c67-431f-abe3-53b97d631537" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&family=Noto+Sans+Tamil:wght@400;500;600;700&family=Noto+Serif+Tamil:wght@500;600;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$a.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs(LangProvider, { children: [
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(Toaster, { richColors: true, position: "top-center" })
  ] }) });
}
const $$splitComponentImporter$8 = () => import("./treatments-CQTgbj2q.js");
const Route$9 = createFileRoute("/treatments")({
  head: () => ({
    meta: [{
      title: "Treatments — Iraivazhi Acupuncture & Varmam"
    }, {
      name: "description",
      content: "Acupuncture and varmam treatments for back pain, sciatica, migraine, paralysis, stress, sleep disorders and more."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./testimonials-CeG-diQP.js");
const Route$8 = createFileRoute("/testimonials")({
  head: () => ({
    meta: [{
      title: "Testimonials — Iraivazhi Acupuncture & Varmam"
    }, {
      name: "description",
      content: "Real stories from patients who found relief through acupuncture and varmam at Iraivazhi Clinic, Chennai."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./gallery-6UdtPX0u.js");
const Route$7 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — Iraivazhi Acupuncture & Varmam"
    }, {
      name: "description",
      content: "A glimpse into our calm, professional Chennai clinic."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./faq-CrCvJL7a.js");
const Route$6 = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "FAQ — Iraivazhi Acupuncture & Varmam"
    }, {
      name: "description",
      content: "Answers to common questions about acupuncture, varmam therapy, sessions and pricing at Iraivazhi Clinic, Chennai."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-Bl_cMx_W.js");
const Route$5 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Iraivazhi Acupuncture & Varmam"
    }, {
      name: "description",
      content: "Visit us at No.1 New Boag Road, T Nagar, Chennai. Call 9840251755 or WhatsApp for appointments."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./appointment-daOj9GIz.js");
const Route$4 = createFileRoute("/appointment")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
z.object({
  patient_name: z.string().min(2),
  age: z.coerce.number().min(1).max(120),
  gender: z.enum(["Male", "Female", "Other"]),
  mobile: z.string().min(8),
  email: z.string().email().optional().or(z.literal("")),
  health_problem: z.string().min(3),
  location: z.string().min(2),
  appointment_date: z.string(),
  time_slot: z.string(),
  notes: z.string().optional()
});
const $$splitComponentImporter$2 = () => import("./admin-secret-panel-BCiu9cHl.js");
const Route$3 = createFileRoute("/admin-secret-panel")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-CZaad3lM.js");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Therapist P. Manikandan — Iraivazhi Acupuncture & Varmam"
    }, {
      name: "description",
      content: "Therapist P. Manikandan (BEMS, BA Psychology, MD Acupuncture) — 13 years of holistic acupuncture and varmam practice in Chennai."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-B1Pq7XX9.js");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Iraivazhi Acupuncture & Varmam — Chennai Holistic Healing Clinic"
    }, {
      name: "description",
      content: "Natural Healing Through Acupuncture & Varmam. 13+ years of experience by Therapist P. Manikandan in T Nagar, Chennai."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const BASE_URL = "https://iraivazhi-acupuncture-varmam.lovable.app";
const Route = createFileRoute("/sitemap/xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/treatments", changefreq: "monthly", priority: "0.9" },
          { path: "/appointment", changefreq: "weekly", priority: "0.9" },
          { path: "/testimonials", changefreq: "monthly", priority: "0.7" },
          { path: "/gallery", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
          { path: "/faq", changefreq: "monthly", priority: "0.7" }
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const TreatmentsRoute = Route$9.update({
  id: "/treatments",
  path: "/treatments",
  getParentRoute: () => Route$a
});
const TestimonialsRoute = Route$8.update({
  id: "/testimonials",
  path: "/testimonials",
  getParentRoute: () => Route$a
});
const GalleryRoute = Route$7.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$a
});
const FaqRoute = Route$6.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$a
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$a
});
const AppointmentRoute = Route$4.update({
  id: "/appointment",
  path: "/appointment",
  getParentRoute: () => Route$a
});
const AdminSecretPanelRoute = Route$3.update({
  id: "/admin-secret-panel",
  path: "/admin-secret-panel",
  getParentRoute: () => Route$a
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$a
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const SitemapXmlRoute = Route.update({
  id: "/sitemap/xml",
  path: "/sitemap/xml",
  getParentRoute: () => Route$a
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminSecretPanelRoute,
  AppointmentRoute,
  ContactRoute,
  FaqRoute,
  GalleryRoute,
  TestimonialsRoute,
  TreatmentsRoute,
  SitemapXmlRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  CLINIC as C,
  router as r,
  useLang as u
};

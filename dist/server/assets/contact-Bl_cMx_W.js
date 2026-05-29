import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { L as Layout, B as Button } from "./Layout-tH0CpsyR.js";
import { L as Label, I as Input, T as Textarea } from "./label-CN4K7Jvs.js";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { C as CLINIC } from "./router-CUQ3MY0C.js";
import { toast } from "sonner";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@tanstack/react-query";
import "zod";
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const submit = (e) => {
    e.preventDefault();
    const msg = `Hello, I'm ${form.name} (${form.email}).%0A${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${CLINIC.phoneIntl.replace("+", "")}?text=${msg}`, "_blank");
    toast.success("Opening WhatsApp…");
  };
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("section", { className: "container mx-auto px-6 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-primary", children: "Get in touch" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl md:text-6xl font-display font-semibold", children: "Visit our clinic" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 grid lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        [{
          Icon: MapPin,
          title: "Address",
          body: CLINIC.address
        }, {
          Icon: Phone,
          title: "Phone",
          body: CLINIC.phone,
          href: `tel:${CLINIC.phoneIntl}`
        }, {
          Icon: Mail,
          title: "Email",
          body: CLINIC.email,
          href: `mailto:${CLINIC.email}`
        }, {
          Icon: Clock,
          title: "Clinic Hours",
          body: CLINIC.hours.join("  ·  ")
        }].map((c) => /* @__PURE__ */ jsx("a", { href: c.href, className: "block p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card hover:border-primary transition", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "size-12 rounded-xl bg-primary-soft flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(c.Icon, { className: "size-5 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: c.title }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-1", children: c.body })
          ] })
        ] }) }, c.title)),
        /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden border border-border shadow-soft aspect-[4/3]", children: /* @__PURE__ */ jsx("iframe", { title: "Clinic location", src: "https://www.google.com/maps?q=New+Boag+Road,+T+Nagar,+Chennai&output=embed", className: "w-full h-full", loading: "lazy" }) })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "p-8 rounded-3xl bg-card border border-border shadow-card space-y-4 h-fit lg:sticky lg:top-28", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-display font-semibold", children: "Send a message" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "We'll get back to you on WhatsApp." }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Name" }),
          /* @__PURE__ */ jsx(Input, { value: form.name, onChange: (e) => setForm({
            ...form,
            name: e.target.value
          }), required: true, maxLength: 80 })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Email" }),
          /* @__PURE__ */ jsx(Input, { type: "email", value: form.email, onChange: (e) => setForm({
            ...form,
            email: e.target.value
          }), required: true, maxLength: 120 })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Message" }),
          /* @__PURE__ */ jsx(Textarea, { rows: 5, value: form.message, onChange: (e) => setForm({
            ...form,
            message: e.target.value
          }), required: true, maxLength: 1e3 })
        ] }),
        /* @__PURE__ */ jsxs(Button, { type: "submit", size: "lg", className: "w-full bg-gradient-primary", children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "size-4" }),
          " Send via WhatsApp"
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Contact as component
};

import { jsx, jsxs } from "react/jsx-runtime";
import { L as Layout } from "./Layout-tH0CpsyR.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
import "./router-CUQ3MY0C.js";
import "@tanstack/react-query";
import "sonner";
import "zod";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const clinic1 = "/assets/clinic-1-Bra-gIo0.jpeg";
const clinic2 = "/assets/clinic-2--_MmLktk.jpeg";
const clinic3 = "/assets/clinic-3-KYTsDjpe.jpg";
const imgs = [clinic1, clinic2, clinic3, "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=900&q=80", "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=900&q=80", "https://images.unsplash.com/photo-1559750933-5e1f4a8a17e1?w=900&q=80", "https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=900&q=80", "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=900&q=80", "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80", "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80", "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=900&q=80", "https://images.unsplash.com/photo-1559757175-08c5b08d3d33?w=900&q=80"];
function Gallery() {
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("section", { className: "container mx-auto px-6 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-primary", children: "Clinic Gallery" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl md:text-6xl font-display font-semibold", children: "Inside the clinic" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "A peaceful, sterile environment designed for your healing." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: imgs.map((src, i) => /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-soft animate-fade-up", style: {
      animationDelay: `${i * 50}ms`
    }, children: /* @__PURE__ */ jsx("img", { src, alt: `Clinic ${i + 1}`, loading: "lazy", className: "w-full h-full object-cover hover:scale-105 transition-transform duration-700" }) }, i)) })
  ] }) });
}
export {
  Gallery as component
};

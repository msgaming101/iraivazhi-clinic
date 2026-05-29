import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { TreatmentDetailDialog } from "@/components/TreatmentDetailDialog";
import { TREATMENTS, type TreatmentDetail } from "@/lib/treatments-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/treatments")({
  head: () => ({ meta: [
    { title: "Treatments — Iraivazhi Acupuncture & Varmam" },
    { name: "description", content: "Acupuncture and varmam treatments for back pain, sciatica, migraine, paralysis, stress, sleep disorders and more." },
  ]}),
  component: Treatments,
});

function Treatments() {
  const [selected, setSelected] = useState<TreatmentDetail | null>(null);
  const [open, setOpen] = useState(false);

  const openTreatment = (t: TreatmentDetail) => {
    setSelected(t);
    setOpen(true);
  };

  return (
    <Layout>
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Care</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-display font-semibold">Treatments we offer</h1>
          <p className="mt-4 text-muted-foreground text-lg">Each treatment combines acupuncture precision with the gentle, traditional touch of Tamil varmam therapy.</p>
          <p className="mt-2 text-sm text-muted-foreground">Tap any treatment to learn more.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TREATMENTS.map((it, i) => (
            <button
              type="button"
              key={it.slug}
              onClick={() => openTreatment(it)}
              className="text-left group p-7 rounded-3xl bg-card border border-border shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-primary/40 transition-all animate-fade-up focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="size-12 rounded-2xl bg-gradient-gold/30 group-hover:bg-gradient-primary group-hover:text-primary-foreground flex items-center justify-center transition">
                <it.Icon className="size-6" />
              </div>
              <h3 className="mt-5 text-xl font-display font-semibold">{it.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.short}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition">
                Learn more <ArrowRight className="size-3.5" />
              </span>
            </button>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-gradient-primary"><Link to="/appointment">Book your treatment</Link></Button>
        </div>
      </section>

      <TreatmentDetailDialog treatment={selected} open={open} onOpenChange={setOpen} />
    </Layout>
  );
}

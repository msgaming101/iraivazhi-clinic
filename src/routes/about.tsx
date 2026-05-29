import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, GraduationCap, Stethoscope, Heart } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CLINIC } from "@/lib/i18n";
import therapist from "@/assets/therapist.png";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Therapist P. Manikandan — Iraivazhi Acupuncture & Varmam" },
    { name: "description", content: "Therapist P. Manikandan (BEMS, BA Psychology, MD Acupuncture) — 13 years of holistic acupuncture and varmam practice in Chennai." },
  ]}),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold rounded-3xl blur-2xl opacity-30" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-primary-soft shadow-card border-4 border-background">
              <img src={therapist} alt="Therapist P. Manikandan" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">About the Therapist</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-display font-semibold leading-tight">{CLINIC.therapist}</h1>
            <p className="mt-2 text-muted-foreground">{CLINIC.qualifications}</p>
            <p className="mt-6 text-lg leading-relaxed">
              For over 13 years, Therapist Manikandan has guided patients across Chennai through pain, paralysis, stress and chronic conditions — using a thoughtful blend of acupuncture and the ancient Tamil science of varmam.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              His approach is gentle and deeply personal: each diagnosis considers your body, breath, and mind. The result is care that doesn't just manage symptoms — it restores natural balance.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { Icon: Award, label: "13 Years", desc: "of dedicated clinical practice" },
                { Icon: GraduationCap, label: "BEMS · MD", desc: "Acupuncture & integrative medicine" },
                { Icon: Stethoscope, label: "Specialization", desc: "Acupuncture & varmam therapy" },
                { Icon: Heart, label: "BA Psychology", desc: "Mind-body wellbeing focus" },
              ].map((c) => (
                <div key={c.label} className="p-5 rounded-2xl bg-card border border-border shadow-soft">
                  <c.Icon className="size-6 text-primary" />
                  <div className="mt-3 font-display text-xl font-semibold">{c.label}</div>
                  <div className="text-sm text-muted-foreground">{c.desc}</div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="mt-10 bg-gradient-primary"><Link to="/appointment">Book a Consultation</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

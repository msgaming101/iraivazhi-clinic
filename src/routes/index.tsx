import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Calendar, Award, Heart, Sparkles, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useLang, CLINIC } from "@/lib/i18n";
import heroBg from "@/assets/hero-bg.jpg";
import therapist from "@/assets/therapist.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iraivazhi Acupuncture & Varmam — Chennai Holistic Healing Clinic" },
      { name: "description", content: "Natural Healing Through Acupuncture & Varmam. 13+ years of experience by Therapist P. Manikandan in T Nagar, Chennai." },
    ],
  }),
  component: Home,
});

const treatments = [
  "Back Pain", "Neck Pain", "Sciatica", "Migraine", "Knee Pain",
  "Stress Relief", "Paralysis Support", "Nerve Problems", "Sleep Disorders", "General Wellness",
];

function Home() {
  const { t } = useLang();

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur border border-border shadow-soft">
              <Logo size={22} />
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">{CLINIC.name}</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-foreground leading-[1.05] text-balance">
              {t("tagline")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              {t("hero_desc")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-primary shadow-soft text-base h-12 px-6">
                <Link to="/appointment"><Calendar className="size-5" /> {t("cta_book")}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 border-2 bg-background/60 backdrop-blur">
                <a href={`https://wa.me/${CLINIC.phoneIntl.replace("+", "")}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" /> {t("cta_whatsapp")}
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="h-12 px-6">
                <a href={`tel:${CLINIC.phoneIntl}`}><Phone className="size-5" /> {t("cta_call")}</a>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { Icon: Award, label: t("trust_experience") },
                { Icon: Heart, label: t("trust_holistic") },
                { Icon: Sparkles, label: t("trust_personal") },
                { Icon: MapPin, label: t("trust_chennai") },
              ].map(({ Icon, label }) => (
                <div key={label} className="p-3 rounded-xl bg-background/70 backdrop-blur border border-border/60">
                  <Icon className="size-5 text-primary" />
                  <div className="mt-2 text-xs font-semibold leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="absolute -inset-6 bg-gradient-gold rounded-full blur-3xl opacity-30" />
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary-soft to-secondary shadow-card border-4 border-background">
              <img src={therapist} alt="Therapist P. Manikandan" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-background rounded-2xl px-5 py-4 shadow-card border border-border max-w-[220px]">
              <div className="flex items-center gap-2 text-xs text-muted-foreground"><Logo size={18} /> Lead Practitioner</div>
              <div className="mt-1 font-display font-semibold text-base">{CLINIC.therapist}</div>
              <div className="text-xs text-muted-foreground">{CLINIC.qualifications}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent-foreground bg-accent/30 px-3 py-1 rounded-full">
              {t("about_title")}
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold text-balance">
              {t("hero_title")}
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              At Iraivazhi, ancient Tamil varmam wisdom meets the precision of acupuncture. Every session is personalized — calm, drug-free, and rooted in your unique balance.
            </p>
            <ul className="mt-6 space-y-3">
              {["Personalized diagnosis & treatment plan", "Sterile, single-use needles", "Bilingual care — Tamil & English", "Family-friendly clinic in T Nagar"].map((s) => (
                <li key={s} className="flex gap-3 text-sm"><CheckCircle2 className="size-5 text-primary shrink-0" /> {s}</li>
              ))}
            </ul>
            <Button asChild className="mt-8 bg-gradient-primary"><Link to="/about">Meet Therapist Manikandan <ArrowRight className="size-4" /></Link></Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "13+", v: "Years of practice" },
              { k: "10k+", v: "Sessions delivered" },
              { k: "10", v: "Conditions treated" },
              { k: "5★", v: "Patient experience" },
            ].map((s) => (
              <div key={s.v} className="p-6 rounded-2xl bg-card shadow-card border border-border">
                <div className="text-4xl font-display font-semibold text-primary">{s.k}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENTS GRID */}
      <section className="bg-primary-soft/50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Treatments</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-semibold">What we treat</h2>
            <p className="mt-4 text-muted-foreground">Holistic relief from a range of physical, neurological and emotional conditions.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {treatments.map((tr, i) => (
              <Link
                key={tr}
                to="/treatments"
                className="group p-5 rounded-2xl bg-background border border-border hover:border-primary hover:shadow-soft transition-all"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className="size-10 rounded-xl bg-gradient-gold/30 flex items-center justify-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
                  <Heart className="size-5" />
                </div>
                <div className="mt-4 font-semibold">{tr}</div>
                <div className="mt-1 text-xs text-muted-foreground flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                  Learn more <ArrowRight className="size-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-16 text-primary-foreground shadow-card">
          <div className="absolute -right-12 -top-12 size-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid md:grid-cols-[1.5fr_1fr] gap-8 items-center">
            <div>
              <Logo size={48} className="mb-4" />
              <h3 className="text-3xl md:text-4xl font-display font-semibold">Ready to begin your healing journey?</h3>
              <p className="mt-3 opacity-90 max-w-lg">Book your consultation at {CLINIC.name}. Same-week slots available.</p>
            </div>
            <div className="flex flex-col gap-3">
              <Button asChild size="lg" variant="secondary" className="bg-background text-primary h-12"><Link to="/appointment">{t("cta_book")}</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-background/40 bg-transparent text-primary-foreground hover:bg-background/10 h-12">
                <a href={`tel:${CLINIC.phoneIntl}`}><Phone className="size-4" /> {CLINIC.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

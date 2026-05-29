import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({ meta: [
    { title: "Testimonials — Iraivazhi Acupuncture & Varmam" },
    { name: "description", content: "Real stories from patients who found relief through acupuncture and varmam at Iraivazhi Clinic, Chennai." },
  ]}),
  component: Testimonials,
});

const items = [
  { name: "Lakshmi R.", role: "T Nagar", text: "After years of back pain, Therapist Manikandan's treatment gave me my life back. The clinic is calm and welcoming.", rating: 5 },
  { name: "Suresh K.", role: "Adyar", text: "Migraine episodes used to derail my week. After consistent sessions, they've nearly disappeared.", rating: 5 },
  { name: "Priya V.", role: "Nungambakkam", text: "I was skeptical about acupuncture, but the personalized care won me over. Stress relief like nothing else.", rating: 5 },
  { name: "Arun M.", role: "Anna Nagar", text: "Excellent varmam therapy for my knee. Mobility improved within weeks. Highly recommend.", rating: 5 },
  { name: "Sangeetha P.", role: "Velachery", text: "Compassionate therapist, sterile clinic, and genuine results. Will keep coming back.", rating: 5 },
  { name: "Karthik S.", role: "Mylapore", text: "Helped my mother after a partial paralysis episode. Steady progress and a hopeful experience.", rating: 5 },
];

function Testimonials() {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Patient Stories</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-display font-semibold">What our patients say</h1>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <div key={i} className="p-7 rounded-3xl bg-card border border-border shadow-soft hover:shadow-card transition animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
              <Quote className="size-8 text-accent" />
              <div className="mt-3 flex gap-0.5">{Array.from({ length: t.rating }).map((_, k) => <Star key={k} className="size-4 fill-accent text-accent" />)}</div>
              <p className="mt-4 leading-relaxed">"{t.text}"</p>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

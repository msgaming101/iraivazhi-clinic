import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [
    { title: "FAQ — Iraivazhi Acupuncture & Varmam" },
    { name: "description", content: "Answers to common questions about acupuncture, varmam therapy, sessions and pricing at Iraivazhi Clinic, Chennai." },
  ]}),
  component: FAQ,
});

const items = [
  { q: "Is acupuncture painful?", a: "No. The needles are extremely fine — most patients feel only a slight tingling or warmth. The session is deeply relaxing." },
  { q: "What is varmam therapy?", a: "Varmam is an ancient Tamil healing science that stimulates specific energy points on the body to relieve pain and restore balance, without medication." },
  { q: "How many sessions will I need?", a: "It depends on the condition. Most patients see meaningful improvement in 5–10 sessions; chronic conditions may need a longer plan." },
  { q: "Are the needles safe and sterile?", a: "Yes. We use single-use, sterile, disposable needles for every patient." },
  { q: "Do you treat children and elderly patients?", a: "Yes. Treatments are gentle and tailored for all ages." },
  { q: "Can I combine it with my existing medication?", a: "Acupuncture and varmam are complementary and safe alongside most medications. Always inform your therapist about all treatments." },
  { q: "Do you accept walk-ins?", a: "We strongly recommend booking in advance through the website or WhatsApp to guarantee your slot." },
  { q: "What should I wear?", a: "Wear loose, comfortable clothing. Treatment areas should be accessible." },
];

function FAQ() {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Questions</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-display font-semibold">Frequently asked</h1>
        </div>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`i${i}`} className="border border-border rounded-2xl px-5 bg-card shadow-soft">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">{it.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </Layout>
  );
}

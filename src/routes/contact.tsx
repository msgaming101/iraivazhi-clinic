import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { CLINIC } from "@/lib/i18n";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Iraivazhi Acupuncture & Varmam" },
    { name: "description", content: "Visit us at No.1 New Boag Road, T Nagar, Chennai. Call 9840251755 or WhatsApp for appointments." },
  ]}),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello, I'm ${form.name} (${form.email}).%0A${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${CLINIC.phoneIntl.replace("+","")}?text=${msg}`, "_blank");
    toast.success("Opening WhatsApp…");
  };

  return (
    <Layout>
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Get in touch</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-display font-semibold">Visit our clinic</h1>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              { Icon: MapPin, title: "Address", body: CLINIC.address },
              { Icon: Phone, title: "Phone", body: CLINIC.phone, href: `tel:${CLINIC.phoneIntl}` },
              { Icon: Mail, title: "Email", body: CLINIC.email, href: `mailto:${CLINIC.email}` },
              { Icon: Clock, title: "Clinic Hours", body: CLINIC.hours.join("  ·  ") },
            ].map((c) => (
              <a key={c.title} href={c.href} className="block p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card hover:border-primary transition">
                <div className="flex gap-4">
                  <div className="size-12 rounded-xl bg-primary-soft flex items-center justify-center shrink-0">
                    <c.Icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{c.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{c.body}</div>
                  </div>
                </div>
              </a>
            ))}
            <div className="rounded-2xl overflow-hidden border border-border shadow-soft aspect-[4/3]">
              <iframe
                title="Clinic location"
                src="https://www.google.com/maps?q=New+Boag+Road,+T+Nagar,+Chennai&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={submit} className="p-8 rounded-3xl bg-card border border-border shadow-card space-y-4 h-fit lg:sticky lg:top-28">
            <h2 className="text-2xl font-display font-semibold">Send a message</h2>
            <p className="text-sm text-muted-foreground">We'll get back to you on WhatsApp.</p>
            <div>
              <Label>Name</Label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={80} />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={120} />
            </div>
            <div>
              <Label>Message</Label>
              <Textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required maxLength={1000} />
            </div>
            <Button type="submit" size="lg" className="w-full bg-gradient-primary"><MessageCircle className="size-4" /> Send via WhatsApp</Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

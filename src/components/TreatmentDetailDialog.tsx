import { Link } from "@tanstack/react-router";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Check } from "lucide-react";
import type { TreatmentDetail } from "@/lib/treatments-data";
import { waLink } from "@/lib/whatsapp";

export function TreatmentDetailDialog({
  treatment,
  open,
  onOpenChange,
}: {
  treatment: TreatmentDetail | null;
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  if (!treatment) return null;
  const { Icon } = treatment;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[88vh] overflow-y-auto p-0 gap-0 rounded-3xl">
        <div className="p-6 md:p-8 bg-gradient-primary text-primary-foreground rounded-t-3xl">
          <div className="flex items-start gap-4">
            <div className="size-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center shrink-0">
              <Icon className="size-7" />
            </div>
            <DialogHeader className="text-left space-y-1.5">
              <DialogTitle className="text-2xl md:text-3xl font-display font-semibold">
                {treatment.name}
              </DialogTitle>
              <DialogDescription className="text-primary-foreground/85 text-sm md:text-base">
                {treatment.short}
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <p className="text-muted-foreground leading-relaxed">{treatment.description}</p>

          <Section title="Common Symptoms">
            <ul className="grid sm:grid-cols-2 gap-y-1.5 gap-x-4">
              {treatment.symptoms.map((s) => (
                <li key={s} className="flex gap-2 text-sm"><Check className="size-4 text-primary mt-0.5 shrink-0" />{s}</li>
              ))}
            </ul>
          </Section>

          <Section title="Possible Causes">
            <ul className="grid sm:grid-cols-2 gap-y-1.5 gap-x-4">
              {treatment.causes.map((s) => (
                <li key={s} className="flex gap-2 text-sm"><Check className="size-4 text-primary mt-0.5 shrink-0" />{s}</li>
              ))}
            </ul>
          </Section>

          <div className="grid md:grid-cols-2 gap-4">
            <InfoCard title="How Acupuncture Helps" body={treatment.acupuncture} />
            <InfoCard title="How Varmam Helps" body={treatment.varmam} />
          </div>

          <Section title="Recovery & Support">
            <p className="text-sm text-muted-foreground leading-relaxed">{treatment.recovery}</p>
          </Section>

          <Section title="Benefits">
            <div className="flex flex-wrap gap-2">
              {treatment.benefits.map((b) => (
                <span key={b} className="px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold">
                  {b}
                </span>
              ))}
            </div>
          </Section>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button asChild size="lg" className="flex-1 bg-gradient-primary">
              <Link to="/appointment" onClick={() => onOpenChange(false)}>
                <Calendar className="size-4" /> Book Appointment
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="flex-1">
              <a
                href={waLink(`Hello, I would like to know more about ${treatment.name} treatment at Iraivazhi Acupuncture & Varmam.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4" /> Ask on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-5 rounded-2xl bg-gradient-gold/20 border border-border">
      <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">{title}</h4>
      <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{body}</p>
    </div>
  );
}

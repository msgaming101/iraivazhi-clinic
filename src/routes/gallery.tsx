import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import clinic1 from "@/assets/clinic-1.jpeg";
import clinic2 from "@/assets/clinic-2.jpeg";
import clinic3 from "@/assets/clinic-3.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Gallery — Iraivazhi Acupuncture & Varmam" },
    { name: "description", content: "A glimpse into our calm, professional Chennai clinic." },
  ]}),
  component: Gallery,
});

const imgs = [
  clinic1,
  clinic2,
  clinic3,
  "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=900&q=80",
  "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=900&q=80",
  "https://images.unsplash.com/photo-1559750933-5e1f4a8a17e1?w=900&q=80",
  "https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=900&q=80",
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=900&q=80",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80",
  "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=900&q=80",
  "https://images.unsplash.com/photo-1559757175-08c5b08d3d33?w=900&q=80",
];

function Gallery() {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Clinic Gallery</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-display font-semibold">Inside the clinic</h1>
          <p className="mt-4 text-muted-foreground">A peaceful, sterile environment designed for your healing.</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-soft animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
              <img src={src} alt={`Clinic ${i + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

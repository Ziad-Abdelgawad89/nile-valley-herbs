import { createFileRoute } from "@tanstack/react-router";
import sorting from "@/assets/sorting.jpg";
import { seo } from "@/lib/products";
import { PageHero, SectionHead } from "@/components/site/Sections";

export const Route = createFileRoute("/quality")({
  head: () =>
    seo({
      title: "Quality | From Source to Shipment — Nile Valley Herbs",
      description:
        "How Nile Valley Herbs sources, sorts, cleans, inspects, packs and prepares premium Egyptian herbs for export.",
      path: "/quality",
    }),
  component: Quality,
});

const stages = [
  ["Careful Sourcing", "Raw herbs are sourced from Egyptian growing regions, with attention to colour, aroma and overall condition."],
  ["Selection & Sorting", "Material is sorted to separate stems, foreign matter and off-grade product, supporting a consistent lot."],
  ["Cleaning & Processing", "Herbs are cleaned and processed — cut, rubbed, crushed or ground — into the form specified by the buyer."],
  ["Quality Inspection", "Each lot is inspected visually and against the agreed specification before it moves to packing."],
  ["Proper Packaging", "Product is packed in suitable export packaging to protect it from moisture and handling damage."],
  ["Export Preparation", "Shipments are labelled, palletised where required and accompanied by the relevant export documents."],
];

function Quality() {
  return (
    <>
      <PageHero eyebrow="Quality" title="Quality From Source to Shipment" intro="A disciplined, step-by-step approach to preparing Egyptian herbs for international buyers." image={sorting} />
      <section className="py-24">
        <div className="container-site grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHead eyebrow="Our Process" title="Six stages of care">
              Quality is not a single check at the end — it is built into every stage, from the field to the container.
            </SectionHead>
            <p className="mt-6 text-sm text-muted-foreground">Product specifications and any testing requirements can be discussed and agreed with each buyer.</p>
          </div>
          <ol className="relative border-l border-primary/30">
            {stages.map(([t, d], i) => (
              <li key={t} className="reveal relative pb-12 pl-10 last:pb-0">
                <span className="absolute -left-[1.15rem] top-0 flex h-9 w-9 items-center justify-center bg-primary font-display text-lg text-primary-foreground">{i + 1}</span>
                <h3 className="text-3xl">{t}</h3>
                <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

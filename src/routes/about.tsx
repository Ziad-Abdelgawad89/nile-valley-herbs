import { createFileRoute } from "@tanstack/react-router";
import harvest from "@/assets/harvest.jpg";
import hero from "@/assets/hero.jpg";
import { seo } from "@/lib/products";
import { PageHero, SectionHead, icons } from "@/components/site/Sections";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About Us | Nile Valley Herbs Egypt — Egyptian Herbs Supplier",
      description:
        "Learn about Nile Valley Herbs Export, an Egyptian herbs export company supplying aromatic and medicinal herbs to international markets.",
      path: "/about",
    }),
  component: About,
});

const pillars = [
  { icon: icons.leaf, t: "Egyptian Agricultural Origin", d: "Our herbs come from Egypt's agricultural heartland, where the Nile has shaped farming for millennia." },
  { icon: icons.check, t: "Careful Sourcing", d: "We source raw material with attention to appearance, aroma and cleanliness." },
  { icon: icons.sieve, t: "Sorting & Processing", d: "Herbs are cleaned, sorted and processed into the form our buyers require." },
  { icon: icons.shield, t: "Quality Control", d: "Lots are inspected before packing to support consistent quality." },
  { icon: icons.box, t: "Professional Packaging", d: "Export-ready packing designed to protect product during transit." },
  { icon: icons.globe, t: "International Export", d: "We prepare shipments and documentation for international buyers." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="An Egyptian herbs export company" intro="Supplying high-quality aromatic and medicinal herbs from Egypt to international markets." image={hero} />
      <section className="py-24">
        <div className="container-site grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Our Focus" title="From the Nile Valley to your warehouse" />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>Nile Valley Herbs Export is an Egyptian company dedicated to sourcing and exporting premium herbs and seeds. Our work brings the quality of Egyptian agriculture to importers, wholesalers, distributors and food and herbal businesses abroad.</p>
              <p>We believe a good export partner is defined by care at every stage — how raw material is selected, how it is cleaned and sorted, how it is packed, and how clearly we communicate with our buyers along the way.</p>
              <p>Whether you need a single product or a range of herbs, we work with you to understand your specifications and prepare each shipment accordingly.</p>
            </div>
          </div>
          <img src={harvest} alt="Farmer harvesting fresh mint leaves in Egypt" width={1200} height={1408} loading="lazy" className="aspect-[4/5] w-full object-cover" />
        </div>
      </section>
      <section className="bg-cream py-24">
        <div className="container-site">
          <SectionHead eyebrow="What We Do" title="Every stage, handled with care" center />
          <ul className="mt-14 grid gap-px border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <li key={p.t} className="reveal bg-card p-8">
                <span className="text-primary">{p.icon}</span>
                <h3 className="mt-5 text-2xl">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

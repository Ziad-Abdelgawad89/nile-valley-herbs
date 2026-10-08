import { createFileRoute } from "@tanstack/react-router";
import exportImg from "@/assets/export.jpg";
import { seo } from "@/lib/products";
import { ExportProcess, PageHero, SectionHead } from "@/components/site/Sections";

export const Route = createFileRoute("/export-markets")({
  head: () =>
    seo({
      title: "Export Markets | Herbs Export Company Egypt — Nile Valley",
      description:
        "Nile Valley Herbs serves importers, distributors, wholesalers and food and herbal businesses worldwide with premium Egyptian herbs.",
      path: "/export-markets",
    }),
  component: Markets,
});

const buyers = [
  ["Importers", "Container and part-load supply of Egyptian herbs for import businesses."],
  ["Distributors", "Steady product availability to support your regional distribution."],
  ["Wholesalers", "Bulk herbs and seeds packed for onward trading."],
  ["Food & Herbal Companies", "Raw material for tea blenders, spice packers and food manufacturers."],
];

// Dotted world map generated from a coarse land mask (decorative)
const rows = [
  "......................................................",
  ".........####.........#####.......########............",
  "......##########....#####.#....##############.........",
  ".....############....###......#################.......",
  "......##########.............###################......",
  ".......########.............#######.############......",
  "........#####..............########...#######.........",
  ".........###...............#########....###...........",
  "..........##...#............########.....##...........",
  "...........#####.............######..........##.......",
  "...........######.............####..........####......",
  "............#####.............###...........#####.....",
  "............####...............#.............###......",
  ".............##.......................................",
];

function WorldMap() {
  return (
    <svg viewBox="0 0 540 140" className="w-full text-primary" role="img" aria-label="Stylised world map indicating worldwide export reach from Egypt">
      {rows.flatMap((r, y) =>
        [...r].map((c, x) =>
          c === "#" ? <circle key={`${x}-${y}`} cx={x * 10 + 5} cy={y * 10 + 5} r="2.6" fill="currentColor" opacity="0.35" /> : null,
        ),
      )}
      <circle cx="315" cy="65" r="5" fill="currentColor" />
      <circle cx="315" cy="65" r="11" fill="none" stroke="currentColor" strokeWidth="1" />
      <text x="330" y="62" fontSize="9" fill="currentColor" fontFamily="Manrope, sans-serif" fontWeight="600">EGYPT</text>
    </svg>
  );
}

function Markets() {
  return (
    <>
      <PageHero eyebrow="Export Markets" title="From Egypt to buyers worldwide" intro="We are prepared to work with importers, distributors, wholesalers and food and herbal businesses across international markets." image={exportImg} />
      <section className="py-24">
        <div className="container-site">
          <SectionHead eyebrow="Global Reach" title="Built for international trade" center>
            Egypt's location between Africa, Europe, the Middle East and Asia makes it a natural origin for herbs moving to markets around the world.
          </SectionHead>
          <div className="mx-auto mt-14 max-w-5xl border bg-cream p-6 md:p-10"><WorldMap /></div>
          <ul className="mt-16 grid gap-px border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {buyers.map(([t, d]) => (
              <li key={t} className="reveal bg-card p-8">
                <h3 className="text-2xl">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ExportProcess />
    </>
  );
}

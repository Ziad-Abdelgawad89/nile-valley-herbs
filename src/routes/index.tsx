import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import harvest from "@/assets/harvest.jpg";
import sorting from "@/assets/sorting.jpg";
import exportImg from "@/assets/export.jpg";
import { seo } from "@/lib/products";
import { ExportProcess, ProductGrid, SectionHead, icons } from "@/components/site/Sections";
import categoryHerbs from "@/assets/category-herbs.webp";
import categorySpices from "@/assets/category-spices.webp";
import categorySeeds from "@/assets/category-seeds.webp";
import categoryAllProducts from "@/assets/category-all-products.webp";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Nile Valley Herbs | Premium Egyptian Herbs Exporter",
      description:
        "Nile Valley Herbs Export sources and exports premium Egyptian herbs and seeds — hibiscus, cumin, mint, marjoram, basil, fennel and more — for international buyers.",
      path: "/",
    }),
  component: Home,
});

const trust = [
  { icon: icons.leaf, t: "Premium Egyptian Origin", d: "Herbs grown in the fertile agricultural lands of the Nile Valley." },
  { icon: icons.truck, t: "Reliable Supply", d: "Organised sourcing and preparation to support planned shipments." },
  { icon: icons.shield, t: "Quality Focused", d: "Careful selection, cleaning and inspection before every export." },
  { icon: icons.globe, t: "Global Export", d: "Prepared to serve importers and distributors worldwide." },
];

const why = [
  { icon: icons.leaf, t: "Egyptian Agricultural Origin", d: "Direct access to Egypt's long-established herb-growing regions." },
  { icon: icons.check, t: "Consistent Quality", d: "Attention to uniform appearance, aroma and cleanliness across lots." },
  { icon: icons.sieve, t: "Careful Selection", d: "Raw material is selected and sorted with a buyer-first mindset." },
  { icon: icons.box, t: "Professional Packaging", d: "Export-ready packing adapted to your market and handling needs." },
  { icon: icons.chat, t: "Reliable Communication", d: "Clear, responsive contact from first inquiry to delivery." },
  { icon: icons.globe, t: "Export-Oriented Service", d: "Processes and documentation built around international trade." },
];

function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-forest">
        <img src={hero} alt="Herb fields along the River Nile in Egypt at sunset" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="container-site py-24 text-forest-foreground">
          <p className="eyebrow !text-forest-foreground/80">Nile Valley Herbs Export · Egypt</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">Premium Egyptian Herbs for Global Markets</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-90">
            Reliable sourcing and export of high-quality Egyptian herbs, carefully selected, processed, and prepared to meet international standards.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/products" className="btn bg-forest-foreground text-forest hover:bg-cream">Explore Our Products</Link>
            <Link to="/contact" hash="quote" className="btn btn-light">Request a Quote</Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site">
          <SectionHead eyebrow="Who We Are" title="Egyptian Herbs. Global Standards." center>
            Nile Valley is focused on sourcing and exporting premium Egyptian herbs to international buyers — connecting the
            agricultural heritage of the Nile Valley with importers, wholesalers and food and herbal companies around the world.
          </SectionHead>
          <ul className="mt-16 grid gap-px border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((x) => (
              <li key={x.t} className="reveal bg-card p-8">
                <span className="text-primary">{x.icon}</span>
                <h3 className="mt-5 text-2xl">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <img src={harvest} alt="Hands harvesting fresh mint in an Egyptian field" width={1200} height={1408} loading="lazy" className="reveal aspect-[4/5] w-full object-cover" />
          <div>
            <SectionHead eyebrow="About Nile Valley" title="Rooted in Egypt, prepared for the world">
              Nile Valley is an Egyptian herbs export company supplying high-quality aromatic and medicinal herbs to international markets.
              From careful sourcing to professional packaging, every step is handled with the expectations of global buyers in mind.
            </SectionHead>
            <Link to="/about" className="btn btn-outline mt-8">More About Us</Link>
          </div>
        </div>
      </section>
                  <section className="bg-cream py-24">
        <div className="container-site">
          <SectionHead
            eyebrow="Explore Our Categories"
            title="Premium Egyptian Herbs, Spices & Seeds"
            center
          >
            Explore our main product categories and discover the products
            available for international export.
          </SectionHead>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/products"
              search={{ category: "Herbs" }}
              className="group overflow-hidden border bg-background"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={categoryHerbs}
                  alt="Egyptian herbs for export"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="eyebrow text-primary">01</p>
                <h3 className="mt-2 text-2xl">Herbs</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Premium Egyptian herbs carefully selected and prepared for
                  export.
                </p>
                <span className="mt-5 inline-block text-sm font-medium text-primary">
                  Explore Herbs →
                </span>
              </div>
            </Link>

            <Link
              to="/products"
              search={{ category: "Spices" }}
              className="group overflow-hidden border bg-background"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={categorySpices}
                  alt="Egyptian spices prepared for export"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="eyebrow text-primary">02</p>
                <h3 className="mt-2 text-2xl">Spices</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Carefully selected Egyptian spices prepared to meet buyer
                  requirements.
                </p>
                <span className="mt-5 inline-block text-sm font-medium text-primary">
                  Explore Spices →
                </span>
              </div>
            </Link>

            <Link
              to="/products"
              search={{ category: "Seeds" }}
              className="group overflow-hidden border bg-background"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={categorySeeds}
                  alt="Egyptian seeds prepared for export"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="eyebrow text-primary">03</p>
                <h3 className="mt-2 text-2xl">Seeds</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Egyptian seeds selected and prepared for international
                  buyers.
                </p>
                <span className="mt-5 inline-block text-sm font-medium text-primary">
                  Explore Seeds →
                </span>
              </div>
            </Link>

            <Link
              to="/products"
              className="group overflow-hidden border bg-background"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={categoryAllProducts}
                  alt="Nile Valley Egyptian agricultural products"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="eyebrow text-primary">04</p>
                <h3 className="mt-2 text-2xl">All Products</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Explore the complete Nile Valley product catalog.
                </p>
                <span className="mt-5 inline-block text-sm font-medium text-primary">
                  View Catalog →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      

      <section className="bg-forest py-24 text-forest-foreground">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow !text-forest-foreground/70">Quality</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Quality From Source to Shipment</h2>
            <p className="mt-5 text-lg leading-relaxed opacity-85">
              Sourcing, sorting, cleaning, inspection and packing — each stage is carried out with care so the product that reaches you reflects the quality of its origin.
            </p>
            <Link to="/quality" className="btn btn-light mt-8">Our Quality Process</Link>
          </div>
          <img src={sorting} alt="Dried herbs being sorted and inspected on stainless steel tables" width={1408} height={1008} loading="lazy" className="reveal aspect-[4/3] w-full object-cover" />
        </div>
      </section>

      <section className="py-24">
        <div className="container-site">
          <SectionHead eyebrow="Why Nile Valley" title="A dependable partner for Egyptian herbs" center />
          <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {why.map((x) => (
              <li key={x.t} className="reveal flex gap-5">
                <span className="mt-1 shrink-0 text-primary">{x.icon}</span>
                <div>
                  <h3 className="text-2xl">{x.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t py-24">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <img src={exportImg} alt="Packed herb sacks on pallets ready for container loading" width={1408} height={1008} loading="lazy" className="reveal aspect-[4/3] w-full object-cover" />
          <div>
            <SectionHead eyebrow="Export Markets" title="Serving international buyers worldwide">
              We are prepared to work with importers, distributors, wholesalers and food and herbal businesses across international markets.
            </SectionHead>
            <Link to="/export-markets" className="btn btn-outline mt-8">Export Markets</Link>
          </div>
        </div>
      </section>

      <ExportProcess />
    </>
  );
}

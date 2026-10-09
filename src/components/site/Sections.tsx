import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { products, type ProductCategory } from "@/lib/products";
import WhatsAppButton from "@/components/WhatsAppButton";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-forest">
      <img
        src={image}
        alt=""
        width={1408}
        height={1008}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0 -z-10" />

      <div className="container-site py-24 text-forest-foreground md:py-32">
        <p className="eyebrow !text-forest-foreground/75">{eyebrow}</p>

        <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-6xl">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-lg opacity-90">{intro}</p>
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  children,
  center,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>

      <h2 className="mt-3 text-4xl leading-tight md:text-5xl">{title}</h2>

      {children && (
        <div className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {children}
        </div>
      )}
    </div>
  );
}

/* Product Grid */
export function ProductGrid({
  limit,
  initialCategory,
}: {
  limit?: number;
  initialCategory?: ProductCategory;
}) {
  const [activeCategory, setActiveCategory] = useState<
    "All" | ProductCategory
  >(initialCategory ?? "All");

  const categories: ("All" | ProductCategory)[] = [
    "All",
    "Herbs",
    "Spices",
    "Seeds",
  ];

  const renderProducts = (items: typeof products) => {
    const list = limit ? items.slice(0, limit) : items;

    return (
      <ul className="grid gap-px border bg-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {list.map((p) => (
          <li key={p.slug} className="group flex flex-col bg-card">
            <Link
              to="/products/$slug"
              params={{ slug: p.slug }}
              className="block overflow-hidden"
            >
              <img
                src={p.image}
                alt={`Dried Egyptian ${p.name.toLowerCase()} for export`}
                width={912}
                height={912}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-2xl">{p.name}</h3>

              {p.latin && (
                <p className="text-xs italic text-muted-foreground">
                  {p.latin}
                </p>
              )}

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.short}
              </p>

             <div className="mt-5 flex w-full items-center justify-between gap-2">
              <Link
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
              >
                View Product <span aria-hidden="true">→</span>
              </Link>
              <WhatsAppButton productName={p.name} iconOnly />
            </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  const herbs = products.filter((p) => p.category === "Herbs");
  const spices = products.filter((p) => p.category === "Spices");
  const seeds = products.filter((p) => p.category === "Seeds");

  const categoryData = [
    {
      name: "Herbs" as ProductCategory,
      title: "Premium Egyptian Herbs",
      description:
        "Carefully selected Egyptian herbs prepared for international buyers and export requirements.",
      products: herbs,
      background: "bg-cream",
    },
    {
      name: "Spices" as ProductCategory,
      title: "Premium Egyptian Spices",
      description:
        "Selected Egyptian spices prepared with attention to quality, cleanliness and buyer requirements.",
      products: spices,
      background: "bg-background",
    },
    {
      name: "Seeds" as ProductCategory,
      title: "Premium Egyptian Seeds",
      description:
        "Egyptian seeds selected and prepared for importers, wholesalers and international markets.",
      products: seeds,
      background: "bg-muted/30",
    },
  ];

  return (
    <>
      {!limit && (
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border bg-background hover:bg-cream"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {activeCategory === "All" && !limit ? (
        <div className="space-y-0">
          {categoryData.map((category) => (
            <section
              key={category.name}
              className={`${category.background} border-t py-16 first:border-t-0 md:py-20`}
            >
              <div className="container-site">
                <div className="mb-10">
                  <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="eyebrow text-primary">
                        {category.name}
                      </p>

                      <h2 className="mt-3 text-4xl leading-tight md:text-5xl">
                        {category.title}
                      </h2>
                    </div>

                    <Link
                      to="/products"
                      search={{ category: category.name }}
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      View All {category.name} →
                    </Link>
                  </div>

                  <div className="mt-6 h-px w-full bg-border" />

                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                {renderProducts(category.products)}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div>
          {activeCategory === "Herbs" &&
            renderProducts(herbs)}

          {activeCategory === "Spices" &&
            renderProducts(spices)}

          {activeCategory === "Seeds" &&
            renderProducts(seeds)}
        </div>
      )}
    </>
  );
}
const steps = [
  [
    "Send Your Inquiry",
    "Tell us the product, quantity and destination using our quote form or by email.",
  ],
  [
    "Discuss Requirements",
    "We review your needs — grade, form, packaging and timeline — and clarify details.",
  ],
  [
    "Product & Specification Confirmation",
    "Specifications, samples where applicable, and commercial terms are agreed.",
  ],
  [
    "Packaging & Shipment Preparation",
    "Goods are packed to the agreed format, labelled and prepared for loading.",
  ],
  [
    "Export & Delivery",
    "Export documentation is prepared and the shipment is dispatched to your destination.",
  ],
];

export function ExportProcess() {
  return (
    <section className="bg-cream py-24">
      <div className="container-site">
        <SectionHead
          eyebrow="How We Work"
          title="A clear five-step export process"
          center
        />

        <ol className="mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
          {steps.map(([t, d], i) => (
            <li key={t} className="reveal relative md:pt-10">
              <span
                className="absolute left-0 right-0 top-4 hidden h-px bg-primary/25 md:block"
                aria-hidden
              />

              <span className="relative flex h-9 w-9 items-center justify-center bg-primary font-display text-lg text-primary-foreground md:absolute md:top-0">
                {i + 1}
              </span>

              <h3 className="mt-4 text-xl leading-snug md:mt-2">{t}</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {d}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container-site flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <h2 className="text-4xl md:text-5xl">
            Looking for reliable Egyptian herbs? Let's talk.
          </h2>

          <p className="mt-3 max-w-xl opacity-85">
            Share your requirements and our export team will get back to you.
          </p>
        </div>

        <Link
          to="/contact"
          hash="quote"
          className="btn btn-light shrink-0"
        >
          Request a Quote
        </Link>
        
      </div>
    </section>
  );
}

/* Minimal line icons */
const I = (d: ReactNode) => (
  <svg
    viewBox="0 0 24 24"
    width="28"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    {d}
  </svg>
);

export const icons = {
  leaf: I(
    <>
      <path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15" />
      <path d="M5 19 13 11" />
    </>
  ),

  truck: I(
    <>
      <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),

  shield: I(
    <>
      <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),

  globe: I(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),

  sieve: I(
    <>
      <path d="M4 9h16l-2 8H6z" />
      <path d="M8 13h8" />
    </>
  ),

  box: I(
    <>
      <path d="M3 7 12 3l9 4v10l-9 4-9-4z" />
      <path d="m3 7 9 4 9-4M12 11v10" />
    </>
  ),

  chat: I(
    <>
      <path d="M4 5h16v11H9l-5 4z" />
    </>
  ),

  check: I(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
};
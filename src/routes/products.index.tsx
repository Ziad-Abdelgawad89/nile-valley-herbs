import { createFileRoute } from "@tanstack/react-router";
import sorting from "@/assets/sorting.jpg";
import { seo } from "@/lib/products";
import { PageHero, ProductGrid } from "@/components/site/Sections";

type ProductCategory = "Herbs" | "Spices" | "Seeds";

export const Route = createFileRoute("/products/")({
  validateSearch: (search: Record<string, unknown>) => ({
    category:
      search.category === "Herbs" ||
      search.category === "Spices" ||
      search.category === "Seeds"
        ? search.category
        : undefined,
  }),

  head: () =>
    seo({
      title: "Products | Premium Egyptian Herbs & Spices for Export",
      description:
        "Explore premium Egyptian herbs, spices and seeds available for export from Nile Valley Herbs.",
      path: "/products",
    }),

  component: Products,
});

function Products() {
  const search = Route.useSearch();

  return (
    <>
      <PageHero
        eyebrow="Product Catalog"
        title="Premium Egyptian herbs, spices & seeds"
        intro="Carefully selected and prepared for importers, wholesalers and food and herbal companies. Specifications and packaging are tailored to buyer requirements."
        image={sorting}
      />

      <section className="py-20">
        <div className="container-site">
          <ProductGrid initialCategory={search.category} />
        </div>
      </section>
    </>
  );
}
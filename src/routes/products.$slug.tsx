import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProduct, products, seo } from "@/lib/products";
import { icons } from "@/components/site/Sections";
import WhatsAppButton from "@/components/WhatsAppButton";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return {};
    return seo({
      title: `Egyptian ${p.name} Exporter | Nile Valley Herbs`,
      description: `${p.short} Sourced in Egypt and prepared for export by Nile Valley Herbs. Request a quote.`,
      path: `/products/${p.slug}`,
    });
  },
  notFoundComponent: () => (
    <div className="container-site py-32 text-center">
      <h1 className="text-4xl">Product not found</h1>
      <Link to="/products" className="btn btn-primary mt-8">Back to Products</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const others = products.filter((x) => x.slug !== p.slug).slice(0, 4);
  return (
    <>
      <nav aria-label="Breadcrumb" className="container-site pt-8 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link> <span aria-hidden>/</span>{" "}
        <Link to="/products" className="hover:text-primary">Products</Link> <span aria-hidden>/</span>{" "}
        <span className="text-foreground">{p.name}</span>
      </nav>
      <section className="py-12 md:py-16">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <img src={p.image} alt={`Dried Egyptian ${p.name.toLowerCase()}`} width={912} height={912} className="aspect-square w-full object-cover" />
          <div>
            <p className="eyebrow">Origin: Egypt</p>
            <h1 className="mt-3 text-5xl md:text-6xl">{p.name}</h1>
            {p.latin && <p className="mt-1 italic text-muted-foreground">{p.latin}</p>}
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{p.description}</p>

            <dl className="mt-10 divide-y border-y">
              <div className="grid gap-2 py-5 sm:grid-cols-3"><dt className="font-semibold">Origin</dt><dd className="sm:col-span-2 text-muted-foreground">Egypt</dd></div>
              <div className="grid gap-2 py-5 sm:grid-cols-3"><dt className="font-semibold">Available forms</dt>
                <dd className="sm:col-span-2"><ul className="flex flex-wrap gap-2">{p.forms.map((f) => <li key={f} className="border bg-cream px-3 py-1 text-sm">{f}</li>)}</ul></dd></div>
              <div className="grid gap-2 py-5 sm:grid-cols-3"><dt className="font-semibold">Typical uses</dt><dd className="sm:col-span-2 text-muted-foreground">{p.uses}</dd></div>
              <div className="grid gap-2 py-5 sm:grid-cols-3"><dt className="font-semibold">Specifications</dt><dd className="sm:col-span-2 text-muted-foreground">Grade, cut size, moisture and other parameters are customizable and confirmed according to buyer requirements.</dd></div>
              <div className="grid gap-2 py-5 sm:grid-cols-3"><dt className="font-semibold">Packaging</dt><dd className="sm:col-span-2 text-muted-foreground">Export packing such as paper bags, polypropylene bags or cartons, with weights and labelling arranged per buyer request.</dd></div>
            </dl>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" hash="quote" search={{ product: p.name }} className="btn btn-primary">
              Request a Quote
            </Link>
            <Link to="/products" className="btn btn-outline">All Products</Link>
            <WhatsAppButton productName={p.name} />
          </div>
            <p className="mt-6 flex items-center gap-3 text-sm text-muted-foreground"><span className="text-primary">{icons.chat}</span>Questions about this product? Email <a className="text-primary underline" href="mailto:ziad@nilevalleyherbs-eg.com">ziad@nilevalleyherbs-eg.com</a></p>
          </div>
        </div>
      </section>
      <section className="bg-cream py-20">
        <div className="container-site">
          <h2 className="text-3xl md:text-4xl">Other Egyptian herbs</h2>
          <ul className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {others.map((o) => (
              <li key={o.slug}>
                <Link to="/products/$slug" params={{ slug: o.slug }} className="group block">
                  <img src={o.image} alt={`Egyptian ${o.name.toLowerCase()}`} width={912} height={912} loading="lazy" className="aspect-square w-full object-cover" />
                  <p className="mt-3 font-display text-xl group-hover:text-primary">{o.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

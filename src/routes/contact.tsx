import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import exportImg from "@/assets/export.jpg";
import { seo } from "@/lib/products";
import { PageHero } from "@/components/site/Sections";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/contact")({
  validateSearch: z.object({ product: z.string().optional() }),
  head: () =>
    seo({
      title: "Contact & Request a Quote | Nile Valley Herbs Export",
      description:
        "Request a quote for premium Egyptian herbs. Contact Nile Valley Herbs Export at info@nilevalleyherbs-eg.com.",
      path: "/contact",
    }),
  component: Contact,
});

function Contact() {
  const { product } = Route.useSearch();
  return (
    <>
      <PageHero eyebrow="Contact" title="Looking for reliable Egyptian herbs? Let's talk." intro="Send us your inquiry and our export team will respond by email." image={exportImg} />
      <section id="quote" className="scroll-mt-24 py-24">
        <div className="container-site grid gap-16 lg:grid-cols-[1fr_1.6fr]">
          <aside>
            <p className="font-display text-4xl font-semibold tracking-wide text-primary">NILE VALLEY</p>
            <p className="mt-1 text-sm tracking-[0.3em] text-primary">HERBS EXPORT</p>
            <p className="mt-1 text-xs tracking-[0.25em] text-muted-foreground">PREMIUM HERBS FROM EGYPT</p>
            <dl className="mt-10 space-y-6 border-t pt-8">
              <div><dt className="eyebrow">Email</dt><dd className="mt-1 text-lg"><a href="mailto:info@nilevalleyherbs-eg.com" className="hover:text-primary">info@nilevalleyherbs-eg.com</a></dd></div>
              <div><dt className="eyebrow">Export Contact</dt><dd className="mt-1 text-lg"><a href="mailto:ziad@nilevalleyherbs-eg.com" className="hover:text-primary">ziad@nilevalleyherbs-eg.com</a></dd></div>
            </dl>
          </aside>
          <div className="border bg-card p-6 md:p-10">
            <h2 className="text-4xl">Request a Quote</h2>
            <p className="mb-8 mt-2 text-muted-foreground">Fields marked * are required.</p>
            <QuoteForm defaultProduct={product ?? ""} />
          </div>
        </div>
      </section>
    </>
  );
}

import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitQuote } from "@/lib/quote.functions";
import { products } from "@/lib/products";

export function QuoteForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const send = useServerFn(submitQuote);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setState("sending");
    try {
      await send({ data: fd as never });
      setState("done");
      form.reset();
    } catch (x) {
      setErr("Please check the required fields, or email us at info@nilevalleyherbs-eg.com.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div role="status" className="border border-primary/30 bg-cream p-10 text-center">
        <p className="font-display text-3xl text-primary">Thank you for your inquiry.</p>
        <p className="mt-3 text-muted-foreground">Our export team has received your request and will reply by email.</p>
        <button className="btn btn-outline mt-6" onClick={() => setState("idle")}>Send another inquiry</button>
      </div>
    );
  }

  const label = "mb-1.5 block text-sm font-medium";
  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      <div><label htmlFor="q-name" className={label}>Full Name *</label><input id="q-name" name="full_name" required minLength={2} autoComplete="name" className="field" /></div>
      <div><label htmlFor="q-company" className={label}>Company Name *</label><input id="q-company" name="company" required autoComplete="organization" className="field" /></div>
      <div><label htmlFor="q-email" className={label}>Email *</label><input id="q-email" name="email" type="email" required autoComplete="email" className="field" /></div>
      <div><label htmlFor="q-country" className={label}>Country *</label><input id="q-country" name="country" required autoComplete="country-name" className="field" /></div>
      <div><label htmlFor="q-phone" className={label}>Phone / WhatsApp</label><input id="q-phone" name="phone" type="tel" autoComplete="tel" className="field" /></div>
      <div>
        <label htmlFor="q-product" className={label}>Product *</label>
        <select id="q-product" name="product" required defaultValue={defaultProduct} className="field">
          <option value="" disabled>Select a product</option>
          {products.map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
          <option value="Multiple products">Multiple products</option>
        </select>
      </div>
      <div className="sm:col-span-2"><label htmlFor="q-qty" className={label}>Quantity</label><input id="q-qty" name="quantity" placeholder="e.g. 1 × 20ft container, 5 metric tons" className="field" /></div>
      <div className="sm:col-span-2"><label htmlFor="q-msg" className={label}>Message</label><textarea id="q-msg" name="message" rows={5} placeholder="Specifications, packaging, destination port, timeline…" className="field" /></div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {state === "error" && <p role="alert" className="text-sm text-destructive sm:col-span-2">{err}</p>}
      <div className="sm:col-span-2">
        <button type="submit" disabled={state === "sending"} className="btn btn-primary w-full sm:w-auto disabled:opacity-60">
          {state === "sending" ? "Sending…" : "Send Inquiry"}
        </button>
      </div>
    </form>
  );
}

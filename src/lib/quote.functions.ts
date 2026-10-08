import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  full_name: z.string().trim().min(2).max(120),
  company: z.string().trim().min(1).max(160),
  email: z.string().trim().email().max(200),
  country: z.string().trim().min(2).max(80),
  phone: z.string().trim().max(40).optional().default(""),
  product: z.string().trim().min(1).max(80),
  quantity: z.string().trim().max(80).optional().default(""),
  message: z.string().trim().max(3000).optional().default(""),
  website: z.string().max(0).optional(), // honeypot
});

export type QuoteInput = z.input<typeof schema>;

// Submissions are stored in the quote_requests table (Cloud → Database).
// To also email them to the company, add an owner notification after the insert.
export const submitQuote = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => schema.parse(d))
  .handler(async ({ data }) => {
    const { website: _hp, ...row } = data;
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("quote_requests").insert(row);
    if (error) {
      console.error("quote insert failed", error);
      throw new Error("We could not send your inquiry. Please email info@nilevalleyherbs-eg.com.");
    }
    return { ok: true };
  });

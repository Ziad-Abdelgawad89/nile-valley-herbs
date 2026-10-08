import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="container-site py-32 text-center">
      <h1 className="text-6xl text-primary">404</h1>
      <h2 className="mt-4 text-2xl">Page not found</h2>
      <p className="mt-2 text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn btn-primary mt-8">Go home</Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="container-site py-32 text-center">
      <h1 className="text-3xl">This page didn't load</h1>
      <p className="mt-2 text-muted-foreground">Something went wrong. Please try again.</p>
      <div className="mt-6 flex justify-center gap-2">
        <button onClick={() => { router.invalidate(); reset(); }} className="btn btn-primary">Try again</button>
        <a href="/" className="btn btn-outline">Go home</a>
      </div>
    </div>
  );
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nile Valley Herbs Export",
  alternateName: "Nile Valley Herbs",
  url: "https://nilevalleyherbs-eg.com/",
  email: "info@nilevalleyherbs-eg.com",
  description: "Egyptian herbs exporter supplying premium Egyptian herbs and seeds to international buyers.",
  contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: "ziad@nilevalleyherbs-eg.com" }],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#3a4a22" },
      { property: "og:site_name", content: "Nile Valley Herbs Export" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Manrope:wght@400;500;600&display=swap" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(orgSchema) }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-card focus:p-3">Skip to content</a>
      <Header />
      <main id="main"><Outlet /></main>
      <Footer />
    </QueryClientProvider>
  );
}

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo-trim.webp";

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/quality", label: "Quality" },
  { to: "/export-markets", label: "Export Markets" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Link to="/" className="shrink-0" aria-label="Nile Valley Herbs Export — Home">
        <img src={logo}alt="Nile Valley Herbs Export logo"className="h-16 w-auto object-contain"/>
        </Link>
        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-medium">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  className="py-2 text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary"
                  activeProps={{ className: "text-primary border-b border-primary" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" hash="quote" className="btn btn-primary hidden sm:inline-flex">
            Request a Quote
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-px w-5 bg-foreground transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-px w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-px w-5 bg-foreground transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t bg-card lg:hidden">
          <ul className="container-site flex flex-col py-4">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: n.to === "/" }}
                  className="block border-b py-3.5 font-display text-xl"
                  activeProps={{ className: "text-primary" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-5">
              <Link to="/contact" hash="quote" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Request a Quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

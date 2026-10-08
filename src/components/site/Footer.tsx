import { Link } from "@tanstack/react-router";
import { nav } from "./Header";
import { FacebookIcon, WhatsAppIcon } from "./BrandIcons";
import logo from "@/assets/logo-official.png.asset.json";

const heading = "eyebrow !text-forest-foreground/60";
const list = "mt-4 text-sm";
const linkCls = "opacity-85 hover:opacity-100 hover:underline";
const rowCls = "inline-flex items-center gap-1.5 opacity-85 hover:opacity-100 hover:underline";
const iconCls = "h-3.5 w-3.5 shrink-0";

const social = [
  {
    label: "Company WhatsApp",
    display: "+20 102 840 3853",
    href: "https://wa.me/201028403853",
    Icon: WhatsAppIcon,
  },
  {
    label: "Export Contact",
    display: "+20 101 092 4909",
    href: "https://wa.me/201010924909",
    Icon: WhatsAppIcon,
  },
];

export function Footer() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="container-site">
        <div className="flex flex-col gap-5 border-b border-forest-foreground/15 py-9 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="min-w-0">
            <h2 className="text-2xl md:text-3xl">Looking for reliable Egyptian herbs? Let's talk.</h2>
            <p className="mt-2 text-sm opacity-80">Share your requirements and our export team will get back to you.</p>
          </div>
          <Link to="/contact" hash="quote" className="btn btn-light shrink-0 self-start md:self-auto">Request a Quote</Link>
        </div>

        <div className="grid gap-10 py-11 md:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_auto_minmax(356px,1.5fr)_auto] lg:gap-12">
          <div className="flex min-w-0 items-start gap-4">
            <Link to="/" aria-label="Nile Valley Herbs Export — Home" className="shrink-0 rounded-sm bg-card p-1.5">
              <img src={logo.url} alt="Nile Valley Herbs Export logo" width={500} height={500} loading="lazy" className="h-[4.5rem] w-auto" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed opacity-80">
              Sourcing and exporting premium Egyptian herbs and seeds for importers, wholesalers and food and herbal businesses worldwide.
            </p>
          </div>
          <nav aria-label="Footer">
            <h2 className={heading}>Company</h2>
            <ul className={`${list} grid grid-cols-2 gap-x-4 gap-y-2.5`}>
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to} className={linkCls}>{n.label}</Link></li>
              ))}
            </ul>
          </nav>
         <div>
  <h2 className={heading}>Products</h2>

  <ul className={`${list} space-y-2.5`}>
    <li>
      <Link
        to="/products"
        search={{ category: "Herbs" }}
        className={linkCls}
      >
        Herbs
      </Link>
    </li>

    <li>
      <Link
        to="/products"
        search={{ category: "Spices" }}
        className={linkCls}
      >
        Spices
      </Link>
    </li>

    <li>
      <Link
        to="/products"
        search={{ category: "Seeds" }}
        className={linkCls}
      >
        Seeds
      </Link>
    </li>

    <li>
      <Link
        to="/products"
        className={linkCls}
      >
        All Products
      </Link>
    </li>
  </ul>
</div>
          <div>
            <h2 className={heading}>Contact</h2>
            <ul className={`${list} space-y-2`}>
              <li><a className={linkCls} href="mailto:info@nilevalleyherbs-eg.com">info@nilevalleyherbs-eg.com</a></li>
              <li><a className={linkCls} href="mailto:ziad@nilevalleyherbs-eg.com">ziad@nilevalleyherbs-eg.com</a></li>
              {social.map(({ label, display, href, Icon }) => (
                <li key={href}>
                  <a className={rowCls} href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className={iconCls} />
                    <span className="whitespace-nowrap">{label}</span>
                    <span className="whitespace-nowrap text-[12px] tabular-nums">{display}</span>
                  </a>
                </li>
              ))}
              <li>
                <a className={rowCls} href="https://www.facebook.com/profile.php?id=61595082544570" target="_blank" rel="noopener noreferrer" aria-label="Nile Valley Herbs Export on Facebook">
                  <FacebookIcon className={iconCls} />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-foreground/15 py-5">
          <p className="text-xs opacity-70">© 2026 Nile Valley Herbs Export. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

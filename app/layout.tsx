import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cinarmerchant.com"),
  title: {
    default: "Cinar Merchant Services | Modern Payment Solutions",
    template: "%s | Cinar Merchant Services",
  },
  description:
    "Modern payment solutions for businesses that need reliable, scalable ways to accept and manage payments.",
  openGraph: {
    title: "Cinar Merchant Services",
    description: "Payments infrastructure built for growing businesses.",
    url: "https://cinarmerchant.com",
    siteName: "Cinar Merchant Services",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: 'max-image-preview:large',
  },
  verification: { other: { "ai-bot-disallowed-by-rules": "" } },
};

const navigation = [
  ["Solutions", "/merchant-services"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Cinar Merchant Services home">
      <svg className="brand-mark" viewBox="0 0 42 42" aria-hidden="true">
        <path d="M9 15.5 18.5 10 28 15.5v11L18.5 32 9 26.5z" />
        <path d="m18.5 10 9.5 5.5 5-2.9" />
        <path d="m28 26.5 5 2.9" />
        <circle cx="33" cy="12.6" r="2.4" />
        <circle cx="33" cy="29.4" r="2.4" />
      </svg>
      <span className="brand-copy">
        <strong>CINAR</strong>
        <span>MERCHANT SERVICES</span>
      </span>
    </Link>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="shell header-inner">
            <Brand />
            <nav className="nav" aria-label="Primary navigation">
              {navigation.map(([label, href]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
              <Link className="button button-small" href="/contact">Get Started</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="shell footer-grid">
            <div>
              <Brand />
              <p className="footer-blurb">Modern payment solutions built around the way businesses operate today.</p>
            </div>
            <div className="footer-links">
              <Link href="/merchant-services">Merchant Services</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
          <div className="shell footer-legal">
            <span>© {new Date().getFullYear()} Cinar Merchant Services. All rights reserved.</span>
            <span>Cinar Merchant Services is operated by Cinar Merchant Services LLC, a Wyoming limited liability company.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

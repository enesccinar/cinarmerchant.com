import Link from "next/link";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="subpage">
      <section className="subhero"><div className="shell narrow"><span className="section-kicker light">ABOUT CINAR MERCHANT SERVICES</span><h1>Modern payments, with a business-first mindset.</h1><p>We help businesses adopt payment solutions that are reliable, flexible, and easier to operate.</p></div></section>
      <section className="section"><div className="shell narrow prose"><h2>Built to make payments simpler.</h2><p>Cinar Merchant Services provides technology-enabled merchant services for businesses that need modern ways to accept and manage payments.</p><p>Our approach combines established payment infrastructure with straightforward onboarding and merchant-focused support. We are building for businesses that expect payment technology to be dependable, understandable, and ready to scale with them.</p><h2>Independent by design.</h2><p>Cinar Merchant Services is a standalone payments business operated by Cinar Merchant Services LLC, a Wyoming limited liability company.</p><Link className="button" href="/contact">Contact Our Team</Link></div></section>
    </main>
  );
}

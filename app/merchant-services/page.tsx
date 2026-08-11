import Link from "next/link";

export const metadata = { title: "Merchant Services" };

const groups = [
  ["Payment acceptance", "Support the payment methods customers expect, including major card brands, digital wallets, and online payments."],
  ["Business payments", "Enable recurring payments, invoicing, ACH payments, and practical transaction workflows."],
  ["Merchant operations", "Create a smoother path from onboarding through day-to-day payment management and support."],
] as const;

export default function ServicesPage() {
  return (
    <main className="subpage">
      <section className="subhero"><div className="shell narrow"><span className="section-kicker light">MERCHANT SERVICES</span><h1>Payment solutions designed around your business.</h1><p>A practical foundation for accepting payments today and supporting what comes next.</p></div></section>
      <section className="section"><div className="shell narrow"><div className="service-list">{groups.map(([title, body], i) => <article key={title}><span>0{i + 1}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}</div><div className="info-note"><strong>Looking for a specific payment capability?</strong><p>Tell us how your business accepts payments today and what you want to improve. We can discuss available options based on your operating model.</p><Link className="button" href="/contact">Start a Conversation</Link></div></div></section>
    </main>
  );
}

export const metadata = { title: "Contact" };

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@cinarmerchant.com";

export default function ContactPage() {
  return (
    <main className="subpage">
      <section className="subhero"><div className="shell narrow"><span className="section-kicker light">CONTACT</span><h1>Let's talk about your payment needs.</h1><p>Merchant, banking, technology-provider, and business partnership inquiries are welcome.</p></div></section>
      <section className="section"><div className="shell contact-grid"><div><span className="section-kicker">GENERAL INQUIRIES</span><h2>Start a conversation.</h2><p>Tell us who you are and what you are looking to accomplish. Our team will respond with the right next step.</p><a className="email-link" href={`mailto:${email}`}>{email} <span>↗</span></a></div><div className="contact-panel"><div><span>MERCHANTS</span><strong>Payment acceptance & merchant services</strong></div><div><span>PARTNERS</span><strong>Banking & technology-provider inquiries</strong></div><div><span>BUSINESS</span><strong>General corporate inquiries</strong></div></div></div></section>
    </main>
  );
}

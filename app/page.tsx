import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "Payment Processing",
    text: "Accept credit and debit cards, digital wallets, and online payments through modern payment experiences.",
  },
  {
    number: "02",
    title: "Business Payment Tools",
    text: "Support recurring payments, invoicing, ACH payments, and transaction management as your business grows.",
  },
  {
    number: "03",
    title: "Merchant Support",
    text: "Get straightforward onboarding, payment guidance, and ongoing support from a team focused on merchant success.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Modern merchant services</div>
            <h1>Payments infrastructure built for <span>growing businesses.</span></h1>
            <p className="hero-lead">Modern payment solutions that help businesses accept payments, manage transactions, and scale with confidence.</p>
            <div className="hero-actions">
              <Link className="button" href="/contact">Get Started <span>↗</span></Link>
              <Link className="text-link" href="/merchant-services">Explore solutions <span>→</span></Link>
            </div>
            <div className="trust-line">
              <span>Designed for modern commerce</span>
              <i />
              <span>Built to scale</span>
              <i />
              <span>Merchant-focused support</span>
            </div>
          </div>

          <div className="payment-visual" aria-label="Abstract illustration of connected payment activity">
            <div className="visual-topline">
              <span>PAYMENT NETWORK</span><span>● LIVE</span>
            </div>
            <div className="network-stage">
              <div className="network-ring ring-one" />
              <div className="network-ring ring-two" />
              <div className="core-node"><span>C</span></div>
              <div className="satellite satellite-a">CARD</div>
              <div className="satellite satellite-b">ACH</div>
              <div className="satellite satellite-c">WALLET</div>
              <div className="satellite satellite-d">ONLINE</div>
            </div>
            <div className="visual-bottom">
              <div><strong>Connected</strong><span>Payment experiences</span></div>
              <div><strong>Scalable</strong><span>Built for growth</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="shell two-column">
          <div>
            <span className="section-kicker">SIMPLIFYING PAYMENTS THROUGH TECHNOLOGY</span>
            <h2>One partner.<br />Modern payment solutions.</h2>
          </div>
          <div className="intro-copy">
            <p>Cinar Merchant Services provides businesses with reliable payment solutions designed to make accepting and managing payments easier, more efficient, and ready to grow.</p>
            <p>We combine modern payment technology with a focus on simplicity, reliability, and merchant success.</p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <div className="section-heading heading-row">
            <div>
              <span className="section-kicker light">WHAT WE DO</span>
              <h2>Payment capabilities for the way you do business.</h2>
            </div>
            <Link className="text-link light-link" href="/merchant-services">View merchant services <span>→</span></Link>
          </div>
          <div className="solution-grid">
            {solutions.map((solution) => (
              <article className="solution-card" key={solution.number}>
                <span className="card-number">{solution.number}</span>
                <div className="solution-icon" aria-hidden="true">{solution.number === "01" ? "↔" : solution.number === "02" ? "⌁" : "◎"}</div>
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section growth-section">
        <div className="shell growth-grid">
          <div className="growth-art" aria-hidden="true">
            <div className="growth-card growth-card-one"><span>PAYMENTS</span><strong>Ready when business moves.</strong></div>
            <div className="growth-card growth-card-two"><span>OPERATIONS</span><strong>Simple by design.</strong></div>
            <div className="growth-line" />
          </div>
          <div className="growth-copy">
            <span className="section-kicker">BUILT FOR GROWTH</span>
            <h2>Start simple. Scale without rebuilding.</h2>
            <p>Whether you are launching a new business or expanding an established operation, Cinar Merchant Services provides flexible payment solutions designed around changing business needs.</p>
            <ul className="check-list">
              <li>Flexible payment acceptance</li>
              <li>Modern business payment tools</li>
              <li>Infrastructure designed to scale</li>
              <li>Ongoing merchant support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="shell trust-card">
          <div className="trust-icon" aria-hidden="true">◇</div>
          <div>
            <span className="section-kicker light">TRUSTED INFRASTRUCTURE</span>
            <h2>Built on established payment technology.</h2>
            <p>Cinar Merchant Services works with established payment technology partners to support secure, reliable, and scalable payment experiences for businesses.</p>
          </div>
          <div className="trust-points">
            <span>Reliable infrastructure</span>
            <span>Modern payment methods</span>
            <span>Business-first support</span>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="shell cta-card">
          <span className="section-kicker">LET'S TALK PAYMENTS</span>
          <h2>Ready to modernize your payments?</h2>
          <p>Tell us about your business and the payment experience you want to create.</p>
          <Link className="button" href="/contact">Contact Us <span>↗</span></Link>
        </div>
      </section>
    </main>
  );
}

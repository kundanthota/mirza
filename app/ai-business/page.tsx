import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Brain,
  ChartLineUp,
  FlowArrow,
  Sparkle,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "AI for German Business",
  description: "Founder-led AI opportunity mapping, workflow automation and working pilots for German SMEs.",
};

const offers = [
  { icon: Brain, label: "01", title: "AI Opportunity Map", text: "Identify where AI can create value, what is feasible and which use case deserves to go first." },
  { icon: FlowArrow, label: "02", title: "Workflow Audit", text: "Find the repetitive work, information gaps and process friction worth redesigning." },
  { icon: Sparkle, label: "03", title: "Working AI Pilot", text: "Build and test one focused solution against a clear operational outcome." },
  { icon: UsersThree, label: "04", title: "Team Enablement", text: "Give people the workflow, training and guardrails required to use the result confidently." },
];

export default function AiBusinessPage() {
  return (
    <div className="practice-landing practice-ai">
      <section className="practice-landing-hero shell">
        <div className="practice-hero-copy">
          <div className="practice-breadcrumb"><Link href="/">MorgenPilot</Link><span>/</span>AI for Business</div>
          <p className="eyebrow">Practice 02 · German SMEs</p>
          <h1>Turn AI interest into a <em>working pilot.</em></h1>
          <p>We help local teams choose a sensible use case, build the first useful version and make it work inside the real business.</p>
          <Link href="/contact" className="button mp-primary-button">Discuss an AI pilot <ArrowUpRight size={18} /></Link>
        </div>
        <div className="ai-radar" aria-label="AI pilot path">
          <div className="radar-ring radar-ring-one" /><div className="radar-ring radar-ring-two" /><div className="radar-ring radar-ring-three" />
          <span className="radar-core"><Sparkle size={34} weight="fill" /></span>
          <span className="radar-point point-value">Value</span><span className="radar-point point-data">Data</span><span className="radar-point point-people">People</span>
          <div className="radar-status"><i />Pilot signal found</div>
        </div>
      </section>

      <section className="practice-offers shell">
        <div className="mp-section-head">
          <div><span className="eyebrow">From idea to use</span><h2>AI work that ends in something working.</h2></div>
          <p>No generic transformation deck. Start with one valuable workflow and earn the right to scale.</p>
        </div>
        <div className="offer-grid">
          {offers.map(({ icon: Icon, label, title, text }) => (
            <article className="offer-card" key={label}>
              <div><span>{label}</span><Icon size={27} /></div><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="practice-detail-band">
        <div className="shell practice-detail-grid">
          <div><span className="eyebrow">Built for the Mittelstand</span><h2>Small first step. Visible business result.</h2></div>
          <div className="detail-points">
            <article><span>01</span><div><h3>Outcome before tooling</h3><p>We define the business result first, then choose the simplest technology capable of delivering it.</p></div></article>
            <article><span>02</span><div><h3>Humans stay in the system</h3><p>Useful AI has clear ownership, review points and a team that understands when to trust it.</p></div></article>
            <article><span>03</span><div><h3>Build before scale</h3><p>A focused pilot exposes the real data, adoption and integration questions before a larger commitment.</p></div></article>
          </div>
        </div>
      </section>

      <section className="ai-proof shell">
        <div className="ai-proof-card"><ChartLineUp size={36} /><span>Success measure</span><strong>Time returned to the team</strong><p>Every pilot begins with a baseline and a result the business can observe.</p></div>
        <div className="ai-use-cases"><span className="eyebrow">Good first use cases</span><ul><li>Internal knowledge search</li><li>Document and inbox workflows</li><li>Proposal and report preparation</li><li>Customer-service assistance</li></ul></div>
      </section>

      <section className="practice-page-cta shell"><div><span className="eyebrow">Start with one workflow</span><h2>Find the pilot worth building.</h2></div><Link href="/contact" className="button mp-primary-button">Book an AI conversation <ArrowUpRight size={18} /></Link></section>
    </div>
  );
}

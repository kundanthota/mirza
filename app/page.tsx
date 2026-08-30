import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Buildings,
  Compass,
  GraduationCap,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";

export default function HomePage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <>
      <section className="mp-hero">
        <div className="mp-hero-copy">
          <p className="eyebrow">Berlin · Two specialist practices</p>
          <h1>Tomorrow needs<br />a good <em>pilot.</em></h1>
          <p className="mp-hero-intro">
            We guide international talent toward a future in Germany—and help German businesses turn AI ambition into practical results.
          </p>
          <div className="mp-hero-actions">
            <Link href="#practices" className="button mp-primary-button">Choose your direction <ArrowRight size={18} /></Link>
            <Link href="/about" className="button mp-ghost-button">Meet the copilots</Link>
          </div>
          <div className="mp-hero-foot">
            <span>01 · Study &amp; Career</span>
            <span>02 · AI for Business</span>
          </div>
        </div>

        <div className="mp-hero-visual">
          <Image
            src={`${basePath}/images/mirza-journey-hero.png`}
            alt="A professional looking toward the next stage of their future in Germany"
            fill
            priority
            sizes="(max-width: 780px) 100vw, 48vw"
          />
          <div className="visual-shade" />
          <div className="pilot-orbit" aria-hidden="true"><span>M</span></div>
          <Link href="/study-career" className="flight-card flight-study">
            <span>Route 01</span><strong>Study &amp; Career</strong><ArrowUpRight size={19} />
          </Link>
          <Link href="/ai-business" className="flight-card flight-ai">
            <span>Route 02</span><strong>AI for Business</strong><ArrowUpRight size={19} />
          </Link>
          <span className="visual-location">52.5200° N · Berlin</span>
        </div>
      </section>

      <section className="mp-intro shell">
        <div className="mp-intro-label"><Compass size={24} /><span>Why MorgenPilot</span></div>
        <h2>Different destinations.<br /><em>The same need for direction.</em></h2>
        <p>
          Morgen means tomorrow. Pilot means someone who helps navigate complexity. That is what connects our work with people and with businesses.
        </p>
      </section>

      <section className="mp-practices shell" id="practices">
        <div className="mp-section-head">
          <div><span className="eyebrow">Choose your direction</span><h2>Two practices.<br />Built to stay focused.</h2></div>
          <p>You always work with the founder who understands your specific journey.</p>
        </div>

        <div className="practice-choice-grid">
          <article className="practice-choice practice-choice-study">
            <div className="practice-choice-top"><span className="choice-number">01</span><span className="choice-icon"><GraduationCap size={30} /></span></div>
            <div>
              <p className="practice-kicker">For international students and talent</p>
              <h3>Study &amp;<br />Career</h3>
              <p className="practice-summary">From choosing the right route to building a career in Germany—with honest, practical support at every transition.</p>
            </div>
            <div className="practice-tags"><span>Study planning</span><span>Applications</span><span>Arrival</span><span>Career entry</span></div>
            <Link href="/study-career" className="practice-link">Explore this practice <ArrowUpRight size={20} /></Link>
          </article>

          <article className="practice-choice practice-choice-ai">
            <div className="practice-choice-top"><span className="choice-number">02</span><span className="choice-icon"><Sparkle size={30} /></span></div>
            <div>
              <p className="practice-kicker">For German SMEs and local teams</p>
              <h3>AI for<br />Business</h3>
              <p className="practice-summary">From identifying a valuable use case to putting a working AI pilot into your team’s hands—without the theatre.</p>
            </div>
            <div className="practice-tags"><span>AI roadmap</span><span>Automation</span><span>Pilots</span><span>Enablement</span></div>
            <Link href="/ai-business" className="practice-link">Explore this practice <ArrowUpRight size={20} /></Link>
          </article>
        </div>
      </section>

      <section className="mp-operating-model">
        <div className="shell">
          <div className="mp-model-heading"><span className="eyebrow">How we work</span><h2>Close enough to listen.<br /><em>Experienced enough to lead.</em></h2></div>
          <div className="mp-model-grid">
            <article><span>01</span><h3>Start with reality.</h3><p>We understand where you are today before prescribing what should happen tomorrow.</p></article>
            <article><span>02</span><h3>Make the route visible.</h3><p>You see the options, trade-offs, responsibilities and next decision in plain language.</p></article>
            <article><span>03</span><h3>Move into action.</h3><p>We stay practical—preparing the application or building the pilot, not stopping at advice.</p></article>
          </div>
        </div>
      </section>

      <section className="mp-founders-preview shell">
        <div className="founders-copy">
          <span className="eyebrow">Two founders, direct access</span>
          <h2>No handoffs to a generic consulting team.</h2>
          <p>Each MorgenPilot practice is founder-led. You speak to the person responsible for the thinking and the outcome.</p>
          <Link href="/about" className="button button-dark">Our story <ArrowUpRight size={18} /></Link>
        </div>
        <div className="founder-mini-grid">
          <article><span className="founder-mini-icon"><GraduationCap size={29} /></span><small>Copilot 01</small><h3>Study &amp; Career Lead</h3><p>International pathways, preparation and employability.</p></article>
          <article><span className="founder-mini-icon"><Buildings size={29} /></span><small>Copilot 02</small><h3>AI &amp; Product Lead</h3><p>Applied AI, software and business transformation.</p></article>
        </div>
      </section>

      <section className="mp-final-cta shell">
        <div><span className="eyebrow">Ready when you are</span><h2>What does your<br />tomorrow need?</h2></div>
        <Link href="/contact" className="button mp-primary-button">Talk to the right copilot <ArrowUpRight size={18} /></Link>
      </section>
    </>
  );
}

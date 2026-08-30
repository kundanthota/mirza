import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, Sparkle } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "About the Founders",
  description: "Two founder-led practices, one shared belief in clear direction and practical action.",
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero shell">
        <span className="eyebrow">About MorgenPilot</span>
        <h1>Two founders.<br />Two fields.<br /><em>One direction.</em></h1>
        <p>We built MorgenPilot around a simple idea: important transitions deserve direct, specialist guidance—not a maze of handoffs.</p>
      </section>

      <section className="founder-profile-grid shell">
        <article className="founder-profile founder-study">
          <div className="founder-profile-head"><span>Copilot 01</span><GraduationCap size={34} /></div>
          <div><p className="practice-kicker">Cofounder · Study &amp; Career</p><h2>The human journey into Germany.</h2><p>Leading the work around student pathways, candidate preparation, employability and the practical transition into education and professional life.</p></div>
          <ul><li>Student and pathway guidance</li><li>Candidate and application preparation</li><li>Career-entry support</li><li>Partner and employer relationships</li></ul>
        </article>
        <article className="founder-profile founder-ai">
          <div className="founder-profile-head"><span>Copilot 02</span><Sparkle size={34} /></div>
          <div><p className="practice-kicker">Cofounder · AI &amp; Product</p><h2>The technology behind better work.</h2><p>Leading the work around applied AI, software, workflow design and the path from a promising idea to a dependable business tool.</p></div>
          <ul><li>AI strategy and opportunity mapping</li><li>Product and workflow design</li><li>Software and AI implementation</li><li>Team enablement</li></ul>
        </article>
      </section>

      <section className="name-story shell">
        <div><span className="eyebrow">The name</span><h2>Morgen is tomorrow.<br />Pilot is direction.</h2></div>
        <div><p>Our clients are navigating different kinds of change, but both need the same things: a clear view, an experienced partner and the confidence to move.</p><p>MorgenPilot is not about taking over the controls. It is about helping you read the situation, choose the route and make the next move well.</p></div>
      </section>

      <section className="practice-page-cta shell"><div><span className="eyebrow">Speak directly with us</span><h2>Meet the founder for your direction.</h2></div><Link href="/contact" className="button mp-primary-button">Start a conversation <ArrowUpRight size={18} /></Link></section>
    </div>
  );
}

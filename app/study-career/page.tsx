import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  CheckCircle,
  FileText,
  GraduationCap,
  MapTrifold,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Study & Career in Germany",
  description: "Founder-led planning, preparation and career guidance for international students building a future in Germany.",
};

const offers = [
  { icon: MapTrifold, label: "01", title: "Germany Study Roadmap", text: "Clarify programmes, timelines, requirements and the strongest next step for your profile." },
  { icon: FileText, label: "02", title: "Application Readiness", text: "Build a clear application package and understand what each institution expects." },
  { icon: CheckCircle, label: "03", title: "Arrival Preparation", text: "Organise the practical process around documents, language, relocation and your first weeks." },
  { icon: Briefcase, label: "04", title: "Career Launch", text: "Position your experience for internships, working-student roles and graduate opportunities." },
];

export default function StudyCareerPage() {
  return (
    <div className="practice-landing practice-study">
      <section className="practice-landing-hero shell">
        <div className="practice-hero-copy">
          <div className="practice-breadcrumb"><Link href="/">MorgenPilot</Link><span>/</span>Study &amp; Career</div>
          <p className="eyebrow">Practice 01 · International talent</p>
          <h1>A clearer route from <em>ambition</em> to arrival.</h1>
          <p>Germany offers many possibilities. We help you choose the ones that fit, prepare properly and build toward more than an admission letter.</p>
          <Link href="/contact" className="button button-dark">Plan my route <ArrowUpRight size={18} /></Link>
        </div>
        <div className="route-board">
          <div className="route-board-head"><span>Your flight plan</span><GraduationCap size={26} /></div>
          <div className="route-line">
            <div><span>01</span><strong>Choose</strong><small>Programme &amp; route</small></div>
            <div><span>02</span><strong>Prepare</strong><small>Profile &amp; application</small></div>
            <div><span>03</span><strong>Arrive</strong><small>Documents &amp; transition</small></div>
            <div><span>04</span><strong>Build</strong><small>Skills &amp; career</small></div>
          </div>
          <p className="route-board-note">Guidance shaped around your starting point—not a generic checklist.</p>
        </div>
      </section>

      <section className="practice-offers shell">
        <div className="mp-section-head">
          <div><span className="eyebrow">What we help with</span><h2>Support for the whole transition.</h2></div>
          <p>Choose a focused starting point or connect the stages into one personal roadmap.</p>
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
          <div><span className="eyebrow">Our difference</span><h2>We plan beyond getting in.</h2></div>
          <div className="detail-points">
            <article><span>01</span><div><h3>Fit before forms</h3><p>We start with your goals, academic profile, finances and career direction before discussing applications.</p></div></article>
            <article><span>02</span><div><h3>Career from the beginning</h3><p>Language, employability and professional positioning are part of the plan—not an afterthought before graduation.</p></div></article>
            <article><span>03</span><div><h3>Clear scope, honest limits</h3><p>We provide process information and preparation. Where individual legal advice is required, we recommend an appropriately qualified professional.</p></div></article>
          </div>
        </div>
      </section>

      <section className="related-services shell">
        <div className="mp-section-head"><div><span className="eyebrow">Explore the details</span><h2>Your supporting routes.</h2></div></div>
        <div className="related-service-grid">
          <Link href="/services/visa"><span>Process preparation</span><strong>Visa guidance</strong><ArrowUpRight size={19} /></Link>
          <Link href="/services/german"><span>Language</span><strong>German learning</strong><ArrowUpRight size={19} /></Link>
          <Link href="/services/ausbildung"><span>Training</span><strong>Ausbildung</strong><ArrowUpRight size={19} /></Link>
          <Link href="/services/jobs"><span>Employability</span><strong>Jobs &amp; careers</strong><ArrowUpRight size={19} /></Link>
        </div>
      </section>

      <section className="practice-page-cta shell"><div><span className="eyebrow">Your first checkpoint</span><h2>Let&apos;s map the route that fits you.</h2></div><Link href="/contact" className="button button-dark">Start with your story <ArrowUpRight size={18} /></Link></section>
    </div>
  );
}

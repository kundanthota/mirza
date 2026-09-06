import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpenText,
  FileText,
  GraduationCap,
  Translate,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Study in Germany",
  description: "Personal guidance for bachelor’s, master’s and German language programmes—from choosing the right route to preparing your application.",
};

const offers = [
  { icon: BookOpenText, label: "01", title: "Bachelor’s Route", text: "Understand subject choices, entry requirements, foundation options and the application timeline." },
  { icon: GraduationCap, label: "02", title: "Master’s Route", text: "Shortlist programmes that fit your degree, experience, career goals and academic profile." },
  { icon: Translate, label: "03", title: "Language Courses", text: "Choose the right German level, course format and language pathway for study or work." },
  { icon: FileText, label: "04", title: "Application Package", text: "Prepare a clear, complete application and understand what each institution expects." },
];

export default function StudyCareerPage() {
  return (
    <div className="practice-landing practice-study">
      <section className="practice-landing-hero shell">
        <div className="practice-hero-copy">
          <div className="practice-breadcrumb"><Link href="/">MorgenPilot</Link><span>/</span>Study in Germany</div>
          <p className="eyebrow">Education path · Germany</p>
          <h1>Study in Germany with a plan that <em>fits.</em></h1>
          <p>Choose a bachelor&apos;s, master&apos;s or language route with a clear view of the requirements, costs, timing and career direction behind it.</p>
          <Link href="/contact" className="button button-dark">Plan my study route <ArrowUpRight size={18} /></Link>
        </div>
        <div className="route-board">
          <div className="route-board-head"><span>Your study plan</span><GraduationCap size={26} /></div>
          <div className="route-line">
            <div><span>01</span><strong>Profile</strong><small>Goals &amp; eligibility</small></div>
            <div><span>02</span><strong>Shortlist</strong><small>Programme &amp; institution</small></div>
            <div><span>03</span><strong>Apply</strong><small>Documents &amp; timeline</small></div>
            <div><span>04</span><strong>Prepare</strong><small>Language &amp; arrival</small></div>
          </div>
          <p className="route-board-note">Guidance shaped around your starting point—not a generic checklist.</p>
        </div>
      </section>

      <section className="practice-offers shell">
        <div className="mp-section-head">
          <div><span className="eyebrow">Choose your study route</span><h2>Different goals need different plans.</h2></div>
          <p>Start with the route that matches your current education, language level and future career.</p>
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
          <div><span className="eyebrow">Our approach</span><h2>More than a university shortlist.</h2></div>
          <div className="detail-points">
            <article><span>01</span><div><h3>Fit before forms</h3><p>Your goals, grades, budget, language level and career direction come before any programme recommendation.</p></div></article>
            <article><span>02</span><div><h3>Career from day one</h3><p>We connect your study choice with the skills, language and work opportunities you want after graduation.</p></div></article>
            <article><span>03</span><div><h3>Clear scope, honest limits</h3><p>We provide process guidance and preparation. Where individual legal advice is required, we recommend an appropriately qualified professional.</p></div></article>
          </div>
        </div>
      </section>

      <section className="related-services shell">
        <div className="mp-section-head"><div><span className="eyebrow">Complete the route</span><h2>Prepare for what comes next.</h2></div></div>
        <div className="related-service-grid">
          <Link href="/services/visa"><span>Process preparation</span><strong>Visa guidance</strong><ArrowUpRight size={19} /></Link>
          <Link href="/services/german"><span>Language preparation</span><strong>German learning</strong><ArrowUpRight size={19} /></Link>
          <Link href="/jobs"><span>After your studies</span><strong>Jobs &amp; CV audit</strong><ArrowUpRight size={19} /></Link>
          <Link href="/contact"><span>Personal guidance</span><strong>Discuss your profile</strong><ArrowUpRight size={19} /></Link>
        </div>
      </section>

      <section className="practice-page-cta shell"><div><span className="eyebrow">Your first checkpoint</span><h2>Which study route fits your future?</h2></div><Link href="/contact" className="button button-dark">Discuss my profile <ArrowUpRight size={18} /></Link></section>
    </div>
  );
}

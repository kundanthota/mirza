import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  ChartBar,
  FileText,
  MagnifyingGlass,
  Target,
} from "@phosphor-icons/react/dist/ssr";
import { CvAuditForm } from "@/components/cv-audit-form";

export const metadata: Metadata = {
  title: "Jobs and CV Audit in Germany",
  description: "Prepare for the German job market with CV analysis, role-fit guidance and a focused application strategy.",
};

const signals = [
  { icon: FileText, label: "01", title: "CV Clarity", text: "See whether your experience, impact and skills are easy for a German employer to understand." },
  { icon: Target, label: "02", title: "Role Fit", text: "Compare your profile with the role you want and identify where the match is strongest." },
  { icon: ChartBar, label: "03", title: "Gap Signals", text: "Surface missing evidence, language expectations and skills that may weaken an application." },
  { icon: MagnifyingGlass, label: "04", title: "Next Actions", text: "Turn the audit into a focused shortlist of improvements and smarter application priorities." },
];

export default function JobsPage() {
  return (
    <div className="practice-landing practice-jobs">
      <section className="jobs-hero shell">
        <div className="practice-hero-copy">
          <div className="practice-breadcrumb"><Link href="/">MorgenPilot</Link><span>/</span>Jobs &amp; CV Audit</div>
          <p className="eyebrow">Career path · Germany</p>
          <h1>Know where your CV <em>stands.</em></h1>
          <p>Upload your CV, choose a target role and build a clearer picture of your fit for the German job market.</p>
          <Link href="#audit" className="button mp-primary-button">Start my CV audit <ArrowUpRight size={18} /></Link>
        </div>
        <div className="candidate-card" aria-label="Candidate profile preview">
          <div className="candidate-card-head"><span>Candidate signal</span><Briefcase size={25} /></div>
          <div className="candidate-score"><strong>72</strong><span>/100</span><i>Illustrative score</i></div>
          <div className="candidate-bars"><div><span>Experience clarity</span><i><b style={{ width: "84%" }} /></i></div><div><span>Target-role fit</span><i><b style={{ width: "72%" }} /></i></div><div><span>Market readiness</span><i><b style={{ width: "61%" }} /></i></div></div>
          <p>One profile. Clearer signals. Better next decisions.</p>
        </div>
      </section>

      <section className="practice-offers shell">
        <div className="mp-section-head">
          <div><span className="eyebrow">What the audit looks for</span><h2>More than formatting and keywords.</h2></div>
          <p>Your CV is read in context: your experience, your target role and what employers need to see.</p>
        </div>
        <div className="offer-grid">
          {signals.map(({ icon: Icon, label, title, text }) => (
            <article className="offer-card" key={label}><div><span>{label}</span><Icon size={27} /></div><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="cv-audit-section shell" id="audit">
        <div className="cv-audit-intro">
          <span className="eyebrow">Upload &amp; assess</span>
          <h2>Start with the CV you have today.</h2>
          <p>We designed this audit to become the front door to your future profile-analysis agent. Once its API is connected, candidates can receive a structured assessment directly here.</p>
          <div className="audit-trust-points"><span><i>01</i>PDF or DOCX</span><span><i>02</i>5 MB maximum</span><span><i>03</i>Consent required</span></div>
        </div>
        <CvAuditForm />
      </section>

      <section className="practice-detail-band">
        <div className="shell practice-detail-grid">
          <div><span className="eyebrow">After the audit</span><h2>Turn insight into a better job search.</h2></div>
          <div className="detail-points">
            <article><span>01</span><div><h3>Define realistic target roles</h3><p>Focus on positions where your current profile has a credible story and visible value.</p></div></article>
            <article><span>02</span><div><h3>Strengthen the evidence</h3><p>Improve weak descriptions, clarify results and make the skills behind your experience easier to find.</p></div></article>
            <article><span>03</span><div><h3>Prepare for the conversation</h3><p>Carry the same clear positioning into applications, screening calls and interviews.</p></div></article>
          </div>
        </div>
      </section>

      <section className="practice-page-cta shell"><div><span className="eyebrow">Need human guidance?</span><h2>Build a job strategy around your real profile.</h2></div><Link href="/contact" className="button mp-primary-button">Talk to us <ArrowUpRight size={18} /></Link></section>
    </div>
  );
}

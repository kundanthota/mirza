import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Briefcase, GraduationCap } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "About the Founders",
  description: "Two founders building one connected path from education to employment in Germany.",
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero shell">
        <span className="eyebrow">About MorgenPilot</span>
        <h1>Two founders.<br />One path to<br /><em>Germany.</em></h1>
        <p>We built MorgenPilot around a simple belief: choosing how to study and finding where to work should be parts of one connected plan.</p>
      </section>

      <section className="founder-profile-grid shell">
        <article className="founder-profile founder-study">
          <div className="founder-profile-head"><span>Copilot 01</span><GraduationCap size={34} /></div>
          <div><p className="practice-kicker">Cofounder · Student Pathways</p><h2>The education journey into Germany.</h2><p>Leading the work around bachelor&apos;s, master&apos;s and language pathways, application preparation and the practical transition into student life.</p></div>
          <ul><li>Programme and pathway guidance</li><li>Application preparation</li><li>Language-course planning</li><li>Arrival readiness</li></ul>
        </article>
        <article className="founder-profile founder-jobs">
          <div className="founder-profile-head"><span>Copilot 02</span><Briefcase size={34} /></div>
          <div><p className="practice-kicker">Cofounder · Careers &amp; Platform</p><h2>The bridge from profile to profession.</h2><p>Leading career strategy and the digital tools that help candidates understand their profile, improve their CV and focus on suitable opportunities.</p></div>
          <ul><li>Candidate profile assessment</li><li>CV and role-fit guidance</li><li>Career experience design</li><li>Platform and product development</li></ul>
        </article>
      </section>

      <section className="name-story shell">
        <div><span className="eyebrow">The name</span><h2>Morgen is tomorrow.<br />Pilot is direction.</h2></div>
        <div><p>Morgen means tomorrow. Pilot means someone who can read the route ahead. Together, the name describes what we want to offer every student and candidate: clearer next decisions.</p><p>MorgenPilot is not about taking over the controls. It is about helping you understand your options, prepare properly and make the next move with confidence.</p></div>
      </section>

      <section className="practice-page-cta shell"><div><span className="eyebrow">Speak directly with us</span><h2>Tell us where you want Germany to take you.</h2></div><Link href="/contact" className="button mp-primary-button">Start a conversation <ArrowUpRight size={18} /></Link></section>
    </div>
  );
}

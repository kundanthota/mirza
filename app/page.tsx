import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Compass,
  FileArrowUp,
  GraduationCap,
} from "@phosphor-icons/react/dist/ssr";

export default function HomePage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <>
      <section className="mp-hero">
        <div className="mp-hero-copy">
          <p className="eyebrow">Education &amp; careers in Germany</p>
          <h1>Your path to Germany.<br /><em>Mapped.</em></h1>
          <p className="mp-hero-intro">
            From choosing a bachelor&apos;s, master&apos;s or language programme to becoming ready for the German job market—we help you make each move count.
          </p>
          <div className="mp-hero-actions">
            <Link href="/study-career" className="button mp-primary-button">Explore study routes <ArrowRight size={18} /></Link>
            <Link href="/jobs" className="button mp-ghost-button">Audit my CV</Link>
          </div>
          <div className="mp-hero-foot">
            <span>01 · Study in Germany</span>
            <span>02 · Jobs &amp; CV audit</span>
          </div>
        </div>

        <div className="mp-hero-visual">
          <Image
            src={`${basePath}/images/mirza-journey-hero.png`}
            alt="An international professional planning their future in Germany"
            fill
            priority
            sizes="(max-width: 780px) 100vw, 48vw"
          />
          <div className="visual-shade" />
          <div className="pilot-orbit" aria-hidden="true"><span>M</span></div>
          <Link href="/study-career" className="flight-card flight-study">
            <span>Route 01</span><strong>Bachelor · Master · Language</strong><ArrowUpRight size={19} />
          </Link>
          <Link href="/jobs" className="flight-card flight-jobs">
            <span>Route 02</span><strong>Jobs &amp; CV Audit</strong><ArrowUpRight size={19} />
          </Link>
          <span className="visual-location">52.5200° N · Berlin</span>
        </div>
      </section>

      <section className="mp-intro shell">
        <div className="mp-intro-label"><Compass size={24} /><span>Why MorgenPilot</span></div>
        <h2>One destination.<br /><em>Every stage connected.</em></h2>
        <p>
          A study decision shapes your career. A strong career plan shapes what and where you study. We connect both, so your route to Germany has a purpose beyond arrival.
        </p>
      </section>

      <section className="mp-practices shell" id="journeys">
        <div className="mp-section-head">
          <div><span className="eyebrow">Choose your starting point</span><h2>Two journeys.<br />One future in Germany.</h2></div>
          <p>Begin where you are today. We will help you understand the next realistic step.</p>
        </div>

        <div className="practice-choice-grid">
          <article className="practice-choice practice-choice-study">
            <div className="practice-choice-top"><span className="choice-number">01</span><span className="choice-icon"><GraduationCap size={30} /></span></div>
            <div>
              <p className="practice-kicker">For future students</p>
              <h3>Study in<br />Germany</h3>
              <p className="practice-summary">Choose the right academic route, prepare a credible application and arrive with a plan for what comes after graduation.</p>
            </div>
            <div className="practice-tags"><span>Bachelor&apos;s</span><span>Master&apos;s</span><span>Language courses</span><span>Applications</span></div>
            <Link href="/study-career" className="practice-link">Explore study routes <ArrowUpRight size={20} /></Link>
          </article>

          <article className="practice-choice practice-choice-jobs">
            <div className="practice-choice-top"><span className="choice-number">02</span><span className="choice-icon"><Briefcase size={30} /></span></div>
            <div>
              <p className="practice-kicker">For job seekers</p>
              <h3>Get job-<br />ready</h3>
              <p className="practice-summary">Understand how your CV fits the German market, focus on the right roles and turn your experience into a clear candidate story.</p>
            </div>
            <div className="practice-tags"><span>CV audit</span><span>Role fit</span><span>Job search</span><span>Interview prep</span></div>
            <Link href="/jobs" className="practice-link">Explore jobs &amp; CV audit <ArrowUpRight size={20} /></Link>
          </article>
        </div>
      </section>

      <section className="mp-operating-model">
        <div className="shell">
          <div className="mp-model-heading"><span className="eyebrow">Your route, made visible</span><h2>From possibility<br />to <em>prepared.</em></h2></div>
          <div className="mp-model-grid">
            <article><span>01</span><h3>Understand your profile.</h3><p>We begin with your education, experience, language level, budget and goals.</p></article>
            <article><span>02</span><h3>Choose the right route.</h3><p>You receive focused options and understand the requirements, trade-offs and priorities.</p></article>
            <article><span>03</span><h3>Prepare to move.</h3><p>We strengthen the application, CV and practical plan needed for your next step.</p></article>
          </div>
        </div>
      </section>

      <section className="mp-cv-preview shell">
        <div className="cv-preview-copy">
          <span className="eyebrow">MorgenPilot CV Audit</span>
          <h2>Your CV should open the right doors.</h2>
          <p>Upload your CV and tell us the role you want. Our audit experience is being built to assess German-market fit, surface gaps and recommend the strongest next actions.</p>
          <Link href="/jobs#audit" className="button button-dark">Upload my CV <FileArrowUp size={18} /></Link>
        </div>
        <div className="cv-preview-panel" aria-label="CV audit preview">
          <div className="cv-preview-file"><FileArrowUp size={25} /><div><strong>Your_CV.pdf</strong><span>Ready for analysis</span></div><i>PDF</i></div>
          <div className="cv-preview-score"><span>Profile signal</span><strong>72<small>/100</small></strong><div><i /></div></div>
          <div className="cv-preview-tags"><span>Clear experience</span><span>Role fit</span><span>Language signal</span></div>
          <p>Illustrative preview—your real audit will be based on your CV and target role.</p>
        </div>
      </section>

      <section className="mp-final-cta shell">
        <div><span className="eyebrow">Start where you are</span><h2>What is your<br />next move?</h2></div>
        <Link href="/contact" className="button mp-primary-button">Plan my Germany path <ArrowUpRight size={18} /></Link>
      </section>
    </>
  );
}

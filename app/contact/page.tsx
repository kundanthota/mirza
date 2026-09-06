import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Start a conversation",
  description: "Talk to MorgenPilot about studying, preparing and finding work in Germany.",
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero shell">
        <p className="eyebrow">Start here</p>
        <div className="contact-hero-grid">
          <h1>Plan your<br /><em>next move.</em></h1>
          <p className="contact-intro">
            Whether your next step is a degree, a language course or a job in Germany, tell us where you are today and where you want to go.
          </p>
        </div>
      </section>
      <section className="contact-layout">
        <aside className="contact-aside">
          <h2>One route. Guidance for every important stage.</h2>
          <div className="contact-detail"><span>Study in Germany</span><p>Bachelor&apos;s, master&apos;s and language-course planning</p></div>
          <div className="contact-detail"><span>Jobs &amp; CV Audit</span><p>Profile review, role fit and German-market preparation</p></div>
          <div className="contact-detail">
            <span>Location</span>
            <p>Berlin, Germany<br />Working with clients worldwide</p>
          </div>
          <div className="contact-detail">
            <span>Response time</span>
            <p>Usually within two working days</p>
          </div>
          <div className="contact-detail"><span>First conversation</span><p>Focused, practical and without a generic sales script</p></div>
        </aside>
        <div className="contact-form-wrap">
          <h2 className="form-title">Where do you want to go?</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

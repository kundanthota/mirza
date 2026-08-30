import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Start a conversation",
  description: "Start a conversation with the right MorgenPilot practice.",
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero shell">
        <p className="eyebrow">Start here</p>
        <div className="contact-hero-grid">
          <h1>Choose your<br /><em>next horizon.</em></h1>
          <p className="contact-intro">
            Whether you are planning a future in Germany or an AI pilot for your business, your message goes directly to the founder who leads that practice.
          </p>
        </div>
      </section>
      <section className="contact-layout">
        <aside className="contact-aside">
          <h2>One company. Two specialist conversations.</h2>
          <div className="contact-detail"><span>Study &amp; Career</span><p>Admissions, preparation and career entry in Germany</p></div>
          <div className="contact-detail"><span>AI for Business</span><p>Opportunity mapping, pilots and implementation</p></div>
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
          <h2 className="form-title">What are you building toward?</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

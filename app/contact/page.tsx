import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Start a conversation",
  description: "Tell Mirza Consultancy where you want to go next and get a clear starting point.",
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero shell">
        <p className="eyebrow">Start here</p>
        <div className="contact-hero-grid">
          <h1>Let&apos;s make<br />it <em>clear.</em></h1>
          <p className="contact-intro">
            Tell us where you are now and where you want to go. We&apos;ll come back with the most useful next step—not a generic sales pitch.
          </p>
        </div>
      </section>
      <section className="contact-layout">
        <aside className="contact-aside">
          <h2>A good first conversation can change the whole route.</h2>
          <div className="contact-detail">
            <span>Email</span>
            <a href="mailto:hello@mirzaconsultancy.de">hello@mirzaconsultancy.de</a>
          </div>
          <div className="contact-detail">
            <span>Location</span>
            <p>Berlin, Germany<br />Working with clients worldwide</p>
          </div>
          <div className="contact-detail">
            <span>Response time</span>
            <p>Usually within two working days</p>
          </div>
          <div className="contact-detail">
            <span>Guidance call</span>
            <p>15–30 minutes · €15</p>
          </div>
        </aside>
        <div className="contact-form-wrap">
          <h2 className="form-title">Tell us about you.</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

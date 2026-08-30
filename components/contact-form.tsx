"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setMessage("Thanks—your message is ready for the right MorgenPilot practice.");
    form.reset();
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="firstName">First name</label>
        <input id="firstName" name="firstName" autoComplete="given-name" required placeholder="Your first name" />
      </div>
      <div className="field">
        <label htmlFor="lastName">Last name</label>
        <input id="lastName" name="lastName" autoComplete="family-name" required placeholder="Your last name" />
      </div>
      <div className="field">
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone / WhatsApp</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+49 000 000000" />
      </div>
      <div className="field field-full">
        <label htmlFor="service">I&apos;m interested in</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>Select a service</option>
          <option value="study-career">Study &amp; Career</option>
          <option value="ai-business">AI for Business</option>
          <option value="partnership">Partnership</option>
          <option value="guidance">I&apos;m not sure yet</option>
        </select>
      </div>
      <div className="field field-full">
        <label htmlFor="details">Tell us a little about your goal</label>
        <textarea id="details" name="details" required placeholder="Where are you now, and where would you like to get to?" />
      </div>
      <button type="submit" className="button button-dark">Send enquiry <ArrowUpRight size={18} /></button>
      <p className="form-message" aria-live="polite">{message}</p>
    </form>
  );
}

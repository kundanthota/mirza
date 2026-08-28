import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { services } from "@/lib/services";

export default function HomePage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Visa · careers · language · technology</p>
          <h1>A smarter way<br />to make Germany <em>happen.</em></h1>
          <p className="hero-intro">
            Clear advice, practical next steps and personal support for your move, studies or career in Germany.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="button button-dark">Plan my next move <ArrowUpRight size={18} /></Link>
            <Link href="#services" className="button">View services <ArrowDown size={17} /></Link>
          </div>
          <span className="hero-note">Personal guidance · Human answers</span>
        </div>
        <div className="hero-media">
          <Image
            src={`${basePath}/images/mirza-journey-hero.png`}
            alt="A professional beginning a new career journey in a modern German city"
            fill
            priority
            sizes="(max-width: 780px) 100vw, 54vw"
          />
          <div className="hero-stamp">Your<br />move</div>
          <span className="hero-image-caption">Berlin · Germany</span>
        </div>
      </section>

      <section className="intro-band shell">
        <div className="intro-grid">
          <p>
            One team for the decisions that shape your move—from choosing the right visa to building the skills and career that come next.
          </p>
          <h2>Everything you need to move forward—<em>connected in one place.</em></h2>
        </div>
      </section>

      <section className="services-section shell" id="services">
        <div className="section-rule">
          <span>Choose your route</span>
          <span>01—05</span>
        </div>
        <div className="services-list">
          {services.map((service) => (
            <Link
              className="service-row"
              href={`/services/${service.slug}`}
              key={service.slug}
              style={{ "--service-color": service.color } as React.CSSProperties}
            >
              <span className="service-index">{service.index}</span>
              <span className="service-title">{service.name}</span>
              <span className="service-desc">{service.intro}</span>
              <span className="service-arrow"><ArrowUpRight size={21} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="approach">
        <div className="shell">
          <div className="approach-head">
            <h2>Real guidance.<br /><em>Zero guesswork.</em></h2>
            <p className="approach-intro">
              A simple, focused process that turns a complicated goal into decisions you can actually act on.
            </p>
          </div>
          <div className="approach-steps">
            <article className="approach-step">
              <span>01 / Listen</span>
              <h3>Start with your story.</h3>
              <p>We look at your goals, experience, timeline and the reality of your current situation.</p>
            </article>
            <article className="approach-step">
              <span>02 / Map</span>
              <h3>See the whole route.</h3>
              <p>You receive a direct view of the viable options, trade-offs and preparation involved.</p>
            </article>
            <article className="approach-step">
              <span>03 / Move</span>
              <h3>Take the next step.</h3>
              <p>Move forward with a clear priority list and support at the moments that matter.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="testimonial shell">
        <blockquote>
          I stopped searching in circles. For the first time, I had a plan that made sense for me.
        </blockquote>
        <cite>Candidate consultation · Berlin pathway</cite>
      </section>

      <section className="cta-panel">
        <div className="cta-panel-inner">
          <h2>Turn your questions<br />into a <em>clear plan.</em></h2>
          <Link href="/contact" className="button button-light">Let&apos;s talk <ArrowUpRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}

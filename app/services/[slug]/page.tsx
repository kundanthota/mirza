import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "@phosphor-icons/react/dist/ssr";
import { ServiceIcon } from "@/components/service-icon";
import { getService, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.intro,
  };
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const currentIndex = services.findIndex((item) => item.slug === service.slug);
  const next = services[(currentIndex + 1) % services.length];
  const [firstLine, ...rest] = service.headline.split(" ");
  const tickerItems = [...service.highlights, ...service.highlights];

  return (
    <div
      className="service-page"
      style={{ "--accent": service.color, "--accent-soft": service.soft } as React.CSSProperties}
    >
      <section className="service-hero">
        <span className="service-counter" aria-hidden="true">{service.index}</span>
        <div className="service-hero-grid shell">
          <div>
            <div className="service-breadcrumb">
              <Link href="/">Home</Link><span>/</span>{service.name}
            </div>
            <p className="eyebrow">{service.eyebrow}</p>
            <h1><em>{firstLine}</em> {rest.join(" ")}</h1>
          </div>
          <div className="service-hero-side">
            <div className="service-icon-large"><ServiceIcon icon={service.icon} size={38} /></div>
            <p>{service.intro}</p>
            <Link href="/contact" className="button button-dark">Talk to an advisor <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Service highlights">
        <div className="ticker-inner">
          {tickerItems.map((item, index) => (
            <span className="ticker-item" key={`${item}-${index}`}>
              {item}<span className="ticker-dot" />
            </span>
          ))}
        </div>
      </div>

      <section className="service-overview">
        <div className="service-overview-grid shell">
          <div className="service-stat">
            <strong>{service.stat}</strong>
            <span>{service.statLabel}</span>
          </div>
          <div className="overview-copy">
            <p className="eyebrow">What this service does</p>
            <h2>Know what matters. Skip what doesn&apos;t.</h2>
            <p>
              We connect the requirements to your real situation, then give you a focused route with priorities you can understand and act on.
            </p>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="shell">
          <div className="process-head">
            <h2>From first question to next move.</h2>
            <p>Four focused stages keep the process transparent and the next decision visible.</p>
          </div>
          <div className="process-grid">
            {service.steps.map((step) => (
              <article className="process-card" key={step.number}>
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="outcomes">
        <div className="shell">
          <div className="outcomes-header">
            <h2>Useful from day one.</h2>
            <p>
              Useful advice is specific enough to act on. Every engagement is designed to replace uncertainty with a practical outcome.
            </p>
          </div>
          <div className="outcomes-grid">
            {service.outcomes.map((outcome) => (
              <article className="outcome-card" key={outcome.title}>
                <span className="outcome-icon"><Check size={19} weight="bold" /></span>
                <h3>{outcome.title}</h3>
                <p>{outcome.text}</p>
              </article>
            ))}
          </div>
          {service.slug !== "engineering" && (
            <p className="disclaimer">
              Mirza Consultancy provides preparation and guidance. Decisions on visas, residence permits, admissions and employment remain with the responsible authorities, institutions and employers.
            </p>
          )}
        </div>
      </section>

      <Link
        href={`/services/${next.slug}`}
        className="next-route"
        style={{ "--accent": next.color } as React.CSSProperties}
      >
        <div className="next-route-inner shell">
          <div>
            <span className="next-route-label">Next service · {next.index}</span>
            <div className="next-route-title">{next.name}</div>
          </div>
          <span className="next-route-arrow"><ArrowUpRight size={30} /></span>
        </div>
      </Link>
    </div>
  );
}

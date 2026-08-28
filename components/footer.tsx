import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main shell">
        <div className="footer-statement">
          <div className="logo footer-logo">
            <span className="logo-mark">M</span>
            <span className="logo-type">Mirza <i>Consultancy</i></span>
          </div>
          <h2>Move forward,<br /><em>with a plan.</em></h2>
        </div>
        <div className="footer-links">
          <div>
            <p className="footer-label">Services</p>
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>{service.name}</Link>
            ))}
          </div>
          <div>
            <p className="footer-label">Connect</p>
            <Link href="/contact">Book a guidance call</Link>
            <a href="mailto:hello@mirzaconsultancy.de">Email us <ArrowUpRight size={14} /></a>
            <a href="#">LinkedIn <ArrowUpRight size={14} /></a>
          </div>
          <div>
            <p className="footer-label">Legal</p>
            <a href="#">Impressum</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom shell">
        <p>© 2026 Mirza Consultancy</p>
        <p>Berlin, Germany · Working internationally</p>
      </div>
    </footer>
  );
}

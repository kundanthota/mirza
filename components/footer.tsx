import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main shell">
        <div className="footer-statement">
          <div className="logo footer-logo">
            <span className="logo-mark">M</span>
            <span className="logo-type">Morgen<span>Pilot</span></span>
          </div>
          <h2>Your path to Germany,<br /><em>made clearer.</em></h2>
        </div>
        <div className="footer-links">
          <div>
            <p className="footer-label">Explore</p>
            <Link href="/study-career">Study in Germany</Link>
            <Link href="/jobs">Jobs &amp; CV Audit</Link>
            <Link href="/about">About the founders</Link>
          </div>
          <div>
            <p className="footer-label">Connect</p>
            <Link href="/contact">Book a guidance call</Link>
            <Link href="/contact">Start a conversation <ArrowUpRight size={14} /></Link>
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
        <p>© 2026 MorgenPilot</p>
        <p>Berlin, Germany · Education and careers</p>
      </div>
    </footer>
  );
}

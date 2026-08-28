"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { services } from "@/lib/services";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="Mirza Consultancy home">
          <span className="logo-mark">M</span>
          <span className="logo-type">Mirza <i>Consultancy</i></span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={pathname === `/services/${service.slug}` ? "active" : ""}
            >
              {service.short}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="header-cta">
          Start a conversation <ArrowUpRight size={16} weight="bold" />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={25} /> : <List size={25} />}
        </button>
      </div>

      <div id="mobile-nav" className={`mobile-nav ${open ? "open" : ""}`}>
        <div className="mobile-nav-inner">
          <Link href="/" className="mobile-home">Home</Link>
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <span>{service.index}</span>{service.name}
            </Link>
          ))}
          <Link href="/contact" className="button button-dark">Start a conversation</Link>
        </div>
      </div>
    </header>
  );
}

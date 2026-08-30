"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/study-career", label: "Study & Career" },
  { href: "/ai-business", label: "AI for Business" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="MorgenPilot home">
          <span className="logo-mark">M</span>
          <span className="logo-type">Morgen<span>Pilot</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname.startsWith(item.href) ? "active" : ""}
            >
              {item.label}
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
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href}>
              <span>0{index + 1}</span>{item.label}
            </Link>
          ))}
          <Link href="/contact" className="button button-dark">Start a conversation</Link>
        </div>
      </div>
    </header>
  );
}

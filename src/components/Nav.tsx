"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#about", label: "/ABOUT" },
  { href: "#skills", label: "/SKILLS" },
  { href: "#projects", label: "/WORK" },
  { href: "#hackathons", label: "/LOGS" },
  { href: "#github", label: "/STATS" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handler = () => {
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 100) {
          current = s.id;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-yellow border-b-[3px] border-ink flex items-center justify-between"
      style={{ height: 56 }}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="font-mono font-bold text-[1.1rem] tracking-tight px-6 lg:px-8 select-none">
        YASH PATEL
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`
              block px-4 lg:px-5 h-[56px] leading-[56px]
              border-l-[3px] border-ink
              text-[0.75rem] font-bold uppercase tracking-widest font-mono
              transition-colors duration-150 text-ink
              ${active === href.slice(1) ? "bg-ink text-yellow" : "hover:bg-ink hover:text-yellow"}
            `}
          >
            {label}
          </Link>
        ))}
        <Link
          href="#contact"
          className={`
            block px-4 lg:px-5 h-[56px] leading-[56px]
            border-l-[3px] border-ink
            text-[0.75rem] font-bold uppercase tracking-widest font-mono
            bg-ink text-yellow transition-colors duration-150
            hover:bg-red
          `}
        >
          HIRE ME
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden border-l-[3px] border-ink h-[56px] w-[56px] flex items-center justify-center bg-ink text-yellow font-mono text-[0.7rem] font-bold"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-[56px] left-0 right-0 bg-yellow border-b-[3px] border-ink z-50">
          {[...NAV_LINKS, { href: "#contact", label: "HIRE ME" }].map(
            ({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 border-b-2 border-ink font-mono text-[0.8rem] font-bold uppercase tracking-widest hover:bg-ink hover:text-yellow transition-colors"
              >
                {label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}

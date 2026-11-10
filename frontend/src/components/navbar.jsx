import { useEffect, useRef, useState } from "react";
import { links, navSections } from "../assets/content";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const menuBtnRef = useRef(null);

  // While the mobile menu is open, close it on Escape or a tap outside the header.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    const onPointerDown = (e) => {
      if (!headerRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="wrap nav-row">
        <a href="#top" aria-label="Ed, back to top" className="logomark mono">
          Ed<span className="cursor" aria-hidden="true">_</span>
        </a>

        <nav className="navlinks" aria-label="Primary">
          {navSections.map((section) => (
            <a key={section.id} className="navlink" href={`#${section.id}`}>
              {section.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-ghost btn-sm nav-social" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 18l6-6-6-6" />
              <path d="M8 6l-6 6 6 6" />
            </svg>
            <span className="btn-text">GitHub</span>
          </a>
          <a className="btn btn-ghost btn-sm nav-social" href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span className="btn-text">LinkedIn</span>
          </a>
          <button
            ref={menuBtnRef}
            type="button"
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`}>
        <nav aria-label="Sections">
          {navSections.map((section, i) => (
            <a key={section.id} className="mobile-link" href={`#${section.id}`} onClick={() => setOpen(false)}>
              <span className="mono mobile-link-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="display">{section.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

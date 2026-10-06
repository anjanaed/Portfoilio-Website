import { links, navSections } from "../assets/content";

const Navbar = () => (
  <header className="site-header">
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
        <a className="btn btn-ghost btn-sm" href={links.github} target="_blank" rel="noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 18l6-6-6-6" />
            <path d="M8 6l-6 6 6 6" />
          </svg>
          GitHub
        </a>
        <a className="btn btn-ghost btn-sm" href={links.linkedin} target="_blank" rel="noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  </header>
);

export default Navbar;

const isExternal = (href) => /^https?:\/\//.test(href);

const externalProps = (href) =>
  isExternal(href) ? { target: "_blank", rel: "noreferrer" } : {};

export const ArrowUpRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const Eyebrow = ({ num, label, className = "" }) => (
  <p className={`eyebrow mono ${className}`}>
    <b>{num}</b> &nbsp;/&nbsp; {label}
  </p>
);

export const Tags = ({ items, className = "" }) => (
  <div className={`tags ${className}`}>
    {items.map((tag) => (
      <span key={tag} className="tag mono">
        {tag}
      </span>
    ))}
  </div>
);

// Renders text links with an arrow. Entries without an href are skipped,
// and the row is hidden when none are left.
export const LinkRow = ({ items, className = "" }) => {
  const shown = items.filter((item) => item.href);
  if (shown.length === 0) return null;
  return (
    <div className={`links ${className}`}>
      {shown.map((item) => (
        <a key={item.label} className="textlink" href={item.href} {...externalProps(item.href)}>
          {item.label}
          <ArrowUpRight />
        </a>
      ))}
    </div>
  );
};

export const FeatureList = ({ items, className = "" }) => (
  <div className={className}>
    {items.map((item) => (
      <div key={item.title}>
        <p className="display feature-title">{item.title}</p>
        <p className="feature-body">{item.body}</p>
      </div>
    ))}
  </div>
);

import { links } from "../assets/content";
import { ArrowUpRight, Eyebrow, LinkedInIcon } from "./ui";

const Contact = () => (
  <section id="contact" className="section section-contact">
    <div className="wrap">
      <div className="card contact-card">
        <div className="contact-glow" aria-hidden="true" />
        <Eyebrow num="04" label="Contact" />
        <h2 className="display contact-title">Have a system to build, a problem to untangle?</h2>
        <p className="contact-lede">Send a note. I reply to everything!</p>
        <div className="contact-actions">
          <a className="btn btn-red" href={`mailto:${links.email}`}>
            {links.email}
            <ArrowUpRight />
          </a>
          <a className="btn btn-ghost" href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
            <span className="btn-text">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

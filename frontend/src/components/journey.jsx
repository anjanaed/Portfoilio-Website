import { journey } from "../assets/content";
import { Eyebrow } from "./ui";

const Journey = () => (
  <section id="journey" className="section">
    <div className="wrap">
      <Eyebrow num="03" label="Journey" />
      <h2 className="display section-title">Where I am, and what&apos;s next.</h2>

      <div className="timeline section-body">
        {journey.map((item) => (
          <div key={item.title} className="tl">
            <span className="tl-dot" aria-hidden="true" />
            <p className="mono kicker">{item.when}</p>
            <h3 className="display tl-title">{item.title}</h3>
            <p className="tl-place">{item.place}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Journey;

import { useEffect, useRef, useState } from "react";
import { problems } from "../assets/content";
import { Eyebrow, Tags } from "./ui";

const AUTOPLAY_MS = 6000;

const Profile = () => {
  const [idx, setIdx] = useState(0);
  const paused = useRef(false);
  const lastChange = useRef(Date.now());
  const count = problems.length;

  // Advance the carousel every 6 s, unless the visitor is hovering or focused
  // inside it, or prefers reduced motion.
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = setInterval(() => {
      if (paused.current || Date.now() - lastChange.current < AUTOPLAY_MS) return;
      lastChange.current = Date.now();
      setIdx((i) => (i + 1) % count);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  const goTo = (i) => {
    lastChange.current = Date.now();
    setIdx((i + count) % count);
  };
  const pause = () => {
    paused.current = true;
  };
  const resume = () => {
    paused.current = false;
    lastChange.current = Date.now();
  };

  // On tablets and phones the carousel takes the height of the current slide,
  // so short slides do not leave a big empty gap.
  const viewRef = useRef(null);
  const slideRefs = useRef([]);
  useEffect(() => {
    const view = viewRef.current;
    const slide = slideRefs.current[idx];
    if (!view || !slide || !window.matchMedia) return undefined;
    const mq = window.matchMedia("(max-width: 900px)");
    const fit = () => {
      view.style.height = mq.matches ? `${slide.offsetHeight}px` : "";
    };
    fit();
    const ro = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(fit);
    ro?.observe(slide);
    mq.addEventListener?.("change", fit);
    return () => {
      ro?.disconnect();
      mq.removeEventListener?.("change", fit);
    };
  }, [idx]);

  // Horizontal swipe on touch screens moves between slides.
  const touchStart = useRef(null);
  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) goTo(dx < 0 ? idx + 1 : idx - 1);
  };

  return (
    <section id="profile" className="section section-first">
      <div className="wrap">
        <Eyebrow num="01" label="Profile" />
        <h2 className="display section-title">Understand first, then build.</h2>

        <div className="g12 section-body">
          <div
            className="card span-8 problems"
            role="region"
            aria-roledescription="carousel"
            aria-label="Problems I have solved"
            onMouseEnter={pause}
            onMouseLeave={resume}
            onFocus={pause}
            onBlur={resume}
          >
            <div className="pview" ref={viewRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <div className="ptrack" style={{ transform: `translateX(${-idx * 100}%)` }}>
                {problems.map((problem, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      slideRefs.current[i] = el;
                    }}
                    className={`pslide${i === idx ? " on" : ""}`}
                    aria-hidden={i !== idx}
                  >
                    <p className="problem-text">{problem.text}</p>
                    <Tags items={problem.tags} />
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-controls">
              <div className="dots">
                {problems.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`dot${i === idx ? " on" : ""}`}
                    aria-label={`Show problem ${i + 1}`}
                    aria-current={i === idx}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>
              <div className="arrows">
                <button type="button" className="arrowbtn" aria-label="Previous problem" onClick={() => goTo(idx - 1)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button type="button" className="arrowbtn" aria-label="Next problem" onClick={() => goTo(idx + 1)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="card span-4 location">
            <svg viewBox="0 0 240 160" width="100%" height="150" role="img" aria-label="Orbit diagram" className="orbit">
              <ellipse cx="120" cy="80" rx="104" ry="52" fill="none" stroke="rgba(190,180,255,.28)" strokeDasharray="3 6" />
              <ellipse cx="120" cy="80" rx="64" ry="30" fill="none" stroke="rgba(190,180,255,.4)" />
              <circle cx="120" cy="80" r="14" fill="var(--accent)" />
              <circle cx="120" cy="80" r="26" fill="none" stroke="var(--accent)" strokeOpacity=".35" />
              <g className="orb">
                <circle cx="184" cy="80" r="5" fill="#fff" />
              </g>
              <g className="orb2">
                <circle cx="16" cy="80" r="4" fill="#9E97D0" />
              </g>
            </svg>
            <div>
              <p className="mono label">Based in</p>
              <p className="display location-city">Colombo, Sri Lanka</p>
              <p className="location-tz">UTC +05:30</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

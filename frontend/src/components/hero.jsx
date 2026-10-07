import { useRef, useState } from "react";
import { heroChips } from "../assets/content";
import { ArrowUpRight } from "./ui";
import profilePhoto from "../assets/profile.jpg";

const FACES = ["f1", "f2", "f3", "f4", "f5", "f6"];

const Cube = ({ kind }) => (
  <div className={`cube ${kind}`}>
    {FACES.map((face) => (
      <div key={face} className={`face ${face}`} />
    ))}
  </div>
);

const Hero = () => {
  const tiltRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const photoOn = hovered || pinned;

  // The tilt is written straight to the DOM so mouse moves do not re-render React.
  const setTilt = (x, y) => {
    if (tiltRef.current) {
      tiltRef.current.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
    }
  };

  const onMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt((-y * 16).toFixed(1), (x * 22).toFixed(1));
  };

  return (
    <section className="hero" onMouseMove={onMouseMove} onMouseLeave={() => setTilt(0, 0)}>
      <div className="wrap hero-row">
        <div className="hero-copy">
          <div className="rise hero-intro">
            <span className="accent-bar" aria-hidden="true" />
            <span className="hero-name">
              <span className="hero-hello">Hey there, I&apos;m</span>
              <button
                type="button"
                className="namebtn"
                aria-label="Anjana Edirisinghe, show my photo"
                aria-pressed={pinned}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onFocus={() => setHovered(true)}
                onBlur={() => setHovered(false)}
                onClick={() => setPinned((p) => !p)}
              >
                Anjana Edirisinghe
              </button>
            </span>
          </div>

          <h1 className="display rise rise-1 hero-title">
            Let&apos;s build something <span className="accent">that lasts.</span>
          </h1>

          <p className="rise rise-2 hero-lede">
            Building scalable full-stack applications, decentralized solutions, and seamless system integrations. Focused on delivering fast, reliable, and efficient solutions to unique requirements.
          </p>

          <div className="rise rise-3 hero-ctas">
            <a className="btn btn-red" href="#contact">
              Get in touch
              <ArrowUpRight />
            </a>
            <a className="btn btn-ghost" href="#work">
              See my projects
            </a>
          </div>
        </div>

        <div className="stage-wrap" aria-hidden="true">
          <div className={`stage${photoOn ? " photo-on" : ""}`}>
            <div className="halo" />
            <div className="tilt" ref={tiltRef}>
              <div className="ring ringB" />
              <div className="ring ringA" />
              <div className="cubewrap">
                <div className="spin">
                  <Cube kind="outer" />
                  <Cube kind="core" />
                </div>
              </div>
              <div className="plate">
                <img src={profilePhoto} alt="" />
              </div>
              {heroChips.map((chip) => (
                <div key={chip.label} className="chip3d" style={chip.style}>
                  <span className="chipin mono" style={{ animationDelay: chip.delay }}>
                    <i />
                    {chip.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="floor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

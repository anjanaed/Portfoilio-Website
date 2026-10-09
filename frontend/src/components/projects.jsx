import { Fragment } from "react";
import {
  links,
  vaultNodes,
  vaultFeatures,
  voicePoints,
  voiceSteps,
} from "../assets/content";
import { Eyebrow, FeatureList, LinkRow, Tags } from "./ui";

const pad = (n) => String(n).padStart(2, "0");

const StryderVault = () => (
  <article className="card span-12 project vault">
    <div className="vault-head">
      <div>
        <p className="mono kicker">Chapter 01 · Digital Rights Management System (SaaS)</p>
        <h3 className="display project-title project-title-xl">Stryder Vault</h3>
      </div>
      <div className="vault-aside">
        <p className="mono meta">2026 Q3 – Now</p>
        <LinkRow items={[{ label: "Visit Stryder Vault", href: links.stryderVault }]} />
      </div>
    </div>

    <p className="lead">
      A multi-tenant SaaS platform for secure video delivery, built for course creators and learning platforms. A publisher uploads a raw video, and the system transcodes it into adaptive qualities, encrypts it and keeps it in private storage. Only authorized viewers can play it, through a player that shows a moving watermark carrying the viewer&apos;s identity, with watch time metered from verified delivery. The platform includes a console for publishers, a partner API that a learning management system plugs into, an admin portal, and an autoscaler that adds processing capacity whenever the queue grows. It was designed to keep protection costs close to zero, so low pricing stays viable.
    </p>

    <div className="pipeline" role="img" aria-label="Pipeline: resumable upload, transcode, encrypt, edge delivery, watermarked playback">
      {vaultNodes.map((node, i) => (
        <Fragment key={node.step}>
          {i > 0 && <div className="pipe-link" aria-hidden="true" />}
          <div className="node" style={{ animationDelay: `${i * 0.8}s` }}>
            <p className="mono node-step">{node.step}</p>
            <p className="display node-label">{node.label}</p>
            <p className="node-sub">{node.sub}</p>
          </div>
        </Fragment>
      ))}
    </div>

    <FeatureList items={vaultFeatures} className="features" />

    <Tags items={["Content Protection", "Multi-tenant SaaS", "Secure Streaming", "Adaptive Quality", "Cost Engineering"]} />
  </article>
);

const VoicePipeline = () => (
  <article className="card span-8 voice">
    <div className="c2grid">
      <div className="voice-main">
        <div>
          <p className="mono kicker">Chapter 02 · Voice Agent Integration</p>
          <h3 className="display project-title">Voice AI Agent Pipeline</h3>
          <p className="mono meta meta-spaced">2026 Q1 – Q2</p>
          <p className="lead lead-spaced">
            A LiveKit-based agent platform designed to be offered as a service. Speech goes in over WebRTC, comes out of a custom Ballerina LLM adapter, and returns as streamed audio, one conversational turn at a time.
          </p>
        </div>
        <FeatureList items={voicePoints} className="points" />
        <Tags items={["LiveKit", "WebRTC", "Voice Pipelines", "Integration"]} />
        <LinkRow
          className="push-down"
          items={[
            { label: "View Documentation", href: links.voiceDocs },
            { label: "View repository", href: links.voiceRepo },
          ]}
        />
      </div>

      <div className="vpanel">
        <p className="mono label label-sm">Pipeline</p>
        <ol className="vflow" aria-label="Pipeline: client connection, voice activity detection, speech to text, language model, text to speech">
          {voiceSteps.map((step, i) => (
            <li key={step.title} className="vstep">
              <span className="vdot mono" style={{ animationDelay: `${i * 0.8}s` }}>
                {pad(i + 1)}
              </span>
              <div>
                <p className="display vstep-title">{step.title}</p>
                <p className="vstep-sub">{step.sub}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </article>
);

const Projects = () => (
  <section id="work" className="section">
    <div className="wrap">
      <Eyebrow num="02" label="Projects" />
      <h2 className="display section-title">What I&apos;ve built, chapter by chapter.</h2>

      <div className="g12 section-body">
        <StryderVault />
        <VoicePipeline />
      </div>
    </div>
  </section>
);

export default Projects;

import { Fragment } from "react";
import {
  links,
  vaultNodes,
  vaultFeatures,
  voicePoints,
  voiceSteps,
  defundSteps,
  degovFeatures,
  empsyncPoints,
  techStack,
} from "../assets/content";
import { Eyebrow, FeatureList, LinkRow, Tags } from "./ui";

const pad = (n) => String(n).padStart(2, "0");

const DegovIcon = ({ name }) => {
  const paths = {
    voting: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
    petitions: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8M8 17h8" />
      </>
    ),
    whistleblowing: (
      <>
        <path d="M3 11l18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </>
    ),
    spending: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-6" />
      </>
    ),
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
};

const StryderVault = () => (
  <article className="card span-12 project vault">
    <div className="vault-head">
      <div>
        <p className="mono kicker">Chapter 01 · Digital Rights Management System (SaaS)</p>
        <h3 className="display project-title project-title-xl">Stryder Vault</h3>
      </div>
      <div className="vault-aside">
        <p className="mono meta">2026 Q3 – Now</p>
        <LinkRow items={[{ label: "Visit Stryder Vault", href: links.stryderVault, alwaysShow: true }]} />
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

const DeFund = () => (
  <article className="card span-4 project defund">
    <div>
      <p className="mono kicker">Chapter 03 · Decentralized crowdfunding</p>
      <h3 className="display project-title">DeFund</h3>
      <p className="lead lead-spaced">
        Crowdfunding platforms fail when all the capital is released upfront, leaving contributors exposed to abandonment and fraud. DeFund closes that trust gap by building accountability into the protocol: funds sit in smart-contract escrow, and are released in stages only when contributors vote that a milestone, backed by proof of work, is complete.
      </p>
    </div>
    <ol className="numbered">
      {defundSteps.map((step, i) => (
        <li key={step.title}>
          <span className="mono num">{pad(i + 1)}</span>
          <div>
            <p className="display step-title">{step.title}</p>
            <p className="step-sub">{step.sub}</p>
          </div>
        </li>
      ))}
    </ol>
    <Tags className="push-down" items={["Solidity", "IPFS", "JavaScript", "React"]} />
    <LinkRow
      items={[
        { label: "Visit DeFund", href: links.defundLive, alwaysShow: true },
        { label: "View repository", href: links.defundRepo, alwaysShow: true },
      ]}
    />
  </article>
);

const DeGov = () => (
  <article className="card span-6 project degov">
    <div>
      <p className="mono kicker">Chapter 04 · Transparent governance on-chain</p>
      <h3 className="display project-title">DeGov</h3>
      <p className="lead lead-spaced">
        A full-stack platform for government transparency: voting, petitions, whistleblowing and public spending tracking. Blockchain calls sit in their own microservice, with Web3 wallet support on the Sepolia testnet.
      </p>
    </div>
    <div className="tiles">
      {degovFeatures.map((item) => (
        <div key={item.title} className="tile">
          <DegovIcon name={item.icon} />
          <p className="display step-title tile-title">{item.title}</p>
          <p className="tile-body">{item.body}</p>
        </div>
      ))}
    </div>
    <Tags items={["Solidity", "Ballerina", "React", "PostgreSQL"]} />
    <LinkRow
      className="push-down"
      items={[
        { label: "Visit DeGov", href: links.degovLive },
        { label: "View repository", href: links.degovRepo },
      ]}
    />
  </article>
);

const EmpSync = () => (
  <article className="card span-6 project empsync">
    <div>
      <p className="mono kicker">Chapter 05 · Employee Management System</p>
      <h3 className="display project-title">EmpSync</h3>
      <p className="mono meta meta-spaced">2025 Q1 – Q3</p>
      <p className="lead lead-spaced">
        A software as a service (SaaS) based employee management system designed to handle core HR tasks and meal handling processes. It was a team project.
      </p>
    </div>
    <FeatureList items={empsyncPoints} className="features features-ruled" />
    <Tags items={["React", "NestJS", "PostgreSQL", "Prisma (ORM)", "Auth0"]} />
    <LinkRow
      className="push-down"
      items={[
        { label: "Visit EmpSync", href: links.empsyncLive },
        { label: "View repository", href: links.empsyncRepo },
      ]}
    />
  </article>
);

const MoreWork = () => (
  <article className="card more">
    <div className="more-copy">
      <p className="mono kicker">And there is more</p>
      <h3 className="display more-title">Check out more interesting projects and articles</h3>
    </div>
    <div className="more-actions">
      <a className="btn btn-light btn-social" href={links.github} target="_blank" rel="noreferrer">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
        <span className="social-label">
          <span className="social-name">GitHub</span>
          <span className="mono social-handle">@anjanaed</span>
        </span>
      </a>
      <a className="btn btn-light btn-social" href={links.medium} target="_blank" rel="noreferrer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
        <span className="social-label">
          <span className="social-name">Medium</span>
          <span className="mono social-handle">@anjanaape</span>
        </span>
      </a>
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
        <DeFund />
        <DeGov />
        <EmpSync />
      </div>

      <div className="stack">
        <p className="mono kicker">Technologies &amp; Frameworks Used</p>
        <Tags className="stack-tags" items={techStack} />
      </div>

      <MoreWork />
    </div>
  </section>
);

export default Projects;

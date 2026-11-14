// All copy and links for the portfolio live here.
// A link set to null is hidden on the page, so fill it in to show it.

export const links = {
  github: "https://github.com/anjanaed",
  linkedin: "https://www.linkedin.com/in/anjana-ed/",
  medium: "https://medium.com/@anjanaape",
  email: "anjanaape@gmail.com",

  stryderVault: null,
  voiceDocs: null,
  voiceRepo: "https://github.com/anjanaed/pipeline",
  defundLive: null,
  defundRepo: null,
  degovLive: "https://degov.ddns.net/",
  degovRepo: "https://github.com/Imashanilupul/iwb25-089-syntaxsquad",
  empsyncLive: "https://empsync.duckdns.org/",
  empsyncRepo: "https://github.com/anjanaed/EmpSync",
};

export const navSections = [
  { id: "profile", label: "Profile" },
  { id: "work", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export const heroChips = [
  { label: "Integration", style: { left: "2%", top: "17%", transform: "translateZ(110px)" }, delay: "0s" },
  { label: "SaaS", style: { right: 0, top: "31%", transform: "translateZ(150px)" }, delay: "-2s" },
  { label: "Full-Stack", style: { left: "8%", top: "73%", transform: "translateZ(160px)" }, delay: "-4s" },
  { label: "Blockchain", style: { right: "10%", top: "84%", transform: "translateZ(90px)" }, delay: "-5.5s" },
];

export const problems = [
  {
    text: "When protecting video content against illegal downloads, paying enterprise-grade pricing is rarely necessary unless you are guarding top-secret state intelligence. I analyzed the real threat model, casual users leveraging browser extensions or re-uploading content for profit, and built a cost-effective Digital Rights Management solution from scratch. Instead of relying on expensive cloud infrastructure like AWS, I engineered a custom dynamic compute program on a cheaper provider to keep operational costs low.",
    tags: ["Threat modelling", "DRM", "Cost-efficient infra"],
  },
  {
    text: "When real-time audio streams overwhelm an agent's reasoning loop, running everything in a single runtime is usually the culprit. I prototyped three architectures before splitting the workload cleanly, Python and LiveKit to handle heavy WebRTC media, STT, and TTS streams, and a standalone runtime strictly for agentic orchestration. After refactoring state synchronization and payload bindings between the two runtimes, the pipeline stayed responsive under load.",
    tags: ["Voice AI Agent", "Low Latency Communication", "Pipeline Orchestration", "Integration"],
  },
  {
    text: "Decentralized crowdfunding platforms frequently fail because releasing 100% of capital upfront exposes contributors to abandonment and fraud. I came up with the idea to build DeFund to eliminate this trust gap by embedding financial accountability directly into the protocol. The core solution utilizes Solidity smart contracts for secure escrow, IPFS for immutable proof-of-work validation, and contributor-weighted voting to release funds incrementally only upon verified milestone completion.",
    tags: ["Transparency", "Decentralization", "Secured Fund Management"],
  },
  {
    text: "Public trust in government operations is routinely undermined by a lack of transparency, hidden budget allocations, and opaque decision-making. We built DeGov, a decentralized governance platform leveraging blockchain technology and smart contracts to enforce transparency and state accountability. The core solution provides public visibility into national budgets, development fund distributions, and citizen petitions, backed by a dual-layer architecture featuring automated blockchain synchronization to audit and protect off-chain databases against unauthorized tampering. Even though government agencies rarely adopt solutions of this scale, this project won a competitive hackathon.",
    tags: ["Governance Transparency", "Immutable Records", "Blockchains"],
  },
];

export const vaultNodes = [
  { step: "01", label: "Upload", sub: "Resumable uploads" },
  { step: "02", label: "Transcode", sub: "Adaptive quality ladder" },
  { step: "03", label: "Encrypt", sub: "Rotating content keys" },
  { step: "04", label: "Edge Server", sub: "Served from the edge" },
  { step: "05", label: "Play", sub: "Watermarked player" },
];

export const vaultFeatures = [
  {
    title: "Leak-resistant encryption",
    body: "Every video is encrypted with keys that rotate every few minutes, so one leaked key exposes only a short stretch of a video, never the whole thing.",
  },
  {
    title: "Zero licensing fees",
    body: "Key management is self-hosted, so protection adds no per-viewer cost. In a modelled analysis, a vendor DRM service would have cut gross margin from about 87% to about 64%.",
  },
  {
    title: "Fast, elastic delivery",
    body: "Encrypted video is served from the edge instead of the main server, and extra processing capacity is rented only while there is a backlog. Measured encode speedups ranged from 1.07× to 1.69× depending on content.",
  },
  {
    title: "Traceable playback",
    body: "A moving watermark carries the viewer's identity, each viewer plays on one device at a time, and watch time is metered from verified delivery, not from client reports. Reworking the first token exchange cut it from 27 to 18 database queries, about a third fewer.",
  },
];

export const voicePoints = [
  {
    title: "Streaming, not buffering",
    body: "Reworked the Ballerina WebSocket adapter from full-buffer emission to streaming sentence detection, so speech synthesis can start earlier in each reply.",
  },
  {
    title: "Latency traced to the mesh",
    body: "Per-turn profiling of VAD, STT, LLM and TTS showed 20 to 100 second stalls on Choreo against milliseconds locally, caused by the sidecar and network layer, not the models.",
  },
  {
    title: "Stability under load",
    body: "Found event-loop blocking behind STT queue growth, traced OOM kills to eager model preloading, and reviewed a Kubernetes layout for SFU pods, Redis and worker placement.",
  },
];

export const voiceSteps = [
  { title: "Client", sub: "LiveKit Connection" },
  { title: "Voice Activity Detection", sub: "Silero" },
  { title: "Speech to Text", sub: "Deepgram / ElevenLabs" },
  { title: "LLM", sub: "Via Ballerina Adapter" },
  { title: "Text to Speech", sub: "Deepgram / ElevenLabs" },
];

export const defundSteps = [
  { title: "Contributors fund", sub: "Capital goes into escrow, not to the project" },
  { title: "Milestone proof", sub: "The team submits proof of completed work" },
  { title: "Contributors vote", sub: "Votes are weighted by contribution" },
  { title: "Funds released", sub: "Only a verified milestone unlocks the next tranche" },
];

export const degovFeatures = [
  { icon: "voting", title: "Voting", body: "Ballots recorded on-chain" },
  { icon: "petitions", title: "Petitions", body: "Public, verifiable support" },
  { icon: "whistleblowing", title: "Whistleblowing", body: "Reports that cannot be quietly erased" },
  { icon: "spending", title: "Spending tracking", body: "Public money followed end to end" },
];

export const empsyncPoints = [
  {
    title: "Full-stack architecture",
    body: "Led the team and designed the frontend, backend and database for the HR processes.",
  },
  {
    title: "Salary and pay slips",
    body: "A custom algorithm computes salaries, and pay slip PDFs are generated automatically.",
  },
  {
    title: "Dual authentication flows",
    body: "Separate Auth0 flows for tenant-level users and super admin access.",
  },
  {
    title: "CI/CD and deployment",
    body: "Automated testing and deployment pipelines, with SSL and performance tuning for lower latency.",
  },
];

export const techStack = [
  "JavaScript / TypeScript",
  "Python",
  "C",
  "Solidity",
  "Node.js / Express.js",
  "NestJS",
  "Laravel",
  "Ballerina",
  "React",
  "Next.js",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "CI/CD (GitHub Actions)",
  "Docker",
  "Firebase & Auth0 Authentication",
];

export const journey = [
  {
    when: "Now · 2023 – 2027",
    title: "B.Sc. (Hons) Information Technology & Management",
    place: "University of Moratuwa, Sri Lanka",
  },
  {
    when: "Internship · 2026",
    title: "Software Engineering Intern",
    place: "WSO2, Colombo, Sri Lanka",
  },
  {
    when: "Earlier · 2019 – 2022",
    title: "G.C.E Advanced Level, Physical Science",
    place: "Bandaranayake College, Gampaha",
  },
];

import project2 from "./projects/project2.png";
import project3 from "./projects/port.png";
import project4 from "./projects/block.jpg";
import project5 from "./projects/empsync.png";
import project6 from "./projects/pharmacy.jpg";
import project7 from "./projects/laravel.jpg";
import project8 from "./projects/degov.png";

export const about = `An ambitious IT undergraduate at the University of Moratuwa, I specialize in full-stack web development with a focus on building scalable, efficient, and user-friendly applications. My work spans both frontend and backend development, combining modern frameworks and best practices to deliver high-quality software solutions. Alongside my core expertise, I have hands-on experience in blockchain development, particularly with Solidity and decentralized application design, allowing me to explore innovative solutions at the edge of web and blockchain technologies. I’m driven by a commitment to clean architecture, continuous learning, and impactful engineering.`;

export const introduction = `I'm Anjana Edirisinghe, a 3rd year IT & M undergraduate at the University of Moratuwa, Sri Lanka, specializing in full-stack web development and blockchain technologies. I’m driven by a strong interest in building scalable, reliable, and user-centered digital solutions. My work spans both frontend and backend development, with experience in designing systems that bridge modern web applications and decentralized platforms. I approach every project with a focus on clean architecture, performance, and long-term impact. When I’m not coding, you’ll find me diving into the latest in automotive tech and space exploration.`;

export const Education = [
  {
    year: "2023 - Present",
    degree: "BSc (Hons) in Information Technology & Management",
    school: "University of Moratuwa",
    description:
      "I chose to pursue a degree in Information Technology at the University of Moratuwa, currently in my second year. I'm actively building a strong technical foundation through my coursework, aiming to leverage this comprehensive education for a successful career in technology.",
    grades: ["Software Engineering"],
  },
  {
    year: "2019 - 2022",
    degree: "GCE Advanced Level",
    school: "Bandaranayake College, Gampaha",
    description:
      "I pursued my Advanced Level studies in the Physical Science stream, focusing on Mathematics, Physics, and Information Technology. Through dedication and hard work, my results earned me a place at a prestigious government university",
    grades: ["Combined Mathematics", "Physics", "Information Technology"],
  },
];

export const Projects = [
  {
    title: "EmpSync",
    img: project5,
    description:
      "EmpSync is a SaaS-based employee management system designed to streamline HR processes such as attendance tracking, leave management, and payroll generation. Built with modern technologies, it offers an intuitive interface and robust backend to help organizations efficiently manage their workforce data.",
    tech: ["React", "NestJs", "PostgreSQL", "Prisma"],
    link: "https://github.com/anjanaed/EmpSync",
    live: "https://empsync.duckdns.org/" 
    
  },
  {
    title: "Pharmacy Queue Management System",
    img: project6,
    description:
      "A token-based queue management system for pharmacies that automates customer prescriptions handling, employee shift tracking, and order processing. It improves service efficiency by generating queue tokens, displaying real-time order status, and providing detailed employee performance reports.",
    tech: ["React", "Node", "MongoDB"],
    link: "https://github.com/anjanaed/Pharmacy-Queue-Management-System",
    live: "https://pharmy.ddns.net/" 
  },
    {
    title: "Decentralized Transparent Governance Platform",
    img: project8,
    description:
      "A full-stack blockchain platform designed to enhance government transparency and citizen engagement. The system enables secure democratic voting, digital petitions, whistleblowing, policy management, and public spending tracking. Built on a microservice architecture, it separates blockchain interactions from general application logic, ensuring scalability, reliability, and seamless synchronization with decentralized storage and Web3 wallet integration on the Sepolia testnet.",
    tech: ["Ballerina", "React", "Solidity", "PostgreSQL"],
    link: "https://github.com/Imashanilupul/iwb25-089-syntaxsquad",
    live: "https://degov.ddns.net/" 
  },
  {
    title: "Portfolio",
    img: project3,
    description:
      "Built my own portfolio website which you are currently looking at. Used react frontend technology with framer library",
    tech: ["React", "Framer", "Tailwind"],
    link: "https://github.com/anjanaed/Portfoilio-Website",
    live: "https://anji.online/" 
  },
  {
    title: "Learning Management System (Laravel)",
    img: project7,
    description:
      "A full-stack web application combining Laravel for the backend API and React for the frontend UI. It demonstrates seamless integration between a PHP-based RESTful API and a modern React interface, enabling efficient data management and dynamic user interactions.",
    tech: ["React", "Laravel"],
    link: "https://github.com/anjanaed/Laravel-React-App",
  },
  {
    title: "Blockchain Fee Alerting System",
    img: project4,
    description:
      "This will always check on current fee levels(gwei) and once it arrive at given gas limits, this will automatically send a message to user's telegram acc with relevant data. Low-spec VPS will be enough for the process. ",
    tech: ["Python", "Web3", "Telethon", "REST-API"],
    link: "https://github.com/anjanaed/Blockchain-GasFee-Alerting",
  },
      {
        title:"Apple Website Clone",
        img:project2,
        description:"Recreated Apple official home page and the support page only using HTML,CSS,JS",
        tech:["HTML","CSS","Javascript"],
    link: "https://github.com/anjanaed/apple.com-clone",
    live: "https://anjanaed.github.io/apple.com-clone" 
    },
  

];

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
  { label: "Blockchain", style: { left: "2%", top: "17%", transform: "translateZ(110px)" }, delay: "0s" },
  { label: "SaaS", style: { right: 0, top: "31%", transform: "translateZ(150px)" }, delay: "-2s" },
  { label: "Full-Stack", style: { left: "8%", top: "73%", transform: "translateZ(160px)" }, delay: "-4s" },
  { label: "Integration", style: { right: "10%", top: "84%", transform: "translateZ(90px)" }, delay: "-5.5s" },
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

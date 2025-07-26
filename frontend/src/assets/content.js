import project2 from "./projects/project2.png";
import project3 from "./projects/port.png";
import project4 from "./projects/block.jpg";
import project5 from "./projects/empsync.png";
import project6 from "./projects/Pharmacy.jpg";
import project7 from "./projects/laravel.jpg";

export const about = `An ambitious IT undergraduate at the University of Moratuwa, I specialize in full-stack web development with a focus on building scalable, efficient, and user-friendly applications. My work spans both frontend and backend development, combining modern frameworks and best practices to deliver high-quality software solutions. Alongside my core expertise, I have hands-on experience in blockchain development, particularly with Solidity and decentralized application design, allowing me to explore innovative solutions at the edge of web and blockchain technologies. I’m driven by a commitment to clean architecture, continuous learning, and impactful engineering.`;

export const introduction = `I'm Anjana Edirisinghe, a 23 year old IT undergraduate at the University of Moratuwa, Sri Lanka, specializing in full-stack web development and blockchain technologies. I’m driven by a strong interest in building scalable, reliable, and user-centered digital solutions. My work spans both frontend and backend development, with experience in designing systems that bridge modern web applications and decentralized platforms. I approach every project with a focus on clean architecture, performance, and long-term impact. When I’m not coding, you’ll find me diving into the latest in automotive tech and space exploration.`;

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
    
  },
  {
    title: "Pharmacy Queue Management System",
    img: project6,
    description:
      "A token-based queue management system for pharmacies that automates customer prescriptions handling, employee shift tracking, and order processing. It improves service efficiency by generating queue tokens, displaying real-time order status, and providing detailed employee performance reports.",
    tech: ["React", "Node", "MongoDB"],
    link: "https://github.com/anjanaed/Pharmacy-Queue-Management-System",
  },
  {
    title: "Portfolio",
    img: project3,
    description:
      "Built my own portfolio website which you are currently looking at. Used react frontend technology with framer library",
    tech: ["React", "Framer", "Tailwind"],
    link: "https://github.com/anjanaed/Portfoilio-Website",
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
    },
  

];

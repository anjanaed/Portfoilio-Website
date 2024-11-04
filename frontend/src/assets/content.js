import project1 from "./projects/project1.png"
import project2 from "./projects/project2.png"
import project3 from "./projects/port.png"
import project4 from "./projects/block.jpg"


export const about=`An ambitious IT undergraduate at the University of Moratuwa, passionate about blockchain technology and full-stack development. With a solid foundation in modern web technologies including React and the MERN stack, complemented by proficiency in Python, Solidity, and C, I am positioned at the intersection of traditional software development and blockchain innovation. My expertise in Solidity and keen interest in decentralized technologies drives my mission to architect secure, scalable blockchain solutions. I aim to contribute to the Web3 ecosystem by building decentralized applications that bridge the gap between conventional systems and the blockchain future, while continuously exploring emerging technologies in this rapidly evolving space`

export const introduction=`I'm Anjana Edirisinghe, a 22-year-old IT undergraduate at the University of Moratuwa from Sri Lanka. With a deep passion for cars, rockets, and all things science, I channel my technical creativity into blockchain development and web technologies. I work with React, the MERN stack, Python, and Solidity, building towards a future in blockchain innovation. When I'm not coding, you'll find me exploring the latest in automotive technology and space exploration.`

export const Education=[{
    year:"2023 - Present",
    degree:"BSc (Hons) in Information Technology & Management",
    school:"University of Moratuwa",
    description:"I chose to pursue a degree in Information Technology at the University of Moratuwa, currently in my second year. I'm actively building a strong technical foundation through my coursework, aiming to leverage this comprehensive education for a successful career in technology."
    ,grades:[],    
},
{
    year:"2019 - 2022",
    degree:"GCE Advanced Level",
    school:"Bandaranayake College, Gampaha",
    description:"I pursued my Advanced Level studies in the Physical Science stream, focusing on Mathematics, Physics, and Information Technology. Through dedication and hard work, my results earned me a place at a prestigious government university"
    ,grades:["IT: A", "Physics: C", "Combine Math: C","Z-Score: 1.378"]
},{
    year:"2016 - 2018",
    degree:"GCE Ordinary Level",
    school:"Thakshila College, Gampaha",
    description:"In O/L i studied nine subjects which are Maths, Science, English, Sinhala, Music, Business Studies, ICT, History, Buddhism. Through consistency and hard work, i got distinction passes for all subjects"
    ,grades:["9As"]
}
]

export const Projects=[
    {
        title:"Book Store",
        img:project1,
        description:"Fully functional Book store web application developed using MERN stack.",
        tech:["React","Node","Mongodb","Express"]
    },
    {
        title:"Apple Website Clone",
        img:project2,
        description:"Recreated Apple official home page and the support page only using HTML,CSS,JS",
        tech:["HTML","CSS","Javascript"]
    },
    {
        title:"Portfolio",
        img:project3,
        description:"Built my own portfolio website which you are currently in. Used react frontend technology with framer library",
        tech:["React","Framer","Tailwind"]
    },
    {
        title:"Blockchain Fee Alerting System",
        img:project4,
        description:"This will always check on current fee levels(gwei) and once it arrive at given gas limits, this will automatically send a message to user's telegram acc with relevant data. Low-spec VPS will be enough for the process. VISIT MY GITHUB TO EXPLORE MORE INTERESTING PROJECTS ",
        tech:["Python","Web3","Telethon","REST-API"]
    }

]
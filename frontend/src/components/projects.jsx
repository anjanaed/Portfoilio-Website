import { Projects } from "../assets/content"
import {motion} from "framer-motion"

const Project=()=>{

    return(
        <div className="overflow-hidden border-b border-neutral-900 pb-4">
            <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-50}} transition={{duration:0.5,delay:0.2}} className="my-20 text-center text-4xl">Projects</motion.h1>
            <div>
                {Projects.map((project,index)=>(
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:0.7,delay:0.1}} className="w-full lg:w-1/4">
                        <img className="mb-6 rounded" width={150} height={150} src={project.img}/>
                        </motion.div>
                        <motion.div initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={{duration:0.7,delay:0.1}} className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.tech.map((tec,index)=>(
                            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500" key={index}>{tec}</span>
                        ))}
                        </motion.div>
                        

                    </div>
                ))}
            </div>
        </div>

    )
}

export default Project
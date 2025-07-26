import { introduction } from "../assets/content"
import profilePicture from "../assets/pp.jpg"
import {motion} from "framer-motion"

const motions=(delay)=>({
    pre:{x:-100, opacity:0},
    post:{x:0,opacity:1, transition:{duration:0.5, delay:delay},},
})

const antiMotions=(delay)=>({
    pre:{x:100,opacity:0},
    post:{x:0,opacity:1, transition:{duration:0.5, delay:delay}},
    postimg:{x:0,opacity:1, transition:{duration:0.8, delay:delay}},
})


const Intro=()=>{
    return(
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start overflow-hidden">
                        <motion.h1 variants={motions(0.2)} initial="pre" animate="post" className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
                            Anjana Edirisinghe
                        </motion.h1>
                        <motion.span variants={motions(0.6)} initial="pre" animate="post" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text lg:text-3xl text-2xl tracking-tight text-transparent text-center">
                            Student Full Stack Developer
                        </motion.span>
                        <motion.p variants={motions(1)} initial="pre" animate="post" className="my-2 max-w-xl py-6 font-light tracking-tighter lg:text-justify">
                            {introduction}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-45 lg:p-8">
                <div className="flex justify-center">
                    <motion.img whileHover={{scale:1.02,transition:{duration:0.5,ease:"easeIn"}}} variants={antiMotions(1.5)} initial="pre" animate="postimg"className="rounded-full" src={profilePicture}/> 
                </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
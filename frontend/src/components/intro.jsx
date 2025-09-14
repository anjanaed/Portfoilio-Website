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
            <div className="flex flex-wrap justify-center lg:justify-between lg:items-center">
                <div className="w-full md:w-10/12 lg:w-1/2">
                    <div className="flex mb-3 flex-col w-full max-w-[36rem] mx-auto items-center lg:items-start overflow-hidden px-4 md:px-6">
                        <motion.h1
                            variants={motions(0.2)}
                            initial="pre"
                            animate="post"
                            className="pb-8 lg:pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-center lg:text-left"
                        >
                            Anjana Edirisinghe
                        </motion.h1>
                        {/* Mobile image directly under the name */}
                        <div className="w-full block md:hidden">
                            <div className="flex justify-center">
                                <motion.img
                                    whileHover={{ scale: 1.02, transition: { duration: 0.5, ease: "easeIn" } }}
                                    variants={antiMotions(0.8)}
                                    initial="pre"
                                    animate="postimg"
                                    className="rounded-full mb-4"
                                    src={profilePicture}
                                />
                            </div>
                        </div>
                        <motion.span
                            variants={motions(0.6)}
                            initial="pre"
                            animate="post"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text lg:text-3xl text-2xl tracking-tight text-transparent text-center"
                        >
                            Student Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={motions(1)}
                            initial="pre"
                            animate="post"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify"
                        >
                            {introduction}
                        </motion.p>
                        <div className="w-full flex flex-col items-center">
                            <motion.a
                                variants={motions(1.2)}
                                initial="pre"
                                animate="post"
                                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                                whileTap={{ scale: 0.98 }}
                                href="/Resume - Anjana Edirisinghe .pdf"
                                download="Anjana_Edirisinghe_Resume.pdf"
                                className="mt-2 mb-6 flex w-[15rem] sm:max-w-sm justify-center rounded-full bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-600 px-8 py-3 text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:from-pink-600 hover:via-slate-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            >
                                Download Resume
                            </motion.a>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-10/12 lg:w-1/2 lg:p-8 lg:flex lg:items-center">
                <div className="hidden md:flex justify-center">
                    <motion.img whileHover={{scale:1.02,transition:{duration:0.5,ease:"easeIn"}}} variants={antiMotions(1.5)} initial="pre" animate="postimg"className="rounded-full" src={profilePicture}/> 
                </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
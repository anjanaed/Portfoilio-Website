import {RiReactjsLine} from "react-icons/ri"
import {SiSolidity} from "react-icons/si"
import {SiPython} from "react-icons/si"
import {SiCplusplus} from "react-icons/si"
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import {motion} from "framer-motion"


const motions=(duration)=>({
    pre:{y:-10},
    post:{y:[10,-10],
        transition:{duration:duration,
        ease:"linear",
        repeat: Infinity,
        repeatType:"reverse",}
    }

})


const Techs=()=>{

    return(
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-50}} transition={{duration:0.5,delay:0.2}} className="my-20 text-center text-4xl">Technologies</motion.h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div variants={motions(2.5)} initial="pre" animate="post" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div variants={motions(2.6)} initial="pre" animate="post" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSolidity className="text-7xl text-gray-500"/>
                </motion.div>
                <motion.div variants={motions(2.7)} initial="pre" animate="post" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className="text-7xl text-blue-300"/>
                </motion.div>
                <motion.div variants={motions(2.8)} initial="pre" animate="post" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-400"/>
                </motion.div>
                <motion.div variants={motions(2.9)} initial="pre" animate="post" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCplusplus className="text-7xl text-blue-600"/>
                </motion.div>
                <motion.div variants={motions(3.0)} initial="pre" animate="post" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className="text-7xl text-yellow-400"/>
                </motion.div>
                <motion.div variants={motions(3.1)} initial="pre" animate="post" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiHtml5 className="text-7xl text-orange-700"/>
                </motion.div>
                <motion.div variants={motions(3.2)} initial="pre" animate="post" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500"/>
                </motion.div>

            </div>
        </div>
    )
}

export default Techs
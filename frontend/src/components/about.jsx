import profilePicture from "../assets/sticker.png"
import { about } from "../assets/content"
import {motion} from "framer-motion"

const About=()=>{
    return(
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="overflow-hidden flex flex-wrap">
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.8, delay:0.2}} className="w-full lg:w-2/5 lg:p-8">
                    <div className=" flex items-center justify-center">
                        <img width={300} src={profilePicture}/>
                    </div>
                </motion.div>
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.8, delay:0.2}} className="w-full lg:w-45">
                <div className=" flex justify-center lg:justify-start text-center">
                    <p className="my-5 max-w-xl py-8  text-justify text-center">{about}</p>
                </div>

                </motion.div>
            </div>
        </div>
    )
}

export default About
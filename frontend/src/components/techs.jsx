import {RiReactjsLine} from "react-icons/ri"
import {SiSolidity} from "react-icons/si"
import {SiPython} from "react-icons/si"
import {SiCplusplus} from "react-icons/si"
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";



const Techs=()=>{

    return(
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSolidity className="text-7xl text-gray-500"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className="text-7xl text-blue-300"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-400"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCplusplus className="text-7xl text-blue-600"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className="text-7xl text-yellow-400"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiHtml5 className="text-7xl text-orange-700"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500"/>
                </div>

            </div>
        </div>
    )
}

export default Techs
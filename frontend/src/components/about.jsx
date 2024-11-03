import profilePicture from "../assets/pp.jpg"
import { introduction } from "../assets/content"

const About=()=>{
    return(
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-2/5 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-xl" src={profilePicture}/>
                    </div>
                </div>
                <div className="w-full lg:w-45">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-5 max-w-xl py-8 ml-14">{introduction}</p>
                </div>

                </div>
            </div>
        </div>
    )
}

export default About
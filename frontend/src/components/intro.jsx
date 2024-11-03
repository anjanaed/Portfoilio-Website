import { introduction } from "../assets/content"
import profilePicture from "../assets/pp.jpg"

const Intro=()=>{
    return(
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
                            Anjana Edirisinghe
                        </h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Blockchain Developer
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {introduction}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-45 lg:p-8">
                <div className="flex justify-center">
                    <img className="rounded-2xl" src={profilePicture}/> 
                </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
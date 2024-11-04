import { Education } from "../assets/content";
import {motion} from "framer-motion"


const Educationn = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <motion.h1 initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className="my-20 text-center text-4xl">Education</motion.h1>
      <div>
        {Education.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{ duration:0.7,delay:0.1}} className=" w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
            </motion.div>
            <motion.div initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={{duration:0.7,delay:0.1}} className=" w-full max-w-2xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {education.degree} -{" "}
                <span className="text-sm text-purple-100">
                  {education.school}
                </span>
              </h6>
              <p className="text-justify mb-4 text-neutral-400">{education.description}</p>
              {education.grades.map((grade, index) => (
                <span
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                  key={index}
                >
                  {grade}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educationn;

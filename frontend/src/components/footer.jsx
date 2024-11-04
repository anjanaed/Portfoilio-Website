import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="border-b border-neutral-900">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">
        Contact me
      </motion.h1>
      <div className=" mb-8 flex flex-wrap lg:justify-center p-0">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full lg:w-1/2 flex justify-block">
            <span className="mt-auto text-sm">Copyright &#169; 2024 by Anjana - All Rights Reserved.</span>
            <span className="m-auto text-2xl text-neutral-350">Anjana Edirisinghe<br/>Kadawatha, Sri Lanka<br/>anjanaape@gmail.com</span>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full max-w-2xl lg:w-1/2 p-5 "
        >
            <div className=" lg:w-1/2 text-center m-auto py-8 rounded-2xl border-4 border-gray-400">
            <form action="https://formsubmit.co/anjanaape2002@gmail.com" method="POST">
            <input className="mb-4 bg-neutral-900 border-2 border-purple-400 rounded-2xl p-2" type="text" name="name" required placeholder="Name" />
            <br />
            <input className="mb-4 bg-neutral-900 border-2 border-purple-400 rounded-2xl p-2" type="email" name="email" required placeholder="Email" />
            <br />
            <textarea className="mb-4 bg-neutral-900 border-2  border-purple-400 rounded-2xl p-2" placeholder="Message"></textarea>
            <br />
            <motion.button whileHover={{ scale: 1.2 }} className="border-2 border-purple-400  bg-purple-600 px-3 py-1 rounded-3xl" type="submit">Submit</motion.button>
          </form>
            </div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;

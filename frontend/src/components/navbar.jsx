import '../index.css'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"


const Navbar=()=>{

    return (
        <nav className="mb-20 flex items-center justify-between py-2">
            <div className="flex flex-shrink-0 items-center">
                <span id="logo">ED</span>
            </div>
            <div className="m-7 flex items-center justify-center gap-5 text-2xl">
                <FaLinkedin/>
                <FaGithub/>
                <FaSquareXTwitter/>
                <FaInstagram/>
            </div>
        </nav>
    )
}

export default Navbar
import logo from "../assets/ThomasLogo.jpeg"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";


const Navbar = () => {
   return <nav className="mb-20 flex items-center justify-between py-6">
       <div className="flex flex-shrink-0 items-center">
           <img className="mx-2 w-15" src={logo} alt="logo" />
       </div>
       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
           <a href="https://linkedin.com/in/t-mcbride/" target="_blank" rel="noopener noreferer">
               <FaLinkedin />
           </a>
           <a href="https://github.com/ThomasMMcBride" target="_blank" rel="noopener noreferer">
               <FaGithub />
           </a>
           <a href="https://www.instagram.com/thomasmondero/" target="_blank" rel="noopener noreferer">
               <FaInstagram />
           </a>
           <a href="https://x.com/thomasmondero" target="_blank" rel="noopener noreferer">
               <FaSquareXTwitter />
           </a>
       </div>
   </nav>;
};


export default Navbar;
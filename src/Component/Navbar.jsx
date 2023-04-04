import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
   const navref = useRef()

   const showNavbar = () =>{
        navref.current.classList.toggle("responsive_nav")
   }
    return (
        <header>
            <img src="/images/logo.svg" alt="hero-logo" className="img"/>
            <nav ref={navref}>
                <a href="/#">Home</a>
                <a href="/#">New</a>
                <a href="/#">Popular</a>
                <a href="/#">Trending</a>
                <a href="/#">Categories</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}
 
export default Navbar;
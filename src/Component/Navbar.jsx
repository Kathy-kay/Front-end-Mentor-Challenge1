import { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    const [mobile, setMobile] = useState(false)

    return (
        <header>
            <nav>
               <img src="/images/logo.svg" alt="hero-logo" className="img"/>
               <ul className="navigation">
                <li><a href="/#">Home</a></li>
                <li><a href="/#">New</a></li>
                <li><a href="/#">Popular</a></li>
                <li><a href="/#">Trending</a></li>
                <li><a href="/#">Categories</a></li>
               </ul>
               <div className="icon">
                    <button className="nav-mobile-icon" onClick={() => setMobile(m => !m)}>
                            {mobile? <FaTimes /> : <FaBars />}
                    </button>
               </div>
               <ul className={`mobile-nav ${mobile? 'active': null}`}>
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#">New</a></li>
                    <li><a href="/#">Popular</a></li>
                    <li><a href="/#">Trending</a></li>
                    <li><a href="/#">Categories</a></li>
                </ul>
            </nav>
           
           
        </header>
    );
}
 
export default Navbar;
import  React from 'react';
import "./navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
<>
<nav>
        <div className="container">
             <div className="space-between">
                <div className="logo">
                     <img src="./images/logo.png" alt="logo.png"/>

                     </div>
             <div className="menu">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to='/feature'>Features</Link></li>
                    <li><Link to='/price'>Pricing</Link></li>
                    <li><Link to='/privacy'>FAQ</Link></li>
                    <li><Link to='/blog'>Blog's</Link></li>
                </ul>
                <div className="button">
                    <Link to='/contuct-us'>Contact us</Link>
                </div>
             </div>
             </div>
        </div>
    </nav>
</>
    )
}


export default Navbar;
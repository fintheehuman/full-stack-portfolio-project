import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo-luca-onniboni-4v9Kk01mEbY-unsplash-2.jpg"


const Navbar = () => {
    return (
        <div className="navbar">
          <div className="container">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="links">
                <Link className="link" to="/?cat=art"> 
                <h6> ART </h6> 
                </Link>
                <Link className="link" to="/?cat=tech"> 
                <h6> TECH </h6> 
                </Link>
                <Link className="link" to="/?cat=cinema"> 
                <h6> CINEMA </h6> 
                </Link>
                <Link className="link" to="/?cat=food"> 
                <h6> FOOD </h6> 
                </Link>
                <Link className="link" to="/?cat=personal"> 
                <h6> GENERAL </h6> 
                </Link>
                <span>John</span>
                <Link className="logout-link" to="/login"> 
                <span>Logout</span>
                </Link>
                <span className="write">
                    <Link className="write" to="/write">Write</Link>
                </span>
            </div>
          </div>
         </div>
    )
}

export default Navbar;
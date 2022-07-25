import { NavLink } from 'react-router-dom'
import React from 'react';


function Header() {
    return (
        <div className="header">
            <nav className="navigation">
                <NavLink className="navbar" to={"/"}>About Us</NavLink>
                <NavLink className="navbar" to={"/Random"}>Random Recipe Generator!</NavLink>
                <NavLink className="navbar" to={"/SignUpPage"}>Sign Up Here!</NavLink>
            </nav>
        </div>
    )
}

export default Header;
import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav className="navbar navbar-dark bg-dark" >
            <h2 className="navbar-brand">Google Books</h2>
            <ul className="nav-bar nav mr-auto">
                <li className="nav-item">
                    <Link to="/">Search</Link>
                </li>
                <li className="nav-item">
                    <Link to="/saved">Saved</Link>
                </li>            
            </ul>
            
        </nav>
    );
}

export default Nav;
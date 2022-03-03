import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbox">
            <div className="leftside">
                {/* Se podria usar un logo x ej la navecita*/}
                <h2>GeekSpot</h2>
            </div>
            <div className="rightside">
                <Link to={'signup'} className='navlinks'>Sign up</Link>
                <Link to={'login'} className='navlinks'>Log in</Link>
            </div>
        </div>
    )
}
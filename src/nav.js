import React from "react";
import "./nav.css";
function Nav() {
    return (
        <div className="navbar">
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>Work</li>
                    <li>            <div className="circle">
                <img src="./Logo.png" alt="" style={{
                    width: "2rem",
                    height: "2rem",
                }} />
            </div></li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

        </div>
    );
}


export default Nav;
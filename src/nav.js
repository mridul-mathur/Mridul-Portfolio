import React,{useContext} from "react";
import "./nav.css";
import Contextor from "./context";

let content = ["Mridul Mathur", "Portfolio 2023"];

function Nav() {

    const {contact, setContact} = useContext(Contextor);
    return (
        <div className="navbar">
                    <div className="hname">
            <p> {content[0]} </p>
        </div>
        <div className="hportfolio">
            <p> {content[1]} </p>
        </div>
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>Work</li>
                    <li>
                        <div className="circle">
                            <img src="./Logo.webp" alt="" style={{
                                width: "2rem",
                                height: "2rem",
                            }} />
                        </div></li>
                    <li>About</li>
                    <li onClick={(e)=>{setContact(!contact)}} style={{ cursor: "pointer",}}>Contact</li>
                </ul>
            </div>
        </div>
    );
}


export default Nav;
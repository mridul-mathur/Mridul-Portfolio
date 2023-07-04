import React,{useState , useContext} from "react";
import "./nav.css";
import Contextor from "./context";

function Nav() {

    const {contact, setContact} = useContext(Contextor);
    return (
        <div className="navbar">
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>Work</li>
                    <li>
                        <div className="circle">
                            <img src="./Logo.png" alt="" style={{
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
import "./about.css";
import React from "react";

let content = ["Mridul Mathur", "UI/UX Designer and Frontend Web Developer currently based in India.", "this.skills", "UI/UX Designing", " Java", " Python", " C/C++", " HTML/CSS ", "JavaScript", " React js", "I am Mridul Mathur based in Jaipur, India. I’m a self-taught UI/UX designer with over 10+ projects in the last 6 months and 3 listed web applications.", "I'm an undergrad student pursuing a Computer Science degree, with a strong focus on Cloud Computing through my studies of Amazon Web Services. I'm also actively gaining practical experience in UI/UX design and web development. Design is fundamental to my work, as I believe it not only captivates audiences but also improves usability. Collaboration is essential to my approach, as I enjoy closely working with clients and team members to understand their goals and deliver projects that exceed expectations and push boundaries.", "aws", "figma", "blender", "inkscape", "github", "protopie"];

function About() {
    return (
        <div className="apage">
            <div className="aparent1">
                <div className="aheading">
                    <p> {content[0]} </p>
                </div>
                <div className="asubheading">
                    <p> {content[1]} </p>
                </div>
            </div>
            <div className="aparent2">
                <div className="askills">
                    <div className="asubheading">
                        <p> {content[2]} </p>
                    </div>
                    <div className="askillslist">
                        <ul>
                            <li> {content[3]} </li>
                            <li> {content[4]} </li>
                            <li> {content[5]} </li>
                            <li> {content[6]} </li>
                            <li> {content[7]} </li>
                            <li> {content[8]} </li>
                            <li> {content[9]} </li>
                        </ul>
                    </div>
                </div>
                <div className="apara">
                    <div className="apara1">
                        <p> {content[10]} </p>
                    </div>
                    <div className="apara2">
                        <p> {content[11]} </p>
                    </div>
                </div>
            </div>
            <div className="aparent3">
                <div className="atools">
                    <ul>
                        <li> {content[12]} </li>
                        <li> {content[13]} </li>
                        <li> {content[14]} </li>
                        <li> {content[15]} </li>
                        <li> {content[16]} </li>
                        <li> {content[17]} </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
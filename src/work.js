import "./work.css";
import React from 'react';

let content = ["Mridul Mathur", "Portfolio 2023", "Proof of work", "Get an insight with some of my best featured projects:", "By placing design as the focal point, I aim to craft experiences that transcend mere aesthetics. I strive to create visually captivating compositions, employing harmonious color schemes, exquisite typography, and thought-provoking imagery. These elements work in unison to captivate the viewer's attention and leave a lasting impression.", "Open to work as:", "Freelance", "Internship", "Part-time job", "this.process", "24 : 00 : 00", "Study", "Understanding the product and its design requirements is my priority. This entails thorough research and gathering insights from end users. By doing so, I gain a deep understanding of their needs and preferences, which helps me identify the essential features for success.", "Wireframe", "Next, I create wireframes and define interactions using a simple framework, drawing inspiration from diverse online sources. Developing a basic layout prototype allows me to gain a comprehensive understanding of the required interactions.", "Design", "Finally, the design process begins, taking into account the planned interactions and features. The main emphasis is on creating a seamless user experience throughout the design. Eventually, a high-fidelity design is produced."];

function Work() {
    return (
        <div className="wpage">
            <div className="wparent1">
                <div className="wheading">
                    <p> {content[2]} </p>
                </div>
                <div className="wsubheading">
                    <p> {content[3]} </p>
                </div>
            </div>
            <div className="wparent2">
                <div className="wcontent">
                    <div className="wpara1">
                        <p> {content[4]} </p>
                    </div>
                    <div className="wpara2">
                        <p> {content[5]} </p>
                        <ul>
                            <li>{content[6]}</li>
                            <li>{content[7]}</li>
                            <li>{content[8]}</li>
                        </ul>
                    </div>
                </div>
                <div className="wcase">
                </div>
            </div>
        </div>
    );
}

export default Work;
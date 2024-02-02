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
                <div className="wcase">
                    <a href="https://www.figma.com/proto/Bz9YS9MD3iTeqBZ6734aVy/A-photographer's-Portfolio?page-id=0%3A1&type=design&node-id=4-2&viewport=315%2C268%2C0.14&t=SvXfZfnINoRLrAON-1&scaling=scale-down-width&starting-point-node-id=4%3A2&mode=design" target="_blank" rel="noreferrer" >
                    <img className="image" alt="case" src={require('./8.webp')}>
                    </img>
                    </a>
                </div>
                <div className="wcase">
                    <a href="https://www.figma.com/proto/bhMrkVCEyaFmMOWfhnLqSN/DAPS-Landing-Page?page-id=0%3A1&type=design&node-id=2-3&viewport=254%2C292%2C0.04&t=nDoL2lM1XRsxsEm6-1&scaling=scale-down-width&starting-point-node-id=2%3A3&mode=design" target="_blank" rel="noreferrer">
                    <img className="image" alt="case" src={require('./9.webp')}>
                    </img>
                    </a>
                </div>
                <div className="wcase">
                    <a href="https://www.figma.com/proto/iLySkhJ0r2iiMvoRk51Jr4/Classic-Shopping?page-id=0%3A1&type=design&node-id=1-2&viewport=337%2C298%2C0.26&t=9pdVebOYtOKY8ght-1&scaling=scale-down-width&starting-point-node-id=1%3A2&mode=design" target="_blank" rel="noreferrer">
                    <img className="image" alt="case" src={require('./3.webp')}>
                    </img>
                    </a>
                </div>
                <div className="wcase">
                    <a href="https://www.figma.com/proto/8ZBCQMOS8xbIX4V4D6HMPI/Educash?page-id=0%3A1&type=design&node-id=1-16&viewport=1173%2C573%2C0.2&t=DtHMIG1lquZO7Qwa-1&scaling=scale-down-width&starting-point-node-id=1%3A16&mode=design" target="_blank" rel="noreferrer">
                    <img className="image" alt="case" src={require('./1.webp')}>
                    </img>
                    </a>
                </div>
                <div className="wcase">
                    <a href="https://www.figma.com/proto/3bGw6LsrCIJL6i4VcY5U8n/S%40!OMYO?page-id=0%3A1&type=design&node-id=574-218&viewport=-1052%2C65%2C0.09&t=D2kn5VcM1xYuY59g-1&scaling=scale-down-width&mode=design" target="_blank" rel="noreferrer">
                    <img className="image" alt="case" src={require('./2.webp')}>
                    </img>
                    </a>
                </div>
                <div className="wcase">
                    <a href="https://www.figma.com/proto/9cU3cr4JsaTyQev37kPGCP/JU-Verse?page-id=0%3A1&type=design&node-id=156-251&viewport=395%2C154%2C0.28&t=2H0Djkb78WksPXKC-1&scaling=min-zoom&starting-point-node-id=156%3A251&mode=design" target="_blank" rel="noreferrer">
                    <img className="image" alt="case" src={require('./4.webp')}>
                    </img>
                    </a>
                </div>
                <div className="wcase">
                    <a href="https://www.figma.com/proto/A1oz5exN3fRnGv8PEHMXKH/Solana-Ecosystem?page-id=0%3A1&type=design&node-id=291-374&viewport=1646%2C2092%2C0.23&t=ahSkWlY2OxYDNmYL-1&scaling=scale-down-width&starting-point-node-id=291%3A374&mode=design" target="_blank" rel="noreferrer">
                    <img className="image" alt="case" src={require('./5.webp')}>
                    </img>
                    </a>
                </div>
                <div className="wcase">
                    <a href="https://www.figma.com/proto/Zp9XrPhj6PiRjetKsOozeU/Inspiration%5C?page-id=0%3A1&type=design&node-id=1-2&viewport=282%2C25%2C0.13&t=QavjqgpNhPvdVb6h-1&scaling=min-zoom&starting-point-node-id=1%3A2&mode=design" target="_blank" rel="noreferrer">
                    <img className="image" alt="case" src={require('./6.webp')}>
                    </img>
                    </a>
                </div>
            </div>
            <div className="wparent3">
                <div className="wprocessheading">
                    <p> {content[9]} </p>
                </div>
                <div className="wprocess">
                    <div className="wprocesscontent">
                        <div className="wprocesscontenthead">
                            <p> {content[11]} </p>
                        </div>
                        <div className="wprocesspara">
                            <p> {content[12]} </p>
                        </div>
                    </div>
                    <div className="wprocesscontent">
                        <div className="wprocesscontenthead">
                            <p> {content[13]} </p>
                        </div>
                        <div className="wprocesspara">
                            <p> {content[14]} </p>
                        </div>
                    </div>
                    <div className="wprocesscontent">
                        <div className="wprocesscontenthead">
                            <p> {content[15]} </p>
                        </div>
                        <div className="wprocesspara">
                            <p> {content[16]} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
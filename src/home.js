import './home.css';
import React from 'react';

let content = ["Hey! I'm Mridul Mathur", "Over 10 personal projects, along with contribution to 3+ communities, and a year long experience in UI/UX & Web development.", "Build stunning visual aspects for your ideas in this growing digital world.", "26 . 05 . 2003", "Mridul Mathur", "Portfolio 2023"];

function Home() {
  return (
    <div className="hpage">
        <div className="hheading">
            <p> {content[0]} </p>
        </div>
        <div className='hparent'>
        <div className="hpara">
            <div className='hcontent1'>
                <p> {content[1]} </p>
            </div>
            <div className='hcontent2'>
                <p> {content[3]} </p>
            </div>
        </div>
        <div className="hsubheading">
            <p> {content[2]} </p>
        </div>
        </div>
    </div>
  );
}


export default Home;
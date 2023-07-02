import './home.css';
import React from 'react';

let content = ["Experienced In Learning" , "over 10 personal projects, along with contribution to 3+ communities, and a year long experience in UI/UX & Web development." , "Build stunning visual aspects for your ideas in this growing digital world." , "26 . 05 . 2023" , "Mridul Mathur" , "Portfolio 2023"]
function Home() {
  return (
    <div className="page">
      <div className= "heading">
        <h1> {content[0]} </h1>
      </div>
      <div className= "subheading">
        <h2> {content[2]} </h2>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home';
import reportWebVitals from './reportWebVitals';
import './home.css'
import './work.css'
import Work from './work';
import About from './about';
import './about.css';
import './contact.css';
import Contact from './contact';
import './nav.css';
import Nav from './nav';
import barba from '@barba/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Home />
    <Work />
    <About />
    <Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
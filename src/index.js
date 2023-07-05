import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contact from './contact';
import Nav from './nav';
import App from './App';
import States from './contextstate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <States>
    <React.StrictMode>
      <Nav />
      <App/>
      <Contact />
    </React.StrictMode>
  </States>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
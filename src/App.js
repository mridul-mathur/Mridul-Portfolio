import Home from './home';
import Work from './work';
import About from './about';
import React from 'react'
import './App.css'

function App() {
  return (
    <div className='scroll-container'>
      <section className='sec1'>
        <Home/>
      </section>
      <section className='sec2'>
      <Work />
      </section>
      <section className='sec3'>
      <About />
      </section>
    </div>
  )
}

export default App
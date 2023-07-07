import Home from './home';
import Work from './work';
import About from './about';
import React from 'react'
import './App.css'
import Divider from './divider'

function App() {
  return (
    <div className='scroll-container'>
      <section className='sec1'>
        <Home/>
        <Divider/>
      </section>
      <section className='sec2'>
      <Work />
      <Divider/>
      </section>
      <section className='sec3'>
      <About />
      </section>
    </div>
  )
}

export default App
import React from 'react'
import {Article, Brand, CTA, Feature, Navbar} from './components'
import {Footer,Header,Blog, Possibility,Features, WhatGPT3} from './containers'
import './App.css'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
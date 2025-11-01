import React from 'react'
import HeroSection from './components/Herosection'
import Scroll from './components/Scroll'
import './App.css'
import BentoGrid from './components/Bento'
import Scrolllogo from './components/Scrolllogo'
import Footer from './components/footer'
import FooterWithLogos from './components/footer'

const App = () => {
  return (
    <div className="app-container">
      <HeroSection/> 
      <Scroll/>
      <BentoGrid/>
     <FooterWithLogos/>
    </div>
  )
}

export default App
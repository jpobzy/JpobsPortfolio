import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/footer/footer'
import Aurora from './components/aurora/Aurora'
import Home from './pages/Home.jsx'
import DevU from './pages/DevU'
import { Routes, Route} from 'react-router-dom';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import { BrowserRouter } from 'react-router-dom'
import FlipArena from './pages/FlipArena';
import TuneRip from './pages/TuneRip';
// import Header from './components/header/Header'

;
import { useEffect } from 'react';
function App() {
    useEffect(() => {
      if (window.location.hash === '#socials') {
        const scroll = document.getElementById('socials');
        scroll?.scrollIntoView({ behavior: 'smooth' });
      }
    }, []);

  return (
    <>
      <div>

      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
        />
      </div>


      <BrowserRouter>
        <ScrollToTop/> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/projects/devu" element={<DevU />} />
        <Route path="/projects/fliparena" element={<FlipArena />} />
        <Route path='/projects/tunerip' element={<TuneRip />}/>
      </Routes>
    </BrowserRouter>

      <Footer/>

      <div style={{ transform: "scaleY(-1)" }} className="pointer-events-none position: relative;">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
    </div>
    </>
  )
}

export default App

import Footer from './footer/footer'
import Aurora from './aurora/Aurora'
import Home from '../pages/Home.jsx'
// import DevU from './pages/DevU'
// import ScrollToTop from './components/scrollToTop/ScrollToTop';
// import FlipArena from './pages/FlipArena';
// import TuneRip from './pages/TuneRip';
// import { Suspense, lazy } from 'react'
// import { BrowserRouter,Router, Routes, Route } from 'react-router-dom';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// const Home = lazy(() => import('./pages/Home'))
// const DevU = lazy(() => import('./pages/DevU'))
// const FlipArena = lazy(() => import('./pages/FlipArena'))
// const TuneRip = lazy(() => import('./pages/TuneRip'))
// const Footer = lazy(() => import('./components/footer/footer'))
// const Aurora = lazy(() => import('./components/aurora/Aurora'))
// const ScrollToTop = lazy(() => import('./components/scrollToTop/ScrollToTop'))

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
          <Home />
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

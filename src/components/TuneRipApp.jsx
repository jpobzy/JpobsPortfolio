import Footer from './footer/footer'
import Aurora from './aurora/Aurora'
import TuneRip from '../pages/TuneRip';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

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
          <TuneRip />
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

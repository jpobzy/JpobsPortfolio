import Aurora from './components/background/Aurora'
import Home from './pages/Home'
import DevU from './pages/DevU'
import { Routes, Route} from 'react-router-dom';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div>
    
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

    <BrowserRouter>
        <ScrollToTop/> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/projects/devu" element={<DevU />} />
      </Routes>
    </BrowserRouter>
    
    <Footer />


    <div style={{ transform: "scaleY(-1)" }} className="pointer-events-none">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
    </div>
    </div>
  )
}

export default App

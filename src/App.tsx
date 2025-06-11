import Aurora from './components/background/Aurora'
import Home from './pages/Home'
import DevU from './pages/DevU'
import { Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div>
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
    <Routes>
      {/* swap when done */}
      <Route path="/" element={<DevU />} /> 
      <Route path="/projects/devu" element={<Home />} />
    </Routes>
    </div>
  )
}

export default App

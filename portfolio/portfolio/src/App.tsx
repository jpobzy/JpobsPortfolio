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
      <Route path="/" element={<Home />} />
      <Route path="/devu" element={<DevU />} />
    </Routes>
    </div>
  )
}

export default App

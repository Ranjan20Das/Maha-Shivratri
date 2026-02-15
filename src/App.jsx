import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Mantra from "./pages/Mantra"
import Gallery from "./pages/Gallery"

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-950 text-white">

      <Header />
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mantra" element={<Mantra />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>

      <Footer />

    </div>
  )
}

export default App
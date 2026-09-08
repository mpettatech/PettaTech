import Home from "./Home.jsx"
import Sites from "./components/Pages/Sites.jsx"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sites" element={<Sites />} />
      </Routes>
    </div>
  )
}

export default App


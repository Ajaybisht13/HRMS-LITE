import { HashRouter, Routes, Route } from "react-router-dom"
import Employees from "./pages/Employees"
import Attendance from "./pages/Attendance"
import Navbar from "./components/Navbar"
import "./App.css"

function App() {

  return (

    <HashRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Employees />} />

        <Route path="/attendance" element={<Attendance />} />

      </Routes>

    </HashRouter>

  )
}

export default App
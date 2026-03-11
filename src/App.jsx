import { BrowserRouter, Routes, Route } from "react-router-dom"
import Employees from "./pages/Employees"
import Attendance from "./pages/Attendance"
import Navbar from "./components/Navbar"
import "./App.css"

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Employees />} />

        <Route path="/attendance" element={<Attendance />} />

      </Routes>

    </BrowserRouter>

  )
}

export default App